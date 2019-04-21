import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, Directive, Input, ViewChild, HostListener } from '@angular/core';
import { CanvasComponent } from './canvas/canvas.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  @ViewChild('appcanvas') trigRef: CanvasComponent;
  title = 'mathvisualapp';
  public numShowCanvas: string = '0';
  constructor(private dataService: DataService) {  }
  /*trigonometrySelect(evt) {
    var target = evt.target;
    if (target.checked) {
      this.showTrigCanvas = true;
    } else {
      this.showTrigCanvas = false;
    }
  }*/
  partTrig: boolean[] = [false, false, false, false];
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
  }
  public changeCtan() {
    this.partTrig[3] = !this.partTrig[3];
  }
}
