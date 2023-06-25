import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  searchkey = ''
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

  allSearchedMovie:any = [];
  searchKeyChange(){
    console.log(this.searchkey);
    // setTimeout(()=>{
    //   const url = `http://localhost:5000/api/movie/search?term=${this.searchkey}`;
    //   console.log(url);
    // this.http.get(url).subscribe({
    //   next:response => {
    //     this.allSearchedMovie = response;
    //   },
    //   error:error=>{
    //     console.log(error);
    //   }
    // })
    // },1000)

    const url = `http://localhost:5000/api/movie/search?term=${this.searchkey}`;
      console.log(url);
      this.http.get(url).subscribe({
        next:response => {
          console.log(response)
          this.allSearchedMovie = response;
        },
        error:error=>{
          console.log(error);
        }
      })
    // setTimeout(()=>{
    //   this.ngOnInit();
    // },1000)
  }
}
