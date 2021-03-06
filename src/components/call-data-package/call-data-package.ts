import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SixtyGBPackages } from '../../providers/class/month-package';
import { ScrollItems } from '../../providers/app-module/scroll-controller';
import { NavController } from 'ionic-angular';
import { AppModuleProvider } from '../../providers/app-module/app-module';

/**
 * Generated class for the CallDataPackageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'call-data-package',
  templateUrl: 'call-data-package.html'
})
export class CallDataPackageComponent {

  
  @Input("mSixtyGBPackages") mSixtyGBPackages: SixtyGBPackages;

  @Output("onScrollLeft") mEventEmitter = new EventEmitter();

  mSixtyGBPackagesTabs: Array<number> = [];
  mMonthTabIDSelected: number = -1;
  mMonthListItems: ScrollItems = null;
  @Output("onClickInfo") mClickInfo = new EventEmitter();
  @Output("onClickAll") mClickAll = new EventEmitter();

  divID: string = "callDataPackageID";

  constructor(
    public navCtrl: NavController,
    public mAppModule: AppModuleProvider) {

  }

  ngAfterViewInit() {
    this.onLoadMonthPackageTabs();
    this.mMonthListItems = new ScrollItems("callDataPackageID");
  }

  onLoadMonthPackageTabs() {
    this.mSixtyGBPackagesTabs = [];
    this.mSixtyGBPackages.items.forEach((element, index) => {
      if (index < 4) this.mSixtyGBPackagesTabs.push(element.id);
    });
    this.mMonthTabIDSelected = this.mSixtyGBPackagesTabs[0];
  }

  onClickMonthTab(id: number) {
    this.mMonthTabIDSelected = id;
    let maxLeft = this.mMonthListItems.mElement.scrollWidth - this.mMonthListItems.mElement.clientWidth;

    let left = (this.mMonthTabIDSelected - 1) * this.mMonthListItems.mItemWidth;
    if (left > maxLeft) {
      left = maxLeft;
    }
    this.mEventEmitter.emit({ id: this.divID, left: left });
  }


  onSwipe(e) {
    let direction = e.direction;
    if (direction == 4) {
      this.doScrollPrevious();
    } else if (direction == 2) {
      this.doScrollNext();
    } else {
      return;
    }
  }

  doScrollPrevious() {
    let id = this.mMonthTabIDSelected - 1;
    if (id < 1) {
      return;
    } else {
      this.onClickMonthTab(id);
    }
  }

  doScrollNext() {
    let id = this.mMonthTabIDSelected + 1;
    if (id > 4) {
      return;
    } else {
      this.onClickMonthTab(id);
    }
  }

  onClickInfo() {
    this.mClickInfo.emit(this.mSixtyGBPackages);
  }

  onClickAll() {
    this.mClickAll.emit(this.mSixtyGBPackages);
  }
}
