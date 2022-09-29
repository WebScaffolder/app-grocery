(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_order_order_module_ts"],{

/***/ 78865:
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPageModule": function() { return /* binding */ OrderPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.page */ 76107);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var src_components_app_progress_bar_app_progress_bar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/app-progress-bar/app-progress-bar.module */ 77603);
/* harmony import */ var src_components_product_list_card_product_list_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/product-list-card/product-list-card.module */ 33873);
/* harmony import */ var src_components_address_info_card_address_info_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/address-info-card/address-info-card.module */ 3673);











const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_0__.OrderPage
    }
];
let OrderPageModule = class OrderPageModule {
};
OrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            src_components_app_progress_bar_app_progress_bar_module__WEBPACK_IMPORTED_MODULE_2__.AppProgressBarModule,
            src_components_product_list_card_product_list_card_module__WEBPACK_IMPORTED_MODULE_3__.productListCardModule,
            src_components_address_info_card_address_info_card_module__WEBPACK_IMPORTED_MODULE_4__.AddressInfoCardModule
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_0__.OrderPage]
    })
], OrderPageModule);



/***/ }),

/***/ 76107:
/*!*************************************!*\
  !*** ./src/app/order/order.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPage": function() { return /* binding */ OrderPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order.page.html */ 99578);
/* harmony import */ var _order_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.page.scss */ 72508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);
/* harmony import */ var src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-order/app-order.service */ 92248);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_in_App_browser_in_app_browser_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/in-App-browser/in-app-browser.service */ 15326);













let OrderPage = class OrderPage {
    constructor(navCtrl, appCartService, config, appHttpService, loading, appToastService, appOrderService, appUserService, inAppBrowserService) {
        this.navCtrl = navCtrl;
        this.appCartService = appCartService;
        this.config = config;
        this.appHttpService = appHttpService;
        this.loading = loading;
        this.appToastService = appToastService;
        this.appOrderService = appOrderService;
        this.appUserService = appUserService;
        this.inAppBrowserService = inAppBrowserService;
    }
    hideCardForm() {
        if (this.appOrderService.orderDetails.payment_method_type == "webview") {
            return true;
        }
        else if (this.appOrderService.orderDetails.payment_method_type == "banktransfer") {
            return true;
        }
        else if (this.appOrderService.orderDetails.payment_method_type == "cod") {
            return true;
        }
        else
            return false;
    }
    addToOrder() {
        if (this.appOrderService.orderDetails.payment_method_type == "webview") {
            this.payWithWebview();
        }
        else {
            this.payDirect();
        }
    }
    payDirect() {
        if (this.appOrderService.orderDetails.payment_method_type == "card") {
            if (!this.stripeForm.form.valid) {
                this.appToastService.toastError("invalid card data");
                return 0;
            }
        }
        this.appOrderService.orderDetails.currency_id = this.config.currencyIdNumber;
        if (this.appUserService.checkIfGuestSessionIsAvailable())
            this.appOrderService.orderDetails.session_id = this.appUserService.getGuestSession();
        this.appHttpService.postHttp('order', this.appOrderService.orderDetails, true).then((data) => {
            this.appToastService.toast("Order Placed");
            this.navCtrl.navigateRoot("thank-you");
        });
    }
    payWithWebview() {
        let url = this.config.yourSiteUrlString + "/order-web-view";
        url += "?token=" + this.appUserService.getCustomerToken();
        url += "&payment_method=" + this.appOrderService.orderDetails.payment_method;
        url += "&locations=" + this.appOrderService.orderDetails.latlong;
        url += "&billing_first_name=" + this.appOrderService.orderDetails.billing_first_name;
        url += "&billing_last_name=" + this.appOrderService.orderDetails.billing_last_name;
        url += "&billing_street_aadress=" + this.appOrderService.orderDetails.billing_street_aadress;
        url += "&billing_country=" + this.appOrderService.orderDetails.billing_country;
        url += "&billing_state=" + this.appOrderService.orderDetails.billing_state;
        url += "&billing_city=" + this.appOrderService.orderDetails.billing_city;
        url += "&billing_postcode=" + this.appOrderService.orderDetails.billing_postcode;
        url += "&billing_phone=" + this.appOrderService.orderDetails.billing_phone;
        url += "&delivery_first_name=" + this.appOrderService.orderDetails.delivery_first_name;
        url += "&delivery_last_name=" + this.appOrderService.orderDetails.delivery_last_name;
        url += "&delivery_street_aadress=" + this.appOrderService.orderDetails.delivery_street_aadress;
        url += "&delivery_country=" + this.appOrderService.orderDetails.delivery_country;
        url += "&delivery_state=" + this.appOrderService.orderDetails.delivery_state;
        url += "&delivery_city=" + this.appOrderService.orderDetails.delivery_city;
        url += "&delivery_postcode=" + this.appOrderService.orderDetails.delivery_postcode;
        url += "&delivery_phone=" + this.appOrderService.orderDetails.delivery_phone;
        url += "&currency_id=" + this.config.currencyIdNumber;
        url += "&language_id=" + this.config.languageIdNumber;
        url += "&order_notes=";
        if (this.appCartService.couponObject)
            url += "&coupon_code=" + this.appCartService.couponObject.coupon_code;
        this.inAppBrowserService.openSite(url);
    }
    getShippingAddressData() {
        let selected = false;
        return {
            text1: this.appOrderService.orderDetails.delivery_first_name + ' ' + this.appOrderService.orderDetails.delivery_last_name,
            text2: this.appOrderService.orderDetails.delivery_country_name,
            text3: this.appOrderService.orderDetails.delivery_street_aadress + " " + this.appOrderService.orderDetails.delivery_city + " " + this.appOrderService.orderDetails.delivery_postcode,
            selected: selected
        };
    }
    getBillingAddressData() {
        let selected = false;
        return {
            text1: this.appOrderService.orderDetails.billing_first_name + ' ' + this.appOrderService.orderDetails.billing_last_name,
            text2: this.appOrderService.orderDetails.billing_country_name,
            text3: this.appOrderService.orderDetails.billing_street_aadress + " " + this.appOrderService.orderDetails.billing_city + " " + this.appOrderService.orderDetails.billing_postcode,
            selected: selected
        };
    }
    goBack() {
        this.navCtrl.pop();
    }
    ngOnInit() {
        this.stripeFormChangeEvent();
    }
    stripeFormChangeEvent() {
        this.stripeForm.form.valueChanges.subscribe(x => {
            console.log(this.stripeForm.form.valid);
        });
    }
};
OrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_5__.AppCartService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_4__.AppHttpService },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__.AppToastService },
    { type: src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_7__.AppOrderService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_8__.AppUserService },
    { type: src_services_in_App_browser_in_app_browser_service__WEBPACK_IMPORTED_MODULE_9__.InAppBrowserService }
];
OrderPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonContent, { static: false },] }],
    stripeForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['stripeForm', { static: true },] }]
};
OrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-order',
        template: _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderPage);



