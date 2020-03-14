import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, IonRouterOutlet } from '@ionic/angular';
import { WelcomeModalPage } from './welcome-modal/welcome-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, public modalController: ModalController, private routerOutlet: IonRouterOutlet) {}
ngOnInit(){
  this.presentModal()
}
  async presentModal(){
  const modal = await this.modalController.create({
    component: WelcomeModalPage,
    componentProps: {
      'firstName': 'Douglas',
      'lastName': 'Adams',
      'middleInitial': 'N'
    },
    swipeToClose: true,
    presentingElement: await this.modalController.getTop()
  });
  return await modal.present();
}
}