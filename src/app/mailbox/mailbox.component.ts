import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {
mails;
  constructor(private data: DataService) { }
  ngOnInit() {
    this.data.getMails().subscribe(res => {
      this.mails = res;
      console.log(res);
    });
  }

}
