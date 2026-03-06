import { Component } from '@angular/core';

@Component({
  selector: 'app-industry-growth',
  templateUrl: './industry-growth.component.html',
  styleUrls: ['./industry-growth.component.scss']
})
export class IndustryGrowthComponent {
  initiatives = [
    { icon: 'fas fa-heartbeat', text: 'Heal in India Initiative to promote India as a global healthcare destination' },
    { icon: 'fas fa-passport', text: 'E-Medical Visa & E-Medical Attendant Visa facilities for international patients' },
    { icon: 'fas fa-landmark', text: 'Promotion under the Ministry of Tourism' },
    { icon: 'fas fa-clinic-medical', text: 'Support from the Ministry of Health & Family Welfare' },
    { icon: 'fas fa-flag', text: 'Promotion through "Incredible India" campaign' }
  ];

  highlights = [
    { value: 'Top', sub: 'Global Destination', desc: 'India is among the top global destinations for medical tourism', icon: 'fas fa-globe' },
    { value: '60-80%', sub: 'Cost Savings', desc: 'Lower treatment costs compared to Western countries', icon: 'fas fa-piggy-bank' },
    { value: '↑ Year', sub: 'on Year Growth', desc: 'Continuous increase in international patient inflow', icon: 'fas fa-chart-line' },
    { value: '#1', sub: 'Mumbai', desc: 'One of the leading cities for international patient treatments', icon: 'fas fa-city' }
  ];
}
