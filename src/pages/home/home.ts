import { Component } from '@angular/core';

import { OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Station} from './station';
import {StationService} from './station.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StationService]
})
export class HomePage {

  stations : Station[] ;
  query: string = '';

  init: string = null ;


  constructor(navCtrl: NavController, public stationService : StationService) {



  }

  

  ngOnInit(): void {
    if ( this.init == null ){
      this.getStations();
      this.init = "ok";
    }
  }

  getStations(): void {
    //this.heroes = this.heroService.getHeroes();
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
