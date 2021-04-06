import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-svg-down-arrows',
  templateUrl: './svg-down-arrows.component.html',
  styleUrls: ['./svg-down-arrows.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state(
        'false',
        style({
        opacity: '{{ svgOpacity }}',
        }),
        { params: { svgOpacity: 1 }}
      ),
      state(
        'true',
        style({
          opacity: '{{ svgOpacity }}',
        }),
        { params: { svgOpacity: 1 }}
      ),
      transition('false => true', [
        animate('0s'),
      ]),
    ]),
  ],
})
export class SvgDownArrowsComponent implements OnInit {

  constructor() { }

  fade: boolean = false;

  currentSvgOpacity: number = 1;

  getOpacity(): number {
    const opacityScrollThreshold = 600;
    const currentScroll = window.pageYOffset;
    if (currentScroll <= opacityScrollThreshold) {
      this.currentSvgOpacity = 1 - (currentScroll / opacityScrollThreshold);
      return this.currentSvgOpacity;
    } else {
      this.currentSvgOpacity = 0;
      return this.currentSvgOpacity;
    }
  }

  setFade(): void {
    this.fade = true;
    this.fade = false;
  }

  ngOnInit(): void {
    window.addEventListener("scroll", this.setFade);
  }
}
