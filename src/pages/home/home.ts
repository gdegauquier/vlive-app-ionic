import { Component } from '@angular/core';

import { PopoverController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NavController, LoadingController } from 'ionic-angular';

import { OnInit } from '@angular/core';




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

  loader ;
  stations : Station[] ;
  stationsAll : Station[];
  numbers = [];
  query: string = '';
  search:boolean = false;
  searchInput = "";



  constructor( public navCtrl: NavController,
               public stationService : StationService,
               public loadingCtrl: LoadingController,
               public popoverCtrl: PopoverController,
               public toastCtrl: ToastController
            ) {
     this.navCtrl = navCtrl;
     this.loader = loadingCtrl.create();

  }

  ngOnInit(): void {



      this.getStations();
  }

//in case of API error
  presentToast() {
     let toast = this.toastCtrl.create({
       message: 'Erreur survenue. Veuillez rafraîchir la page.',
       duration: 3000
     });
     toast.present();
   }

//menu popup (refresh)
  presentPopover(myEvent) {

     var a = this;

      let popover = this.popoverCtrl.create(PopoverPage,
        { refreshParent: function(){
                          a.getStations();
                        }
        });
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

  //get DATA
  getStations(): void {

    var a = this;
    this.stationsAll = [];

    this.loader.present() ;
  /*function(){
         console.log("status API OK.");

         a.loader.dismiss();
      })*/

console.log("Avant API OK.");

          a.stationService.getStations()
            .then( (data) => {
                this.stations = data;
                this.loader.dismiss();
                console.log("Apres API OK.")
             }
           )
          .catch( () => {
              this.loader.dismiss();
              this.presentToast();
              console.log("Apres API KO.")
            }
          );

  }

  filterItems( _query:string ) {

    //query ?
    if ( _query != null && _query.length > 0 ){

    // svg des datas
      if ( this.stationsAll == null || this.stationsAll.length == 0){
            this.stationsAll = this.stations;
      }

        _query = _query.toLowerCase();

        this.stations = [];

        if ( this.stationsAll != null && this.stationsAll.length != 0){
            for (let row of this.stationsAll) {

                if ( row.name.toLowerCase().indexOf(   _query   ) > -1 ||
                     row.town_name.toLowerCase().indexOf(   _query   ) > -1
                  ){
                  //console.log("OK ! " + row.name);
                  this.stations.push( row );
                }

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

      var a = this;

      a.stationService.getStationByIdAndUpdateTable( stationId , a.stations )
      .then(

        function(valeur) {

          for (let station of a.stations) {
            if (  station.id == stationId   ){
              station.bikes = valeur[0].bikes;
              station.attachs = valeur[0].attachs;
            }
          }

          }

      );

  }

  test(){
    console.log("test");
  }



}
