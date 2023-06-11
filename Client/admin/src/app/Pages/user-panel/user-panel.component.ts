import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';
import { Observable } from 'rxjs';
import { UserTableComponent } from 'src/app/Components/user-table/user-table.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
  username = localStorage.getItem("user");
  @ViewChild(UserTableComponent) userTables!: UserTableComponent;

  allUsers: any = [];

  constructor(private http: HttpClient, private router: Router) {

  }

  ngAfterViewInit(): void {
    if (this.userTables) {
      this.userTables.buttonClicked.subscribe(() => {
        setTimeout(() => {
          this.ngOnInit();
        }, 2000)
      });
    }
  }


  refreshTargetComponent() {
    setTimeout(() => {
      this.ngOnInit();
    }, 2000)

  }

  ngOnInit(): void {
    this.http.get("http://localhost:5000/api/user").subscribe({
      next: response => {
        this.allUsers = response;
      },
      error: error => {
        console.log(error);
      }
    })
  }


}
