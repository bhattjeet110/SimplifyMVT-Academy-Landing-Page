import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { GuaranteesComponent } from './components/guarantees/guarantees.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { WhyMedicalTourismComponent } from './components/why-medical-tourism/why-medical-tourism.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { WhyAcademyComponent } from './components/why-academy/why-academy.component';
import { IndustryGrowthComponent } from './components/industry-growth/industry-growth.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    GuaranteesComponent,
    ClassDetailsComponent,
    WhyMedicalTourismComponent,
    CurriculumComponent,
    CtaSectionComponent,
    FacultyComponent,
    TestimonialsComponent,
    WhyAcademyComponent,
    IndustryGrowthComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    FinalCtaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
