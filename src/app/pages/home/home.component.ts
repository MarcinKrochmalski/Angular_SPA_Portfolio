import { Component } from '@angular/core';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { HomePage } from '../../database/HomePage.database'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  public HomePage = HomePage;
  public faChevronCircleRight = faChevronCircleRight;

}
