import { Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material';
import { Snowflakes } from 'magic-snowflakes';
import { of } from 'rxjs';
@Component({
  selector: 'app-welcome-dashboard',
  templateUrl: './welcome-dashboard.component.html',
  styleUrls: ['./welcome-dashboard.component.css']
})
export class WelcomeDashboardComponent implements OnInit {

  // @ViewChild(MatHorizontalStepper, {static: false}) stepper: MatHorizontalStepper;
  imagesList = ['/assets/images-jpg/christmas-image1.jpg', '/assets/images-jpg/christmas-image2.jpg', '/assets/images-jpg/christmas-image3.jpeg','/assets/images-jpg/christmas-image4.jpeg'];
  sampleImage = '/assets/image1.jpeg';
  currentImageIndex = 0;
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor() {
    // const Snowflakes = require('magic-snowflakes');
    // Snowflakes();
    // this.sf = new Snowflakes({
    //   color: '#f00', // Default: "#5ECDEF"
    //   container: document.querySelector('#snowflakes-container'), // Default: document.body
    //   count: 100, // 100 snowflakes. Default: 50
    //   minOpacity: 0.1, // From 0 to 1. Default: 0.6
    //   maxOpacity: 0.95, // From 0 to 1. Default: 1
    //   minSize: 20, // Default: 8
    //   maxSize: 50, // Default: 18
    //   rotation: true, // Default: true
    //   speed: 2, // The property affects the speed of falling. Default: 1
    //   wind: false, // Without wind. Default: true
    //   width: 500, // Default: width of container
    //   height: 250, // Default: height of container
    //   zIndex: 100 // Default: 9999
    // });
  }

  ngOnInit() {
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
        },
        // color: {
        //   value: '#ff0000'
        // },
        shape: {
          type: ['star','http://localhost:4200/assets/nature.jpeg'],
          "stroke": {
            "width": 5,
            "color": "red"
          },
          "image": {
            "src": "http://localhost:4200/assets/nature.jpeg",
            "width": 30,
            "height":20
          }
        },
      }
    };
    setInterval(() => {
      this.currentImageIndex = ++this.currentImageIndex % this.imagesList.length;
    }, 2000);
  }
  //   ngAfterViewInit() {
  //   this.stepper._getIndicatorType = () => 'number';
  // }

}
