import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
<<<<<<< HEAD

=======
import { HttpClient } from '@angular/common/http';
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './user.service';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
=======
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { ChowkidaarGuard } from './chowkidaar.guard';
// import { TokenInterceptor } from './token.interceptor';
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, BrowserAnimationsModule,MatSelectModule],
<<<<<<< HEAD
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
=======
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, UserService, ChowkidaarGuard ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
