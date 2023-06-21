import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  
  allMovie:any=[];
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(){
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
}
