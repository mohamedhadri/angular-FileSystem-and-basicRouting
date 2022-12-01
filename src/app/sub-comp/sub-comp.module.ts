import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubCompComponent } from './sub-comp.component';
import { ChildCompModule } from './child-comp/child-comp.module';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 

@NgModule({
  declarations: [
    SubCompComponent,
  
  ],
  imports: [
    CommonModule,
    ChildCompModule,
    MatSlideToggleModule
   
   
  ],
   exports: [ SubCompComponent ],
})
export class SubCompModule { }
