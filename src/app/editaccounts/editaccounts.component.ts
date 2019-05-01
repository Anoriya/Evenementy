import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-editaccounts',
  templateUrl: './editaccounts.component.html',
  styleUrls: ['./editaccounts.component.scss']
})
export class EditaccountsComponent implements OnInit {
users;
key;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(res => {
      this.users = res;
      console.log(res);
    });
  }
  setkey(h){this.key = h;}

  search(){
      this.data.getUsersByUsr(this.key).subscribe(res => {
        this.users = res;
      });
  }
  deleteuser(usr){
    this.data.deleteuser(usr).subscribe(res => {
      console.log("ok");
      location.reload();
    });
  }

}
