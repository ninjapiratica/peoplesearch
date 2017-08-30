import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import PersonService from './person.service';
import Person from './person';

@Component({
    selector: 'people',
    styles: [`
.no-people {
    margin-top: 5px;
}

.spinner {
    height: 20px;
    vertical-align: middle;
}
    `],
    template: `
<div>
  <h4>People</h4>
  <input #searchBox (keyup)="findPeople(searchBox.value)" placeholder="Search" />
  <img class="spinner" *ngIf="loading" src="content/images/spinner.gif">
  <div>
    <person *ngFor="let person of people | async" [person]="person"></person>
    <div class="no-people" *ngIf="(people | async)?.length == 0 || !hasSearched">No people to show.</div>
  </div>
</div>`
})
export default class PeopleComponent implements OnInit {
    loading: boolean;
    hasSearched: boolean;
    people: Observable<Person[]>;
    private search: Subject<string>;

    constructor(private personService: PersonService) {
        this.search = new Subject<string>();
        this.hasSearched = false;
    }

    ngOnInit(): void {
        this.people = this.search
            .debounceTime(500)
            .switchMap(search => {
                this.loading = true;

                let observablePeople = search ? this.personService.getPeople(search) : Observable.of<Person[]>([]);

                observablePeople.subscribe(() => {
                    this.loading = false;
                    this.hasSearched = true;
                });

                return observablePeople;
            })
            .map(people => {
                people.sort((a, b) => {
                    if (a.firstName < b.firstName)
                        return -1;
                    if (a.firstName === b.firstName && a.lastName < b.lastName)
                        return -1;

                    return 1;
                });

                return people;
            })
            .catch(error => {
                console.error(error);
                return Observable.of<Person[]>([]);
            });
    }

    findPeople(search: string): void {
        this.search.next(search);
    }
}