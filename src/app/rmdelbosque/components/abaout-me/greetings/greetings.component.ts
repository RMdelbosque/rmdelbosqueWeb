import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
})
export class GreetingsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('hero', { static: true }) heroRef!: ElementRef<HTMLElement>;

  private rafId = 0;
  private boundOnScroll = this.onScroll.bind(this);

  ngAfterViewInit(): void {
    // inicializa variable (por si la página ya está cargada)
    this.updateProgress();

    // escucha scroll con passive para rendimiento
    window.addEventListener('scroll', this.boundOnScroll, { passive: true });
    window.addEventListener('resize', this.boundOnScroll, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.boundOnScroll);
    window.removeEventListener('resize', this.boundOnScroll);
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  private onScroll(): void {
    if (this.rafId) return; // throttle con rAF
    this.rafId = requestAnimationFrame(() => {
      this.updateProgress();
      this.rafId = 0;
    });
  }

  private updateProgress(): void {
    const el = this.heroRef.nativeElement;
    const rect = el.getBoundingClientRect();
    const height = rect.height || window.innerHeight;

    // Progreso: 0 cuando el top del hero está en/por debajo del top del viewport,
    // 1 cuando el hero ha subido (su top <= -height) — ajusta fórmula si quieres otro comportamiento.
    let progress = (-rect.top) / height;
    progress = Math.min(Math.max(progress, 0), 1);

    // Si quieres que empiece a animar más tarde (por ejemplo cuando ha salido 20%): divide por factor
    // progress = Math.min(Math.max(( -rect.top - (height*0.2) ) / (height*0.8), 0), 1);

    el.style.setProperty('--progress', String(progress));
  }
}
