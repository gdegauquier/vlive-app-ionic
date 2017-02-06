import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { DetailPage } from '../pages/detail/detail';

import { StationService }  from '../pages/home/station.service';
import {StationFilterPipe} from '../pages/home/station-filter.pipe';

import {FocusDirective} from '../pages/home/focus.directive';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, 
    StationFilterPipe,
    FocusDirective,
    DetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: 
  [
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    StationService
  ]
})
export class AppModule {}
