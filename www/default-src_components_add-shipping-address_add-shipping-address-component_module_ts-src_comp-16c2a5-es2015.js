(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["default-src_components_add-shipping-address_add-shipping-address-component_module_ts-src_comp-16c2a5"],{

/***/ 82230:
/*!**************************************************************************************!*\
  !*** ./src/components/add-shipping-address/add-shipping-address-component.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddShippingAddressModule": function() { return /* binding */ AddShippingAddressModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _add_shipping_address_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-shipping-address.component */ 57440);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);







let AddShippingAddressModule = class AddShippingAddressModule {
};
AddShippingAddressModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _add_shipping_address_component__WEBPACK_IMPORTED_MODULE_1__.AddShippingAddressComponent
        ],
        exports: [
            _add_shipping_address_component__WEBPACK_IMPORTED_MODULE_1__.AddShippingAddressComponent
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule
        ],
    })
], AddShippingAddressModule);



/***/ }),

/***/ 57440:
/*!*******************************************************************************!*\
  !*** ./src/components/add-shipping-address/add-shipping-address.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddShippingAddressComponent": function() { return /* binding */ AddShippingAddressComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_add_shipping_address_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-shipping-address.component.html */ 31114);
/* harmony import */ var _add_shipping_address_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-shipping-address.component.scss */ 15816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modals/select-country/select-country.page */ 30862);
/* harmony import */ var src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/select-zones/select-zones.page */ 11218);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-alert/app-alert.service */ 20728);
/* harmony import */ var src_services_app_coordinates_app_coordinates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-coordinates/app-coordinates.service */ 88691);











let AddShippingAddressComponent = class AddShippingAddressComponent {
    constructor(modalCtrl, appToastService, appAlertService, config, appCoordinatesService) {
        this.modalCtrl = modalCtrl;
        this.appToastService = appToastService;
        this.appAlertService = appAlertService;
        this.config = config;
        this.appCoordinatesService = appCoordinatesService;
        this.formIschanged = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.delivery_first_name = "";
        this.delivery_last_name = "";
        this.delivery_street_aadress = "";
        this.delivery_city = "";
        this.delivery_postcode = "";
        this.delivery_country = "";
        this.delivery_state = "";
        this.delivery_country_name = "";
        this.delivery_state_name = "";
        this.delivery_phone = "";
        this.delivery_location = "";
    }
    openCountries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_select_country_select_country_page__WEBPACK_IMPORTED_MODULE_2__.SelectCountryPage
            });
            modal.onDidDismiss().then((data) => {
                if (data.data != undefined) {
                    this.delivery_country = data.data.country_id;
                    this.delivery_country_name = data.data.country_name;
                }
            });
            return yield modal.present();
        });
    }
    openStates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (this.delivery_country == "") {
                this.appToastService.toastError("please select country");
                return;
            }
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_select_zones_select_zones_page__WEBPACK_IMPORTED_MODULE_3__.SelectZonesPage,
                componentProps: { id: this.delivery_country }
            });
            modal.onDidDismiss().then((data) => {
                if (data.data != undefined) {
                    this.delivery_state = data.data.id;
                    this.delivery_state_name = data.data.name;
                }
            });
            return yield modal.present();
        });
    }
    updateLocation() {
        this.appCoordinatesService.getCurrentLocationCoordinates().then((data) => {
            if (data != "error") {
                this.delivery_location = String(data.lat) + "," + String(data.long);
                this.appToastService.toast("Location Updated");
            }
        });
    }
    ngOnInit() {
        if (this.editData != null) {
            this.setFormDataForEdit();
            if (this.editData.latlong == null) {
                this.updateLocation();
            }
        }
        this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe(x => {
            this.ngForm.form.value.delivery_state_name = this.delivery_state_name;
            this.ngForm.form.value.delivery_country_name = this.delivery_country_name;
            this.ngForm.form.value.delivery_state = this.delivery_state;
            this.ngForm.form.value.delivery_country = this.delivery_country;
            this.ngForm.form.value.delivery_location = this.delivery_location;
            this.formIschanged.emit(this.ngForm.form);
        });
        if (this.editData == null) {
            this.updateLocation();
        }
        console.log(this.editData);
    }
    setFormDataForEdit() {
        this.delivery_first_name = this.editData.customer.customer_first_name;
        this.delivery_last_name = this.editData.customer.customer_last_name;
        this.delivery_street_aadress = this.editData.street_address;
        this.delivery_city = this.editData.city;
        this.delivery_postcode = this.editData.postcode;
        this.delivery_country = this.editData.country_id.country_id;
        this.delivery_state = this.editData.state_id.id;
        this.delivery_country_name = this.editData.country_id.country_name;
        this.delivery_state_name = this.editData.state_id.name;
        this.delivery_phone = this.editData.phone;
        this.delivery_location = this.editData.latlong;
    }
    ngOnDestroy() {
        this.formChangesSubscription.unsubscribe();
    }
};
AddShippingAddressComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_4__.AppToastService },
    { type: src_services_app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_6__.AppAlertService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService },
    { type: src_services_app_coordinates_app_coordinates_service__WEBPACK_IMPORTED_MODULE_7__.AppCoordinatesService }
];
AddShippingAddressComponent.propDecorators = {
    ngForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['form', { static: true },] }],
    formIschanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output }],
    editData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input, args: ['editData',] }]
};
AddShippingAddressComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-add-shipping-address',
        template: _raw_loader_add_shipping_address_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_shipping_address_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddShippingAddressComponent);



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

