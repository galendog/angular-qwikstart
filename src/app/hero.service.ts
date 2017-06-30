import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'; // http.get returns a RxJS Observable which doesn't have a toPromise method; this module exports that'

import { Hero } from './hero';

// the decorator @Injectable() tells typescript to emit metadata about this service
// which may envolve injecting other dependencies into this service
@Injectable()
export class HeroService {
   private heroesUrl = 'api/heroes';
   private headers = new Headers({ 'ContentType': 'application/json' });

   constructor(private http: Http) { }

   getHeroes(): Promise<Hero[]> {
      console.log("In getHeroes making HTTP request: ", this.heroesUrl);
      return this.http.get(this.heroesUrl)
         .toPromise()
         .then(response => response.json().data as Hero[])
         .catch(this.handleError);
    }

   getHero(id: number): Promise<Hero> {
      const heroUrlbyId = `${this.heroesUrl}/${id}`;

      console.log("In getHero making HTTP request: ", heroUrlbyId);
      return this.http.get(heroUrlbyId)
         .toPromise()
         .then(response => response.json().data as Hero)
         .catch(this.handleError);
   }

   updateHero(hero: Hero): Promise<Hero> {
       const heroUrlEdit = `${this.heroesUrl}/${hero.id}`;

       console.log("In updateHero making HTTP request: ", heroUrlEdit);
       //return Promise.resolve<void>(null);
       return this.http.put(heroUrlEdit, JSON.stringify(hero), { headers: this.headers })
          .toPromise()
          .then(() => hero)
          .catch(this.handleError);
   }

   createHero(name: string): Promise<Hero> {

      console.log("In createHero making HTTP request: ");
      return this.http.post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
         .toPromise()
         .then(res => res.json().data as Hero)
         .catch(this.handleError);
   }

   deleteHero(id: number): Promise<void> {
      const heroUrlDelete = `${this.heroesUrl}/${id}`;

      console.log("In deleteHero making HTTP request: ", heroUrlDelete);
      return this.http.delete(heroUrlDelete, { headers: this.headers })
         .toPromise()
         .then(() => null)
         .catch(this.handleError);
   }

   private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
   }
}
