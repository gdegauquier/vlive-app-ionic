import { Component } from '@angular/core';

import { OnInit } from '@angular/core';


import { NavController } from 'ionic-angular';

import {Station} from './station';
import {StationService} from './station.service';
import {StationFilterPipe} from './station-filter.pipe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StationService],
  pipes: [StationFilterPipe]
})
export class HomePage {

  stations : Station[] ;
  numbers = [];
  query: string = '';



  constructor(navCtrl: NavController, public stationService : StationService) {
  }

  

  ngOnInit(): void {


      this.getStations();
  }

  getStations(): void {
    this.stationService.getStations().then(stations => this.stations = stations);
  }

  filterItems() {

      this.getStations();

      let val = this.query;
      if (val && val.trim() != '') {
        this.stations = this.stations.filter((station) => {
        return (station.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }

  }


}
