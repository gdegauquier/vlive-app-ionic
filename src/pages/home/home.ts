import { Component } from '@angular/core';

import { OnInit } from '@angular/core';


import { NavController } from 'ionic-angular';

import {Station} from './station';
import {StationService} from './station.service';
import {Base64} from './base64';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StationService]
})
export class HomePage {

  stations : Station[] ;
  numbers = [];
  query: string = '';
  base64:Base64  = new Base64();


  constructor(navCtrl: NavController, public stationService : StationService) {
  }

  
  ngOnInit(): void {

      this.getStations();
  }


  //keyboard
  onKey(value: string) {
    this.query = value ;
    this.filterItems( value );
    console.log(this.stations);
  }

  //get DATA
  getStations(): void {
    this.stationService.getStations().then(stations => this.stations = stations);
  }

  filterItems( query:string ) {
      console.log("query : "+this.base64.encode(query));

      if ( query && query != null && query.length > 0 ){
        this.stationService.getFilteredStations( this.base64.encode(query)+'' ).then(stations => this.stations = stations);
        return ;
    }
    this.getStations();
      
  }


}
