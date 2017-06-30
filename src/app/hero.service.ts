import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'; // http.get returns a RxJS Observable which doesn't have a toPromise method; this module exports that'

import { Hero } from './hero';

// the decorator @Injectable() tells typescript to emit metadata about this service
// which may envolve injecting other dependencies into this service
@Injectable()
export class HeroService {
   private heroesUrl = 'api/heroes';

   constructor(private http: Http) { }

   getHeroes(): Promise<Hero[]> {
      console.log("In getHeroes making HTTP request: ", this.heroesUrl);
      return this.http.get(this.heroesUrl)
         .toPromise()
         .then(response => response.json().data as Hero[])
         .catch(this.handleError);
    }

   getHero(id: number): Promise<Hero> {
      const url = `${this.heroesUrl}/${id}`;

      console.log("In getHero making HTTP request: ", url);
      return this.http.get(url)
         .toPromise()
         .then(response => response.json().data as Hero)
         .catch(this.handleError);
   }

   private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
   }
}
