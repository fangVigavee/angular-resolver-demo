import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { AboutComponent } from 'src/about/about.component';


const routes: Routes = [
  { path: 'home-component' , component: HomeComponent },
  { path: 'about-component', component: AboutComponent }
]; 

@NgModule({
  imports: [ 
  [CommonModule],
  [RouterModule.forRoot(routes)]],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule { }