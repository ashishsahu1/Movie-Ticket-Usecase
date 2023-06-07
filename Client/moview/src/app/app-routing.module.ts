import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AuthComponent } from './Pages/auth/auth.component';
import { LandingComponent } from './Pages/landing/landing.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'auth',component:AuthComponent},
  {path:'',component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
