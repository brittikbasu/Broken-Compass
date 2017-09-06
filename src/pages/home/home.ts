import {
  Component
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';
import {
  CompassPage
} from '../compass/compass';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  compassPage: any;
  constructor(public navCtrl: NavController) {
    this.compassPage = CompassPage;
  }
}
