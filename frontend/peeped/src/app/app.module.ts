import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeModalPage } from './home/welcome-modal/welcome-modal.page';
import { FormsModule } from '@angular/forms';
import { LocationFilterPipe } from './location-filter.pipe';
import { EditModalPage } from './profile/edit-modal/edit-modal.page';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, WelcomeModalPage, LocationFilterPipe, EditModalPage],
  entryComponents: [ WelcomeModalPage, EditModalPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ApolloModule, HttpLinkModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'http://127.0.0.1:8000/graphql/'}),
      cache: new InMemoryCache(),
    });
  }
}
