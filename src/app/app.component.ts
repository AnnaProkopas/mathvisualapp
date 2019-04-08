import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, Directive, Input, ViewChild, HostListener } from '@angular/core';
import { runInThisContext } from 'vm';
import { CanvasComponent } from './canvas/canvas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CanvasComponent) trigonometry: CanvasComponent;
  title = 'mathvisualapp';
  partTrig: boolean[] = [false, false, false, false];
  public changeSin() {
    this.partTrig[0] = !this.partTrig[0];
    if (this.partTrig[0]) {
      this.trigonometry.showSin();
    } else {
      this.trigonometry.hideSin();
    }
  }
  public changeCos() {
    this.partTrig[1] = !this.partTrig[1];
    if (this.partTrig[1]) {
      this.trigonometry.showCos();
    } else {
      this.trigonometry.hideCos();
    }
  }
  public changeTan() {
    this.partTrig[2] = !this.partTrig[2];
  }
  public changeCtan() {
    this.partTrig[3] = !this.partTrig[3];
  }
}
