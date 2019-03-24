import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario';

@Injectable()
export class UsuariosServiceProvider {
  private _usuarioLogado: Usuario;

  constructor(private _http: HttpClient) {
  }

  efetuaLogin(email, senha){
    this._http.post<Usuario>('http://localhost:8080/api/login', {email, senha})
    .do((usuario: Usuario) => this._usuarioLogado = usuario);
  }

  obtemUsuarioLogado(){
    return this._usuarioLogado;
  }

}
