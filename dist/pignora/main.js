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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/page/login/login.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/table/table.component */ "./src/app/dashboard/table/table.component.ts");
/* harmony import */ var _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/notification/notification.component */ "./src/app/dashboard/notification/notification.component.ts");
/* harmony import */ var _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/sweetalert/sweetalert.component */ "./src/app/dashboard/sweetalert/sweetalert.component.ts");
/* harmony import */ var _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/component/pricetable/pricetable.component */ "./src/app/dashboard/component/pricetable/pricetable.component.ts");
/* harmony import */ var _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/component/panels/panels.component */ "./src/app/dashboard/component/panels/panels.component.ts");
/* harmony import */ var _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/component/wizard/wizard.component */ "./src/app/dashboard/component/wizard/wizard.component.ts");
/* harmony import */ var _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/root/root.component */ "./src/app/dashboard/root/root.component.ts");














var routes = [
    { path: '', component: _page_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_13__["RootComponent"], children: [
            { path: '', component: _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'profile', component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
            { path: 'table', component: _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"] },
            { path: 'notification', component: _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_7__["NotificationComponent"] },
            { path: 'alert', component: _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_8__["SweetAlertComponent"] },
            { path: 'settings', component: _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"] },
            { path: 'components/price-table', component: _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_10__["PriceTableComponent"] },
            { path: 'components/panels', component: _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_11__["PanelsComponent"] },
            { path: 'components/wizard', component: _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_12__["WizardComponent"] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
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
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _page_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page/login/login.component */ "./src/app/page/login/login.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_figurecard_figurecard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/figurecard/figurecard.component */ "./src/app/shared/figurecard/figurecard.component.ts");
/* harmony import */ var _shared_imagecard_imagecard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/imagecard/imagecard.component */ "./src/app/shared/imagecard/imagecard.component.ts");
/* harmony import */ var _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/table/table.component */ "./src/app/dashboard/table/table.component.ts");
/* harmony import */ var _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/notification/notification.component */ "./src/app/dashboard/notification/notification.component.ts");
/* harmony import */ var _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/sweetalert/sweetalert.component */ "./src/app/dashboard/sweetalert/sweetalert.component.ts");
/* harmony import */ var _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/root/root.component */ "./src/app/dashboard/root/root.component.ts");
/* harmony import */ var _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/component/pricetable/pricetable.component */ "./src/app/dashboard/component/pricetable/pricetable.component.ts");
/* harmony import */ var _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/component/panels/panels.component */ "./src/app/dashboard/component/panels/panels.component.ts");
/* harmony import */ var _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/component/wizard/wizard.component */ "./src/app/dashboard/component/wizard/wizard.component.ts");
/* harmony import */ var _shared_msgiconbtn_msgiconbtn_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/msgiconbtn/msgiconbtn.component */ "./src/app/shared/msgiconbtn/msgiconbtn.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");






























