import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService} from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private act:ActivatedRoute,private data:DataService) { }
usr;
user;
  ngOnInit() {
    this.usr = this.act.snapshot.params['usr'];
    this.data.getaUser(this.usr).subscribe(res => {
      this.user = res;
      console.log(res);
    });
  }
}
