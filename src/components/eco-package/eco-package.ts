import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EcoDataPackages, MorePackages } from '../../providers/class/month-package';
import { ScrollItems } from '../../providers/app-module/scroll-controller';

/**
 * Generated class for the EcoPackageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'eco-package',
  templateUrl: 'eco-package.html'
})
export class EcoPackageComponent {
  @Input("mEcoDataPackage") mEcoDataPackage: EcoDataPackages;
  @Input("mMorePackages") mMorePackages: MorePackages;

  @Output("onScroll") mEventEmitter = new EventEmitter();
  @Output("onClickInfo")  mClickInfo = new EventEmitter();
  @Output("onClickAll")  mClickAll = new EventEmitter();

  mMorePackageTabs: Array<number> = [];

  mMoreTabIDSelected: number = -1;

  mMoreListItems: ScrollItems = null;

  divID: string = "morePackageID";

  constructor() {

  }

  ngAfterViewInit() {
    this.onLoadMorePackageTabs();
    this.mMoreListItems = new ScrollItems(this.divID);
  }

  onLoadMorePackageTabs() {
    this.mMorePackageTabs = [];
    this.mMorePackages.items.forEach((element,index) => {
      if(index < 2)this.mMorePackageTabs.push(element.id);
    });
    this.mMoreTabIDSelected = this.mMorePackageTabs[0];
  }

  onClickMoreTab(id: number) {
    this.mMoreTabIDSelected = id;
    let maxLeft = this.mMoreListItems.mElement.scrollWidth - this.mMoreListItems.mElement.clientWidth;
    let left = (this.mMoreTabIDSelected - 1) * (this.mMoreListItems.mItemWidth + Math.floor((this.mMoreListItems.mItemWidth / 11)));
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
    let id = this.mMoreTabIDSelected - 1;
    if(id < 1){
      return;
    }else{
      this.onClickMoreTab(id);
    }
  }

  doScrollNext(){
    let id = this.mMoreTabIDSelected+1;
    if(id > 2){
      return;
    }else{
      this.onClickMoreTab(id);
    }
  }

  onClickInfo(e) {
    let data = this.mEcoDataPackage;
    if(e == 2){
      data = this.mMorePackages;
    }
    this.mClickInfo.emit(data);
  }

  onClickAll(e) {
    let data = this.mEcoDataPackage;
    if(e == 2){
      data = this.mMorePackages;
    }
    this.mClickAll.emit(data);
  }

}
