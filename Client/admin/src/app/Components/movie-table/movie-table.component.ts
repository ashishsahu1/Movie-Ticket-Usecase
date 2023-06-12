import { ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {
  @Input() allMovie:any;
  modalImageUrl: string = "";
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private cdr: ChangeDetectorRef,private router: Router) { }


  handleButtonClick(){
    this.buttonClicked.emit();
  }

  ngOnInit(){
    console.log("From ngOnInit")
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

  refreshTargetMovieTable(){
    setTimeout(()=>{
      this.reloadCurrentRoute();
      console.log("Done reloading")
    }, 2000)
    // this.ngOnInit();
  }
  
  openModal(imageUrl: string) {
    this.modalImageUrl = imageUrl;
  }
}
