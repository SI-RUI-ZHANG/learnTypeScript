import {faker} from "@faker-js/faker";
import {Mappable} from "./CustomMap";

export class Company implements Mappable {
    color: string = 'blue';
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `
            <div>
                <h3>Company Name: ${this.companyName}</h1>
                <h4>Catchphrase: ${this.catchPhrase}</h4>
            </div>
        `;
    }
}
