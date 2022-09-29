(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_add-review_add-review_module_ts"],{

/***/ 3581:
/*!*************************************************!*\
  !*** ./src/app/add-review/add-review.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddReviewPageModule": function() { return /* binding */ AddReviewPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _add_review_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-review.page */ 9695);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _add_review_page__WEBPACK_IMPORTED_MODULE_0__.AddReviewPage
    }
];
let AddReviewPageModule = class AddReviewPageModule {
};
AddReviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        declarations: [_add_review_page__WEBPACK_IMPORTED_MODULE_0__.AddReviewPage]
    })
], AddReviewPageModule);



/***/ }),

/***/ 9695:
/*!***********************************************!*\
  !*** ./src/app/add-review/add-review.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddReviewPage": function() { return /* binding */ AddReviewPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_review_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-review.page.html */ 46730);
/* harmony import */ var _add_review_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-review.page.scss */ 52450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);













let AddReviewPage = class AddReviewPage {
    constructor(navCtrl, http, config, activatedRoute, loading, shared, applicationRef, appHttpService, appToastService, appUserService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.config = config;
        this.activatedRoute = activatedRoute;
        this.loading = loading;
        this.shared = shared;
        this.applicationRef = applicationRef;
        this.appHttpService = appHttpService;
        this.appToastService = appToastService;
        this.appUserService = appUserService;
        this.rating = null;
        this.errorMessage = '';
        this.formData = { name: '', email: '', description: '' };
        this.ratingStars = [
            { value: '1', fill: 'star-outline' },
            { value: '2', fill: 'star-outline' },
            { value: '3', fill: 'star-outline' },
            { value: '4', fill: 'star-outline' },
            { value: '5', fill: 'star-outline' }
        ];
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.formData.name = this.appUserService.customerData.first_name + " " + this.appUserService.customerData.last_name;
        this.formData.email = this.appUserService.customerData.email;
    }
    addComment() {
        var dat = {};
        dat.product_id = this.id;
        dat.rating = this.rating;
        dat.languages_id = this.config.languageIdNumber;
        dat.comment = this.formData.description;
        this.appHttpService.postHttp('review', dat, true).then((data) => {
            this.appToastService.toast("Thanks for Review!");
            this.navCtrl.pop();
        });
    }
    selectRating(value) {
        this.rating = value;
        for (let v of this.ratingStars) {
            if (v.value <= value)
                v.fill = 'star';
            else
                v.fill = 'star-outline';
        }
        this.applicationRef.tick();
    }
    disbaleButton() {
        //this.applicationRef.tick();
        if (this.rating == null) {
            return true;
        }
        else if (this.formData.description == "") {
            return true;
        }
        else if (this.formData.name == "") {
            return true;
        }
        else if (this.formData.email == "") {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.pop();
    }
};
AddReviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ApplicationRef },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService },
    { type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_7__.AppToastService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_6__.AppUserService }
];
AddReviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-add-review',
        template: _raw_loader_add_review_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_review_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddReviewPage);



/***/ }),

/***/ 52450:
/*!*************************************************!*\
  !*** ./src/app/add-review/add-review.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content h4 {\n  padding-left: 10px;\n}\n\nion-content ion-grid ion-row ion-col h5 {\n  padding-left: 10px;\n}\n\nion-content ion-grid ion-row ion-col ion-icon {\n  zoom: 1.9;\n  color: #d9d027;\n}\n\nion-content form ion-item {\n  --background: #fafafa;\n}\n\nion-content ion-button {\n  width: 100%;\n  margin: 0;\n  border: none;\n}\n\nion-footer ion-button {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRU0sa0JBQWtCO0FBRHhCOztBQURBO0VBUVksa0JBQWtCO0FBSDlCOztBQUxBO0VBV1ksU0FBUztFQUNULGNBQWM7QUFGMUI7O0FBVkE7RUFtQlEscUJBQWE7QUFMckI7O0FBZEE7RUF1Qk0sV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZO0FBTGxCOztBQVNFO0VBRUksU0FBUztBQVBmIiwiZmlsZSI6ImFkZC1yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudCB7XG4gICAgaDQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbiAgICBpb24tZ3JpZCB7XG4gICAgICBpb24tcm93IHtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgaDUge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICB6b29tOiAxLjk7XG4gICAgICAgICAgICBjb2xvcjogI2Q5ZDAyNztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9ybSB7XG4gICAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi1mb290ZXIge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICAiXX0= */");

/***/ }),

/***/ 46730:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-review/add-review.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'Write a review'|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"3.6\" class=\"ion-no-padding\">\n        <h5>{{'Your Rating:'|translate}}</h5>\n      </ion-col>\n      <ion-col size=\"1\" *ngFor=\"let s of ratingStars\" class=\"ion-align-self-end\">\n        <ion-icon [name]=\"s.fill\" (click)=\"selectRating(s.value)\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <form>\n    <ion-item lines=\"none\">\n      <ion-textarea rows=\"17\" placeholder=\"{{'Enter a description'|translate}}\" name=\"desc\"\n        [(ngModel)]=\"formData.description\" required></ion-textarea>\n    </ion-item>\n    <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n  </form>\n\n\n</ion-content>\n<ion-footer>\n  <ion-button expand=\"full\" color=\"primary\" (click)=\"addComment()\" [disabled]=\"disbaleButton()\">\n    {{ 'Post Comment' | translate }}\n  </ion-button>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_add-review_add-review_module_ts-es2015.js.map