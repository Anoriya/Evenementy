import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {event} from '../event';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  formon=false;
  pub=true;
  events;
  model=new event();
  filtre='music';
  key;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getMyEvents().subscribe(res => {
      this.events = res;
      console.log(this.events);
    });
  }
  setvalue(h){this.filtre=h;}
  setkey(h){this.key=h;}
  search(){
    if(this.filtre=='music'){
      this.data.getMyEventsByMusic(this.key).subscribe(res => {
        this.events = res;
        console.log(this.events);
      });}
    else {this.data.getMyEventsByName(this.key).subscribe(res => {
      this.events = res;
      console.log(this.events);
    });}
  }
  ajouterEvt(){
    console.log(this.model);
    this.data.addEvent(this.model).subscribe(()=> location.reload(),error => console.log(error));
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
