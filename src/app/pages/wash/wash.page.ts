import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapsMapTypeId, GoogleMapOptions, LatLng, MarkerOptions, Marker, Environment } from "@ionic-native/google-maps";
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { NgZone, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, MenuController, AlertController, ToastController, NavController, ModalController, NavParams, Events } from '@ionic/angular';
import { ActionSheetController, IonSelect } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-wash',
  templateUrl: './wash.page.html',
  styleUrls: ['./wash.page.scss'],
})
export class WashPage implements OnInit {

  map:GoogleMap;

  constructor(
    public activatedRoute        :ActivatedRoute,
    public launchNavigator       :LaunchNavigator,
    public modalController       :ModalController,
    public alertController       :AlertController,
    public toastController       :ToastController,
    public actionSheetController :ActionSheetController,
    public router                :Router,
    public elementRef            :ElementRef,
    public storage               :Storage,
    public network               :Network,
    public platform              :Platform,
    public navCtrl               :NavController,
    public events                :Events,
    public menu                  :MenuController,
    public zone                  :NgZone
  ) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ionViewDidEnter() {
    let self = this;
    this.platform.ready().then(() => {
      setTimeout(function(){ self.startMap(); }, 300);
    });
  }

  async openSideMenu() {
    await this.menu.enable(true, 'rightSideMenu');
    await this.menu.open('rightSideMenu');
  }

  /*
  ***********************************************************
  */

  startMap(){
    console.log('startMap()');

    let self = this;
    this.map = GoogleMaps.create('map', {
      mapType:GoogleMapsMapTypeId.ROADMAP,
      camera:{
        target:{
          lat:-23.5486,
          lng:-46.6392
        },
        zoom:10
      },
      controls:{
        compass          :false,
        myLocationButton :false,
        myLocation       :true,  // (blue dot - asks for user's permission)
        indoorPicker     :false,
        zoom             :false, // android only
        mapToolbar       :false, // android only
      },
      gestures:{
        zoom   :true,
        scroll :true,
        tilt   :false,
        rotate :false
      },
      preferences:{
        zoom     :{minZoom:6, maxZoom:17},
        building :true
      },
      styles:[
        { featureType:"poi.business", stylers:[{visibility:"off"}] },
      ]
    });

    this.map.one(GoogleMapsEvent.MAP_READY).then((data) => {
      console.log('GoogleMapsEvent.MAP_READY');
    });

    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe(() => {
      console.log('GoogleMapsEvent.MAP_CLICK');
    });

  }

}
