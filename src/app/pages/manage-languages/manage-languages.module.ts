/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageLanguagesRoutingModule } from './manage-languages-routing.module';
import { ManageLanguagesComponent } from './manage-languages.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ManageLanguagesComponent],
  imports: [
    CommonModule,
    ManageLanguagesRoutingModule,
    SharedModule
  ]
})
export class ManageLanguagesModule { }