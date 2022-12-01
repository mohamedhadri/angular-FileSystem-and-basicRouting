import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { ChildCompComponent } from './child-comp.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [ChildCompComponent],
  imports: [
    CommonModule,  
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ] ,
  exports:[ ChildCompComponent ],
  
})
export class ChildCompModule { }
