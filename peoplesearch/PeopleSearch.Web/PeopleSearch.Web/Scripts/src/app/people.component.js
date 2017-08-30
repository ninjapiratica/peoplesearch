"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
var person_service_1 = require("./person.service");
var PeopleComponent = (function () {
    function PeopleComponent(personService) {
        this.personService = personService;
        this.search = new Subject_1.Subject();
        this.hasSearched = false;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.people = this.search
            .debounceTime(500)
            .switchMap(function (search) {
            _this.loading = true;
            var observablePeople = search ? _this.personService.getPeople(search) : Observable_1.Observable.of([]);
            observablePeople.subscribe(function () {
                _this.loading = false;
                _this.hasSearched = true;
            });
            return observablePeople;
        })
            .map(function (people) {
            people.sort(function (a, b) {
                if (a.firstName < b.firstName)
                    return -1;
                if (a.firstName === b.firstName && a.lastName < b.lastName)
                    return -1;
                return 1;
            });
            return people;
        })
            .catch(function (error) {
            console.error(error);
            return Observable_1.Observable.of([]);
        });
    };
    PeopleComponent.prototype.findPeople = function (search) {
        this.search.next(search);
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    core_1.Component({
        selector: 'people',
        styles: ["\n.no-people {\n    margin-top: 5px;\n}\n\n.spinner {\n    height: 20px;\n    vertical-align: middle;\n}\n    "],
        template: "\n<div>\n  <h4>People</h4>\n  <input #searchBox (keyup)=\"findPeople(searchBox.value)\" placeholder=\"Search\" />\n  <img class=\"spinner\" *ngIf=\"loading\" src=\"content/images/spinner.gif\">\n  <div>\n    <person *ngFor=\"let person of people | async\" [person]=\"person\"></person>\n    <div class=\"no-people\" *ngIf=\"(people | async)?.length == 0 || !hasSearched\">No people to show.</div>\n  </div>\n</div>"
    }),
    __metadata("design:paramtypes", [person_service_1.default])
], PeopleComponent);
exports.default = PeopleComponent;
//# sourceMappingURL=people.component.js.map