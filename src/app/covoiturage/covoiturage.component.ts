import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-covoiturage',
  templateUrl: './covoiturage.component.html',
  styleUrls: ['./covoiturage.component.scss']
})
export class CovoiturageComponent implements OnInit {
formon = false;
  constructor(private app:AppComponent) { }

  ngOnInit() {
  }
formonoff(){
      this.formon = true;
}
    formoffon(){
        this.formon = false;
    }
}
