import { Component } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.page.html',
  styleUrls: ['./welcome-modal.page.scss'],
})
export class WelcomeModalPage {
  public welcome: any;

  constructor(public modalCtrl: ModalController) {

  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}


