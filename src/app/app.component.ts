import { Component } from '@angular/core';


// double curly braces {{object.property}} (one-way data binding) are Angular's interpolation binding syntax
// [(ngModel)] directive is the Angular syntax for two-way data binding
// The backticks designate a template literal a feature of ES2015 
@Component({
   selector: 'my-app',
   template: `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
         <label>name: </label>
         <input [(ngModel)]="hero.name" placeholder="name">
     </div>
    `
})


export class AppComponent {
   name = 'Angular';
   title = 'Tour of Heros';
   hero : Hero = {
      id: 1,
      name: 'Windstorm'
   };
}

export class Hero {
   id: number;
   name: string;
}
