import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'About Academy', anchor: '#guarantees' },
    { label: 'Program Curriculum', anchor: '#curriculum' },
    { label: 'Our Faculty', anchor: '#faculty' },
    { label: 'Testimonials', anchor: '#testimonials' },
    { label: 'Why Us', anchor: '#why-academy' },
    { label: 'FAQ', anchor: '#faq' }
  ];

  programLinks = [
    { label: 'Class Details', anchor: '#class-details' },
    { label: 'Placement Support', anchor: '#guarantees' },
    { label: 'Hospital Exposure', anchor: '#why-medical-tourism' },
    { label: 'Apply Now', anchor: '#contact' },
    { label: 'Book Counseling', anchor: '#contact' },
    { label: 'Contact Us', anchor: '#contact' }
  ];

  scrollTo(anchor: string): void {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
