import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { uri } from 'src/app/uri';

@Component({
  selector: 'app-movie-panel',
  templateUrl: './movie-panel.component.html',
  styleUrls: ['./movie-panel.component.css']
})
export class MoviePanelComponent {
  username = localStorage.getItem("user");
  allMovie:any=[];
  constructor(private http: HttpClient, private router: Router) {}
  
  refreshTargetComponent() {
    setTimeout(() => {
      this.ngOnInit();
    }, 2000)
  }

  ngOnInit(): void {
    this.http.get(uri[0]+'api/movie').subscribe({
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
