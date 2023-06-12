import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-panel',
  templateUrl: './movie-panel.component.html',
  styleUrls: ['./movie-panel.component.css']
})
export class MoviePanelComponent {
  username = localStorage.getItem("user");
  allMovie:any=[];
  constructor(private http: HttpClient, private router: Router) {}
  
  ngOnInit(): void {
    this.http.get("http://localhost:5000/api/movie").subscribe({
      next: response => {
        console.log(response)
        this.allMovie = response;
      },
      error: error => {
        console.log(error);
      }
    })
    console.log(this.allMovie);
  }

  btnHnd(){
    console.log(this.allMovie);
  }

}
