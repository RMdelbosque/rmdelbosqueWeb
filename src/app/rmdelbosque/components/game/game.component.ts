import { Component, HostListener } from '@angular/core';
import { GameOverComponent } from "./game-over/game-over.component";
import { CommonModule } from '@angular/common';
import { CellComponent } from "./cell/cell.component";

@Component({
  selector: 'app-game',
  imports: [GameOverComponent, CommonModule, CellComponent],
  templateUrl: './game.component.html'
})
export class GameComponent {
  grid: number[][] = [];
  score = 0;
  bestScore = 0;

  gameOver = false;
  gameWon = false;
  continuePlaying = false;

  touchStartX = 0;
  touchStartY = 0;
  touchEndX = 0;
  touchEndY = 0;

  ngOnInit() {
    const savedBest = localStorage.getItem('bestScore');
    this.bestScore = savedBest ? parseInt(savedBest, 10) : 0;
    this.resetGame();
  }

  resetGame() {
    this.grid = Array.from({ length: 4 }, () => Array(4).fill(0));
    this.score = 0;
    this.gameOver = false;
    this.gameWon = false;
    this.continuePlaying = false;

    this.addRandomTile();
    this.addRandomTile();
  }

  addRandomTile() {
    const emptyCells: [number, number][] = [];

    this.grid.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === 0) emptyCells.push([i, j]);
      });
    });

    if (emptyCells.length > 0) {
      const [i, j] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      this.grid[i][j] = Math.random() < 0.9 ? 2 : 4;
      this.grid = this.grid.map(row => [...row]);
    }

    this.checkGameState();
  }

  checkGameState() {
    if (this.gameWon && !this.continuePlaying) return;

    if (!this.continuePlaying && this.grid.flat().includes(2048)) {
      this.gameOver = true;
      return;
    }

    if (this.grid.some(row => row.includes(0))) return;

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const current = this.grid[i][j];
        if (
          (i < 3 && this.grid[i + 1][j] === current) ||
          (j < 3 && this.grid[i][j + 1] === current)
        ) {
          return;
        }
      }
    }

    this.gameOver = true;
  }

  continueGame() {
    this.continuePlaying = true;
    this.gameWon = false;
  }

  move(direction: 'up' | 'down' | 'left' | 'right') {
    if (this.gameOver) return;

    let moved = false;

    const mergeRow = (row: number[]) => {
      const filtered = row.filter(num => num !== 0);
      for (let i = 0; i < filtered.length - 1; i++) {
        if (filtered[i] === filtered[i + 1]) {
          filtered[i] *= 2;
          this.score += filtered[i];
          if (this.score > this.bestScore) {
            this.bestScore = this.score;
            localStorage.setItem('bestScore', this.bestScore.toString());
          }
          filtered[i + 1] = 0;
          if (filtered[i] === 2048 && !this.continuePlaying) this.gameWon = true;
        }
      }
      const newRow = filtered.filter(num => num !== 0);
      while (newRow.length < 4) newRow.push(0);
      return newRow;
    };

    const moveLeft = () => {
      const newGrid = this.grid.map(row => mergeRow(row));
      if (JSON.stringify(newGrid) !== JSON.stringify(this.grid)) {
        this.grid = newGrid.map(row => [...row]);
        moved = true;
      }
    };

    switch (direction) {
      case 'left':
        moveLeft();
        break;
      case 'right':
        this.grid = this.grid.map(row => row.reverse());
        moveLeft();
        this.grid = this.grid.map(row => row.reverse());
        break;
      case 'up':
        this.grid = this.transpose(this.grid);
        moveLeft();
        this.grid = this.transpose(this.grid);
        break;
      case 'down':
        this.grid = this.transpose(this.grid).map(row => row.reverse());
        moveLeft();
        this.grid = this.transpose(this.grid.map(row => row.reverse()));
        break;
    }

    if (moved) this.addRandomTile();
  }

  transpose(matrix: number[][]): number[][] {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  }

  handleGesture() {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;

    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (Math.max(absX, absY) < 40) return;

    if (absX > absY) {
      if (deltaX > 0) this.move('right');
      else this.move('left');
    } else {
      if (deltaY > 0) this.move('down');
      else this.move('up');
    }
  }

  // 🚫 Evita el scroll con las teclas
  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (keys.includes(event.key)) {
      event.preventDefault(); // <- 🔥 esto evita que la pantalla se mueva
      switch (event.key) {
        case 'ArrowUp': this.move('up'); break;
        case 'ArrowDown': this.move('down'); break;
        case 'ArrowLeft': this.move('left'); break;
        case 'ArrowRight': this.move('right'); break;
      }
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].clientX;
    this.touchEndY = event.changedTouches[0].clientY;
    this.handleGesture();
  }
}
