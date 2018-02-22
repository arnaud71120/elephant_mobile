import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Http, Headers } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { MapsPage } from '../pages/maps/maps';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ElephantServiceProvider } from '../providers/elephant-service/elephant-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              geolocation: Geolocation,
              splashScreen: SplashScreen,
              public storage: Storage,
              public http: Http,
              public push: Push,
              public elephant: ElephantServiceProvider,
              public authService: AuthServiceProvider
            )
              {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }




}
