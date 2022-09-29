(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_cart_cart_module_ts"],{

/***/ 12943:
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": function() { return /* binding */ CartPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 34612);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var src_components_product_list_card_product_list_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/product-list-card/product-list-card.module */ 33873);
/* harmony import */ var src_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/product-card/product-card.module */ 12682);
/* harmony import */ var src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/no-record-found/no-record-found.module */ 34334);







// For Translation Language




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            src_components_product_list_card_product_list_card_module__WEBPACK_IMPORTED_MODULE_2__.productListCardModule,
            src_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_3__.productCardModule,
            src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_4__.NoRecordFoundModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage]
    })
], CartPageModule);



/***/ }),

/***/ 34612:
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": function() { return /* binding */ CartPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart.page.html */ 86568);
/* harmony import */ var _cart_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss */ 9281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);
/* harmony import */ var src_services_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/app-storage/app-storage.service */ 75211);














let CartPage = class CartPage {
    constructor(navCtrl, shared, config, loading, storage, appEventsService, modalCtrl, actionSheetCtrl, appHttpService, appCartService, appUserService, appLogService) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.loading = loading;
        this.storage = storage;
        this.appEventsService = appEventsService;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.appHttpService = appHttpService;
        this.appCartService = appCartService;
        this.appUserService = appUserService;
        this.appLogService = appLogService;
        this.moreProductsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.couponCodeString = "";
        this.getMoreProducts();
    }
    goBack() {
        this.navCtrl.pop();
    }
    getMoreProducts() {
        let url = "products";
        url += "?limit=" + this.config.perPageNumber;
        url += "&getCategory=1";
        url += "&getDetail=1";
        url += "&language_id=" + this.config.languageIdNumber;
        //url += "&productType=simple"
        url += "&currency=" + this.config.currencyIdNumber;
        url += "&stock=1";
        this.appHttpService.getHttp(url).then((data) => {
            this.moreProductsArray = data;
        });
    }
    removeCoupon() {
        this.appCartService.removeCoupon();
    }
    ngOnInit() {
    }
    applyCoupon() {
        this.appCartService.checkCouponAvalability(this.couponCodeString);
    }
    proceedToCheckOut() {
        this.navCtrl.navigateForward("/shipping-address");
    }
};
CartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_services_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_10__.AppStorageService },
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__.AppEventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_6__.AppHttpService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_7__.AppCartService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_8__.AppUserService },
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_9__.AppLogService }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-cart',
        template: _raw_loader_cart_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cart_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CartPage);



/***/ }),

