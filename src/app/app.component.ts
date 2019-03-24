import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListaAgendamentosPage } from '../pages/lista-agendamentos/lista-agendamentos';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';
@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) public nav: Nav;
  rootPage:any = LoginPage;

  public paginas = [
    {titulo: 'Agendamentos', pagina: ListaAgendamentosPage.name, icone: 'calendar'},
    {titulo: 'Perfil', pagina: PerfilPage.name, icone: 'person'}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _usuariosService: UsuariosServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irParaPagina(pagina){
    this.nav.push(pagina);
  }

  get usuarioLogado(){
    return this._usuariosService.obtemUsuarioLogado();
  }
}

