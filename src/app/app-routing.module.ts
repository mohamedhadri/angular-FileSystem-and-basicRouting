import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChildCompComponent} from "./sub-comp/child-comp/child-comp.component";
import {SubCompComponent} from "./sub-comp/sub-comp.component";

const routes: Routes = [
  {path: 'sub', component:  SubCompComponent},
  {path: 'sub/child', component: ChildCompComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
