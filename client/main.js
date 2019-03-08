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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" style=\"height: auto; min-height: 100%;\">\r\n  <!-- Main Header -->\r\n<app-header></app-header>\r\n<!-- Left side column. contains the logo and sidebar -->\r\n<app-menu></app-menu>\r\n<!-- Content Wrapper. Contains page content -->\r\n<app-content></app-content>\r\n<!-- /.content-wrapper -->\r\n<!-- Main Footer -->\r\n<app-footer></app-footer>\r\n<!-- Control Sidebar -->\r\n<app-sidebar></app-sidebar>\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'stock';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _stock_stock_manage_stock_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stock/stock-manage/stock-manage.component */ "./src/app/stock/stock-manage/stock-manage.component.ts");
/* harmony import */ var _stars_stars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stars/stars.component */ "./src/app/stars/stars.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _stock_stock_form_stock_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stock/stock-form/stock-form.component */ "./src/app/stock/stock-form/stock-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _stock_stock_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stock/stock-filter.pipe */ "./src/app/stock/stock-filter.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { Http } from '@angular/http';

var routeConfig = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"] },
    { path: 'stock', component: _stock_stock_manage_stock_manage_component__WEBPACK_IMPORTED_MODULE_9__["StockManageComponent"] },
    { path: 'stock/:id', component: _stock_stock_form_stock_form_component__WEBPACK_IMPORTED_MODULE_13__["StockFormComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"],
                _stock_stock_manage_stock_manage_component__WEBPACK_IMPORTED_MODULE_9__["StockManageComponent"],
                _stars_stars_component__WEBPACK_IMPORTED_MODULE_10__["StarsComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _stock_stock_form_stock_form_component__WEBPACK_IMPORTED_MODULE_13__["StockFormComponent"],
                _stock_stock_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["StockFilterPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routeConfig),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"min-height: 524px;\">\r\n  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      {{pageTitle}}\r\n      <!-- <small>manage and customize your stock information.</small> -->\r\n      <small>{{pageDesc}}</small>\r\n    </h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\r\n      <li class=\"active\">Here</li>\r\n    </ol>\r\n  </section>\r\n  <!-- Main content -->\r\n  <section class=\"content container-fluid\">\r\n    <router-outlet></router-outlet>\r\n    <!-- <app-stock-manage></app-stock-manage> -->\r\n  </section>\r\n  <!-- /.content -->\r\n</div>"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = /** @class */ (function () {
    function ContentComponent(router) {
        var _this = this;
        this.router = router;
        this.pageTitle = '';
        this.pageDesc = '';
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (event) {
            if (event.url === '/dashboard') {
                _this.pageTitle = 'This is home page';
                _this.pageDesc = '';
            }
            else if (event.url.startsWith('/stock')) {
                _this.pageTitle = 'Stock Information Management.';
                _this.pageDesc = 'Manage and customize your stock information.';
            }
        });
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\r\n  <!-- To the right -->\r\n  <div class=\"pull-right hidden-xs\">\r\n    Anything you want\r\n  </div>\r\n  <!-- Default to the left -->\r\n  <strong>Copyright © 2016 <a href=\"#\">Company</a>.</strong> All rights reserved.\r\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <header class=\"main-header\">\r\n    <!-- Logo -->\r\n    <a href=\"index2.html\" class=\"logo\">\r\n      <!-- mini logo for sidebar mini 50x50 pixels -->\r\n      <span class=\"logo-mini\"><b>A</b>LT</span>\r\n      <!-- logo for regular state and mobile devices -->\r\n      <span class=\"logo-lg\"><b>Admin</b>LTE</span>\r\n    </a>\r\n\r\n    <!-- Header Navbar -->\r\n    <nav class=\"navbar navbar-static-top\" role=\"navigation\">\r\n      <!-- Sidebar toggle button-->\r\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n      </a>\r\n      <!-- Navbar Right Menu -->\r\n      <div class=\"navbar-custom-menu\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <!-- Messages: style can be found in dropdown.less-->\r\n          <li class=\"dropdown messages-menu\">\r\n            <!-- Menu toggle button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-envelope-o\"></i>\r\n              <span class=\"label label-success\">{{messageCount}}</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"header\">You have 4 messages</li>\r\n              <li>\r\n                <!-- inner menu: contains the messages -->\r\n                <ul class=\"menu\">\r\n                  <li><!-- start message -->\r\n                    <a href=\"#\">\r\n                      <div class=\"pull-left\">\r\n                        <!-- User Image -->\r\n                        <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n                      </div>\r\n                      <!-- Message title and timestamp -->\r\n                      <h4>\r\n                        Support Team\r\n                        <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\r\n                      </h4>\r\n                      <!-- The message -->\r\n                      <p>Why not buy a new awesome theme?</p>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end message -->\r\n                </ul>\r\n                <!-- /.menu -->\r\n              </li>\r\n              <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\r\n            </ul>\r\n          </li>\r\n          <!-- /.messages-menu -->\r\n\r\n          <!-- Notifications Menu -->\r\n          <li class=\"dropdown notifications-menu\">\r\n            <!-- Menu toggle button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-bell-o\"></i>\r\n              <span class=\"label label-warning\">10</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"header\">You have 10 notifications</li>\r\n              <li>\r\n                <!-- Inner Menu: contains the notifications -->\r\n                <ul class=\"menu\">\r\n                  <li><!-- start notification -->\r\n                    <a href=\"#\">\r\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\r\n                    </a>\r\n                  </li>\r\n                  <!-- end notification -->\r\n                </ul>\r\n              </li>\r\n              <li class=\"footer\"><a href=\"#\">View all</a></li>\r\n            </ul>\r\n          </li>\r\n          <!-- Tasks Menu -->\r\n          <li class=\"dropdown tasks-menu\">\r\n            <!-- Menu Toggle Button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <i class=\"fa fa-flag-o\"></i>\r\n              <span class=\"label label-danger\">9</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li class=\"header\">You have 9 tasks</li>\r\n              <li>\r\n                <!-- Inner menu: contains the tasks -->\r\n                <ul class=\"menu\">\r\n                  <li><!-- Task item -->\r\n                    <a href=\"#\">\r\n                      <!-- Task title and progress text -->\r\n                      <h3>\r\n                        Design some buttons\r\n                        <small class=\"pull-right\">20%</small>\r\n                      </h3>\r\n                      <!-- The progress bar -->\r\n                      <div class=\"progress xs\">\r\n                        <!-- Change the css width attribute to simulate progress -->\r\n                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                          <span class=\"sr-only\">20% Complete</span>\r\n                        </div>\r\n                      </div>\r\n                    </a>\r\n                  </li>\r\n                  <!-- end task item -->\r\n                </ul>\r\n              </li>\r\n              <li class=\"footer\">\r\n                <a href=\"#\">View all tasks</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- User Account Menu -->\r\n          <li class=\"dropdown user user-menu\">\r\n            <!-- Menu Toggle Button -->\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n              <!-- The user image in the navbar-->\r\n              <img src=\"assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\r\n              <!-- hidden-xs hides the username on small devices so only the image appears. -->\r\n              <span class=\"hidden-xs\">Alexander Pierce</span>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <!-- The user image in the menu -->\r\n              <li class=\"user-header\">\r\n                <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n\r\n                <p>\r\n                  Alexander Pierce - Web Developer\r\n                  <small>Member since Nov. 2012</small>\r\n                </p>\r\n              </li>\r\n              <!-- Menu Body -->\r\n              <li class=\"user-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-xs-4 text-center\">\r\n                    <a href=\"#\">Followers</a>\r\n                  </div>\r\n                  <div class=\"col-xs-4 text-center\">\r\n                    <a href=\"#\">Sales</a>\r\n                  </div>\r\n                  <div class=\"col-xs-4 text-center\">\r\n                    <a href=\"#\">Friends</a>\r\n                  </div>\r\n                </div>\r\n                <!-- /.row -->\r\n              </li>\r\n              <!-- Menu Footer-->\r\n              <li class=\"user-footer\">\r\n                <div class=\"pull-left\">\r\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\r\n                </div>\r\n                <div class=\"pull-right\">\r\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <!-- Control Sidebar Toggle Button -->\r\n          <li>\r\n            <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_web_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/web-socket.service */ "./src/app/shared/web-socket.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(socketService) {
        this.socketService = socketService;
        this.messageCount = 0;
        this.socketUrl = 'ws://localhost:9091';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.createObservableSocket(this.socketUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) { return JSON.parse(event); })).subscribe(function (event) { return _this.messageCount = event.messageCount; });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_web_socket_service__WEBPACK_IMPORTED_MODULE_1__["WebSocketService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\r\n\r\n  <!-- sidebar: style can be found in sidebar.less -->\r\n  <section class=\"sidebar\">\r\n\r\n    <!-- Sidebar user panel (optional) -->\r\n    <div class=\"user-panel\">\r\n      <div class=\"pull-left image\">\r\n        <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n      </div>\r\n      <div class=\"pull-left info\">\r\n        <p>Alexander Pierce</p>\r\n        <!-- Status -->\r\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- search form (Optional) -->\r\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\r\n        <span class=\"input-group-btn\">\r\n            <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\r\n            </button>\r\n          </span>\r\n      </div>\r\n    </form>\r\n    <!-- /.search form -->\r\n\r\n    <!-- Sidebar Menu -->\r\n    <ul class=\"sidebar-menu tree\" data-widget=\"tree\">\r\n      <li class=\"header\">HEADER</li>\r\n      <!-- Optionally, you can add icons to the links -->\r\n      <li *ngFor=\"let menu of menus\" [class.active]=\"currentMenuId === menu.id\"><a href=\"javascript:;\" (click)=\"nav(menu)\"><i class=\"fa fa-link\"></i> <span>{{menu.name}}</span></a></li>\r\n      <!-- <li><a href=\"javascript:;\" (click)=\"nav('/stock')\"><i class=\"fa fa-link\"></i> <span>Stock Management</span></a></li> -->\r\n      <!-- <li class=\"treeview\">\r\n        <a href=\"#\"><i class=\"fa fa-link\"></i> <span>Multilevel</span>\r\n          <span class=\"pull-right-container\">\r\n              <i class=\"fa fa-angle-left pull-right\"></i>\r\n            </span>\r\n        </a>\r\n        <ul class=\"treeview-menu\">\r\n          <li><a href=\"#\">Link in level 2</a></li>\r\n          <li><a href=\"#\">Link in level 2</a></li>\r\n        </ul>\r\n      </li> -->\r\n    </ul>\r\n    <!-- /.sidebar-menu -->\r\n  </section>\r\n  <!-- /.sidebar -->\r\n</aside>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/app/menu/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menus = [
            new _menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](1, 'Home', 'dashboard'),
            new _menu__WEBPACK_IMPORTED_MODULE_2__["Menu"](2, 'Stock Management', 'stock'),
        ];
    };
    MenuComponent.prototype.nav = function (menu) {
        this.router.navigateByUrl(menu.link);
        this.currentMenuId = menu.id;
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.ts":
/*!******************************!*\
  !*** ./src/app/menu/menu.ts ***!
  \******************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu(id, name, link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
    return Menu;
}());



/***/ }),

/***/ "./src/app/shared/web-socket.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/web-socket.service.ts ***!
  \**********************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.createObservableSocket = function (url) {
        var _this = this;
        this.ws = new WebSocket(url);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.ws.onmessage = function (event) { return observer.next(event.data); };
            _this.ws.onerror = function (event) { return observer.error(event); };
            _this.ws.onclose = function (event) { return observer.complete(); };
        });
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\r\n  <!-- Create the tabs -->\r\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n    <li class=\"active\"><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\r\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\r\n  </ul>\r\n  <!-- Tab panes -->\r\n  <div class=\"tab-content\">\r\n    <!-- Home tab content -->\r\n    <div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\r\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n      <ul class=\"control-sidebar-menu\">\r\n        <li>\r\n          <a href=\"javascript:;\">\r\n            <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n            <div class=\"menu-info\">\r\n              <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n              <p>Will be 23 on April 24th</p>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <!-- /.control-sidebar-menu -->\r\n\r\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n      <ul class=\"control-sidebar-menu\">\r\n        <li>\r\n          <a href=\"javascript:;\">\r\n            <h4 class=\"control-sidebar-subheading\">\r\n              Custom Template Design\r\n              <span class=\"pull-right-container\">\r\n                  <span class=\"label label-danger pull-right\">70%</span>\r\n                </span>\r\n            </h4>\r\n\r\n            <div class=\"progress progress-xxs\">\r\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <!-- /.control-sidebar-menu -->\r\n\r\n    </div>\r\n    <!-- /.tab-pane -->\r\n    <!-- Stats tab content -->\r\n    <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\r\n    <!-- /.tab-pane -->\r\n    <!-- Settings tab content -->\r\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n      <form method=\"post\">\r\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n        <div class=\"form-group\">\r\n          <label class=\"control-sidebar-subheading\">\r\n            Report panel usage\r\n            <input type=\"checkbox\" class=\"pull-right\" checked=\"\">\r\n          </label>\r\n\r\n          <p>\r\n            Some information about this general settings option\r\n          </p>\r\n        </div>\r\n        <!-- /.form-group -->\r\n      </form>\r\n    </div>\r\n    <!-- /.tab-pane -->\r\n  </div>\r\n</aside>\r\n<!-- /.control-sidebar -->\r\n<!-- Add the sidebar's background. This div must be placed\r\nimmediately after the control sidebar -->\r\n<div class=\"control-sidebar-bg\"></div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/stars/stars.component.css":
/*!*******************************************!*\
  !*** ./src/app/stars/stars.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJzL3N0YXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/stars/stars.component.html":
/*!********************************************!*\
  !*** ./src/app/stars/stars.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let star of stars; let i = index;\"\r\nclass=\"glyphicon glyphicon-star glyphicon-star\"\r\n[class.glyphicon-star-empty]=\"star\"\r\n(click)=\"clickStar(i)\">\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/stars/stars.component.ts":
/*!******************************************!*\
  !*** ./src/app/stars/stars.component.ts ***!
  \******************************************/
