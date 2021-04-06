import { Component, OnInit } from '@angular/core';
import { NAVLINKS } from '../navlinks';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  navLinks = NAVLINKS;

  show = false;

  ngOnInit(): void {
  }

  title = "Michael Geaghan";

}
