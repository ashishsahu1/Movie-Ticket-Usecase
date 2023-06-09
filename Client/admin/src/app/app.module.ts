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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
