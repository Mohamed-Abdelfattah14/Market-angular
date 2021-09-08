import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpen;
  isUser;
  constructor(private as:AuthService) {
    this.isOpen=false;
    this.isUser=false;
   }

  ngOnInit(): void {
    this.as.user.subscribe(user=>{
      if (user){
        this.isUser= true;
        this.as.userId = user.uid
      }
      else{
        this.isUser=false;
        this.as.userId = ''
      }
    })
  }
  toggleNavbar(){
    this.isOpen = !this.isOpen;
  }
  logout(){
    this.as.logout().then(()=>console.log('wlc'))
  }

}
