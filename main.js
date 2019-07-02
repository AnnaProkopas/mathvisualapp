(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-canvas {\n\theight: 1000px;\n\twidth: 600px;\n}\napp-canvas-stereometry {\n    height: 1000px;\n    width: 700px;\n}\n.left-menu {\n\twidth: 200px;\n\theight: 500px;\n}\n.inline{\n    display: flex;\n    margin: auto;\n    justify-content: flex-start;\n    margin-left: 15%;\n}\nbody {background: #e0e3ec repeat top left;}\n.ac-container{\n    width: inherit;\n    margin: 10px auto 30px auto;\n}\n.ac-container .ac-label, .ac-list div {\n    font-family: 'Arial Narrow', Arial, sans-serif;\n    padding: 5px 20px;\n    position: relative;\n    z-index: 20;\n    display: block;\n    height: 30px;\n    cursor: pointer;\n    color: #777;\n    text-shadow: 1px 1px 1px rgba(255,255,255,0.8);\n    line-height: 33px;\n    font-size: 19px;\n    /*background: -webkit-gradient(linear, left top, left bottom, color-stop(1%,#ffffff), color-stop(100%,#eaeaea));\n    */\n    background: -ms-linear-gradient(top, #ffffff 1%,#eaeaea 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#eaeaea',GradientType=0 );\n    /*box-shadow: \n        0px 0px 0px 1px rgba(155,155,155,0.3), \n        1px 0px 0px 0px rgba(255,255,255,0.9) inset, \n        0px 2px 2px rgba(0,0,0,0.1);*/\n}\n.ac-container .ac-label:hover{\n    background: #fff;\n}\n/*.ac-container .ac-checkbox:checked + .ac-label {\n    background: #c6e1ec;\n    color: #3d7489;\n    text-shadow: 0px 1px 1px rgba(255,255,255, 0.6);\n    box-shadow: \n        0px 0px 0px 1px rgba(155,155,155,0.3), \n        0px 2px 2px rgba(0,0,0,0.1);\n}*/\n.ac-container input:checked + label,\n.ac-container input:checked + label:hover{\n    background: #c6e1ec;\n    color: #3d7489;\n    text-shadow: 0px 1px 1px rgba(255,255,255, 0.6);\n    box-shadow: \n        0px 0px 0px 1px rgba(155,155,155,0.3), \n        0px 2px 2px rgba(0,0,0,0.1);\n}\n.ac-container .ac-label:hover:after,\n.ac-container .ac-checkbox:checked + .ac-label:hover:after{\n    content: '';\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    right: 13px;\n    top: 7px;\n    background-color: rgb(198, 225, 236);\n}\n.ac-container .ac-checkbox:checked + .ac-label:hover:after {\n    background-color: rgb(198, 225, 236);\n}\n.ac-container .ac-checkbox {\n    display: none;\n}\n.ac-container article{\n    background: rgba(255, 255, 255, 0.5);\n    margin-top: -1px;\n    overflow: hidden;\n    height: 0px;\n    position: relative;\n    z-index: 10;\n    transition: height 0.3s ease-in-out, box-shadow 0.6s linear;\n}\n.ac-checkbox:checked ~ article {\n    transition: height 0.3s ease-in-out, box-shadow 0.6s linear;\n    box-shadow: 0px 0px 0px 1px rgba(155,155,155,0.3);\n    min-height: 140px;/*change this!*/\n}\n.ac-container article p{\n    font-style: italic;\n    color: #777;\n    line-height: 23px;\n    font-size: 14px;\n    padding: 20px;\n    text-shadow: 1px 1px 1px rgba(255,255,255,0.8);\n}\n.ac-checkbox:checked ~ .stereo {\n    min-height: 90px;\n}\n.stereo__list {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: space-around;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    font-family: 'Arial Narrow', Arial, sans-serif;\n    position: relative;\n    z-index: 20;\n    min-height: 90px;\n    cursor: pointer;\n    color: #777;\n    text-shadow: 1px 1px 1px rgba(255,255,255,0.8);\n    line-height: 33px;\n    font-size: 19px;\n    background: -ms-linear-gradient(top, #ffffff 1%,#eaeaea 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#eaeaea',GradientType=0 );\n}\n.stereo__btn {\n    background-color: transparent;\n    border: none;\n    line-height: 40px;\n    width: 150px;\n    color: inherit;\n    font-family: inherit;\n    text-align: left;\n}\n.stereo__el:hover, .stereo__el:checked, .stereo__el:focus {\n    background-color: rgb(198, 225, 236);\n}\ninput[type=\"checkbox\"] {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0NBQ2QsWUFBWTtBQUNiO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7QUFDZDtBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCO0FBRUEsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxQztJQUNJLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixlQUFlO0lBRWY7S0FDQztJQUVELDZEQUE2RDtJQUM3RCxtSEFBbUg7SUFDbkg7OztxQ0FHaUM7QUFDckM7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBOzs7Ozs7O0VBT0U7QUFFRjs7SUFFSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLCtDQUErQztJQUMvQzs7bUNBRStCO0FBQ25DO0FBRUE7O0lBRUksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxRQUFRO0lBQ1Isb0NBQW9DO0FBQ3hDO0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUtYLDJEQUEyRDtBQUMvRDtBQUNBO0lBS0ksMkRBQTJEO0lBQzNELGlEQUFpRDtJQUNqRCxpQkFBaUIsQ0FBQyxlQUFlO0FBQ3JDO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLDhDQUE4QztBQUNsRDtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1QsOENBQThDO0lBQzlDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixlQUFlO0lBSWYsNkRBQTZEO0lBQzdELG1IQUFtSDtBQUN2SDtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNhbnZhcyB7XG5cdGhlaWdodDogMTAwMHB4O1xuXHR3aWR0aDogNjAwcHg7XG59XG5hcHAtY2FudmFzLXN0ZXJlb21ldHJ5IHtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgICB3aWR0aDogNzAwcHg7XG59XG4ubGVmdC1tZW51IHtcblx0d2lkdGg6IDIwMHB4O1xuXHRoZWlnaHQ6IDUwMHB4O1xufVxuXG4uaW5saW5le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xufVxuXG5ib2R5IHtiYWNrZ3JvdW5kOiAjZTBlM2VjIHJlcGVhdCB0b3AgbGVmdDt9XG4uYWMtY29udGFpbmVye1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDMwcHggYXV0bztcbn1cblxuLmFjLWNvbnRhaW5lciAuYWMtbGFiZWwsIC5hYy1saXN0IGRpdiB7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzc3NztcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMSUsICNlYWVhZWEgMTAwJSk7XG4gICAgLypiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDElLCNmZmZmZmYpLCBjb2xvci1zdG9wKDEwMCUsI2VhZWFlYSkpO1xuICAgICovYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDElLCNlYWVhZWEgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAxJSwjZWFlYWVhIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDElLCNlYWVhZWEgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2VhZWFlYScsR3JhZGllbnRUeXBlPTAgKTtcbiAgICAvKmJveC1zaGFkb3c6IFxuICAgICAgICAwcHggMHB4IDBweCAxcHggcmdiYSgxNTUsMTU1LDE1NSwwLjMpLCBcbiAgICAgICAgMXB4IDBweCAwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC45KSBpbnNldCwgXG4gICAgICAgIDBweCAycHggMnB4IHJnYmEoMCwwLDAsMC4xKTsqL1xufVxuXG4uYWMtY29udGFpbmVyIC5hYy1sYWJlbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4vKi5hYy1jb250YWluZXIgLmFjLWNoZWNrYm94OmNoZWNrZWQgKyAuYWMtbGFiZWwge1xuICAgIGJhY2tncm91bmQ6ICNjNmUxZWM7XG4gICAgY29sb3I6ICMzZDc0ODk7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsIDAuNik7XG4gICAgYm94LXNoYWRvdzogXG4gICAgICAgIDBweCAwcHggMHB4IDFweCByZ2JhKDE1NSwxNTUsMTU1LDAuMyksIFxuICAgICAgICAwcHggMnB4IDJweCByZ2JhKDAsMCwwLDAuMSk7XG59Ki9cblxuLmFjLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkICsgbGFiZWwsXG4uYWMtY29udGFpbmVyIGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjYzZlMWVjO1xuICAgIGNvbG9yOiAjM2Q3NDg5O1xuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LCAwLjYpO1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAwcHggMHB4IDBweCAxcHggcmdiYSgxNTUsMTU1LDE1NSwwLjMpLCBcbiAgICAgICAgMHB4IDJweCAycHggcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4uYWMtY29udGFpbmVyIC5hYy1sYWJlbDpob3ZlcjphZnRlcixcbi5hYy1jb250YWluZXIgLmFjLWNoZWNrYm94OmNoZWNrZWQgKyAuYWMtbGFiZWw6aG92ZXI6YWZ0ZXJ7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICByaWdodDogMTNweDtcbiAgICB0b3A6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk4LCAyMjUsIDIzNik7XG59XG5cbi5hYy1jb250YWluZXIgLmFjLWNoZWNrYm94OmNoZWNrZWQgKyAuYWMtbGFiZWw6aG92ZXI6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDIyNSwgMjM2KTtcbn1cblxuLmFjLWNvbnRhaW5lciAuYWMtY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hYy1jb250YWluZXIgYXJ0aWNsZXtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuNnMgbGluZWFyO1xuICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC42cyBsaW5lYXI7XG4gICAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC42cyBsaW5lYXI7XG4gICAgLW1zLXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuNnMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuNnMgbGluZWFyO1xufVxuLmFjLWNoZWNrYm94OmNoZWNrZWQgfiBhcnRpY2xlIHtcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjZzIGxpbmVhcjtcbiAgICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuNnMgbGluZWFyO1xuICAgIC1vLXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuNnMgbGluZWFyO1xuICAgIC1tcy10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjZzIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjZzIGxpbmVhcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggcmdiYSgxNTUsMTU1LDE1NSwwLjMpO1xuICAgIG1pbi1oZWlnaHQ6IDE0MHB4Oy8qY2hhbmdlIHRoaXMhKi9cbn1cblxuLmFjLWNvbnRhaW5lciBhcnRpY2xlIHB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG59XG5cbi5hYy1jaGVja2JveDpjaGVja2VkIH4gLnN0ZXJlbyB7XG4gICAgbWluLWhlaWdodDogOTBweDtcbn1cblxuLnN0ZXJlb19fbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCBOYXJyb3cnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjA7XG4gICAgbWluLWhlaWdodDogOTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDElLCAjZWFlYWVhIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAxJSwjZWFlYWVhIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMSUsI2VhZWFlYSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAxJSwjZWFlYWVhIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNlYWVhZWEnLEdyYWRpZW50VHlwZT0wICk7XG59XG5cbi5zdGVyZW9fX2J0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3RlcmVvX19lbDpob3ZlciwgLnN0ZXJlb19fZWw6Y2hlY2tlZCwgLnN0ZXJlb19fZWw6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTgsIDIyNSwgMjM2KTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inline\">\n    <div class=\"left-menu\">\n        <section class=\"ac-container\">\n            <div>\n                <input class=\"ac-checkbox\" id=\"ac-1\" name=\"accordion-1\" type=\"radio\" value=\"1\"\n                    [(ngModel)]=\"numShowCanvas\" />\n                <label class=\"ac-label\" for=\"ac-1\">Тригонометрия</label>\n                <article class=\"ac-list\">\n                    <div>\n                        <label><input type=\"checkbox\" (change)=\"changeSin()\">Sin<Br></label>\n                        <label><input type=\"checkbox\" (change)=\"changeCos()\">Cos<Br></label>\n                        <label><input type=\"checkbox\" (change)=\"changeTan()\">Tan<Br></label>\n                        <label><input type=\"checkbox\" (change)=\"changeCtan()\">Ctan<Br></label>\n                    </div>\n                </article>\n            </div>\n            <div>\n                <input class=\"ac-checkbox\" id=\"ac-2\" name=\"accordion-1\" type=\"radio\" value=\"2\"\n                    [(ngModel)]=\"numShowCanvas\" />\n                <label class=\"ac-label\" for=\"ac-2\">Начала анализа</label>\n            </div>\n            <div>\n                <input class=\"ac-checkbox\" id=\"ac-4\" name=\"accordion-1\" type=\"radio\" value=\"4\"\n                    [(ngModel)]=\"numShowCanvas\" />\n                <label class=\"ac-label\" for=\"ac-4\">Стереометрия</label>\n                <article class=\"stereo\">\n                    <ul class=\"stereo__list\">\n                        <li class=\"stereo__el\">\n                            <button class=\"stereo__btn\" (click)=\"chooseCube()\">Куб</button>\n                        </li>\n                        <li class=\"stereo__el\">\n                            <button class=\"stereo__btn\" (click)=\"chooseTetrahedron()\">Тетраэдр</button>\n                        </li>\n                    </ul>\n                </article>\n            </div>\n        </section>\n    </div>\n    <div [ngSwitch]=\"numShowCanvas\">\n        <app-canvas #appcanvas *ngSwitchCase=\"1\"></app-canvas>\n        <app-canvas-beginning-analysis *ngSwitchCase=\"2\"></app-canvas-beginning-analysis>\n        <app-canvas-tetrahedron *ngSwitchCase=\"3\"></app-canvas-tetrahedron>\n        <app-canvas-cube *ngSwitchCase=\"4\"></app-canvas-cube>\n        <label *ngSwitchDefault> </label>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _canvas_trig_canvas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas-trig/canvas.component */ "./src/app/canvas-trig/canvas.component.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mathvisualapp';
        this.numShowCanvas = '1';
        this.partTrig = [false, false, false, false];
    }
    AppComponent.prototype.chooseCube = function () {
        this.numShowCanvas = '4';
    };
    AppComponent.prototype.chooseTetrahedron = function () {
        this.numShowCanvas = '3';
    };
    AppComponent.prototype.changeSin = function () {
        this.partTrig[0] = !this.partTrig[0];
        if (this.partTrig[0]) {
            this.trigRef.showSin();
        }
        else {
            this.trigRef.hideSin();
        }
    };
    AppComponent.prototype.changeCos = function () {
        this.partTrig[1] = !this.partTrig[1];
        if (this.partTrig[1]) {
            this.trigRef.showCos();
        }
        else {
            this.trigRef.hideCos();
        }
    };
    AppComponent.prototype.changeTan = function () {
        this.partTrig[2] = !this.partTrig[2];
        if (this.partTrig[2]) {
            this.trigRef.showTg();
        }
        else {
            this.trigRef.hideTg();
        }
    };
    AppComponent.prototype.changeCtan = function () {
        this.partTrig[3] = !this.partTrig[3];
        if (this.partTrig[3]) {
            this.trigRef.showCtg();
        }
        else {
            this.trigRef.hideCtg();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appcanvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _canvas_trig_canvas_component__WEBPACK_IMPORTED_MODULE_2__["CanvasTrigComponent"])
    ], AppComponent.prototype, "trigRef", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _canvas_trig_canvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./canvas-trig/canvas.component */ "./src/app/canvas-trig/canvas.component.ts");
