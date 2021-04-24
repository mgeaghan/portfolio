import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
  animations: [
    trigger('fadeAnimation', [
      state(
        'false',
        style({
          opacity: '{{ arrowOpacity }}',
          display: '{{ arrowDisplay }}',
        }),
        { params: { arrowOpacity: 1, arrowDisplay: 'block' }}
      ),
      state(
        'true',
        style({
          opacity: '{{ arrowOpacity }}',
          display: '{{ arrowDisplay }}',
        }),
        { params: { arrowOpacity: 1, arrowDisplay: 'block' }}
      ),
      transition('false => true', [
        animate('0s'),
      ]),
      transition('true => false', [
        animate('0s'),
      ]),
    ])
  ],
})
export class TitleComponent implements OnInit {

  title = 'Michael Geaghan';

  constructor() { }

  fade: boolean = false;
  
  currentSvgOpacity: number = 1;

  getArrowOpacity(): number {
    const opacityScrollThreshold = 400;
    const currentScroll = window.pageYOffset;
    if (currentScroll <= opacityScrollThreshold) {
      this.currentSvgOpacity = 1 - (currentScroll / opacityScrollThreshold);
      return this.currentSvgOpacity;
    } else {
      this.currentSvgOpacity = 0;
      return this.currentSvgOpacity;
    }
  }

  getArrowDisplay(): string {
    if (this.currentSvgOpacity > 0) {
      return 'block';
    } else {
      return 'none';
    }
  }

  setArrowFade(): void {
    this.fade = !this.fade;
  }

  ngOnInit(): void {
    window.addEventListener("scroll", this.setArrowFade);
  }

}
