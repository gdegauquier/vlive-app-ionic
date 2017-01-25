import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	  	name = "aaaa";
  	test = "test";

  	this.http
           .get('http://mydomain.azurewebsites.net/api/products', { headers: headers })
           .map(res => res.json().data);

  constructor(public navCtrl: NavController) {



  }

}
