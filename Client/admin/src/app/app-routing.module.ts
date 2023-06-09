import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePanelComponent } from './Pages/movie-panel/movie-panel.component';
import { UserPanelComponent } from './Pages/user-panel/user-panel.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  {path:'moviepanel',component:MoviePanelComponent},
  {path:'userpanel',component:UserPanelComponent},
  {path:'',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
