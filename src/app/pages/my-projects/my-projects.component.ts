import { Component } from '@angular/core';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import { Projects } from '../../database/Projects.database'

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styles: [
  ]
})
export class MyProjectsComponent {

  public Projects = Projects;
  public faChevronCircleRight = faChevronCircleRight;

}
