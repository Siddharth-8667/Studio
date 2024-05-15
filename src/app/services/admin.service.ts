// // import { HttpClient } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { login } from '../data-type';

// // import { Router } from '@angular/router';
// // import { BehaviorSubject } from 'rxjs';
// // import { EventEmitter } from 'stream';


// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class AdminService {


// //   constructor(private http:HttpClient, public router:Router) { }
// // // adminLogin(data:login){
// // //     return this.http.post('http://localhost:3000/admin',data)
// // //    }
// // // }
// // adminLogin(data:login){
// //   this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
// //   {observe:'response'}).subscribe((result:any)=>{
// //    console.warn(result)
// //    if(result && result.body && result.body.length===1){
// //     //  this.isLoginError.emit(false)
// //      localStorage.setItem('admin',JSON.stringify(result.body))
// //      this.router.navigate(["admin-home"])
    
// //      console.warn('user logged in')
// //    }else{
// //      console.warn("login failed");
// //     //  this.isLoginError.emit(true)
    
// //    }
// //   })
// //  }
// // }
// // import { HttpClient } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { login } from '../data-type';

// // import { Router } from '@angular/router';
// // import { BehaviorSubject } from 'rxjs';
// // import { EventEmitter } from 'stream';


// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class AdminService {
// //   isadminLoggedIn= new BehaviorSubject<boolean>(false);
// //   // isLoginError= new EventEmitter<boolean>(false)

// //   constructor(private http:HttpClient, public router:Router) { }
// // adminLogin(data:login){
// //     return this.http.post('http://localhost:3000/admin',data)
// //    }
// // }
// // adminLogin(data:login){
// //   this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
// //   {observe:'response'}).subscribe((result:any)=>{
// //    console.warn(result)
// //    if(result && result.body && result.body.length===1){
// //     //  this.isLoginError.emit(false)
// //      localStorage.setItem('admin',JSON.stringify(result.body))
// //      this.router.navigate(["admin-home"])
    
// //      console.warn('user logged in')
// //    }else{
// //      console.warn("login failed");
// //     //  this.isLoginError.emit(true)
    
// //    }
// //   })
// //  }
// // }

// import { EventEmitter, Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
// import { login,} from '../data-type';
// import { BehaviorSubject } from 'rxjs';
// import { Router } from '@angular/router';
// @Injectable({
//   providedIn: 'root'
// })
// export class AdminService {
//   isadminLoggedIn= new BehaviorSubject<boolean>(false);
//   isLoginError= new EventEmitter<boolean>(false)

//   constructor(private http:HttpClient, private router:Router) { }

//   reloadSeller(){
//     if(localStorage.getItem('admin')){
//       this.isadminLoggedIn.next(true)
//       this.router.navigate(['admin-home'])
//     }
//   }
//   userLogin(data:login){
//    this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
//    {observe:'response'}).subscribe((result:any)=>{
//     console.warn(result)
//     if(result && result.body && result.body.length===1){
//       this.isLoginError.emit(false)
//       localStorage.setItem('admin',JSON.stringify(result.body))
//       this.router.navigate(['admin-home'])
//       console.warn('user logged in')
//     }else{
//       console.warn("login failed");
//       this.isLoginError.emit(true)
//     }
//    })
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../data-type';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isadminLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  userLogin(data: login) {
    return this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
      { observe: 'response' }).pipe(
        map((result: any) => {
          if (result && result.body && result.body.length === 1) {
            localStorage.setItem('admin', JSON.stringify(result.body));
            this.router.navigate(['admin-home']);
            return true;
          } else {
            return false;
          }
        })
      );
  }
}
