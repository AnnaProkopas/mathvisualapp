import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css', './left-menu.component.checkbox.css']
})
export class LeftMenuComponent implements OnInit {
  items = ["first-lesson", "second-lesson"];
  isOpen = [false, false];
  constructor() {
  		
  }
  myEvent(event, i){
  	console.log(event);
  	console.log(i);
  	this.isOpen[i] = !this.isOpen[i];
  }
  ngOnInit() {
  }

}