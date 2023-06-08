import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePanelComponent } from './Pages/movie-panel/movie-panel.component';
import { UserPanelComponent } from './Pages/user-panel/user-panel.component';

const routes: Routes = [
  {path:'moviepanel',component:MoviePanelComponent},
  {path:'userpanel',component:UserPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
