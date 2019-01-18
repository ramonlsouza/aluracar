import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../../models/carro';

/*
  Generated class for the CarrosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarrosServiceProvider {

  constructor(private _http: HttpClient) {
  }
  lista(){
    return this._http.get<Carro[]>('http://localhost:8080/api/carro/listaTodos');
  }
}
