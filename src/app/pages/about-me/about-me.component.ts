import { Component } from '@angular/core';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { AboutMePage } from '../../database/AboutMePage.database';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styles: [
  ]
})
export class AboutMeComponent {

  AboutMePage = AboutMePage;
  faChevronCircleRight = faChevronCircleRight;

}
