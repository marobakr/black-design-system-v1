import { Component } from '@angular/core';
import { BlogComponent } from './components/blog/blog.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TablesComponent } from './components/tables/tables.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    FeaturesComponent,
    BlogComponent,
    ProjectsComponent,
    TeamComponent,
    PricingComponent,
    ContactusComponent,
    TablesComponent,
    TestimonialsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
