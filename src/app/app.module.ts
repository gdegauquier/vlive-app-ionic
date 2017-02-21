import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapPage } from '../pages/map/map';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { DetailPage } from '../pages/detail/detail';
import { PopoverPage } from '../pages/home/popover.page';

import { StationService }  from '../pages/home/station.service';



@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    PopoverPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    PopoverPage
  ],
  providers:
  [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StationService
  ]
})
export class AppModule {}
