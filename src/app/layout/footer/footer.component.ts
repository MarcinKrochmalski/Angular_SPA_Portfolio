import { Component } from '@angular/core';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent {

  public year: number = new Date().getFullYear();
  public faFacebook = faFacebook;
  public faGithub = faGithub;

}