var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"]('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com')
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["FacebookLoginProvider"]('2262084863850119')
    },
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["LinkedInLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["LinkedInLoginProvider"]('78iqy5cu2e1fgr', false, 'en_US')
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _page_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _shared_figurecard_figurecard_component__WEBPACK_IMPORTED_MODULE_16__["FigurecardComponent"],
                _shared_imagecard_imagecard_component__WEBPACK_IMPORTED_MODULE_17__["ImagecardComponent"],
                _shared_msgiconbtn_msgiconbtn_component__WEBPACK_IMPORTED_MODULE_26__["MsgIconBtnComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _dashboard_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _dashboard_table_table_component__WEBPACK_IMPORTED_MODULE_18__["TableComponent"],
                _dashboard_notification_notification_component__WEBPACK_IMPORTED_MODULE_19__["NotificationComponent"],
                _dashboard_sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_20__["SweetAlertComponent"],
                _dashboard_root_root_component__WEBPACK_IMPORTED_MODULE_21__["RootComponent"],
                _dashboard_settings_settings_component__WEBPACK_IMPORTED_MODULE_22__["SettingsComponent"],
                _dashboard_component_pricetable_pricetable_component__WEBPACK_IMPORTED_MODULE_23__["PriceTableComponent"],
                _dashboard_component_panels_panels_component__WEBPACK_IMPORTED_MODULE_24__["PanelsComponent"],
                _dashboard_component_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_25__["WizardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"]
            ],
            providers: [
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"],
                    useFactory: provideConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/component/panels/panels.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/component/panels/panels.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  padding: 20px 20px 15px 20px;\n}\n\n.card small{\n  font-weight: 300;\n}\n\n.h-tab{\n  margin-top: 35px;\n}\n\n.tab-content{\n  display: none;\n}\n\n.h-tab .tab-link.active{\n  background-color: #ff9800 !important;\n  color: #FFF !important;\n  box-shadow: 0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2) !important;\n}\n\n.v-tab .tab-link.active{\n  background-color: #00bcd4 !important;\n  color: #FFF !important;\n  box-shadow: 0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2) !important;\n}\n\n.v-tab .tab-link{\n  margin-bottom: 10px;\n}\n\n.h-tab .tab-link, .v-tab .tab-link{\n  box-shadow: none !important;\n  background-color: transparent !important;\n  color: #555 !important;\n}\n\n.h-tab .tab-link:hover, .v-tab .tab-link:hover{\n  background-color: rgba(200, 200, 200, 0.2) !important;\n}\n\n.h-tab .tab-link.active:hover{\n  background-color: #ff9800 !important;\n}\n\n.v-tab .tab-link.active:hover{\n  background-color: #00bcd4 !important;\n}\n\n.h-tab .tab-content{\n  padding-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudC9wYW5lbHMvcGFuZWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLDRJQUE0STtBQUM5STs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsNElBQTRJO0FBQzlJOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHdDQUF3QztFQUN4QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50L3BhbmVscy9wYW5lbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTVweCAyMHB4O1xufVxuXG4uY2FyZCBzbWFsbHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmgtdGFie1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4udGFiLWNvbnRlbnR7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oLXRhYiAudGFiLWxpbmsuYWN0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMjU1LCAxNTIsIDAsIDAuNDIpLCAwIDRweCAyM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgyNTUsIDE1MiwgMCwgMC4yKSAhaW1wb3J0YW50O1xufVxuXG4udi10YWIgLnRhYi1saW5rLmFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYmNkNCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0ZGRiAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjZweCAtMTJweCByZ2JhKDAsIDE4OCwgMjEyLCAwLjQyKSwgMCA0cHggMjNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMTg4LCAyMTIsIDAuMikgIWltcG9ydGFudDtcbn1cblxuLnYtdGFiIC50YWItbGlua3tcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmgtdGFiIC50YWItbGluaywgLnYtdGFiIC50YWItbGlua3tcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzU1NSAhaW1wb3J0YW50O1xufVxuXG4uaC10YWIgLnRhYi1saW5rOmhvdmVyLCAudi10YWIgLnRhYi1saW5rOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuMikgIWltcG9ydGFudDtcbn1cblxuLmgtdGFiIC50YWItbGluay5hY3RpdmU6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDAgIWltcG9ydGFudDtcbn1cblxuLnYtdGFiIC50YWItbGluay5hY3RpdmU6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQgIWltcG9ydGFudDtcbn1cblxuLmgtdGFiIC50YWItY29udGVudHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/component/panels/panels.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/component/panels/panels.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Panels\"></app-navbar>\n  <div class=\"row page-title\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <h4>Navigation Pills - <small>Horizontal Tabs</small></h4>\n        <div class=\"h-tab\">\n          <div class=\"tab\">\n            <button mat-raised-button class=\"btn btn-warning btn-round tab-link default-active\" (click)=\"tabClick($event, 'profile')\">PROFILE</button>\n            <button mat-raised-button class=\"btn btn-warning btn-round tab-link\" (click)=\"tabClick($event, 'settings')\">SETTINGS</button>\n            <button mat-raised-button class=\"btn btn-warning btn-round tab-link\" (click)=\"tabClick($event, 'options')\">OPTIONS</button>\n          </div>\n          <div id=\"profile\" class=\"tab-content\">\n            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br/><br/>\n            Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br/><br/>\n            This is very nice.\n          </div>\n          <div id=\"settings\" class=\"tab-content\">\n            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.<br/><br/>\n            Dramatically maintain clicks-and-mortar solutions without functional solutions.\n          </div>\n          <div id=\"options\" class=\"tab-content\">\n            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.<br/><br/>\n            Dynamically innovate resource-leveling customer service for state of the art customer service.\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <h4>Navigation Pills - <small>Vertical Tabs</small></h4>\n        <div class=\"row v-tab page-title\">\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-info btn-round btn-block tab-link default-active\" (click)=\"vTabClick($event, 'one')\">PROFILE</button>\n            <button mat-raised-button class=\"btn btn-info btn-round btn-block tab-link\" (click)=\"vTabClick($event, 'two')\">SETTINGS</button>\n            <button mat-raised-button class=\"btn btn-info btn-round btn-block tab-link\" (click)=\"vTabClick($event, 'three')\">OPTIONS</button>\n          </div>\n          <div class=\"col-md-8\">\n            <div id=\"one\" class=\"tab-content\">\n              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br/><br/>\n              Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.<br/><br/>\n              This is very nice.\n            </div>\n            <div id=\"two\" class=\"tab-content\">\n              Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.<br/><br/>\n              Dramatically maintain clicks-and-mortar solutions without functional solutions.\n            </div>\n            <div id=\"three\" class=\"tab-content\">\n              Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.<br/><br/>\n              Dynamically innovate resource-leveling customer service for state of the art customer service.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/component/panels/panels.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/component/panels/panels.component.ts ***!
  \****************************************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PanelsComponent = /** @class */ (function () {
    function PanelsComponent() {
    }
    PanelsComponent.prototype.ngOnInit = function () {
    };
    PanelsComponent.prototype.ngAfterViewInit = function () {
        var activeTabs = document.getElementsByClassName('default-active');
        for (var i = 0; i < activeTabs.length; i++) {
            activeTabs[i].click();
        }
    };
    PanelsComponent.prototype.tabClick = function (evt, id) {
        var tabcontents = document.querySelectorAll('.h-tab .tab-content');
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].style.display = 'none';
        }
        var tablinks = document.querySelectorAll('.h-tab .tab-link');
        for (var i = 0; i < tablinks.length; i++) {
            var tablink = tablinks[i];
            tablink.className = tablink.className.replace(' active', '');
        }
        document.getElementById(id).style.display = 'block';
        evt.currentTarget.className += ' active';
    };
    PanelsComponent.prototype.vTabClick = function (evt, id) {
        var tabcontents = document.querySelectorAll('.v-tab .tab-content');
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].style.display = 'none';
        }
        var tablinks = document.querySelectorAll('.v-tab .tab-link');
        for (var i = 0; i < tablinks.length; i++) {
            var tablink = tablinks[i];
            tablink.className = tablink.className.replace(' active', '');
        }
        document.getElementById(id).style.display = 'block';
        evt.currentTarget.className += ' active';
    };
    PanelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-panels',
            template: __webpack_require__(/*! ./panels.component.html */ "./src/app/dashboard/component/panels/panels.component.html"),
            styles: [__webpack_require__(/*! ./panels.component.css */ "./src/app/dashboard/component/panels/panels.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PanelsComponent);
    return PanelsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/component/pricetable/pricetable.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/component/pricetable/pricetable.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  padding: 25px 20px 20px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card h6, p {\n  color: #999;\n}\n\n.icon{\n  margin-top: 20px;\n  width: 130px;\n  height: 130px;\n  border: 1px solid #e5e5e5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.icon i{\n  font-size: 55px;\n  color: #e91e63;\n}\n\n.card-title{\n  margin-top: 30px;\n  margin-bottom: 3px;\n}\n\n.card-description{\n  margin-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudC9wcmljZXRhYmxlL3ByaWNldGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50L3ByaWNldGFibGUvcHJpY2V0YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gIHBhZGRpbmc6IDI1cHggMjBweCAyMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIGg2LCBwIHtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5pY29ue1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uIGl7XG4gIGZvbnQtc2l6ZTogNTVweDtcbiAgY29sb3I6ICNlOTFlNjM7XG59XG5cbi5jYXJkLXRpdGxle1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5jYXJkLWRlc2NyaXB0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/component/pricetable/pricetable.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/component/pricetable/pricetable.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Price Table\"></app-navbar>\n  <div class=\"row page-title\">\n    <div class=\"col-md-8 col-md-offset-2\">\n      <div class=\"row\">\n        <div class=\"col-md-4 page-title\">\n          <div class=\"card card-raised\">\n            <h6>Individual</h6>\n            <div class=\"icon\">\n              <i class=\"material-icons\">person</i>\n            </div>\n            <h3 class=\"card-title\">Free</h3>\n            <p class=\"card-description text-center\">\n              This is good if your company size is between 2 and 10 Persons.\n            </p>\n            <button mat-raised-button class=\"btn btn-rose btn-round\">CHOOSE PLAN</button>\n          </div>\n        </div>\n        <div class=\"col-md-4 page-title\">\n          <div class=\"card card-raised\">\n            <h6>Small Company</h6>\n            <div class=\"icon\">\n              <i class=\"material-icons\">weekend</i>\n            </div>\n            <h3 class=\"card-title\">$29 / m</h3>\n            <p class=\"card-description text-center\">\n              This is good if your company size is between 2 and 10 Persons.\n            </p>\n            <button mat-raised-button class=\"btn btn-rose btn-round\">CHOOSE PLAN</button>\n          </div>\n        </div>\n        <div class=\"col-md-4 page-title\">\n          <div class=\"card card-raised\">\n            <h6>Enterprise</h6>\n            <div class=\"icon\">\n              <i class=\"material-icons\">home</i>\n            </div>\n            <h3 class=\"card-title\">$79 / m</h3>\n            <p class=\"card-description text-center\">\n              This is good if your company size is between 2 and 10 Persons.\n            </p>\n            <button mat-raised-button class=\"btn btn-rose btn-round\">CHOOSE PLAN</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/component/pricetable/pricetable.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/component/pricetable/pricetable.component.ts ***!
  \************************************************************************/
/*! exports provided: PriceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceTableComponent", function() { return PriceTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PriceTableComponent = /** @class */ (function () {
    function PriceTableComponent() {
    }
    PriceTableComponent.prototype.ngOnInit = function () {
    };
    PriceTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricetable',
            template: __webpack_require__(/*! ./pricetable.component.html */ "./src/app/dashboard/component/pricetable/pricetable.component.html"),
            styles: [__webpack_require__(/*! ./pricetable.component.css */ "./src/app/dashboard/component/pricetable/pricetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PriceTableComponent);
    return PriceTableComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/component/wizard/wizard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/component/wizard/wizard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wizard-panel{\n\n}\n\n.wizard-header{\n  padding: 25px 0 35px;\n}\n\n.wizard-navigation{\n  position: relative;\n}\n\n.nav-pills{\n  background-color: rgba(200, 200, 200, 0.2);\n  width: 100%;\n}\n\n.nav-pills li{\n  width: 33.3333%;\n  float: left;\n  margin-left: 0;\n  font-size: 12px;\n  font-weight: 500;\n  min-width: 100px;\n  color: #555;\n  padding: 10px 0;\n}\n\n.move-tab{\n  position: absolute;\n  background-color: #f44336;\n  box-shadow: 0 16px 26px -10px rgba(244, 67, 54, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2);\n  font-weight: 500;\n  border-radius: 4px;\n  color: #fff;\n  top: -2px;\n  left: -1vw;\n  width: calc((100% - 260px) / 2);\n  height: 114%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 500ms cubic-bezier(0.29, 1.42, 0.79, 1);\n}\n\n.wizard-body{\n  min-height: 350px;\n  padding: 15px;\n}\n\n.wizard-footer{\n  display: flex;\n  padding: 10px;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudC93aXphcmQvd2l6YXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlJQUFpSTtFQUNqSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudC93aXphcmQvd2l6YXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2l6YXJkLXBhbmVse1xuXG59XG5cbi53aXphcmQtaGVhZGVye1xuICBwYWRkaW5nOiAyNXB4IDAgMzVweDtcbn1cblxuLndpemFyZC1uYXZpZ2F0aW9ue1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXYtcGlsbHN7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXYtcGlsbHMgbGl7XG4gIHdpZHRoOiAzMy4zMzMzJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGNvbG9yOiAjNTU1O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5tb3ZlLXRhYntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBib3gtc2hhZG93OiAwIDE2cHggMjZweCAtMTBweCByZ2JhKDI0NCwgNjcsIDU0LCAwLjU2KSwgMCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMjQ0LCA2NywgNTQsIDAuMik7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogLTF2dztcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyNjBweCkgLyAyKTtcbiAgaGVpZ2h0OiAxMTQlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGN1YmljLWJlemllcigwLjI5LCAxLjQyLCAwLjc5LCAxKTtcbn1cblxuLndpemFyZC1ib2R5e1xuICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLndpemFyZC1mb290ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/component/wizard/wizard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/component/wizard/wizard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Wizard\"></app-navbar>\n  <div class=\"row page-title\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <div class=\"wizard-panel card\">\n        <div class=\"wizard-header\">\n          <h3 class=\"text-center\">Build Your Profile</h3>\n          <h5 class=\"text-center\" style=\"margin-top: 5px; padding: 0 20px;\">This information will let us know more about you.</h5>\n        </div>\n        <div class=\"wizard-navigation\">\n          <ul class=\"nav nav-pills\">\n            <li class=\"text-uppercase text-center\">About</li>\n            <li class=\"text-uppercase text-center\">Account</li>\n            <li class=\"text-uppercase text-center\">Address</li>\n          </ul>\n          <div class=\"move-tab text-center text-uppercase\">About</div>\n        </div>\n        <div class=\"wizard-body\">\n          <div class=\"wizard-tab\">\n            tab 1\n          </div>\n          <div class=\"wizard-tab\">\n            tab 2\n          </div>\n          <div class=\"wizard-tab\">\n            tab 3\n          </div>\n        </div>\n        <div class=\"wizard-footer\">\n          <button id=\"preBtn\" class=\"btn btn-danger\" (click)=\"preOnClick()\">Previous</button>\n          <button id=\"nextBtn\" class=\"btn btn-success\" (click)=\"nextOnClick()\">Next</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/component/wizard/wizard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/component/wizard/wizard.component.ts ***!
  \****************************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
        this.tabIndex = 0;
    }
    WizardComponent.prototype.ngOnInit = function () {
    };
    WizardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var preBtn = document.getElementById('preBtn');
        var moveTab = document.querySelector('.move-tab');
        preBtn.style.visibility = 'hidden';
        // to ensure moveTab can stay correct position
        $(window).resize(function () {
            var screenWidth = document.body.clientWidth;
            if (screenWidth > 990) {
                moveTab.style.width = 'calc((100% - 260px) / 2)';
                if (_this.tabIndex === 1) {
                    moveTab.style.left = '20vw';
                }
                else if (_this.tabIndex === 2) {
                    moveTab.style.left = '42vw';
                }
            }
            else {
                moveTab.style.width = '34%';
                if (_this.tabIndex === 1) {
                    moveTab.style.left = '30vw';
                }
                else if (_this.tabIndex === 2) {
                    moveTab.style.left = '61.5vw';
                }
            }
        });
        var tabs = document.getElementsByClassName('wizard-tab');
        for (var i = 1; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
    };
    WizardComponent.prototype.preOnClick = function () {
        var moveTab = document.querySelector('.move-tab');
        var nextBtn = document.getElementById('nextBtn');
        var preBtn = document.getElementById('preBtn');
        var tabs = document.getElementsByClassName('wizard-tab');
        var screenWidth = document.body.clientWidth;
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        if (this.tabIndex === 2) {
            this.tabIndex--;
            moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
            nextBtn.style.visibility = 'visible';
            moveTab.innerHTML = 'Account';
        }
        else if (this.tabIndex === 1) {
            this.tabIndex--;
            moveTab.style.left = '-1vw';
            preBtn.style.visibility = 'hidden';
            moveTab.innerHTML = 'About';
        }
        tabs[this.tabIndex].style.display = 'inherit';
    };
    WizardComponent.prototype.nextOnClick = function () {
        var moveTab = document.querySelector('.move-tab');
        var nextBtn = document.getElementById('nextBtn');
        var preBtn = document.getElementById('preBtn');
        var tabs = document.getElementsByClassName('wizard-tab');
        var screenWidth = document.body.clientWidth;
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        if (this.tabIndex === 0) {
            this.tabIndex++;
            moveTab.style.left = screenWidth > 990 ? '20vw' : '30vw';
            preBtn.style.visibility = 'visible';
            moveTab.innerHTML = 'Account';
        }
        else if (this.tabIndex === 1) {
            this.tabIndex++;
            moveTab.style.left = screenWidth > 990 ? '42vw' : '61.5vw';
            nextBtn.style.visibility = 'hidden';
            moveTab.innerHTML = 'Address';
        }
        tabs[this.tabIndex].style.display = 'inherit';
    };
    WizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wizard',
            template: __webpack_require__(/*! ./wizard.component.html */ "./src/app/dashboard/component/wizard/wizard.component.html"),
            styles: [__webpack_require__(/*! ./wizard.component.css */ "./src/app/dashboard/component/wizard/wizard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WizardComponent);
    return WizardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Dashboard\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard\n        title=\"184\"\n        headerIcon=\"weekend\"\n        category=\"Bookings\"\n        footContent=\"Get More Space...\"\n        footerIcon=\"warning\"\n        linearColor=\"linear-gradient(60deg, #ffa726, #fb8c00)\"\n        boxShadow=\"0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4)\">\n      </app-figurecard>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard\n        title=\"75.521\"\n        headerIcon=\"equalizer\"\n        category=\"Views\"\n        footContent=\"Google Analytics\"\n        footerIcon=\"local_offer\"\n        linearColor=\"linear-gradient(60deg, #ef5350, #e53935)\"\n        boxShadow=\"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(244, 67, 54, 0.4)\">\n      </app-figurecard>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard\n        title=\"$3,245\"\n        headerIcon=\"store\"\n        category=\"Revenue\"\n        footContent=\"Last 24 Hours\"\n        footerIcon=\"date_range\"\n        linearColor=\"linear-gradient(60deg, #66bb6a, #43a047)\"\n        boxShadow=\"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(76, 175, 80, 0.4)\">\n      </app-figurecard>\n    </div>\n    <div class=\"col-lg-3 col-md-3 col-sm-6 col-xs-12\">\n      <app-figurecard\n        title=\"+245\"\n        headerIcon=\"mic\"\n        category=\"Followers\"\n        footContent=\"Just Updated\"\n        footerIcon=\"update\"\n        linearColor=\"linear-gradient(60deg, #26c6da, #00acc1)\"\n        boxShadow=\"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(0, 188, 212, 0.4)\">\n      </app-figurecard>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 10px\">\n    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n      <app-imagecard\n        image=\"../../../assets/img/card-2.jpeg\"\n        title=\"Cozy 5 Stars Apartment\"\n        desc=\"The place is close to Barceloneta Beach and bus stop just 2 min by walk and...\"\n        footerTitle=\"$899/night\"\n        position=\"Barcelona, Spain\">\n      </app-imagecard>\n    </div>\n    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n      <app-imagecard\n        image=\"../../../assets/img/card-3.jpeg\"\n        title=\"Office Studio\"\n        desc=\"The place is close to Metro Station and bus stop just 2 min by walk and near...\"\n        footerTitle=\"$1,119/night\"\n        position=\"London, UK\">\n      </app-imagecard>\n    </div>\n    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n      <app-imagecard\n        image=\"../../../assets/img/card-1.jpeg\"\n        title=\"Beautiful Castle\"\n        desc=\"The place is close to Metro Station and bus stop just 2 min by walk and near...\"\n        footerTitle=\"$459/night\"\n        position=\"Milan, Italy\">\n      </app-imagecard>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/dashboard/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification-card{\n  padding: 23px 20px 18px 20px;\n}\n\n.notification-card h4{\n  margin-bottom: 15px;\n}\n\n.place{\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uLWNhcmR7XG4gIHBhZGRpbmc6IDIzcHggMjBweCAxOHB4IDIwcHg7XG59XG5cbi5ub3RpZmljYXRpb24tY2FyZCBoNHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnBsYWNle1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Notification\"></app-navbar>\n  <div class=\"row page-title\">\n    <h3 class=\"text-center\">Notifications</h3>\n  </div>\n  <div class=\"row\">\n    <p class=\"text-center subtitle\">Handcrafted by our friend <a href=\"https://github.com/mouse0270\" target=\"_blank\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation</a>.</p>\n  </div>\n  <div class=\"row page-title\">\n    <div class=\"col-md-6 col-sm-12 col-xs-12\">\n      <div class=\"card notification-card\">\n        <h4>Notifications Style</h4>\n        <div class=\"alert alert-info\">\n          <span>This is a plain notification</span>\n        </div>\n        <div class=\"alert alert-info\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>This is a plain notification</span>\n        </div>\n        <div class=\"alert alert-info alert-with-icon\">\n          <i class=\"material-icons alert-icon\">notifications</i>\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n        </div>\n        <div class=\"alert alert-rose alert-with-icon\">\n          <i class=\"material-icons alert-icon\">notifications</i>\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-sm-12 col-xs-12\">\n      <div class=\"card notification-card\">\n        <h4>Notification States</h4>\n        <div class=\"alert alert-info\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>INFO - This is a regular notification made with \".alert-info\"</span>\n        </div>\n        <div class=\"alert alert-success\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>SUCCESS - This is a regular notification made with \".alert-success\"</span>\n        </div>\n        <div class=\"alert alert-warning\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>WARNING - This is a regular notification made with \".alert-warning\"</span>\n        </div>\n        <div class=\"alert alert-danger\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>DANGER - This is a regular notification made with \".alert-danger\"</span>\n        </div>\n        <div class=\"alert alert-primary\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>PRIMARY - This is a regular notification made with \".alert-primary\"</span>\n        </div>\n        <div class=\"alert alert-rose\">\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>ROSE - This is a regular notification made with \".alert-rose\"</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin: 35px 0 20px 0;\">\n    <div class=\"card place\">\n      <h4 class=\"text-center\">Notifications Places</h4>\n      <p class=\"text-center\">Click to view notifications</p>\n      <div class=\"row\" style=\"margin-top: 15px\">\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('top-left')\">TOP LEFT</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('top-center')\">TOP CENTER</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('top-right')\">TOP RIGHT</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"row page-title\">\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('bottom-left')\">BOTTOM LEFT</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('bottom-center')\">BOTTOM CENTER</button>\n          </div>\n          <div class=\"col-md-4\">\n            <button mat-raised-button class=\"btn btn-primary btn-block\" (click)=\"btnClick('bottom-right')\">BOTTOM RIGHT</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/notification/notification.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/notification/notification.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.btnClick = function (position) {
        var from = 'top';
        var align = 'right';
        var type = 'info';
        switch (position) {
            case 'top-left':
                align = 'left';
                type = 'rose';
                break;
            case 'top-center':
                align = 'center';
                type = 'success';
                break;
            case 'bottom-left':
                align = 'left';
                from = 'bottom';
                type = 'primary';
                break;
            case 'bottom-center':
                align = 'center';
                from = 'bottom';
                type = 'warning';
                break;
            case 'bottom-right':
                from = 'bottom';
                type = 'danger';
                break;
        }
        $.notify({
            message: 'Welcome to <b>MATERIAL DASHBOARD</b> - a beautiful dashboard for every web developer.',
        }, {
            placement: { from: from, align: align },
            offset: { x: 20, y: 35 },
            type: type,
            template: "<div class=\"alert alert-{0} alert-with-icon col-md-4\">\n          <i class=\"material-icons alert-icon\">notifications</i>\n          <button class=\"close\" type=\"button\" data-dismiss=\"alert\" aria-label=\"Close\"><i class=\"material-icons\">close</i></button>\n          <span>{2}</span>\n        </div>"
        });
    };
    NotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/dashboard/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/dashboard/notification/notification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right-profile{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 25px;\n  position: relative;\n  /*margin-top: 60px;*/\n}\n\n.profile{\n  position: absolute;\n  top: -40px;\n}\n\n.profile img{\n  border-radius: 50%;\n  width: 130px;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.right-profile h6{\n  margin-top: 100px;\n  margin-bottom: 8px;\n  color: #999;\n}\n\n.right-profile h4{\n  margin-bottom: 5px;\n}\n\n.right-profile p{\n  color: #999;\n}\n\n.right-profile button {\n  margin-top: 15px;\n}\n\n.card{\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  position: relative;\n  margin-top: 40px;\n}\n\n.card-header {\n  position: absolute;\n  text-align: center;\n  background: linear-gradient(60deg, #ec407a, #d81b60);\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n  /*margin: -20px 15px 0;*/\n  border-radius: 3px;\n  padding: 15px;\n  top: -23px;\n}\n\n.card-header i {\n  font-size: 24px;\n  width: 33px;\n  height: 33px;\n  line-height: 33px;\n  color: #fff;\n}\n\n.card-content{\n  position: relative;\n}\n\n.card-title{\n  padding-left: 80px;\n}\n\n.mat-input-container{\n  width: 100%;\n}\n\n.category{\n  font-weight: 300;\n}\n\nform{\n  margin-top: 30px;\n}\n\n.row{\n  margin-top: 15px;\n}\n\n.mat-input-container textarea{\n  height: 90px;\n}\n\n.textarea-label{\n  color: #aaa;\n  margin-bottom: 10px;\n}\n\n.action-btn{\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5SEFBeUg7QUFDM0g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG9EQUFvRDtFQUNwRCxzRkFBc0Y7RUFDdEYsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodC1wcm9maWxle1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qbWFyZ2luLXRvcDogNjBweDsqL1xufVxuXG4ucHJvZmlsZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00MHB4O1xufVxuXG4ucHJvZmlsZSBpbWd7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEzMHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNDIpLCAwIDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucmlnaHQtcHJvZmlsZSBoNntcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgY29sb3I6ICM5OTk7XG59XG5cbi5yaWdodC1wcm9maWxlIGg0e1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5yaWdodC1wcm9maWxlIHB7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4ucmlnaHQtcHJvZmlsZSBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2FyZHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWM0MDdhLCAjZDgxYjYwKTtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA3cHggMTBweCAtNXB4IHJnYmEoMjMzLCAzMCwgOTksIDAuNCk7XG4gIC8qbWFyZ2luOiAtMjBweCAxNXB4IDA7Ki9cbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxNXB4O1xuICB0b3A6IC0yM3B4O1xufVxuXG4uY2FyZC1oZWFkZXIgaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZC1jb250ZW50e1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLXRpdGxle1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG5cbi5tYXQtaW5wdXQtY29udGFpbmVye1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhdGVnb3J5e1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5mb3Jte1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucm93e1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubWF0LWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuXG4udGV4dGFyZWEtbGFiZWx7XG4gIGNvbG9yOiAjYWFhO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYWN0aW9uLWJ0bntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"User Profile\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-md-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">perm_identity</i>\n        </div>\n        <div class=\"card-content\">\n          <h4 class=\"card-title\">Edit Profile -\n            <small class=\"category\">Complete your profile</small>\n          </h4>\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"firstName\" value=\"Ci\" name=\"firstName\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-6\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\" value=\"Clia\" name=\"lastName\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"Address\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"City\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-4\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"Country\">\n                </mat-form-field>\n              </div>\n              <div class=\"col-md-4\">\n                <mat-form-field color=\"accent\">\n                  <input matInput type=\"text\" placeholder=\"Postcode\">\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <label class=\"textarea-label\">About Me</label>\n                <mat-form-field color=\"accent\">\n                  <textarea matInput placeholder=\"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\"></textarea>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"row action-btn\">\n              <button md-raised-button type=\"submit\" class=\"btn btn-rose\">UPDATE PROFILE</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"card right-profile\">\n        <div class=\"profile\">\n          <img src=\"../../../assets/img/marc.jpg\" alt=\"profile\"/>\n        </div>\n        <h6>CEO / CO-FOUNDER</h6>\n        <h4>{{ firstName }} {{ lastName }}</h4>\n        <p>Don't be scared of the truth because we need to restart the human foundation in truth And I love you like\n          Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>\n        <button mat-raised-button class=\"btn btn-rose btn-round\">CHANGE</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.firstName = 'Alec';
        this.lastName = 'Thompson';
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/dashboard/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/root/root.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/root/root.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: relative;\n  top: 0;\n  height: 100vh;\n  display: flex;\n  width: 100%;\n  flex: 1;\n}\n\n.sidebar-panel{\n  width: 260px;\n  position: fixed;\n  height: 100%;\n  /*background-color: #D80B0B;*/\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n  transition: all 500ms;\n}\n\n.main-panel{\n  width: 100%;\n  flex: 1;\n  padding-left: 260px;\n}\n\n.sidebar-background{\n  position: absolute;\n  z-index: 0;\n  height: 100%;\n  width: 100%;\n  display: block;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n  opacity: 0.2;\n  filter: alpha(opacity=10);\n  transition: all 500ms;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3Jvb3Qvcm9vdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixhQUFhO0VBQ2IsYUFBYTtFQUNiLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IseUhBQXlIO0VBS3pILHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0VBQ1AsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxNQUFNO0VBQ04sT0FBTztFQUNQLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLHlCQUF5QjtFQUt6QixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvcm9vdC9yb290LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMTtcbn1cblxuLnNpZGViYXItcGFuZWx7XG4gIHdpZHRoOiAyNjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI0Q4MEIwQjsqL1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuNDIpLCAwIDRweCAyNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgNTAwbXM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCA1MDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xufVxuXG4ubWFpbi1wYW5lbHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctbGVmdDogMjYwcHg7XG59XG5cbi5zaWRlYmFyLWJhY2tncm91bmR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgb3BhY2l0eTogMC4yO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTApO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA1MDBtcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgNTAwbXM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgNTAwbXM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCA1MDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/root/root.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar-panel\" id=\"sidebar\" [style.background-color]=\"backgroundColor\">\n\n    <div class=\"sidebar-background\" [style.background-image]=\"'url(../assets/img/sidebar-' + id + '.jpg)'\"></div>\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"main-panel\" id=\"main-panel\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/root/root.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/root/root.component.ts ***!
  \**************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");



var RootComponent = /** @class */ (function () {
    function RootComponent(settingService) {
        this.settingService = settingService;
        this.id = settingService.getSidebarImageIndex() + 1;
        this.backgroundColor = settingService.getSidebarColor();
    }
    RootComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingService.sidebarImageIndexUpdate.subscribe(function (id) {
            _this.id = id + 1;
        });
        this.settingService.sidebarColorUpdate.subscribe(function (color) {
            _this.backgroundColor = color;
        });
    };
    RootComponent.prototype.ngOnDestroy = function () {
        this.settingService.sidebarImageIndexUpdate.unsubscribe();
        this.settingService.sidebarColorUpdate.unsubscribe();
    };
    RootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./root.component.html */ "./src/app/dashboard/root/root.component.html"),
            styles: [__webpack_require__(/*! ./root.component.css */ "./src/app/dashboard/root/root.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-btn{\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n\n.sidebar-img{\n  max-width: 100%;\n  border-radius: 10px;\n  margin-top: 10px;\n  cursor: pointer;\n  transition: all 400ms;\n  border: 4px solid transparent;\n}\n\n.btn-hover:hover{\n  border-color: rgba(0, 187, 255, 0.5);\n  transition: all 400ms;\n}\n\n.active{\n  border-color: #00bbff;\n}\n\n.dot-row{\n  display: flex;\n  justify-content: center;\n  margin: 20px 0 40px 0;\n}\n\n.dot{\n  border: 3px solid transparent;\n  border-radius: 50%;\n  width: 23px;\n  height: 23px;\n  margin: 0 10px;\n  cursor: pointer;\n}\n\n.purple{\n  background-color: #9c27b0;\n}\n\n.blue{\n  background-color: #00bcd4;\n}\n\n.dodgerblue{\n  background-color: dodgerblue;\n}\n\n.green{\n  background-color: #4caf50;\n}\n\n.orange{\n  background-color: #ff9800;\n}\n\n.red{\n  background-color: #f44336;\n}\n\n.white{\n  background-color: rgba(200, 200, 200, 0.2);\n}\n\n.rose{\n  background-color: #e91e63;\n}\n\n.black{\n  background-color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFLZixxQkFBcUI7RUFDckIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0VBS3BDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1idG57XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWltZ3tcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLWhvdmVyOmhvdmVye1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMTg3LCAyNTUsIDAuNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG59XG5cbi5hY3RpdmV7XG4gIGJvcmRlci1jb2xvcjogIzAwYmJmZjtcbn1cblxuLmRvdC1yb3d7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMCA0MHB4IDA7XG59XG5cbi5kb3R7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyM3B4O1xuICBoZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wdXJwbGV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzI3YjA7XG59XG5cbi5ibHVle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiY2Q0O1xufVxuXG4uZG9kZ2VyYmx1ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcbn1cblxuLmdyZWVue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xufVxuXG4ub3Jhbmdle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xufVxuXG4ucmVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ud2hpdGV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC4yKTtcbn1cblxuLnJvc2V7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XG59XG5cbi5ibGFja3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Settings\"></app-navbar>\n  <div class=\"row\" style=\"margin-top: 30px\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <h4 class=\"text-center text-uppercase\">Sidebar Filters</h4>\n      <div class=\"col-md-12 dot-row\">\n        <div class=\"dot purple btn-hover\" (click)=\"filterChooseClick('#9c27b0')\"></div>\n        <div class=\"dot blue btn-hover\" (click)=\"filterChooseClick('#00bcd4')\"></div>\n        <div class=\"dot green btn-hover\" (click)=\"filterChooseClick('#4caf50')\"></div>\n        <div class=\"dot orange btn-hover\" (click)=\"filterChooseClick('#ff9800')\"></div>\n        <div class=\"dot red btn-hover\" (click)=\"filterChooseClick('#f44336')\"></div>\n        <div class=\"dot white btn-hover\" (click)=\"filterChooseClick('#fff')\"></div>\n        <div class=\"dot rose btn-hover\" (click)=\"filterChooseClick('#e91e63')\"></div>\n      </div>\n    </div>\n\n    <div class=\"col-md-10 col-md-offset-1\">\n      <h4 class=\"text-center text-uppercase\">Sidebar Background</h4>\n      <div class=\"col-md-12 dot-row\">\n        <div class=\"dot red btn-hover\" (click)=\"bgColorChooseClick('#D80B0B')\"></div>\n        <div class=\"dot dodgerblue btn-hover\" (click)=\"bgColorChooseClick('dodgerblue')\"></div>\n        <div class=\"dot white btn-hover\" (click)=\"bgColorChooseClick('#fff')\"></div>\n        <div class=\"dot black btn-hover\" (click)=\"bgColorChooseClick('#000')\"></div>\n      </div>\n    </div>\n\n    <div class=\"col-md-10 col-md-offset-1 background-image\">\n      <h4 class=\"text-uppercase text-center\">SideBar Background Image</h4>\n      <div class=\"col-md-3 col-sm-3 col-xs-6\">\n        <img src=\"../../../assets/img/sidebar-1.jpg\" alt=\"sidebar-bg\" class=\"sidebar-img btn-hover\" (click)=\"bgChooseClick(0)\"/>\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-6\">\n        <img src=\"../../../assets/img/sidebar-2.jpg\" alt=\"sidebar-bg\" class=\"sidebar-img btn-hover\" (click)=\"bgChooseClick(1)\"/>\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-6\">\n        <img src=\"../../../assets/img/sidebar-3.jpg\" alt=\"sidebar-bg\" class=\"sidebar-img btn-hover\" (click)=\"bgChooseClick(2)\"/>\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-6\">\n        <img src=\"../../../assets/img/sidebar-4.jpg\" alt=\"sidebar-bg\" class=\"sidebar-img btn-hover\" (click)=\"bgChooseClick(3)\"/>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingService) {
        this.settingService = settingService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var defaultId = this.settingService.getSidebarImageIndex();
        var sidebarImgs = document.getElementsByClassName('sidebar-img');
        sidebarImgs[defaultId].className = sidebarImgs[defaultId].className + ' active';
    };
    SettingsComponent.prototype.bgChooseClick = function (id) {
        this.settingService.setSidebarImageIndex(id);
        var sidebarImgs = document.getElementsByClassName('sidebar-img');
        for (var i = 0; i < sidebarImgs.length; i++) {
            sidebarImgs[i].className = sidebarImgs[i].className.replace(' active', '');
        }
        sidebarImgs[id].className = sidebarImgs[id].className + ' active';
    };
    SettingsComponent.prototype.filterChooseClick = function (color) {
        this.settingService.setSidebarFilter(color);
    };
    SettingsComponent.prototype.bgColorChooseClick = function (color) {
        this.settingService.setSidebarColor(color);
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/dashboard/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/dashboard/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/sweetalert/sweetalert.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/sweetalert/sweetalert.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  display: flex;\n  flex-direction: column;\n  padding: 25px 20px 22px 20px;\n  align-items: center;\n  margin-top: 30px;\n}\n\n.card h5{\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3N3ZWV0YWxlcnQvc3dlZXRhbGVydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvc3dlZXRhbGVydC9zd2VldGFsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjVweCAyMHB4IDIycHggMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmNhcmQgaDV7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/sweetalert/sweetalert.component.html":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/sweetalert/sweetalert.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Sweet Alert\"></app-navbar>\n  <div class=\"row page-title\">\n    <h3 class=\"text-center\">Sweet Alert 2</h3>\n  </div>\n  <div class=\"row\">\n    <p class=\"text-center subtitle\">A beautiful plugin, that replace the classic alert, Handcrafted by our friend <a href=\"https://twitter.com/t4t5\" target=\"_blank\">Tristan Edwards</a>. Please checkout the <a href=\"http://limonte.github.io/sweetalert2/\" target=\"_blank\">full documentation</a>.</p>\n  </div>\n  <div class=\"row page-title\">\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>Basic example</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('basic')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A title with a text under</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('text')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A success message</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('success')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>Custom HTML description</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('html')\">TRY ME!</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A warning message, with a function attached to the \"Confirm\" Button...</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('confirm')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>...and by passing a parameter, you can execute something else for \"Cancel\"</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('cancel')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>A message with auto close timer set to 2 seconds</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('close')\">TRY ME!</button>\n      </div>\n    </div>\n    <div class=\"col-md-3 col-sm-6 col-xs-12\">\n      <div class=\"card\">\n        <h5>Modal window with input field</h5>\n        <button mat-raised-button class=\"btn btn-rose\" (click)=\"openAlert('input')\">TRY ME!</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/sweetalert/sweetalert.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/sweetalert/sweetalert.component.ts ***!
  \**************************************************************/
/*! exports provided: SweetAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlertComponent", function() { return SweetAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SweetAlertComponent = /** @class */ (function () {
    function SweetAlertComponent() {
    }
    SweetAlertComponent.prototype.ngOnInit = function () {
    };
    SweetAlertComponent.prototype.openAlert = function (type) {
        switch (type) {
            case 'basic':
                swal({
                    title: 'Here\'s a message!',
                    confirmButtonClass: 'btn btn-success'
                });
                break;
            case 'text':
                swal({
                    title: 'Good job!',
                    text: 'It\'s pretty, isn\'t it?',
                    confirmButtonClass: 'btn btn-info'
                });
                break;
            case 'success':
                swal({
                    title: 'Good job!',
                    text: 'You clicked the button!',
                    type: 'success',
                    confirmButtonClass: 'btn btn-success'
                });
                break;
            case 'html':
                swal({
                    title: '<i>HTML</i> <u>example</u>',
                    type: 'info',
                    html: "You can use <b>bold text</b><a href=\"//github.com\">links</a>and other HTML tags",
                    showCloseButton: true,
                    showCancelButton: true,
                    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn btn-warning'
                });
                break;
            case 'confirm':
                swal({
                    title: 'Are you sure?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    confirmButtonText: 'YES, DELETE IT!'
                }).then(function () {
                    swal({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-info'
                    });
                });
                break;
            case 'cancel':
                swal({
                    title: 'Are you sure?',
                    text: 'You won\'t be able to revert this!',
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'YES, DELETE IT!',
                    cancelButtonText: 'NO, CANCEL!',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    buttonsStyling: false
                }).then(function () {
                    swal({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        type: 'success',
                        confirmButtonClass: 'btn btn-info'
                    });
                }, function (dismiss) {
                    // dismiss can be 'cancel', 'overlay',
                    // 'close', and 'timer'
                    if (dismiss === 'cancel') {
                        swal({
                            title: 'Cancelled',
                            text: 'Your imaginary file is safe :)',
                            type: 'error',
                            confirmButtonClass: 'btn btn-info'
                        });
                    }
                });
                break;
            case 'close':
                swal({
                    title: 'Auto close alert!',
                    text: 'I will close in 2 seconds.',
                    timer: 2000,
                    showConfirmButton: false
                }).then(function () { }, 
                // handling the promise rejection
                function (dismiss) {
                    if (dismiss === 'timer') {
                        console.log('I was closed by the timer');
                    }
                });
                break;
            case 'input':
                swal({
                    title: 'Input something',
                    input: 'text',
                    inputClass: 'mat-input-container',
                    showCancelButton: true,
                    confirmButtonText: 'OK',
                    confirmButtonClass: 'btn btn-success',
                    cancelButtonClass: 'btn btn-danger',
                    showLoaderOnConfirm: true,
                    preConfirm: function (text) {
                        swal({
                            text: 'Your entered: ' + text,
                            type: 'success',
                            confirmButtonClass: 'btn btn-info'
                        });
                    },
                    allowOutsideClick: false
                });
                break;
        }
    };
    SweetAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sweetalert',
            template: __webpack_require__(/*! ./sweetalert.component.html */ "./src/app/dashboard/sweetalert/sweetalert.component.html"),
            styles: [__webpack_require__(/*! ./sweetalert.component.css */ "./src/app/dashboard/sweetalert/sweetalert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SweetAlertComponent);
    return SweetAlertComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/table/table.component.css":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/table/table.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row{\n  margin-top: 10px;\n}\n\n.card{\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  position: relative;\n  margin-top: 40px;\n}\n\n.card-header {\n  position: absolute;\n  text-align: center;\n  background: linear-gradient(60deg, #ec407a, #d81b60);\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n  /*margin: -20px 15px 0;*/\n  border-radius: 3px;\n  padding: 15px;\n  top: -23px;\n}\n\n.card-header i {\n  font-size: 24px;\n  width: 33px;\n  height: 33px;\n  line-height: 33px;\n  color: #fff;\n}\n\n.card-content{\n  position: relative;\n}\n\n.card-title{\n  padding-left: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixvREFBb0Q7RUFDcEQsc0ZBQXNGO0VBQ3RGLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJke1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNlYzQwN2EsICNkODFiNjApO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDdweCAxMHB4IC01cHggcmdiYSgyMzMsIDMwLCA5OSwgMC40KTtcbiAgLyptYXJnaW46IC0yMHB4IDE1cHggMDsqL1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRvcDogLTIzcHg7XG59XG5cbi5jYXJkLWhlYWRlciBpIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB3aWR0aDogMzNweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBsaW5lLWhlaWdodDogMzNweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkLWNvbnRlbnR7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtdGl0bGV7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/table/table.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/table/table.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-navbar title=\"Table List\"></app-navbar>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">assignment</i>\n        </div>\n        <div class=\"card-content\">\n          <h4 class=\"card-title\">Simple Table</h4>\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead class=\"text-primary\">\n                <tr>\n                  <th>First Name</th>\n                  <th>Country</th>\n                  <th>City</th>\n                  <th>Salary</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Dakota Rice</td>\n                  <td>Niger</td>\n                  <td>Oud-Turnhout</td>\n                  <td class=\"text-primary\">$36,738</td>\n                </tr>\n                <tr>\n                  <td>Minerva Hooper</td>\n                  <td>Curaçao</td>\n                  <td>Sinaai-Waas</td>\n                  <td class=\"text-primary\">$23,789</td>\n                </tr>\n                <tr>\n                  <td>Sage Rodriguez</td>\n                  <td>Netherlands</td>\n                  <td>Baileux</td>\n                  <td class=\"text-primary\">$56,142</td>\n                </tr>\n                <tr>\n                  <td>Philip Chaney</td>\n                  <td>Korea, South</td>\n                  <td>Overland Park</td>\n                  <td class=\"text-primary\">$38,735</td>\n                </tr>\n                <tr>\n                  <td>Doris Greene</td>\n                  <td>Malawi</td>\n                  <td>Feldkirchen in Kärnten</td>\n                  <td class=\"text-primary\">$63,542</td>\n                </tr>\n                <tr>\n                  <td>Mason Porter</td>\n                  <td>Chile</td>\n                  <td>Gloucester</td>\n                  <td class=\"text-primary\">$78,615</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"material-icons\">assignment</i>\n        </div>\n        <div class=\"card-content\">\n          <h4 class=\"card-title\">Striped Table</h4>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\">\n              <thead>\n              <tr>\n                <th>#</th>\n                <th></th>\n                <th>Product Name</th>\n                <th>Type</th>\n                <th>Quantity</th>\n                <th class=\"text-right\">Price</th>\n                <th class=\"text-right\">Amount</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>1</td>\n                <td><mat-checkbox></mat-checkbox></td>\n                <td>Moleskine Agenda</td>\n                <td>Oud-Office</td>\n                <td>25</td>\n                <td class=\"text-right\">€ 49</td>\n                <td class=\"text-right\">€ 1,225</td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td><mat-checkbox></mat-checkbox></td>\n                <td>Stabilo Pen</td>\n                <td>Office</td>\n                <td>35</td>\n                <td class=\"text-right\">€ 10</td>\n                <td class=\"text-right\">€ 300</td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td><mat-checkbox></mat-checkbox></td>\n                <td>A4 Paper Pack</td>\n                <td>Office</td>\n                <td>50</td>\n                <td class=\"text-right\">€ 599.00</td>\n                <td class=\"text-right\">€ 109</td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td><mat-checkbox></mat-checkbox></td>\n                <td>Apple iPad</td>\n                <td>Meeting</td>\n                <td>20</td>\n                <td class=\"text-right\">€ 10.99</td>\n                <td class=\"text-right\">€ 4,999</td>\n              </tr>\n              <tr>\n                <td>5</td>\n                <td><mat-checkbox></mat-checkbox></td>\n                <td>Apple iPhone</td>\n                <td>Communication</td>\n                <td>10</td>\n                <td class=\"text-right\">€ 499.00</td>\n                <td class=\"text-right\">€ 5,999</td>\n              </tr>\n              <tr>\n                <td colspan=\"5\"></td>\n                <td style=\"font-weight: 500; font-size: 1.25em;\" class=\"text-right\">Total</td>\n                <td style=\"font-size: 26px\" class=\"text-right\">€12,999</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/table/table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/table/table.component.ts ***!
  \****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/dashboard/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/dashboard/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/page/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/page/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n.background{\n  background: url('lock_bg.jpg') no-repeat center center;\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n}\n.card{\n  position: relative;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  -webkit-animation-name: card;\n  animation-name: card;\n  -webkit-animation-duration: 600ms;\n  animation-duration: 600ms;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n@-webkit-keyframes card {\n  from {top: -40px;}\n  to {top: 0;}\n}\n@keyframes card {\n  from {top: -40px;}\n  to {top: 0;}\n}\n.card-header{\n  position: relative;\n  overflow: hidden;\n  top: -40px;\n  width: 100%;\n  padding: 25px;\n  border-radius: 3px;\n  background: linear-gradient(60deg, #ec407a, #d81b60);\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.card-header h4{\n  font-weight: 400;\n  color: #fff;\n  margin-bottom: 25px;\n  margin-top: 5px;\n}\n.social-btns i{\n  font-size: 21px;\n  color: #fff;\n}\n.social-btns button{\n  margin: 0 8px;\n}\n.tip{\n  margin-top: -20px;\n}\n.form-row, .card-form, .mat-form-field{\n  width: 100%;\n}\n.card-form{\n  padding: 5px;\n}\n.form-row{\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-top: 13px;\n}\n.form-row i{\n  position: relative;\n  top: -5px;\n  margin-right: 15px;\n  color: #555;\n}\n.card-footer{\n  margin: 10px;\n}\n.card-footer button{\n  color: #e91e63;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLHNEQUEwRTtFQUkxRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFHNUIsb0JBQW9CO0VBQ3BCLGlDQUFpQztFQUdqQyx5QkFBeUI7RUFDekIscUNBQXFDO0VBR3JDLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsTUFBTSxVQUFVLENBQUM7RUFDakIsSUFBSSxNQUFNLENBQUM7QUFDYjtBQUVBO0VBQ0UsTUFBTSxVQUFVLENBQUM7RUFDakIsSUFBSSxNQUFNLENBQUM7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsb0RBQW9EO0VBQ3BELHNGQUFzRjtFQUN0RixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uYmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2NrX2JnLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJke1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNhcmQ7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGNhcmQ7XG4gIC1vLWFuaW1hdGlvbi1uYW1lOiBjYXJkO1xuICBhbmltYXRpb24tbmFtZTogY2FyZDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDYwMG1zO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XG4gIC1vLWFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC1tb3otYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIC1vLWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGNhcmQge1xuICBmcm9tIHt0b3A6IC00MHB4O31cbiAgdG8ge3RvcDogMDt9XG59XG5cbkBrZXlmcmFtZXMgY2FyZCB7XG4gIGZyb20ge3RvcDogLTQwcHg7fVxuICB0byB7dG9wOiAwO31cbn1cblxuLmNhcmQtaGVhZGVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogLTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgI2VjNDA3YSwgI2Q4MWI2MCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDIzMywgMzAsIDk5LCAwLjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2FyZC1oZWFkZXIgaDR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5zb2NpYWwtYnRucyBpe1xuICBmb250LXNpemU6IDIxcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc29jaWFsLWJ0bnMgYnV0dG9ue1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4udGlwe1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLmZvcm0tcm93LCAuY2FyZC1mb3JtLCAubWF0LWZvcm0tZmllbGR7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FyZC1mb3Jte1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5mb3JtLXJvd3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuXG4uZm9ybS1yb3cgaXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZC1mb290ZXIgYnV0dG9ue1xuICBjb2xvcjogI2U5MWU2Mztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/page/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/page/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\n<div class=\"container\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <app-header></app-header>\n    </div>\n   <div class=\"row\">\n     <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n       <div class=\"card\">\n         <div class=\"card-header\">\n            <h4>Login</h4>\n           <div class=\"social-btns\">\n             <button mat-icon-button (click)=\"signInWithFB()\"><i class=\"fa fa-facebook-square\"></i></button>\n             <button mat-icon-button (click)=\"signInWithGoogle()\"><i class=\"fa fa-twitter\"></i></button>\n             <button mat-icon-button (click)=\"signInWithLinkedIn()\"><i class=\"fa fa-linkedin\"></i></button>\n           </div>\n         </div>\n         <p class=\"tip\">Or Be Classical</p>\n         <div class=\"card-form\">\n           <div class=\"form-row\">\n             <i class=\"material-icons\">face</i>\n             <mat-form-field color=\"accent\">\n               <input type=\"text\" matInput placeholder=\"First Name\"/>\n             </mat-form-field>\n           </div>\n           <div class=\"form-row\">\n             <i class=\"material-icons\">email</i>\n             <mat-form-field color=\"accent\">\n               <input type=\"text\" matInput placeholder=\"Email address\"/>\n             </mat-form-field>\n           </div>\n           <div class=\"form-row\">\n             <i class=\"material-icons\">lock_outline</i>\n             <mat-form-field color=\"accent\">\n               <input type=\"password\" matInput placeholder=\"Password\"/>\n             </mat-form-field>\n           </div>\n         </div>\n         <div class=\"card-footer\">\n           <button mat-button (click)=\"loginBtn()\">LET'S GO</button>\n         </div>\n       </div>\n     </div>\n   </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _services_auth_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth-api.service */ "./src/app/services/auth-api.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, userService, authAPIService) {
        this.authService = authService;
        this.userService = userService;
        this.authAPIService = authAPIService;
        this.userPostData = {
            email: '',
            name: '',
            provider: '',
            provider_id: '',
            provider_pic: '',
            token: ''
        };
        this.userService.sessionIn();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
            if (_this.loggedIn) {
                _this.apiConnection(_this.user);
            }
        });
    };
    LoginComponent.prototype.loginBtn = function () {
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.signInWithFB = function () {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.signInWithLinkedIn = function () {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["LinkedInLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    LoginComponent.prototype.apiConnection = function (data) {
        var _this = this;
        this.userPostData.email = data.email;
        this.userPostData.name = data.name;
        this.userPostData.provider = data.provider;
        this.userPostData.provider_id = data.id;
        this.userPostData.provider_pic = data.image;
        this.userPostData.token = data.token;
        this.authAPIService.postData(this.userPostData).then(function (result) {
            _this.responseData = result;
            if (_this.responseData.userData) {
                _this.userService.storeData(_this.responseData.userData);
            }
        }, function (err) {
            console.log('error');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/page/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/page/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_auth_api_service__WEBPACK_IMPORTED_MODULE_4__["AuthAPIService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth-api.service.ts ***!
  \**********************************************/
/*! exports provided: AuthAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAPIService", function() { return AuthAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var apiUrl = 'http://localhost:3000/users/';
var AuthAPIService = /** @class */ (function () {
    function AuthAPIService(http) {
        this.http = http;
        console.log('Hello AuthService Provider');
    }
    AuthAPIService.prototype.postData = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
            _this.http.post(apiUrl + 'authenticate', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthAPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthAPIService);
    return AuthAPIService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.sidebarImageIndex = 0;
        this.sidebarImageIndexUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebarFilter = '#fff';
        this.sidebarFilterUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebarColor = '#D80B0B';
        this.sidebarColorUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SettingsService.prototype.getSidebarImageIndex = function () {
        return this.sidebarImageIndex;
    };
    SettingsService.prototype.setSidebarImageIndex = function (id) {
        this.sidebarImageIndex = id;
        this.sidebarImageIndexUpdate.emit(this.sidebarImageIndex);
    };
    SettingsService.prototype.getSidebarFilter = function () {
        return this.sidebarFilter;
    };
    SettingsService.prototype.setSidebarFilter = function (color) {
        this.sidebarFilter = color;
        this.sidebarFilterUpdate.emit(this.sidebarFilter);
    };
    SettingsService.prototype.getSidebarColor = function () {
        return this.sidebarColor;
    };
    SettingsService.prototype.setSidebarColor = function (color) {
        this.sidebarColor = color;
        this.sidebarColorUpdate.emit(this.sidebarColor);
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UsersService = /** @class */ (function () {
    function UsersService(router) {
        this.router = router;
    }
    UsersService.prototype.storeData = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.setItem('userData', JSON.stringify(data));
                        return [4 /*yield*/, this.getData()];
                    case 1:
                        newData = _a.sent();
                        return [2 /*return*/, this.router.navigate(['dashboard'], newData)];
                }
            });
        });
    };
    UsersService.prototype.getData = function () {
        return JSON.parse(localStorage.getItem('userData'));
    };
    UsersService.prototype.sessionIn = function () {
        var A;
        if (this.getData()) {
            A = this.router.navigate(['dashboard'], this.getData());
        }
        return A;
    };
    UsersService.prototype.sessionOut = function () {
        var A;
        if (!this.getData()) {
            A = this.router.navigate(['']);
        }
        return A;
    };
    UsersService.prototype.logOut = function () {
        localStorage.setItem('userData', '');
        localStorage.clear();
        return this.router.navigate(['']);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/shared/figurecard/figurecard.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/figurecard/figurecard.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".figure-card{\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n}\n\n.card-content{\n  text-align: right;\n  padding: 15px 20px 13px 20px;\n}\n\n.card-header {\n  float: left;\n  text-align: center;\n  /*background: linear-gradient(60deg, #ffa726, #fb8c00);*/\n  /*box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(255, 152, 0, 0.4);*/\n  margin: -20px 15px 0;\n  border-radius: 3px;\n  padding: 15px;\n  position: relative;\n}\n\n.card-header i {\n  font-size: 36px;\n  line-height: 56px;\n  width: 56px;\n  height: 56px;\n  color: #fff;\n}\n\n.category{\n  color: #999;\n}\n\n.card-footer{\n  margin: 0 20px 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n  color: #999;\n  font-size: 12px;\n  position: relative;\n}\n\n.card-footer i {\n  font-size: 16px;\n  position: relative;\n  top: 4px;\n  color: #999;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZpZ3VyZWNhcmQvZmlndXJlY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHdEQUF3RDtFQUN4RCx3RkFBd0Y7RUFDeEYsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZpZ3VyZWNhcmQvZmlndXJlY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZ3VyZS1jYXJke1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuXG4uY2FyZC1jb250ZW50e1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMTVweCAyMHB4IDEzcHggMjBweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNmZmE3MjYsICNmYjhjMDApOyovXG4gIC8qYm94LXNoYWRvdzogMCA0cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDI1NSwgMTUyLCAwLCAwLjQpOyovXG4gIG1hcmdpbjogLTIwcHggMTVweCAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtaGVhZGVyIGkge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNhdGVnb3J5e1xuICBjb2xvcjogIzk5OTtcbn1cblxuLmNhcmQtZm9vdGVye1xuICBtYXJnaW46IDAgMjBweCAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtZm9vdGVyIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIGNvbG9yOiAjOTk5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/figurecard/figurecard.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/figurecard/figurecard.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"figure-card card\">\n  <div class=\"card-header\" [ngStyle]=\"{ 'background': linearColor, 'box-shadow': boxShadow }\">\n    <i class=\"material-icons\">{{ headerIcon }}</i>\n  </div>\n  <div class=\"card-content\">\n    <p class=\"category\">{{ category }}</p>\n    <h3 class=\"title\">{{ title }}</h3>\n  </div>\n  <div class=\"card-footer\">\n      <i class=\"material-icons text-danger\">{{ footerIcon }}</i> {{ footContent }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/figurecard/figurecard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/figurecard/figurecard.component.ts ***!
  \***********************************************************/
/*! exports provided: FigurecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FigurecardComponent", function() { return FigurecardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FigurecardComponent = /** @class */ (function () {
    function FigurecardComponent() {
    }
    FigurecardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FigurecardComponent.prototype, "headerIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FigurecardComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FigurecardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FigurecardComponent.prototype, "footerIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FigurecardComponent.prototype, "footContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FigurecardComponent.prototype, "linearColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FigurecardComponent.prototype, "boxShadow", void 0);
    FigurecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-figurecard',
            template: __webpack_require__(/*! ./figurecard.component.html */ "./src/app/shared/figurecard/figurecard.component.html"),
            styles: [__webpack_require__(/*! ./figurecard.component.css */ "./src/app/shared/figurecard/figurecard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FigurecardComponent);
    return FigurecardComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.left *{\n  color: #fff;\n}\n\n.right{\n  display: flex;\n}\n\n.right a{\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n  margin-right: 25px;\n}\n\n.right p{\n  margin-left: 5px;\n  font-size: 12px;\n  line-height: normal;\n  color: #fff;\n}\n\n.right i{\n  font-size: 20px;\n}\n\n.router-active{\n  background-color: rgba(255,255,255,.1);\n  padding: 15px 18px 15px 15px;\n  border-radius: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0ICp7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmlnaHR7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5yaWdodCBhe1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLnJpZ2h0IHB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5yaWdodCBpe1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5yb3V0ZXItYWN0aXZle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4xKTtcbiAgcGFkZGluZzogMTVweCAxOHB4IDE1cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"left\">\n    <h5>Pignora - Plataforma de empeño y compraventa en linea</h5>\n  </div>\n  <div class=\"right\">\n    <a routerLink=\"\" routerLinkActive=\"router-active\" [routerLinkActiveOptions]=\"{exact: true}\"><i class=\"material-icons\">fingerprint</i><p>LOGIN</p></a>\n    <a routerLink=\"/register\" routerLinkActive=\"router-active\"><i class=\"material-icons\">person_add</i><p>REGISTER</p></a>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/imagecard/imagecard.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/imagecard/imagecard.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-card{\n  position: relative;\n  width: 100%;\n  margin: 25px 0;\n  padding: 15px;\n}\n\n.header{\n  position: relative;\n  overflow: hidden;\n  margin-top: -40px;\n  border-radius: 6px;\n  z-index: 3;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n.header img{\n  position: relative;\n  max-width: 100%;\n  border-radius: 6px;\n}\n\n.body{\n  text-align: center;\n  padding: 10px 10px 13px 10px;\n  margin-top: 7px;\n}\n\n.body p{\n  margin-top: 5px;\n  color: #999;\n  font-weight: 100;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #eee;\n}\n\n.footer{\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 8px 2px 8px;\n}\n\n.footer .position{\n  display: flex;\n  align-items: center;\n  color: #999;\n  font-weight: 100;\n}\n\n.footer i{\n  font-size: 17px;\n  margin-right: 3px;\n}\n\n.footer h4{\n  color: rgba(0,0,0, 0.87);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ltYWdlY2FyZC9pbWFnZWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdUhBQXVIO0FBQ3pIOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbWFnZWNhcmQvaW1hZ2VjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtY2FyZHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAyNXB4IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5oZWFkZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgei1pbmRleDogMztcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCA0cHggMjVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5oZWFkZXIgaW1ne1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uYm9keXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTNweCAxMHB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG5cbi5ib2R5IHB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmZvb3RlcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDhweCAycHggOHB4O1xufVxuXG4uZm9vdGVyIC5wb3NpdGlvbntcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5mb290ZXIgaXtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbn1cblxuLmZvb3RlciBoNHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsIDAuODcpO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/imagecard/imagecard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/imagecard/imagecard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image-card card\">\n  <div class=\"header\">\n    <img [src]=\"image\"/>\n  </div>\n  <div class=\"body\">\n    <h4>{{ title }}</h4>\n    <p>{{ desc }}</p>\n  </div>\n  <div class=\"footer\">\n    <h4>{{ footerTitle }}</h4>\n    <div class=\"position\"><i class=\"material-icons\">location_on</i> {{ position }}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/imagecard/imagecard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/imagecard/imagecard.component.ts ***!
  \*********************************************************/
/*! exports provided: ImagecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagecardComponent", function() { return ImagecardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImagecardComponent = /** @class */ (function () {
    function ImagecardComponent() {
    }
    ImagecardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImagecardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImagecardComponent.prototype, "desc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImagecardComponent.prototype, "footerTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImagecardComponent.prototype, "position", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImagecardComponent.prototype, "image", void 0);
    ImagecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-imagecard',
            template: __webpack_require__(/*! ./imagecard.component.html */ "./src/app/shared/imagecard/imagecard.component.html"),
            styles: [__webpack_require__(/*! ./imagecard.component.css */ "./src/app/shared/imagecard/imagecard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImagecardComponent);
    return ImagecardComponent;
}());



/***/ }),

/***/ "./src/app/shared/msgiconbtn/msgiconbtn.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/msgiconbtn/msgiconbtn.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".msg-btn{\n  position: relative;\n}\n\n.msg-btn i{\n  font-size: 19px;\n  color: #555;\n}\n\n.msg-btn span{\n  position: absolute;\n  top: 2px;\n  border: 1px solid #FFF;\n  right: 2px;\n  font-size: 9px;\n  background: #f44336;\n  color: #FFF;\n  min-width: 20px;\n  padding: 0px 5px;\n  height: 20px;\n  border-radius: 10px;\n  text-align: center;\n  line-height: 19px;\n  vertical-align: middle;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21zZ2ljb25idG4vbXNnaWNvbmJ0bi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbXNnaWNvbmJ0bi9tc2dpY29uYnRuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXNnLWJ0bntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubXNnLWJ0biBpe1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiAjNTU1O1xufVxuXG4ubXNnLWJ0biBzcGFue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xuICByaWdodDogMnB4O1xuICBmb250LXNpemU6IDlweDtcbiAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgY29sb3I6ICNGRkY7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shared/msgiconbtn/msgiconbtn.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/msgiconbtn/msgiconbtn.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button class=\"msg-btn\">\n  <span>{{ number }}</span>\n  <i class=\"material-icons icon-btn\">{{ icon }}</i>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/msgiconbtn/msgiconbtn.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/msgiconbtn/msgiconbtn.component.ts ***!
  \***********************************************************/
/*! exports provided: MsgIconBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsgIconBtnComponent", function() { return MsgIconBtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MsgIconBtnComponent = /** @class */ (function () {
    function MsgIconBtnComponent() {
    }
    MsgIconBtnComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MsgIconBtnComponent.prototype, "number", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MsgIconBtnComponent.prototype, "icon", void 0);
    MsgIconBtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-msgiconbtn',
            template: __webpack_require__(/*! ./msgiconbtn.component.html */ "./src/app/shared/msgiconbtn/msgiconbtn.component.html"),
            styles: [__webpack_require__(/*! ./msgiconbtn.component.css */ "./src/app/shared/msgiconbtn/msgiconbtn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MsgIconBtnComponent);
    return MsgIconBtnComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.left-part, .right-part{\n  display: flex;\n  align-items: center;\n}\n\n.nav-bar h4{\n  color: #555;\n}\n\n.mat-mini-fab{\n  box-shadow:  0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12);\n  background-color: #fefefe;\n  color: #999;\n  margin-right: 15px;\n}\n\n.mat-mini-fab:hover{\n  color: #999 !important;\n  box-shadow: 0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2) !important;\n}\n\n.mat-mini-fab:focus{\n  color: #999 !important;\n}\n\n.search-btn{\n  margin: 0 5px 0 7px;\n}\n\n.icon-btn{\n  font-size: 19px;\n  color: #555;\n}\n\n.mat-icon-button{\n  margin-left: 7px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtJQUFrSTtFQUNsSSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnSkFBZ0o7QUFDbEo7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sZWZ0LXBhcnQsIC5yaWdodC1wYXJ0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWJhciBoNHtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5tYXQtbWluaS1mYWJ7XG4gIGJveC1zaGFkb3c6ICAwIDJweCAycHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMTUzLCAxNTMsIDE1MywgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tYXQtbWluaS1mYWI6aG92ZXJ7XG4gIGNvbG9yOiAjOTk5ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyNnB4IC0xMnB4IHJnYmEoMTUzLCAxNTMsIDE1MywgMC40MiksIDAgNHB4IDIzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMikgIWltcG9ydGFudDtcbn1cblxuLm1hdC1taW5pLWZhYjpmb2N1c3tcbiAgY29sb3I6ICM5OTkgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1idG57XG4gIG1hcmdpbjogMCA1cHggMCA3cHg7XG59XG5cbi5pY29uLWJ0bntcbiAgZm9udC1zaXplOiAxOXB4O1xuICBjb2xvcjogIzU1NTtcbn1cblxuLm1hdC1pY29uLWJ1dHRvbntcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\n  <div class=\"left-part\">\n    <button mat-mini-fab id=\"nav-left-button\"><i class=\"material-icons\" style=\"font-size:18px;\">more_vert</i></button>\n    <h4>{{ title }}</h4>\n  </div>\n  <div class=\"right-part\">\n    <div class=\"right-part\" id=\"nav-right\">\n      <mat-form-field color=\"#ff0000\">\n        <input matInput type=\"search\" placeholder=\"Search\">\n      </mat-form-field>\n      <button mat-mini-fab class=\"search-btn\"><i class=\"material-icons\" style=\"font-size:18px;\">search</i></button>\n      <button mat-icon-button><i class=\"material-icons icon-btn\">dashboard</i></button>\n      <app-msgiconbtn icon=\"notifications\" number=\"5\" [matMenuTriggerFor]=\"menu\"></app-msgiconbtn>\n      <button mat-icon-button><i class=\"material-icons icon-btn\">person</i></button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>Mike John responded to your email</button>\n        <button mat-menu-item>You have 5 new tasks</button>\n        <button mat-menu-item>You're now friend with Andrew</button>\n        <button mat-menu-item>Another Notification</button>\n        <button mat-menu-item>Another One</button>\n      </mat-menu>\n    </div>\n    <div id=\"menu\">\n      <button mat-icon-button (click)=\"menuClick()\"><i class=\"material-icons\">menu</i></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.menuClick = function () {
        // document.getElementById('main-panel').style.marginRight = '260px';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NavbarComponent.prototype, "title", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/shared/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar-routes.config.ts":
/*!**************************************************!*\
  !*** ./src/app/sidebar/sidebar-routes.config.ts ***!
  \**************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
    { path: 'profile', title: 'User Profile', icon: 'person', children: null },
    { path: 'table', title: 'Table List', icon: 'content_paste', children: null },
    { path: '#component', id: 'component', title: 'Component', icon: 'apps', children: [
            { path: 'components/price-table', title: 'Price Table', icon: 'PT' },
            { path: 'components/panels', title: 'Panels', icon: 'P' },
            { path: 'components/wizard', title: 'Wizard', icon: 'W' },
        ] },
    { path: 'notification', title: 'Notification', icon: 'notifications', children: null },
    { path: 'alert', title: 'Sweet Alert', icon: 'warning', children: null },
    { path: 'settings', title: 'Settings', icon: 'settings', children: null },
];


/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\n  padding: 25px 0 20px 0;\n  color: #fff;\n  font-size: 18px;\n  text-align: center;\n  position: relative;\n}\n\n.logo img{\n  width: 42px;\n  position: absolute;\n  top: 16px;\n  left: 13px;\n}\n\n.divider{\n  content: '';\n  position: relative;\n  height: 1px;\n  left: 15px;\n  width: calc(100% - 30px);\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.sidebar-wrapper{\n  overflow-y: auto;\n  padding-bottom: 30px;\n  width: 260px;\n  position: relative;\n  height: 100%;\n}\n\n.nav-container{\n  position: relative;\n}\n\n.nav{\n  padding-top: 15px;\n}\n\n.nav li{\n  margin-bottom: 9px;\n}\n\n.nav li a{\n  display: flex;\n  align-items: center;\n  color: rgba(255,255,255,.8);\n  margin: 0 15px;\n  border-radius: 3px;\n  transition: all 400ms;\n  height: 50px;\n  text-decoration: none;\n}\n\n.nav li a:hover, .parent-active{\n  background-color: rgba(255,255,255,.1);\n}\n\n.nav li a span{\n  margin-left: 20px;\n}\n\n.active a, .active a:hover{\n  /*color: rgba(0,0,0,.6) !important;*/\n  /*background-color: #fff !important;*/\n  box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(60, 72, 88, 0.4);\n  transition: all 400ms;\n}\n\n.collapse-a{\n  position: relative;\n}\n\n.collapse-a .caret{\n  position: absolute;\n  right: 21px;\n  top: 23px;\n  color: #fff;\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  transition: all 200ms;\n}\n\n.collapsed .caret{\n  position: absolute;\n  right: 21px;\n  top: 23px;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUtsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxxQ0FBcUM7RUFDckMscUZBQXFGO0VBS3JGLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxpQ0FBaUM7RUFJakMseUJBQXlCO0VBS3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULCtCQUErQjtFQUkvQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xuICBwYWRkaW5nOiAyNXB4IDAgMjBweCAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ28gaW1ne1xuICB3aWR0aDogNDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDEzcHg7XG59XG5cbi5kaXZpZGVye1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogMTVweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXJ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB3aWR0aDogMjYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubmF2LWNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubmF2e1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLm5hdiBsaXtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xufVxuXG4ubmF2IGxpIGF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC44KTtcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXYgbGkgYTpob3ZlciwgLnBhcmVudC1hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjEpO1xufVxuXG4ubmF2IGxpIGEgc3BhbntcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5hY3RpdmUgYSwgLmFjdGl2ZSBhOmhvdmVye1xuICAvKmNvbG9yOiByZ2JhKDAsMCwwLC42KSAhaW1wb3J0YW50OyovXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50OyovXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgN3B4IDEwcHggLTVweCByZ2JhKDYwLCA3MiwgODgsIDAuNCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgLW1zLXRyYW5zaXRpb246IGFsbCA0MDBtcztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDQwMG1zO1xuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG59XG5cbi5jb2xsYXBzZS1he1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2xsYXBzZS1hIC5jYXJldHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjFweDtcbiAgdG9wOiAyM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMjAwbXM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xufVxuXG4uY29sbGFwc2VkIC5jYXJldHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjFweDtcbiAgdG9wOiAyM3B4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo text-uppercase\" [style.color]=\"normalFontColor\">\n  <img src=\"../../assets/img/angular2-logo.png\" class=\"logo-img\" alt=\"logo\"/>\n  Dashboard Pro\n</div>\n<div class=\"divider\" [style.background-color]=\"dividerBgColor\"></div>\n<div class=\"sidebar-wrapper\">\n  <div class=\"nav-container\">\n    <ul class=\"nav\">\n      <li *ngFor=\"let menuItem of menuItems\" routerLinkActive #rla=\"routerLinkActive\" [ngClass]=\"rla.isActive? (menuItem.children === null? 'active' : '') : ''\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a [style.display]=\"menuItem.children === null? 'flex' : 'none'\" [routerLink]=\"[menuItem.path]\" [style.background-color]=\"rla.isActive? color : 'transparent'\" [style.color]=\"rla.isActive? activeFontColor : normalFontColor\">\n          <i class=\"material-icons\">{{menuItem.icon}}</i>\n          <span>{{menuItem.title}}</span>\n        </a>\n        <div [hidden]=\"menuItem.children === null\" class=\"collapse-container\">\n          <a data-toggle=\"collapse\" [href]=\"[menuItem.path]\" style=\"padding: 0 15px;\" [ngClass]=\"rla.isActive? 'parent-active' : ''\" class=\"collapse-a collapsed\" [style.color]=\"normalFontColor\">\n            <i class=\"material-icons\">{{menuItem.icon}}</i>\n            <span>{{menuItem.title}}</span>\n            <b class=\"caret\" [style.color]=\"normalFontColor\"></b>\n          </a>\n          <div id=\"component\" class=\"collapse\" [id]=\"[menuItem.id]\">\n            <ul class=\"nav\">\n              <li *ngFor=\"let subItem of menuItem.children\" routerLinkActive #subrla=\"routerLinkActive\" [ngClass]=\"subrla.isActive? 'active' : ''\">\n                <a [routerLink]=\"[subItem.path]\" [style.background-color]=\"subrla.isActive? color : 'transparent'\" [style.color]=\"subrla.isActive? activeFontColor : normalFontColor\" style=\"height: 43px;\">\n                  <span style=\"margin-left: 5px; width: 21px;\">{{subItem.icon}}</span>\n                  <span>{{subItem.title}}</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/sidebar/sidebar-routes.config.ts");




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(settingsService) {
        this.settingsService = settingsService;
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_3__["ROUTES"];
        this.activeFontColor = 'rgba(0,0,0,.6)';
        this.normalFontColor = 'rgba(255,255,255,.8)';
        this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.color = this.settingsService.getSidebarFilter();
        this.settingsService.sidebarFilterUpdate.subscribe(function (filter) {
            _this.color = filter;
            if (filter === '#fff') {
                _this.activeFontColor = 'rgba(0,0,0,.6)';
            }
            else {
                _this.activeFontColor = 'rgba(255,255,255,.8)';
            }
        });
        this.settingsService.sidebarColorUpdate.subscribe(function (color) {
            if (color === '#fff') {
                _this.normalFontColor = 'rgba(0,0,0,.6)';
                _this.dividerBgColor = 'rgba(0,0,0,.1)';
            }
            else {
                _this.normalFontColor = 'rgba(255,255,255,.8)';
                _this.dividerBgColor = 'rgba(255, 255, 255, 0.5)';
            }
        });
    };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.settingsService.sidebarFilterUpdate.unsubscribe();
        this.settingsService.sidebarColorUpdate.unsubscribe();
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], SidebarComponent);
    return SidebarComponent;
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

module.exports = __webpack_require__(/*! /Users/miguelsuevis/Documents/project/angularLab/pignora/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map