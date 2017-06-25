import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModule lives here
import { RouterModule } from '@angular/router';

// every component must be declared in one and only one module
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
   imports:      [ 
      BrowserModule,
      FormsModule,  // <-- import the FormsModule before binding with [(ngModel)] 
      RouterModule.forRoot([
         {
            path: 'dashboard',
            component: DashboardComponent
         },
         {
            path: 'heroes',
            component: HeroesComponent
         },
         {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
         }
      ])
   ],
   declarations: [ 
      AppComponent,
      DashboardComponent,
      HeroesComponent,
      HeroDetailComponent
   ],
   providers: [
      HeroService
   ],
   bootstrap:    [ 
      AppComponent 
   ]
})

export class AppModule { }