/* harmony import */ var _canvas_beginning_analysis_canvas_beginning_analysis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas-beginning-analysis/canvas-beginning-analysis.component */ "./src/app/canvas-beginning-analysis/canvas-beginning-analysis.component.ts");
/* harmony import */ var _canvas_cube_canvas_cube_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./canvas-cube/canvas-cube.component */ "./src/app/canvas-cube/canvas-cube.component.ts");
/* harmony import */ var _canvas_tetrahedron_canvas_tetrahedron_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./canvas-tetrahedron/canvas-tetrahedron.component */ "./src/app/canvas-tetrahedron/canvas-tetrahedron.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _canvas_trig_canvas_component__WEBPACK_IMPORTED_MODULE_5__["CanvasTrigComponent"],
                _canvas_beginning_analysis_canvas_beginning_analysis_component__WEBPACK_IMPORTED_MODULE_6__["CanvasBeginningAnalysisComponent"],
                _canvas_cube_canvas_cube_component__WEBPACK_IMPORTED_MODULE_7__["CanvasCubeComponent"],
                _canvas_tetrahedron_canvas_tetrahedron_component__WEBPACK_IMPORTED_MODULE_8__["CanvasTetrahedronComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/canvas-beginning-analysis/canvas-beginning-analysis.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/canvas-beginning-analysis/canvas-beginning-analysis.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#canvas {\n    width: 500px;\n    height: 300px;\n}\n\n.anal__wrapper {\n    width: 700px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.ref {\n    width: 200px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.anal__label {\n    width: 700px;\n    margin-bottom: 10px;\n    line-height: 28px;\n}\n\n.anal__der {\n    display: block;\n}\n\n.ref__caption {\n    font-weight: 400;\n    color: #777;\n    font-size: 19px;\n    font-family: 'Arial Narrow', Arial, sans-serif;\n}\n\n.ref__el {\n    width: 180px;\n    padding-left: 15px;\n    margin-bottom: 10px;\n    letter-spacing: 1px;\n}\n\n.anal__input--borders {\n    width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzLWJlZ2lubmluZy1hbmFseXNpcy9jYW52YXMtYmVnaW5uaW5nLWFuYWx5c2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy1iZWdpbm5pbmctYW5hbHlzaXMvY2FudmFzLWJlZ2lubmluZy1hbmFseXNpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhbnZhcyB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cbi5hbmFsX193cmFwcGVyIHtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yZWYge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmFuYWxfX2xhYmVsIHtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuLmFuYWxfX2RlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yZWZfX2NhcHRpb24ge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5yZWZfX2VsIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmFuYWxfX2lucHV0LS1ib3JkZXJzIHtcbiAgICB3aWR0aDogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/canvas-beginning-analysis/canvas-beginning-analysis.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/canvas-beginning-analysis/canvas-beginning-analysis.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"anal__wrapper\">\n    <div id=\"canvas\" #canvas (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\"\n        (mousemove)=\"onMouseMove($event)\"></div>\n    <ul class=\"ref\">\n        <li>\n            <h3 class=\"ref__caption\">Формы записи чисел, действий и функций</h3>\n        </li>\n        <li class=\"ref__el\" title=\"Числа\">\n            <span>2, 3.14, 1.4e3, 22e-3</span>\n        </li>\n        <li class=\"ref__el\" title=\"Элементарные математические действия\">\n            <span>+ , - , * , / </span>\n        </li>\n        <li class=\"ref__el\" title=\"Функция возведения в квадрат, либо в другую степень\">\n            <span>sqrt(x), ^</span>\n        </li>\n        <li class=\"ref__el\" title=\"Тригонометрические функции\">\n            <span>sin(x), cos(x), </span>\n        </li>\n        <li class=\"ref__el\" title=\"Градусы\">\n            <span>45 deg</span>\n        </li>\n        <li class=\"ref__el\" title=\"Логарифмы\">\n            <span>log(x, 2), log(e)</span>\n        </li>\n        <li class=\"ref__el\" title=\"Используемые константы\">\n            <span>pi, e</span>\n        </li>\n    </ul>\n    <label class=\"anal__label\">\n        f(x) = <input class=\"anal__input\" type=\"text\" [(ngModel)]=\"expression\"\n            (ngModelChange)=\"saverange()\" />\n\n        <span class=\"anal__der\">f'(x) = {{derivateFunction}}</span>\n        <span class=\"anal__der\">f'({{pos_on_OX}}) = tg({{angle}}) = {{dF_in_dot}}</span>\n    </label>\n    <label class=\"anal__label\" title=\"Границы по оси Х\">\n        Область определения функции <br> от\n        <input class=\"anal__input anal__input--borders\" type=\"text\" [(ngModel)]=\"OXl\"\n        (ngModelChange)=\"saveOXl()\">\n        до\n        <input class=\"anal__input anal__input--borders\" type=\"text\" [(ngModel)]=\"OXr\"\n        (ngModelChange)=\"saveOXr()\">\n    </label>"

/***/ }),

/***/ "./src/app/canvas-beginning-analysis/canvas-beginning-analysis.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/canvas-beginning-analysis/canvas-beginning-analysis.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CanvasBeginningAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasBeginningAnalysisComponent", function() { return CanvasBeginningAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mathjs */ "./node_modules/mathjs/index.js");
/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mathjs__WEBPACK_IMPORTED_MODULE_3__);




var CanvasBeginningAnalysisComponent = /** @class */ (function () {
    function CanvasBeginningAnalysisComponent() {
        this.scaleConst = 1.2;
        this.near_plane = 99;
        this.far_plane = 100;
        this.OXl = "-24";
        this.OXr = "21";
        this.render = this.render.bind(this);
    }
    Object.defineProperty(CanvasBeginningAnalysisComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CanvasBeginningAnalysisComponent.prototype.createScene = function () {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xffffff);
        this.y_asix(this.scene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -13, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 15, 0));
        this.x_asix(this.scene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-25, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](25, 0, 0));
        this.saverange();
        this.scene.add(this.line);
    };
    CanvasBeginningAnalysisComponent.prototype.saverange = function () {
        if (this.renderer === undefined) {
            return;
        }
        this.scene.remove(this.line);
        this.parser = mathjs__WEBPACK_IMPORTED_MODULE_3__["parser"]();
        try {
            this.parser.eval('f(x)=' + this.expression);
        }
        catch (e) {
            e.printStackTrace();
        }
        this.updateGrafic();
        this.derivateFunction = mathjs__WEBPACK_IMPORTED_MODULE_3__["derivative"](this.expression, 'x');
    };
    CanvasBeginningAnalysisComponent.prototype.updateGrafic = function () {
        var graph1 = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        var arrY = [];
        var xl = parseFloat(this.OXl), xr = parseFloat(this.OXr);
        for (var i = xl; i < xr; i++) {
            if (i % 3 == 0) {
                this.addText(this.scene, i.toString(), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](i, -2, 0));
                this.addHatch(this.scene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](i, 0.5, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](i, -0.5, 0));
            }
            graph1.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](i, this.getY(i), 0));
            arrY.push(this.getY(i));
        }
        for (var i = -10; i < 12; i += 2) {
            this.addText(this.scene, i.toString(), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](1, i, 0));
            this.addHatch(this.scene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0.5, i, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-0.5, i, 0));
        }
        this.OYu = Math.max.apply(Math, arrY);
        this.OYd = Math.min.apply(Math, arrY);
        this.graph = graph1;
        this.camera.left = -xl - 5;
        this.camera.right = xr + 5;
        this.camera.top = this.OYu + 5;
        this.camera.bottom = this.OYd - 5;
        /*this.camera.position.x = (xl + xr) / 2;
        this.camera.position.y = (this.OYd + this.OYu) / 2;
        this.camera.position.z = Math.max(this.far_plane / 28 * (this.OYu - this.OYd));
        //this.camera.lookAt(new THREE.Vector3((xl + xr) / 2, (this.OYd + this.OYu) / 2, 0));*/
        this.camera.updateMatrixWorld(true);
        this.line = new three__WEBPACK_IMPORTED_MODULE_2__["Line"](this.graph, new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x20B2AA, linewidth: 2.5 }));
        this.scene.add(this.line);
        this.render();
    };
    CanvasBeginningAnalysisComponent.prototype.saveOXl = function () {
        var xl = parseFloat(this.OXl), xr = parseFloat(this.OXr);
        if (xl > xr) {
            this.OXl = (xr - 1).toString();
        }
        this.updateGrafic();
    };
    CanvasBeginningAnalysisComponent.prototype.saveOXr = function () {
        var xl = parseFloat(this.OXl), xr = parseFloat(this.OXr);
        if (xl > xr) {
            this.OXr = (xl + 1).toString();
        }
        this.updateGrafic();
    };
    CanvasBeginningAnalysisComponent.prototype.getY = function (x) {
        return this.parser.eval('f(' + x + ')');
    };
    CanvasBeginningAnalysisComponent.prototype.createLight = function () {
        var light = new three__WEBPACK_IMPORTED_MODULE_2__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, 100);
        this.scene.add(light);
    };
    CanvasBeginningAnalysisComponent.prototype.createCamera = function () {
        var aspectRatio = this.getAspectRatio();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["OrthographicCamera"](-30, 30, 20, -20, this.near_plane, this.far_plane);
        this.camera.position.set(0, 0, this.far_plane);
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
    };
    CanvasBeginningAnalysisComponent.prototype.getAspectRatio = function () {
        var height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    };
    CanvasBeginningAnalysisComponent.prototype.startRendering = function () {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"](); /*{
            canvas: this.canvas,
            antialias: true
        });*/
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_2__["PCFSoftShadowMap"];
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;
        var component = this;
        (function render() {
            //requestAnimationFrame(render);
            component.render();
        }());
    };
    CanvasBeginningAnalysisComponent.prototype.render = function () {
        this.renderer.render(this.scene, this.camera);
    };
    CanvasBeginningAnalysisComponent.prototype.onMouseDown = function (event) {
        event.preventDefault();
        var pos = this.worldToCanvas(new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](event.clientX, event.clientY));
        var EPS = 2;
        console.log(Math.abs(pos.y - this.getY(pos.x)));
        if (this.pointer != undefined) {
            this.mouseOnLastPosPointer = false;
            this.scene.remove(this.pointer);
            this.scene.remove(this.lineD);
        }
        if (Math.abs(pos.y - this.getY(pos.x)) <= EPS) {
            console.log("Ok");
            this.mouseOnLastPosPointer = true;
            var mini_radius = 0.8;
            var color_mini_circle = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x000090 });
            var segments = 240;
            this.pointer = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["CircleBufferGeometry"](mini_radius, segments), color_mini_circle);
            this.pointer.position.x = pos.x;
            this.pointer.position.y = this.getY(pos.x);
            this.scene.add(this.pointer);
            this.lineD = this.drawDerivative(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](pos.x - EPS / 4, this.getY(pos.x - EPS / 4), 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](pos.x + EPS / 4, this.getY(pos.x + EPS / 4), 0));
            this.scene.add(this.lineD);
            this.render();
        }
    };
    CanvasBeginningAnalysisComponent.prototype.onMouseMove = function (event) {
        if (this.mouseOnLastPosPointer) {
            var EPS = 2;
            var pos = this.worldToCanvas(new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](event.clientX, event.clientY));
            this.pointer.position.x = pos.x;
            this.pointer.position.y = this.getY(pos.x);
            this.scene.remove(this.lineD);
            this.pos_on_OX = pos.x.toFixed(3);
            this.lineD = this.drawDerivative(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](pos.x - EPS / 4, this.getY(pos.x - EPS / 4), 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](pos.x + EPS / 4, this.getY(pos.x + EPS / 4), 0));
            this.scene.add(this.lineD);
            this.render();
        }
    };
    CanvasBeginningAnalysisComponent.prototype.onMouseUp = function (event) {
        this.mouseOnLastPosPointer = false;
    };
    /*y1 = k*x1 + b
    y = k*x + b
    
    y1 - y = k*(x1 - x)
    k = (y1 - y) / (x1 - x)
    b = y - k*x
    */
    CanvasBeginningAnalysisComponent.prototype.drawDerivative = function (dot, dot1) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        var black_material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00000 });
        var k = (dot1.y - dot.y) / (dot1.x - dot.x);
        this.dF_in_dot = k.toFixed(3);
        this.angle = Math.atan(k).toFixed(3);
        var b = dot.y - k * dot.x;
        var x = dot.x - 5;
        y.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](x, x * k + b, 0));
        x = dot.x + 5;
        y.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](x, x * k + b, 0));
        return new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material);
    };
    CanvasBeginningAnalysisComponent.prototype.ngAfterViewInit = function () {
        this.createScene();
        this.createLight();
        this.createCamera();
        this.startRendering();
        this.scene.scale.set(this.scaleConst, this.scaleConst, this.scaleConst);
        this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
        this.render();
    };
    CanvasBeginningAnalysisComponent.prototype.x_asix = function (localScene, fromDot, toDot) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        var black_material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00000 });
        y.vertices.push(fromDot);
        y.vertices.push(toDot);
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x - 2, toDot.y + 1, 0));
        y.vertices.push(toDot);
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(toDot);
        y.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x - 2, toDot.y - 1, 0));
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        this.addText(localScene, 'x', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x, toDot.y - 2, toDot.z));
        return localScene;
    };
    CanvasBeginningAnalysisComponent.prototype.y_asix = function (localScene, fromDot, toDot) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        var black_material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00000 });
        y.vertices.push(fromDot);
        y.vertices.push(toDot);
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x + 1, toDot.y - 2, 0));
        y.vertices.push(toDot);
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(toDot);
        y.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x - 1, toDot.y - 2, 0));
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        this.addText(localScene, 'y', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x + 2, toDot.y, toDot.z));
        return localScene;
    };
    CanvasBeginningAnalysisComponent.prototype.worldToCanvas = function (input) {
        var vec = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](); // create once and reuse
        var pos = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](); // create once and reuse
        vec.set(((input.x - this.canvas.offsetLeft) / this.canvas.clientWidth) * 2 - 1, -((input.y - this.canvas.offsetTop) / this.canvas.clientHeight) * 2 + 1, 1);
        vec.unproject(this.camera);
        vec.sub(this.camera.position).normalize();
        var distance = -this.camera.position.z / vec.z;
        pos.copy(this.camera.position).add(vec.multiplyScalar(distance));
        return pos.divide(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.scaleConst, this.scaleConst, this.scaleConst));
    };
    CanvasBeginningAnalysisComponent.prototype.addText = function (localScene, text, pos) {
        var component = this;
        new three__WEBPACK_IMPORTED_MODULE_2__["FontLoader"]().load('assets/font//Roboto_Regular.json', function (_font) {
            var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["TextGeometry"](text, {
                font: Object(_font),
                size: 1,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: false,
                bevelThickness: 1,
                bevelSize: 0.2,
                bevelSegments: 10
            });
            var textMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0x000000 });
            var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, textMaterial);
            localScene.add(m);
            m.position.x = pos.x;
            m.position.y = pos.y;
            m.position.z = pos.z;
            component.render();
        });
    };
    CanvasBeginningAnalysisComponent.prototype.addHatch = function (localScene, one, two) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        var black_material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00000 });
        y.vertices.push(one);
        y.vertices.push(two);
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasBeginningAnalysisComponent.prototype, "canvasRef", void 0);
    CanvasBeginningAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas-beginning-analysis',
            template: __webpack_require__(/*! ./canvas-beginning-analysis.component.html */ "./src/app/canvas-beginning-analysis/canvas-beginning-analysis.component.html"),
            styles: [__webpack_require__(/*! ./canvas-beginning-analysis.component.css */ "./src/app/canvas-beginning-analysis/canvas-beginning-analysis.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CanvasBeginningAnalysisComponent);
    return CanvasBeginningAnalysisComponent;
}());



/***/ }),

/***/ "./src/app/canvas-cube/canvas-cube.component.css":
/*!*******************************************************!*\
  !*** ./src/app/canvas-cube/canvas-cube.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#canvas {\n    width: 700px;\n    height: 550px;\n}\n\nlabel {\n    text-shadow: 1px 1px 1px rgba(255,255,255,0.8);\n    line-height: 33px;\n    font-size: 19px;\n    position: relative;\n    z-index: 20;\n    width: 700;\n}\n\n.help-text-box {\n    max-width: 650;\n    min-width: 400;\n    height: 70px;\n    margin: 10px auto 30px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzLWN1YmUvY2FudmFzLWN1YmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jYW52YXMtY3ViZS9jYW52YXMtY3ViZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhbnZhcyB7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIGhlaWdodDogNTUwcHg7XG59XG5cbmxhYmVsIHtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjA7XG4gICAgd2lkdGg6IDcwMDtcbn1cblxuLmhlbHAtdGV4dC1ib3gge1xuICAgIG1heC13aWR0aDogNjUwO1xuICAgIG1pbi13aWR0aDogNDAwO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0byAzMHB4IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/canvas-cube/canvas-cube.component.html":
/*!********************************************************!*\
  !*** ./src/app/canvas-cube/canvas-cube.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"help-text-box\">\n    <label>{{user_assistance}}</label>\n</div>\n<div id=\"canvas\" #canvas (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\"\n    (mousemove)=\"onMouseMove($event)\" (mouseWheelUp)=\"mouseWheelFunc($event)\" (click)=\"onClick($event)\"></div>"

/***/ }),

/***/ "./src/app/canvas-cube/canvas-cube.component.ts":
/*!******************************************************!*\
  !*** ./src/app/canvas-cube/canvas-cube.component.ts ***!
  \******************************************************/
/*! exports provided: KEY_CODE, CanvasCubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasCubeComponent", function() { return CanvasCubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _cube_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cube.service */ "./src/app/cube.service.ts");




