import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    GoodsComponent,
    LoginComponent,
    SignupComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyBZe3hDqOnB8ve48XxmCZlMMoJ-Y376YR8",
    authDomain: "market-f0cd7.firebaseapp.com",
    databaseURL: "https://market-f0cd7.firebaseio.com",
    projectId: "market-f0cd7",
    storageBucket: "market-f0cd7.appspot.com",
    messagingSenderId: "339677750509",
    appId: "1:339677750509:web:e778a5171b0c2ef1eed8e4",
    measurementId: "G-FFM3LF3PNV"
  }),
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFirestoreModule,
  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
