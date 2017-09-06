import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { DeviceOrientation } from '@ionic-native/device-orientation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CompassPage } from '../pages/compass/compass';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CompassPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CompassPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    DeviceOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
