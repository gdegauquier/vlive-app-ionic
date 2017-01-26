import { Component } from '@angular/core';
import { Hero } from './hero';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	title:string;
	//content:string;
	content:string[];
	heroes:Hero[];
	clickMessage:string;	


	constructor(){
		this.title = 'v-live';
		this.content = ['villes', 'stations', 'velos','emplacements'];

		this.heroes = [
			new Hero(1, 'test_1'),
			new Hero(2, 'test_2'),
			new Hero(3, 'test_3'),
			new Hero(4, 'test_4')
		] ;

	}




  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }


}