var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
})(KEY_CODE || (KEY_CODE = {}));
var CanvasCubeComponent = /** @class */ (function () {
    function CanvasCubeComponent(cubeService) {
        this.cubeService = cubeService;
        this.near_plane = 1;
        this.far_plane = 10000;
        this.onOffCubes = [];
        this.cube = new three__WEBPACK_IMPORTED_MODULE_2__["Group"]();
        this.cube_line = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
        this.material = {
            back: new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
                color: 0xffffff,
                opacity: 0.5,
                transparent: true
            }),
            front: new three__WEBPACK_IMPORTED_MODULE_2__["MeshLambertMaterial"]({
                color: 0xffffff,
                opacity: 0.3,
                transparent: true
            }),
            black: new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00000 }),
            blue: new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x0000ff }),
            green: new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00ff00 }),
            red: new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0xff0000 }),
            black_dash_line: new three__WEBPACK_IMPORTED_MODULE_2__["LineDashedMaterial"]({ color: 0x000000, dashSize: 3, gapSize: 2 }),
            powder_blue_line: new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0xB0E0E6 }),
            dash: new three__WEBPACK_IMPORTED_MODULE_2__["LineDashedMaterial"]({
                color: 0xffffff,
                linewidth: 1,
                scale: 1,
                dashSize: 3,
                gapSize: 1,
            }),
            dim_gray_line: new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x090909 }),
            black_line: new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x000000 }),
            section: new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x90EE90,
                side: three__WEBPACK_IMPORTED_MODULE_2__["DoubleSide"] })
        };
        this.isMouseDown = false;
        this.radious = 270;
        this.theta = 45;
        this.onMouseDownTheta = 45;
        this.phi = 60;
        this.onMouseDownPhi = 60;
        this.onMouseDownPosition = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
        this.onMouseLastPosition = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"]();
        this.mouseWheelUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.section = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
        this.numDrawedStep = -1;
        this.user_assistance = 'Отметьте три точки на ребрах куба, не больше двух точек на одном ребре.';
        this.render = this.render.bind(this);
    }
    Object.defineProperty(CanvasCubeComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CanvasCubeComponent.prototype.getAspectRatio = function (w, h) {
        if (h === 0) {
            return 0;
        }
        return w / h;
    };
    CanvasCubeComponent.prototype.startRendering = function (w, h) {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]();
        this.renderer.setSize(w, h);
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;
        this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](50, this.getAspectRatio(w, h), this.near_plane, this.far_plane);
        this.camera.position.set(100, 134, 210);
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xffffff);
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0x555555));
    };
    CanvasCubeComponent.prototype.render = function () {
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        this.renderer.render(this.scene, this.camera);
    };
    CanvasCubeComponent.prototype.ngAfterViewInit = function () {
        this.startRendering(this.canvas.clientWidth, this.canvas.clientHeight);
        this.initilaze();
        this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
        this.render();
    };
    CanvasCubeComponent.prototype.setPosition = function (a, b) {
        a.position.x = b.x;
        a.position.y = b.y;
        a.position.z = b.z;
        return a;
    };
    CanvasCubeComponent.prototype.y_asix = function (fromDot, toDot, material) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(fromDot);
        y.vertices.push(toDot);
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, material));
        var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["ConeGeometry"](1, 7, 16), material);
        m.position.x = toDot.x;
        m.rotation.z = -Math.PI / 2;
        this.scene.add(m);
    };
    CanvasCubeComponent.prototype.z_asix = function (fromDot, toDot, material) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(fromDot);
        y.vertices.push(toDot);
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, material));
        var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["ConeGeometry"](1, 7, 16), material);
        m.position.y = toDot.y;
        this.scene.add(m);
    };
    CanvasCubeComponent.prototype.x_asix = function (fromDot, toDot, material) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(fromDot);
        y.vertices.push(toDot);
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, material));
        var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["ConeGeometry"](1, 7, 16), material);
        m.position.z = toDot.z;
        m.rotation.x = Math.PI / 2;
        this.scene.add(m);
    };
    CanvasCubeComponent.prototype.generateText = function (arr) {
        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"](), new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0xfffffff }));
        this.scene.add(mesh);
        var loader = new three__WEBPACK_IMPORTED_MODULE_2__["FontLoader"]();
        var component = this;
        loader.load('assets/font/Roboto_Regular.json', function (_font) {
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var el = arr_1[_i];
                var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["TextGeometry"](el.text, {
                    font: Object(_font),
                    size: 5,
                    height: 0.1,
                    curveSegments: 12,
                    bevelEnabled: false,
                    bevelThickness: 1,
                    bevelSize: 0.2,
                    bevelSegments: 10
                });
                var textMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0xff0000 });
                var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, textMaterial);
                component.scene.add(m);
                m = component.setPosition(m, el.position);
                m.rotation.y = Math.PI / 4;
                component.render();
            }
        });
    };
    CanvasCubeComponent.prototype.drawLineOnGroup = function (v1, v2) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(v1);
        y.vertices.push(v2);
        var material = new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x090909, linewidth: 2, side: three__WEBPACK_IMPORTED_MODULE_2__["DoubleSide"] });
        material.polygonOffset = true;
        material.polygonOffsetFactor = -0.1;
        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, material);
        this.cube_line.add(mesh);
    };
    CanvasCubeComponent.prototype.initilaze = function () {
        this.material.section.polygonOffset = true;
        this.material.section.polygonOffsetFactor = -0.1;
        this.material.dim_gray_line.polygonOffset = true;
        this.material.dim_gray_line.polygonOffsetFactor = -0.1;
        /*this.material.black.side = THREE.BackSide;
        this.material.front.side = THREE.FrontSide;*/
        this.scene.add(this.cube);
        this.y_asix(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-this.cubeService.side, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.cubeService.side, 0, 0), this.material.blue);
        this.z_asix(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -this.cubeService.side, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, this.cubeService.side, 0), this.material.red);
        this.x_asix(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, -this.cubeService.side), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, this.cubeService.side), this.material.green);
        this.generateText([{ text: 'x', position: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -5, 99) },
            { text: 'y', position: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](99, -5, 0) },
            { text: 'z', position: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](5, 99, 0) }]);
        //рисуем куб
        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](this.cubeService.side, this.cubeService.side, this.cubeService.side), this.material.front);
        this.cube.add(mesh);
        mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](this.cubeService.side, this.cubeService.side, this.cubeService.side), this.material.front);
        this.cube.add(mesh);
        this.scene.add(this.cube_line);
        for (var _i = 0, _a = this.cubeService.edges; _i < _a.length; _i++) {
            var edge = _a[_i];
            this.drawLineOnGroup(edge.vert1, edge.vert2);
        }
        this.onOffCubes.push(this.cube_line);
        this.helper = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"](2, 240), new three__WEBPACK_IMPORTED_MODULE_2__["MeshNormalMaterial"]());
        this.scene.add(this.helper);
        this.render();
        this.ray = new three__WEBPACK_IMPORTED_MODULE_2__["Ray"](this.camera.position, null);
        this.scene.add(this.section);
    };
    /* EVENTS */
    CanvasCubeComponent.prototype.onMouseDown = function (event) {
        event.preventDefault();
        this.isMouseDown = true;
        this.onMouseDownTheta = this.theta;
        this.onMouseDownPhi = this.phi;
        this.onMouseDownPosition.x = this.onMouseLastPosition.x = event.pageX - this.canvas.offsetLeft;
        this.onMouseDownPosition.y = this.onMouseLastPosition.y = event.pageY - this.canvas.offsetTop;
    };
    CanvasCubeComponent.prototype.onMouseMove = function (event) {
        event.preventDefault();
        var clientX = event.pageX - this.canvas.offsetLeft;
        var clientY = event.pageY - this.canvas.offsetTop;
        var mouse = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
        mouse.x = ((clientX) / this.canvas.clientWidth) * 2 - 1;
        mouse.y = -((clientY) / this.canvas.clientHeight) * 2 + 1;
        this.raycaster.setFromCamera(mouse, this.camera);
        var intersects = this.raycaster.intersectObjects(this.onOffCubes, true);
        if (intersects.length > 0) {
            //this.helper.position.set(0, 0, 0);
            this.helper.position.copy(intersects[0].point);
        }
        if (this.isMouseDown) {
            this.theta = -((clientX - this.onMouseDownPosition.x) * 0.3)
                + this.onMouseDownTheta;
            this.phi = ((clientY - this.onMouseDownPosition.y) * 0.3)
                + this.onMouseDownPhi;
            this.phi = Math.min(180, Math.max(0, this.phi));
            this.camera.position.x = this.radious * Math.sin(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
            this.camera.position.y = this.radious * Math.sin(this.phi * Math.PI / 360);
            this.camera.position.z = this.radious * Math.cos(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
            this.onMouseLastPosition.x = clientX;
            this.onMouseLastPosition.y = clientY;
        }
        this.render();
    };
    CanvasCubeComponent.prototype.onMouseUp = function (event) {
        event.preventDefault();
        var clientX = event.pageX - this.canvas.offsetLeft;
        var clientY = event.pageY - this.canvas.offsetTop;
        this.isMouseDown = false;
        this.onMouseDownPosition.x = clientX - this.onMouseDownPosition.x;
        this.onMouseDownPosition.y = clientY - this.onMouseDownPosition.y;
        if (this.onMouseDownPosition.length() > 5) {
            return;
        }
        this.render();
    };
    CanvasCubeComponent.prototype.onMouseWheel = function (event) {
        this.mouseWheelFunc(event);
    };
    CanvasCubeComponent.prototype.onMouseWheelChrome = function (event) {
        this.mouseWheelFunc(event);
    };
    CanvasCubeComponent.prototype.onMouseWheelFirefox = function (event) {
        this.mouseWheelFunc(event);
    };
    CanvasCubeComponent.prototype.onMouseWheelIE = function (event) {
        this.mouseWheelFunc(event);
    };
    CanvasCubeComponent.prototype.onMouseWheelFirefoxOld = function (event) {
        this.mouseWheelFunc(event);
    };
    CanvasCubeComponent.prototype.mouseWheelFunc = function (event) {
        var event = window.event || event; // old IE support
        var delta = Math.max(-15, Math.min(15, (event.wheelDelta * 7
            || event.wheelDeltaY || -event.deltaY * 4)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.onWheel(delta);
    };
    CanvasCubeComponent.prototype.onWheel = function (wheelDeltaY) {
        this.radious -= wheelDeltaY * 0.4;
        this.radious = Math.min(Math.max(this.radious, 60), 500);
        this.camera.position.x = this.radious * Math.sin(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
        this.camera.position.y = this.radious * Math.sin(this.phi * Math.PI / 360);
        this.camera.position.z = this.radious * Math.cos(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
        this.camera.updateMatrix();
        this.render();
    };
    CanvasCubeComponent.prototype.onClick = function (event) {
        var _a;
        event.preventDefault();
        var mouse = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
        var clientX = event.pageX - this.canvas.offsetLeft;
        var clientY = event.pageY - this.canvas.offsetTop;
        mouse.x = ((clientX) / this.canvas.clientWidth) * 2 - 1;
        mouse.y = -((clientY) / this.canvas.clientHeight) * 2 + 1;
        this.raycaster.setFromCamera(mouse, this.camera);
        var intersects = this.raycaster.intersectObjects(this.onOffCubes, true);
        //если точка на ребрах - то она добавляется в стек
        if (intersects.length > 0) {
            var p = intersects[0].point;
            var hel = this.drawBaseDot();
            hel = this.setPosition(hel, p);
            if (this.cubeService.drawed) {
                this.clearSelection();
                this.cubeService.drawed = false;
            }
            this.cubeService.queue.push(hel.position);
            this.section.add(hel);
        }
        var plane = this.cubeService.canBuildPlane();
        if (plane === _cube_service__WEBPACK_IMPORTED_MODULE_3__["WAY"].Clear) {
            this.user_assistance = 'Все три точки находятся на одной прямой. Отметьте третью точку на другом ребре.';
            this.clearSelection();
            return;
        }
        if (plane === _cube_service__WEBPACK_IMPORTED_MODULE_3__["WAY"].DRAW_SIMPLE || plane === _cube_service__WEBPACK_IMPORTED_MODULE_3__["WAY"].DRAW_HARD) {
            /*
            проверка на принадлежность одной прямой:
            */
            if (plane === _cube_service__WEBPACK_IMPORTED_MODULE_3__["WAY"].DRAW_SIMPLE) {
                var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
                for (var _i = 0, _b = this.cubeService.arr; _i < _b.length; _i++) {
                    var dot = _b[_i];
                    if (this.cubeService.onEdgeCube(dot)) {
                        geometry.vertices.push(dot);
                    }
                }
                geometry.faces = this.combinations(geometry.vertices.length);
                geometry.computeBoundingSphere();
                var mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, this.material.section);
                mesh.renderOrder = 3;
                this.section.add(mesh);
                for (var i = 0; i < this.cubeService.arr.length; i++) {
                    var a = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"](0.7, 240), this.material.black);
                    this.section.add(a);
                    a = this.setPosition(a, this.cubeService.arr[i]);
                }
                this.user_assistance = 'Cечение расчитано и построено.';
            }
            else { // hard version
                var _c = this.cubeService.generateExtra(), planToDraw = _c.plan, selectionDots = _c.dots;
                this.listOfScenes = new Array();
                this.numDrawedStep = -1;
                //создаем массив сцен
                for (var _d = 0, planToDraw_1 = planToDraw; _d < planToDraw_1.length; _d++) {
                    var list = planToDraw_1[_d];
                    var nowScene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
                    var dots = new Set();
                    //может быть массив пар вершин, может быть массив вершин (черных и серых)
                    if (list.type === _cube_service__WEBPACK_IMPORTED_MODULE_3__["TYPE"].PLANE) {
                        dots = new Set(list.black);
                        this.drawLines(nowScene, list.black);
                        for (var _e = 0, _f = list.gray; _e < _f.length; _e++) {
                            var part = _f[_e];
                            var tmp = this.drawLine(nowScene, part[0], part[1], this.material.black_dash_line);
                            tmp.computeLineDistances();
                        }
                    }
                    else if (list.type === _cube_service__WEBPACK_IMPORTED_MODULE_3__["TYPE"].LINES) {
                        for (var _g = 0, list_1 = list; _g < list_1.length; _g++) {
                            var part = list_1[_g];
                            dots.add(part[0]);
                            dots.add(part[1]);
                            this.drawLine(nowScene, part[0], part[1], this.material.dim_gray_line);
                        }
                    }
                    else if (list.type === _cube_service__WEBPACK_IMPORTED_MODULE_3__["TYPE"].LINE) {
                        dots.add(list[0]);
                        dots.add(list[1]);
                        this.drawLine(nowScene, list[0], list[1], this.material.dim_gray_line);
                    }
                    this.drawDots(nowScene, dots);
                    nowScene.visible = false;
                    this.listOfScenes.push(nowScene);
                    this.section.add(this.listOfScenes[this.listOfScenes.length - 1]);
                }
                //последняя сцена: отрисовка сечения}
                var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
                (_a = geometry.vertices).push.apply(_a, selectionDots);
                geometry.faces = this.combinations(geometry.vertices.length);
                geometry.computeBoundingSphere();
                this.listOfScenes.push((new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]()).add(new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, this.material.section)));
                this.section.add(this.listOfScenes[this.listOfScenes.length - 1]);
                this.listOfScenes[this.listOfScenes.length - 1].visible = false;
                this.user_assistance = 'Cечение расчитано, для просмотра этапов построения используйте клавиши клавиатуры:\n → (право), следующий шаг, ← (лево), предыдущий шаг.';
            }
            this.render();
            this.cubeService.queue.shift();
        }
    };
    CanvasCubeComponent.prototype.keyEvent = function (event) {
        if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
            if (this.numDrawedStep < this.listOfScenes.length - 1) {
                this.listOfScenes[++this.numDrawedStep].visible = true;
                this.render();
            }
        }
        if (event.keyCode === KEY_CODE.LEFT_ARROW) {
            if (this.numDrawedStep > -1) {
                this.listOfScenes[this.numDrawedStep--].visible = false;
                this.render();
            }
        }
    };
    CanvasCubeComponent.prototype.drawBaseDot = function () {
        return new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"](1.5, 240), new three__WEBPACK_IMPORTED_MODULE_2__["MeshNormalMaterial"]());
    };
    CanvasCubeComponent.prototype.drawLine = function (_scene, d1, d2, material) {
        var geom = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        geom.vertices.push(d1);
        geom.vertices.push(d2);
        var t = new three__WEBPACK_IMPORTED_MODULE_2__["Line"](geom, material);
        _scene.add(t);
        return t;
    };
    CanvasCubeComponent.prototype.drawLines = function (_scene, dots) {
        for (var i = 1; i < dots.length; i++) {
            var geom = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
            geom.vertices.push(dots[i - 1]);
            geom.vertices.push(dots[i]);
            _scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](geom, this.material.dim_gray_line));
        }
    };
    CanvasCubeComponent.prototype.drawDots = function (_scene, dots) {
        for (var _i = 0, _a = Array.from(dots); _i < _a.length; _i++) {
            var dot = _a[_i];
            var d = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"](0.7, 240), this.material.black);
            _scene.add(d);
            d = this.setPosition(d, dot);
        }
    };
    CanvasCubeComponent.prototype.clearSelection = function () {
        this.scene.remove(this.section);
        this.section = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
        this.scene.add(this.section);
        for (var _i = 0, _a = this.cubeService.queue; _i < _a.length; _i++) {
            var point = _a[_i];
            var h = this.drawBaseDot();
            h = this.setPosition(h, point);
            this.section.add(h);
        }
    };
    CanvasCubeComponent.prototype.combinations = function (n) {
        var a = Array.apply(null, Array(n)).map(function (_, i) { return i; });
        var out = [];
        for (var i = 0; i < n - 1; i++) {
            for (var j = i + 2; j < n; j++) {
                var _x = a.slice(i, i + 2).concat(a[j]);
                out.push(new three__WEBPACK_IMPORTED_MODULE_2__["Face3"](_x[0], _x[1], _x[2]));
            }
        }
        var x = a.slice(-2).concat(a[0]);
        out.push(new three__WEBPACK_IMPORTED_MODULE_2__["Face3"](x[0], x[1], x[2]));
        return out;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasCubeComponent.prototype, "canvasRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasCubeComponent.prototype, "mouseWheelUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('wheel', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasCubeComponent.prototype, "onMouseWheel", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousewheel', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasCubeComponent.prototype, "onMouseWheelChrome", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('DOMMouseScroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasCubeComponent.prototype, "onMouseWheelFirefox", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('onmousewheel', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasCubeComponent.prototype, "onMouseWheelIE", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('MozMousePixelScroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasCubeComponent.prototype, "onMouseWheelFirefoxOld", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasCubeComponent.prototype, "keyEvent", null);
    CanvasCubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas-cube',
            template: __webpack_require__(/*! ./canvas-cube.component.html */ "./src/app/canvas-cube/canvas-cube.component.html"),
            providers: [_cube_service__WEBPACK_IMPORTED_MODULE_3__["CubeService"]],
            styles: [__webpack_require__(/*! ./canvas-cube.component.css */ "./src/app/canvas-cube/canvas-cube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_cube_service__WEBPACK_IMPORTED_MODULE_3__["CubeService"]])
    ], CanvasCubeComponent);
    return CanvasCubeComponent;
}());



/***/ }),

