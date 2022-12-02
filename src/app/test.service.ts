import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
interface Res {
  completed: boolean;
  id: number;
  title: string;
  userId: string;
}
@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) { }
  getTask(id: number): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/' + id, {observe: 'response'});
  }
  getTasks(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/', {observe: 'response'});
  }
}
