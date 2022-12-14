import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UserListPageComponent } from './user-list-page/user-list-page.component';
import { UserDetailPageComponent } from './user-detail-page/user-detail-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleBootstrapNavComponent } from './simple-bootstrap-nav/simple-bootstrap-nav.component';
import { AngularBootstrapNavComponent } from './angular-bootstrap-nav/angular-bootstrap-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    UserListPageComponent,
    UserDetailPageComponent,
    SimpleBootstrapNavComponent,
    AngularBootstrapNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
