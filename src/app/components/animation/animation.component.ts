import { Component, OnInit, OnDestroy, OnChanges, Input, ElementRef, NgZone } from '@angular/core';
import { AreaModel } from '../../models/Area.model';
import { Application, Container, Texture, SimpleRope, Point } from 'pixi.js';

@Component({
  selector: 'app-animation',
  template: '',
  styles: [
  ]
})
export class AnimationComponent implements OnInit, OnDestroy, OnChanges {

  constructor(private elementRef: ElementRef, private ngZone: NgZone) { }

  @Input() width: number;
  @Input() height: number;
  @Input() scale: number;
  @Input() imageWidth: number;
  @Input() imageHeight: number;
  @Input() xSpeed: number;
  @Input() ySpeed: number;
  @Input() xMouse: number;
  @Input() yMouse: number;

  isInit = false;
  app: Application;
  container: Container;
  rope: SimpleRope;
  pointsAndAreas: [Point[], AreaModel[]];
  points: Point[];
  areas: AreaModel[];
  texture: Texture;

  initPointsAndAreas = (): [Point[], AreaModel[]] => {

    const margin = this.imageWidth * 0.1;
    const newImageWidth = this.imageWidth + (margin * 2);

    const points: Point[] = [];
    const areas: AreaModel[] = [];
    const partSize = 128;
    const quantity = Math.round(newImageWidth / partSize)
    const halfHeight = this.imageHeight / 2;
    const areaSize = partSize * 0.04;

    for (let i = 0; i <= quantity; i++) {

      const xPoint = (i * partSize) - margin;
      points.push(new Point(xPoint, halfHeight))
      areas.push({

        xMin: xPoint - areaSize,
        yMin: halfHeight - areaSize,
        xMax: xPoint + areaSize,
        yMax: halfHeight + areaSize,
        xDirection: Math.round(Math.random() * 1),
        yDirection: Math.round(Math.random() * 1),
        xSpeed: 0,
        ySpeed: 0,
        impactSize: [xPoint - (partSize / 2), xPoint + (partSize / 2)]

      })

    }

    return [points, areas]

  }



  updateAreas = (areas: AreaModel[]): AreaModel[] => {

    return areas.map((area: AreaModel) => {

      if (this.xMouse >= area.impactSize[0] && this.xMouse <= area.impactSize[1]) {

        area.xSpeed = this.xSpeed;
        area.ySpeed = this.ySpeed;

      } else {

        area.xSpeed = Math.round((this.xSpeed / 100) * ((Math.abs(area.xMax - this.xMouse) / this.imageWidth) * 100));
        area.ySpeed = Math.round((this.ySpeed / 100) * ((Math.abs(area.yMax - this.yMouse) / this.imageHeight) * 100));

      }

      return area

    });

  }

  ngOnChanges(): void {

    if (this.isInit) {

      this.areas = this.updateAreas(this.pointsAndAreas[1]);
      this.container.setTransform(0, 0, 1, 1)
      this.container.setTransform(0, 0, this.scale, this.scale)

    }

  }

  ngOnInit(): void {

    this.texture = Texture.from("/abstract-geometr.jpg");

    this.pointsAndAreas = this.initPointsAndAreas();
    this.points = this.pointsAndAreas[0];
    this.areas = this.updateAreas(this.pointsAndAreas[1]);
    this.isInit = true;

    this.ngZone.runOutsideAngular(() => {

      this.app = new Application({
        width: this.width,
        height: this.height
      });

      this.container = new Container();
      this.container.x = 0;
      this.container.y = 0;
      this.container.width = this.width;
      this.container.height = this.height;
      this.container.setTransform(0, 0, this.scale, this.scale)
      this.rope = new SimpleRope(this.texture, this.points, 0);
      this.container.addChild(this.rope);
      this.app.stage.addChild(this.container);

    });

    this.elementRef.nativeElement.appendChild(this.app.view);

    this.app.ticker.add(() => {

      const newPoints: Point[] = [...this.points];

      for (let j = 0; j < newPoints.length; j++) {

        newPoints[j].x = (this.areas[j].xDirection === 1) ? newPoints[j].x + (this.areas[j].xSpeed / 100) : newPoints[j].x - (this.areas[j].xSpeed / 100);

        if (newPoints[j].x < this.areas[j].xMin)

          this.areas[j].xDirection = 1;

        else if (newPoints[j].x > this.areas[j].xMax)

          this.areas[j].xDirection = 0;

        newPoints[j].y = (this.areas[j].yDirection === 1) ? newPoints[j].y + (this.areas[j].ySpeed / 100) : newPoints[j].y - (this.areas[j].ySpeed / 100);

        if (newPoints[j].y < this.areas[j].yMin)

          this.areas[j].yDirection = 1;

        else if (newPoints[j].y > this.areas[j].yMax)

          this.areas[j].yDirection = 0;

      }

      this.points = newPoints;

    });

  }

  ngOnDestroy() {

    this.app.destroy();

  }

}
