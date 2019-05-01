import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { event} from '../event';
import {AppComponent} from '../app.component';
import {DataService} from '../data.service';

@Component({
  selector: 'app-editrequest',
  templateUrl: './editrequest.component.html',
  styleUrls: ['./editrequest.component.scss']
})
export class EditrequestComponent implements OnInit {
  reqs;
  model= new event();
  filtre= 'music';
  key;

  constructor(private app:AppComponent,private data:DataService) { }

  ngOnInit() {
    this.data.getReqs().subscribe(res => {
      this.reqs = res;
      console.log(this.reqs);
    });
  }
  deletevent(id){
    this.data.deletereq(id).subscribe(res => {
      console.log("ok");
      location.reload();
    });
  }
  acceptevent(id){
    this.data.acceptreq(id).subscribe(res => {
      console.log("ok");
      location.reload();
    });
  }
  setvalue(h){this.filtre=h;}
  setkey(h){this.key=h;}

  search(){
    if(this.filtre == 'music'){
      this.data.getReqsByMusic(this.key).subscribe(res => {
        this.reqs = res;
        console.log(res);
        console.log(this.key);
      });}
    else {this.data.getReqsByName(this.key).subscribe(res => {
      this.reqs = res;
      console.log(res);
    });}
  }
}

