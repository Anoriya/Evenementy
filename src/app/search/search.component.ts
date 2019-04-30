import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';
import { DataService} from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
formon=false;
events;
model;
  constructor(private app:AppComponent,private data:DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe(res => {
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
}
