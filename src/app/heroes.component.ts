import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

// you must import the Component symbol from @angular/core when defining a component
// the decorator @Component provides access to the Angular metadata
// the name in the CSS selector element must match  
// double curly braces {{object.property}} (one-way data binding) are Angular's interpolation binding syntax
// [(ngModel)] directive is the Angular syntax for two-way data binding
// The backticks designate a template literal a feature of ES2015
// The '*' prefix to ngFor indicates that the <li> element and its children constitute a master template.
// The ngFor directive iterates over the component's heroes array and renders an instance of this template for each hero in that array. 
// To bind to a DOM event i.e. click surround the event with parens () and assign it a quoted template statement. To pass the entire payload of the event pass the $event object to the handler 

@Component({
   selector: 'my-heroes',
   templateUrl: './heroes.component.html',
   styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit { 
   heroes : Hero[];
   selectedHero: Hero;

   constructor(
      private heroService: HeroService,
      private router: Router) { }

   ngOnInit(): void {
      this.getHeroes();
   }

   getHeroes(): void {
      console.log("in AppComponent.getHeroes");
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   }

   gotoDetail(): void {
       this.router.navigate(['/detail', this.selectedHero.id]);
   }

   onSelect(hero: Hero): void {
      this.selectedHero = hero;
   }
}
