import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { AngularBootstrapNavComponent } from './angular-bootstrap-nav/angular-bootstrap-nav.component';
import { UserModalAngularBootstrapComponent } from './user-modal-angular-bootstrap/user-modal-angular-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserModalComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    UserListPageComponent,
    AngularBootstrapNavComponent,
    UserModalAngularBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule, NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
