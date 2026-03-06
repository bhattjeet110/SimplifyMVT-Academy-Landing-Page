import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    qualification: '',
    message: ''
  };

  qualifications = [
    'Still in College',
    'Graduate',
    'Post Graduate',
    'Working Professional',
    'Entrepreneur/Business Owner',
    'Other'
  ];

  submitted = false;
  loading = false;

  onSubmit(): void {
    if (!this.formData.name || !this.formData.phone) return;
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.submitted = true;
    }, 1500);
  }

  resetForm(): void {
    this.submitted = false;
    this.formData = { name: '', email: '', phone: '', qualification: '', message: '' };
  }
}
