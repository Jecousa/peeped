import { Component, OnInit, Input } from '@angular/core';
import { NOTIFICATIONS } from 'src/app/models/notification';

@Component({
  selector: 'app-notificaiton-list',
  templateUrl: './notificaiton-list.component.html',
  styleUrls: ['./notificaiton-list.component.scss'],
})
export class NotificaitonListComponent implements OnInit {

  notifications = NOTIFICATIONS;
  @Input() notification: Notification;

  constructor() { }

  ngOnInit() {}

}
