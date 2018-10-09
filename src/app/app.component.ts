import { Component } from '@angular/core';
import { Platform, MenuController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage, MenuItems } from '../pages/home/home';
import { AppModuleProvider } from '../providers/app-module/app-module';
@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = HomePage;
    items: Array<MenuItems> = [];

    constructor(
        public mEvent: Events,
        public mMenuController: MenuController,
        public mAppModule: AppModuleProvider,
        platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    onOpenMenu() {
      this.mEvent.publish("openmenu");
    }

    onCloseMenu(){
      this.mEvent.publish("closemenu");
    }

    ngAfterViewInit() {
        this.mAppModule.onLoadConfig().then(() => {
            this.onLoadMenuItems();
        })
    }

    onLoadMenuItems() {
        let menuItems = this.mAppModule.getAppConfig().get("menu-items");
        if (menuItems) {
            menuItems.forEach(element => {
                this.items.push(new MenuItems(element));
            });
        }
    }

    onClickItem(item, i) {
        if (item.url != "#") {
            this.mMenuController.close();
            return;
        }
        let ele = document.getElementById("dropdown" + (i + 1));
        let icon = document.getElementById("icon" + (i + 1));
        if (ele) {
            if (ele.style.maxHeight > "0px") {
                ele.style.maxHeight = 0 + "px";
                if (icon) {
                    icon.style.transform = "rotate(0deg)";
                }
            } else {
                ele.style.maxHeight = ele.scrollHeight + "px";
                if (icon) {
                    icon.style.transform = "rotate(180deg)";
                }
            }

        }

    }
}

