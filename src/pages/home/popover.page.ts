import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  template:
    `
    <ion-list>
      <ion-item (click)=refresh()>
        <ion-icon name="refresh" item-left ></ion-icon>
        Actualiser
      </ion-item>
    </ion-list>
    `
})
export class PopoverPage {

callback = null ;
viewCtrlP:ViewController = null ;

  constructor(private viewCtrl: ViewController, private params: NavParams) {
    this.viewCtrlP = viewCtrl ;
    this.callback = this.params.get('refreshParent');

  }

  close() {
    this.viewCtrlP.dismiss();
  }

  refresh(){
    location.reload();
    this.close();

  }


}
