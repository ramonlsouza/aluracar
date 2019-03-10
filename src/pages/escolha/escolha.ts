import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Carro } from '../../models/carro';

@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {
  public carro: Carro;
  public acessorios: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = this.navParams.get('carroSelecionado');
    this.acessorios = [
      {nome: 'Freio ABS', preco: 800},
      {nome: 'Ar-condicionado', preco: 1000},
      {nome: 'MP3 Player', preco: 500},
    ];
  }

}