/*! exports provided: StarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsComponent", function() { return StarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.rating = 0;
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.readonly = true;
    }
    StarsComponent.prototype.ngOnInit = function () {
    };
    StarsComponent.prototype.ngOnChanges = function (changes) {
        this.stars = [];
        for (var i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    };
    StarsComponent.prototype.clickStar = function (index) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StarsComponent.prototype, "rating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StarsComponent.prototype, "ratingChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StarsComponent.prototype, "readonly", void 0);
    StarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stars',
            template: __webpack_require__(/*! ./stars.component.html */ "./src/app/stars/stars.component.html"),
            styles: [__webpack_require__(/*! ./stars.component.css */ "./src/app/stars/stars.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StarsComponent);
    return StarsComponent;
}());



/***/ }),

/***/ "./src/app/stock/stock-filter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/stock/stock-filter.pipe.ts ***!
  \********************************************/
/*! exports provided: StockFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockFilterPipe", function() { return StockFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StockFilterPipe = /** @class */ (function () {
    function StockFilterPipe() {
    }
    StockFilterPipe.prototype.transform = function (list, field, keyword) {
        if (!field || !keyword) {
            return list;
        }
        return list.filter(function (item) {
            var itemFieldValue = item[field].toLowerCase();
            return itemFieldValue.indexOf(keyword) >= 0;
        });
    };
    StockFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'stockFilter'
        })
    ], StockFilterPipe);
    return StockFilterPipe;
}());



