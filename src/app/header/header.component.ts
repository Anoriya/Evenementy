import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';
import { TokenStorageService } from '../auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
user=false;
  constructor(private app:AppComponent,private token: TokenStorageService,private router:Router) { }

  ngOnInit() {
  }
  logout() {
    this.token.signOut();
    this.app.authority= null;
    this.router.navigate(['/']);
    // window.location.reload();
  }
}
