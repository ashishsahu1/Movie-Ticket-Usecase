import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { uri } from 'src/app/uri';


@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent {

  seats: { selected: boolean }[] = [];
  selectedSeats: number[] = [];
  totalSeats: number = 0;

  movie: any;
  loggedUser = localStorage.getItem('loggeduserdetails');
  movieData: any;

  isSeatAvail(i:number){
    if(this.movieData.movie['seats'][i] !== true){
      return false;
    }else{
      return true;
    }
  }

  ngOnInit(): void {
    // Retrieve the movie data from the route parameters
    this.route.params.subscribe(params => {
      this.movie = params['movieData'];
    });

    const url = uri[0]+`api/movie/${this.movie}`
    this.http.get(url).subscribe(
      {
        next: response => {
          console.log(response);
          this.movieData = response;
        },
        error: error => {
          console.log(error);
        }
      }
    )

    setTimeout(() => {
      this.totalSeats = this.movieData.movie['quantity'];
      // this.totalSeats = 10; // Change this value based on your requirement
      for (let i = 0; i < this.totalSeats; i++) {
        this.seats.push({ selected: false });
      }
    }, 1000);
  }

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    // Initialize the seats array

  }

  updateSelectedSeats(): void {
    this.selectedSeats = [];
    this.seats.forEach((seat, index) => {
      if (seat.selected) {
        this.selectedSeats.push(index);
      }
    });
  }

  bookSeats(): void {

    if (!this.loggedUser) {
      alert("User error, Try login again")
    }
    if (!this.movie) {
      alert("Movie error, Try after sometimes")
    }

    const booking = {
      "movieId": this.movie,
      "userId": this.loggedUser,
      "tickets": this.selectedSeats.length,
      "seatsbooked": this.selectedSeats
    }
    if (this.loggedUser && this.movie) {
      console.log(booking);

      this.http.post<any>(uri[0]+'api/booking/addBooking',booking)
        .subscribe({
          next:response=>{
            console.log(response);
            alert("Booking added")
          },
          error:error=>{
            alert("Something went wrong");
          }
        })
      
    }
  }

}
