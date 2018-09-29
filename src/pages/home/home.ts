import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { Packages } from '../../providers/class/month-package';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mMonthPackage: Packages = null;

  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController) {
    this.mMonthPackage = new Packages();
  }

  ionViewDidLoad() {
    this.mAppModule.onLoadConfig().then(() => {

    })
  }

}
