import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  formon=false;
  pub=true;
  events;
  model;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getMyEvents().subscribe(res => {
      this.events = res;
      console.log(this.events);
    });
  }
  ajouterEvt(){
    this.data.addEvent(this.model).subscribe(()=> location.reload());
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
