import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModule lives here
import { HttpModule } from '@angular/http';

// every component must be declared in one and only one module
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './pagenotfound.component';

// Test hooks that allow this app to make HTTP request to a mock http service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
    // The "imports" property exposes the exported classes of any module declared within this property to the components "templates". i.e. ngModule
   imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService), // test hook replacing clients XHR backend service with the in memory alternative
      AppRoutingModule
    ],
    // View classes that belong to this module. Angular has 3 kinds of view classes: Components, Directives and Pipes
   declarations: [ 
      AppComponent,
      DashboardComponent,
      HeroesComponent,
      HeroDetailComponent,
      PageNotFoundComponent
   ],
   // These dependency injection providers for the servcies which will be global to this app as singleton services
   providers: [
      HeroService
   ],
   // Main application view called the "root" component that hosts all other app views
   bootstrap:    [ 
      AppComponent 
   ]
})

export class AppModule { }