/***/ }),

/***/ "./src/app/stock/stock-form/stock-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/stock/stock-form/stock-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL3N0b2NrLWZvcm0vc3RvY2stZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/stock/stock-form/stock-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/stock/stock-form/stock-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">\r\n    <div class=\"box-header with-border\">\r\n      <h3 class=\"box-title\">Stock Information</h3>\r\n    </div>\r\n    <!-- /.box-header -->\r\n    <!-- form start -->\r\n    <form [formGroup]=\"formModel\" class=\"form-horizontal\">\r\n      <div class=\"box-body\">\r\n        <div class=\"form-group\" \r\n        [class.has-error]=\"formModel.get('name').touched && (formModel.hasError('minlength', 'name') || \r\n        formModel.hasError('required', 'name'))\">\r\n          <label for=\"name\" class=\"col-sm-2 control-label\">Stock Name</label>\r\n          <div class=\"col-sm-6\">\r\n            <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Stock Name\">\r\n          </div>\r\n          <span class=\"help-block\" [class.hidden]=\"formModel.get('name').untouched || !formModel.hasError('required', 'name')\">\r\n                Stock name is required!\r\n          </span>\r\n          <span class=\"help-block\" [class.hidden]=\"formModel.get('name').untouched || !formModel.hasError('minlength', 'name')\">\r\n                Please enter at least 3 characters!\r\n         </span>\r\n        </div>\r\n        <div class=\"form-group\" [class.has-error]=\"formModel.hasError('required', 'price')\">\r\n          <label for=\"price\" class=\"col-sm-2 control-label\">Stock Price</label>\r\n          <div class=\"col-sm-6\">\r\n            <input formControlName=\"price\" type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Stock Price\">\r\n          </div>\r\n          <span class=\"help-block\" [class.hidden]=\"!formModel.hasError('required', 'price')\">\r\n                Stock price is required!\r\n          </span>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">Stock Rating</label>\r\n            <div class=\"col-sm-6\">\r\n                <!-- one way binding: -->\r\n                <!-- <app-stars [rating]=\"stock?.rating\" [readonly]=\"false\"></app-stars> -->\r\n                <!-- two way binding: -->\r\n                <app-stars [(rating)]=\"stock.rating\" [readonly]=\"false\"></app-stars>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-sm-2 control-label\">Stock Description</label>\r\n            <div class=\"col-sm-6\">\r\n                <!-- before the form control -->\r\n                <!-- <textarea  class=\"form-control\" rows=\"5\">{{stock.desc}}</textarea> -->\r\n                <textarea formControlName=\"desc\" class=\"form-control\" rows=\"5\"></textarea>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\" [class.has-error]=\"formModel.get('categories').touched && formModel.hasError('categoriesLength', 'categories')\">\r\n            <label class=\"col-sm-2 control-label\">Stock Catagories</label>\r\n            <div class=\"col-sm-10\">\r\n               <div class=\"row\" formArrayName=\"categories\">\r\n                    <div class=\"col-sm-2\" *ngFor=\"let category of categories; let i=index\">\r\n                        <div class=\"checkbox\">\r\n                            <label>\r\n                                <!-- this formControlName is bind to a variable (category), so needs [] -->\r\n                                <input [formControlName]=\"i\" type=\"checkbox\"> {{category}}\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                <span class=\"help-block\" [class.hidden]=\"formModel.get('categories').untouched || !formModel.hasError('categoriesLength', 'categories')\">\r\n                    Please choose at least one catagory!\r\n                </span>\r\n               </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <!-- /.box-body -->\r\n      <div class=\"box-footer\">\r\n        <button (click)=\"cancel()\" type=\"submit\" class=\"btn btn-default\">Cancel</button>\r\n        <button (click)=\"save()\" [disabled]=\"formModel.invalid\" type=\"submit\" class=\"btn btn-info pull-right\">Save</button>\r\n      </div>\r\n      <!-- /.box-footer -->\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/stock/stock-form/stock-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/stock/stock-form/stock-form.component.ts ***!
  \**********************************************************/
