import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StationService} from '../home/station.service';

declare var google;

// https://unpkg.com/leaflet@1.0.3/dist/leaflet.js
// http://haoliangyu.github.io/2016/05/06/Making-A-Map-with-Leaflet-in-TypeScript/


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [StationService]
})
export class AboutPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public stationService : StationService,) {

  }



/*
    var mymap = L.map('mapid').setView([47.36865, 8.539183], 10);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  		maxZoom: 18,
  		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  		id: 'mapbox.streets'
  	}).addTo(mymap);

  	L.marker([51.5, -0.09]).addTo(mymap);

  	L.circle([51.508, -0.11], {
  		color: 'red',
  		fillColor: '#f03',
  		fillOpacity: 0.5,
  		radius: 500
  	}).addTo(mymap);

  	L.polygon([
  		[51.509, -0.08],
  		[51.503, -0.06],
  		[51.51, -0.047]
  	]).addTo(mymap);
*/

//http://codepen.io/anon/pen/xGJyYx
//https://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/

  ngOnInit(): void {
    this.loadMap();
  }

  loadMap() : void{

    //default -- station 25 which is LILLE FLANDRES
    let latLng = new google.maps.LatLng(50.63600, 3.06968);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.addMarker();

  }

  addMarker() : void{



    //  this.presentLoader();

  console.log("Avant API OK.");

            this.stationService.getStations()
              .then( (data) => {

                  for (let row of data) {

                      /*if ( row.name.toLowerCase().indexOf(   _query   ) > -1 ||
                           row.town_name.toLowerCase().indexOf(   _query   ) > -1
                        ){
                        //console.log("OK ! " + row.name);
                        this.stations.push( row );
                      }*/

                     if (   row.latitude != 0 && row.longitude != 0    ){

                       let marker = new google.maps.Marker({
                         map: this.map,
                         animation: google.maps.Animation.DROP,
                         position:new google.maps.LatLng( row.latitude , row.longitude)
                       });

                       let content = "<h4>Information!</h4>";

                       this.addInfoWindow(marker, content);

                     }


                  }


                  console.log("Apres API OK.")
               }
             )
            .catch( () => {
              //  this.dismissLoader();
              //  this.presentToast();
                console.log("Apres API KO.")
              }
            );







}

addInfoWindow(marker, content) : void{

  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });

}





}
