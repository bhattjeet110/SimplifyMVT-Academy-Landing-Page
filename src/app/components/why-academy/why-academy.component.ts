import { Component } from '@angular/core';

@Component({
  selector: 'app-why-academy',
  templateUrl: './why-academy.component.html',
  styleUrls: ['./why-academy.component.scss']
})
export class WhyAcademyComponent {
  reasons = [
    {
      number: '01',
      icon: 'fas fa-tools',
      title: 'Practical Over Theory',
      desc: 'We focus on real-world application, not just classroom lectures. Every session is designed to make you industry-ready.',
      color: 'primary'
    },
    {
      number: '02',
      icon: 'fas fa-hospital-alt',
      title: 'Hospital Exposure',
      desc: 'You understand how international patient departments actually work through live hospital visits.',
      color: 'secondary'
    },
    {
      number: '03',
      icon: 'fas fa-book-medical',
      title: 'Industry-Oriented Curriculum',
      desc: 'Designed according to current healthcare business demands by industry professionals with real experience.',
      color: 'accent'
    },
    {
      number: '04',
      icon: 'fas fa-user-tie',
      title: 'Career-Focused Approach',
      desc: 'Resume building, interview preparation, and full placement support until you land your dream job.',
      color: 'primary'
    },
    {
      number: '05',
      icon: 'fas fa-users',
      title: 'Limited Batch Size',
      desc: 'Personal attention and better learning environment with small, focused batches for each student.',
      color: 'secondary'
    },
    {
      number: '06',
      icon: 'fas fa-map-marker-alt',
      title: 'Located in Andheri East',
      desc: 'Prime business location with access to leading hospitals and Mumbai\'s healthcare hub.',
      color: 'accent'
    }
  ];
}