/*! exports provided: StockFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockFormComponent", function() { return StockFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stock */ "./src/app/stock/stock.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stock.service */ "./src/app/stock/stock.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockFormComponent = /** @class */ (function () {
    function StockFormComponent(routeInfo, stockService, router) {
        this.routeInfo = routeInfo;
        this.stockService = stockService;
        this.router = router;
        this.categories = ['IT', 'Network', 'Finance'];
        // for demo:
        // stock: Stock;
        // because stock is aysnc, here need to init stock:
        this.stock = new _stock__WEBPACK_IMPORTED_MODULE_1__["Stock"](0, '', 0, 0, '', []);
    }
    StockFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var stockId = +this.routeInfo.snapshot.params['id'];
        var fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]();
        // for demo only:
        // this.formModel = fb.group(
        //   {
        //     name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
        //     price: [this.stock.price, [Validators.required]],
        //     desc: [this.stock.desc],
        //     categories: fb.array([
        //       [(this.stock.categories.indexOf(this.categories[0]) !== -1)],
        //       [(this.stock.categories.indexOf(this.categories[1]) !== -1)],
        //       [(this.stock.categories.indexOf(this.categories[2]) !== -1)]
        //     ], this.categoriesSelectValidator)
        //   }
        // );
        this.formModel = fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            desc: [''],
            categories: fb.array([
                [false],
                [false],
                [false]
            ], this.categoriesSelectValidator)
        });
        // for demo:
        // this.stock = this.stockService.getStock(stockId);
        this.stockService.getStock(stockId).subscribe(function (data) {
            _this.stock = data;
            // because data is async, here need to reset formModel
            _this.formModel.reset({
                name: data.name,
                price: data.price,
                desc: data.desc,
                categories: [
                    [(data.categories.indexOf(_this.categories[0]) !== -1)],
                    [(data.categories.indexOf(_this.categories[1]) !== -1)],
                    [(data.categories.indexOf(_this.categories[2]) !== -1)]
                ]
            });
        });
    };
    StockFormComponent.prototype.categoriesSelectValidator = function (control) {
        var valid = false;
        control.controls.forEach(function (control) {
            if (control.value) {
                valid = true;
            }
        });
        if (valid) {
            return null;
        }
        else {
            return { categoriesLength: true };
        }
    };
    StockFormComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/stock');
    };
    StockFormComponent.prototype.save = function () {
        // console.log(this.stock.rating);
        // this.router.navigateByUrl('/stock');
        var englishCategories = [];
        var index = 0;
        for (var i = 0; i < 3; i++) {
            if (this.formModel.value.categories[i]) {
                englishCategories[index++] = this.categories[i];
            }
        }
        this.formModel.value.categories = englishCategories;
        this.formModel.value.rating = this.stock.rating;
        console.log(this.formModel.value);
    };
    StockFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-form',
            template: __webpack_require__(/*! ./stock-form.component.html */ "./src/app/stock/stock-form/stock-form.component.html"),
            styles: [__webpack_require__(/*! ./stock-form.component.css */ "./src/app/stock/stock-form/stock-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _stock_service__WEBPACK_IMPORTED_MODULE_3__["StockService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StockFormComponent);
    return StockFormComponent;
}());



