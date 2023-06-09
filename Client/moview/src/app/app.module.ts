import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './Pages/auth/auth.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { HeroComponent } from './Components/hero/hero.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { MovieCardComponent } from './Components/movie-card/movie-card.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { RegisterComponent } from './Pages/register/register.component';
import { OtherSectionsComponent } from './Components/other-sections/other-sections.component';
import { PostersliderComponent } from './Components/posterslider/posterslider.component';
import { FormsModule } from '@angular/forms';
import { AboutmeComponent } from './Pages/aboutme/aboutme.component';
import { BooksComponent } from './Components/books/books.component';
import { BooknowComponent } from './Pages/booknow/booknow.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    HeroComponent,
    MovieListComponent,
    MovieCardComponent,
    LoginComponent,
    SignupComponent,
    RegisterComponent,
    OtherSectionsComponent,
    PostersliderComponent,
    AboutmeComponent,
    BooksComponent,
    BooknowComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
