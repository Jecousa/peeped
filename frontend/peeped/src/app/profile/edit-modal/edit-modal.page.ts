import { Component, OnInit, Input } from '@angular/core';
import { USERS, User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {
  users = USERS;
  @Input() user: User;
  
  constructor() { }

  ngOnInit() {
  }

}
