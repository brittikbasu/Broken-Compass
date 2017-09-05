import {
  Component
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';
import {
  ScreenOrientation
} from '@ionic-native/screen-orientation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
pp : boolean;
lp : boolean;
  constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation) {
this.pp = false;
this.lp = false;

    // get current
    console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

    // set to landscape
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    if (this.screenOrientation.type == 'portrait-primary') {
      console.log("potrait-primary");
      this.pp = true;
      
    }

    // allow user rotate
    this.screenOrientation.unlock();

    // detect orientation changes
    this.screenOrientation.onChange().subscribe(
      () => {
        console.log("Orientation Changed");
        

        if (this.screenOrientation.type == 'landscape-primary') {
          console.log("landscape-primary");
          this.pp = false;
          this.lp = true;
          
        } else if (this.screenOrientation.type == 'landscape-secondary') {
          console.log("landscape-secondary");
          this.pp = false;
          this.lp = false;
          
        }
        else if (this.screenOrientation.type == 'portrait-primary') {
          console.log("potrait-primary");
          this.lp = false;
          this.pp = true;
          
        }
        else if (this.screenOrientation.type == 'portrait-secondary') {
          console.log("potrait-secondary");
          this.pp = true;
          this.lp = false;
          
          
        }
      }
    );

  }



}
