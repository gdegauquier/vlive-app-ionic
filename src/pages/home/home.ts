import { Component } from '@angular/core';
import {EventEmitter} from "@angular/common/src/facade/async";

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
  search:boolean = false;
  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();
  navCtrl ;


  constructor(navCtrl: NavController, public stationService : StationService) {
     this.navCtrl = navCtrl;
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
            this.stationsAll = this.stations;
      }

        query = query.toLowerCase();

        this.stations = [];
        for (let row of this.stationsAll) {
          
            if ( row.name.toLowerCase().indexOf(   query   ) > -1 || 
                 row.town_name.toLowerCase().indexOf(   query   ) > -1
              ){
              //console.log("OK ! " + row.name);
              this.stations.push( row );
            }

        }

        return ;
    }
    this.getStations();
  
  }

  setSearch(){

      this.search = !this.search;

      if ( ! this.search){

        this.filterItems('');


      }  




  }


  switchTabs(){
     this.navCtrl.parent.select(1);
  }



}