/***/ "./src/app/canvas-tetrahedron/canvas-tetrahedron.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/canvas-tetrahedron/canvas-tetrahedron.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#canvas {\n    width: 700px;\n    height: 550px;\n}\n\nlabel {\n    text-shadow: 1px 1px 1px rgba(255,255,255,0.8);\n    line-height: 33px;\n    font-size: 19px;\n    position: relative;\n    z-index: 20;\n    width: 700;\n}\n\n.help-text-box {\n    max-width: 650;\n    min-width: 400;\n    height: 70px;\n    margin: 10px auto 30px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzLXRldHJhaGVkcm9uL2NhbnZhcy10ZXRyYWhlZHJvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy10ZXRyYWhlZHJvbi9jYW52YXMtdGV0cmFoZWRyb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYW52YXMge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBoZWlnaHQ6IDU1MHB4O1xufVxuXG5sYWJlbCB7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICBsaW5lLWhlaWdodDogMzNweDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDIwO1xuICAgIHdpZHRoOiA3MDA7XG59XG5cbi5oZWxwLXRleHQtYm94IHtcbiAgICBtYXgtd2lkdGg6IDY1MDtcbiAgICBtaW4td2lkdGg6IDQwMDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMzBweCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/canvas-tetrahedron/canvas-tetrahedron.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/canvas-tetrahedron/canvas-tetrahedron.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"help-text-box\">\n  <label id= \"help\">{{user_assistance}}</label>\n</div>\n<div id=\"canvas\" #canvas (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\"\n  (mousemove)=\"onMouseMove($event)\" (mouseWheelUp)=\"mouseWheelFunc($event)\" (click)=\"onClick($event)\"></div>"

/***/ }),

/***/ "./src/app/canvas-tetrahedron/canvas-tetrahedron.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/canvas-tetrahedron/canvas-tetrahedron.component.ts ***!
  \********************************************************************/
/*! exports provided: KEY_CODE, CanvasTetrahedronComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY_CODE", function() { return KEY_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasTetrahedronComponent", function() { return CanvasTetrahedronComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _tetrahedron_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tetrahedron.service */ "./src/app/tetrahedron.service.ts");




var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["RIGHT_ARROW"] = 39] = "RIGHT_ARROW";
    KEY_CODE[KEY_CODE["LEFT_ARROW"] = 37] = "LEFT_ARROW";
})(KEY_CODE || (KEY_CODE = {}));
var CanvasTetrahedronComponent = /** @class */ (function () {
    function CanvasTetrahedronComponent(tetraService) {
        this.tetraService = tetraService;
        this.near_plane = 1;
        this.far_plane = 10000;
        this.onOffForm = [];
        this.cube = new three__WEBPACK_IMPORTED_MODULE_2__["Group"]();
        this.main_group = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
        this.material = {
            black: new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00000 }),
            blue: new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x0000ff }),
            green: new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00ff00 }),
            red: new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0xff0000 }),
            black_dash_line: new three__WEBPACK_IMPORTED_MODULE_2__["LineDashedMaterial"]({ color: 0x000000, dashSize: 3, gapSize: 2 }),
            dim_gray_line: new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x292929 }),
            black_line: new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x000000 }),
            section: new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
                color: 0x90EE90,
                side: three__WEBPACK_IMPORTED_MODULE_2__["DoubleSide"]
            }),
            base: new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({
                color: 0x15628f, emissive: 0x072534, side: three__WEBPACK_IMPORTED_MODULE_2__["DoubleSide"], flatShading: true,
                opacity: 0.7, transparent: true
            }),
            base_line: new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x000000 })
        };
        this.isMouseDown = false;
        this.radious = 270;
        this.theta = 45;
        this.onMouseDownTheta = 45;
        this.phi = 60;
        this.onMouseDownPhi = 60;
        this.onMouseDownPosition = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
        this.onMouseLastPosition = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
        this.raycaster = new three__WEBPACK_IMPORTED_MODULE_2__["Raycaster"]();
        this.mouseWheelUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.section = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
        this.numDrawedStep = -1;
        this.user_assistance = 'Отметьте три точки на гранях тетраэдра, не больше двух точек на одной прямой.';
        this.render = this.render.bind(this);
    }
    Object.defineProperty(CanvasTetrahedronComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CanvasTetrahedronComponent.prototype.getAspectRatio = function (w, h) {
        if (h === 0) {
            return 0;
        }
        return w / h;
    };
    CanvasTetrahedronComponent.prototype.startRendering = function (w, h) {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]();
        this.renderer.setSize(w, h);
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;
        this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](50, this.getAspectRatio(w, h), this.near_plane, this.far_plane);
        this.camera.position.set(100, 134, 210);
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xffffff);
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](0x555555));
    };
    CanvasTetrahedronComponent.prototype.render = function () {
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        this.renderer.render(this.scene, this.camera);
    };
    CanvasTetrahedronComponent.prototype.ngAfterViewInit = function () {
        this.startRendering(this.canvas.clientWidth, this.canvas.clientHeight);
        this.initilaze();
        this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
        this.render();
    };
    CanvasTetrahedronComponent.prototype.setPosition = function (a, b) {
        a.position.x = b.x;
        a.position.y = b.y;
        a.position.z = b.z;
        return a;
    };
    CanvasTetrahedronComponent.prototype.y_asix = function (fromDot, toDot, material) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(fromDot);
        y.vertices.push(toDot);
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, material));
        var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["ConeGeometry"](1, 7, 16), material);
        m.position.x = toDot.x;
        m.rotation.z = -Math.PI / 2;
        this.scene.add(m);
    };
    CanvasTetrahedronComponent.prototype.z_asix = function (fromDot, toDot, material) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(fromDot);
        y.vertices.push(toDot);
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, material));
        var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["ConeGeometry"](1, 7, 16), material);
        m.position.y = toDot.y;
        this.scene.add(m);
    };
    CanvasTetrahedronComponent.prototype.x_asix = function (fromDot, toDot, material) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(fromDot);
        y.vertices.push(toDot);
        this.scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, material));
        var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["ConeGeometry"](1, 7, 16), material);
        m.position.z = toDot.z;
        m.rotation.x = Math.PI / 2;
        this.scene.add(m);
    };
    CanvasTetrahedronComponent.prototype.generateText = function (arr) {
        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"](), new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0xfffffff }));
        this.scene.add(mesh);
        var loader = new three__WEBPACK_IMPORTED_MODULE_2__["FontLoader"]();
        var component = this;
        loader.load('assets/font//Roboto_Regular.json', function (_font) {
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var el = arr_1[_i];
                var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["TextGeometry"](el.text, {
                    font: Object(_font),
                    size: 5,
                    height: 0.1,
                    curveSegments: 12,
                    bevelEnabled: false,
                    bevelThickness: 1,
                    bevelSize: 0.2,
                    bevelSegments: 10
                });
                var textMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0xff0000 });
                var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, textMaterial);
                component.scene.add(m);
                m = component.setPosition(m, el.position);
                m.rotation.y = Math.PI / 4;
                component.render();
            }
        });
    };
    CanvasTetrahedronComponent.prototype.initilaze = function () {
        this.material.section.polygonOffset = true;
        this.material.section.polygonOffsetFactor = -0.1;
        this.material.dim_gray_line.polygonOffset = true;
        this.material.dim_gray_line.polygonOffsetFactor = -0.1;
        /*this.material.black.side = THREE.BackSide;
        this.material.front.side = THREE.FrontSide;*/
        this.scene.add(this.cube);
        this.y_asix(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-this.tetraService.side, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.tetraService.side, 0, 0), this.material.blue);
        this.z_asix(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -this.tetraService.side, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, this.tetraService.side, 0), this.material.red);
        this.x_asix(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, -this.tetraService.side), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, this.tetraService.side), this.material.green);
        this.generateText([{ text: 'x', position: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -5, 99) },
            { text: 'y', position: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](99, -5, 0) },
            { text: 'z', position: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](5, 99, 0) }]);
        this.scene.add(this.main_group);
        //рисуем тетраэдр
        var geom = new three__WEBPACK_IMPORTED_MODULE_2__["PolyhedronBufferGeometry"](this.tetraService.vertices, this.tetraService.indices, Math.sqrt(3) * this.tetraService.a / 3, 0);
        this.main_group.add(new three__WEBPACK_IMPORTED_MODULE_2__["LineSegments"](geom, this.material.base_line));
        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geom, this.material.base);
        mesh.renderOrder = 1;
        this.main_group.add(mesh);
        this.onOffForm.push(this.main_group);
        this.helper = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"](2, 240), new three__WEBPACK_IMPORTED_MODULE_2__["MeshNormalMaterial"]());
        this.scene.add(this.helper);
        this.render();
        this.scene.add(this.section);
    };
    /* EVENTS */
    CanvasTetrahedronComponent.prototype.onMouseDown = function (event) {
        event.preventDefault();
        this.isMouseDown = true;
        this.onMouseDownTheta = this.theta;
        this.onMouseDownPhi = this.phi;
        this.onMouseDownPosition.x = this.onMouseLastPosition.x = event.pageX - this.canvas.offsetLeft;
        this.onMouseDownPosition.y = this.onMouseLastPosition.y = event.pageY - this.canvas.offsetTop;
    };
    CanvasTetrahedronComponent.prototype.onMouseMove = function (event) {
        event.preventDefault();
        var clientX = event.pageX - this.canvas.offsetLeft;
        var clientY = event.pageY - this.canvas.offsetTop;
        var mouse = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
        mouse.x = ((clientX) / this.canvas.clientWidth) * 2 - 1;
        mouse.y = -((clientY) / this.canvas.clientHeight) * 2 + 1;
        this.raycaster.setFromCamera(mouse, this.camera);
        var intersects = this.raycaster.intersectObjects(this.onOffForm, true);
        if (intersects.length > 0) {
            this.helper.position.copy(intersects[0].point);
        }
        if (this.isMouseDown) {
            this.theta = -((clientX - this.onMouseDownPosition.x) * 0.3)
                + this.onMouseDownTheta;
            this.phi = ((clientY - this.onMouseDownPosition.y) * 0.3)
                + this.onMouseDownPhi;
            this.phi = Math.min(180, Math.max(-40, this.phi));
            this.camera.position.x = this.radious * Math.sin(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
            this.camera.position.y = this.radious * Math.sin(this.phi * Math.PI / 360);
            this.camera.position.z = this.radious * Math.cos(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
            this.onMouseLastPosition.x = clientX;
            this.onMouseLastPosition.y = clientY;
        }
        this.render();
    };
    CanvasTetrahedronComponent.prototype.onWindowMouseUp = function (event) {
        this.onMouseUp(event);
    };
    CanvasTetrahedronComponent.prototype.onMouseUp = function (event) {
        event.preventDefault();
        var clientX = event.pageX - this.canvas.offsetLeft;
        var clientY = event.pageY - this.canvas.offsetTop;
        this.isMouseDown = false;
        this.onMouseDownPosition.x = clientX - this.onMouseDownPosition.x;
        this.onMouseDownPosition.y = clientY - this.onMouseDownPosition.y;
        if (this.onMouseDownPosition.length() > 5) {
            return;
        }
        this.render();
    };
    CanvasTetrahedronComponent.prototype.onMouseWheel = function (event) {
        this.mouseWheelFunc(event);
    };
    CanvasTetrahedronComponent.prototype.onMouseWheelChrome = function (event) {
        this.mouseWheelFunc(event);
    };
    CanvasTetrahedronComponent.prototype.onMouseWheelFirefox = function (event) {
        this.mouseWheelFunc(event);
    };
    CanvasTetrahedronComponent.prototype.onMouseWheelIE = function (event) {
        this.mouseWheelFunc(event);
    };
    CanvasTetrahedronComponent.prototype.onMouseWheelFirefoxOld = function (event) {
        this.mouseWheelFunc(event);
    };
    CanvasTetrahedronComponent.prototype.mouseWheelFunc = function (event) {
        var event = window.event || event; // old IE support
        var delta = Math.max(-15, Math.min(15, (event.wheelDelta * 7
            || event.wheelDeltaY || -event.deltaY * 4)));
        if (delta > 0) {
            this.mouseWheelUp.emit(event);
        }
        // for IE
        event.returnValue = false;
        // for Chrome and Firefox
        if (event.preventDefault) {
            event.preventDefault();
        }
        this.onWheel(delta);
    };
    CanvasTetrahedronComponent.prototype.onWheel = function (wheelDeltaY) {
        this.radious -= wheelDeltaY * 0.4;
        this.radious = Math.min(Math.max(this.radious, 60), 500);
        this.camera.position.x = this.radious * Math.sin(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
        this.camera.position.y = this.radious * Math.sin(this.phi * Math.PI / 360);
        this.camera.position.z = this.radious * Math.cos(this.theta * Math.PI / 360) * Math.cos(this.phi * Math.PI / 360);
        this.camera.updateMatrix();
        this.render();
    };
    CanvasTetrahedronComponent.prototype.onClick = function (event) {
        event.preventDefault();
        var mouse = new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"]();
        var clientX = event.pageX - this.canvas.offsetLeft;
        var clientY = event.pageY - this.canvas.offsetTop;
        mouse.x = ((clientX) / this.canvas.clientWidth) * 2 - 1;
        mouse.y = -((clientY) / this.canvas.clientHeight) * 2 + 1;
        this.raycaster.setFromCamera(mouse, this.camera);
        var intersects = this.raycaster.intersectObjects(this.onOffForm, true);
        //если точка на ребразх - то она добавляется в стек
        if (intersects.length > 0) {
            var p = intersects[0].point;
            var hel = this.drawBaseDot();
            hel = this.setPosition(hel, p);
            if (this.tetraService.drawed) {
                this.clearSelection();
                for (var _i = 0, _a = this.tetraService.stack; _i < _a.length; _i++) {
                    var point = _a[_i];
                    var h = this.drawBaseDot();
                    h = this.setPosition(h, point);
                    this.section.add(h);
                }
                this.tetraService.drawed = false;
            }
            this.tetraService.stack.push(hel.position);
            this.section.add(hel);
        }
        var plane = this.tetraService.getBuildPlane();
        if (plane === _tetrahedron_service__WEBPACK_IMPORTED_MODULE_3__["WAY"].Clear) {
            this.user_assistance = 'Все три точки находятся на одной прямой. Отметьте третью точку в другом месте.';
            this.clearSelection();
            for (var _b = 0, _c = this.tetraService.stack; _b < _c.length; _b++) {
                var p = _c[_b];
                var hel = this.drawBaseDot();
                hel = this.setPosition(hel, p);
                this.section.add(hel);
            }
            return;
        }
        if (plane === _tetrahedron_service__WEBPACK_IMPORTED_MODULE_3__["WAY"].DRAW_SIMPLE || plane === _tetrahedron_service__WEBPACK_IMPORTED_MODULE_3__["WAY"].DRAW_HARD) {
            /*
            проверка на принадлежность одной прямой:
            */
            var _d = this.tetraService.generatePlan(plane), planToDraw = _d.plan, selectionDots = _d.dots;
            //debugger;
            this.listOfScenes = new Array();
            this.numDrawedStep = -1;
            //создаем массив сцен
            for (var _e = 0, planToDraw_1 = planToDraw; _e < planToDraw_1.length; _e++) {
                var list = planToDraw_1[_e];
                var nowScene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
                var dots = new Set();
                //может быть массив пар вершин, может быть массив вершин (черных и серых)
                if (list.type === _tetrahedron_service__WEBPACK_IMPORTED_MODULE_3__["TYPE"].PLANE) {
                    dots = new Set(list.black);
                    this.drawLines(nowScene, list.black);
                    for (var i = 0; i < list.gray.length; i++) {
                        var tmp = this.drawLine(nowScene, list.black[i], list.gray[i], this.material.black_dash_line);
                        tmp.computeLineDistances();
                    }
                }
                else if (list.type === _tetrahedron_service__WEBPACK_IMPORTED_MODULE_3__["TYPE"].LINES) {
                    for (var _f = 0, list_1 = list; _f < list_1.length; _f++) {
                        var part = list_1[_f];
                        dots.add(part[0]);
                        dots.add(part[1]);
                        this.drawLine(nowScene, part[0], part[1], this.material.dim_gray_line);
                    }
                }
                this.drawDots(nowScene, dots);
                nowScene.visible = false;
                this.listOfScenes.push(nowScene);
                this.section.add(this.listOfScenes[this.listOfScenes.length - 1]);
            }
            //последняя сцена: отрисовка сечения}
            var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
            geometry.vertices = selectionDots;
            geometry.faces = this.combinations(geometry.vertices.length);
            geometry.computeBoundingSphere();
            this.listOfScenes.push((new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]()).add(new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, this.material.section)));
            this.section.add(this.listOfScenes[this.listOfScenes.length - 1]);
            this.listOfScenes[this.listOfScenes.length - 1].visible = false;
            this.user_assistance = "Cечение расчитано, для просмотра этапов построения используйте клавиши клавиатуры:\n → (право), следующий шаг, ← (лево), предыдущий шаг.";
            this.render();
            this.tetraService.stack.shift();
        }
    };
    CanvasTetrahedronComponent.prototype.keyEvent = function (event) {
        if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
            if (this.numDrawedStep < this.listOfScenes.length - 1) {
                this.listOfScenes[++this.numDrawedStep].visible = true;
                this.render();
            }
        }
        if (event.keyCode === KEY_CODE.LEFT_ARROW) {
            if (this.numDrawedStep > -1) {
                this.listOfScenes[this.numDrawedStep--].visible = false;
                this.render();
            }
        }
    };
    CanvasTetrahedronComponent.prototype.drawBaseDot = function () {
        return new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"](1.5, 240), new three__WEBPACK_IMPORTED_MODULE_2__["MeshNormalMaterial"]());
    };
    CanvasTetrahedronComponent.prototype.drawLine = function (_scene, d1, d2, material) {
        var geom = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        geom.vertices.push(d1);
        geom.vertices.push(d2);
        var t = new three__WEBPACK_IMPORTED_MODULE_2__["Line"](geom, material);
        _scene.add(t);
        return t;
    };
    CanvasTetrahedronComponent.prototype.drawLines = function (_scene, dots) {
        for (var i = 1; i < dots.length; i++) {
            var geom = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
            geom.vertices.push(dots[i - 1]);
            geom.vertices.push(dots[i]);
            _scene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](geom, this.material.dim_gray_line));
        }
    };
    CanvasTetrahedronComponent.prototype.drawDots = function (_scene, dots) {
        for (var _i = 0, _a = Array.from(dots); _i < _a.length; _i++) {
            var dot = _a[_i];
            var d = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["SphereGeometry"](0.7, 240), this.material.black);
            _scene.add(d);
            d = this.setPosition(d, dot);
        }
    };
    CanvasTetrahedronComponent.prototype.clearSelection = function () {
        this.scene.remove(this.section);
        this.section = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
        this.scene.add(this.section);
    };
    CanvasTetrahedronComponent.prototype.combinations = function (n) {
        var a = Array.apply(null, Array(n)).map(function (_, i) { return i; });
        var out = [];
        for (var i = 0; i < n - 1; i++) {
            for (var j = i + 2; j < n; j++) {
                var _x = a.slice(i, i + 2).concat(a[j]);
                out.push(new three__WEBPACK_IMPORTED_MODULE_2__["Face3"](_x[0], _x[1], _x[2]));
            }
        }
        var x = a.slice(-2).concat(a[0]);
        out.push(new three__WEBPACK_IMPORTED_MODULE_2__["Face3"](x[0], x[1], x[2]));
        return out;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasTetrahedronComponent.prototype, "canvasRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasTetrahedronComponent.prototype, "onWindowMouseUp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CanvasTetrahedronComponent.prototype, "mouseWheelUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('wheel', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasTetrahedronComponent.prototype, "onMouseWheel", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousewheel', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasTetrahedronComponent.prototype, "onMouseWheelChrome", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('DOMMouseScroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasTetrahedronComponent.prototype, "onMouseWheelFirefox", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('onmousewheel', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasTetrahedronComponent.prototype, "onMouseWheelIE", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('MozMousePixelScroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasTetrahedronComponent.prototype, "onMouseWheelFirefoxOld", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], CanvasTetrahedronComponent.prototype, "keyEvent", null);
    CanvasTetrahedronComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas-tetrahedron',
            template: __webpack_require__(/*! ./canvas-tetrahedron.component.html */ "./src/app/canvas-tetrahedron/canvas-tetrahedron.component.html"),
            providers: [_tetrahedron_service__WEBPACK_IMPORTED_MODULE_3__["TetrahedronService"]],
            styles: [__webpack_require__(/*! ./canvas-tetrahedron.component.css */ "./src/app/canvas-tetrahedron/canvas-tetrahedron.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tetrahedron_service__WEBPACK_IMPORTED_MODULE_3__["TetrahedronService"]])
    ], CanvasTetrahedronComponent);
    return CanvasTetrahedronComponent;
}());



