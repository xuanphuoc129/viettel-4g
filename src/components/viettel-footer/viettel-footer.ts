import { Component } from '@angular/core';
import { AppModuleProvider } from '../../providers/app-module/app-module';

/**
 * Generated class for the ViettelFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'viettel-footer',
  templateUrl: 'viettel-footer.html'
})
export class ViettelFooterComponent {

  services1: Array<string> = [];
  services2: Array<string> = [];
  helps: Array<string> = [];
  cuahangviettel: Array<string> = [];
  constructor(public mAppModule: AppModuleProvider) {
  }

  ngAfterViewInit(){
    this.mAppModule.onLoadConfig().then(()=>{
      let data = this.mAppModule.getAppConfig().get("service");
      this.services1 = data.services1;
      this.services2 = data.services2;
      this.helps = this.mAppModule.getAppConfig().get("helps");
      this.cuahangviettel = this.mAppModule.getAppConfig().get("cuahangviettel");
    })
  }

}
