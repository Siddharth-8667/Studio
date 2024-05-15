
// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AdminService } from './services/admin.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class authGuard implements CanActivate {
//   constructor(private adminService: AdminService) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if (localStorage.getItem('admin')) {
      
//        return true
      
//     }
//     return this.adminService.isadminLoggedIn;
//   }
// }
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from './services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private adminService: AdminService, private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('admin')) {
      return true;
    } else {
      this.router.navigate(['/admin-auth']);
      return false;
    }
  }
}
