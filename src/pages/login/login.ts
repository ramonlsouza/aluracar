import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: String;
  senha: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  efetuaLogin(){
    console.log(this.email);
    console.log(this.senha);

    this.navCtrl.setRoot(HomePage);
  }
}
