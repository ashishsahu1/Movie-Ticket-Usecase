import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Input() bookId = "";
  bookingData:any=""
  movieData:any=""
  movieId = "";

  constructor(private http: HttpClient) { }

  getMovieData = async () =>{
    console.log(this.movieId);
    const movieurl = `http://localhost:5000/api/movie/${this.movieId}`
    this.http.get(movieurl).subscribe(
      {
        next:response=>{
          console.log(response);
          this.movieData = response;
        },
        error:error=>{
          console.log(error);
        }
      }
    )
  } 

  getBookingData = async ()=>{
    const url = `http://localhost:5000/api/booking/${this.bookId}`
    this.http.get(url).subscribe(
      {
        next:response=>{
          console.log(response);
          this.bookingData = response;
          this.movieId = this.bookingData.booking.movie;
        },
        error:error=>{
          console.log(error);
        }
      }
    )
  }

  ngOnInit(){
    this.getBookingData();
    setTimeout(()=>{
      this.getMovieData();
    },1000)
    
    
    // getting movie data too
    

  }
}