/***/ }),

/***/ "./src/app/stock/stock-manage/stock-manage.component.css":
/*!***************************************************************!*\
  !*** ./src/app/stock/stock-manage/stock-manage.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrL3N0b2NrLW1hbmFnZS9zdG9jay1tYW5hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/stock/stock-manage/stock-manage.component.html":
/*!****************************************************************!*\
  !*** ./src/app/stock/stock-manage/stock-manage.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <div class=\"box-header with-border\">\r\n    <a class=\"btn btn-success btn-sm\" (click)=\"create()\">\r\n      <span class=\"glyphicon glyphicon-plus\"></span>\r\n      Create\r\n    </a>\r\n    <div class=\"box-tools\">\r\n        <div class=\"input-group input-group-sm\" style=\"width: 150px; margin-top:7px;\">\r\n          <input [formControl]=\"nameFilter\" type=\"text\" name=\"table_search\" class=\"form-control pull-right\" placeholder=\"Stock Name\">\r\n\r\n          <div class=\"input-group-btn\">\r\n            <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <!-- /.box-header -->\r\n  <div class=\"box-body\">\r\n    <table class=\"table table-bordered\">\r\n      <tbody>\r\n      <tr>\r\n        <th style=\"width: 10px\">#</th>\r\n        <th>Stock Name</th>\r\n        <th>Stock Price</th>\r\n        <th>Stock Rate</th>\r\n        <th>Operation</th>\r\n      </tr>\r\n      <tr *ngFor=\"let stock of stocks |async|stockFilter:'name':keyword; let i = index;\">\r\n        <td>{{i + 1}}</td>\r\n        <td>{{stock.name}}</td>\r\n        <td>{{stock.price}}</td>\r\n        <td><app-stars [rating]=\"stock.rating\"></app-stars></td>\r\n        <td>\r\n          <a class=\"btn btn-warning btn-xs\" \r\n          style=\"margin-right:5px;\" (click)=\"update(stock)\">\r\n          <span class=\"glyphicon glyphicon-pencil\" ></span>\r\n          Edit\r\n          </a>\r\n          <a class=\"btn btn-danger btn-xs\">\r\n            <span class=\"glyphicon glyphicon-remove\"></span>\r\n            Delete\r\n          </a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>\r\n  <!-- /.box-body -->\r\n  <div class=\"box-footer clearfix\">\r\n    <ul class=\"pagination pagination-sm no-margin pull-right\">\r\n      <li><a href=\"#\">«</a></li>\r\n      <li><a href=\"#\">1</a></li>\r\n      <li><a href=\"#\">2</a></li>\r\n      <li><a href=\"#\">3</a></li>\r\n      <li><a href=\"#\">»</a></li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/stock/stock-manage/stock-manage.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/stock/stock-manage/stock-manage.component.ts ***!
  \**************************************************************/
