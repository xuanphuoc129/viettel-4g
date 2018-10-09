import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { Package } from '../../providers/class/month-package';

/**
 * Generated class for the ViettelPackageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'viettel-package',
  templateUrl: 'viettel-package.html'
})
export class ViettelPackageComponent {
  @Input("mViettelPackage") mViettelPackage: Package;
  @Input("color") color: string = "";
  @Input("mMode") mMode: number = 0;
  @Input("nodata") no_data: boolean = false;

  text: string;

  constructor(
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController) {
    console.log('Hello ViettelPackageComponent Component');
    this.text = 'Hello World';
  }

  onClickDetail() {
    this.navCtrl.setRoot("ViettelPackageDetailPage", { name: this.mViettelPackage.name });
  }

  signup() {
    this.mAppModule.showModal("SignUpPackagePage", { url: this.mViettelPackage.url });
  }

}
