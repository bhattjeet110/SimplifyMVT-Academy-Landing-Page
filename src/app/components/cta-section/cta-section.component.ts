import { Component } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.scss']
})
export class CtaSectionComponent {
  highlights = [
    { icon: 'fas fa-graduation-cap', text: '10 Sessions' },
    { icon: 'fas fa-user-friends', text: 'Offline Personal Attention' },
    { icon: 'fas fa-hospital', text: 'Practical + Hospital Exposure' },
    { icon: 'fas fa-briefcase', text: 'Placement Support' }
  ];

  scrollTo(anchor: string): void {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
