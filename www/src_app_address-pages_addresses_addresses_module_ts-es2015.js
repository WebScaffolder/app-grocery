(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_address-pages_addresses_addresses_module_ts"],{

/***/ 43424:
/*!*************************************************************!*\
  !*** ./src/app/address-pages/addresses/addresses.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressesPageModule": function() { return /* binding */ AddressesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _addresses_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addresses.page */ 37591);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var src_components_add_shipping_address_add_shipping_address_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/add-shipping-address/add-shipping-address-component.module */ 82230);
/* harmony import */ var src_components_user_addresses_user_addresses_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/user-addresses/user-addresses-component.module */ 19667);







// For Translation Language



const routes = [
    {
        path: '',
        component: _addresses_page__WEBPACK_IMPORTED_MODULE_0__.AddressesPage
    }
];
let AddressesPageModule = class AddressesPageModule {
};
AddressesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            src_components_add_shipping_address_add_shipping_address_component_module__WEBPACK_IMPORTED_MODULE_2__.AddShippingAddressModule,
            src_components_user_addresses_user_addresses_component_module__WEBPACK_IMPORTED_MODULE_3__.userAddressesModule
        ],
        declarations: [_addresses_page__WEBPACK_IMPORTED_MODULE_0__.AddressesPage]
    })
], AddressesPageModule);



/***/ }),

/***/ 37591:
/*!***********************************************************!*\
  !*** ./src/app/address-pages/addresses/addresses.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressesPage": function() { return /* binding */ AddressesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_addresses_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./addresses.page.html */ 8445);
/* harmony import */ var _addresses_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addresses.page.scss */ 94513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-order/app-order.service */ 92248);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);













let AddressesPage = class AddressesPage {
    constructor(navCtrl, shared, modalCtrl, config, appEventsService, loading, appOrderService, appUserService, appHttpService, appToastService) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.appEventsService = appEventsService;
        this.loading = loading;
        this.appOrderService = appOrderService;
        this.appUserService = appUserService;
        this.appHttpService = appHttpService;
        this.appToastService = appToastService;
        this.currentViewString = "addresslist"; // or add new address
        this.disableSaveButtonBool = true;
        this.editAddressData = null;
    }
    onClickEditAddress(value) {
        console.log(value);
        this.editAddressData = value;
        this.showAddNewAddressSecton();
    }
    cancelAddAddress() {
        this.currentViewString = "addresslist";
    }
    showCancelButton() {
        if (this.appUserService.whoIsUser() == "customer")
            return true;
    }
    showAddNewAddressSecton() {
        this.currentViewString = "addnewaddress";
    }
    getFormData(event) {
        this.disableSaveButtonBool = !event.valid;
        this.shippingAddressformData = event.value;
    }
    saveFormData() {
        if (this.editAddressData == null) { //if (!this.appOrderService.addressIsFilled() && this.appUserService.whoIsUser() == "customer")
            this.appOrderService.addUserAddressToServer(this.shippingAddressformData);
            this.appOrderService.setOrderShippingAddress(this.shippingAddressformData);
            this.appOrderService.setOrderBillingAddress(this.shippingAddressformData);
            this.cancelAddAddress();
        }
        else {
            this.updateAddressOnServer(this.shippingAddressformData);
        }
    }
    updateAddressOnServer(value) {
        let data = {};
        data = value;
        data.first_name = value.delivery_first_name;
        data.last_name = value.delivery_last_name;
        data.city = value.delivery_city;
        data.company = this.editAddressData.company;
        data.country_id = value.delivery_country;
        data.dob = this.editAddressData.dob;
        data.gender = this.editAddressData.gender;
        data.postcode = value.delivery_postcode;
        data.state_id = value.delivery_state;
        data.street_address = value.delivery_street_aadress;
        data.suburb = value.delivery_city;
        data.phone = value.delivery_phone;
        data.latlong = value.delivery_location;
        //data.is_default = this.editAddressData.default_address.toString()
        data.language_id = this.config.languageIdNumber;
        data.currency = this.config.currencyIdNumber;
        this.appHttpService.putHttp('customer_address_book/' + this.editAddressData.id, data, true).then((data) => {
            this.appToastService.toast("updated");
            this.editAddressData = null;
            this.cancelAddAddress();
        });
    }
    goBack() {
        this.navCtrl.pop();
    }
    ngOnInit() {
    }
};
AddressesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__.AppEventsService },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_8__.AppOrderService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_7__.AppUserService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_6__.AppHttpService },
    { type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_9__.AppToastService }
];
AddressesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-addresses',
        template: _raw_loader_addresses_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_addresses_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddressesPage);



/***/ }),

/***/ 94513:
/*!*************************************************************!*\
  !*** ./src/app/address-pages/addresses/addresses.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: var(--app-padding-left-right);\n  --padding-end: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHJlc3Nlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4Q0FBZ0I7RUFDaEIsNENBQWM7QUFBbEIiLCJmaWxlIjoiYWRkcmVzc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAvLy0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 8445:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/addresses/addresses.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\">{{'address' |translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"padding-top-10\">\n  <app-add-shipping-address *ngIf=\"currentViewString!='addresslist'\" (formIschanged)=\"getFormData($event)\"\n    [editData]=\"editAddressData\">\n  </app-add-shipping-address>\n\n  <app-user-addresses *ngIf=\"currentViewString=='addresslist'\" [editButtons]=\"true\"\n    (onClickAddNew)=\"showAddNewAddressSecton()\" (onClickEditAddress)=\"onClickEditAddress($event)\">\n  </app-user-addresses>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button class=\"font-bold\" expand=\"block\" color=\"primary\" *ngIf=\"currentViewString=='addresslist'\"\n      [disabled]=\"!appOrderService.addressIsFilled()\">\n      {{'continue'|translate}}</ion-button>\n    <ion-grid *ngIf=\"currentViewString!='addresslist'\">\n      <ion-row>\n        <ion-col size=2>\n          <ion-button fill=clear (click)=\"cancelAddAddress()\" *ngIf=\"showCancelButton()\">\n            <ion-icon slot=\"icon-only\" color=\"danger\" name=\"close-circle-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button class=\"font-bold\" expand=\"block\" color=\"primary\" [disabled]=\"disableSaveButtonBool\"\n            (click)=\"saveFormData()\">\n            {{'save'|translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_address-pages_addresses_addresses_module_ts-es2015.js.map