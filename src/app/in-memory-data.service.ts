import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        console.log("In InMemoryDataService.createDb");

        const heroes: Hero[] = [
            { id: 0, name: 'zero' },
            { id: 11, name: 'mr. nice' },
            { id: 12, name: 'narco' },
            { id: 13, name: 'bombasto' },
            { id: 14, name: 'celeritas' },
            { id: 15, name: 'magneta' },
            { id: 16, name: 'rubberman' },
            { id: 17, name: 'dynama' },
            { id: 18, name: 'dr iq' },
            { id: 19, name: 'magma' },
            { id: 20, name: 'tornado' }
        ];

        console.log("These are the heroes", JSON.stringify({ heroes }));

        // NOTE the curly braces are required in order to form the JSON object {heroes: [...]}
         return { heroes };
    }
}