/***/ }),

/***/ "./src/app/canvas-trig/canvas.component.css":
/*!**************************************************!*\
  !*** ./src/app/canvas-trig/canvas.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".canvas {\n    width: 300px;\n    height: 300px;\n}\n.canvasSmall {\n    width: 300px;\n    height: 150px;\n}\n.canvasBig {\n    width: 300px;\n    height: 300px;\n}\n.inline{\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-start;\n}\n.incolumn{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n}\ntd {\n    padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzLXRyaWcvY2FudmFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDJCQUEyQjtBQUM1QjtBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QiwyQkFBMkI7QUFDNUI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy10cmlnL2NhbnZhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbnZhcyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG59XG4uY2FudmFzU21hbGwge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuLmNhbnZhc0JpZyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG59XG5cbi5pbmxpbmV7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLmluY29sdW1ue1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbnRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/canvas-trig/canvas.component.html":
/*!***************************************************!*\
  !*** ./src/app/canvas-trig/canvas.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inline\">\n    <div class=\"incolumn\">\n        <div class=\"canvas\" #canvas (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\"\n            (mousemove)=\"onMouseMove($event)\"></div>\n        <div class=\"canvasSmall\" #canvasSin *ngIf=\"visibleSin\"></div>\n        <div class=\"canvasSmall\" #canvasCos *ngIf=\"visibleCos\"></div>\n    </div>\n    <div class=\"incolumn\">\n        <div class=\"canvasBig\" #canvasTg *ngIf=\"visibleTg\"></div>\n        <div class=\"canvasBig\" #canvasCtg *ngIf=\"visibleCtg\"></div>\n    </div>\n    <table>\n        <tr>\n            <th></th>\n            <th>Значение</th>\n        </tr>\n        <tr>\n            <th>Угол (в градусах)</th>\n            <td>{{angle_deg}}</td>\n        </tr>\n        <tr>\n            <th>Угол (в радианах)</th>\n            <td>{{angle_rad}} * pi</td>\n        </tr>\n        <tr *ngIf=\"visibleSin\">\n                <th>Sin</th>\n                <td>{{valSin}}</td>\n        </tr>\n        <tr *ngIf=\"visibleCos\">\n                <th>Cos</th>\n                <td>{{valCos}}</td>\n        </tr>\n        <tr *ngIf=\"visibleTg\">\n                <th>Tg</th>\n                <td>{{valTg}}</td>\n        </tr>\n        <tr *ngIf=\"visibleCtg\">\n                <th>Ctg</th>\n                <td>{{valCtg}}</td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/canvas-trig/canvas.component.ts":
/*!*************************************************!*\
  !*** ./src/app/canvas-trig/canvas.component.ts ***!
  \*************************************************/
