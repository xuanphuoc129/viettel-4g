import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PackageInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-package-info',
  templateUrl: 'package-info.html',
})
export class PackageInfoPage {

  mPackage: any = {
    title: "",
    description: ""
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(this.navParams.data["params"]){
      this.mPackage = this.navParams.get("params");
    }
  }

  ionViewDidLoad() {
  }

}
