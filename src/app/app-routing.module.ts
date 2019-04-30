import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent} from 'src/app/carousel/carousel.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SearchComponent} from './search/search.component';
import {EventComponent} from './event/event.component';
import {CovoiturageComponent} from './covoiturage/covoiturage.component';
import {ProfileComponent} from './profile/profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {ContactComponent} from './contact/contact.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {PmComponent} from './pm/pm.component';
import {EditaccountsComponent} from './editaccounts/editaccounts.component';

const routes: Routes = [

  { path: '', component: CarouselComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component : SearchComponent},
  { path: 'event/:id', component : EventComponent},
  { path: 'cov', component : CovoiturageComponent},
  { path: 'profile', component : ProfileComponent},
  { path: 'myprofile', component : MyProfileComponent},
  { path: 'edit', component : EditProfileComponent},
  { path: 'contact', component : ContactComponent},
  { path: 'home', component: HomeComponent},
  { path: 'user', component: UserComponent},
  { path: 'pm', component: PmComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'auth/login', component: LoginComponent},
  { path: 'signup', component: RegisterComponent},
  { path: 'adminaccount', component: EditaccountsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
