import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContactUsComponent } from './user-contact-us/user-contact-us.component';
import { UserAboutUsComponent } from './user-about-us/user-about-us.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HomeComponent } from './home/home.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { authGuard } from './auth.guard';
import { AdminUpdateProjectsComponent } from './admin-update-projects/admin-update-projects.component';
import { AdminAddProjectsComponent } from './admin-add-projects/admin-add-projects.component';
import { UserInteriorProjectsComponent } from './user-interior-projects/user-interior-projects.component';
import { UserResidentialProjectsComponent } from './user-residential-projects/user-residential-projects.component';
import { UserComplitedProjectsComponent } from './user-complited-projects/user-complited-projects.component';

const routes: Routes = [ { path: 'contact-us', component: UserContactUsComponent },
{ path: 'about-us', component: UserAboutUsComponent },
{ path: 'projects', component: ProjectDetailsComponent },
{ path:'',component:HomeComponent},
{
  path:'admin-auth',component:AdminAuthComponent,
},{
  component:AdminHomeComponent,
  path:'admin-home',
  canActivate:[authGuard]
},
{
  component:AdminUpdateProjectsComponent,
  path:'admin-update-projects',
  canActivate:[authGuard]

},
{
  path:'admin-add-projects',
  component:AdminAddProjectsComponent,
  canActivate:[authGuard]//apply authentication
 },{
  component:UserInteriorProjectsComponent,
  path:'user-interior-projects',
  canActivate:[authGuard]
  
 },{
  component:UserResidentialProjectsComponent,
  path:'user-residential-projects',
  canActivate:[authGuard]
 },{
  component:UserComplitedProjectsComponent,
  path:'user-complited-projects',
  canActivate:[authGuard]
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
