import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path: 'home',  component: HomeComponent, data: {animation: 'isLeft'}},
  {path: 'about', component: AboutComponent, data: {animation: 'isAbout'}},
  {path: 'work', component: WorkComponent, data: {animation: 'isWork'}},
  {path: 'contact', component: ContactComponent, data: {animation: 'isRight'}},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
