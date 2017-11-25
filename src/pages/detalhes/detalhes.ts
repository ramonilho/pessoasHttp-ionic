import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PessoasProvider } from '../../providers/pessoas/pessoas';

@IonicPage()
@Component({
  selector: 'page-detalhes',
  templateUrl: 'detalhes.html',
  providers: [PessoasProvider]
})
export class DetalhesPage {
  public email: string;
  public pessoa: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public pessoasProvider: PessoasProvider) {
    this.email = navParams.get("email");
    this.pessoa = pessoasProvider.loadByEmail(this.email);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesPage');
  }

}
