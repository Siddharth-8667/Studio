
// import { Component } from '@angular/core';
// import { AdminService } from '../services/admin.service';
// import { Router } from '@angular/router';
// import { login } from '../data-type';

// @Component({
//   selector: 'app-admin-auth',
//   templateUrl: './admin-auth.component.html',
//   styleUrls: ['./admin-auth.component.css']
// })
// export class AdminAuthComponent {
//   authError: string = '';
//   selectedLoginType: string = "type";
// constructor(private admin: AdminService, public router: Router) { }

//   login(data: login): void {
//     this.authError = '';
//     this.admin.userLogin(data).subscribe((loggedIn: boolean) => {
//       if (!loggedIn) {
//         this.authError = 'Email or password is incorrect';
//         alert(this.authError);
//       } else {
//         this.router.navigate(['admin-home']);
//         this.authError = 'sucessfuly login';

//       }
//     });
//   }
// }
// import { Component } from '@angular/core';
// import { AdminService } from '../services/admin.service';
// import { Router } from '@angular/router';
// import { login } from '../data-type';

// @Component({
//   selector: 'app-admin-auth',
//   templateUrl: './admin-auth.component.html',
//   styleUrls: ['./admin-auth.component.css']
// })
// export class AdminAuthComponent {
//   authError: string = '';
//   isLoggedIn: boolean = false;
//     selectedLoginType: string = "type";


//   constructor(private admin: AdminService, public router: Router) { }

//   login(data: login): void {
//     this.authError = '';
//     this.admin.userLogin(data).subscribe((loggedIn: boolean) => {
//       if (loggedIn) {
//         this.isLoggedIn = true;
//         setTimeout(() => {
//           this.isLoggedIn = false;
//         }, 3000); // Show message for 3 seconds
//         this.router.navigate(['admin-home']);
//       } else {
//         this.authError = 'Email or password is incorrect';
//         alert(this.authError);
//       }
//     });
//   }
// }

import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { login } from '../data-type';
// import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent {
  // icon=faEyeSlash;
  // showPassword: boolean = false;
  authError: string = '';
  isLoggedIn: boolean = false;
    selectedLoginType: string = "type";

  constructor(private admin: AdminService, public router: Router) { }

  login(data: login): void {
    this.authError = '';
    this.admin.userLogin(data).subscribe((loggedIn: boolean) => {
      if (loggedIn) {
        this.isLoggedIn = true;
        setTimeout(() => {
          this.isLoggedIn = false;
        }, 3000); // Show message for 3 seconds
        alert('You are successfully logged in!');
        this.router.navigate(['admin-home']);
      } else {
        this.authError = 'Email or password is incorrect';
        alert(this.authError);
      }
    });
  }
  // togglePasswordVisibility(): void {
  //   this.showPassword = !this.showPassword;
  // }
  
}
