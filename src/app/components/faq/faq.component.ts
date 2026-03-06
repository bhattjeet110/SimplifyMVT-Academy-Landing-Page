import { Component } from '@angular/core';

interface Faq {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs: Faq[] = [
    {
      question: 'Who can join this course?',
      answer: 'Freshers, graduates, healthcare students, MBA aspirants, and aspiring entrepreneurs. Anyone with basic graduation and willingness to learn can join this program.',
      isOpen: true
    },
    {
      question: 'Is this course theoretical or practical?',
      answer: 'It is a practical, industry-oriented course with hospital visit exposure. We focus on real-world application, not just classroom lectures.',
      isOpen: false
    },
    {
      question: 'What is the duration of the program?',
      answer: 'The program consists of 10 structured sessions spread over 3 months. Classes are held every Saturday (once a week) at Andheri East, Mumbai.',
      isOpen: false
    },
    {
      question: 'Is placement guaranteed?',
      answer: 'We provide structured placement support and interview preparation. The 100% placement guarantee applies as per eligibility criteria mentioned in our policy. We also offer a 50% cash back guarantee if placement criteria is not fulfilled (*Terms & Conditions Apply).',
      isOpen: false
    },
    {
      question: 'Can I start my own business after this course?',
      answer: 'Yes! Session 8 specifically covers the Business Setup Blueprint — how to start your own Medical Tourism agency, including business registration, hospital partnerships, and operations management.',
      isOpen: false
    },
    {
      question: 'Is prior medical knowledge required?',
      answer: 'No prior medical knowledge is required. Basic graduation and willingness to learn is enough. Our curriculum is designed to bring complete beginners to industry-ready professionals.',
      isOpen: false
    },
    {
      question: 'Is this online or offline training?',
      answer: 'This is an offline classroom training program conducted at Andheri East, Mumbai. We believe in-person learning provides better engagement and networking opportunities.',
      isOpen: false
    },
    {
      question: 'What salary can I expect after this course?',
      answer: 'Entry-level salary may range between ₹25,000 – ₹80,000 per month depending on the role, company, and your performance during placement.',
      isOpen: false
    },
    {
      question: 'What is the batch size?',
      answer: 'We maintain small batches to ensure personal attention and a better learning environment for every student. This ensures you get maximum value from every session.',
      isOpen: false
    },
    {
      question: 'How do I enroll?',
      answer: 'You can apply online through this page or contact us directly via WhatsApp or call. Fill in the enrollment form below or click on "Apply Now" to get started.',
      isOpen: false
    }
  ];

  toggle(faq: Faq): void {
    faq.isOpen = !faq.isOpen;
  }
}
