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
  stationsAll : Station[];
  numbers = [];
  query: string = '';



  constructor(navCtrl: NavController, public stationService : StationService) {
  }

  
  ngOnInit(): void {

      this.getStations();

  }


  //keyboard
  onKey(value: string) {
    this.query = value ;
    this.filterItems( value );
    //console.log(this.stations);
  }

  //get DATA
  getStations(): void {
    this.stationService.getStations().then(stations => 
      this.stations = stations 
      ); 
  }

  filterItems( query:string ) {
      console.log("query : "+query);

    if ( query != null && query.length > 0 ){
        
      if ( this.stationsAll == null || this.stationsAll.length == 0){
            this.stationsAll = this.stations
      }

        this.stations = [];
        for (let row of this.stationsAll) {
          
            if ( row.name.indexOf(   query   ) > -1 ){
              console.log("OK ! " + row.name);
              this.stations.push( row );
            }

        }

        return ;
    }
    this.getStations();
  
  }


}
