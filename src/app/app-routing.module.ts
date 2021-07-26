import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
=======
import { ChowkidaarGuard } from './chowkidaar.guard';
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
import { ProductPage } from './product/product.page';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
<<<<<<< HEAD
    path: 'page1',
=======
    path: 'login',
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
 
  {
<<<<<<< HEAD
    path: 'login',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },
  {
=======
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
    path: 'men',
    loadChildren: () => import('./mens/mens.module').then( m => m.MensPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'history',
<<<<<<< HEAD
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
=======
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule),
    canActivate : [ChowkidaarGuard]
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
  },
  {
    path: 'women',
    loadChildren: () => import('./women/women.module').then( m => m.WomenPageModule),
  },
  {
    path : 'women/product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path : 'men/product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path : 'watches/product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path : 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },

  {
    path: 'cart',
<<<<<<< HEAD
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
=======
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule),
    canActivate : [ChowkidaarGuard]
>>>>>>> 3464d01cc19aeb81e4025f01580a5d2914fa2a0d
  },
  {
    path: 'watches',
    loadChildren: () => import('./watches/watches.module').then( m => m.WatchesPageModule)
  },
  {
    path: 'weboffers',
    loadChildren: () => import('./weboffers/weboffers.module').then( m => m.WeboffersPageModule)
  },
  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
