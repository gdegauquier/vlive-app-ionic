import { Component, ViewChild, OnInit } from '@angular/core';

import { NavController , NavParams, LoadingController, ToastController } from 'ionic-angular';

import {Station} from '../home/station';
import {MapPage} from '../map/map';
import {StationService} from '../home/station.service';
import {GlobalVars} from '../../providers/globalvars.service';


//http://coenraets.org/blog/2016/01/ionicrealty-new-ionic-2-sample-application/

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers: [StationService, GlobalVars]
})
export class DetailPage{

  loader ;
  _options;
  id:number;
  stations:Station[];
  @ViewChild('mySlider') mySlider: any;

  constructor( public navParams : NavParams,
    public stationService : StationService,
    public globalVars : GlobalVars,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public nav:NavController ) {
      this.id = navParams.get("id");
      this.loader = loadingCtrl.create();

      this._options = {
        slidesPerView:1,
        pager: true,
        onInit:()=>{}
      }

    }

    ngOnInit(): void {

      this.getStationById( this.id );
      console.log("id "+this.id)

    }

    presentLoader(){
      try{
        this.loader = this.loadingCtrl.create();
        this.loader.present() ;
      }catch(e){
        console.log( "present : KO");
      }
    }

    dismissLoader(){
      try{
        this.loader.dismiss();
      }catch(e){
        console.log( "dismiss : KO");
      }
    }


    //in case of API error
    presentToast() {
      let toast = this.toastCtrl.create({
        message: 'Erreur survenue. Veuillez rafraîchir la page.',
        duration: 3000
      });
      toast.present();
    }

    //get DATA
    getStationById( id:number ): void {

      this.presentLoader();

      this.stationService.getStationById(id).then(
        //stations => this.stations = stations

        (data) => {
          this.stations = data;
          this.dismissLoader();
          console.log("Apres API OK.")
        }
      )
      .catch( () => {
        this.presentLoader();
        this.presentToast();
        console.log("Apres API KO.")
      }

    );
  }

  switchTabMap( station : Station ) : void{

    this.globalVars.setStationIdToCenter( station.id);
    this.nav.parent.select(1);

  }

}
