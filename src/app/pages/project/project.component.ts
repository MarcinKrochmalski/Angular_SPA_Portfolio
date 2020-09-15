import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { ProjectModel } from '../../models/Project.model'
import { Projects } from '../../database/Projects.database'

@Component({

  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [
  ]

})
export class ProjectComponent {

  Project: ProjectModel;
  faChevronCircleUp = faChevronCircleUp;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {

      const id = params['id'];
      this.Project = Projects.filter(project => Number(project.id) === Number(id))[0];

    });



  }

}
