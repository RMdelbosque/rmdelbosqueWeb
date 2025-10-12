import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent implements OnChanges {
  @Input() cell = 0;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

 ngOnChanges(changes: SimpleChanges) {
  if (changes['cell']) {
    const text = this.cell === 0 ? '' : String(this.cell);

    // buscamos el DIV interno (el que tiene las clases Tailwind)
    const container = this.el.nativeElement.querySelector('div');

    // si no existe, salimos por seguridad
    if (!container) return;

    // buscamos o creamos el span interno
    let span = container.querySelector('.cell-content') as HTMLElement | null;
    if (!span) {
      span = this.renderer.createElement('span') as HTMLElement;
      this.renderer.addClass(span, 'cell-content');
      this.renderer.appendChild(container, span);
    }

    // reemplazamos el texto completamente
    this.renderer.setProperty(span, 'textContent', text);
  }
}


  // utilidades para las clases (puedes dejarlas en TS o mover a un helper)
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
    };
    if (value >= 4096) return 'bg-game_base_cell_4096 text-white';
    return classes[value] ?? 'bg-game_base_cell';
  }

  getTextSize(value: number): string {
    if (value < 100) return 'text-5xl';
    if (value < 1000) return 'text-3xl';
    if (value < 10000) return 'text-2xl';
    return 'text-xl';
  }
}
