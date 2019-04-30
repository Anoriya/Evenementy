import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
formon=false;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  formonoff(){
    this.formon = true;
  }
  formoffon(){
    this.formon = false;
  }
}
