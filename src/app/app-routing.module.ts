import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { PageNotFoundComponent } from './pagenotfound.component';

// Make sure there is this element as the first child of the <head> element in index.html
//      <head>
//      <base href="/">

// The order of these routes does matter. Angular will use the first route that matches the URL so specific routes need to be prior to less specific
const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(
      routes,
      { enableTracing: true}
    )],
    exports: [RouterModule]
})

export class AppRoutingModule { }

