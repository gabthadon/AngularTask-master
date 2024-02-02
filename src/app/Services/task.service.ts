import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, map, take } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  apiUrl='https://jsonplaceholder.typicode.com/posts';

  getTask():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl).pipe(
      take(2), // Limit the number of emitted items
      map(data => data.slice(0, 5)) // Extract the required number of items
    );;
  } 
}
