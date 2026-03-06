import { Component } from '@angular/core';

@Component({
  selector: 'app-guarantees',
  templateUrl: './guarantees.component.html',
  styleUrls: ['./guarantees.component.scss']
})
export class GuaranteesComponent {
  features = [
    { icon: 'fas fa-check-circle', text: '100% Placement Support for eligible candidates' },
    { icon: 'fas fa-coins', text: '50% Cash Back Guarantee if placement criteria is not fulfilled (*T&C Apply)' },
    { icon: 'fas fa-users', text: 'Small batch size for personal attention' },
    { icon: 'fas fa-industry', text: 'Industry-Focused Practical Training' },
    { icon: 'fas fa-hospital', text: 'Real Hospital Visit for Practical Exposure' },
    { icon: 'fas fa-file-alt', text: 'Interview Preparation & Resume Support' },
    { icon: 'fas fa-compass', text: 'Career Counseling Guidance' }
  ];
}
