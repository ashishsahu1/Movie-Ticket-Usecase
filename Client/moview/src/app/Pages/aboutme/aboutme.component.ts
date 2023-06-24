import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {

  user:any = "";

  constructor(private http: HttpClient) { }

  

  ngOnInit(){
    const url = `http://localhost:5000/api/user/${localStorage.getItem('loggeduserdetails')}`
    this.http.get(url).subscribe(
      {
        next:response=>{
          console.log(response);
          this.user = response;
        },
        error:error=>{
          console.log(error);
        }
      }
    )
    console.log(this.user);
  }

  handleDelDone(value:boolean){
    setTimeout(() => {
      console.log("here")
      this.ngOnInit();
    }, 2000);
  }
}
