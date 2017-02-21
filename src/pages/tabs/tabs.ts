import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page


  tab1Root: any = HomePage;
  tab2Root: any = MapPage;
  tab3Root: any = ContactPage;

 // https://ionicallyspeaking.com/2016/03/10/global-variables-in-ionic-2/

}
