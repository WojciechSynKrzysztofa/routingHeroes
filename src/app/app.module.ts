import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';


// tslint:disable-next-line: import-spacing
import { HeroListComponent }     from './heroes/hero-list/hero-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }