import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasBeginningAnalysisComponent } from './canvas-beginning-analysis/canvas-beginning-analysis.component';
import { CanvasStereometryComponent } from './canvas-stereometry/canvas-stereometry.component';
/*
const appRoutes: Routes = [
  //{path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent},
  {path: 'price', component: PriceComponent},
  {path: '**', component: NotFoundComponent}
]*/

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CanvasBeginningAnalysisComponent,
    CanvasStereometryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