/*! exports provided: StockManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockManageComponent", function() { return StockManageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stock.service */ "./src/app/stock/stock.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockManageComponent = /** @class */ (function () {
    function StockManageComponent(router, stockService) {
        this.router = router;
        this.stockService = stockService;
        this.nameFilter = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
    }
    StockManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stocks = this.stockService.getStocks();
        this.nameFilter.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300)).subscribe(function (value) { return _this.keyword = value; });
    };
    StockManageComponent.prototype.create = function () {
        this.router.navigateByUrl('/stock/0');
    };
    StockManageComponent.prototype.update = function (stock) {
        this.router.navigateByUrl("/stock/" + stock.id);
    };
    StockManageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-manage',
            template: __webpack_require__(/*! ./stock-manage.component.html */ "./src/app/stock/stock-manage/stock-manage.component.html"),
            styles: [__webpack_require__(/*! ./stock-manage.component.css */ "./src/app/stock/stock-manage/stock-manage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"]])
    ], StockManageComponent);
    return StockManageComponent;
}());



/***/ }),

/***/ "./src/app/stock/stock.service.ts":
/*!****************************************!*\
  !*** ./src/app/stock/stock.service.ts ***!
  \****************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StockService = /** @class */ (function () {
    function StockService(http) {
        this.http = http;
        this.baseUrl = 'api/stock';
    }
    // for v4:
    // constructor(
    //   private http: Http
    // ) { }
    // for demo data:
    // getStocks(): Stock[] {
    //   return this.stocks;
    // }
    // for v4:
    // getStocks(): Observable<Array<Stock>> {
    //   return this.http.get(this.baseUrl).map(res => res.json());
    // }
    StockService.prototype.getStocks = function () {
        return this.http.get(this.baseUrl);
    };
    // for demo data:
    // getStock(id: number): Stock {
    //   let stock = this.stocks.find(st => st.id === id);
    //   if (!stock) {
    //     stock = new Stock(0, '', 0, 0, '', []);
    //   }
    //   return stock;
    // }
    // for V4:
    // getStock(id: number): Observable<Stock> {
    //   return this.http.get(`${this.baseUrl}/${id}`).map(
    //     res => res.json();
    // );
    StockService.prototype.getStock = function (id) {
        var url = this.baseUrl + "/" + id;
        return this.http.get(url);
    };
    StockService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StockService);
    return StockService;
}());



