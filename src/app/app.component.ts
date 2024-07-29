import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, Platform, Events, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Environment } from '@ionic-native/google-maps';
import { Storage } from '@ionic/storage';
import { OverlayEventDetail } from '@ionic/core';
import { ModalController, NavParams } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private menu: MenuController,
    private statusBar: StatusBar,
    private storage:Storage,
    private modalController:ModalController,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private appVersion:AppVersion,
    private firebase: FirebaseX,
    private uniqueDeviceID: UniqueDeviceID,
    private iab: InAppBrowser,
    public events: Events,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
    this.initializeApp();
  }

  initializeApp(){
    console.log('INITIALIZE APP');

    let self = this;
    this.platform.ready().then(() => {
      console.log('PLATFORM READY');

      // google maps
      Environment.setEnv({
        'API_KEY_FOR_BROWSER_RELEASE' :'XXXXXXXXXXXXXXXXXX',
        'API_KEY_FOR_BROWSER_DEBUG'   :'XXXXXXXXXXXXXXXXXX',
      });

    });
  }

  ngOnInit(){
  }

}
