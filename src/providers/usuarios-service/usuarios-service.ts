import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario';
import { ApiServiceProvider } from '../api-service/api-service';

const CHAVE = 'avatar-usuario';

@Injectable()
export class UsuariosServiceProvider {
  private _usuarioLogado: Usuario;
  _url:string;

  constructor(private _api: ApiServiceProvider, private _http: HttpClient) {
    this._url = this._api.url;
  }

  efetuaLogin(email, senha){
    return this._http.post<Usuario>(this._url+'/login', {email, senha})
    .do((usuario: Usuario) => this._usuarioLogado = usuario);
  }

  obtemUsuarioLogado(){
    return this._usuarioLogado;
  }

  salvaAvatar(avatar){
    localStorage.setItem(CHAVE, avatar);
  }

  obtemAvatar(){
    return localStorage.getItem(CHAVE)
    ? localStorage.getItem(CHAVE)
    : 'assets/img/avatar-padrao.jpg';
  }

}
