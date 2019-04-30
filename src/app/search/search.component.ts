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
  constructor(private app:AppComponent,private data:DataService) { }

  ngOnInit() {
    this.data.getEvents().subscribe(res => {
      this.events = res;
    });
  }
    formonoff(){
        this.formon = true;
    }
    formoffon(){
        this.formon = false;
    }
}
