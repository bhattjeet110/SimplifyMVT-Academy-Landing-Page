import { Component } from '@angular/core';

interface Session {
  number: number;
  title: string;
  description: string;
  icon: string;
  isOpen: boolean;
  topics: string[];
}

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent {
  sessions: Session[] = [
    {
      number: 1,
      title: 'Introduction to Medical Tourism Industry',
      description: 'Understand the global medical tourism market and India\'s role.',
      icon: 'fas fa-globe',
      isOpen: true,
      topics: [
        'Global medical tourism market overview',
        'India\'s position in healthcare tourism',
        'Key source countries and patient demographics',
        'Industry size, trends and future outlook'
      ]
    },
    {
      number: 2,
      title: 'International Patient Flow System',
      description: 'How patients come from other countries to Indian hospitals.',
      icon: 'fas fa-plane-arrival',
      isOpen: false,
      topics: [
        'Patient journey from home country to India',
        'Referral networks and facilitators',
        'Role of medical tourism facilitators',
        'Communication channels and protocols'
      ]
    },
    {
      number: 3,
      title: 'Hospital Coordination Process',
      description: 'Learn how hospitals manage international patients.',
      icon: 'fas fa-hospital',
      isOpen: false,
      topics: [
        'International Patient Department (IPD) operations',
        'Hospital coordination protocols',
        'Treatment planning and scheduling',
        'Patient care standards for international visitors'
      ]
    },
    {
      number: 4,
      title: 'Pricing & Revenue Model',
      description: 'Commission structure, costing, and profit margins.',
      icon: 'fas fa-rupee-sign',
      isOpen: false,
      topics: [
        'Medical procedure costing and pricing strategies',
        'Commission structures in medical tourism',
        'Revenue models for facilitators',
        'Profit margin calculation and financial planning'
      ]
    },
    {
      number: 5,
      title: 'Patient Documentation & Legal Basics',
      description: 'Medical reports, visa process, and documentation flow.',
      icon: 'fas fa-file-medical',
      isOpen: false,
      topics: [
        'Medical visa and e-Medical visa process',
        'Required patient documentation checklist',
        'Legal compliance and patient rights',
        'Insurance and documentation management'
      ]
    },
    {
      number: 6,
      title: 'Communication & Patient Handling',
      description: 'How to speak, coordinate, and manage international patients.',
      icon: 'fas fa-comments',
      isOpen: false,
      topics: [
        'Professional communication with international patients',
        'Cross-cultural sensitivity and etiquette',
        'Handling patient queries and concerns',
        'Emergency communication protocols'
      ]
    },
    {
      number: 7,
      title: 'International Marketing Strategy',
      description: 'How to generate international leads and promote services.',
      icon: 'fas fa-bullhorn',
      isOpen: false,
      topics: [
        'Digital marketing for medical tourism',
        'Social media and content strategy',
        'Lead generation techniques',
        'Building international partnerships and networks'
      ]
    },
    {
      number: 8,
      title: 'Business Setup Blueprint',
      description: 'How to start your own Medical Tourism agency.',
      icon: 'fas fa-building',
      isOpen: false,
      topics: [
        'Business registration and legal requirements',
        'Setting up a medical tourism agency',
        'Partnerships with hospitals and clinics',
        'Operations management and scaling strategies'
      ]
    },
    {
      number: 9,
      title: 'Hospital Visit & Live Case Understanding',
      description: 'Real-time exposure to hospital operations.',
      icon: 'fas fa-stethoscope',
      isOpen: false,
      topics: [
        'Live hospital visit to international patient department',
        'Observation of real coordination processes',
        'Interaction with hospital coordinators',
        'Real case studies and learning'
      ]
    },
    {
      number: 10,
      title: 'Placement Preparation & Interview Training',
      description: 'Resume building, interview practice, and job readiness.',
      icon: 'fas fa-user-tie',
      isOpen: false,
      topics: [
        'Professional resume building for healthcare industry',
        'Mock interview sessions with industry experts',
        'Career path guidance in medical tourism',
        'Job readiness and first-week workplace tips'
      ]
    }
  ];

  toggleSession(session: Session): void {
    session.isOpen = !session.isOpen;
  }
}
