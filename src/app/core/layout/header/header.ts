import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  fullName = localStorage.getItem('fullName') ?? 'Admin';

  constructor(private router: Router) {}

  logout(): void {
    localStorage.clear();

    this.router.navigate(['/login']);
  }
}
