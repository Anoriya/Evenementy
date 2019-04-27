import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covoiturage',
  templateUrl: './covoiturage.component.html',
  styleUrls: ['./covoiturage.component.scss']
})
export class CovoiturageComponent implements OnInit {
formon = false;
  constructor() { }

  ngOnInit() {
  }
formonoff(){
      this.formon = true;
}
    formoffon(){
        this.formon = false;
    }
}
