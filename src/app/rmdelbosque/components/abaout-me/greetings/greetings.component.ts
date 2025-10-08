import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css'],
})
// export class GreetingsComponent implements AfterViewInit, OnDestroy {
export class GreetingsComponent {
  // @ViewChild('hero', { static: true }) heroRef!: ElementRef<HTMLElement>;

  // private rafId = 0;
  // private boundOnScroll = this.onScroll.bind(this);

  // ngAfterViewInit(): void {
  //   this.updateProgress();

  //   window.addEventListener('scroll', this.boundOnScroll, { passive: true });
  //   window.addEventListener('resize', this.boundOnScroll, { passive: true });
  // }

  // ngOnDestroy(): void {
  //   window.removeEventListener('scroll', this.boundOnScroll);
  //   window.removeEventListener('resize', this.boundOnScroll);
  //   if (this.rafId) cancelAnimationFrame(this.rafId);
  // }

  // private onScroll(): void {
  //   if (this.rafId) return;
  //   this.rafId = requestAnimationFrame(() => {
  //     this.updateProgress();
  //     this.rafId = 0;
  //   });
  // }

  // private updateProgress(): void {
  //   const el = this.heroRef.nativeElement;
  //   const rect = el.getBoundingClientRect();
  //   const height = rect.height || window.innerHeight;

  //   let progress = (-rect.top) / height;
  //   progress = Math.min(Math.max(progress, 0), 1);

  //   el.style.setProperty('--progress', String(progress));
  // }
}
