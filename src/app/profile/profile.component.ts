import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
