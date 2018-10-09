import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DcomDataPackages, MoreDataDcomPackages } from '../../providers/class/month-package';
import { ScrollItems } from '../../providers/app-module/scroll-controller';

/**
 * Generated class for the DcomPackageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dcom-package',
  templateUrl: 'dcom-package.html'
})
export class DcomPackageComponent {

  @Input("mDcomDataPackages") mDcomDataPackages: DcomDataPackages;
  @Input("mMoreDataDcomPackages") mMoreDataDcomPackages: MoreDataDcomPackages;

  @Output("onScroll") mEventEmitter = new EventEmitter();
  @Output("onClickInfo")  mClickInfo = new EventEmitter();
  @Output("onClickAll")  mClickAll = new EventEmitter();

  mDcomPackageTabs: Array<number> = [];

  mDcomTabIDSelected: number = -1;

  mDcomListItems: ScrollItems = null;

  divID: string = "dcomPackageID";

  constructor() {
   
  }

  ngAfterViewInit() {
    this.onLoadMorePackageTabs();
    this.mDcomListItems = new ScrollItems(this.divID);
  }

  onLoadMorePackageTabs() {
    this.mDcomPackageTabs = [];
    this.mDcomDataPackages.items.forEach((element,index) => {
      if(index < 2)this.mDcomPackageTabs.push(element.id);
    });
    this.mDcomTabIDSelected = this.mDcomPackageTabs[0];
  }

  onClickTab(id: number) {
    this.mDcomTabIDSelected = id;
    let maxLeft = this.mDcomListItems.mElement.scrollWidth - this.mDcomListItems.mElement.clientWidth;
    let left = (this.mDcomTabIDSelected - 1) * (this.mDcomListItems.mItemWidth + Math.floor((this.mDcomListItems.mItemWidth / 11)));
    if (left > maxLeft) {
      left = maxLeft;
    }
    this.mEventEmitter.emit({id: this.divID, left: left});
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
    let id = this.mDcomTabIDSelected - 1;
    if(id < 1){
      return;
    }else{
      this.onClickTab(id);
    }
  }

  doScrollNext(){
    let id = this.mDcomTabIDSelected+1;
    if(id > 2){
      return;
    }else{
      this.onClickTab(id);
    }
  }

  onClickInfo(e) {
    let data = this.mDcomDataPackages;
    if(e == 2){
      data = this.mMoreDataDcomPackages;
    }
    this.mClickInfo.emit(data);
  }

  onClickAll(e) {
    let data = this.mDcomDataPackages;
    if(e == 2){
      data = this.mMoreDataDcomPackages;
    }
    this.mClickAll.emit(data);
  }


}
