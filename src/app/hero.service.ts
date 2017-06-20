import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes'

// the decorator @Injectable() tells typescript to emit metadata about this service
// which may envolve injecting other dependencies into this service
@Injectable()
export class HeroService {
   getHeroes() : Promise<Hero[]> {
	   return Promise.resolve(HEROES);
   }
}
	