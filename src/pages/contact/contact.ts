import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private storage: Storage) {

  }
  logout(){

        Promise.all([
            /** Stockage du token en interne */
            this.storage.remove('jwt'),
            this.storage.remove('userInfos'),

            /** Stockage des informations de l'utilisateur */

            /** Stockage des notifications */

        ]).then(() => {

          this.navCtrl.setRoot(LoginPage);
          let elements = document.querySelectorAll(".tabbar");

      if (elements != null) {
          Object.keys(elements).map((key) => {
              elements[key].style.display = 'none';
          });
      }

        });
  }

}
