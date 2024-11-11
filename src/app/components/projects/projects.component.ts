import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProjectsComponent {
  page = 2;
}
