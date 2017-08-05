import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

// Angular Cheatsheet
//    https://angular.io/guide/cheatsheet


// you must import the Component symbol from @angular/core when defining a component
// the name in the CSS selector element must match
// double curly braces {{object.property}} (one-way data binding) are Angular's interpolation binding syntax
// [(ngModel)] directive is the Angular syntax for two-way data binding
// The backticks designate a template literal a feature of ES2015
// The '*' prefix to ngFor directive indicates that the <li> element and its children constitute a master template.
// The ngFor directive iterates over the component's heroes array and renders an instance of this template for each hero in that array.
// To bind to a DOM event i.e. click surround the event with parens () and assign it a quoted template statement. To pass the entire payload of the event pass the $event object to the handler
@Component({
   selector: 'my-heroes',
   templateUrl: './heroes.component.html',
   styleUrls: [ './heroes.component.css' ]
})


// the decorator @Component provides access to the Angular metadata which identifies the javascript class HeroesComponent as a Angular component
// component classes should expose properites and methods for databinding, all other application logic should be delegated to a service and made available via dependency injection
export class HeroesComponent implements OnInit {
   heroes : Hero[];
   selectedHero: Hero;

// Both the HeroService and Router are made available by way of exposing these as private parmaters to its ctor aka dependency injection
   constructor(
      private heroService: HeroService,
      private router: Router) { }

   ngOnInit(): void {
      console.log("In HeroesComponent.ngOnInit calling HeroesComponent.getHeroes()");
      this.getHeroes();
   }

   getHeroes(): void {
      console.log("in HeroesComponent.getHeroes calling HeroService.getHeroes()");
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   }

   gotoDetail(): void {
       this.router.navigate(['/detail', this.selectedHero.id]);
   }

   addHero(name: string): void {
      name = name.trim();

      if (!name) { return; }

      this.heroService.createHero(name)
         .then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
         });
   }

   deleteHero(hero: Hero): void {
      this.heroService.deleteHero(hero.id)
         .then(() => {
            this.heroes = this.heroes.filter(h => h != hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
         })
   }

   onSelect(hero: Hero): void {
      this.selectedHero = hero;
   }
}
