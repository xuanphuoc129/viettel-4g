import { Component } from '@angular/core';
import { MenuItems } from '../../pages/home/home';
import { AppModuleProvider } from '../../providers/app-module/app-module';

/**
 * Generated class for the ViettelHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'viettel-header',
  templateUrl: 'viettel-header.html'
})
export class ViettelHeaderComponent {

  items: Array<MenuItems> = [];
  hotline: string = "1800 8168";

  constructor(public mAppModule: AppModuleProvider) {
  }

  ngAfterViewInit(){
    this.mAppModule.onLoadConfig().then(()=>{
      this.onLoadMenuItems();
    })
  }

  onLoadMenuItems(){
    let menuItems = this.mAppModule.getAppConfig().get("menu-items");
    if(menuItems){
      menuItems.forEach(element => {
        this.items.push(new MenuItems(element));
      });
    }
  }

  onClickImage(){
    let linkEle = document.createElement("a");
    linkEle.setAttribute("href","https://cuahangviettel.vn");
    document.body.appendChild(linkEle);
    linkEle.click();
  }
}
