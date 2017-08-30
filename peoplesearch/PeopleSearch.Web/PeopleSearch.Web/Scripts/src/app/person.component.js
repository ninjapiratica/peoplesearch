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
var person_1 = require("./person");
var PersonComponent = (function () {
    function PersonComponent() {
    }
    return PersonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", person_1.default)
], PersonComponent.prototype, "person", void 0);
PersonComponent = __decorate([
    core_1.Component({
        selector: 'person',
        styles: ["\n.person {\n    margin: 5px 5px 5px 0;\n    border: 1px solid black;\n    width: 300px;\n    height: 120px;\n    vertical-align: top;\n    display: inline-block;\n}\n\n.profile-pic {\n    width: 70px;\n    height: 75px;\n}\n\n.profile-details {\n    display: inline-block;\n}\n\n.profile-interests {\n}\n\n.interest {\n    display: inline;\n}\n\n"],
        template: "\n<div class=\"person\">\n    <img class=\"profile-pic\" [src]=\"person.imageUrl\" />\n    <div class=\"profile-details\">\n        <div>{{person.firstName}} {{person.lastName}}</div>\n        <div>Age: {{person.age}}</div>\n        <address class=\"address\" [address]=\"person.address\"></address>\n    </div>\n    \n    <div class=\"profile-interests\">\n        Enjoys: \n        <div class=\"interest\" *ngFor=\"let interest of person.interests; let index = index; let last = last\" >\n            <span *ngIf=\"index < 5\">{{interest}}</span><span *ngIf=\"!last && index < 5\">, </span>\n            <span *ngIf=\"index == 5\">and more.</span>\n        </div>\n    </div>\n</div>"
    })
], PersonComponent);
exports.default = PersonComponent;
//# sourceMappingURL=person.component.js.map