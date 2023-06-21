import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
  
})
export class NavbarComponent {

  isLoggedIn:boolean = false;

  constructor(private router:Router) { }
  
  ngOnInit(){
    if(localStorage.getItem('usertoken')){
      this.isLoggedIn = true;
    }
  }

  logOut(){
    localStorage.removeItem('usertoken');
    localStorage.removeItem('loggeduser');
    this.router.navigate(['/']);
  }
}
