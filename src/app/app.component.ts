import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, Directive, Input, ViewChild, HostListener } from '@angular/core';
import { CanvasTrigComponent } from './canvas-trig/canvas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appcanvas') trigRef: CanvasTrigComponent;
  title = 'mathvisualapp';
  public numShowCanvas: string = '1';
  partTrig: boolean[] = [false, false, false, false];
  public chooseCube() {
    this.numShowCanvas = '4';
  }
  public chooseTetrahedron() {
    this.numShowCanvas = '3';
  }
  public changeSin() {
    this.partTrig[0] = !this.partTrig[0];
    if (this.partTrig[0]) {
      this.trigRef.showSin();
    } else {
      this.trigRef.hideSin();
    }
  }
  public changeCos() {
    this.partTrig[1] = !this.partTrig[1];
    if (this.partTrig[1]) {
      this.trigRef.showCos();
    } else {
      this.trigRef.hideCos();
    }
  }
  public changeTan() {
    this.partTrig[2] = !this.partTrig[2];
    if (this.partTrig[2]) {
      this.trigRef.showTg();
    } else {
      this.trigRef.hideTg();
    }
  }
  public changeCtan() {
    this.partTrig[3] = !this.partTrig[3];
    if (this.partTrig[3]) {
      this.trigRef.showCtg();
    } else {
      this.trigRef.hideCtg();
    }
  }
}
