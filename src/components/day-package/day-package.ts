import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DayPackages } from '../../providers/class/month-package';
import { ScrollItems } from '../../providers/app-module/scroll-controller';

/**
 * Generated class for the DayPackageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'day-package',
  templateUrl: 'day-package.html'
})
export class DayPackageComponent {

  @Input("mDayPackages") mDayPackages: DayPackages;

  @Output("onScroll") mEventEmitter = new EventEmitter();
  @Output("onClickInfo")  mClickInfo = new EventEmitter();
  @Output("onClickAll")  mClickAll = new EventEmitter();

  mDayPackageTabs: Array<number> = [];

  mDayTabIDSelected: number = -1;

  mDayListItems: ScrollItems = null;


  divID : string = "dayPackageID";
  constructor() {
   
  }

  ngAfterViewInit() {
    this.onLoadMorePackageTabs();
    this.mDayListItems = new ScrollItems(this.divID);
  }

  onLoadMorePackageTabs() {
    this.mDayPackageTabs = [];
    this.mDayPackages.items.forEach((element,index) => {
      if(index < 2)this.mDayPackageTabs.push(element.id);
    });
    this.mDayTabIDSelected = this.mDayPackageTabs[0];
  }

  onClickTab(id: number) {
    this.mDayTabIDSelected = id;
    let maxLeft = this.mDayListItems.mElement.scrollWidth - this.mDayListItems.mElement.clientWidth;
    let left = (this.mDayTabIDSelected - 1) * (this.mDayListItems.mItemWidth + Math.floor((this.mDayListItems.mItemWidth / 11)));
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
    let id = this.mDayTabIDSelected - 1;
    if(id < 1){
      return;
    }else{
      this.onClickTab(id);
    }
  }

  doScrollNext(){
    let id = this.mDayTabIDSelected+1;
    if(id > 2){
      return;
    }else{
      this.onClickTab(id);
    }
  }

  onClickInfo() {
    this.mClickInfo.emit(this.mDayPackages);
  }

  onClickAll() {
   
    this.mClickAll.emit(this.mDayPackages);
  }

}
