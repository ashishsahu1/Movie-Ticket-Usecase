import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {
  @Input() allMovie:any;
  modalImageUrl: string = "";
  
  openModal(imageUrl: string) {
    this.modalImageUrl = imageUrl;
  }
}
