import { Component } from '@angular/core';
import { BlogComponent } from './components/blog/blog.component';
import { FeaturesComponent } from './components/features/features.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamComponent } from './components/team/team.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
