import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AuthComponent } from './Pages/auth/auth.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { RegisterComponent } from './Pages/register/register.component';
import { AboutmeComponent } from './Pages/aboutme/aboutme.component';
import { BooknowComponent } from './Pages/booknow/booknow.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'auth',component:AuthComponent},
  {path:'register',component:RegisterComponent},
  {path:'',component:LandingComponent},
  {path:'about',component:AboutmeComponent},
  {path:'book/:movieData',component:BooknowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
