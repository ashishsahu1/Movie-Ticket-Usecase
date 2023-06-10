import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  username = localStorage.getItem("user");

  allUsers:any = [];

  user$: Observable<any> | undefined;

  constructor(private http: HttpClient, private router:Router) {
    this.user$ = this.http.get("http://localhost:5000/api/user");
   }

  ngOnInit():void{
    this.http.get("http://localhost:5000/api/user").subscribe({
      next: response=>{
        this.allUsers = response;
      },
      error:error=>{
        console.log(error);
      }
    })
  }


}
