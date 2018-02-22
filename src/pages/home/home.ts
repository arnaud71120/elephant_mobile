import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { MapsPage } from '../maps/maps';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chantier: any;
  userDetails: {
      'nom': string,
      'prenom': string,
      'fk_interlocuteur': number
  };
  constructor(public navCtrl: NavController,private storage: Storage,public authService: AuthServiceProvider) {
    this.userDetails = {
                    nom: '',
                    prenom: '',
                    fk_interlocuteur: ''
                };
                this.chantier = [];
  this.loadUser();

  }
  loadUser() {
    this.storage.get('userInfos').then((value) => {
      this.userDetails.nom = value['interlocuteurs']['nom'];
      this.userDetails.prenom = value['interlocuteurs']['prenom'];
      this.userDetails.fk_interlocuteur = value['interlocuteurs']['id'];
      }
  ).then(() => {
    this.authService.loadChantier(this.userDetails).then((result) => {

        if(result['tabs']['lundi_matin']){
        this.chantier.push(result['tabs']['lundi_matin']);
      }
        if(result['tabs']['lundi_aprem']){
        this.chantier.push(result['tabs']['lundi_aprem']);
      }
        if(result['tabs']['mardi_matin']){
        this.chantier.push(result['tabs']['mardi_matin']);
      }
        if(result['tabs']['mardi_aprem']){
        this.chantier.push(result['tabs']['mardi_aprem']);
      }
        if(result['tabs']['mecredi_matin']){
        this.chantier.push(result['tabs']['mecredi_matin']);
      }
        if(result['tabs']['mecredi_aprem']){
        this.chantier.push(result['tabs']['mecredi_aprem']);
      }
        if(result['tabs']['jeudi_matin']){
        this.chantier.push(result['tabs']['jeudi_matin']);
      }
        if(result['tabs']['jeudi_aprem']){
        this.chantier.push(result['tabs']['jeudi_aprem']);
      }
        if(result['tabs']['vendredi_matin']){
        this.chantier.push(result['tabs']['vendredi_matin']);
      }
        if(result['tabs']['vendredi_aprem']){
        this.chantier.push(result['tabs']['vendredi_aprem']);
      }
        if(result['tabs']['samedi_matin']){
        this.chantier.push(result['tabs']['samedi_matin']);
      }
        if(result['tabs']['samedi_aprem']){
        this.chantier.push(result['tabs']['samedi_aprem']);
      }
        if(result['tabs']['dimanche_matin']){
        this.chantier.push(result['tabs']['dimanche_matin']);
      }
        if(result['tabs']['dimanche_aprem']){
        this.chantier.push(result['tabs']['dimanche_aprem']);
      }
        console.log(this.chantier)
    })
  });
}
maps(adresse){
  this.navCtrl.push(MapsPage, { 'adresse': adresse });
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
