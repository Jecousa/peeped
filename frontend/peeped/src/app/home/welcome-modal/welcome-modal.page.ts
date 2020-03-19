import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.page.html',
  styleUrls: ['./welcome-modal.page.scss'],
})
export class WelcomeModalPage {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  constructor(navParams: NavParams, public modalCtrl: ModalController) {
    console.log(navParams.get('firstName'));

  }
  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}


