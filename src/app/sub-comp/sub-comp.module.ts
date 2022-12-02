import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCompComponent } from './sub-comp.component';
import { ChildCompModule } from './child-comp/child-comp.module';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {TestService} from "../test.service";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SubCompComponent,

  ],
  imports: [
    CommonModule,
    ChildCompModule,
    MatSlideToggleModule,
    RouterModule


  ],
   exports: [ SubCompComponent ],
})
export class SubCompModule { }
