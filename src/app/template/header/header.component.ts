import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as M from 'materialize-css';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Constants } from 'src/app/util/constants';
import { WebStorageUtil } from 'src/app/util/web-storage-util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logged!: boolean;
  subscription!: Subscription;
  user: number = 0;

  constructor(private loginService: LoginService, private router: Router) {
    this.subscription = loginService.asObservable().subscribe((data) => {
      this.logged = data;
    });
  }

  ngOnInit() {
    this.logged = WebStorageUtil.get(Constants.LOGGED_IN_KEY);
  }

  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
    if (WebStorageUtil.get(Constants.LOGGED_USER).id)
      this.user = WebStorageUtil.get(Constants.LOGGED_USER).id;
  }

  searchQuery() {
    this.router.navigate(['/search'], { queryParams: { search: 'Placeholder' } })
  }

  onLogout() {
    this.loginService.logout();
  }
}
