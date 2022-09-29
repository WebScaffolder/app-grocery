(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_thank-you_thank-you_module_ts"],{

/***/ 12176:
/*!***********************************************!*\
  !*** ./src/app/thank-you/thank-you.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouPageModule": function() { return /* binding */ ThankYouPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thank-you.page */ 65292);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_0__.ThankYouPage
    }
];
let ThankYouPageModule = class ThankYouPageModule {
};
ThankYouPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_0__.ThankYouPage]
    })
], ThankYouPageModule);



/***/ }),

/***/ 65292:
/*!*********************************************!*\
  !*** ./src/app/thank-you/thank-you.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouPage": function() { return /* binding */ ThankYouPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./thank-you.page.html */ 17228);
/* harmony import */ var _thank_you_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thank-you.page.scss */ 49486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);










let ThankYouPage = class ThankYouPage {
    constructor(navCtrl, shared, config, appCartService, appEventsService, appUserService) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.appCartService = appCartService;
        this.appEventsService = appEventsService;
        this.appUserService = appUserService;
    }
    openHome() {
        this.navCtrl.navigateRoot("tabs/home");
    }
    openOrders() {
        this.navCtrl.navigateRoot("my-orders");
    }
    goBack() {
        this.openHome();
    }
    ngOnInit() {
        this.appCartService.getCartFromServer();
    }
};
ThankYouPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_5__.AppCartService },
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_4__.AppEventsService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_6__.AppUserService }
];
ThankYouPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-thank-you',
        template: _raw_loader_thank_you_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_thank_you_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ThankYouPage);



/***/ }),

/***/ 49486:
/*!***********************************************!*\
  !*** ./src/app/thank-you/thank-you.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 150px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoidGhhbmsteW91LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE1MHB4O1xufVxuIl19 */");

/***/ }),

/***/ 17228:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thank-you/thank-you.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border bg-transparent\">\n  <ion-toolbar class=\"bg-transparent\">\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'Thank You'| translate }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-capitalize\">\n  <div class=\"ion-text-center\">\n    <ion-card-content>\n      <ion-icon color=\"primary\" name=\"checkmark-circle\"></ion-icon>\n      <h3 class=\"font-extra-large-20 avenir-next-bold\">\n        <ion-text color=\"primary\">{{'congratulations'| translate }}</ion-text>\n      </h3>\n      <h4 class=\"font-large margin-bottom-20\">{{'your order has been placed'| translate }}</h4>\n      <ion-button expand=\"block\" (click)=\"openOrders()\" class=\"ion-margin-top ion-margin-horizontal\" *ngIf=\"appUserService.userIsLogedIn()\">\n        {{'my Orders'| translate }}</ion-button>\n      <ion-button class=\"ion-margin-top ion-margin-horizontal\" (click)=\"openHome()\" expand=\"block\" fill=\"outline\">\n        {{'continue shopping'| translate }}</ion-button>\n    </ion-card-content>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_thank-you_thank-you_module_ts-es2015.js.map