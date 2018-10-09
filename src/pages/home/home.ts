import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, Content, MenuController, Events } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';
import { MonthPackages, EcoDataPackages, MorePackages, TomatoPackages, SixtyGBPackages, DcomDataPackages, MoreDataDcomPackages, DayPackages } from '../../providers/class/month-package';
import { ScrollController, ScrollOption } from '../../providers/app-module/scroll-controller';
import { Utils } from '../../providers/app-module/util';


export class MenuItems {
  id: number = -1;
  name: string = "Menu";
  dropbox: Array<{ name: string, url: string }> = [];
  url: string = "#";
  constructor(data?:any){
    if(data){
      this.parseData(data);
    }
  }

  parseData(data){
    if(data){
      if("id" in data)this.id = data.id;
      if("name" in data)this.name = data.name;
      if("dropbox" in data)this.parseDropbox(data.dropbox);
      if("url" in data) this.url = data.url;
    }
  }

  parseDropbox(data){
    if(data){
      this.dropbox = [];
      data.forEach(element => {
        this.dropbox.push({
          name: element.name,
          url: element.url
        });
      });
    }
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild(Content) myContent: Content;

  mScrollController: ScrollController = null;

  mMonthPackage: MonthPackages = null;
  menuIcon: string = "menu";

  mEcoDataPackage: EcoDataPackages = null;
  mTomatoPackages: TomatoPackages = null;
  mSixtyGBPackages: SixtyGBPackages = null;
  mDayPackages: DayPackages = null;
  mDcomDataPackages: DcomDataPackages = null;
  mMoreDataDcomPackages: MoreDataDcomPackages = null;

  mMorePackages: MorePackages = null;


  constructor(
    public mEvent: Events,
    public mMenuController: MenuController,
    public mDectectChange: ChangeDetectorRef,
    public mAppModule: AppModuleProvider,
    public navCtrl: NavController) {
    this.mMonthPackage = new MonthPackages();
    this.mEcoDataPackage = new EcoDataPackages();
    this.mMorePackages = new MorePackages();
    this.mTomatoPackages = new TomatoPackages();
    this.mSixtyGBPackages = new SixtyGBPackages();
    this.mDcomDataPackages = new DcomDataPackages();
    this.mMoreDataDcomPackages = new MoreDataDcomPackages();
    this.mDayPackages = new DayPackages();
    this.mScrollController = new ScrollController();
  }

  mScrollTop: number = 0;

  scrollTop() {
    this.myContent.scrollToTop(200);
  }

  ionViewDidLoad() {
    this.myContent.ionScroll.asObservable().subscribe(() => {
      this.mScrollTop = this.myContent.scrollTop;
      this.mDectectChange.detectChanges();
    })

    this.mAppModule.onLoadConfig().then(()=>{
      // this.onLoadMenuItems();
    })

    this.mAppModule.onLoaddDsGoiCuoc().then(()=>{
      this.mMonthPackage = this.mAppModule.getPackageController().getMonthPackages();
      this.mEcoDataPackage = this.mAppModule.getPackageController().getEcoDataPackages();
      this.mMorePackages = this.mAppModule.getPackageController().getMorePackages();
      this.mTomatoPackages = this.mAppModule.getPackageController().getTomatoPackages();
      this.mSixtyGBPackages = this.mAppModule.getPackageController().getSixtyGBPackages();
      this.mDayPackages = this.mAppModule.getPackageController().getDayPackages();
      this.mDcomDataPackages = this.mAppModule.getPackageController().getDcomDataPackages();
      this.mMoreDataDcomPackages = this.mAppModule.getPackageController().getMoreDataDcomPackages();
    });


    this.mEvent.subscribe("openmenu",()=>{
      this.menuIcon = "md-close";
      this.mDectectChange.detectChanges();
    })
    this.mEvent.subscribe("closemenu",()=>{
      this.menuIcon = "menu";
      this.mDectectChange.detectChanges();
    })
  }

  doScrollLeft(e) {
    let id = e.id;
    let left = e.left;

    let option: ScrollOption = {
      callback: null,
      alpha: 0.4,
      epsilon: 1
    }
    this.mScrollController.doScrollLeft(id, left, option);
  }

  goToDetail($event){
    let name = Utils.bodauTiengViet($event.name.toLowerCase());
    name = Utils.boDauCach(name);
    this.navCtrl.setRoot("PackageDetailPage",{name: name});
  }

  goToInfo($event){
    this.mAppModule.showModal("PackageInfoPage",{params: $event});
  }

}
