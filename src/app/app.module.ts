import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasBeginningAnalysisComponent } from './canvas-beginning-analysis/canvas-beginning-analysis.component';
import { CanvasStereometryComponent } from './canvas-stereometry/canvas-stereometry.component';
import { CanvasStereometryTetrahedronComponent } from './canvas-stereometry-tetrahedron/canvas-stereometry-tetrahedron.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CanvasBeginningAnalysisComponent,
    CanvasStereometryComponent,
    CanvasStereometryTetrahedronComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
