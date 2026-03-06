import { Component } from '@angular/core';

@Component({
  selector: 'app-why-medical-tourism',
  templateUrl: './why-medical-tourism.component.html',
  styleUrls: ['./why-medical-tourism.component.scss']
})
export class WhyMedicalTourismComponent {
  reasons = [
    {
      icon: 'fas fa-hospital-alt',
      title: 'Advanced Healthcare Facilities',
      desc: 'India boasts world-class hospitals and medical infrastructure attracting global patients.'
    },
    {
      icon: 'fas fa-user-md',
      title: 'Skilled Doctors',
      desc: 'Internationally trained specialists providing high-quality healthcare at affordable costs.'
    },
    {
      icon: 'fas fa-tags',
      title: 'Affordable Treatment Costs',
      desc: 'India offers 60–80% lower treatment costs compared to Western countries.'
    },
    {
      icon: 'fas fa-landmark',
      title: 'Government Support',
      desc: 'Policy development and government initiatives like "Heal in India" drive industry growth.'
    }
  ];
}
