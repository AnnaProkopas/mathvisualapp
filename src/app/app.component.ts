import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, Directive, Input, ViewChild, HostListener } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mathvisualapp';
  partTrig: boolean[] = [false, false, false, false];
  public changeSin() {
    this.partTrig[0] = !this.partTrig[0];
  }
  public changeCos() {
    this.partTrig[1] = !this.partTrig[1];
  }
  public changeTan() {
    this.partTrig[2] = !this.partTrig[2];
  }
  public changeCtan() {
    this.partTrig[3] = !this.partTrig[3];
  }
}