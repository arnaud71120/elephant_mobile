webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElephantServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * SysClic (https://www.sysclic.com)
 * ©copyright Copyright (c) 2017 SysClic
 * @since v1.08.01 - 13 novembre 2017
 */
var ElephantServiceProvider = (function () {
    function ElephantServiceProvider(http) {
        this.http = http;
        this.nom = 'Elephant Pi Install';
        this.urlWebsite = 'https://appli.pi-install.com';
        this.urlMembers = 'https://elephanteau.pi-install.com';
    }
    ElephantServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ElephantServiceProvider);
    return ElephantServiceProvider;
}());

//# sourceMappingURL=elephant-service.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = (function () {
    function AboutPage(navCtrl, storage, authService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.authService = authService;
        console.log('constructeur');
        this.userDetails = {
            nom: '',
            prenom: '',
            fk_interlocuteur: ''
        };
        this.semaine = [];
        this.loadUser();
    }
    AboutPage.prototype.itemSelected = function (data) {
        console.log(data);
    };
    AboutPage.prototype.loadUser = function () {
        var _this = this;
        console.log('loadUser');
        this.storage.get('userInfos').then(function (value) {
            _this.userDetails.nom = value['interlocuteurs']['nom'];
            _this.userDetails.prenom = value['interlocuteurs']['prenom'];
            _this.userDetails.fk_interlocuteur = value['interlocuteurs']['id'];
        }).then(function () {
            _this.authService.loadSemaine(_this.userDetails).then(function (result) {
                Object.keys(result).forEach(function (key) {
                    Object.keys(result[key]).forEach(function (key2) {
                        console.log(result[key][key2]);
                        _this.semaine.push(result[key][key2]);
                        console.log(_this.semaine);
                    });
                });
            });
        });
    };
    AboutPage.prototype.logout = function () {
        var _this = this;
        Promise.all([
            /** Stockage du token en interne */
            this.storage.remove('jwt'),
            this.storage.remove('userInfos'),
        ]).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            var elements = document.querySelectorAll(".tabbar");
            if (elements != null) {
                Object.keys(elements).map(function (key) {
                    elements[key].style.display = 'none';
                });
            }
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-grid>\n  <ion-row>\n    <ion-col style="margin: auto">\n    <ion-title>About</ion-title>\n  </ion-col>\n<ion-col style="text-align: right">\n    <button ion-button (click)="logout()"><ion-icon style="right: 0px;" name="log-out"></ion-icon></button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list no-lines>\n    <button ion-item *ngFor="let data of semaine" (click)="itemSelected(data.id)">\n      {{ data.nom }}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]) === "function" && _c || Object])
    ], AboutPage);
    return AboutPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    ContactPage.prototype.logout = function () {
        var _this = this;
        Promise.all([
            /** Stockage du token en interne */
            this.storage.remove('jwt'),
            this.storage.remove('userInfos'),
        ]).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            var elements = document.querySelectorAll(".tabbar");
            if (elements != null) {
                Object.keys(elements).map(function (key) {
                    elements[key].style.display = 'none';
                });
            }
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-grid>\n  <ion-row>\n    <ion-col style="margin: auto">\n    <ion-title>Contact</ion-title>\n  </ion-col>\n<ion-col style="text-align: right">\n    <button ion-button (click)="logout()"><ion-icon style="right: 0px;" name="log-out"></ion-icon></button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__maps_maps__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, storage, authService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.authService = authService;
        this.userDetails = {
            nom: '',
            prenom: '',
            fk_interlocuteur: ''
        };
        this.chantier = [];
        this.loadUser();
    }
    HomePage.prototype.loadUser = function () {
        var _this = this;
        this.storage.get('userInfos').then(function (value) {
            _this.userDetails.nom = value['interlocuteurs']['nom'];
            _this.userDetails.prenom = value['interlocuteurs']['prenom'];
            _this.userDetails.fk_interlocuteur = value['interlocuteurs']['id'];
        }).then(function () {
            _this.authService.loadChantier(_this.userDetails).then(function (result) {
                if (result['tabs']['lundi_matin']) {
                    _this.chantier.push(result['tabs']['lundi_matin']);
                }
                if (result['tabs']['lundi_aprem']) {
                    _this.chantier.push(result['tabs']['lundi_aprem']);
                }
                if (result['tabs']['mardi_matin']) {
                    _this.chantier.push(result['tabs']['mardi_matin']);
                }
                if (result['tabs']['mardi_aprem']) {
                    _this.chantier.push(result['tabs']['mardi_aprem']);
                }
                if (result['tabs']['mecredi_matin']) {
                    _this.chantier.push(result['tabs']['mecredi_matin']);
                }
                if (result['tabs']['mecredi_aprem']) {
                    _this.chantier.push(result['tabs']['mecredi_aprem']);
                }
                if (result['tabs']['jeudi_matin']) {
                    _this.chantier.push(result['tabs']['jeudi_matin']);
                }
                if (result['tabs']['jeudi_aprem']) {
                    _this.chantier.push(result['tabs']['jeudi_aprem']);
                }
                if (result['tabs']['vendredi_matin']) {
                    _this.chantier.push(result['tabs']['vendredi_matin']);
                }
                if (result['tabs']['vendredi_aprem']) {
                    _this.chantier.push(result['tabs']['vendredi_aprem']);
                }
                if (result['tabs']['samedi_matin']) {
                    _this.chantier.push(result['tabs']['samedi_matin']);
                }
                if (result['tabs']['samedi_aprem']) {
                    _this.chantier.push(result['tabs']['samedi_aprem']);
                }
                if (result['tabs']['dimanche_matin']) {
                    _this.chantier.push(result['tabs']['dimanche_matin']);
                }
                if (result['tabs']['dimanche_aprem']) {
                    _this.chantier.push(result['tabs']['dimanche_aprem']);
                }
                console.log(_this.chantier);
            });
        });
    };
    HomePage.prototype.maps = function (adresse) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__maps_maps__["a" /* MapsPage */], { 'adresse': adresse });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        Promise.all([
            /** Stockage du token en interne */
            this.storage.remove('jwt'),
            this.storage.remove('userInfos'),
        ]).then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            var elements = document.querySelectorAll(".tabbar");
            if (elements != null) {
                Object.keys(elements).map(function (key) {
                    elements[key].style.display = 'none';
                });
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-grid>\n  <ion-row>\n    <ion-col style="margin: auto">\n    <ion-title>Chantier affectés</ion-title>\n  </ion-col>\n<ion-col style="text-align: right">\n    <button ion-button (click)="logout()"><ion-icon style="right: 0px;" name="log-out"></ion-icon></button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Bonjour {{userDetails.prenom}} {{userDetails.nom}}</h2>\n<p>\n  Voici la liste de tes derniers chantiers affectés\n</p>\n<ion-item *ngFor="let tab of chantier">\n<ion-card (click)="maps(tab.adresse_client)">\n  <ion-item  text-wrap>\n   <ion-icon name="arrow-dropright" item-left large></ion-icon>\n<h2>{{tab.numero}} : {{tab.nom_client}}-{{tab.intitule}}</h2>\n</ion-item>\n  <ion-item text-wrap>\n   <ion-icon name="briefcase" item-left large></ion-icon>\n<h2>{{tab.nom_client}}</h2>\n</ion-item>\n  <ion-item text-wrap>\n   <ion-icon name="time" item-left large></ion-icon>\n<h2>{{tab.texte}}</h2>\n</ion-item>\n  <ion-item text-wrap>\n   <ion-icon name="map" item-left large></ion-icon>\n<h2>{{tab.adresse_client}}</h2>\n</ion-item>\n</ion-card>\n</ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsPage = (function () {
    function MapsPage(navCtrl, params, geolocation) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.geolocation = geolocation;
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.myAdress = params.get('adresse');
        this.position();
    }
    MapsPage.prototype.position = function () {
        var _this = this;
        console.log('test');
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lon = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        }).then(function () {
            _this.calculateAndDisplayRoute();
        });
    };
    MapsPage.prototype.ionViewDidLoad = function () {
        this.initMap();
    };
    MapsPage.prototype.initMap = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        this.directionsDisplay.setMap(this.map);
    };
    MapsPage.prototype.calculateAndDisplayRoute = function () {
        var _this = this;
        this.directionsService.route({
            origin: this.lat + ',' + this.lon,
            destination: this.myAdress,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MapsPage.prototype, "mapElement", void 0);
    MapsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-maps',template:/*ion-inline-start:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\maps\maps.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-grid>\n  <ion-row>\n    <ion-col style="margin: auto">\n    <ion-title>Chantier affectés</ion-title>\n  </ion-col>\n\n    </ion-row>\n  </ion-grid>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n<div #map id="map" data-tap-disabled="true"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\maps\maps.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapsPage);
    return MapsPage;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_maps_maps__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_push__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_elephant_service_elephant_service__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_maps_maps__["a" /* MapsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_maps_maps__["a" /* MapsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_elephant_service_elephant_service__["a" /* ElephantServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_elephant_service_elephant_service__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, geolocation, splashScreen, storage, http, push, elephant, authService) {
        this.storage = storage;
        this.http = http;
        this.push = push;
        this.elephant = elephant;
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_10__providers_elephant_service_elephant_service__["a" /* ElephantServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * SysClic (https://www.sysclic.com)
 * ©copyright Copyright (c) 2017 SysClic
 * @since v1.08.01 - 13 novembre 2017
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, storage, toastCtrl, events, authService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.authService = authService;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
        this.userData = {
            "username": "",
            "password": ""
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.authService.controlIdentifiant(this.userData["username"], this.userData["password"])) {
            return;
        }
        ;
        this.authService.postData(this.userData, 'login').then(function (result) {
            _this.responseData = result;
            _this.storage.ready().then(function () {
                _this.userToken = _this.jwtHelper.decodeToken(_this.responseData.jwt).user;
                Promise.all([
                    /** Stockage du token en interne */
                    _this.storage.set('jwt', JSON.stringify(_this.responseData.jwt)),
                ]).then(function () {
                    /** Evenement "Login" */
                    _this.events.publish('user:login');
                    /** Redirection sur la page d'accueil */
                    _this.loadUser(_this.userData["username"]);
                });
            });
        }, function (err) {
            /** Affichage d'un message d'erreur */
            var toast = _this.toastCtrl.create({
                message: 'Identifiants incorrects, veuillez réessayer ou contacter un administrateur',
                duration: 2000,
                position: 'middle',
            });
            toast.present();
        });
    };
    LoginPage.prototype.loadUser = function (username) {
        var _this = this;
        this.userName = {
            "username": username,
        };
        this.authService.loadUser(this.userName).then(function (result) {
            console.log(result);
            _this.storage.set('userInfos', result);
        }).then(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Connexion à l\'application</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n		<ion-item>\n			<ion-label floating>Identifiant</ion-label>\n			<ion-input type="username" [(ngModel)]="userData.username" ngControl="username"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label floating>Mot de passe</ion-label>\n			<ion-input type="password" [(ngModel)]="userData.password" ngControl="password"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<button ion-button full round icon-start (click)="login()" >\n				<ion-icon name="log-in"></ion-icon>\n				Se connecter\n			</button>\n		</ion-item>\n\n\n	</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Arnaud\Documents\appHeure\appHeure\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__elephant_service_elephant_service__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, elephant, alertCtrl, storage) {
        this.http = http;
        this.elephant = elephant;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    AuthServiceProvider.prototype.postData = function (credentials, action) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-type', 'application/json');
            _this.http.post(_this.elephant.urlWebsite + '/app/' + action + '.app', JSON.stringify(credentials), { headers: headers }).subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.controlIdentifiant = function (username, password) {
        if (!username || !password) {
            var alert = this.alertCtrl.create({
                title: 'erreur',
                subTitle: 'Identifiant ou mot de passe non renseigné',
                buttons: ['OK']
            });
            alert.present();
            return false;
        }
        return true;
    };
    AuthServiceProvider.prototype.loadUser = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-type', 'application/json');
            /** On passe le jeton à la requête */
            _this.storage.get('jwt').then(function (jwt) {
                headers.append('Authorization', jwt);
            }).then(function () {
                _this.http.post(_this.elephant.urlWebsite + '/app/loaduser.app', JSON.stringify(credentials), { headers: headers }).subscribe(function (result) {
                    resolve(result.json());
                }, function (err) {
                    console.log('error: ' + err);
                });
            });
        });
    };
    AuthServiceProvider.prototype.loadChantier = function (credentials) {
        var _this = this;
        console.log(credentials);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-type', 'application/json');
            /** On passe le jeton à la requête */
            _this.storage.get('jwt').then(function (jwt) {
                headers.append('Authorization', jwt);
            }).then(function () {
                _this.http.post(_this.elephant.urlWebsite + '/app/loadchantier.app', JSON.stringify(credentials), { headers: headers }).subscribe(function (result) {
                    resolve(result.json());
                }, function (err) {
                    console.log('error: ' + err);
                });
            });
        });
    };
    AuthServiceProvider.prototype.loadSemaine = function (credentials) {
        var _this = this;
        console.log(credentials);
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            headers.append('Content-type', 'application/json');
            /** On passe le jeton à la requête */
            _this.storage.get('jwt').then(function (jwt) {
                headers.append('Authorization', jwt);
            }).then(function () {
                _this.http.post(_this.elephant.urlWebsite + '/app/loadsemaine.app', JSON.stringify(credentials), { headers: headers }).subscribe(function (result) {
                    resolve(result.json());
                }, function (err) {
                    console.log('error: ' + err);
                });
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__elephant_service_elephant_service__["a" /* ElephantServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__elephant_service_elephant_service__["a" /* ElephantServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
    ], AuthServiceProvider);
    return AuthServiceProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=auth-service.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map