/***/ }),

/***/ 89863:
/*!*************************************************************************!*\
  !*** ./src/components/address-info-card/address-info-card.component.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressInfoCardComponent": function() { return /* binding */ AddressInfoCardComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_address_info_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./address-info-card.component.html */ 71286);
/* harmony import */ var _address_info_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-info-card.component.scss */ 12267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let AddressInfoCardComponent = class AddressInfoCardComponent {
    constructor() { }
    ngOnInit() { }
};
AddressInfoCardComponent.ctorParameters = () => [];
AddressInfoCardComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['data',] }]
};
AddressInfoCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-address-info-card',
        template: _raw_loader_address_info_card_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_address_info_card_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddressInfoCardComponent);



/***/ }),

/***/ 3673:
/*!**********************************************************************!*\
  !*** ./src/components/address-info-card/address-info-card.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressInfoCardModule": function() { return /* binding */ AddressInfoCardModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _address_info_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address-info-card.component */ 89863);






let AddressInfoCardModule = class AddressInfoCardModule {
};
AddressInfoCardModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _address_info_card_component__WEBPACK_IMPORTED_MODULE_1__.AddressInfoCardComponent,
        ],
        exports: [
            _address_info_card_component__WEBPACK_IMPORTED_MODULE_1__.AddressInfoCardComponent
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule
        ],
    })
], AddressInfoCardModule);



/***/ }),

/***/ 15326:
/*!***************************************************************!*\
  !*** ./src/services/in-App-browser/in-app-browser.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InAppBrowserService": function() { return /* binding */ InAppBrowserService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);






