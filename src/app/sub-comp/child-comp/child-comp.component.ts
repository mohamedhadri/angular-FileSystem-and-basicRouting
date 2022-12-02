import {Component, Input, OnChanges} from '@angular/core';
import {TestService} from "../../test.service";

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnChanges{
  @Input() todos: any[];
  selected = 'option2';
  ngOnChanges() {
    console.log(this.todos)
  }
}
