import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import Glide from '@glidejs/glide';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  isCollapsed1 = true;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('sections-page');
      const navbar = document.getElementById('navbar-top');
      navbar?.classList.add('nav-down');

      new Glide('.glide1', {
        type: 'carousel',
        perView: 4,
        startAt: 2,
        focusAt: 2,
      }).mount();
    }
  }
}
