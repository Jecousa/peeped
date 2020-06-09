import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { WelcomeModalPage } from './welcome-modal/welcome-modal.page';
import { Plugins } from '@capacitor/core';
import { User, USERS } from '../models/user';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  lat: number;
  lng: number;
  zoom:number = 15;

  users = USERS;
  @Input() user: User;
  @ViewChild('map', {static: false}) mapElement: ElementRef;
   map: any;
  modalCtrl: any;

constructor(public navCtrl: NavController, public modalController: ModalController) {}

ngOnInit() {
  this.presentModal();
}
ionViewWillEnter() {
  this.loadMap();
}
changeZoom($zoomChange){
  console.log($zoomChange);
  console.log(this.zoom);
  return $zoomChange
}
loadMap() {
  Plugins.Geolocation.getCurrentPosition().then((position) => {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    this.zoom;
    console.log(this.zoom)
    const latLng = new google.maps.LatLng(this.lat, this.lng );
    const mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: this.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var marker = new google.maps.Marker({position:latLng});
marker.setMap(this.map);
  }, (err) => {
    console.log(err);
  });
}
dismiss() {
  this.modalCtrl.dismiss({
    dismissed: true
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

