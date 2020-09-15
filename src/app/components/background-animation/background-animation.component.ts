import { Component, OnInit, OnDestroy, OnChanges, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-background-animation',
  templateUrl: './background-animation.component.html',
  styles: [
  ]
})
export class BackgroundAnimationComponent implements OnInit, OnDestroy, OnChanges {

  @Input() width: number;
  @Input() height: number;

  isInit = false;

  data = {
    xMouse: 0,
    yMouse: 0,
    xSpeed: 10,
    ySpeed: 10,
    lastXMouse: 0,
    lastYMouse: 0
  };

  imageWidth = 1920;
  imageHeight = 1080;
  size: [number, number, number];

  getSize = (): [number, number, number] => {

    let newWidth = this.width;
    let newHeight = this.height;
    let ratio = 0;

    if (this.width > this.height) {

      ratio = this.width / this.imageWidth;
      newHeight = this.imageHeight * ratio;

      if (newHeight < this.height) {

        newHeight = this.height;
        ratio = this.height / this.imageHeight;
        newWidth = this.imageWidth * ratio;

      }

    } else if (this.width < this.height) {

      ratio = this.height / this.imageHeight;
      newWidth = this.imageWidth * ratio;

      if (newWidth < this.width) {

        newWidth = this.width;
        ratio = this.width / this.imageWidth;
        newHeight = this.imageHeight * ratio;

      }

    }

    return [newWidth, newHeight, ratio]

  }

  @HostListener('document:mousemove', ['$event']) handleMouseMove = (event: MouseEvent): void => {

    this.data.xMouse = event.clientX;
    this.data.yMouse = event.clientY;

  }

  @HostListener('document:click') handleMouseClick = (): void => {

    this.data.xSpeed = 100;
    this.data.ySpeed = 100;

  }
  interval: number;

  ngOnChanges(): void {

    if (this.isInit) {

      this.size = this.getSize();

    }

  }

  ngOnInit(): void {

    this.size = this.getSize();
    this.isInit = true;

    this.interval = window.setInterval(() => {

      const nData = { ...this.data };
      let setNewData = false;

      if (Math.abs(nData.xMouse - nData.lastXMouse) > 100) {

        nData.xSpeed += Math.floor((Math.abs(nData.xMouse - nData.lastXMouse) / this.width) * 100)
        if (nData.xSpeed > 100) nData.xSpeed = 100
        nData.lastXMouse = nData.xMouse;

        setNewData = true;

      } else if (nData.xSpeed > 10) {

        nData.xSpeed -= ((nData.xSpeed / 100) * (100 / nData.xSpeed))

        setNewData = true;

      }

      if (Math.abs(nData.yMouse - nData.lastYMouse) > 100) {

        nData.ySpeed += Math.floor((Math.abs(nData.yMouse - nData.lastYMouse) / this.height) * 100)
        if (nData.ySpeed > 100) nData.ySpeed = 100
        nData.lastYMouse = nData.yMouse;

        setNewData = true;

      } else if (nData.ySpeed > 10) {

        nData.ySpeed -= ((nData.ySpeed / 100) * (100 / nData.ySpeed))

        setNewData = true;

      }

      if (setNewData) this.data = nData;

    }, 20);

  }

  ngOnDestroy() {

    clearInterval(this.interval);

  }

}
