import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructionComponent } from './construction/construction.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MainComponent } from './main/main.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructionComponent,
    TopbarComponent,
    AboutMeComponent,
    MainComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
