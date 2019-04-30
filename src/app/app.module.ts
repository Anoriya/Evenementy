import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule} from './app-routing.module';
import { SearchComponent } from './search/search.component';
import { EventComponent} from './event/event.component';
import { CovoiturageComponent } from './covoiturage/covoiturage.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { DataService} from './data.service';
import { EditaccountsComponent } from './editaccounts/editaccounts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    EventComponent,
    CovoiturageComponent,
    ProfileComponent,
    EditProfileComponent,
    FooterComponent,
    ContactComponent,
    MyProfileComponent,
    HomeComponent,
    UserComponent,
    PmComponent,
    AdminComponent,
    EditaccountsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [httpInterceptorProviders, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
