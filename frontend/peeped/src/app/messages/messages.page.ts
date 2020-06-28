import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Query, Message } from '../models/message';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  messages: Observable<Message[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.messages = this.apollo.watchQuery<Query>({
      query:  gql`
      query messaging {
        messaging {
        id
        sender
        receiver
        }
      }
      `
  })
  .valueChanges
  .pipe(
    map(result => result.data.messaging)
  );
}

}
