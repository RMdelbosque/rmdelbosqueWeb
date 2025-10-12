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

    //reseteamos y añadimos 2 números random para comenzar.
    this.addRandomTile();
    this.addRandomTile();
  }

  addRandomTile() {
    const emptyCells: [number, number][] = [];

    //Buscamos celdas vacías
    this.grid.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === 0) emptyCells.push([i, j]);
      });
    });

    //Si quedan celdas vacías, añadimos dos numeros random
    if (emptyCells.length > 0) {
      const [i, j] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      this.grid[i][j] = Math.random() < 0.9 ? 2 : 4;
      this.grid = this.grid.map(row => [...row]);
    }

    // Revisamos si ha ganado o perdido.
    this.checkGameState();
  }

  checkGameState() {
    if (this.gameWon && !this.continuePlaying) return;

    //si hay 2048 y no hemos elegido continuar => ganamos
    if (!this.continuePlaying && this.grid.flat().includes(2024)) {
      this.gameOver = true;
      return;
    }

    // Si hay celdas libres, sigue jugando
    if (this.grid.some(row => row.includes(0))) return;

    //Comprobamos si hay movimientos posibles
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j > 4; j++) {
        const current = this.grid[i][j];
        if (
          (i < 3 && this.grid[i + 1][j] === current) ||
          (j < 3 && this.grid[i][j + 1] === current)
        ) {
          return;
        }
      }
    }

    // Si llegamos a esta linea, es que no hay movimientos posibles
    this.gameOver = true;
  }

  continueGame() {
    this.continuePlaying = true;
    this.gameWon = false;
  }


  move(direction: 'up' | 'down' | 'left' | 'right') {
    if (this.gameOver) return; // Si perdió, no puede mover

    let moved = false;

    // Procesamos una fila del tablero, realizando el movimiento
    const mergeRow = (row: number[]) => {
      // Eliminamos los ceros de las filas. Ejemplo: [2, 0, 2, 4] => [2, 2, 4].
      const filtered = row.filter(num => num !== 0);
      // Si al recorrer la fila dos fichas consecutivas son iguales, se combinan. Ejemplo: [2, 2, 8] => [4, 8, 0]
      for (let i = 0; i < filtered.length - 1; i++) {
        if (filtered[i] === filtered[i + 1]) {
          filtered[i] *= 2;
          //Actualizamos puntuación y guardamos
          this.score += filtered[i];
          if (this.score > this.bestScore) {
            this.bestScore = this.score;
            localStorage.setItem('bestScore', this.bestScore.toString());
          }

          filtered[i + 1] = 0;
          // Si llegamos a 2048 ganamos, excepto si el jugador eligió seguir
          if (filtered[i] === 2048 && !this.continuePlaying) this.gameWon = true;
        }
      }
      //Borramos los ceros que quedaron y rellenamos con 0 para tener 4 columnas
      const newRow = filtered.filter(num => num !== 0);
      while (newRow.length < 4) newRow.push(0);
      return newRow;
    };

    //Solo samos mover lateralmente, por lo que para los movimientos verticales, rotamos el grid.
    // const rotateGrid = () => {
    //   this.grid = this.grid[0].map((_, colIndex) => this.grid.map(row => row[colIndex]).reverse());
    // };

    const transposeGrid = () => {
      this.grid = this.grid[0].map((_, colIndex) =>
        this.grid.map(row => row[colIndex])
      );
    };



    //Revisamos si se movió alguna ficha
    const moveLeft = () => {
      const newGrid = this.grid.map(row => mergeRow(row));
      if (JSON.stringify(newGrid) !== JSON.stringify(this.grid)) {
        // 👉 Nueva referencia profunda para activar Angular Change Detection
        this.grid = newGrid.map(row => [...row]);
        moved = true;
      }
    };

    //Movimientos según la dirección
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
        this.grid = this.transpose(this.grid); // trasponer
        moveLeft();
        this.grid = this.transpose(this.grid); // deshacer trasposición
        break;
      case 'down':
        this.grid = this.transpose(this.grid).map(row => row.reverse());
        moveLeft();
        this.grid = this.transpose(this.grid.map(row => row.reverse()));
        break;
    }

    //Si se movió alguna ficha, añadimos una nueva
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

    // Evitar falsos toques pequeños (por ejemplo, cuando haces tap)
    if (Math.max(absX, absY) < 40) return;

    if (absX > absY) {
      // Movimiento horizontal
      if (deltaX > 0) {
        this.move('right');
      } else {
        this.move('left');
      }
    } else {
      // Movimiento vertical
      if (deltaY > 0) {
        this.move('down');
      } else {
        this.move('up');
      }
    }
  }

  // Detectamos que tecla se ha pulsado y mandamos el movimiento up, down, left o rigth a this.move()
  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp': this.move('up'); break;
      case 'ArrowDown': this.move('down'); break;
      case 'ArrowLeft': this.move('left'); break;
      case 'ArrowRight': this.move('right'); break;
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
