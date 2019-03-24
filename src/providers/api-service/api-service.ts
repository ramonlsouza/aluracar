import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiServiceProvider {

  private _url: string = 'http://10.0.2.6:8080/api';

  get url() {
    return this._url;
  }

}
