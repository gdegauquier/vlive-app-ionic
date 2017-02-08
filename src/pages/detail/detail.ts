import { Component, ViewChild, OnInit } from '@angular/core';

import { NavController , NavParams } from 'ionic-angular';

import {Station} from '../home/station';
import {StationService} from '../home/station.service';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers: [StationService]
})
export class DetailPage{

  _options;
  id:number;
  stations:Station[];
  @ViewChild('mySlider') mySlider: any;

  constructor( navParams : NavParams, public stationService : StationService ) {
    this.id = navParams.get("id");

    this._options = {
      slidesPerView:1,
      pager: true,
      onInit:()=>{}
    }

  }

  ngOnInit(): void {

    this.getStationById( this.id );
    console.log("id "+this.id)

  }

  //get DATA
  getStationById( id:number ): void {
    this.stationService.getStationById(id).then(stations => this.stations = stations );
  }

}
