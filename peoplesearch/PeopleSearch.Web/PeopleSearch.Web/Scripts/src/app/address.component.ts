import { Component, Input } from '@angular/core';

import Address from './address';

@Component({
    selector: 'address',
    styles: [`
address {
    font-style: italic;
}
`],
    template: `
<div>
    <div>{{address.houseNumber}} {{address.streetAddress}}</div>
    <div>{{address.city}}, {{address.state}} {{address.zipCode}}</div>
</div>
`
})
export default class AddressComponent {
    @Input() address: Address;
}
