import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * Generated class for the SignUpPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-package',
  templateUrl: 'sign-up-package.html',
})
export class SignUpPackagePage {

  url: SafeResourceUrl = "#";
  constructor(
    private mDomSanitizer: DomSanitizer,
    public navCtrl: NavController, public navParams: NavParams) {

    if (this.navParams.data["url"]) {
      console.log(this.navParams.get("url"));
      
      this.url = this.mDomSanitizer.bypassSecurityTrustResourceUrl(this.navParams.get("url"));
    }
  }

  ionViewDidLoad() {

  }

  closeFrame(){
    this.navCtrl.pop();
  }

}
