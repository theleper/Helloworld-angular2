import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, CoursesComponent,AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