/*! exports provided: CanvasTrigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasTrigComponent", function() { return CanvasTrigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



var CanvasTrigComponent = /** @class */ (function () {
    function CanvasTrigComponent(ref) {
        this.ref = ref;
        this.scaleConst = 1.5;
        this.valSin = '0';
        this.valCos = '1';
        this.valTg = '0';
        this.valCtg = '∞';
        this.angle_rad = '0';
        this.angle_deg = '0';
        this.near_plane = 97;
        this.far_plane = 100;
        this.visibleSin = true;
        this.visibleCos = true;
        this.visibleTg = true;
        this.visibleCtg = true;
        this.selectionSin = {
            renderer: new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"](), camera: new three__WEBPACK_IMPORTED_MODULE_2__["Camera"](),
            lineSin: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](), dottedLineSin: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](),
            dotSin: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](), sceneSin: new three__WEBPACK_IMPORTED_MODULE_2__["Scene"](),
            render: function () {
                if (this.renderer === undefined) {
                    return;
                }
                this.renderer.render(this.sceneSin, this.camera);
            }
        };
        this.selectionCos = {
            renderer: new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"](), camera: new three__WEBPACK_IMPORTED_MODULE_2__["Camera"](),
            lineCos: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](), dottedLineCos: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](),
            dotCos: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](), sceneCos: new three__WEBPACK_IMPORTED_MODULE_2__["Scene"](),
            render: function () {
                if (this.renderer === undefined) {
                    return;
                }
                this.renderer.render(this.sceneCos, this.camera);
            }
        };
        this.selectionTg = {
            renderer: new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"](), camera: new three__WEBPACK_IMPORTED_MODULE_2__["Camera"](),
            _lineTg: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](), dottedLineTg: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](),
            _dotTg: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](), sceneTg: new three__WEBPACK_IMPORTED_MODULE_2__["Scene"](), slopingLine: new three__WEBPACK_IMPORTED_MODULE_2__["Line"](),
            set lineTg(h) {
                this._lineTg.geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1, Math.abs(h));
                this._lineTg.position.y = h / 2;
            },
            set dotTg(pos) {
                if (Math.abs(pos.y) > 23) {
                    this._dotTg.visible = false;
                }
                else {
                    this._dotTg.position.x = pos.x;
                    this._dotTg.position.y = pos.y;
                    this._dotTg.position.z = pos.z;
                    this._dotTg.visible = true;
                }
            },
            getGraph: function (size) {
                var graph_material = new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x2ECC71, linewidth: 2.5 });
                var graph = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
                for (var i = size.from; i <= size.to; i += 1 * Math.PI / 180) {
                    graph.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](i * 180 / 8 / Math.PI, Math.tan(i) * 10, 0));
                }
                return new three__WEBPACK_IMPORTED_MODULE_2__["Line"](graph, graph_material);
            },
            render: function () {
                if (this.renderer === undefined) {
                    return;
                }
                this.renderer.render(this.sceneTg, this.camera);
            }
        };
        this.selectionCtg = {
            renderer: new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"](), camera: new three__WEBPACK_IMPORTED_MODULE_2__["Camera"](),
            _lineCtg: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](), dottedLineCtg: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](),
            _dotCtg: new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](), sceneCtg: new three__WEBPACK_IMPORTED_MODULE_2__["Scene"](), slopingLine: new three__WEBPACK_IMPORTED_MODULE_2__["Line"](),
            set lineCtg(w) {
                this._lineCtg.geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](Math.abs(w), 1);
                this._lineCtg.position.x = w / 2;
            },
            set dotCtg(pos) {
                if (Math.abs(pos.y) > 23) {
                    this._dotCtg.visible = false;
                }
                else {
                    this._dotCtg.position.x = pos.x;
                    this._dotCtg.position.y = pos.y;
                    this._dotCtg.position.z = pos.z;
                    this._dotCtg.visible = true;
                }
            },
            getGraph: function (size) {
                var graph_material = new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0xCC2E71, linewidth: 2.5 });
                var graph = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
                for (var i = size.from; i <= size.to; i += 1 * Math.PI / 180) {
                    graph.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](i * 180 / 8 / Math.PI, 1 / Math.tan(i) * 10, 0));
                }
                return new three__WEBPACK_IMPORTED_MODULE_2__["Line"](graph, graph_material);
            },
            render: function () {
                if (this.renderer === undefined) {
                    return;
                }
                this.renderer.render(this.sceneCtg, this.camera);
            }
        };
        this.render = this.render.bind(this);
    }
    Object.defineProperty(CanvasTrigComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CanvasTrigComponent.prototype.createScene = function () {
        var _this = this;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        this.scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xffffff);
        var url = "assets/img/back-circle.gif";
        var loader = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]();
        loader.load(url, function (_texture) {
            var materialTexture = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ map: _texture });
            var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](27, 27), materialTexture);
            _this.scene.add(m);
            _this.render();
        });
        this.circle = { radius: 10, x: 0, y: 0 };
        var segments = 240;
        this.y_asix(this.scene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -13, 1), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 15, 1));
        this.x_asix(this.scene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-13, 0, 1), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](15, 0, 1));
        var mini_radius = 0.5 * 500 / this.canvas.clientWidth;
        var color_mini_circle = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x000090 });
        this.pointer = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["CircleBufferGeometry"](mini_radius, segments, 0, this.circle.radius), color_mini_circle);
        this.pointer.position.x = this.circle.x + this.circle.radius;
        this.pointer.position.z = 1;
        this.scene.add(this.pointer);
        this.createSin();
        this.createCos();
        this.createTg();
        this.createCtg();
    };
    CanvasTrigComponent.prototype.createLight = function () {
        var light = new three__WEBPACK_IMPORTED_MODULE_2__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, this.far_plane);
        this.scene.add(light);
    };
    CanvasTrigComponent.prototype.createCamera = function () {
        var aspectRatio = this.getAspectRatio(this.canvas);
        this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](30, aspectRatio, this.near_plane, this.far_plane);
        this.camera.position.set(0, 0, this.far_plane);
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
    };
    CanvasTrigComponent.prototype.getAspectRatio = function (canvas) {
        var height = canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return canvas.clientWidth / canvas.clientHeight;
    };
    CanvasTrigComponent.prototype.startRendering = function () {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"](); /*{
          canvas: this.canvas,
          antialias: true
      });*/
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_2__["PCFSoftShadowMap"];
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;
        var component = this;
        (function render() {
            //requestAnimationFrame(render);
            component.render();
        }());
    };
    CanvasTrigComponent.prototype.render = function () {
        if (this.renderer === undefined) {
            return;
        }
        this.renderer.render(this.scene, this.camera);
    };
    CanvasTrigComponent.prototype.onMouseDown = function (event) {
        //console.log("onMouseDown");
        event.preventDefault();
        var EPS = 0.6;
        var pos = this.worldToCanvas(new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](event.pageX, event.pageY));
        if (Math.abs(pos.x - this.pointer.position.x) <= EPS && Math.abs(pos.y - this.pointer.position.y) <= EPS) {
            this.mouseOnLastPosPointer = true;
        }
    };
    CanvasTrigComponent.prototype.onMouseMove = function (event) {
        if (this.mouseOnLastPosPointer) {
            var EPS = 15;
            var pos = this.worldToCanvas(new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](event.pageX, event.pageY));
            if (Math.abs(pos.x - this.pointer.position.x) <= EPS &&
                Math.abs(pos.y - this.pointer.position.y) <= EPS) {
                var x = (pos.x < 0 ? -1 : 1) * this.circle.radius / Math.sqrt(1 + Math.pow(pos.y / pos.x, 2));
                this.pointer.position.y = (pos.y < 0 ? -1 : 1) *
                    Math.sqrt(Math.pow(this.circle.radius, 2) - Math.pow(x, 2));
                this.pointer.position.x = x;
                this.angle_rad = (this.getAngle() / Math.PI).toFixed(3);
                this.angle_deg = (this.getAngle() / Math.PI * 180).toFixed(2);
                if (this.visibleSin) {
                    this.drawSin();
                }
                if (this.visibleCos) {
                    this.drawCos();
                }
                if (this.visibleTg) {
                    this.drawTg();
                }
                if (this.visibleCtg) {
                    this.drawCtg();
                }
                this.render();
            }
            else {
                this.mouseOnLastPosPointer = false;
            }
        }
    };
    CanvasTrigComponent.prototype.onMouseUp = function (event) {
        this.mouseOnLastPosPointer = false;
    };
    CanvasTrigComponent.prototype.ngAfterViewInit = function () {
        this.createScene();
        this.createLight();
        this.createCamera();
        this.startRendering();
        this.scene.scale.set(this.scaleConst, this.scaleConst, this.scaleConst);
        this.canvasRef.nativeElement.appendChild(this.renderer.domElement);
        this.render();
    };
    CanvasTrigComponent.prototype.getAngle = function () {
        function cosAngle(vec1, vec2) {
            return (vec1.x * vec2.x + vec1.y * vec2.y) /
                (Math.sqrt(Math.pow(vec1.x, 2) + Math.pow(vec1.y, 2)) * Math.sqrt(Math.pow(vec2.x, 2) + Math.pow(vec2.y, 2)));
        }
        var angle = Math.acos(cosAngle(new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](this.circle.radius, 0), this.pointer.position));
        if (this.pointer.position.y < 0) {
            angle *= -1;
        }
        return angle;
    };
    CanvasTrigComponent.prototype.radToDeg = function (angle) {
        return (angle * 180) / Math.PI;
    };
    CanvasTrigComponent.prototype.createSubCanvas = function (ratio, scene, canvas) {
        var light = new three__WEBPACK_IMPORTED_MODULE_2__["PointLight"](0xffffff, 1, 1000);
        light.position.set(0, 0, 100);
        scene.add(light);
        var aspectRatio = this.getAspectRatio(canvas);
        var camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](ratio, aspectRatio, this.near_plane, this.far_plane);
        camera.position.set(0, 0, this.far_plane);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        var renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setClearColor(0xffffff, 1);
        renderer.autoClear = true;
        var component = this;
        (function render() {
            //requestAnimationFrame(render);
            component.render();
        }());
        return { renderer: renderer, scene: scene, camera: camera };
    };
    Object.defineProperty(CanvasTrigComponent.prototype, "canvasSin", {
        get: function () {
            return this.canvasSinRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CanvasTrigComponent.prototype.createSin = function () {
        var _color = 0xFFA07A;
        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1, this.pointer.position.y);
        this.selectionSin.lineSin = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: _color }));
        this.selectionSin.lineSin.position.y = 0;
        this.selectionSin.lineSin.position.x = 0;
        this.selectionSin.lineSin.visible = this.visibleSin;
        this.scene.add(this.selectionSin.lineSin);
        var sinScene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        sinScene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](0xffffff);
        sinScene = this.y_asix(sinScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -10, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 10, 0));
        sinScene = this.x_asix(sinScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-25, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](25, 0, 0));
        var graph = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        for (var i = -1 * 2 * this.circle.radius; i <= 2 * this.circle.radius; i++) {
            graph.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](i, this.circle.radius * Math.sin(Math.PI * i / this.circle.radius / 2 /* + this.getAngle()*/) / 2, 0));
        }
        var line2 = new three__WEBPACK_IMPORTED_MODULE_2__["Line"](graph, new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: _color, linewidth: 2.5 }));
        sinScene.add(line2);
        /*Math.PI * i  = x */
        this.selectionSin.dotSin = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["CircleBufferGeometry"](1, 240, 0, this.circle.radius), this.pointer.material);
        this.selectionSin.dotSin.position.x = 0;
        this.selectionSin.dotSin.position.y = 0;
        this.selectionSin.dotSin.position.z = 1;
        sinScene.add(this.selectionSin.dotSin);
        var base = this.createSubCanvas(15, sinScene, this.canvasSin);
        this.selectionSin.renderer = base.renderer;
        this.selectionSin.camera = base.camera;
        this.selectionSin.sceneSin = base.scene;
        this.hideSin();
    };
    CanvasTrigComponent.prototype.drawSin = function () {
        this.selectionSin.lineSin.geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1, Math.abs(this.pointer.position.y));
        this.selectionSin.lineSin.position.y = this.pointer.position.y / 2;
        this.selectionSin.dotSin.position.x = this.getAngle() / Math.PI * 2 * this.circle.radius;
        this.valSin = (Math.sin(this.getAngle())).toFixed(2);
        this.selectionSin.dotSin.position.y = this.pointer.position.y / 2;
        this.selectionSin.render();
    };
    CanvasTrigComponent.prototype.showSin = function () {
        this.drawSin();
        this.selectionSin.lineSin.visible = true;
        this.visibleSin = true;
        this.ref.detectChanges();
        var el = this.canvasSinRef.nativeElement;
        el.appendChild(this.selectionSin.renderer.domElement);
        this.selectionSin.render();
        this.render();
    };
    CanvasTrigComponent.prototype.hideSin = function () {
        this.selectionSin.lineSin.visible = false;
        this.visibleSin = false;
        this.ref.detectChanges();
        this.render();
    };
    Object.defineProperty(CanvasTrigComponent.prototype, "canvasCos", {
        get: function () {
            return this.canvasCosRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CanvasTrigComponent.prototype.createCos = function () {
        var _color = 0x20B2AA;
        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](this.pointer.position.x, 1);
        this.selectionCos.lineCos = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: _color }));
        this.selectionCos.lineCos.position.y = 0;
        this.selectionCos.lineCos.position.x = 0;
        this.selectionCos.lineCos.visible = this.visibleCos;
        this.scene.add(this.selectionCos.lineCos);
        var cosScene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        cosScene = this.y_asix(cosScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -10, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 10, 0));
        cosScene = this.x_asix(cosScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-25, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](25, 0, 0));
        var graph = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        for (var i = -1 * 2 * this.circle.radius; i <= 2 * this.circle.radius; i++) {
            graph.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](i, this.circle.radius * Math.cos(Math.PI * i / this.circle.radius / 2 + this.getAngle()) / 2, 0));
        }
        this.addText(cosScene, '-п', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-2 * this.circle.radius, -2, 0));
        this.addText(cosScene, '-п/2', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-this.circle.radius, -2, 0));
        this.addText(cosScene, '0', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](2, -2, 0));
        this.addText(cosScene, '-1', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-this.circle.radius, -10, 0));
        this.addHatch(cosScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-this.circle.radius, -0.5, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-this.circle.radius, 0.5, 0));
        this.addText(cosScene, '1', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.circle.radius, 10, 0));
        this.addHatch(cosScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.circle.radius, -0.5, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.circle.radius, 0.5, 0));
        this.addText(cosScene, 'п', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](2 * this.circle.radius, -2, 0));
        this.addText(cosScene, 'п/2', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.circle.radius, -2, 0));
        cosScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](graph, new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: _color, linewidth: 2.5 })));
        /*Math.PI * i  = x */
        this.selectionCos.dotCos = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["CircleBufferGeometry"](1, 240, 0, this.circle.radius), this.pointer.material);
        this.selectionCos.dotCos.position.x = 0;
        this.selectionCos.dotCos.position.y = this.pointer.position.x / 2;
        this.selectionCos.dotCos.position.z = 1;
        cosScene.add(this.selectionCos.dotCos);
        var base = this.createSubCanvas(15, cosScene, this.canvasCos);
        this.selectionCos.renderer = base.renderer;
        this.selectionCos.camera = base.camera;
        this.selectionCos.sceneCos = base.scene;
        this.hideCos();
    };
    CanvasTrigComponent.prototype.drawCos = function () {
        this.selectionCos.lineCos.geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](Math.abs(this.pointer.position.x), 1);
        this.selectionCos.lineCos.position.x = this.pointer.position.x / 2;
        this.selectionCos.dotCos.position.x = this.getAngle() / Math.PI * 2 * this.circle.radius;
        this.valCos = Math.cos(this.getAngle()).toFixed(2);
        this.selectionCos.dotCos.position.y = this.pointer.position.x / 2;
        this.selectionCos.render();
    };
    CanvasTrigComponent.prototype.showCos = function () {
        this.drawCos();
        this.selectionCos.lineCos.visible = true;
        this.visibleCos = true;
        this.ref.detectChanges();
        var el = this.canvasCosRef.nativeElement;
        el.appendChild(this.selectionCos.renderer.domElement);
        this.selectionCos.render();
        this.render();
    };
    CanvasTrigComponent.prototype.hideCos = function () {
        this.selectionCos.lineCos.visible = false;
        this.visibleCos = false;
        this.ref.detectChanges();
        this.render();
    };
    Object.defineProperty(CanvasTrigComponent.prototype, "canvasTg", {
        get: function () {
            return this.canvasTgRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CanvasTrigComponent.prototype.createTg = function () {
        var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x2ECC71 });
        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](1, -1);
        this.selectionTg._lineTg = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
        this.selectionTg._lineTg.position.y = 0;
        this.selectionTg._lineTg.position.x = this.circle.radius;
        this.selectionTg._lineTg.visible = this.visibleTg;
        this.scene.add(this.selectionTg._lineTg);
        var geom = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        geom.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        geom.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](10, 10 * this.pointer.position.y / this.pointer.position.x, 0));
        this.selectionTg.slopingLine = new three__WEBPACK_IMPORTED_MODULE_2__["Line"](geom, new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x008B8B }));
        this.selectionTg.slopingLine.visible = this.visibleTg;
        this.scene.add(this.selectionTg.slopingLine);
        var TgScene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        TgScene = this.y_asix(TgScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -25, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 25, 0));
        TgScene = this.x_asix(TgScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-25, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](25, 0, 0));
        /*Math.PI * i  = x */
        this.selectionTg._dotTg = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["CircleBufferGeometry"](1, 240, 0, this.circle.radius), new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x000090 }));
        this.selectionTg.dotTg = { x: 0, y: 0, z: 0 };
        //this.selectionTg._dotTg.position.z = 1;
        TgScene.add(this.selectionTg._dotTg);
        //1я часть графика [-pi, -pi/2]
        TgScene.add(this.selectionTg.getGraph({ from: -Math.PI, to: Math.atan(2.3) - Math.PI }));
        //2я часть графика [-pi/2, pi/2]
        TgScene.add(this.selectionTg.getGraph({ from: Math.atan(-2.3), to: Math.atan(2.3) }));
        //3я часть графика [pi/2, pi]
        TgScene.add(this.selectionTg.getGraph({ from: Math.PI + Math.atan(-2.3), to: Math.PI }));
        this.addText(TgScene, '-п', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-180 / 8, -2, 0));
        this.addText(TgScene, '-п/2', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-180 / 16, -2, 0));
        this.addText(TgScene, '0', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](2, -2, 0));
        this.addText(TgScene, '-1', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](2, -10, 0));
        this.addHatch(TgScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-0.5, -10, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0.5, -10, 0));
        this.addText(TgScene, '1', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-2, 10, 0));
        this.addHatch(TgScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-0.5, 10, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0.5, 10, 0));
        this.addText(TgScene, '-2.3', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](2, -23, 0));
        this.addText(TgScene, '2.3', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-4, 23, 0));
        this.addText(TgScene, 'п', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](180 / 8, -2, 0));
        this.addText(TgScene, 'п/2', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](180 / 16, -2, 0));
        var base = this.createSubCanvas(30, TgScene, this.canvasTg);
        this.selectionTg.renderer = base.renderer;
        this.selectionTg.camera = base.camera;
        this.selectionTg.sceneTg = base.scene;
        this.hideTg();
    };
    CanvasTrigComponent.prototype.drawTg = function () {
        var angle = this.getAngle();
        if (Math.abs(Math.tan(angle)) > 100) {
            this.valTg = Math.tan(angle) > 0 ? "∞" : "-∞";
        }
        else {
            this.valTg = Math.tan(angle).toFixed(2);
        }
        var geom = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        var height_line = 0;
        var h = 1.5 * this.circle.radius;
        var atan_h = Math.atan(h);
        height_line = this.circle.radius * this.pointer.position.y / this.pointer.position.x;
        //если около пи/2 (проверяем крайние значения)
        if (Math.abs(height_line) > h) {
            h *= (height_line < 0) ? -1 : 1;
            var x = h / (this.pointer.position.y / this.pointer.position.x);
            geom.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](x, h, 0));
            height_line = h;
        }
        else {
            geom.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.circle.radius, height_line, 0));
        } //линия может идти как от указателя, так и от 0,0
        if (angle > Math.PI / 2 || angle < -Math.PI / 2) {
            geom.vertices.push(this.pointer.position);
            //debugger;
        }
        else {
            geom.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        }
        this.selectionTg.slopingLine.geometry = geom;
        this.selectionTg.lineTg = height_line;
        this.selectionTg.dotTg = { x: angle * 180 / Math.PI / 8, y: Math.tan(angle) * 10, z: 1 };
        this.selectionTg.render();
    };
    CanvasTrigComponent.prototype.showTg = function () {
        this.drawTg();
        this.selectionTg.slopingLine.visible = true;
        this.selectionTg._lineTg.visible = true;
        this.visibleTg = true;
        this.ref.detectChanges();
        var el = this.canvasTgRef.nativeElement;
        el.appendChild(this.selectionTg.renderer.domElement);
        this.selectionTg.render();
        this.render();
    };
    CanvasTrigComponent.prototype.hideTg = function () {
        this.selectionTg.slopingLine.visible = false;
        this.selectionTg._lineTg.visible = false;
        this.visibleTg = false;
        this.ref.detectChanges();
        this.render();
    };
    Object.defineProperty(CanvasTrigComponent.prototype, "canvasCtg", {
        get: function () {
            return this.canvasCtgRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CanvasTrigComponent.prototype.ctg = function (x) {
        return 1 / Math.tan(x);
    };
    CanvasTrigComponent.prototype.arcctg = function (x) {
        return Math.PI / 2 - Math.atan(x);
    };
    CanvasTrigComponent.prototype.createCtg = function () {
        var material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0xCC2E71 });
        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["BoxGeometry"](-1, 1);
        this.selectionCtg._lineCtg = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, material);
        this.selectionCtg._lineCtg.position.x = 0;
        this.selectionCtg._lineCtg.position.y = this.circle.radius;
        this.selectionCtg._lineCtg.visible = this.visibleCtg;
        this.scene.add(this.selectionCtg._lineCtg);
        var geom = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        geom.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        geom.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](10, 0, 0));
        this.selectionCtg.slopingLine = new three__WEBPACK_IMPORTED_MODULE_2__["Line"](geom, new three__WEBPACK_IMPORTED_MODULE_2__["LineBasicMaterial"]({ color: 0x8B008B }));
        this.selectionCtg.slopingLine.visible = this.visibleCtg;
        this.scene.add(this.selectionCtg.slopingLine);
        var CtgScene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        CtgScene = this.y_asix(CtgScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, -25, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 25, 0));
        CtgScene = this.x_asix(CtgScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-25, 0, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](25, 0, 0));
        /*Math.PI * i  = x */
        this.selectionCtg._dotCtg = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](new three__WEBPACK_IMPORTED_MODULE_2__["CircleBufferGeometry"](1, 240, 0, this.circle.radius), this.pointer.material);
        //this.selectionCtg._dotCtg.position.z = 1;
        this.selectionCtg.dotCtg = { x: 0, y: 25, z: 1 };
        CtgScene.add(this.selectionCtg._dotCtg);
        //1я часть графика [-pi, 0]
        CtgScene.add(this.selectionCtg.getGraph({ from: this.arcctg(2.3) - Math.PI, to: this.arcctg(-2.3) - Math.PI }));
        //2я часть графика [0, pi]
        CtgScene.add(this.selectionCtg.getGraph({ from: this.arcctg(2.3), to: this.arcctg(-2.3) }));
        this.addText(CtgScene, '-п', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]((this.arcctg(2.4) - Math.PI) * 180 / 8 / Math.PI, -2, 0));
        this.addText(CtgScene, '-п/2', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]((this.arcctg(2.4) - Math.PI) * 180 / 16 / Math.PI, -2, 0));
        this.addText(CtgScene, '0', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](2, -2, 0));
        this.addText(CtgScene, '-1', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](2, -10, 0));
        this.addHatch(CtgScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-0.5, -10, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0.5, -10, 0));
        this.addText(CtgScene, '1', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-2, 10, 0));
        this.addHatch(CtgScene, new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-0.5, 10, 0), new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0.5, 10, 0));
        this.addText(CtgScene, '-2.3', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](2, -23, 0));
        this.addText(CtgScene, '2.3', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-4, 23, 0));
        this.addText(CtgScene, 'п', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]((this.arcctg(-2.4)) * 180 / 8 / Math.PI, -2, 0));
        this.addText(CtgScene, 'п/2', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]((this.arcctg(-2.4)) * 180 / 16 / Math.PI - 1, -2, 0));
        var base = this.createSubCanvas(30, CtgScene, this.canvasCtg);
        this.selectionCtg.renderer = base.renderer;
        this.selectionCtg.camera = base.camera;
        this.selectionCtg.sceneCtg = base.scene;
        this.hideCtg();
    };
    CanvasTrigComponent.prototype.drawCtg = function () {
        var angle = this.getAngle();
        if (Math.abs(this.ctg(angle)) > 100) {
            this.valCtg = this.ctg(angle) > 0 ? "∞" : "-∞";
        }
        else {
            this.valCtg = this.ctg(angle).toFixed(2);
        }
        var geom = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        var width_line = this.circle.radius / (this.pointer.position.y / this.pointer.position.x);
        var w = 1.5 * this.circle.radius;
        //если около пи/2 (проверяем крайние значения)
        if (Math.abs(width_line) > w) {
            w *= (width_line < 0) ? -1 : 1;
            var y = w * (this.pointer.position.y / this.pointer.position.x);
            geom.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](w, y, 0));
            width_line = w;
        }
        else {
            geom.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](width_line, this.circle.radius, 0));
        } //линия может идти как от указателя, так и от 0,0
        if (angle < 0) {
            geom.vertices.push(this.pointer.position);
            //debugger;
        }
        else {
            geom.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
        }
        this.selectionCtg.slopingLine.geometry = geom;
        this.selectionCtg.lineCtg = width_line;
        this.selectionCtg.dotCtg = { x: angle * 180 / Math.PI / 8, y: this.ctg(angle) * 10, z: 1 };
        this.selectionCtg.render();
    };
    CanvasTrigComponent.prototype.showCtg = function () {
        this.drawCtg();
        this.selectionCtg.slopingLine.visible = true;
        this.selectionCtg._lineCtg.visible = true;
        this.visibleCtg = true;
        this.ref.detectChanges();
        var el = this.canvasCtgRef.nativeElement;
        el.appendChild(this.selectionCtg.renderer.domElement);
        this.selectionCtg.render();
        this.render();
    };
    CanvasTrigComponent.prototype.hideCtg = function () {
        this.selectionCtg.slopingLine.visible = false;
        this.selectionCtg._lineCtg.visible = false;
        this.visibleCtg = false;
        this.ref.detectChanges();
        this.render();
    };
    CanvasTrigComponent.prototype.worldToCanvas = function (input) {
        var vec = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](); // create once and reuse
        var pos = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](); // create once and reuse
        vec.set(((input.x - this.canvas.offsetLeft) / this.canvas.clientWidth) * 2 - 1, -((input.y - this.canvas.offsetTop) / this.canvas.clientHeight) * 2 + 1, 1);
        vec.unproject(this.camera);
        vec.sub(this.camera.position).normalize();
        var distance = -this.camera.position.z / vec.z;
        pos.copy(this.camera.position).add(vec.multiplyScalar(distance));
        return pos.divide(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.scaleConst, this.scaleConst, this.scaleConst));
    };
    CanvasTrigComponent.prototype.x_asix = function (localScene, fromDot, toDot) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        var black_material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00000 });
        y.vertices.push(fromDot);
        y.vertices.push(toDot);
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x - 2, toDot.y + 1, 1));
        y.vertices.push(toDot);
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(toDot);
        y.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x - 2, toDot.y - 1, 1));
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        this.addText(localScene, 'x', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x, toDot.y - 2, toDot.z));
        return localScene;
    };
    CanvasTrigComponent.prototype.y_asix = function (localScene, fromDot, toDot) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        var black_material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00000 });
        y.vertices.push(fromDot);
        y.vertices.push(toDot);
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x + 1, toDot.y - 2, 1));
        y.vertices.push(toDot);
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        y.vertices.push(toDot);
        y.vertices.push(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x - 1, toDot.y - 2, 1));
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        this.addText(localScene, 'y', new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](toDot.x + 2, toDot.y, toDot.z));
        return localScene;
    };
    CanvasTrigComponent.prototype.addText = function (localScene, text, pos) {
        var component = this;
        new three__WEBPACK_IMPORTED_MODULE_2__["FontLoader"]().load('assets/font//Roboto_Regular.json', function (_font) {
            var geometry = new three__WEBPACK_IMPORTED_MODULE_2__["TextGeometry"](text, {
                font: Object(_font),
                size: 1.5,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: false,
                bevelThickness: 1,
                bevelSize: 0.2,
                bevelSegments: 10
            });
            var textMaterial = new three__WEBPACK_IMPORTED_MODULE_2__["MeshPhongMaterial"]({ color: 0x000000 });
            var m = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, textMaterial);
            localScene.add(m);
            m.position.x = pos.x;
            m.position.y = pos.y;
            m.position.z = pos.z;
            component.render();
        });
    };
    CanvasTrigComponent.prototype.addHatch = function (localScene, one, two) {
        var y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
        var black_material = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({ color: 0x00000 });
        y.vertices.push(one);
        y.vertices.push(two);
        localScene.add(new three__WEBPACK_IMPORTED_MODULE_2__["Line"](y, black_material));
        y = new three__WEBPACK_IMPORTED_MODULE_2__["Geometry"]();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasTrigComponent.prototype, "canvasRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasSin'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasTrigComponent.prototype, "canvasSinRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasCos'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasTrigComponent.prototype, "canvasCosRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasTg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasTrigComponent.prototype, "canvasTgRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvasCtg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CanvasTrigComponent.prototype, "canvasCtgRef", void 0);
    CanvasTrigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-canvas',
            // template: `<img src="assets/img/logo.png">`,
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/canvas-trig/canvas.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./canvas.component.css */ "./src/app/canvas-trig/canvas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CanvasTrigComponent);
    return CanvasTrigComponent;
}());



