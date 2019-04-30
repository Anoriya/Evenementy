import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService} from '../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
id;
event;
  constructor(private act:ActivatedRoute,private data:DataService) { }

  ngOnInit() {
    this.id = this.act.snapshot.params['id'];
    console.log(this.id);
    this.data.getEvent(this.id).subscribe(res => {
      this.event = res;
      console.log(res);
    });
  }

}
