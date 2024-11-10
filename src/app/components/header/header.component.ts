import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import Glide from '@glidejs/glide';
import { CollapseModule } from 'ngx-bootstrap/collapse';

declare const google: any;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CollapseModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isCollapsed1 = true;

  lastScrollTop = 0;
  delta = 5;
  navbarHeight = 0;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  hasScrolled() {
    const st = window.pageYOffset;
    if (Math.abs(this.lastScrollTop - st) <= this.delta) return;

    const navbar = document.getElementById('navbar-top');
    if (st > this.lastScrollTop && st > this.navbarHeight) {
      navbar?.classList.replace('nav-down', 'nav-up');
    } else if (st + window.innerHeight < document.body.scrollHeight) {
      navbar?.classList.replace('nav-up', 'nav-down');
    }

    this.lastScrollTop = st;
  }

  ngAfterViewInit() {
    document.body.classList.add('sections-page');
    const navbar = document.getElementById('navbar-top');
    navbar?.classList.add('nav-down');
    this.hasScrolled();

    new Glide('.glide1', {
      type: 'carousel',
      perView: 4,
      startAt: 2,
      focusAt: 2,
    }).mount();

    // Initialize Google Maps
    this.initMap();
  }
  private initMap() {
    const mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(40.748817, -73.985428),
      scrollwheel: false,
      styles: [
        /* your style array */
      ],
    };
    const map = new google.maps.Map(
      document.getElementById('contactUsMap'),
      mapOptions
    );
    const marker = new google.maps.Marker({
      position: mapOptions.center,
      title: 'Hello World!',
    });
    marker.setMap(map);
  }
}
