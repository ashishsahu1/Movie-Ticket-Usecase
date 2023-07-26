import { Component, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { uri } from 'src/app/uri';
@Component({
  selector: 'app-user-action-list',
  templateUrl: './user-action-list.component.html',
  styleUrls: ['./user-action-list.component.css']
})
export class UserActionListComponent {

  @Output() refreshTable: EventEmitter<void> = new EventEmitter<void>();
  @Input() userId = '';
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) { }

  

  delBtnHandler(){
    console.log(this.userId);
    const url = uri[0]+`api/user/${this.userId}`;
    this.http.delete(url).subscribe(
      {
        next:response=>{
          alert(`UserId ${this.userId} deleted Successfully`)
        },
        error:error=>{
          console.log(error);
        }
      }
    )
    this.refreshTable.emit();
    this.buttonClicked.emit();
  }
}
