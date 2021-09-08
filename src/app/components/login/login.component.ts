import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as:AuthService,private router:Router) { }
  ngOnInit(): void {
  }
  login(form){
    let data = form.value
    this.as.login(data.email,data.password).then(resalt=>{
      this.router.navigate(['/'])
    })
  }
}
