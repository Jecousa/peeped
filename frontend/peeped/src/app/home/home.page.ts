import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavController, IonRouterOutlet } from '@ionic/angular';
import { WelcomeModalPage } from './welcome-modal/welcome-modal.page';
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

  lat: number;
  lng: number;

  @ViewChild('map', {static: false}) mapElement: ElementRef;
   map: any;

constructor(public navCtrl: NavController, public modalController: ModalController) {}
ngOnInit() {
  this.presentModal();
}
ionViewWillEnter() {
  this.loadMap();
}
loadMap() {
  Plugins.Geolocation.getCurrentPosition().then((position) => {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    const latLng = new google.maps.LatLng(this.lat, this.lng );
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }, (err) => {
    console.log(err);
  });
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
