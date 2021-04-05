import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ConstructionComponent } from './construction/construction.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "aboutme", component: AboutMeComponent },
  { path: "tmp", component: ConstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
