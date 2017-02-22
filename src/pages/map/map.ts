import { Component, ViewChild, ElementRef, OnInit, EventEmitter   } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {StationService} from '../home/station.service';
import {GlobalVars} from '../../providers/globalvars.service';
import {Station} from '../home/station';

declare var google;

// https://unpkg.com/leaflet@1.0.3/dist/leaflet.js
// http://haoliangyu.github.io/2016/05/06/Making-A-Map-with-Leaflet-in-TypeScript/


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [StationService, GlobalVars]
})
export class MapPage  {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  stationIdToCenter : number = 25; // which is LILLE FLANDRES

  constructor(public navCtrl: NavController, public stationService : StationService, public globalVars : GlobalVars,  public params:NavParams) {
    
  }

  //http://codepen.io/anon/pen/xGJyYx
  //https://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/

  ngOnInit(): void {

    if (  this.globalVars.getStationIdToCenter() !== null  ){
      this.stationIdToCenter = this.globalVars.getStationIdToCenter(); 
    }

    this.loadMap();

    this.globalVars.tabChanged.subscribe(
      (value) => {
        this.stationIdToCenter = value;
        this.loadMap();
      }
    );

  }



  loadMap() : void{

    //default -- station 25 which is LILLE FLANDRES
    let lat:number = 50.63600;
    let lng:number = 3.06968;

    this.stationService.getStationById(this.stationIdToCenter).then(

      (data) => {
        //this.stations = data;

        lat = data[0].latitude ;
        lng = data[0].longitude ;

        let latLng = new google.maps.LatLng(lat, lng);

        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();

        console.log("Apres API OK -- loadMap.");
      }
    )
    .catch( () => {
      console.log("Apres API KO. -- loadMap");
    }

  );

}

addMarker() : void{

  this.stationService.getStations()
  .then( (data) => {

          for (let row of data) {

              let marker = new google.maps.Marker({
                map: this.map,
                animation: google.maps.Animation.DROP,
                position:new google.maps.LatLng( row.latitude , row.longitude)
              });

              //let content = "<h4>Information!</h4>";
              //this.addInfoWindow(marker, content);

        }
  })
  .catch( () => {



  }
  );





  }










/* -- plus tard
addInfoWindow(marker, content) : void{

  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });

}*/





}
