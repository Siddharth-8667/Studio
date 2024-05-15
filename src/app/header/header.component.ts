import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';


// Assuming you have an EventEmitter for closing the sidebar
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Using styleUrls for consistency
})
export class HeaderComponent {
  constructor(private route: Router, private product: ProjectsService) {}
  menuType: string = 'default';
  sellerName: string = "";
  sidebarOpen: boolean = false;

  isNavbarCollapsed: boolean = true;

  // Create an EventEmitter for closing the sidebar
  sidebarClosed = new EventEmitter<void>();

  adminLogout() {
    localStorage.removeItem('admin');
    this.route.navigate(['/']);
  }

  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('admin') && val.url.includes('admin')) {
          this.menuType = 'admin';
        } else {
          this.menuType = 'default';
        }
      }
    });
  }

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  isCollapsed = true;
  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  // closeNavbar() {
  // //   this.isNavbarCollapsed = true; // Close the navbar
  // // }
  closeNavbar() {
    this.isNavbarCollapsed = true; // Close the navbar
    this.sidebarClosed.emit(); // Emit event to close the sidebar
  }
  // Other component logic...

}