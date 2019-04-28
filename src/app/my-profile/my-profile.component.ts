import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  formon=false;
  pub=true;
  constructor() { }

  ngOnInit() {
  }
  formonoff(){
    this.formon = true;
  }
  formoffon(){
    this.formon = false;
  }
  pubonoff(){
    this.pub = true;
  }
  puboffon(){
    this.pub = false;
  }
}
