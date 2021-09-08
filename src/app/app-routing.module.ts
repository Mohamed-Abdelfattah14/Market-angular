import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { GardsAuthService } from './services/gards-auth.service';

const routes: Routes = [
  {path: '' , component: HomeComponent , data: {index:0}},
  {path: 'login', component:  LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'cart', component: CartComponent, canActivate: [GardsAuthService] , data: {index:1}},
  {path: 'admin', component: GoodsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
