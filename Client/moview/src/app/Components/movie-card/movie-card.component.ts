import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movie:any='';

  constructor(private router: Router) {}

  bookNow(){
    this.router.navigate(['/book',this.movie._id])
  }
}
