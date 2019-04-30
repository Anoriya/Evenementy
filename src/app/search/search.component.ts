import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';
import { DataService} from '../data.service';
import { event} from '../event';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
formon=false;
events;
model=new event();
filtre='music';
key;
  constructor(private app:AppComponent,private data:DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe(res => {
      this.events = res;
      console.log(this.events);
    });
  }
  setmusic(){this.filtre='music';}
  setname(){this.filtre='name';}
  ajouterEvt(){
    console.log(this.model);
    this.data.addEvent(this.model).subscribe(()=> console.log('hii'),error => console.log(error));
  }
    formonoff(){
        this.formon = true;
    }
    formoffon(){
        this.formon = false;
    }
  search(){
    if(this.filtre=='music'){
      this.data.getEventsByMusic(this.key).subscribe(res => {
        this.events = res;
        console.log(this.events);
      });}
    else {this.data.getEventsByName(this.key).subscribe(res => {
      this.events = res;
      console.log(this.events);
    });}
    }
  }
