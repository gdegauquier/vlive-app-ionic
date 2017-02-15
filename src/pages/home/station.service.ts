import {Http, Headers} from '@angular/http';
import {Injectable}   from '@angular/core';
import {Station} from './station';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const BASE_URL    = "http://localhost/vlive-api/index.php/api/v1/refresh";
const STATION_URL = "http://localhost/vlive-api/index.php/api/v1/stations/";

const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class StationService {

  constructor(private http: Http) {}

  getStations() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .toPromise()
      ;
  }




  getStationById( stationId:number ){

    let test = this.http.get(STATION_URL + stationId)
    .map(res => res.json())
    .toPromise();

    return test ;

  }

  getStationByIdAndUpdateTable( stationId:number, stations:Station[] ){

    let test = this.http.get(STATION_URL + stationId)
    .map(res => res.json())
    .toPromise()
    ;

    return test;

  }


  /*   private productsUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  constructor(private http: Http) { }

  getProducts(): Observable<Post[]> {
  return this.http.get(this.productsUrl)
  .map((response: Response) => <Post[]>response.json())
  .catch(this.handleError);
}

addProduct(product: Product) {
let body = JSON.stringify({ product });
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });

return this.http.post(this.productsUrl, body, options)
.map(this.extractData)
.catch(this.handleError);
}

private extractData(res: Response) {
let body = res.json();
return body.data || {};
}

private handleError(error: Response) {
console.error(error);
return Observable.throw(error.json().error || 'Server Error');
}*/
}
