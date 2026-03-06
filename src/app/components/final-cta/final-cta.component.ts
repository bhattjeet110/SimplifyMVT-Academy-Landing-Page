import { Component } from '@angular/core';

@Component({
  selector: 'app-final-cta',
  templateUrl: './final-cta.component.html',
  styleUrls: ['./final-cta.component.scss']
})
export class FinalCtaComponent {
  targetAudience = [
    'Confused about your career path',
    'Planning MBA but unsure about the outcome',
    'Interested in the healthcare industry',
    'Wanting to start your own business',
    'Looking for a rapidly growing industry'
  ];

  highlights = [
    { icon: 'fas fa-map-marker-alt', text: 'Andheri East, Mumbai' },
    { icon: 'fas fa-graduation-cap', text: '10 Sessions' },
    { icon: 'fas fa-briefcase', text: '100% Placement Support' }
  ];

  scrollTo(anchor: string): void {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
