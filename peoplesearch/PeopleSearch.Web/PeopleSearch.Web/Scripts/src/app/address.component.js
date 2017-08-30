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
var address_1 = require("./address");
var AddressComponent = (function () {
    function AddressComponent() {
    }
    return AddressComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", address_1.default)
], AddressComponent.prototype, "address", void 0);
AddressComponent = __decorate([
    core_1.Component({
        selector: 'address',
        styles: ["\naddress {\n    font-style: italic;\n}\n"],
        template: "\n<div>\n    <div>{{address.houseNumber}} {{address.streetAddress}}</div>\n    <div>{{address.city}}, {{address.state}} {{address.zipCode}}</div>\n</div>\n"
    })
], AddressComponent);
exports.default = AddressComponent;
//# sourceMappingURL=address.component.js.map