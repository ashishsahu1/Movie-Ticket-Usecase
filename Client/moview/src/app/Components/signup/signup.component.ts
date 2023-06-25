import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formData = {
    email: '',
    name: '',
    password: ''
  };

  constructor(private http: HttpClient, private router:Router) { }

  onSubmit(){
    console.log(this.formData);
    this.http.post<any>('http://localhost:5000/api/user/signup', this.formData).subscribe({
      next:response=>{
        console.log(response);
        alert("Signup Successful")
      },
      error:error=>{
        console.log(error);
      }
    })
    this.router.navigate(['/auth'])
  }
}
