import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViettelPackageDetailPage } from './viettel-package-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ViettelPackageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ViettelPackageDetailPage),
    ComponentsModule
  ],
})
export class ViettelPackageDetailPageModule {}
