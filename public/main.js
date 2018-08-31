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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar><app-navbar></app-navbar></mat-toolbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin-login/admin-login.component */ "./src/app/components/admin-login/admin-login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/update-profile/update-profile.component */ "./src/app/components/update-profile/update-profile.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'adminlogin', component: _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__["AdminLoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'profile/update/:id', component: _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_17__["UpdateProfileComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__["AdminLoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_12__["AdminLoginComponent"],
                _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_17__["UpdateProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_18__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"], _services_admin_service__WEBPACK_IMPORTED_MODULE_20__["AdminService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-login/admin-login.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin-login/admin-login.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nmat-card {\r\n  max-width: 400px;\r\n  margin: 2em auto;\r\n  text-align: center;\r\n}\r\n\r\n.signin-content {\r\n  padding: 60px 1rem;\r\n}\r\n\r\n.full-width-input {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/admin-login/admin-login.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-login/admin-login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-card\">\n<form>\n  <h3>Login</h3>\n  <div class=\"example-container\">\n  <mat-form-field>\n    <input matInput name=\"username\" placeholder=\"name\" [(ngModel)]=\"username\" ngControl=\"username\" required>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" ngControl=\"password\" required [type]=\"hide ? 'password' : 'text'\">\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n  </mat-form-field>\n</div>\n</form>\n<button mat-button color=\"primary\" (click)=\"onLoginSubmit()\" type=\"button\">Submit</button>\n</mat-card>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/admin-login/admin-login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-login/admin-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(authService, toastr, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.hide = true;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateadminUser(user).subscribe(function (data) {
            if (data['success']) {
                _this.authService.storeUserData(data['token'], data['user']);
                _this.toastr.success('Have fun!', 'Login Successful', { timeOut: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.toastr.error(data['msg'], 'Login Failed', { timeOut: 3000 });
                _this.router.navigate(['/adminlogin']);
            }
        });
    };
    AdminLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/components/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/components/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {  \r\n  margin: 20px;  \r\n}  \r\n  \r\n.dashboard-card {  \r\n  position: absolute;  \r\n  top: 15px;  \r\n  left: 15px;  \r\n  right: 15px;  \r\n  bottom: 15px;  \r\n}  \r\n  \r\n.more-button {  \r\n  position: absolute;  \r\n  top: 5px;  \r\n  right: 10px;  \r\n}  \r\n  \r\n.dashboard-card-content {  \r\n  text-align: center;  \r\n}  "

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">  \n  <h1 class=\"mat-h1\">Dashboard</h1>  \n  <mat-grid-list cols=\"2\" rowHeight=\"350px\">  \n    <mat-grid-tile *ngFor=\"let card of cards\" [colspan]=\"card.cols\" [rowspan]=\"card.rows\">  \n      <mat-card class=\"dashboard-card\">  \n        <mat-card-header>  \n          <mat-card-title>  \n            {{card.title}}  \n            <button mat-icon-button class=\"more-button\" [matMenuTriggerFor]=\"menu\" aria-label=\"Toggle menu\">  \n              <mat-icon>more_vert</mat-icon>  \n            </button>  \n            <mat-menu #menu=\"matMenu\" xPosition=\"before\">  \n              <button mat-menu-item>Expand</button>  \n              <button mat-menu-item>Remove</button>  \n            </mat-menu>  \n          </mat-card-title>  \n        </mat-card-header>  \n        <mat-card-content class=\"dashboard-card-content\">  \n          <div>Card Content Here</div>  \n        </mat-card-content>  \n      </mat-card>  \n    </mat-grid-tile>  \n  </mat-grid-list>  \n</div>  \n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
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
        this.cards = [
            { title: 'Card 1', cols: 2, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 2 },
            { title: 'Card 4', cols: 1, rows: 1 }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN Authentication App</h1>\n  <p class=\"lead\">Welcome to our custom MEAN authentication application built from scratch </p>\n  <div>\n    <a class=\"btn btn-primary\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/register']\">Register</a> <a class=\"btn btn-dark\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>Angular-CLI</h3>\n    <p>Angular-CLI to generate components, services and more. Local dev server and easy compilation</p>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <p>Full featured authentication using JSON web tokens. Login and store user data</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nmat-card {\r\n  max-width: 400px;\r\n  margin: 2em auto;\r\n  text-align: center;\r\n}\r\n\r\n.signin-content {\r\n  padding: 60px 1rem;\r\n}\r\n\r\n.full-width-input {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-card\">\n<form>\n  <h3>Login</h3>\n  <div class=\"example-container\">\n  <mat-form-field>\n    <input matInput name=\"username\" placeholder=\"name\" [(ngModel)]=\"username\" ngControl=\"username\" required>\n  </mat-form-field>\n\n  <mat-form-field>\n    <input matInput name=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" ngControl=\"password\" required [type]=\"hide ? 'password' : 'text'\">\n    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n  </mat-form-field>\n</div>\n</form>\n<button mat-button color=\"primary\" (click)=\"onLoginSubmit()\" type=\"button\">Submit</button>\n<div><h5>Don't have an Account?</h5>\n<button mat-button color=\"primary\" [routerLink]=\"['/register']\" type=\"button\">Register Here</button>\n</div>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, toastr, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.hide = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data['success']) {
                _this.authService.storeUserData(data['token'], data['user']);
                _this.toastr.success('Have fun!', 'Login Successful', { timeOut: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.toastr.error(data['msg'], 'Login Failed', { timeOut: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\r\n      flex: 1 1 auto;\r\n      color: green\r\n    }"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n\n<span>\n  <h3>MEAN APP</h3>\n</span>\n<button mat-icon-button [matMenuTriggerFor]=\"menu\">\n  <mat-icon>more_vert</mat-icon>\n</button>\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item [routerLink]=\"['']\">\n    <mat-icon>home</mat-icon>\n    <span>Home</span>\n  </button>\n  <button *ngIf=\"authService.loggedIn()\" mat-menu-item [routerLink]=\"['/dashboard']\">\n    <mat-icon>dialpad</mat-icon>\n    <span>Dashboard</span>\n  </button>\n  <button *ngIf=\"!authService.isAdmin\" mat-menu-item [routerLink]=\"['/profile']\">\n    <mat-icon>person</mat-icon>\n    <span>Profile</span>\n  </button>\n</mat-menu>\n<span class=\"fill-remaining-space\"></span>\n  <button *ngIf=\"!authService.loggedIn()\" mat-button [routerLink]=\"['/register']\"><mat-icon>person_add</mat-icon><span>Register</span></button>\n  <button *ngIf=\"!authService.loggedIn()\" mat-button [routerLink]=\"['/login']\"><mat-icon>input</mat-icon><span>User Login</span></button>\n  <button *ngIf=\"!authService.loggedIn()\" mat-button [routerLink]=\"['/adminlogin']\"><mat-icon>input</mat-icon><span>Admin Login</span></button>\n  <button *ngIf=\"authService.loggedIn()\" mat-button (click)=\"onLogoutClick()\" href=\"#\"><mat-icon>input</mat-icon><span>Logout</span></button>\n</mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, toastr, router) {
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.toastr.success('You are now logged Out!', '', { timeOut: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"user\">\n  <mat-card>\n  <button mat-button color=\"primary\" (click)=\"updateProfile(user._id)\">Update Profile</button>\n  <h2 class=\"page-header\">Welcome {{user.name}}</h2>\n  <ul class = \"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\n    <li class=\"list-group-item\">University: {{user.university}}</li>\n    <li class=\"list-group-item\">Course of Study: {{user.course}}</li>\n    <li class=\"list-group-item\">Career Path: {{user.career}}</li>\n    <li class=\"list-group-item\">Skill Set: {{user.skills}}</li>\n  </ul>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.updateProfile = function (id) {
        this.router.navigate(["/profile/update/" + id]);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\nmat-card {\r\n  max-width: 750px;\r\n  margin: 2em auto;\r\n  text-align: center;\r\n}\r\n\r\n.signin-content {\r\n  padding: 60px 1rem;\r\n}\r\n\r\n.full-width-input {\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <mat-card class=\"mat-card\">\n    <form>\n    <ng-template matStepLabel>Fill out your profile</ng-template>\n    <div class=\"example-container\">\n    <mat-form-field>\n      <input matInput name=\"name\" placeholder=\"Name\" [(ngModel)]=\"name\" ngControl=\"name\" required>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput name=\"username\" placeholder=\"Username\" [(ngModel)]=\"username\" ngControl=\"username\" required>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput name=\"email\" placeholder=\"email\" [(ngModel)]=\"email\" ngControl=\"email\" required>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" ngControl=\"password\" required [type]=\"hide ? 'password' : 'text'\">\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput name=\"confirmPassword\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\" ngControl=\"confirmPassword\" required [type]=\"hide ? 'password' : 'text'\">\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n    </mat-form-field>\n    <div>\n      <button mat-button matStepperNext>Next</button>\n    </div>\n    </div>\n    </form>\n    </mat-card>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <mat-card class=\"mat-card\">\n    <form>\n      <ng-template matStepLabel>Fill out your career details</ng-template>\n      <div class=\"example-container\">\n      <mat-form-field>\n        <mat-select matInput name=\"university\" placeholder=\"University\" [(ngModel)]=\"university\" ngControl=\"university\">\n          <mat-option>None</mat-option>\n          <mat-option *ngFor=\"let uni of universities\" [value]=\"uni.name\">{{uni.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select matInput name=\"course\" placeholder=\"Course\" [(ngModel)]=\"course\" ngControl=\"course\">\n          <mat-option>None</mat-option>\n          <mat-option *ngFor=\"let course of courses\" [value]=\"course.name\">{{course.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select matInput name=\"career\" placeholder=\"Career\"  [(ngModel)]=\"career\" (ngModelChange)='onCareerChange($event)' ngControl=\"career\">\n          <mat-option>None</mat-option>\n          <mat-option *ngFor=\"let career of careers\" [value]=\"career\">{{career.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>  \n      <mat-form-field>\n        <mat-select matInput name=\"skill\" placeholder=\"Skills\" [(ngModel)]=\"skill\" ngControl=\"skill\" multiple>\n          <mat-option *ngFor=\"let skill of skills\" [value]=\"skill.name\">{{skill.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button color=\"primary\" (click)=\"onRegisterSubmit()\" type=\"button\">Submit</button>\n      </div>\n      </div>\n    </form>\n    </mat-card>\n  </mat-step>\n</mat-horizontal-stepper>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, authService, adminService, toastr, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.adminService = adminService;
        this.toastr = toastr;
        this.router = router;
        this.isLinear = false;
        this.hide = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getUniversities().subscribe(function (res) {
            _this.universities = res;
        });
        this.adminService.getCourses().subscribe(function (res) {
            _this.courses = res;
        });
        this.adminService.getCareers().subscribe(function (res) {
            _this.careers = res;
        });
    };
    RegisterComponent.prototype.onCareerChange = function (career) {
        console.log(career);
        // this.adminService.getSkills(career._id). subscribe( res => {
        //     this.skills = res
        //   })
        this.skills = career.skills;
        this.career = career.name;
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            confirmPassword: this.confirmPassword,
            university: this.university,
            course: this.course,
            career: this.career,
            skills: this.skill
        };
        //Unique fields
        if (!this.validateService.validateRegister(user)) {
            this.toastr.error('Please fill all the compulsory fields', 'Form Error', { timeOut: 3000 });
            return false;
        }
        //Password Validation
        if (!this.validateService.validatePassword(user)) {
            this.toastr.error('Password Mismatch', 'Form Error', { timeOut: 3000 });
            return false;
        }
        // Validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.toastr.error('Please use a valid email', 'Form Error', { timeOut: 3000 });
            return false;
        }
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data['success']) {
                _this.toastr.success('You can now login!', 'Registered Successfully', { timeOut: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.toastr.error('Username already taken', 'Registration Failed', { timeOut: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/update-profile/update-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/update-profile/update-profile.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-form{\r\n    min-width: 150px;\r\n    width: 100%\r\n}\r\n\r\n.field-full-width{\r\n    width:100%\r\n}\r\n\r\n.mat-card {\r\n    width: 70%\r\n}\r\n\r\n\r\n\r\n    "

/***/ }),

/***/ "./src/app/components/update-profile/update-profile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-profile/update-profile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <br>\n    <mat-card class=\"mat-card\">\n        <section class=\"mat-typography\">\n            <h3>Update Profile</h3>\n        </section>\n        <mat-divider></mat-divider>\n    <br>\n    <form [formGroup]=\"updateForm\" class=\"edit-form\">\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Name\"  formControlName=\"name\" #name>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"email\" formControlName=\"email\" #email>\n      </mat-form-field>\n      <mat-form-field class=\"field-full-width\">\n        <input matInput placeholder=\"Username\" formControlName=\"username\" #username>\n      </mat-form-field>\n       <mat-form-field>\n        <mat-select matInput placeholder=\"University\" formControlName =\"university\" #university>\n          <mat-option>None</mat-option>\n          <mat-option *ngFor=\"let uni of universities\" [value]=\"uni.name\">{{uni.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select matInput placeholder=\"Course\" formControlName=\"course\" #course>\n          <mat-option>None</mat-option>\n          <mat-option *ngFor=\"let course of courses\" [value]=\"course.name\">{{course.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-select matInput placeholder=\"Career\" (ngModelChange)='onCareerChange($event)' formControlName=\"career\" #career>\n          <mat-option>None</mat-option>\n          <mat-option *ngFor=\"let career of careers\" [value]=\"career\">{{career.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>  \n    \n      <mat-form-field>\n        <mat-select matInput placeholder=\"Skills\" formControlName=\"skills\" multiple #skills>\n          <mat-option *ngFor=\"let skill of skillset\" [value]=\"skill.name\">{{skill.name}}</mat-option>\n        </mat-select>\n      </mat-form-field> \n      <mat-divider></mat-divider>\n      <br><br>\n      <button mat-raised-button color=\"accent\" routerLink=\"/profile\">Back</button>\n      <button type=\"submit\" (click)=\"updateProfile(name.value, email.value, username.value, university.value, course.value, career.value, skills.value)\" \n              [disabled]=\"updateForm.pristine || updateForm.invalid\" mat-raised-button color=\"primary\">Save</button>\n    </form>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/update-profile/update-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-profile/update-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_Material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/Material */ "./node_modules/@angular/Material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent(authService, adminService, router, activatedRouter, snackBar, fb) {
        this.authService = authService;
        this.adminService = adminService;
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.snackBar = snackBar;
        this.fb = fb;
        this.user = {};
        this.updateForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            university: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            course: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            career: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            skills: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    UpdateProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.id = params.id;
            _this.authService.getProfile().subscribe(function (profile) {
                _this.user = profile['user'];
                console.log(_this.user);
                _this.updateForm.get('name').setValue(_this.user.name);
                _this.updateForm.get('email').setValue(_this.user.email);
                _this.updateForm.get('username').setValue(_this.user.username);
                _this.updateForm.get('university').setValue(_this.user.university);
                _this.updateForm.get('course').setValue(_this.user.course);
                _this.updateForm.get('career').setValue(_this.user.career);
                _this.updateForm.get('skills').setValue(_this.user.skills);
            });
        });
        this.adminService.getUniversities().subscribe(function (res) {
            _this.universities = res;
        });
        this.adminService.getCourses().subscribe(function (res) {
            _this.courses = res;
        });
        this.adminService.getCareers().subscribe(function (res) {
            _this.careers = res;
        });
    };
    UpdateProfileComponent.prototype.onCareerChange = function (career) {
        console.log(career);
        // this.adminService.getSkills(career._id). subscribe( res => {
        //     this.skillset = res
        //   })
        this.skillset = career.skills;
    };
    UpdateProfileComponent.prototype.updateProfile = function (name, email, username, university, course, career, skills) {
        var _this = this;
        this.authService.updateUser(this.id, name, email, username, university, course, career, skills).subscribe(function () {
            _this.snackBar.open('Profile updated successfully', 'OK', {
                duration: 4000
            });
            _this.router.navigate(['/profile']);
        });
    };
    UpdateProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-profile',
            template: __webpack_require__(/*! ./update-profile.component.html */ "./src/app/components/update-profile/update-profile.component.html"),
            styles: [__webpack_require__(/*! ./update-profile.component.css */ "./src/app/components/update-profile/update-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_Material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UpdateProfileComponent);
    return UpdateProfileComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
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


var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.getUniversities = function () {
        return this.http.get("/university");
    };
    AdminService.prototype.getUniversityById = function (id) {
        return this.http.get("/university/" + id);
    };
    AdminService.prototype.addUniversity = function (name) {
        var university = {
            name: name
        };
        return this.http.post("/university/add", university);
    };
    AdminService.prototype.getCourses = function () {
        return this.http.get("/course");
    };
    AdminService.prototype.getCourseById = function (id) {
        return this.http.get("/course/" + id);
    };
    AdminService.prototype.addCourse = function (name) {
        var course = {
            name: name
        };
        return this.http.post("/course/add", course);
    };
    AdminService.prototype.getCareers = function () {
        return this.http.get("/career");
    };
    AdminService.prototype.getCareerById = function (id) {
        return this.http.get("/career/" + id);
    };
    AdminService.prototype.addCareer = function (name) {
        var career = {
            name: name
        };
        return this.http.post("/career/add", career);
    };
    AdminService.prototype.getSkills = function (careerId) {
        return this.http.get("/career/" + careerId + "/skill");
    };
    AdminService.prototype.getSkillById = function (careerId, skillId) {
        return this.http.get("/career/" + careerId + "/skill/" + skillId);
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post("/users/register", user, { headers: headers });
    };
    AuthService.prototype.getUserById = function (id) {
        return this.http.get("/users/" + id);
    };
    AuthService.prototype.updateUser = function (id, name, email, username, university, course, career, skills) {
        var user = {
            name: name,
            email: email,
            username: username,
            university: university,
            course: course,
            career: career,
            skills: skills
        };
        return this.http.post("/users/update/" + id, user);
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post("/users/authenticate", user, { headers: headers });
    };
    AuthService.prototype.authenticateadminUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post("/admin-users/authenticate", user, { headers: headers });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        this.isAdmin = user.isAdmin;
    };
    //getPofile(){
    //let headers = new HttpHeaders();
    //this.loadToken();
    //console.log('Bearer '+this.authToken)
    //headers.set('Authorization', 'Bearer '+ this.authToken).set('Content-Type', 'application/json')
    //return this.http.get(`${this.url}/users/profile`, {headers:headers})
    //}
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authToken });
        return this.http.get("/users/profile", { headers: headers });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatePassword = function (user) {
        if (user.password !== user.confirmPassword) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\oluwa\Documents\Projects\meanauthapp\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map