import { Component, Input } from '@angular/core';

import Person from './person';

@Component({
    selector: 'person',
    styles: [`
.person {
    margin: 5px 5px 5px 0;
    padding: 2px;
    border: 1px solid black;
    width: 300px;
    height: 125px;
    vertical-align: top;
    display: inline-block;
}

.profile-pic {
    width: 70px;
    height: 75px;
    vertical-align: top;
}

.profile-details {
    display: inline-block;
}

.profile-interests {
}

.interest {
    display: inline;
}

.address {
    max-width: 225px;
}

`],
    template: `
<div class="person">
    <img class="profile-pic" [src]="person.imageUrl" />
    <div class="profile-details">
        <div>{{person.firstName}} {{person.lastName}}</div>
        <div>Age: {{person.age}}</div>
        <address class="address" [address]="person.address"></address>
    </div>
    
    <div class="profile-interests">
        Enjoys: 
        <div class="interest" *ngFor="let interest of person.interests; let index = index; let last = last" >
            <span *ngIf="index < 5">{{interest}}</span><span *ngIf="!last && index < 5">, </span>
            <span *ngIf="index == 5">and more.</span>
        </div>
    </div>
</div>`
})
export default class PersonComponent {
    @Input() person: Person;
}
