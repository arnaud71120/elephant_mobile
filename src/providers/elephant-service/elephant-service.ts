import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * SysClic (https://www.sysclic.com)
 * ©copyright Copyright (c) 2017 SysClic
 * @since v1.08.01 - 13 novembre 2017
 */

@Injectable()
export class ElephantServiceProvider {


	public	nom: string;
    public  urlWebsite: string;
    public  urlMembers: string;


  	constructor(public http: Http) {

 
   		  this.nom 		  = 'Elephant Pi Install';
        this.urlWebsite   = 'https://appli.pi-install.com';
        this.urlMembers   = 'https://elephanteau.pi-install.com';
  	}

}
