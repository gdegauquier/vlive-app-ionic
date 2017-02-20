import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as leaflet from 'leaflet';

// https://unpkg.com/leaflet@1.0.3/dist/leaflet.js
// http://haoliangyu.github.io/2016/05/06/Making-A-Map-with-Leaflet-in-TypeScript/


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(): void {

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




  }


}
