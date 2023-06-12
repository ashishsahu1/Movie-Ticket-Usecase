import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-action-list',
  templateUrl: './movie-action-list.component.html',
  styleUrls: ['./movie-action-list.component.css']
})
export class MovieActionListComponent {
  @Input() movieId = '';
  
  constructor(private http: HttpClient) { }

  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() refreshMovieTable: EventEmitter<void> = new EventEmitter<void>();

  delBtnHandler(){
    console.log(this.movieId)
    const url = `http://localhost:5000/api/movie/${this.movieId}`;
    this.http.delete(url).subscribe(
      {
        next:response=>{
          alert(`MovieId ${this.movieId} deleted Successfully`)
        },
        error:error=>{
          console.log(error);
        }
      }
    )
    this.refreshMovieTable.emit();
    this.buttonClicked.emit();
  }
}
