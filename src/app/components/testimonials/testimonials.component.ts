import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  activeIndex = 0;

  testimonials = [
    {
      name: 'Sachi',
      role: 'Program Graduate',
      text: 'I was confused after graduation. This course gave me clarity and confidence. The structured sessions helped me understand exactly what the Medical Tourism industry looks like from the inside.',
      rating: 5,
      initial: 'S',
      color: 'primary'
    },
    {
      name: 'Ashutosh',
      role: 'Program Graduate',
      text: 'The hospital visit helped me understand real operations. It was an eye-opening experience to see how international patient departments actually work. Highly recommended for anyone serious about this field.',
      rating: 5,
      initial: 'A',
      color: 'secondary'
    },
    {
      name: 'Piyush',
      role: 'Program Graduate',
      text: 'Best decision for my career. Practical and industry-focused training that I couldn\'t find anywhere else. The faculty is extremely knowledgeable and supportive throughout.',
      rating: 5,
      initial: 'P',
      color: 'accent'
    },
    {
      name: 'Student',
      role: 'Program Graduate',
      text: 'The placement preparation sessions were extremely helpful. The mock interviews and resume building workshops gave me the confidence to crack my first job interview in the healthcare industry.',
      rating: 5,
      initial: 'G',
      color: 'primary'
    }
  ];

  get stars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  prev(): void {
    this.activeIndex = this.activeIndex === 0 ? this.testimonials.length - 1 : this.activeIndex - 1;
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
  }

  goTo(i: number): void {
    this.activeIndex = i;
  }
}
