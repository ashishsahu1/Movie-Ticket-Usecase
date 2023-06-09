import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router:Router) { }

  loginHandler = () => {
    this.http.post<any>('http://localhost:5000/api/user/admin/login', this.loginData)
      .subscribe(
        {
          next: response => {
            // Handle successful login
            console.log(response);
            localStorage.setItem("token",response.token)
            localStorage.setItem("user",response.existingUser)
            alert("Login Success")
            this.router.navigate(['/moviepanel'])
          },
          error: error => {
            // Handle login error
            alert("Not Authorized");
          }
        }
      );
  }
}
