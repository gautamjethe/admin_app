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

import { ManageStoresRoutingModule } from './manage-stores-routing.module';
import { ManageStoresComponent } from './manage-stores.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  declarations: [ManageStoresComponent],
  imports: [
    CommonModule,
    ManageStoresRoutingModule,
    SharedModule,
    GooglePlaceModule
  ]
})
export class ManageStoresModule { }