let InAppBrowserService = class InAppBrowserService {
    constructor(inAppBrowser, config, navCtrl, appToastService) {
        this.inAppBrowser = inAppBrowser;
        this.config = config;
        this.navCtrl = navCtrl;
        this.appToastService = appToastService;
    }
    openSite(url, closeUrl = "thankyou") {
        // await Browser.open({
        //   url: this.config.yourSiteUrlString + "/order-web-view?token=" + this.appUserService.getCustomerToken(),
        //   windowName: '_self'
        // });
        // setTimeout(() => {
        //   Browser.close()
        // }, 5000);
        // Browser.addListener('browserPageLoaded', () => {
        //   console.log('browserPageLoaded event called');
        // });
        // Browser.addListener("browserFinished", () => { })
        let headerColor = "#ffffff";
        let textColor = "#000000";
        if (this.config.darkModeBool) {
            headerColor = "#1e1e1e";
            textColor = "#ffffff";
        }
        let options = {
            toolbarposition: "top",
            location: 'yes',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            hideurlbar: "yes",
            zoom: 'no',
            closebuttoncolor: textColor,
            toolbarcolor: headerColor,
            fullscreen: "no",
            toolbar: 'yes', //iOS only
        };
        //url = this.config.yourSiteUrlString + "/order-web-view?token=" + this.appUserService.getCustomerToken()
        const b = this.inAppBrowser.create(url, '_blank', options);
        let orderPlaced = false;
        b.on('loadstart').subscribe(res => {
            if (res.url.indexOf(closeUrl) != -1) {
                console.log(res.url);
                //this.appToastService.toast("Order Placed");
                this.navCtrl.navigateRoot("thank-you");
                orderPlaced = true;
                b.close();
            }
        });
        b.on('loadstop').subscribe(res => {
            console.log('loadstop');
        });
        b.on('exit').subscribe(res => {
            if (!orderPlaced)
                this.appToastService.toast("Order Cancelled");
        });
    }
};
InAppBrowserService.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__.InAppBrowser },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__.AppToastService }
];
InAppBrowserService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], InAppBrowserService);



/***/ }),

