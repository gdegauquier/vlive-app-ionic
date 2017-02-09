import { Component } from '@angular/core';
import {EventEmitter} from "@angular/common/src/facade/async";
import { PopoverController } from 'ionic-angular';

import { OnInit } from '@angular/core';


import { NavController, LoadingController } from 'ionic-angular';

import {Station} from './station';
import {StationService} from './station.service';

import {DetailPage} from '../detail/detail';
import {PopoverPage} from './popover.page';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [StationService],
  entryComponents: [DetailPage, PopoverPage]
})
export class HomePage {

  public loading ;
  stations : Station[] ;
  stationsAll : Station[];
  numbers = [];
  query: string = '';
  search:boolean = false;
  searchInput = "";


  constructor( public navCtrl: NavController,
              public stationService : StationService,
              public loadingCtrl: LoadingController,              public popoverCtrl: PopoverController
            ) {
     this.navCtrl = navCtrl;

  }

  ngOnInit(): void {
      this.getStations();
  }

//menu popup (refresh)
  presentPopover(myEvent) {
      let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
      });
    }


//search
  onInput($event){
    this.query = this.searchInput;
    this.filterItems( this.searchInput );
  }

  onCancel($event){
    this.search = false;
    this.query ='';
    this.filterItems( this.query );
  }


  //keyboard
  /*onKey(value: string) {
    this.query = value ;
    this.filterItems( value );
    //console.log(this.stations);
  }*/

  //get DATA
  getStations(): void {

  //  this.loading.present();

    this.stationService.getStations().then(stations =>
      this.stations = stations
      );

  //  this.loading.dismiss();
  }

  filterItems( query:string ) {
      //console.log("query : "+query);

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


  switchTabs( stationId:number ){
      console.log(stationId);
      this.navCtrl.push(DetailPage, { id : stationId } );
  }



}
