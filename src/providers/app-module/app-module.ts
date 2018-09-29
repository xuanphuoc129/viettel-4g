import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AppConfig } from './app-config';
/*
  Generated class for the AppModuleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppModuleProvider {
  mDebug: boolean = true;

  private mAppConfig: AppConfig;

  constructor(public mHttp: HttpClient) {
    this.mAppConfig = new AppConfig();
  }

  public getAppConfig(): AppConfig{
     return this.mAppConfig;
  }

  public onLoadConfig(){
    return new Promise((resolve, reject) => {
      if(this.mAppConfig.hasData())resolve();
      this.onReadFileJson("./assets/data.json").then((data)=>{
        if(this.mDebug){
          console.log("data config..", data);
          this.mAppConfig.onResponseConfig(data);
          resolve(this.mAppConfig);
        }
      }).catch(err=>{
        reject(err);
      })
    })
  
  } 

  public onReadFileJson(link: string) {
    return new Promise((resolve, reject) => {
      let newheaders = new HttpHeaders();
      newheaders =  newheaders.append('Content-type', 'application/json; charset=utf-8');
      newheaders =  newheaders.append('Access-Control-Allow-Origin', '*');
      newheaders =  newheaders.append('Access-Control-Allow-Methods','GET, POST, OPTIONS');
      
      this.mHttp.get(link,{headers: newheaders}).subscribe(data => {
        if (data) {
          resolve(data);
        } else {
          reject();
        }
      });
    })
  }

}
