import { Component, OnInit, Input } from '@angular/core';
import { User, USERS } from '../models/user';
import { from } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { EditModalPage } from './edit-modal/edit-modal.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  users = USERS;
  @Input() user: User;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async editModal() {
    const modal = await this.modalController.create({
      component: EditModalPage
    });
    return await modal.present();
  }
}
