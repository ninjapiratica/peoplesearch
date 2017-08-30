import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import AppComponent from './app.component';
import PeopleComponent from './people.component';
import PersonComponent from './person.component';
import AddressComponent from './address.component';

import PersonService from './person.service';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, PeopleComponent, PersonComponent, AddressComponent],
    bootstrap: [AppComponent],
    providers: [PersonService]
})
export class AppModule { }