/***/ 9281:
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: var(--app-padding-left-right);\n  --padding-end: var(--app-padding-left-right);\n}\n\nion-list ion-item {\n  --padding-start: 0;\n}\n\n.remove-coupon {\n  vertical-align: bottom;\n}\n\nion-grid {\n  margin-top: 5px;\n  padding-left: 0;\n  padding-right: 0;\n}\n\nion-grid ion-row ion-col ion-item {\n  --padding-start: 0;\n}\n\nion-grid ion-row ion-col ion-input {\n  border: 1px solid #cdd2de;\n  border-radius: 3px;\n}\n\nion-grid ion-row ion-col ion-button {\n  color: white;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 10px;\n}\n\n.bottom-products-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\napp-product-list-card {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQWdCO0VBQ2hCLDRDQUFjO0FBQ2xCOztBQUNBO0VBRVEsa0JBQWdCO0FBQ3hCOztBQUVBO0VBQ0ksc0JBQXNCO0FBQzFCOztBQUNBO0VBQ0ksZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFFcEI7O0FBTEE7RUFPZ0Isa0JBQWdCO0FBRWhDOztBQVRBO0VBVWdCLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFHbEM7O0FBZEE7RUFjZ0IsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBSWhDOztBQUNBO0VBQ0ksdURBQXVEO0VBQ3ZELHdEQUF3RDtBQUU1RDs7QUFDQTtFQUNJLFdBQVc7QUFFZiIsImZpbGUiOiJjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xufVxuaW9uLWxpc3Qge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIH1cbn1cbi5yZW1vdmUtY291cG9uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuaW9uLWdyaWQge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBpb24tcm93IHtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RkMmRlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5ib3R0b20tcHJvZHVjdHMtZ3JpZCB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbn1cblxuYXBwLXByb2R1Y3QtbGlzdC1jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 86568:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'my cart'| translate }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-no-record-found [data]=\"appCartService.cartProductsArray\" *ngIf=\"appCartService.cartProductsArray.length==0\">\n  </app-no-record-found>\n  <div *ngIf=\"appCartService.cartProductsArray.length!=0\">\n    <ion-list class=\"bg-transparent no-padding-top\">\n      <ion-item lines=none class=\"bg-transparent padding-top-10\" *ngFor=\"let p of appCartService.cartProductsArray\">\n        <app-product-list-card page=\"cart\" [data]=\"p\"></app-product-list-card>\n      </ion-item>\n    </ion-list>\n    <!-- 1st -->\n    <ion-grid class=\"app-item-background-color ion-no-margin ion-no-padding\"\n      [class.round-borders]=\"config.roundBordersBool\">\n      <ion-row>\n        <ion-col class=\"padding-horizontal-10 app-item-background-color\">\n          <ion-item lines=\"none\" class=\"app-item-background-color\">\n            <ion-label>\n              <p class=\"ion-text-capitalize\"> {{\"promocode\"|translate}}</p>\n            </ion-label>\n            <!-- <ion-icon size=\"small\" name=\"chevron-down-outline\"></ion-icon> -->\n          </ion-item>\n          <ion-input placeholder=\"{{'enter code here'|translate}}\" [(ngModel)]=\"couponCodeString\"></ion-input>\n          <ion-button expand=\"block\" class=\"font-bold\" (click)=\"applyCoupon()\" [disabled]=\"couponCodeString==''\">\n            {{\"apply\"|translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- 2nd -->\n    <ion-grid class=\"app-item-background-color margin-top-10\" [class.round-borders]=\"config.roundBordersBool\">\n      <!-- row1 -->\n      <ion-row>\n        <ion-col class=\"padding-horizontal-10 ion-text-capitalize\">\n          <ion-label><span class=\"font-large\">{{\"subotal\"|translate}}:</span></ion-label>\n        </ion-col>\n        <ion-col class=\"ion-text-end padding-horizontal-10\"><span\n            class=\"font-large\">{{appCartService.cartSubTotalFloat|curency}}</span>\n        </ion-col>\n      </ion-row>\n      <!-- 2nd row -->\n      <ion-row>\n        <ion-col class=\"padding-horizontal-10 ion-text-capitalize\">\n          <ion-label><span class=\"font-large\">{{\"discount\"|translate}}:</span></ion-label>\n        </ion-col>\n        <ion-col class=\"ion-text-end padding-horizontal-10\"><span class=\"font-large\">\n            <ion-badge *ngIf=\"appCartService.cartDiscountFloat\" mode=ios class=\"font-extra-small remove-coupon\"\n              color=\"danger\" (click)=\"removeCoupon()\">\n              {{\"remove\"|translate}}\n            </ion-badge>\n            {{appCartService.cartDiscountFloat|curency}}\n          </span>\n        </ion-col>\n      </ion-row>\n      <!-- 2nd row -->\n      <ion-row>\n        <ion-col class=\"padding-horizontal-10 ion-text-capitalize\">\n          <ion-label><span class=\"font-large\">{{\"estimated shipping\"|translate}}:</span></ion-label>\n        </ion-col>\n        <ion-col class=\"ion-text-end padding-horizontal-10\"><span\n            class=\"font-large\">{{appCartService.cartShippingFloat|curency}}</span>\n        </ion-col>\n      </ion-row>\n      <!-- 3rd row -->\n      <ion-row>\n        <ion-col class=\"padding-horizontal-10 ion-text-capitalize\">\n          <ion-label><span class=\"font-large\">{{\"tax\"|translate}}:</span></ion-label>\n        </ion-col>\n        <ion-col class=\"ion-text-end padding-horizontal-10 \"><span\n            class=\"font-large\">{{appCartService.cartTaxFloat|curency}}</span>\n        </ion-col>\n      </ion-row><br>\n      <!-- 4th row -->\n      <ion-row>\n        <ion-col class=\"padding-horizontal-10 ion-text-capitalize\">\n          <ion-label><span>{{\"order total\"|translate}}:</span></ion-label>\n        </ion-col>\n        <ion-col class=\"ion-text-end padding-horizontal-10\"><span\n            style=\"color: red;\">{{appCartService.cartTotalFloat|curency}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- 3rd  -->\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"padding-horizontal-10\">\n          <ion-button expand=\"block\" id=\"proceed\" class=\"font-bold ion-text-uppercase\" (click)=\"proceedToCheckOut()\">\n            {{\"proceed to\n            checkout\"|translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <!-- 4th -->\n    <ion-grid>\n      <ion-row>\n        <img [appImageValidate]=\"70\" src=\"assets/Capture.png\" (click)=\"shared.openShopPage()\" [class.round-borders]=\"config.roundBordersBool\"/>\n      </ion-row>\n    </ion-grid>\n    <!-- 5th -->\n\n    <div lines=\"none\" class=\"bg-transparent ion-margin-vertical bottom-products-grid\">\n      <ion-label class=\"avenir-next-bold font-large\">\n        {{\"you might also like\"|translate}}\n      </ion-label>\n    </div>\n\n    <ion-grid class=\"bottom-products-grid no-padding no-margin\">\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let p of moreProductsArray\">\n          <app-product-card [data]=\"p\"></app-product-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_cart_cart_module_ts-es2015.js.map