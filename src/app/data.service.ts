import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { CanvasComponent } from './canvas/canvas.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private trigCanvas: CanvasComponent;
  private showSin = false;
  private showCos = false;
  private showTan = false;
  private showCtan = false;

  constructor() { }
  setTrigComponent(c: CanvasComponent) {
    this.trigCanvas = c;
  }
  changeSin() {
    this.showSin = !this.showSin;
    if (this.isShowSin()) {
      this.trigCanvas.showSin();
    } else {
      this.trigCanvas.hideSin();
    }
  }
  isShowSin() {
    return this.showSin;
  }
  changeCos() {
    this.showCos = !this.showCos;
    if (this.isShowCos()) {
      this.trigCanvas.showCos();
    } else {
      this.trigCanvas.hideCos();
    }
  }
  isShowCos() {
    return this.showCos;
  }
  changeTan() {
    this.showTan = ! this.showTan;
  }
  isShowTan() {
    return this.showTan;
  }
  changeCtan() {
    this.showCtan = ! this.showCtan;
  }
  isShowCTan() {
    return this.showCtan;
  }
}
