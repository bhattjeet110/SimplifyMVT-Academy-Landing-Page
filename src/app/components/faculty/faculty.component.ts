import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent {
  faculty = [
    {
      name: 'Mr. Mihir Vora',
      role: 'Medical Tourism Industry Expert',
      specialization: 'International Patient Management & Hospital Coordination',
      experience: '10+ Years of Experience',
      icon: 'fas fa-user-tie',
      color: 'primary',
      skills: ['Medical Tourism Consulting', 'International Patient Management', 'Hospital Coordination', 'Industry Strategy']
    },
    {
      name: 'Ms. Snehha Rawther',
      role: 'Healthcare Business Consultant',
      specialization: 'International Marketing & Business Setup Strategy',
      experience: 'Industry Expert',
      icon: 'fas fa-user-graduate',
      color: 'secondary',
      skills: ['International Marketing', 'Business Setup', 'Healthcare Consulting', 'Growth Strategy']
    },
    {
      name: 'Mr. Saurabh Shah',
      role: 'Placement & Career Mentor',
      specialization: 'Interview Preparation & Professional Development',
      experience: 'Career Expert',
      icon: 'fas fa-briefcase',
      color: 'accent',
      skills: ['Career Counseling', 'Interview Coaching', 'Resume Building', 'Professional Development']
    }
  ];
}
