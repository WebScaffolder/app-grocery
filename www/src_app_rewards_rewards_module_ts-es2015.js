(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_rewards_rewards_module_ts"],{

/***/ 76862:
/*!*******************************************!*\
  !*** ./src/app/rewards/rewards.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardsPageModule": function() { return /* binding */ RewardsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _rewards_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rewards.page */ 74090);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _rewards_page__WEBPACK_IMPORTED_MODULE_0__.RewardsPage
    }
];
let RewardsPageModule = class RewardsPageModule {
};
RewardsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        ],
        declarations: [_rewards_page__WEBPACK_IMPORTED_MODULE_0__.RewardsPage]
    })
], RewardsPageModule);



/***/ }),

/***/ 74090:
/*!*****************************************!*\
  !*** ./src/app/rewards/rewards.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardsPage": function() { return /* binding */ RewardsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_rewards_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./rewards.page.html */ 54963);
/* harmony import */ var _rewards_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rewards.page.scss */ 17975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/config/config.service */ 83681);








let RewardsPage = class RewardsPage {
    constructor(navCtrl, config, appHttpService, appToastService) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.appHttpService = appHttpService;
        this.appToastService = appToastService;
        this.pointsArray = [];
    }
    goBack() {
        this.navCtrl.pop();
    }
    ionViewDidEnter() {
        this.pullRefresh();
    }
    pullRefresh() {
        this.getProducts();
    }
    getProducts() {
        let url = "points";
        url += "?language_id=" + this.config.languageIdNumber;
        url += "&currency=" + this.config.currencyIdNumber;
        this.appHttpService.getHttp(url, true).then((data) => {
            let dat = data;
            this.pointsArray = dat;
            this.ionRefresher.complete();
        });
    }
    redeemPoints() {
        let url = "redeem";
        url += "?language_id=" + this.config.languageIdNumber;
        url += "&currency=" + this.config.currencyIdNumber;
        this.appHttpService.postHttp(url, {}, true).then((data) => {
            let dat = data;
            this.appToastService.toastMiddle("Redeem Successfull");
        });
    }
    ngOnInit() {
    }
    rewardPoints() {
        let total = 0;
        this.pointsArray.forEach(element => {
            total += element.points;
        });
        return total;
    }
};
RewardsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__.AppHttpService },
    { type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_3__.AppToastService }
];
RewardsPage.propDecorators = {
    ionRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRefresher, { static: false },] }]
};
RewardsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-rewards',
        template: _raw_loader_rewards_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_rewards_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RewardsPage);



/***/ }),

/***/ 17975:
/*!*******************************************!*\
  !*** ./src/app/rewards/rewards.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".points-text {\n  padding-left: 3px;\n}\n\nion-content {\n  --padding-start: var(--app-padding-left-right);\n  --padding-end: var(--app-padding-left-right);\n}\n\nion-footer ion-button {\n  --border-radius: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld2FyZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0VBQ0ksOENBQWdCO0VBQ2hCLDRDQUFjO0FBQ2xCOztBQUVBO0VBRVEsa0JBQWdCO0FBQXhCIiwiZmlsZSI6InJld2FyZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50cy10ZXh0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 54963:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rewards/rewards.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'rewards'| translate }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"pullRefresh()\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-row class=\"ion-text-center ion-padding\">\n    <ion-col class=\"font-extra-large-2 font-bold ion-padding\">{{rewardPoints()}}<small\n        class=\"ion-text-capitalize font-bold-normal font-large points-text\">{{'points'|translate}}</small></ion-col>\n  </ion-row>\n  <ion-list>\n    <ion-item *ngFor=\"let p of pointsArray\">\n      <ion-icon name=\"gift-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{p.description}}</ion-label>\n      <ion-note slot=\"end\" color=\"danger\">{{p.points}}</ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"block\" color=\"primary\" class=\"ion-no-margin\" (click)=\"redeemPoints()\"\n    [disabled]=\"rewardPoints()==0\">\n    {{ 'Redeem' | translate }}\n  </ion-button>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_rewards_rewards_module_ts-es2015.js.map