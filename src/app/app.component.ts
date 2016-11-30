import { Component } from '@angular/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
  selector: 'app-root',
  template: `
  <courses></courses>
  <authors></authors>
  `
})
export class AppComponent {

}
