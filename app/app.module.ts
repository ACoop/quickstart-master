import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesComponent } from './heroes.component';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  bootstrap: [ 
    AppComponent 
  ],
  providers: [
    HeroService
  ]
})
export class AppModule { }
