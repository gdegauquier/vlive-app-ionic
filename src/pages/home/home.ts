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

  constructor(navCtrl: NavController, public stationService : StationService) {



  }

  

  ngOnInit(): void {
    this.getStations();
  }

    getStations(): void {
    //this.heroes = this.heroService.getHeroes();
    this.stationService.getStations().then(stations => this.stations = stations);
  }


}
