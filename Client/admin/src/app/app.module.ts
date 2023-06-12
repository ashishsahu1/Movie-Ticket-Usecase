import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MoviePanelComponent } from './Pages/movie-panel/movie-panel.component';
import { UserPanelComponent } from './Pages/user-panel/user-panel.component';
import { UserformComponent } from './Components/userform/userform.component';
import { MovieformComponent } from './Components/movieform/movieform.component';
import { MovieTableComponent } from './Components/movie-table/movie-table.component';
import { UserTableComponent } from './Components/user-table/user-table.component';
import { LoginComponent } from './Pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookinglistComponent } from './Components/bookinglist/bookinglist.component';
import { UserActionListComponent } from './Components/user-action-list/user-action-list.component';
import { MovieActionListComponent } from './Components/movie-action-list/movie-action-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviePanelComponent,
    UserPanelComponent,
    UserformComponent,
    MovieformComponent,
    MovieTableComponent,
    UserTableComponent,
    LoginComponent,
    BookinglistComponent,
    UserActionListComponent,
    MovieActionListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
