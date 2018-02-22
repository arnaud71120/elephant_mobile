import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  semaine: any;
  userDetails: {
      'nom': string,
      'prenom': string,
      'fk_interlocuteur': number
  };
  constructor(public navCtrl: NavController,private storage: Storage,public authService: AuthServiceProvider) {
      console.log('constructeur');
    this.userDetails = {
                    nom: '',
                    prenom: '',
                    fk_interlocuteur: ''
                };
    this.semaine = [];
      this.loadUser();
  }
  itemSelected(data){
    console.log(data);
  }
  loadUser(){
    console.log('loadUser');
    this.storage.get('userInfos').then((value) => {
      this.userDetails.nom = value['interlocuteurs']['nom'];
      this.userDetails.prenom = value['interlocuteurs']['prenom'];
      this.userDetails.fk_interlocuteur = value['interlocuteurs']['id'];
      }
  ).then(() => {
    this.authService.loadSemaine(this.userDetails).then((result) => {
      Object.keys(result).forEach(key=> {
        Object.keys(result[key]).forEach(key2=> {
          console.log(result[key][key2]);
        this.semaine.push(result[key][key2]);
        console.log(this.semaine);
          } );
        } );

    })
  });
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
