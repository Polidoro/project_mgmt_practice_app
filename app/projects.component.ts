import { Component, OnInit } from '@angular/core';

import { Project } from './project';

@Component({
    selector: 'projects',
    templateUrl: 'templates/projects.component.html'
})
export class ProjectsComponent implements OnInit {
    projects: Project[];

    ngOnInit() {
        this.projects = [
            {id: '1', name: 'First Project'},
            {id: '2', name: 'Second Project'},
        ];
    }
}
