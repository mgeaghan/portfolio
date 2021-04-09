import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  aboutMeText = "";

  aboutMeParagraphList: string[] = [];

  getAboutMe() {
    this.http
    .get(
      '../../assets/text/about-me-text.txt',
      { responseType: 'text' })
    .subscribe(data => {
      this.aboutMeText = data;
      this.aboutMeParagraphList = this.paragraphsToList(data);
      console.log(this.aboutMeParagraphList);
    })
  }

  paragraphsToList(text: string): string[] {
    let ret = [''];
    if (text) {
      ret = text.split('\n');
    }
    return ret;
  }

  ngOnInit(): void {
    this.getAboutMe();
  }
}
