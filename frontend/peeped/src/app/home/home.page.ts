import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController, IonRouterOutlet } from '@ionic/angular';
import { WelcomeModalPage } from './welcome-modal/welcome-modal.page';
import { map } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

import { Observable } from 'rxjs';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('map', {static: false}) mapElement: ElementRef;
   map: any;

constructor(public navCtrl: NavController, public modalController: ModalController, private routerOutlet: IonRouterOutlet) {}
ngOnInit() {
  this.presentModal();
}
ionViewWillEnter() {
  this.loadMap();
}
loadMap() {
  let latLng = new google.maps.LatLng(51.9036442, 7.6673267);

  let mapOptions = {
    center: latLng,
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
}
  async presentModal() {
  const modal = await this.modalController.create({
    component: WelcomeModalPage,
    swipeToClose: true,
    presentingElement: await this.modalController.getTop()
  });
  return await modal.present();
}
}
