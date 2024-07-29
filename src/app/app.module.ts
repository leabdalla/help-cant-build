import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Network } from '@ionic-native/network/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppRate } from '@ionic-native/app-rate/ngx';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    NgxQRCodeModule,
    IonicStorageModule.forRoot(),
    // NgxMaskIonicModule.forRoot({}),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    InAppBrowser,
    ScreenOrientation,
    Network,
    BarcodeScanner,
    LaunchNavigator,
    UniqueDeviceID,
    Clipboard,
    FirebaseX,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
