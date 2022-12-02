import { Component } from '@angular/core';
import {TestService} from "../test.service";
import {HttpResponse} from "@angular/common/http";
import {Observable, zip} from "rxjs";

@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.css']
})
export class SubCompComponent {
  constructor(private testService: TestService) {
    const rer1$: Observable<any>  = this.testService.getTask(1)
    const rer2$: Observable<any>  = this.testService.getTask(2)
    const rer3$: Observable<any> = this.testService.getTask(3)
    const resZip = zip(rer1$, rer2$, rer3$);
    resZip.subscribe(res => {
      console.log(res)
    }, error => console.log(error))
    console.log('66666')
  }

}
