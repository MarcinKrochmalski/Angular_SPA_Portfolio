import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styles: [
  ]
})
export class BackgroundComponent {

  width = window.innerWidth;
  height = window.innerHeight;
  timer: ReturnType<typeof setTimeout>;

  @HostListener('window:resize', ['$event'])
  handleResize(event: any) {

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {

      this.width = event.target.innerWidth;
      this.height = event.target.innerHeight;

    }, 500)

  }

}
