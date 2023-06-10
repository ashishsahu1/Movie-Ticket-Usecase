import { Component, Input } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  @Input() allUser:any; 

  ngOnInit(){
    
  }
}
