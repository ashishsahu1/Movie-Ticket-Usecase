import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent {
  @Input() bookinglist = [];
}