/***/ 19667:
/*!**************************************************************************!*\
  !*** ./src/components/user-addresses/user-addresses-component.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAddressesModule": function() { return /* binding */ userAddressesModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _user_addresses_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-addresses.component */ 88408);
/* harmony import */ var _address_info_card_address_info_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../address-info-card/address-info-card.module */ 3673);







let userAddressesModule = class userAddressesModule {
};
userAddressesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _user_addresses_component__WEBPACK_IMPORTED_MODULE_1__.UserAddressesComponent,
        ],
        exports: [
            _user_addresses_component__WEBPACK_IMPORTED_MODULE_1__.UserAddressesComponent
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _address_info_card_address_info_card_module__WEBPACK_IMPORTED_MODULE_2__.AddressInfoCardModule
        ],
    })
], userAddressesModule);



/***/ }),

/***/ 88408:
/*!*******************************************************************!*\
  !*** ./src/components/user-addresses/user-addresses.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserAddressesComponent": function() { return /* binding */ UserAddressesComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_addresses_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-addresses.component.html */ 7648);
/* harmony import */ var _user_addresses_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-addresses.component.scss */ 94684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/app-order/app-order.service */ 92248);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/config/config.service */ 83681);









let UserAddressesComponent = class UserAddressesComponent {
    constructor(config, appHttpService, appUserService, appOrderService, appToastService) {
        this.config = config;
        this.appHttpService = appHttpService;
        this.appUserService = appUserService;
        this.appOrderService = appOrderService;
        this.appToastService = appToastService;
        this.onClickAddNew = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.onClickEditAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.editButtons = false; //product data
        this.addressArray = [];
    }
    onClickAddNewButton() {
        this.onClickAddNew.emit();
    }
    getAddresses() {
        this.addressArray = [1, 1, 1, 1, 1];
        let url = "customer_address_book";
        url += "?limit=" + 100;
        url += "&language_id=" + this.config.languageIdNumber;
        url += "&currency=" + this.config.currencyIdNumber;
        this.appHttpService.getHttp(url).then((data) => {
            this.addressArray = data;
            this.addressArray.forEach(element => {
                if (element.default_address == 1) {
                    this.selectedAddressObject = element;
                    this.addOrderUserAddress(this.selectedAddressObject, false);
                }
            });
        });
    }
    getAddressData(v) {
        let selected = false;
        if (v.default_address == 1) {
            selected = true;
        }
        if (v == 1)
            return 1;
        else
            return {
                text1: v.customer.customer_first_name + ' ' + v.customer.customer_last_name,
                text2: v.country_id.country_name,
                text3: v.street_address + " " + v.city + " " + v.postcode,
                selected: selected
            };
    }
    addOrderUserAddress(address, updateOnServer = true) {
        if (this.editButtons)
            return 0;
        this.selectedAddressObject = address;
        let add = {
            delivery_city: address.city,
            delivery_country: address.country_id.country_id,
            delivery_country_name: address.country_id.country_name,
            delivery_first_name: address.customer.customer_first_name,
            delivery_last_name: address.customer.customer_last_name,
            delivery_phone: address.phone,
            delivery_postcode: address.postcode,
            delivery_state: address.state_id.id,
            delivery_state_name: address.state_id.name,
            delivery_street_aadress: address.street_address,
            delivery_location: address.latlong
        };
        this.appOrderService.setOrderShippingAddress(add);
        this.appOrderService.setOrderBillingAddress(add);
        if (updateOnServer)
            this.default(address);
    }
    ngOnInit() {
        this.getAddresses();
    }
    //========================================================================
    default(address) {
        let data = {};
        data = address;
        data.country_id = address.country_id.country_id;
        data.state_id = address.state_id.id;
        data.is_default = '1';
        data.language_id = this.config.languageIdNumber;
        data.currency = this.config.currencyIdNumber;
        this.appHttpService.putHttp('customer_address_book/' + data.id, data, true).then((data) => {
            this.appToastService.toast("updated");
            this.getAddresses();
        });
    }
    delete(a) {
        this.appHttpService.deleteHttp("customer_address_book/" + a.id, {}, true).then((data) => {
            this.getAddresses();
        });
    }
    edit(a) {
        this.onClickEditAddress.emit(a);
    }
};
UserAddressesComponent.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__.AppHttpService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_5__.AppUserService },
    { type: src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_3__.AppOrderService },
    { type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_4__.AppToastService }
];
UserAddressesComponent.propDecorators = {
    onClickAddNew: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    onClickEditAddress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Output }],
    editButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ['editButtons',] }]
};
UserAddressesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-user-addresses',
        template: _raw_loader_user_addresses_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_addresses_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserAddressesComponent);



