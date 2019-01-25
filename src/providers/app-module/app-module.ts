import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AppConfig } from './app-config';
import { ModalController } from 'ionic-angular';
import { PackageController } from '../class/month-package';
import { DistrictManager } from './District';
/*
  Generated class for the AppModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppModuleProvider {
  mDebug: boolean = true;
  private mAppConfig: AppConfig;
  private mPackageController: PackageController;
  private mDistrictManager: DistrictManager = null;

  constructor(
    public mModalController: ModalController,
    public mHttp: HttpClient) {
    this.mAppConfig = new AppConfig();
    this.mPackageController = new PackageController();
    this.mDistrictManager = new DistrictManager();
  }

  public getDistrictManager(): DistrictManager {
    return this.mDistrictManager;
  }


  public onLoadDistrict() {
    this.onReadFileJson("./assets/data/tinh_tp.json").then((data) => {
      if (data) {
        this.getDistrictManager().onResponseCity(data["tinh_tp"]);
        console.log(data);

      }
    })
    this.onReadFileJson("./assets/data/quan_huyen.json").then((data) => {
      if (data) {
        this.getDistrictManager().onResponseDistrict(data["quan_huyen"]);
      }
    })
    this.onReadFileJson("./assets/data/xa_phuong.json").then((data) => {
      if (data) {
        this.getDistrictManager().onResponseCommunes(data["xa_phuong"]);
      }
    })
  }

  public onLoadNameCustomerFile() {
    return this.onReadFileJson("./assets/data/name_customer.json");
  }

  public getPackageController(): PackageController{
    return this.mPackageController;
  }

  public getModalController(): ModalController {
    return this.mModalController;
  }

  public getAppConfig(): AppConfig {
    return this.mAppConfig;
  }

  public onLoaddDsGoiCuoc(){
    return new Promise((resolve, reject) => {
      this.onReadFileJson("./assets/data/ds_goi_cuoc.json").then((data) => {
        if (data) {
          this.mPackageController.onResponseAppConfig(data);
          resolve(data);
        }
      }).catch(err => {
        reject(err);
      })
    })
  }

  public onLoadConfig() {
    return new Promise((resolve, reject) => {
      if (this.mAppConfig.hasData()) resolve();
      this.onReadFileJson("./assets/data.json").then((data) => {
        if (data) {
          this.mAppConfig.onResponseConfig(data);
          resolve(this.mAppConfig);
        }
      }).catch(err => {
        reject(err);
      })
    })

  }

  public onReadFileJson(link: string) {
    return new Promise((resolve, reject) => {
      let newheaders = new HttpHeaders();
      newheaders = newheaders.append('Content-type', 'application/json; charset=utf-8');
      newheaders = newheaders.append('Access-Control-Allow-Origin', '*');
      newheaders = newheaders.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

      this.mHttp.get(link, { headers: newheaders }).subscribe(data => {
        if (data) {
          resolve(data);
        } else {
          reject();
        }
      });
    })
  }


  public showModal(page, params?: any, callback?: any): void {
    let modal = this.mModalController.create(page, params ? params : null, {
      enterAnimation: 'fade-in',
      leaveAnimation: 'fade-out'
    });
    modal.present();
    modal.onDidDismiss((data) => {
      if (callback) {
        callback(data);
      }
    })
  }

}
