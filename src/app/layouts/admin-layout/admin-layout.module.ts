import { NgModule } from '@angular/core';

import { AdminLayoutRouter } from './admin-layout.routing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRouter),
    FormsModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class AdminLayoutModule { }
