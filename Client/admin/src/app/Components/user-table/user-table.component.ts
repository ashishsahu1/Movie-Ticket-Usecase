import { Component, EventEmitter, Input,Output } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {
  @Input() allUser:any; 
  @Output() buttonClicked: EventEmitter<void> = new EventEmitter<void>();

  handleButtonClick(){
    this.buttonClicked.emit();  
  }

  ngOnInit() {}

  refreshTargetTable() {
    setTimeout(()=>{
      this.ngOnInit();
      console.log("Timers end")
    }, 2000)
  }

}  
