import {Component} from '@angular/core';
import {AuthorsService} from './authors.service'


@Component({
    selector: 'authors',
    template: `
    {{title}}

    <ul></ul>
 <li *ngFor=" let author of authors">
      {{author}}
      </li>
    `,
    providers:[AuthorsService]

})

export class AuthorsComponent {
    title = "authors in this list"
    authors;

    constructor(authorServices: AuthorsService){
        this.authors = authorServices.getAuthors();
    }
}