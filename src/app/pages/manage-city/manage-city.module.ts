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

import { ManageCityRoutingModule } from './manage-city-routing.module';
import { ManageCityComponent } from './manage-city.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

@NgModule({
  declarations: [ManageCityComponent],
  imports: [
    CommonModule,
    ManageCityRoutingModule,
    SharedModule,
    GooglePlaceModule,
  ]
})
export class ManageCityModule { }
