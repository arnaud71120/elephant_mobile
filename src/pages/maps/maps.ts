import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  myAdress: string;
  lat: any;
  lon: any;
  constructor(public navCtrl: NavController,public params: NavParams,private geolocation: Geolocation) {
      this.myAdress = params.get('adresse');
      this.position();
  }

  position(){
    console.log('test');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

}).catch((error) => {
  console.log('Error getting location', error);
}).then(() => {
  this.calculateAndDisplayRoute();
});
  }
  ionViewDidLoad(){
      this.initMap();
    }

    initMap() {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 7,
        center: {lat: 41.85, lng: -87.65}
      });

      this.directionsDisplay.setMap(this.map);
    }

    calculateAndDisplayRoute() {
      this.directionsService.route({
        origin: this.lat+','+this.lon,
        destination: this.myAdress,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }

}
