import { Component } from '@angular/core';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.scss']
})
export class ClassDetailsComponent {
  details = [
    { icon: 'fas fa-chalkboard-teacher', label: 'Mode', value: 'Offline Classroom Training', highlight: true },
    { icon: 'fas fa-calendar-alt', label: 'Day', value: 'Every Saturday (Once a week)', highlight: false },
    { icon: 'fas fa-clock', label: 'Timing', value: '11 AM – 2 PM', highlight: false },
    { icon: 'fas fa-layer-group', label: 'Sessions', value: '10 Power-Packed Sessions', highlight: true },
    { icon: 'fas fa-hourglass-half', label: 'Duration', value: '3 Months', highlight: false },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Andheri East, Mumbai', highlight: false }
  ];

  scrollTo(anchor: string): void {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
