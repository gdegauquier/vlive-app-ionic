import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }

  refresh(){
    location.reload();
    close();
  }


}
