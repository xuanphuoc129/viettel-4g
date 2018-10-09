import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpPackagePage } from './sign-up-package';

@NgModule({
  declarations: [
    SignUpPackagePage,
  ],
  imports: [
    IonicPageModule.forChild(SignUpPackagePage),
  ],
})
export class SignUpPackagePageModule {}
