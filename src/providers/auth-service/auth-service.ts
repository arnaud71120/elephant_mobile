import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

import { ElephantServiceProvider } from '../elephant-service/elephant-service';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {


  constructor(public http: Http, public elephant: ElephantServiceProvider,public alertCtrl: AlertController,private storage: Storage) {
    }

    postData(credentials, action) {

    	return new Promise((resolve, reject) => {
    		let headers = new Headers();
    		headers.append('Content-type', 'application/json');

    		this.http.post(
    			this.elephant.urlWebsite + '/app/' + action + '.app' ,
    			JSON.stringify(credentials),
    			{ headers: headers }
    		).subscribe(res => {
    			resolve(res.json());
    		}, (err) => {
    			reject(err);
    		});
    	});
    }

    controlIdentifiant(username:String,password:String){
      if(!username || !password) {
        let alert = this.alertCtrl.create({
        title: 'erreur',
        subTitle: 'Identifiant ou mot de passe non renseigné',
        buttons: ['OK']
        });
        alert.present();
        return false;
      }
      return true
    }
    loadUser(credentials){
      return new Promise((resolve, reject) => {
              let headers = new Headers();
          headers.append('Content-type', 'application/json');

          /** On passe le jeton à la requête */
          this.storage.get('jwt').then((jwt) => {
              headers.append('Authorization', jwt);
          }).then(() => {

              this.http.post(
                  this.elephant.urlWebsite + '/app/loaduser.app',
                  JSON.stringify(credentials),
                  { headers: headers }
              ).subscribe((result) => {
                  	resolve(result.json());
              }, (err) => {
                  console.log('error: ' + err);
              });

          });
        });
    }


    loadChantier(credentials){
      console.log(credentials);
      return new Promise((resolve, reject) => {
              let headers = new Headers();
          headers.append('Content-type', 'application/json');

          /** On passe le jeton à la requête */
          this.storage.get('jwt').then((jwt) => {
              headers.append('Authorization', jwt);
          }).then(() => {

              this.http.post(
                  this.elephant.urlWebsite + '/app/loadchantier.app',
                  JSON.stringify(credentials),
                  { headers: headers }
              ).subscribe((result) => {
                  	resolve(result.json());
              }, (err) => {
                  console.log('error: ' + err);
              });

          });
        });
    }

    loadSemaine(credentials){
      console.log(credentials);
      return new Promise((resolve, reject) => {
              let headers = new Headers();
          headers.append('Content-type', 'application/json');

          /** On passe le jeton à la requête */
          this.storage.get('jwt').then((jwt) => {
              headers.append('Authorization', jwt);
          }).then(() => {

              this.http.post(
                  this.elephant.urlWebsite + '/app/loadsemaine.app',
                  JSON.stringify(credentials),
                  { headers: headers }
              ).subscribe((result) => {
                  	resolve(result.json());
              }, (err) => {
                  console.log('error: ' + err);
              });

          });
        });
    }

}
