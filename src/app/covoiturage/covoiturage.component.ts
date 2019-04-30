import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';
import { DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-covoiturage',
  templateUrl: './covoiturage.component.html',
  styleUrls: ['./covoiturage.component.scss']
})
export class CovoiturageComponent implements OnInit {
formon = false;
covs;
id;
constructor(private act:ActivatedRoute,private app:AppComponent,private data:DataService) { }

  ngOnInit() {
    this.id = this.act.snapshot.params['id'];
  this.data.getCovsbyevent(this.id).subscribe(res => {
    this.covs = res;
  });
  }
formonoff(){
      this.formon = true;
}
    formoffon(){
        this.formon = false;
    }
}
