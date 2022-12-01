import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { ChildCompComponent } from './child-comp.component';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 
@NgModule({
  declarations: [ChildCompComponent],
  imports: [
    CommonModule,  
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ] ,
  exports:[ ChildCompComponent ],
  
})
export class ChildCompModule { }
