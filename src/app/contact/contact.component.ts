import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {mail} from '../mail';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
model=new mail();
  constructor(private data:DataService) { }

  ngOnInit() {
  }

onSubmit(){
    this.data.sendmail(this.model).subscribe(res => {
      console.log("ok");
      location.reload();
    });
}
}
