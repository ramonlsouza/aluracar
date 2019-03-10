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
  public acessorios: Acessorio[];
  private _precoTotal: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carro = this.navParams.get('carroSelecionado');
    this._precoTotal = this.carro.preco;

    this.acessorios = [
      {nome: 'Freio ABS', preco: 800},
      {nome: 'Ar-condicionado', preco: 1000},
      {nome: 'MP3 Player', preco: 500},
    ];
  }

  atualizaTotal(ativado:boolean, acessorio: Acessorio){
    ativado?
      this._precoTotal += acessorio.preco:
      this._precoTotal -= acessorio.preco;
  }
  //como atributo é privado, precisa de getter para acessar de fora
  get precoTotal(){
    return this._precoTotal;
  }

}
