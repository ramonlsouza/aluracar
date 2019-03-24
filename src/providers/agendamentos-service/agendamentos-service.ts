import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Agendamento } from '../../models/agendamento';
import { ApiServiceProvider } from '../api-service/api-service';

@Injectable()
export class AgendamentosServiceProvider {
  _url:string;

  constructor(private _api: ApiServiceProvider, private _http: HttpClient) {
    this._url = this._api.url;
  }

  agenda(agendamento: Agendamento){
    return this._http.post(this._url+'/agendamento/agenda',agendamento)
    .do(() => agendamento.enviado = true)
    .catch((err) => Observable.of(new Error('Falha no agendamento!')));
  }

}