/***/ }),

/***/ "./src/app/cube.service.ts":
/*!*********************************!*\
  !*** ./src/app/cube.service.ts ***!
  \*********************************/
/*! exports provided: WAY, TYPE, CubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WAY", function() { return WAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeService", function() { return CubeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



var WAY;
(function (WAY) {
    WAY[WAY["DRAW_SIMPLE"] = 0] = "DRAW_SIMPLE";
    WAY[WAY["DRAW_HARD"] = 1] = "DRAW_HARD";
    WAY[WAY["Clear"] = 2] = "Clear";
    WAY[WAY["WAIT"] = 3] = "WAIT";
})(WAY || (WAY = {}));
var TYPE;
(function (TYPE) {
    TYPE[TYPE["LINE"] = 0] = "LINE";
    TYPE[TYPE["LINES"] = 1] = "LINES";
    TYPE[TYPE["PLANE"] = 2] = "PLANE";
})(TYPE || (TYPE = {}));
var CubeService = /** @class */ (function () {
    function CubeService() {
        this.side = 100;
        this.planeToEdge = [
            [-1, -2, 0, 1, 9, 10],
            [-2, -1, 3, 2, 8, 11],
            [0, 3, -1, -2, 4, 5],
            [1, 2, -2, -1, 7, 6],
            [9, 8, 4, 7, -1, -2],
            [10, 11, 5, 6, -2, -1]
        ];
        //грани куба
        /*(X, Y, Z) = three.(y, z, x)*/
        // ось OY
        var s = this.side;
        this.edges = [];
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, -s / 2, -s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, -s / 2, -s / 2), plane: [0, 2] });
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, s / 2, -s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, s / 2, -s / 2), plane: [0, 3] });
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, s / 2, s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, s / 2, s / 2), plane: [1, 3] });
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, -s / 2, s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, -s / 2, s / 2), plane: [1, 2] });
        //3 
        //ось OX 
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, -s / 2, s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, -s / 2, -s / 2), plane: [2, 4] });
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, -s / 2, -s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, -s / 2, s / 2), plane: [2, 5] });
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, s / 2, s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, s / 2, -s / 2), plane: [3, 5] });
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, s / 2, s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, s / 2, -s / 2), plane: [4, 3] });
        //7 
        //ось OZ 
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, s / 2, s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, -s / 2, s / 2), plane: [1, 4] });
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, s / 2, -s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](s / 2, -s / 2, -s / 2), plane: [0, 4] });
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, -s / 2, -s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, s / 2, -s / 2), plane: [0, 5] });
        this.edges.push({ vert1: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, s / 2, s / 2), vert2: new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](-s / 2, -s / 2, s / 2), plane: [1, 5] });
        //11
        this._queue = { data: [], edge_num: [], drawed: false };
    }
    CubeService.prototype.getDot = function (i) {
        if (i >= this._queue.data.length) {
            console.error("Try to get don't exist dot.");
        }
        return this._queue.data[i];
    };
    Object.defineProperty(CubeService.prototype, "queue", {
        get: function () {
            return this._queue.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CubeService.prototype, "drawed", {
        get: function () {
            return this._queue.drawed;
        },
        set: function (i) {
            this._queue.drawed = i;
        },
        enumerable: true,
        configurable: true
    });
    CubeService.prototype.canBuildPlane = function () {
        if (this._queue.data.length === 3) {
            if (this.isTreeDotsOnCommonStraightInCube(this.queue[0], this.queue[1], this.queue[2])) {
                //alert("Все три точки находятся на одной прямой.");
                this._queue.data.shift();
                return WAY.Clear;
            }
            /*
              основные вычисления для получения координат точек
            */
            var a = this.partExpA(this.queue[0], this.queue[1], this.queue[2]), b = this.partExpB(this.queue[0], this.queue[1], this.queue[2]), c = this.partExpC(this.queue[0], this.queue[1], this.queue[2]), d = this.partExpD(this.queue[0], this.queue[1], this.queue[2]);
            var i = 0;
            this.arr = [];
            this._queue.edge_num = [];
            var condition_of_graph = this.isTreeDotsOnOnePlaneOfCube(this.queue[0], this.queue[1], this.queue[2])
                || this.isTwoDotOnOneEdgeOfCube(this.queue[0], this.queue[1]) ||
                this.isTwoDotOnOneEdgeOfCube(this.queue[0], this.queue[2]) || this.isTwoDotOnOneEdgeOfCube(this.queue[1], this.queue[2]);
            for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
                var edge = _a[_i];
                var numerator = this.Numerator(a, b, c, d, edge.vert1);
                var denominator = this.Denominator(a, b, c, d, edge.vert1, edge.vert2);
                if (denominator === 0) {
                    if (numerator === 0) {
                        console.log('line in plane');
                    }
                    else {
                        console.log('||');
                    }
                }
                else {
                    var l = numerator / denominator;
                    var v = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.getCoord(edge.vert1.x, edge.vert2.x, l), this.getCoord(edge.vert1.y, edge.vert2.y, l), this.getCoord(edge.vert1.z, edge.vert2.z, l));
                    this.arr.push(v);
                    if (!condition_of_graph) {
                        for (var j = 0; j < 3; j++) {
                            if (this._queue.edge_num[j] === undefined) {
                                if (this.normalize((new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]()).subVectors(v, this.queue[j])) < 0.1) {
                                    this._queue.edge_num[j] = i; // запоминаем номер грани для заданной точки
                                }
                            }
                        }
                    }
                }
                i++;
            }
            this._queue.drawed = true;
            return condition_of_graph ? WAY.DRAW_SIMPLE : WAY.DRAW_HARD;
        }
        return WAY.WAIT;
    };
    CubeService.prototype.normalize = function (vector3) {
        return Math.abs(vector3.x) + Math.abs(vector3.y) + Math.abs(vector3.z);
    };
    CubeService.prototype.Numerator = function (a, b, c, d, dot1) {
        return (-d - a * dot1.x - b * dot1.y - c * dot1.z);
    };
    CubeService.prototype.Denominator = function (a, b, c, d, dot1, dot2) {
        return a * (dot2.x - dot1.x) + b * (dot2.y - dot1.y) + c * (dot2.z - dot1.z);
    };
    CubeService.prototype.partExpA = function (d0, d1, d2) {
        return (d1.y - d0.y) * (d2.z - d0.z) - (d2.y - d0.y) * (d1.z - d0.z);
    };
    CubeService.prototype.partExpB = function (d0, d1, d2) {
        return -(d1.x - d0.x) * (d2.z - d0.z) + (d2.x - d0.x) * (d1.z - d0.z);
    };
    CubeService.prototype.partExpC = function (d0, d1, d2) {
        return (d1.x - d0.x) * (d2.y - d0.y) - (d2.x - d0.x) * (d1.y - d0.y);
    };
    CubeService.prototype.partExpD = function (d0, d1, d2) {
        return -d0.x * this.partExpA(d0, d1, d2) - d0.y * this.partExpB(d0, d1, d2) - d0.z * this.partExpC(d0, d1, d2);
    };
    CubeService.prototype.getCoord = function (x1, x2, a) {
        return x1 + (x2 - x1) * a;
    };
    CubeService.prototype.isTreeDotsOnCommonStraightInCube = function (d1, d2, d3) {
        var x = d1.x + d2.x + d3.x, y = d1.y + d2.y + d3.y, z = d1.z + d2.z + d3.z;
        return this.twoOutOfThree((Math.abs(x) === 150), (Math.abs(y) === 150), (Math.abs(z) === 150));
    };
    CubeService.prototype.isTwoDotOnOneEdgeOfCube = function (d1, d2) {
        var x = d1.x + d2.x, y = d1.y + d2.y, z = d1.z + d2.z;
        return this.twoOutOfThree((Math.abs(x) === 100), (Math.abs(y) === 100), (Math.abs(z) === 100));
    };
    CubeService.prototype.isTreeDotsOnOnePlaneOfCube = function (d1, d2, d3) {
        var x = d1.x + d2.x + d3.x, y = d1.y + d2.y + d3.y, z = d1.z + d2.z + d3.z;
        return (Math.abs(x) === 150) || (Math.abs(y) === 150) || (Math.abs(z) === 150);
    };
    CubeService.prototype.twoOutOfThree = function (f, s, t) {
        return (f && s) || (s && t) || (t && f);
    };
    CubeService.prototype.onEdgeCube = function (d) {
        return Math.abs(d.x) <= 50 && Math.abs(d.y) <= 50 && Math.abs(d.z) <= 50;
    };
    /*
    private maxArray(array: any[]): number {
      let max = array[0];
      for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
          max = array[i];
        }
      }
      return max;
    }*/
    CubeService.prototype.find = function (array, value) {
        if (array.indexOf) { // если браузер поддерживает
            return array.indexOf(value);
        }
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            }
        }
        return -1;
    };
    CubeService.prototype.getNumsEdgFromPlane = function (num_plane) {
        switch (num_plane) {
            case 0:
                return [0, 1, 9, 10];
            case 1:
                return [2, 3, 8, 11];
            case 2:
                return [0, 3, 4, 5];
            case 4:
                return [4, 7, 8, 9];
            case 3:
                return [1, 2, 6, 7];
            case 5:
                return [5, 6, 10, 11];
            default:
                console.error('Try to get edge from don\'t exist plane');
                return undefined;
        }
        return undefined;
    };
    CubeService.prototype.generateGraph = function (base_edge) {
        var graph = new Array(6), queue_for_draw = new Array(12).fill(1);
        /*
          рассмотрим плоскость i:
          если на пересечении с плоскостью j есть ребро с заданной точкой,
          то количество существующих (отрисованных) точек на плоскости увеличивается
        */
        for (var i = 0; i < this.planeToEdge.length; i++) {
            graph[i] = new Array(6);
            graph[i].fill = false;
            graph[i].ndraw = 0;
            graph[i].set_draw = new Set();
            for (var j = 0; j < this.planeToEdge.length; j++) {
                if (this.planeToEdge[i][j] >= 0) {
                    graph[i][j] = { way: true };
                    if (this.find(base_edge, this.planeToEdge[i][j]) >= 0) {
                        graph[i].ndraw++;
                        graph[i].set_draw.add(this.planeToEdge[i][j]);
                    }
                }
                else {
                    graph[i][j] = { way: false };
                }
            }
        }
        return { table: graph };
    };
    CubeService.prototype.dfsAndDraw = function (start, graph, planToDraw) {
        var n = graph.table.length;
        var visited = new Array(n).fill(false);
        this.DFS(start, visited, graph, planToDraw);
    };
    CubeService.prototype.DFS = function (_start, _visited, _graph, planToDraw) {
        var _n = _graph.table.length;
        _visited[_start] = true;
        if (_graph.table[_start].ndraw >= 2 && !_graph.table[_start].fill) {
            this.addStraightOnPlain(_start, planToDraw);
            _graph.table[_start].fill = true;
            /* для всех плоскостей со смежными ребрами */
            for (var _i = 0, _a = this.planeToEdge[_start]; _i < _a.length; _i++) {
                var num_edge = _a[_i];
                if (num_edge < 0) {
                    continue;
                }
                var i = this.edges[num_edge].plane[0] === _start ? this.edges[num_edge].plane[1] : this.edges[num_edge].plane[0];
                if (!_graph.table[i].set_draw.has(num_edge)) {
                    _graph.table[i].ndraw++;
                    _graph.table[i].set_draw.add(num_edge);
                }
            }
        }
        for (var r = 0; r < _n; r++) {
            if ((_graph.table[_start][r].way) && (!_visited[r])) {
                this.DFS(r, _visited, _graph, planToDraw);
            }
        }
    };
    CubeService.prototype.getWorkPlane = function (edge_nums, graph, planToDraw) {
        var _plane = new Array(6).fill(0);
        for (var j = 0; j < edge_nums.length; j++) {
            for (var _i = 0, _a = this.edges[edge_nums[j]].plane; _i < _a.length; _i++) {
                var pl = _a[_i];
                _plane[pl]++;
            }
        }
        if (Math.max.apply(Math, _plane) >= 2) {
            return _plane.indexOf(Math.max.apply(Math, _plane));
        }
        var _arr = this.arr;
        var edge3 = edge_nums.filter(function (i) {
            return _arr[i].y === -50;
        })[0];
        var v = this.addExtra(edge_nums.filter(function (i) {
            return i !== edge3;
        }).map(function (i) {
            return _arr[i];
        }), planToDraw);
        graph.table[2].ndraw = 2;
        planToDraw.push([v, this.arr[edge3]]);
        planToDraw[planToDraw.length - 1].type = TYPE.LINE;
        return 2;
    };
    CubeService.prototype.addExtra = function (dots_under, planToDraw) {
        var n_plane = 2;
        var numsedge = this.getNumsEdgFromPlane(n_plane);
        var dots = new Array();
        for (var i = 0; i < 3; i++) {
            dots.push(this.edges[numsedge[i]].vert1);
        }
        var a = this.partExpA(dots[0], dots[1], dots[2]), b = this.partExpB(dots[0], dots[1], dots[2]), c = this.partExpC(dots[0], dots[1], dots[2]), d = this.partExpD(dots[0], dots[1], dots[2]);
        var numerator = this.Numerator(a, b, c, d, dots_under[0]);
        var denominator = this.Denominator(a, b, c, d, dots_under[0], dots_under[1]);
        if (denominator === 0) {
            console.error("Straight line parallel to the plane - try another plane"); //!
        }
        else {
            var l = numerator / denominator;
            var v = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.getCoord(dots_under[0].x, dots_under[1].x, l), this.getCoord(dots_under[0].y, dots_under[1].y, l), this.getCoord(dots_under[0].z, dots_under[1].z, l));
            //рисуем линии
            //вертикали
            var collect = new Array();
            for (var _i = 0, dots_under_1 = dots_under; _i < dots_under_1.length; _i++) {
                var dot = dots_under_1[_i];
                collect.push([new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](dot.x, -50, dot.z), dot]);
            }
            planToDraw.push(collect);
            planToDraw[planToDraw.length - 1].type = TYPE.LINES;
            collect = [];
            //верхняя
            for (var _a = 0, dots_under_2 = dots_under; _a < dots_under_2.length; _a++) {
                var dot = dots_under_2[_a];
                collect.push([dot, v]);
            }
            //нижняя
            for (var _b = 0, dots_under_3 = dots_under; _b < dots_under_3.length; _b++) {
                var dot = dots_under_3[_b];
                collect.push([new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](dot.x, -50, dot.z), v]);
            }
            //рисуем точку пересечения
            planToDraw.push(collect);
            planToDraw[planToDraw.length - 1].type = TYPE.LINES;
            return v;
        }
    };
    CubeService.prototype.addStraightOnPlain = function (num_plane, planToDraw) {
        var _arr = this.arr;
        var ind = this.getNumsEdgFromPlane(num_plane);
        var dots = ind.map(function (j) {
            return _arr[j];
        });
        var dotsFromSection = new Array();
        var asix = new Array();
        for (var i = 0; i < dots.length; i++) {
            if (!this.onEdgeCube(dots[i])) {
                asix.push([dots[i], this.edges[ind[i]].vert1]);
            }
        }
        planToDraw.push({ black: dots, gray: asix });
        planToDraw[planToDraw.length - 1].type = TYPE.PLANE;
    };
    CubeService.prototype.generateExtra = function () {
        var graph = this.generateGraph(this._queue.edge_num);
        var planToDraw = new Array();
        var work_plane = this.getWorkPlane(this._queue.edge_num, graph, planToDraw);
        this.dfsAndDraw(work_plane, graph, planToDraw);
        var selectionDots = [];
        for (var _i = 0, _a = this.arr; _i < _a.length; _i++) {
            var dot = _a[_i];
            if (this.onEdgeCube(dot)) {
                selectionDots.push(dot);
            }
        }
        return { plan: planToDraw, dots: selectionDots };
    };
    CubeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CubeService);
    return CubeService;
}());

