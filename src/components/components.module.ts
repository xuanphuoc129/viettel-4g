import { NgModule } from '@angular/core';
import { ViettelPackageComponent } from './viettel-package/viettel-package';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { MonthPackageComponent } from './month-package/month-package';
import { EcoPackageComponent } from './eco-package/eco-package';
import { DcomPackageComponent } from './dcom-package/dcom-package';
import { TomatoPackageComponent } from './tomato-package/tomato-package';
import { DayPackageComponent } from './day-package/day-package';
import { ViettelHeaderComponent } from './viettel-header/viettel-header';
import { ViettelFooterComponent } from './viettel-footer/viettel-footer';
import { CallDataPackageComponent } from './call-data-package/call-data-package';
import { ViettelDPackageComponent } from './viettel-d-package/viettel-d-package';
@NgModule({
	declarations: [ViettelPackageComponent,
    MonthPackageComponent,
    EcoPackageComponent,
    DcomPackageComponent,
    TomatoPackageComponent,
    DayPackageComponent,
    ViettelHeaderComponent,
    ViettelFooterComponent,
    CallDataPackageComponent,
    ViettelDPackageComponent],
	imports: [
		IonicModule,
		CommonModule
	],
	exports: [ViettelPackageComponent,
    MonthPackageComponent,
    EcoPackageComponent,
    DcomPackageComponent,
    TomatoPackageComponent,
    DayPackageComponent,
    ViettelHeaderComponent,
    ViettelFooterComponent,
    CallDataPackageComponent,
    ViettelDPackageComponent]
})
export class ComponentsModule {}
