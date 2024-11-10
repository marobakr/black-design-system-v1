import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

declare const google: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CollapseModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isCollapsed1 = true;
  constructor() {}
}
