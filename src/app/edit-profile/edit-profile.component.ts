import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
formon=false;
  constructor() { }

  ngOnInit() {
  }
    formonoff(){
        this.formon = true;
    }
    formoffon(){
        this.formon = false;
    }
}
