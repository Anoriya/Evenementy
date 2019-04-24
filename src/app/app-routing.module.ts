import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent} from 'src/app/carousel/carousel.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [

  { path: '', component: CarouselComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component : SearchComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }