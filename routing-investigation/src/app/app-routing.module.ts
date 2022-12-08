import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent }, 
  { path: 'about', component: AboutPageComponent }, 
  { path: 'contact', component: ContactPageComponent }, 
  { path: 'users', component: UserListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
