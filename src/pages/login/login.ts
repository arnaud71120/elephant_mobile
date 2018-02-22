import { Component } from '@angular/core';
import { NavController, ToastController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { JwtHelper } from 'angular2-jwt';
import { HttpModule } from '@angular/http';
import { TabsPage } from '../tabs/tabs';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



/**
 * SysClic (https://www.sysclic.com)
 * ©copyright Copyright (c) 2017 SysClic
 * @since v1.08.01 - 13 novembre 2017
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	responseData: any;
	userData : {
		"username": string,
		"password": string
	};
	userName : {
		"username": string
	};

    userToken: any;
    jwtHelper = new JwtHelper();

    constructor(
        public navCtrl: NavController,
        private storage: Storage,
        public toastCtrl: ToastController,
        public events: Events,
        public authService: AuthServiceProvider,
      ) {
        	this.userData = {
        		"username": "",
        		"password": ""
        	}
    }

    ionViewDidLoad() {

    }

    login() {
    if(!this.authService.controlIdentifiant(this.userData["username"],this.userData["password"])){
      return;
    };
      this.authService.postData(this.userData, 'login').then((result) => {
          this.responseData = result;

        this.storage.ready().then(() => {
          this.userToken = this.jwtHelper.decodeToken(this.responseData.jwt).user;


          Promise.all([
              /** Stockage du token en interne */
              	this.storage.set('jwt', JSON.stringify(this.responseData.jwt)),

          ]).then(() => {
              /** Evenement "Login" */
              this.events.publish('user:login');

              /** Redirection sur la page d'accueil */
              this.loadUser(this.userData["username"]);


            });
          });


      }, (err) => {
        /** Affichage d'un message d'erreur */
        let toast = this.toastCtrl.create({
              message: 'Identifiants incorrects, veuillez réessayer ou contacter un administrateur',
              duration: 2000,
              position: 'middle',
          });

          toast.present();
      });
    }

    loadUser(username){
      this.userName = {
    		"username": username,
    	};

      this.authService.loadUser(this.userName).then((result) => {
        console.log(result); 
        this.storage.set('userInfos', result);
      }).then(() => {
        this.navCtrl.push(TabsPage);
      });
    }


}
