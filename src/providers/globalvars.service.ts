import {Injectable}   from '@angular/core';

@Injectable()
export class GlobalVars {

  static instance: GlobalVars;
  stationIdToCenter : number = null;

  constructor() {
    return GlobalVars.instance = GlobalVars.instance || this;
  }

  setStationIdToCenter(value:number) {
    this.stationIdToCenter = value;
  }

  getStationIdToCenter():number {
    return this.stationIdToCenter;
  }

}
