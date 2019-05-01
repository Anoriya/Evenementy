import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../data.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
events;
  constructor(config: NgbCarouselConfig,private data:DataService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;

    config.showNavigationArrows = true;
  }

  ngOnInit() {
    this.data.getEvents().subscribe(res => {
      this.events = res;
    });
  }

}
