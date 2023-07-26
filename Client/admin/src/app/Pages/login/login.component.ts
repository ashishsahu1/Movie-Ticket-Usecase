import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { uri } from 'src/app/uri';

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
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router:Router) { }

  
  loginHandler = () => {
    this.http.post<any>(uri[0]+'api/user/admin/login', this.loginData)
      .subscribe(
        {
          next: response => {
            // Handle successful login
            console.log(response);
            localStorage.setItem("token",response.token)
            localStorage.setItem("user",response.existingUser.name)


            // Handling timer
            //Calculate the token expiration time
            const expirationDate = new Date(new Date().getTime() + response.expiresin * 1000);

            // Set a timer to automatically log out the user when the token expires
            this.tokenExpirationTimer = setTimeout(() => {
              this.logout();
            }, response.expiresin * 1000);

            // --------------------------
            
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

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.router.navigate(['/']);
  }
}