/***/ }),

/***/ 15816:
/*!*********************************************************************************!*\
  !*** ./src/components/add-shipping-address/add-shipping-address.component.scss ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  margin: 0;\n}\n\nion-list {\n  padding: 0;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\nion-list ion-item {\n  --background: transparent;\n}\n\nion-list ion-item ion-input {\n  border-radius: 5px;\n  background-color: var(--app-item-color);\n  --padding-start: 10px;\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztBQUNiOztBQUNBO0VBQ0ksVUFBVTtFQUNWLDBDQUEwQztFQUMxQywyQ0FBMkM7QUFFL0M7O0FBTEE7RUFLUSx5QkFBYTtBQUlyQjs7QUFUQTtFQU9ZLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMscUJBQWdCO0VBQ2hCLGdCQUFnQjtBQU01QiIsImZpbGUiOiJhZGQtc2hpcHBpbmctYWRkcmVzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIG1hcmdpbjogMDtcbn1cbmlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1pdGVtLWNvbG9yKTtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

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

/***/ 94684:
/*!*********************************************************************!*\
  !*** ./src/components/user-addresses/user-addresses.component.scss ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  border-bottom: 5px solid var(--app-background-color);\n  background-color: var(--app-item-color);\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWRkcmVzc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0RBQW9EO0VBQ3BELHVDQUF1QztFQUN2QywwQ0FBMEM7RUFDMUMsMkNBQTJDO0FBQy9DIiwiZmlsZSI6InVzZXItYWRkcmVzc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB2YXIoLS1hcHAtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWl0ZW0tY29sb3IpO1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xufVxuIl19 */");

/***/ }),

/***/ 31114:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/add-shipping-address/add-shipping-address.component.html ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #form=\"ngForm\" class=\"margin-top-10\" [class.round-borders]=\"config.roundBordersBool\">\n\n  <ion-list class=\"bg-transparent\">\n    <ion-item lines=none>\n      <ion-label position=\"stacked\">* {{'first name'| translate}}</ion-label>\n      <ion-input type=\"text\" class=\"font-medium\" name=\"delivery_first_name\" placeholder=\"{{'first name'| translate}}\"\n        [(ngModel)]=\"delivery_first_name\" required>\n      </ion-input>\n    </ion-item>\n    <ion-item lines=none>\n      <ion-label position=\"stacked\">* {{'last name'| translate}}</ion-label>\n      <ion-input type=\"text\" class=\"font-medium\" name=\"delivery_last_name\" placeholder=\"{{'last name'| translate}}\"\n        [(ngModel)]=\"delivery_last_name\" required> </ion-input>\n    </ion-item>\n    <ion-item lines=none>\n      <ion-label position=\"stacked\">* {{'country'| translate}}</ion-label>\n      <ion-input class=\"font-medium\" name=\"delivery_country_name\" [(ngModel)]=\"delivery_country_name\" readonly\n        placeholder=\"{{'country'| translate}}\" required (click)=\"openCountries()\"></ion-input>\n    </ion-item>\n    <ion-item lines=none>\n      <ion-label position=\"stacked\">* {{'state'| translate}}</ion-label>\n      <ion-input class=\"font-medium\" name=\"delivery_state_name\" [(ngModel)]=\"delivery_state_name\" readonly\n        placeholder=\"{{'state'| translate}}\" required (click)=\"openStates()\">\n      </ion-input>\n    </ion-item>\n    <ion-item lines=none (click)=\"updateLocation()\">\n      <ion-label position=\"stacked\">* {{'location'| translate}}</ion-label>\n      <ion-input class=\"font-medium\" name=\"delivery_location_coordinates\" [(ngModel)]=\"delivery_location\" readonly\n        placeholder=\"34.0522 , 118.2437\" required>\n      </ion-input>\n      <ion-icon slot=\"end\" color=\"danger\" name=\"location-sharp\"></ion-icon>\n    </ion-item>\n    <ion-item lines=none>\n      <ion-label position=\"stacked\">* {{'address'| translate}}</ion-label>\n      <ion-input class=\"font-medium\" type=\"text\" name=\"delivery_street_aadress\" [(ngModel)]=\"delivery_street_aadress\"\n        required placeholder=\"{{'address'| translate}}\"></ion-input>\n    </ion-item>\n    <ion-item lines=none>\n      <ion-label position=\"stacked\">* {{'city'| translate}}</ion-label>\n      <ion-input class=\"font-medium\" type=\"text\" name=\"delivery_city\" [(ngModel)]=\"delivery_city\" required\n        placeholder=\"{{'city'| translate}}\"></ion-input>\n    </ion-item>\n    <ion-item lines=none>\n      <ion-label position=\"stacked\">* {{'postcode'| translate}}</ion-label>\n      <ion-input class=\"font-medium\" type=\"text\" name=\"delivery_postcode\" [(ngModel)]=\"delivery_postcode\" required\n        placeholder=\"{{'postcode'| translate}}\"></ion-input>\n    </ion-item>\n    <ion-item lines=none>\n      <ion-label position=\"stacked\">* {{'phone'| translate}}</ion-label>\n      <ion-input class=\"font-medium\" type=\"text\" name=\"delivery_phone\" [(ngModel)]=\"delivery_phone\" required\n        placeholder=\"{{'phone'| translate}}\"></ion-input>\n    </ion-item>\n  </ion-list>\n</form>");

