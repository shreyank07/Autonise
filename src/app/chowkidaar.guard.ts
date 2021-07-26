import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
=======
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d

@Injectable({
  providedIn: 'root'
})
export class ChowkidaarGuard implements CanActivate {
<<<<<<< HEAD
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
=======

  constructor(private authService : AuthService, private route : Router){  }
  
  canActivate()
      {
      if(this.authService.loggedIn()){
        return true
      }
      else {
        this.route.navigate(["/signup"])
        return false
      }
    }
  }


  

>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
