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
  filtre='music';
  key;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getMyEvents().subscribe(res => {
      this.events = res;
      console.log(this.events);
    });
  }
  setmusic(){this.filtre='music';}
  setname(){this.filtre='name';}
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
