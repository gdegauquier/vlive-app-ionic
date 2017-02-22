import {Injectable, EventEmitter  }   from '@angular/core';

@Injectable()
export class GlobalVars {

  static instance: GlobalVars;
  stationIdToCenter : number = null;
  tabChanged:EventEmitter<number> = new EventEmitter();

  constructor() {
    return GlobalVars.instance = GlobalVars.instance || this;
  }

  setStationIdToCenter(value:number) {
    this.stationIdToCenter = value;
    this.tabChanged.emit( value );
  }

  getStationIdToCenter():number {
    return this.stationIdToCenter;
  }

}
