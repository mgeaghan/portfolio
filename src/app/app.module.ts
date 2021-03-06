import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructionComponent } from './construction/construction.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';
import { TitleComponent } from './title/title.component';
import { SvgDownArrowsComponent } from './svg-down-arrows/svg-down-arrows.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgDownArrowComponent } from './svg-down-arrow/svg-down-arrow.component';
import { HttpClientModule } from '@angular/common/http';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructionComponent,
    TopbarComponent,
    AboutMeComponent,
    MainComponent,
    TestComponent,
    TitleComponent,
    SvgDownArrowsComponent,
    SvgDownArrowComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
