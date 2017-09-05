import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation) {

// get current
console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

// set to landscape
//this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

// allow user rotate
this.screenOrientation.unlock();

// detect orientation changes
this.screenOrientation.onChange().subscribe(
   () => {
       console.log("Orientation Changed");
   }
);

  }



}