/***/ 72508:
/*!***************************************!*\
  !*** ./src/app/order/order.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-app-progress-bar {\n  width: 100%;\n}\n\nion-grid {\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\nhr {\n  width: 100%;\n  border-top: 3px solid #ebeded;\n}\n\nspan {\n  letter-spacing: -1px !important;\n}\n\n.amount ion-row {\n  line-height: 0.8;\n}\n\n.button_container {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n\n.button_container ion-button {\n  --box-shadow: 0;\n  text-transform: none !important;\n}\n\n.payment-fields {\n  padding: 0;\n}\n\n.payment-fields ion-item ion-input, .payment-fields ion-item ion-select {\n  border-radius: 5px;\n  background-color: var(--ion-background-color);\n  --padding-start: 10px;\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUFDZjs7QUFDQTtFQUNJLDBDQUEwQztFQUMxQywyQ0FBMkM7QUFFL0M7O0FBQUE7RUFDSSxXQUFXO0VBQ1gsNkJBQTZCO0FBR2pDOztBQURBO0VBQ0ksK0JBQStCO0FBSW5DOztBQUZBO0VBRVEsZ0JBQWdCO0FBSXhCOztBQURBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBSWI7O0FBUEE7RUFLUSxlQUFhO0VBQ2IsK0JBQStCO0FBTXZDOztBQUZBO0VBQ0ksVUFBVTtBQUtkOztBQU5BO0VBSVksa0JBQWtCO0VBQ2xCLDZDQUE2QztFQUM3QyxxQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBTTVCIiwiZmlsZSI6Im9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1hcHAtcHJvZ3Jlc3MtYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbmlvbi1ncmlkIHtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbn1cbmhyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2ViZWRlZDtcbn1cbnNwYW4ge1xuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4ICFpbXBvcnRhbnQ7XG59XG4uYW1vdW50IHtcbiAgICBpb24tcm93IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuODtcbiAgICB9XG59XG4uYnV0dG9uX2NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3gtc2hhZG93OiAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLnBheW1lbnQtZmllbGRzIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgaW9uLWlucHV0LGlvbi1zZWxlY3Qge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 12267:
/*!***************************************************************************!*\
  !*** ./src/components/address-info-card/address-info-card.component.scss ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  box-shadow: none;\n}\n\nion-card ion-grid {\n  padding: 0;\n}\n\nion-card ion-grid ion-row .icon_container {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n}\n\nion-card ion-grid ion-row .icon_container .card_image_container ion-icon {\n  height: 25px !important;\n  width: 25px !important;\n  color: #cdd2de;\n}\n\nion-card ion-grid ion-row ion-col {\n  padding: 0;\n}\n\nion-card ion-grid ion-row ion-col ion-card-content {\n  padding-top: 0 !important;\n  padding-left: 0 !important;\n  padding-bottom: 10px !important;\n  padding-right: 0 !important;\n}\n\nion-card ion-grid ion-row ion-col ion-card-content p {\n  line-height: 1.5;\n}\n\nion-card ion-grid ion-row ion-col ion-card-content ion-card-subtitle {\n  line-height: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3MtaW5mby1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0FBQ3BCOztBQUZBO0VBR1EsVUFBVTtBQUdsQjs7QUFOQTtFQU1nQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFJdkM7O0FBYkE7RUFZd0IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixjQUFjO0FBS3RDOztBQW5CQTtFQW1CZ0IsVUFBVTtBQUkxQjs7QUF2QkE7RUFxQm9CLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsK0JBQStCO0VBQy9CLDJCQUEyQjtBQU0vQzs7QUE5QkE7RUEwQndCLGdCQUFnQjtBQVF4Qzs7QUFsQ0E7RUE2QndCLGNBQWM7QUFTdEMiLCJmaWxlIjoiYWRkcmVzcy1pbmZvLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgLmljb25fY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjY2RkMmRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 99578:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\">{{'Checkout' |translate}}</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-no-padding variable-background-color margin-top-5\">\n    <ion-row>\n      <app-app-progress-bar [value]=\"3\"></app-app-progress-bar>\n    </ion-row>\n  </div>\n\n  <ion-list class=\"bg-transparent\">\n    <ion-item class=\"bg-transparent padding-top-10\" lines=\"none\" *ngFor=\"let p of appCartService.cartProductsArray\">\n      <app-product-list-card page=\"order\" [data]=\"p\"></app-product-list-card>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-grid class=\"ion-no-padding margin-top-10\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <app-address-info-card [data]=\"getShippingAddressData()\"></app-address-info-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-padding margin-top-10\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <app-address-info-card [data]=\"getBillingAddressData()\"></app-address-info-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"amount variable-background-color margin-top-10 padding-vertical-10\"\n    [class.round-borders]=\"config.roundBordersBool\">\n    <!-- row1 -->\n    <ion-row>\n      <ion-col class=\"padding-horizontal-10 ion-text-capitalize\">\n        <ion-label class=\"font-large\"><span>{{\"subotal\"|translate}}:</span></ion-label>\n      </ion-col>\n      <ion-col class=\"ion-text-end padding-horizontal-10\"><span\n          class=\"font-large\">{{appCartService.cartSubTotalFloat|curency}}</span>\n      </ion-col>\n    </ion-row>\n    <!-- 2nd row -->\n    <ion-row>\n      <ion-col class=\"padding-horizontal-10 ion-text-capitalize\">\n        <ion-label class=\"font-large\"><span>{{\"discount\"|translate}}:</span></ion-label>\n      </ion-col>\n      <ion-col class=\"ion-text-end padding-horizontal-10\"><span\n          class=\"font-large\">{{appCartService.cartDiscountFloat|curency}}</span>\n      </ion-col>\n    </ion-row>\n    <!-- 2nd row -->\n    <ion-row>\n      <ion-col class=\"padding-horizontal-10 ion-text-capitalize\">\n        <ion-label class=\"font-large\"><span>{{\"estimated shipping\"|translate}}:</span></ion-label>\n      </ion-col>\n      <ion-col class=\"ion-text-end padding-horizontal-10\"><span\n          class=\"font-large\">{{appCartService.cartShippingFloat|curency}}</span>\n      </ion-col>\n    </ion-row>\n    <!-- 3rd row -->\n    <ion-row>\n      <ion-col class=\"padding-horizontal-10 ion-text-capitalize\">\n        <ion-label class=\"font-large\"><span>{{\"tax\"|translate}}:</span></ion-label>\n      </ion-col>\n      <ion-col class=\"ion-text-end padding-horizontal-10 \"><span\n          class=\"font-large\">{{appCartService.cartTaxFloat|curency}}</span>\n      </ion-col>\n    </ion-row><br>\n    <!-- 4th row -->\n    <ion-row>\n      <ion-col class=\"padding-horizontal-10 ion-text-capitalize\">\n        <ion-label class=\"font-large\"><span>{{\"order total\"|translate}}:</span></ion-label>\n      </ion-col>\n      <ion-col class=\"ion-text-end padding-horizontal-10\"><span style=\"color: red;\"\n          class=\"font-large\">{{appCartService.cartTotalFloat|curency}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"ion-no-padding margin-top-10 bg-transparent\" [class.hide-content]=\"hideCardForm()\"\n    [class.round-borders]=\"config.roundBordersBool\">\n    <form #stripeForm=\"ngForm\">\n      <ion-list class=\"payment-fields padding-bottom-10\">\n        <p class=\"ion-text-center font-bold margin-bottom-5\">{{\"pay by card\"|translate}}</p>\n        <ion-item lines=none>\n          <ion-label position=\"stacked\">*{{'card number'|translate}}</ion-label>\n          <ion-input type=\"number\" name=\"number\" [(ngModel)]=\"appOrderService.orderDetails.cc_number\"\n            placeholder=\"5555555555554444\" required>\n          </ion-input>\n        </ion-item>\n        <ion-item lines=none>\n          <ion-label position=\"stacked\">*{{'expire month'|translate}}</ion-label>\n          <ion-select name=\"expMonth\" [(ngModel)]=\"appOrderService.orderDetails.cc_expiry_month\" required>\n            <ion-select-option *ngFor=\"let n of [1,2,3,4,5,6,7,8,9,10,11,12]\" value=\"{{n}}\">{{n}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=none>\n          <ion-label position=\"stacked\">*{{'expire year'|translate}}</ion-label>\n          <ion-select name=\"expYear\" [(ngModel)]=\"appOrderService.orderDetails.cc_expiry_year\" required>\n            <ion-select-option *ngFor=\"let n of [2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033]\"\n              value=\"{{n}}\">{{n}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item lines=none>\n          <ion-label position=\"stacked\">*{{'cvc'|translate}}</ion-label>\n          <ion-input type=\"number\" name=\"cvc\" placeholder=\"123\" [(ngModel)]=\"appOrderService.orderDetails.cc_cvc\"\n            required></ion-input>\n        </ion-item>\n      </ion-list>\n    </form>\n  </ion-grid>\n</ion-content>\n\n<ion-footer class=\"bg-transparent ion-no-border\">\n  <ion-toolbar class=\"bg-transparent\">\n    <ion-button id=\"placeorder\" class=\"font-bold ion-margin-horizontal\" expand=\"block\" color=\"primary\"\n      (click)=\"addToOrder()\">{{\"place order\"|translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 71286:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/address-info-card/address-info-card.component.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card class=\"ion-no-border ion-no-margin\" *ngIf=\"data!=1\">\n  <ion-grid class=\"ion-no-padding margin-top-10\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"icon_container\">\n        <div class=\"card_image_container\">\n          <ion-icon name=\"location-outline\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ion-card-content class=\"font-bold\">\n          <p class=\"font-large\">{{data.text1}}</p>\n          <ion-card-subtitle class=\"font-medium\">{{data.text2}}</ion-card-subtitle>\n          <ion-card-subtitle class=\"font-medium\">{{data.text3}}</ion-card-subtitle>\n        </ion-card-content>\n      </ion-col>\n      <ion-col size=\"2\" class=\"icon_container\">\n        <div class=\"card_image_container\" *ngIf=\"data.selected\">\n          <ion-icon name=\"checkmark-outline\" color=\"success\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n\n<ion-card class=\"ion-no-border ion-no-margin\" *ngIf=\"data==1\">\n  <ion-grid>\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n    </div>\n  </ion-grid>\n</ion-card>");

/***/ })

}]);
//# sourceMappingURL=src_app_order_order_module_ts-es2015.js.map