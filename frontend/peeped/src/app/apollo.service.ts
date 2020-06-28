import { Injectable } from '@angular/core';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

@Injectable({
  providedIn: 'root'
})
export class ApolloService {

  constructor(apollo: Apollo,
              httpLink: HttpLink) {
      apollo.create({
        link: httpLink.create({ uri: 'http://127.0.0.1:8000/graphql/' }),
        cache: new InMemoryCache()
      });
     }


}
