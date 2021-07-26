<<<<<<< HEAD
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
=======
// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpHeaders,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor() {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const userToken = localStorage.getItem('token');
//     let myHeaders = new HttpHeaders()
//     myHeaders.append('Access-Control-Allow-Headers', '*')
//     myHeaders.append('Content-Type', 'application/json')
//     if (!userToken) {
//       return next.handle(request);
//     }
//     console.log("User tokenns")
//     const modifiedReq = request.clone({
//       headers: myHeaders
//     });
//     return next.handle(modifiedReq);
//   }
// }
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
