import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import Person from './person';

@Injectable()
export default class PersonService {

    constructor(private http: Http) {

    }

    getPeople(search?: string): Observable<Person[]> {
        return this.http
            .get(`api/people`, {
                params: {
                    search: search
                }
            })
            .delay(2500) // Simulate Slow connection
            .map(r => r.json() as Person[]); 
    }
}