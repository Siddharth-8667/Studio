import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddProjectsComponent } from './admin-add-projects/admin-add-projects.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminUpdateProjectsComponent } from './admin-update-projects/admin-update-projects.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { UserContactUsComponent } from './user-contact-us/user-contact-us.component';
import { UserAboutUsComponent } from './user-about-us/user-about-us.component';
import { AppServerModule } from './app.module.server';
import { UserInteriorProjectsComponent } from './user-interior-projects/user-interior-projects.component';
import { UserResidentialProjectsComponent } from './user-residential-projects/user-residential-projects.component';
import { UserComplitedProjectsComponent } from './user-complited-projects/user-complited-projects.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminHomeComponent,
    AdminAddProjectsComponent,
    AdminAuthComponent,
    AdminUpdateProjectsComponent,
    UserAuthComponent,
    HomeComponent,
    ProjectDetailsComponent,
    UserContactUsComponent,
    UserAboutUsComponent,
    UserInteriorProjectsComponent,
    UserResidentialProjectsComponent,
    UserComplitedProjectsComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
