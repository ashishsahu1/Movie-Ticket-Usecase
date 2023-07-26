import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { uri } from 'src/app/uri';
@Component({
  selector: 'app-movieform',
  templateUrl: './movieform.component.html',
  styleUrls: ['./movieform.component.css']
})
export class MovieformComponent {

  @Output() refreshComponent: EventEmitter<void> = new EventEmitter<void>();

  formData = {
    moviename: '',
    moviedesc: '',
    movieposter: '',
    price: 0,
    quantity: 0,
  };

  constructor(private http: HttpClient) { }

  onSubmit(){
    this.http.post<any>(uri[0]+'api/movie/addmovie', this.formData).subscribe({
      next:response=>{
        console.log(response);
        this.formData.moviename = '';
        this.formData.moviedesc = '';
        this.formData.movieposter = '';
        this.formData.price = 0;
        this.formData.quantity = 0;
      },
      error:error=>{
        console.log(error);
      }
    })

    this.refreshComponent.emit();
  }
}
