import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CanvasTrigComponent } from './canvas-trig/canvas.component';
import { CanvasBeginningAnalysisComponent } from './canvas-beginning-analysis/canvas-beginning-analysis.component';
import { CanvasCubeComponent } from './canvas-cube/canvas-cube.component';
import { CanvasTetrahedronComponent } from './canvas-tetrahedron/canvas-tetrahedron.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasTrigComponent,
    CanvasBeginningAnalysisComponent,
    CanvasCubeComponent,
    CanvasTetrahedronComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
