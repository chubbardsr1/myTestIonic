

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';

import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { map } from 'rxjs';
// import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class webService {
    constructor(private http: HttpClient,  ) {
        // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('cima-server-user')));
        // this.user = this.userSubject.asObservable();
      }

      cimaServerApiUrl = 'https://node.cima.build/'

      post(url: string, jsonData: any): Observable<any> {
        return this.http.post(`${this.cimaServerApiUrl}/api/${url}`, jsonData)
          .pipe(map(data => data));
    
      }

}