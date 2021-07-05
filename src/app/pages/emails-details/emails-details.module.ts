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

import { EmailsDetailsRoutingModule } from './emails-details-routing.module';
import { EmailsDetailsComponent } from './emails-details.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EmailsDetailsComponent],
  imports: [
    CommonModule,
    EmailsDetailsRoutingModule,
    SharedModule,
    CKEditorModule
  ]
})
export class EmailsDetailsModule { }
