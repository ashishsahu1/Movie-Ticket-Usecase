import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { uri } from 'src/app/uri';
@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {

  @Output() refreshComponent: EventEmitter<void> = new EventEmitter<void>();

  formData = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient) { }

  onSubmit(){
    this.http.post<any>(uri[0]+'api/user/signup', this.formData).subscribe({
      next:response=>{
        console.log(response);
      },
      error:error=>{
        console.log(error);
      }
    })
    
    this.refreshComponent.emit();
  }
}
