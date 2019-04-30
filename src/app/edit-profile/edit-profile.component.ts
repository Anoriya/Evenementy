import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {user} from '../user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
formon=false;
model=new user();
user;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getUser().subscribe(res => {
      this.user = res;
    });
  }
  editprofile(){
    this.data.editprofile(this.model).subscribe(res => {
      console.log();
    });
  }
    formonoff(){
        this.formon = true;
    }
    formoffon(){
        this.formon = false;
    }
}
