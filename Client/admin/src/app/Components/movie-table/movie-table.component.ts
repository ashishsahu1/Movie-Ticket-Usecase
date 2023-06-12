import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {
  @Input() allMovie:any;
  modalImageUrl: string = "";
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  handleButtonClick(){
    this.buttonClicked.emit();
  }

  ngOnInit(){
    
  }

  refreshTargetMovieTable(){
    setTimeout(()=>{
      this.ngOnInit();
    }, 2000)
  }
  
  openModal(imageUrl: string) {
    this.modalImageUrl = imageUrl;
  }
}