/***/ }),

/***/ "./src/app/stock/stock.ts":
/*!********************************!*\
  !*** ./src/app/stock/stock.ts ***!
  \********************************/
/*! exports provided: Stock, stocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stock", function() { return Stock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stocks", function() { return stocks; });
var Stock = /** @class */ (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());

var stocks = [
    new Stock(1, 'first stock', 1.99, 3.5, 'This is the first stock', ['IT', 'Internet']),
    new Stock(2, 'second stock', 2.99, 3.5, 'This is the second stock', ['Finance']),
    new Stock(3, 'third stock', 3.99, 2.5, 'This is the third stock', ['IT']),
    new Stock(4, 'fourth stock', 4.99, 4.5, 'This is the forth stock', ['Internet']),
    new Stock(5, 'fifth stock', 5.99, 5.0, 'This is the fifth stock', ['Finance']),
    new Stock(6, 'sixth stock', 6.99, 2.2, 'This is the sixth stock', ['IT', 'Finance']),
    new Stock(7, 'seventh stock', 7.99, 1.5, 'This is the seveth stock', ['IT', 'Game']),
    new Stock(8, 'eighth stock', 8.99, 4.4, 'This is the eigth stock', ['Network']),
];


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

module.exports = __webpack_require__(/*! D:\Dropbox\javascript\stock_management\stock\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map