import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  ScreenOrientation
} from '@ionic-native/screen-orientation';

/**
 * Generated class for the CompassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compass',
  templateUrl: 'compass.html',
})
export class CompassPage {
  portrait: boolean;
  landscape: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {




    // get current
    console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'


    // allow user rotate
    this.screenOrientation.unlock();

    // set to landscape
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    if (this.screenOrientation.type == 'portrait-primary') {
      console.log("potrait-primary");
      this.portrait = true;
    } else if (this.screenOrientation.type == 'landscape-primary') {
      console.log("landscape-primary");
      this.landscape = true;
    }


    // detect orientation changes
    this.screenOrientation.onChange().subscribe(
      () => {
        console.log("Orientation Changed");


        if (this.screenOrientation.type == 'landscape-primary') {
          console.log("landscape-primary");
          this.portrait = false;
          this.landscape = true;

        } else if (this.screenOrientation.type == 'landscape-secondary') {
          console.log("landscape-secondary");
          this.portrait = false;
          this.landscape = false;

        } else if (this.screenOrientation.type == 'portrait-primary') {
          console.log("potrait-primary");
          this.landscape = false;
          this.portrait = true;

        } else if (this.screenOrientation.type == 'portrait-secondary') {
          console.log("potrait-secondary");
          this.portrait = true;
          this.landscape = false;


        }
      }
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompassPage');
  }

}
