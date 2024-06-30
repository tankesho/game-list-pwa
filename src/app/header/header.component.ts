import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  hide = true;

  constructor(private router: Router) {}

  searchQuery() {
    this.router.navigate(['/search'], { queryParams: { search: 'Placeholder' } })
  }
}
