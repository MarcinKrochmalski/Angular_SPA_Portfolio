import { Component } from '@angular/core';
import { MenuContent } from '../../database/MenuContent.database'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})

export class HeaderComponent {

  mobileMenu = false;
  menuContent = MenuContent;

  switchMobileMenu = (_switch = true) => {
    this.mobileMenu = (_switch) ? !this.mobileMenu : false;
  }

}
