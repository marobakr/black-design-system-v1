import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import Glide from '@glidejs/glide';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProjectsComponent {
  isCollapsed = false;
  isCollapsed1 = true;
  isCollapsed2 = true;
  isCollapsed3 = true;
  isCollapsed4 = true;
  isCollapsed5 = true;
  isCollapsed6 = true;
  isCollapsed7 = true;
  isCollapsed8 = true;
  isCollapsed9 = true;
  isCollapsed10 = true;
  isCollapsed11 = true;
  isCollapsed12 = true;
  isCollapsed13 = true;
  isCollapsed14 = true;

  page = 2;

  focus: any;
  focus1: any;
  focus2: any;
  focus3: any;
  focus4: any;
  focus5: any;
  focus6: any;
  focus7: any;
  lastScrollTop = 0;
  delta = 5;
  navbarHeight = 0;
  ngAfterViewInit(): void {
    new Glide('.glide2', {
      type: 'carousel',
      perView: 5,
      startAt: 2,
      focusAt: 2,
    }).mount();
  }
}
