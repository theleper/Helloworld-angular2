import {Component} from '@angular/core'
import {CourseService} from './course.service'

@Component({

    selector: 'courses',
    template: `
    {{title}}

      <ul>
      <li *ngFor=" let course of courses">
      {{course}}
      </li>
    </ul>
    `,
    providers:[CourseService]
})

export class CoursesComponent {
    title =  "The title is courses";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}