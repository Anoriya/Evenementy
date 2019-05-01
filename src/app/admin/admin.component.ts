import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { event} from '../event';
import {AppComponent} from '../app.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
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
setvalue(h){this.filtre=h;}
setkey(h){this.key=h;}
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
search(){
  if(this.filtre=='music'){
    this.data.getEventsByMusic(this.key).subscribe(res => {
      this.events = res;
      console.log(res);
      console.log(this.key);
    });}
  else {this.data.getEventsByName(this.key).subscribe(res => {
    this.events = res;
    console.log(res);
  });}
}
}
