import { Component } from '@angular/core';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
  ],
  animations: [slideInAnimation]
})
export class AppComponent {

  title = 'app';

  public getRouterOutletState(outlet) {

    return outlet.isActivated ? outlet.activatedRoute : '';

  }

}
