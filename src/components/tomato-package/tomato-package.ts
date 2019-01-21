import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TomatoPackages, SixtyGBPackages } from '../../providers/class/month-package';
import { ScrollItems } from '../../providers/app-module/scroll-controller';
import { AppModuleProvider } from '../../providers/app-module/app-module';

/**
 * Generated class for the TomatoPackageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tomato-package',
  templateUrl: 'tomato-package.html'
})
export class TomatoPackageComponent {
  @Input("mTomatoPackages") mTomatoPackages: TomatoPackages;
  @Input("mSixtyGBPackages") mSixtyGBPackages: SixtyGBPackages;

  @Output("onScrollLeft") mEventEmitter = new EventEmitter();
  @Output("onClickInfo")  mClickInfo = new EventEmitter();
  @Output("onClickAll")  mClickAll = new EventEmitter();

  mSixtyPackageTabs: Array<number> = [];
  mSixtyTabIDSelected: number = -1;
  mSixtyListItems: ScrollItems = null;

  divID: string = "sixtyPackageID";
  constructor(
    public mAppModule: AppModuleProvider
  ) {
   
  }

  ngAfterViewInit() {
    this.onLoadMonthPackageTabs();
    this.mSixtyListItems = new ScrollItems(this.divID);
  }
  

  onLoadMonthPackageTabs() {
    this.mSixtyPackageTabs = [];
    this.mTomatoPackages.items.forEach((element,index) => {
      if(index < 2)this.mSixtyPackageTabs.push(element.id);
    });
    this.mSixtyTabIDSelected = this.mSixtyPackageTabs[0];
  }

  onClickTab(id: number) {
    this.mSixtyTabIDSelected = id;
    let maxLeft = this.mSixtyListItems.mElement.scrollWidth - this.mSixtyListItems.mElement.clientWidth;

    let left = (this.mSixtyTabIDSelected - 1) * this.mSixtyListItems.mItemWidth;
    if (left > maxLeft) {
      left = maxLeft;
    }
    this.mEventEmitter.emit({ id: this.divID, left: left });
  }

  

  onSwipe(e){
    let direction  = e.direction;
    if(direction == 4){
      this.doScrollPrevious();
    }else if(direction == 2){
      this.doScrollNext();
    }else{
      return;
    }
  }

  doScrollPrevious(){
    let id = this.mSixtyTabIDSelected - 1;
    if(id < 1){
      return;
    }else{
      this.onClickTab(id);
    }
  }

  doScrollNext(){
    let id = this.mSixtyTabIDSelected + 1;
    if(id > 2){
      return;
    }else{
      this.onClickTab(id);
    }
  }

  onClickInfo(e) {
    let data = this.mTomatoPackages;
    // if(e == 2){
    //   data = this.mSixtyGBPackages;
    // }
    this.mClickInfo.emit(data);
  }

  onClickAll(e) {
    let data = this.mTomatoPackages;
    this.mClickAll.emit(data);
  }
}
