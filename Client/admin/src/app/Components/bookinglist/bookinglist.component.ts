import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { KeyValue } from '@angular/common';


@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent {
  @Input() bookinglist = [];

  allBookings:any = [];

  allTickets:any = []

  constructor(private http: HttpClient, private router:Router) {}
    

  ngOnInit(){
    for (let i = 0; i < this.bookinglist.length; i++) {
      const element = this.bookinglist[i];
        this.http.get<any>(`http://localhost:5000/api/booking/${element}`).subscribe({
        next: response=>{
          this.allBookings.push(response);
          console.log(response);
          const seatsBooked = response['booking']['seatsbooked'];
          // seatsBooked.push(response['booking']['movie'])
          this.allTickets.push(seatsBooked);
        },
        error:error=>{
          console.log(error);
        }
    })   
  }
    console.log(this.allTickets);
  }
}
