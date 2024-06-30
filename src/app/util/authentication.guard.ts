import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
  } from '@angular/router';
  
  import { Constants } from 'src/app/util/constants';
  import { Injectable } from '@angular/core';
  import { User } from './../model/user';
  import { WebStorageUtil } from 'src/app/util/web-storage-util';
  
  @Injectable()
  export class AuthenticationGuard implements CanActivate {
    constructor(private router: Router) {}
  
    canActivate(
        route: ActivatedRouteSnapshot
    ): boolean {
      let user: User = WebStorageUtil.get(Constants.LOGGED_USER);
  
      if (!user) {
        this.router.navigateByUrl('/negate-access');
        return false;
      }
  
      if (user.id != Number(route.paramMap.get('id'))) {
        this.router.navigateByUrl('/negate-access');
        return false;
      }
  
      return true;
    }
  }