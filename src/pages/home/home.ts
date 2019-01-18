import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Carro } from '../../models/carro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public carros: Carro[];

  constructor(public navCtrl: NavController) {
    this.carros = [
      {nome: "Opala", preco: 20000},
      {nome: "Brasília", preco: 12000},
      {nome: "Monza", preco: 15000},
      {nome: "Passat", preco: 13500},
      {nome: "Chevette", preco: 10000},
    ];
  }

}