/***/ }),

/***/ 71286:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/address-info-card/address-info-card.component.html ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card class=\"ion-no-border ion-no-margin\" *ngIf=\"data!=1\">\n  <ion-grid class=\"ion-no-padding margin-top-10\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"icon_container\">\n        <div class=\"card_image_container\">\n          <ion-icon name=\"location-outline\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ion-card-content class=\"font-bold\">\n          <p class=\"font-large\">{{data.text1}}</p>\n          <ion-card-subtitle class=\"font-medium\">{{data.text2}}</ion-card-subtitle>\n          <ion-card-subtitle class=\"font-medium\">{{data.text3}}</ion-card-subtitle>\n        </ion-card-content>\n      </ion-col>\n      <ion-col size=\"2\" class=\"icon_container\">\n        <div class=\"card_image_container\" *ngIf=\"data.selected\">\n          <ion-icon name=\"checkmark-outline\" color=\"success\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n\n<ion-card class=\"ion-no-border ion-no-margin\" *ngIf=\"data==1\">\n  <ion-grid>\n    <div class=\"ion-padding custom-skeleton\">\n      <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n      <ion-skeleton-text animated></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n      <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n    </div>\n  </ion-grid>\n</ion-card>");

/***/ }),

/***/ 7648:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/user-addresses/user-addresses.component.html ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid class=\"\" [class.round-borders]=\"config.roundBordersBool\">\n  <ion-row>\n    <ion-col class=\"ion-text-center ion-padding\">\n      <ion-label (click)=\"onClickAddNewButton()\">\n        <ion-icon name=\"add-outline\"></ion-icon> {{'Add a New Address'|translate}}\n      </ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid class=\"ion-no-padding margin-top-10\" *ngFor=\"let a of addressArray\"\n  [class.round-borders]=\"config.roundBordersBool\">\n  <ion-row>\n    <ion-col class=\"ion-no-padding\">\n      <app-address-info-card [data]=\"getAddressData(a)\" (click)=\"addOrderUserAddress(a)\">\n      </app-address-info-card>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"editButtons && a!=1\">\n    <ion-col class=\"ion-text-center\">\n      <ion-button size=\"small\" color=\"danger\" (click)=\"delete(a)\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n      </ion-button>\n      <ion-button size=\"small\" color=\"success\" (click)=\"edit(a)\">\n        <ion-icon name=\"create-outline\"></ion-icon>\n      </ion-button>\n      <ion-button size=\"small\" color=\"warning\" (click)=\"default(a)\" *ngIf=\"a.default_address==0\">\n        <ion-icon name=\"checkmark-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<ion-grid class=\"ion-no-padding margin-top-10\" *ngIf=\"addressArray.length==0\"\n  [class.round-borders]=\"config.roundBordersBool\">\n  <ion-row>\n    <ion-col class=\"ion-no-padding ion-text-capitalize ion-text-center\">\n      {{'no address found!'|translate}}\n    </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ })

}]);
//# sourceMappingURL=default-src_components_add-shipping-address_add-shipping-address-component_module_ts-src_comp-16c2a5-es2015.js.map