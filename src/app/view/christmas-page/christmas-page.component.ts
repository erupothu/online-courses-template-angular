import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-christmas-page',
  templateUrl: './christmas-page.component.html',
  styleUrls: ['./christmas-page.component.css']
})
export class ChristmasPageComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor(private elementRef: ElementRef) {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    // https://github.com/VincentGarreau/particles.js/
    // https://www.npmjs.com/package/angular-particle
    this.myParams = {
      particles: {
        number: {
          value: 100,
          density: {
            "enable": false,
          }
        },
        shape: {
          type: ['star', 'circle', '../../../assets/drawingERV.svg'],
          stroke: {
            "width": 5,
            "color": "gold",
          },
          // image: {
          //   "src": '../../../assets/drawingERV.svg',
          //   "width": 100,
          //   "height": 100
          // },
        },
        // color: {
        //     "value": "white",
        //   },
      }
    };
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  }

}
