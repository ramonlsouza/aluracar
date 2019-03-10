import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Carro } from '../../models/carro';
import { AgendamentosServiceProvider } from '../../providers/agendamentos-service/agendamentos-service';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  public carro: Carro;
  public precoTotal: number;

  public nome: string = '';
  public endereco: string = '';
  public email: string = '';
  public data: string = new Date().toISOString();

  private _alerta: Alert;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private _agendamentosService: AgendamentosServiceProvider, 
    private _alertCtrl: AlertController) {
    this.carro = this.navParams.get('carroSelecionado');
    this.precoTotal = this.navParams.get('precoTotal');
  }

  agenda(){
    let agendamento = {
      nomeCliente: this.nome,
      enderecoCliente: this.endereco,
      emailCliente: this.email,
      modeloCarro: this.carro.nome,
      precoTotal: this.precoTotal,
    }

    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {text: 'ok'}
      ]
    })

    this._agendamentosService.agenda(agendamento).subscribe(
      () => {
        this._alerta.setSubTitle('Agendamento realizado!');
        this._alerta.present();
      },
      () => {
        this._alerta.setSubTitle('Falha no agendamento!');
        this._alerta.present();
      }
    );
  }
}
