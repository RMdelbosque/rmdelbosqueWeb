import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cell',
  imports: [CommonModule],
  templateUrl: './cell.component.html'
})
export class CellComponent {
  public cell = input.required<number>();

  //cogemos la clase para el color de la celda según su valor.
  getCellClass(value: number): string {
    const classes: Record<number, string> = {
      0: 'bg-game_base_cell',
      2: 'bg-game_base_cell_2',
      4: 'bg-game_base_cell_4',
      8: 'bg-game_base_cell_8',
      16: 'bg-game_base_cell_16',
      32: 'bg-game_base_cell_32',
      64: 'bg-game_base_cell_64',
      128: 'bg-game_base_cell_128',
      256: 'bg-game_base_cell_256',
      512: 'bg-game_base_cell_512',
      1024: 'bg-game_base_cell_1024',
      2048: 'bg-game_base_cell_2048',
      4096: 'bg-game_base_cell_4096 text-white',
      8192: 'bg-game_base_cell_8192 text-white',
    };

    if (value >= 8192) return 'bg-game_base_cell_8192 text-white';

    return classes[value] || 'bg-game_base_cell_';
  }

  // Ajusta el tamaño del texto según el valor
  getTextSize(value: number): string {
    if (value < 100) return 'text-5xl';
    if (value < 1000) return 'text-3xl';
    if (value < 10000) return 'text-2xl';
    return 'text-xl';
  }

}
