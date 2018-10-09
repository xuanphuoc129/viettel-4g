import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Events } from 'ionic-angular';
import { Packages } from '../../providers/class/month-package';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { HomePage } from '../home/home';

/**
 * Generated class for the PackageDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'PackageDetailPage',
    segment: 'goi-cuoc/:name'
  }
)
@Component({
  selector: 'page-package-detail',
  templateUrl: 'package-detail.html',
})
export class PackageDetailPage {
  @ViewChild(Content) myContent: Content;

  mPackage: Packages;
  menuIcon: string = "menu";
  constructor(
    public mEvent: Events,
    public mDectectChange: ChangeDetectorRef,
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController, public navParams: NavParams) {

    this.mPackage = new Packages();
    if (this.navParams.data["name"]) {

      let name = this.navParams.get("name");
      this.mPackage.name = name;
      let data = this.mAppModule.getPackageController().getPackagesByName(name);
      console.log(data.id);

      if (data.id == -1) {
        this.mAppModule.onLoaddDsGoiCuoc().then(() => {
          this.onLoadDsGoiCuocSuccess();
        })
      } else {
        this.mPackage = data;
      }
    } else {
      this.navCtrl.setRoot(HomePage);
    }
  }

  onLoadDsGoiCuocSuccess() {
    this.mPackage = this.mAppModule.getPackageController().getPackagesByName(this.mPackage.name);
    if(this.mPackage.id == -1){
      this.navCtrl.setRoot(HomePage);
    }
  }

  ionViewDidLoad() {
    this.myContent.ionScroll.asObservable().subscribe(() => {
      this.mScrollTop = this.myContent.scrollTop;
      this.mDectectChange.detectChanges();
    })
    // if (!this.mAppModule.getAppConfig().hasData()) {
     
    // }

    this.mEvent.subscribe("openmenu",()=>{
      this.menuIcon = "md-close";
      this.mDectectChange.detectChanges();
    })
    this.mEvent.subscribe("closemenu",()=>{
      this.menuIcon = "menu";
      this.mDectectChange.detectChanges();
    })
  }

  onClickInfo() {
    this.mAppModule.showModal("PackageInfoPage", { params: this.mPackage });
  }

  mScrollTop: number = 0;

  scrollTop() {
    this.myContent.scrollToTop(200);
  }

}
