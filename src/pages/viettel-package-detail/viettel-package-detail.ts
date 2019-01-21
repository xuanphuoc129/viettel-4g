import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Events } from 'ionic-angular';
import { Package, Packages } from '../../providers/class/month-package';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { HomePage } from '../home/home';
import { Utils } from '../../providers/app-module/util';

/**
 * Generated class for the ViettelPackageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'ViettelPackageDetailPage',
    segment: 'thong-tin-goi-cuoc/:name'
  }
)
@Component({
  selector: 'page-viettel-package-detail',
  templateUrl: 'viettel-package-detail.html',
})
export class ViettelPackageDetailPage {
  @ViewChild(Content) myContent: Content;

  mViettelPackage: Package;
  mPackage: Packages;
  items: Array<Package> = [];
  mName: string = "";
  menuIcon: string = "menu";
  url: string = "";

  constructor(
    public mEvent: Events,
    public mDectectChange: ChangeDetectorRef,
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.mViettelPackage = new Package();
    this.mPackage = new Packages();
    this.mAppModule.onLoadConfig().then(()=>{
      this.url = this.mAppModule.getAppConfig().get("trasau_url");
    })
    
    if (this.navParams.data["name"]) {
      this.mViettelPackage.name = this.navParams.get("name");
      console.log(this.mViettelPackage.id);
      let data = this.mAppModule.getPackageController().getPackageByName(this.mViettelPackage.name);
      console.log(data.id);
      
      if (data.id == -1) {
        this.mAppModule.onLoaddDsGoiCuoc().then(() => {
          this.onLoadDsGoiCuocSuccess();
        })
      } else {
        this.mViettelPackage = data;
        this.mPackage = this.mAppModule.getPackageController().getPackagesById(this.mViettelPackage.p_id);
        this.mName = Utils.bodauTiengViet(this.mPackage.name);
        this.mName = Utils.boDauCach(this.mName);
        this.onLoadItems();
      }
    } else {
      this.navCtrl.setRoot(HomePage);
    }
  }

  onLoadDsGoiCuocSuccess() {
    this.mViettelPackage = this.mAppModule.getPackageController().getPackageByName(this.mViettelPackage.name);
    if(this.mViettelPackage.id == -1){
      this.navCtrl.setRoot(HomePage);
      return;
    }
    this.mPackage = this.mAppModule.getPackageController().getPackagesById(this.mViettelPackage.p_id);
    this.mName = Utils.bodauTiengViet(this.mPackage.name);
    this.mName = Utils.boDauCach(this.mName);
    this.onLoadItems();
  }

  ionViewDidLoad() {
    if (this.mViettelPackage.p_id > -1) this.onLoadItems();
    this.myContent.ionScroll.asObservable().subscribe(() => {
      this.mScrollTop = this.myContent.scrollTop;
      this.mDectectChange.detectChanges();
    })

    this.mEvent.subscribe("openmenu",()=>{
      this.menuIcon = "md-close";
      this.mDectectChange.detectChanges();
    })
    this.mEvent.subscribe("closemenu",()=>{
      this.menuIcon = "menu";
      this.mDectectChange.detectChanges();
    })
  }

  onLoadItems() {
    this.items = this.mAppModule.getPackageController().getPackageByPID(this.mViettelPackage.p_id);
    let index = this.items.findIndex(element => {
      return element.id == this.mViettelPackage.id;
    })

    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  mScrollTop: number = 0;

  scrollTop() {
    this.myContent.scrollToTop(200);
  }

}
