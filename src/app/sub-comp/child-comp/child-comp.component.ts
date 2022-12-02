import { Component } from '@angular/core';
import {TestService} from "../../test.service";

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent {
  selected = 'option2';
}
