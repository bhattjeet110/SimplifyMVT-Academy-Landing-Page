import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  stats = [
    { value: '100%', label: 'Placement Support' },
    { value: '50%', label: 'Cash Back Guarantee' },
    { value: '10', label: 'Power-Packed Sessions' },
    { value: '3', label: 'Months Duration' }
  ];

  scrollToSection(anchor: string): void {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