/*
class THREE.Vector3 {
  x: number;
  y: number;
  z: number;
  constructor(_x: number, _y: number, _z: number) {
    this.x = _x;
    this.y = _y;
    this.z = _z;
  }
  getThree() {
    return new THREE.Vector3(this.x, this.y, this.z);
  }
}*/ 


/***/ }),

/***/ "./src/app/tetrahedron.service.ts":
/*!****************************************!*\
  !*** ./src/app/tetrahedron.service.ts ***!
  \****************************************/
/*! exports provided: WAY, TYPE, TetrahedronService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WAY", function() { return WAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE", function() { return TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TetrahedronService", function() { return TetrahedronService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



var WAY;
(function (WAY) {
    WAY[WAY["DRAW_SIMPLE"] = 0] = "DRAW_SIMPLE";
    WAY[WAY["DRAW_HARD"] = 1] = "DRAW_HARD";
    WAY[WAY["Clear"] = 2] = "Clear";
    WAY[WAY["WAIT"] = 3] = "WAIT";
})(WAY || (WAY = {}));
var TYPE;
(function (TYPE) {
    TYPE[TYPE["LINES"] = 1] = "LINES";
    TYPE[TYPE["PLANE"] = 2] = "PLANE";
})(TYPE || (TYPE = {}));
var TetrahedronService = /** @class */ (function () {
    function TetrahedronService() {
        this.side = 100;
        this.a = 200 / Math.sqrt(3);
        this.EPS = 0.001;
        this.indices = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
        var a = this.a;
        this.vertices = [0.0, Math.sqrt(3) * a / 3, 0.0,
            a / 2, 0.0, -Math.sqrt(3) * a / 6,
            -a / 2, 0.0, -Math.sqrt(3) * a / 6,
            0.0, 0.0, Math.sqrt(3) * a / 3];
        this.edges = [{ vert1: 2, vert2: 3, plane: [1, 3] },
            { vert1: 0, vert2: 2, plane: [0, 1] },
            { vert1: 0, vert2: 3, plane: [1, 2] },
            { vert1: 1, vert2: 2, plane: [0, 3] },
            { vert1: 0, vert2: 1, plane: [0, 2] },
            { vert1: 3, vert2: 1, plane: [2, 3] }]; //5
        this._stack = { data: [], drawed: false };
    }
    TetrahedronService.prototype.getDot = function (i) {
        if (i >= this._stack.data.length) {
            console.error("Try to get don't exist dot.");
        }
        return this._stack.data[i];
    };
    Object.defineProperty(TetrahedronService.prototype, "stack", {
        get: function () {
            return this._stack.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TetrahedronService.prototype, "drawed", {
        get: function () {
            return this._stack.drawed;
        },
        set: function (i) {
            this._stack.drawed = i;
        },
        enumerable: true,
        configurable: true
    });
    TetrahedronService.prototype.getBuildPlane = function () {
        if (this._stack.data.length === 3) {
            if (this.isTreeDotsOnCommonStraight(this.stack[0], this.stack[1], this.stack[2])) {
                //alert("Все три точки находятся на одной прямой.");
                this._stack.data.shift();
                return WAY.Clear;
            }
            /*
              основные вычисления для получения координат точек
            */
            var a = this.partExpA(this.stack[0], this.stack[1], this.stack[2]), b = this.partExpB(this.stack[0], this.stack[1], this.stack[2]), c = this.partExpC(this.stack[0], this.stack[1], this.stack[2]), d = this.partExpD(this.stack[0], this.stack[1], this.stack[2]);
            var i = 0;
            this.arr = [];
            this.arr_on = new Array();
            for (var _i = 0, _b = this.edges; _i < _b.length; _i++) {
                var edge = _b[_i];
                var numerator = this.Numerator(a, b, c, d, this.getVertCoord(edge.vert1));
                var denominator = this.Denominator(a, b, c, d, this.getVertCoord(edge.vert1), this.getVertCoord(edge.vert2));
                if (Math.abs(denominator) < this.EPS * 10) {
                    if (Math.abs(numerator) < this.EPS) {
                        console.log("line in plane");
                    }
                    else {
                        console.log("||");
                    }
                    this.arr.push(null);
                    this.arr_on.push(false);
                }
                else {
                    var l = numerator / denominator;
                    var v = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.getCoord(this.getVertX(edge.vert1), this.getVertX(edge.vert2), l), this.getCoord(this.getVertY(edge.vert1), this.getVertY(edge.vert2), l), this.getCoord(this.getVertZ(edge.vert1), this.getVertZ(edge.vert2), l));
                    this.arr.push(v);
                    this.arr_on.push(this.onEdge(this.getVertCoord(edge.vert1), this.getVertCoord(edge.vert2), v));
                    if (this.arr_on[this.arr_on.length - 1]) {
                        i++;
                    }
                }
            }
            this._stack.drawed = true;
            this.listOfHasPlanes = new Set();
            for (var j = 0; j < this.stack.length; j++) {
                this.listOfHasPlanes.add(this.getNumPlaneForBaseDot(this.stack[j]));
            }
            if (i === 3) {
                if (this.listOfHasPlanes.size < this.stack.length) {
                    return WAY.DRAW_SIMPLE;
                }
            }
            return WAY.DRAW_HARD;
        }
        return WAY.WAIT;
    };
    TetrahedronService.prototype.Numerator = function (a, b, c, d, dot1) {
        return (-d - a * dot1.x - b * dot1.y - c * dot1.z);
    };
    TetrahedronService.prototype.Denominator = function (a, b, c, d, dot1, dot2) {
        return a * (dot2.x - dot1.x) + b * (dot2.y - dot1.y) + c * (dot2.z - dot1.z);
    };
    TetrahedronService.prototype.partExpA = function (d0, d1, d2) {
        return (d1.y - d0.y) * (d2.z - d0.z) - (d2.y - d0.y) * (d1.z - d0.z);
    };
    TetrahedronService.prototype.partExpB = function (d0, d1, d2) {
        return -(d1.x - d0.x) * (d2.z - d0.z) + (d2.x - d0.x) * (d1.z - d0.z);
    };
    TetrahedronService.prototype.partExpC = function (d0, d1, d2) {
        return (d1.x - d0.x) * (d2.y - d0.y) - (d2.x - d0.x) * (d1.y - d0.y);
    };
    TetrahedronService.prototype.partExpD = function (d0, d1, d2) {
        return -d0.x * this.partExpA(d0, d1, d2) - d0.y * this.partExpB(d0, d1, d2) - d0.z * this.partExpC(d0, d1, d2);
    };
    TetrahedronService.prototype.getCoord = function (x1, x2, a) {
        return x1 + (x2 - x1) * a;
    }; /*
    private twoOutOfThree(f: boolean, s: boolean, t: boolean): boolean {
      return (f && s) || (s && t) || (t && f);
    }*/
    TetrahedronService.prototype.getNumPlaneForBaseDot = function (dot) {
        for (var i = 0; i < 4; i++) {
            var d1 = this.getVertCoord(this.indices[i * 3]), d2 = this.getVertCoord(this.indices[i * 3 + 1]), d3 = this.getVertCoord(this.indices[i * 3 + 2]);
            var _a = this.partExpA(d1, d2, d3), b = this.partExpB(d1, d2, d3), c = this.partExpC(d1, d2, d3), d = this.partExpD(d1, d2, d3);
            console.log(_a * dot.x + b * dot.y + c * dot.z + d);
            if (_a * dot.x + b * dot.y + c * dot.z + d < 1) {
                return i;
            }
        }
    };
    TetrahedronService.prototype.isTreeDotsOnCommonStraight = function (d1, d2, d3) {
        var l1 = (d2.x - d1.x) === 0 ? null : (d3.x - d1.x) / (d2.x - d1.x), l2 = (d2.y - d1.y) === 0 ? null : (d3.y - d1.y) / (d2.y - d1.y), l3 = (d2.z - d1.z) === 0 ? null : (d3.z - d1.z) / (d2.z - d1.z);
        return (l1 === null && Math.abs(l3 - l2) < this.EPS) ||
            (l2 === null && Math.abs(l1 - l3) < this.EPS) ||
            (l3 === null && Math.abs(l1 - l2) < this.EPS);
    };
    TetrahedronService.prototype.getVertCoord = function (n) {
        return new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.vertices[3 * n], this.vertices[3 * n + 1], this.vertices[3 * n + 2]);
    };
    TetrahedronService.prototype.getVertX = function (n) {
        return this.vertices[3 * n];
    };
    TetrahedronService.prototype.getVertY = function (n) {
        return this.vertices[3 * n + 1];
    };
    TetrahedronService.prototype.getVertZ = function (n) {
        return this.vertices[3 * n + 2];
    };
    TetrahedronService.prototype.getNumsEdgeFromPlane = function (num_plane) {
        switch (num_plane) {
            case 0:
                return [0, 1, 3];
            case 1:
                return [0, 1, 2];
            case 2:
                return [2, 4, 5];
            case 3:
                return [0, 3, 5];
            default:
                console.error('Try to get edge from don\'t exist plane');
                return undefined;
        }
        return undefined;
    };
    TetrahedronService.prototype.onEdge = function (d1, d2, v) {
        /*d3 должен быть между d1 и d2*/
        if (Math.abs(Math.abs(Math.abs(d2.x - v.x) + Math.abs(d1.x - v.x)) - Math.abs(d2.x - d1.x)) < this.EPS) {
            if (Math.abs(Math.abs(Math.abs(d2.y - v.y) + Math.abs(d1.y - v.y)) - Math.abs(d2.y - d1.y)) < this.EPS) {
                if (Math.abs(Math.abs(Math.abs(d2.z - v.z) + Math.abs(d1.z - v.z)) - Math.abs(d2.z - d1.z)) < this.EPS) {
                    return true;
                }
            }
        }
        return false;
    };
    TetrahedronService.prototype.getVertOppositPlane = function (n) {
        switch (n) {
            case 0:
                return 3;
            case 3:
                return 0;
            default:
                return n;
        }
    };
    TetrahedronService.prototype.getDistanse = function (d1, d2) {
        return Math.sqrt(Math.pow(d1.x - d2.x, 2) + Math.pow(d1.y - d2.y, 2) + Math.pow(d1.z - d2.z, 2));
    };
    TetrahedronService.prototype.addExtra = function (dots_under, planToDraw) {
        var _b;
        var _this = this;
        debugger;
        //номер плоскости без точек:
        var n_plane = [0, 1, 2, 3].filter(function (i) {
            return !_this.listOfHasPlanes.has(i);
        })[0];
        var vertex = this.getVertCoord(this.getVertOppositPlane(n_plane));
        var dots = this.getNumsEdgeFromPlane(n_plane).map(function (i) {
            return _this.getVertCoord(_this.edges[i].vert1);
        });
        var a = this.partExpA(dots[0], dots[1], dots[2]), b = this.partExpB(dots[0], dots[1], dots[2]), c = this.partExpC(dots[0], dots[1], dots[2]), d = this.partExpD(dots[0], dots[1], dots[2]);
        var numerator = _this.Numerator(a, b, c, d, vertex);
        //debugger;
        var projection = dots_under.map(function (i) {
            var l = numerator / _this.Denominator(a, b, c, d, vertex, i);
            return new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](_this.getCoord(vertex.x, i.x, l), _this.getCoord(vertex.y, i.y, l), _this.getCoord(vertex.z, i.z, l));
            ;
        });
        var i_min = this.getMinI(dots_under.map(function (el, i) {
            return _this.getDistanse(el, projection[i]);
        }));
        var down = dots_under.slice(i_min, i_min + 1)[0];
        console.log(down);
        var join = new Array();
        for (var i = 0; i < dots_under.length; i++) {
            if (i === i_min) {
                continue;
            }
            var dot_u = dots_under[i];
            numerator = this.Numerator(a, b, c, d, dot_u);
            var denominator = this.Denominator(a, b, c, d, dot_u, down);
            if (denominator === 0) {
                console.error("Straight line parallel to the plane - try another plane"); //!
            }
            else {
                var l = numerator / denominator;
                var v = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](this.getCoord(dot_u.x, down.x, l), this.getCoord(dot_u.y, down.y, l), this.getCoord(dot_u.z, down.z, l));
                join.push(v);
                //рисуем линии
                var collect = new Array();
                //верхняя
                collect.push([dot_u, v]);
                //нижняя
                collect.push([projection[i], v]);
                //вертикали
                collect.push([projection[i], vertex]);
                //выводим данные
                planToDraw.push(collect);
                planToDraw[planToDraw.length - 1].type = TYPE.LINES;
            }
        }
        var t = this.addStraightOnPlain(n_plane);
        (_b = t.black).push.apply(_b, join);
        planToDraw.push(t);
        return n_plane;
    };
    TetrahedronService.prototype.addStraightOnPlain = function (num_plane) {
        var _this = this;
        var dots_i = this.getNumsEdgeFromPlane(num_plane).filter(function (i) {
            return _this.arr[i] != null;
        });
        var dots = dots_i.map(function (i) {
            return _this.arr[i];
        });
        var asix = dots_i.map(function (i) {
            return _this.getVertCoord(_this.edges[i].vert1);
        });
        return { black: dots, gray: asix, type: TYPE.PLANE };
    };
    TetrahedronService.prototype.generatePlan = function (plan) {
        var _b;
        var planToDraw = new Array();
        var drawed_plane = -1;
        if (plan === WAY.DRAW_HARD) {
            drawed_plane = this.addExtra(this.stack, planToDraw);
        }
        var sub_plan = { black: new Array(), gray: new Array(), type: TYPE.PLANE };
        for (var p = 0; p < 4; p++) {
            if (p === drawed_plane) {
                continue;
            }
            (_b = sub_plan.black).push.apply(_b, this.addStraightOnPlain(p).black);
        }
        planToDraw.push(sub_plan);
        var selectionDots = new Array();
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr_on[i]) {
                selectionDots.push(this.arr[i]);
            }
        }
        return { plan: planToDraw, dots: selectionDots };
    };
    TetrahedronService.prototype.getMinI = function (arr) {
        var min = Math.min.apply(null, arr);
        return arr.indexOf(min);
    };
    TetrahedronService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TetrahedronService);
    return TetrahedronService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Documents/mathvisualapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map