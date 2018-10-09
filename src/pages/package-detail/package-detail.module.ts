import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackageDetailPage } from './package-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PackageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PackageDetailPage),
    ComponentsModule
  ],
})
export class PackageDetailPageModule {}
