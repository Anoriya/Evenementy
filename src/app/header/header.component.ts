import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
user=false;
  constructor(private app:AppComponent,private token: TokenStorageService) { }

  ngOnInit() {
  }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
