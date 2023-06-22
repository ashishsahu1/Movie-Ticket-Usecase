import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent {

  seats: { selected: boolean }[] = [];
  selectedSeats: number[] = [];
  totalSeats:number = 0;

  movie:any;
  loggedUser = localStorage.getItem('loggeduserdetails');

  ngOnInit(): void {
    // Retrieve the movie data from the route parameters
    this.route.params.subscribe(params => {
      this.movie = params['movieData'];
    });
  }

  constructor(private route: ActivatedRoute) {
    // Initialize the seats array
    this.totalSeats = 30; // Change this value based on your requirement
    for (let i = 0; i < this.totalSeats; i++) {
      this.seats.push({ selected: false });
    }
  }

  updateSelectedSeats(): void {
    this.selectedSeats = [];
    this.seats.forEach((seat, index) => {
      if (seat.selected) {
        this.selectedSeats.push(index );
      }
    });
  }

  bookSeats(): void {

    if(!this.loggedUser){
      alert("User error, Try login again")
    }
    if(!this.movie){
      alert("Movie error, Try after sometimes")
    }
    if(this.loggedUser && this.movie){
      console.log('Selected seats:', this.selectedSeats);
      // Perform further operations with the selected seats
      console.log("User : ",this.loggedUser);
      console.log("Movie : ",this.movie);
    }
    


  }
  
}
