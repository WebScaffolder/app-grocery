(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_address-pages_shipping-address_shipping-address_module_ts"], {
    /***/
    97923:
    /*!***************************************************************************!*\
      !*** ./src/app/address-pages/shipping-address/shipping-address.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShippingAddressPageModule": function ShippingAddressPageModule() {
          return (
            /* binding */
            _ShippingAddressPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _shipping_address_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./shipping-address.page */
      24227);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var src_components_app_progress_bar_app_progress_bar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/components/app-progress-bar/app-progress-bar.module */
      77603);
      /* harmony import */


      var src_components_add_shipping_address_add_shipping_address_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/components/add-shipping-address/add-shipping-address-component.module */
      82230);
      /* harmony import */


      var src_components_user_addresses_user_addresses_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/components/user-addresses/user-addresses-component.module */
      19667); // For Translation Language


      var routes = [{
        path: '',
        component: _shipping_address_page__WEBPACK_IMPORTED_MODULE_0__.ShippingAddressPage
      }];

      var _ShippingAddressPageModule = /*#__PURE__*/_createClass(function ShippingAddressPageModule() {
        _classCallCheck(this, ShippingAddressPageModule);
      });

      _ShippingAddressPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, src_components_app_progress_bar_app_progress_bar_module__WEBPACK_IMPORTED_MODULE_2__.AppProgressBarModule, src_components_add_shipping_address_add_shipping_address_component_module__WEBPACK_IMPORTED_MODULE_3__.AddShippingAddressModule, src_components_user_addresses_user_addresses_component_module__WEBPACK_IMPORTED_MODULE_4__.userAddressesModule],
        declarations: [_shipping_address_page__WEBPACK_IMPORTED_MODULE_0__.ShippingAddressPage]
      })], _ShippingAddressPageModule);
      /***/
    },

    /***/
    24227:
    /*!*************************************************************************!*\
      !*** ./src/app/address-pages/shipping-address/shipping-address.page.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShippingAddressPage": function ShippingAddressPage() {
          return (
            /* binding */
            _ShippingAddressPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_shipping_address_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./shipping-address.page.html */
      633);
      /* harmony import */


      var _shipping_address_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shipping-address.page.scss */
      75816);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/app-order/app-order.service */
      92248);
      /* harmony import */


      var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/app-user/app-user.service */
      53755);
      /* harmony import */


      var src_services_app_coordinates_app_coordinates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/app-coordinates/app-coordinates.service */
      88691);
      /* harmony import */


      var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/services/app-toast/app-toast.service */
      58824);

      var _ShippingAddressPage = /*#__PURE__*/function () {
        function ShippingAddressPage(navCtrl, config, appUserService, appOrderService, appCoordinatesService, appToastService) {
          _classCallCheck(this, ShippingAddressPage);

          this.navCtrl = navCtrl;
          this.config = config;
          this.appUserService = appUserService;
          this.appOrderService = appOrderService;
          this.appCoordinatesService = appCoordinatesService;
          this.appToastService = appToastService;
          this.currentViewString = "addresslist"; // or add new address

          this.disableSaveButtonBool = true;
          if (this.appUserService.whoIsUser() == "guest") this.currentViewString = "addnewaddress";
        }

        _createClass(ShippingAddressPage, [{
          key: "showCancelButton",
          value: function showCancelButton() {
            if (this.appUserService.whoIsUser() == "customer") return true;
          }
        }, {
          key: "showAddNewAddressSecton",
          value: function showAddNewAddressSecton() {
            this.currentViewString = "addnewaddress";
          }
        }, {
          key: "getFormData",
          value: function getFormData(event) {
            this.disableSaveButtonBool = !event.valid;
            this.shippingAddressformData = event.value;
          }
        }, {
          key: "saveFormData",
          value: function saveFormData() {
            //if (!this.appOrderService.addressIsFilled() && this.appUserService.whoIsUser() == "customer")
            this.appOrderService.addUserAddressToServer(this.shippingAddressformData);
            this.appOrderService.setOrderShippingAddress(this.shippingAddressformData);
            this.appOrderService.setOrderBillingAddress(this.shippingAddressformData);
            this.goToPaymentPage();
          }
        }, {
          key: "updateLocation",
          value: function updateLocation() {
            var _this = this;

            this.appCoordinatesService.getCurrentLocationCoordinates().then(function (data) {
              if (data != "error") {
                _this.appOrderService.orderDetails.latlong = String(data.lat) + "," + String(data["long"]);

                _this.appToastService.toastMiddle("Location Updated");
              } else {
                _this.disableSaveButtonBool = true;
              }
            });
          }
        }, {
          key: "goToPaymentPage",
          value: function goToPaymentPage() {
            if (this.appOrderService.orderDetails.latlong == "" || this.appOrderService.orderDetails.latlong == undefined) {
              this.appToastService.toastMiddle("updating location. Please Enable Location Service.");
              this.updateLocation();
            } else this.navCtrl.navigateForward("/payment");
          }
        }, {
          key: "cancelAddAddress",
          value: function cancelAddAddress() {
            this.currentViewString = "addresslist";
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ShippingAddressPage;
      }();

      _ShippingAddressPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_4__.AppUserService
        }, {
          type: src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_3__.AppOrderService
        }, {
          type: src_services_app_coordinates_app_coordinates_service__WEBPACK_IMPORTED_MODULE_5__.AppCoordinatesService
        }, {
          type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__.AppToastService
        }];
      };

      _ShippingAddressPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-shipping-address',
        template: _raw_loader_shipping_address_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_shipping_address_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ShippingAddressPage);
      /***/
    },

    /***/
    75816:
    /*!***************************************************************************!*\
      !*** ./src/app/address-pages/shipping-address/shipping-address.page.scss ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-app-progress-bar {\n  width: 100%;\n}\n\n.heading {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n}\n\n.button_container {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n\n.button_container ion-button {\n  --box-shadow: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQUNmOztBQUVBO0VBQ0ksNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNuQzs7QUFDQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUViOztBQUxBO0VBS1EsZUFBYTtBQUlyQiIsImZpbGUiOiJzaGlwcGluZy1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1hcHAtcHJvZ3Jlc3MtYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRpbmcge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbn1cbi5idXR0b25fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJveC1zaGFkb3c6IDA7XG4gICAgfVxufVxuXG4iXX0= */";
      /***/
    },

    /***/
    633:
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-pages/shipping-address/shipping-address.page.html ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\">{{'Checkout' |translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding variable-background-color margin-top-5\">\n    <ion-row>\n      <app-app-progress-bar [value]=\"1\"></app-app-progress-bar>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"heading color-dark\">\n    <ion-row>\n      <ion-col>\n        <ion-label>\n          <h2 class=\"ion-text-center font-medium\">{{'Shipping Address'|translate}}</h2>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <app-add-shipping-address *ngIf=\"currentViewString!='addresslist'\" (formIschanged)=\"getFormData($event)\">\n  </app-add-shipping-address>\n\n  <app-user-addresses *ngIf=\"currentViewString=='addresslist'\" (onClickAddNew)=\"showAddNewAddressSecton()\">\n  </app-user-addresses>\n</ion-content>\n\n<ion-footer class=\"app-background-color ion-no-border\">\n  <ion-toolbar class=\"app-background-color\">\n    <ion-button id=\"continue\" class=\"font-bold ion-margin-horizontal\" expand=\"block\" color=\"primary\"\n      *ngIf=\"currentViewString=='addresslist'\" [disabled]=\"!appOrderService.addressIsFilled()\"\n      (click)=\"goToPaymentPage()\">\n      {{'continue'|translate}}</ion-button>\n    <ion-grid *ngIf=\"currentViewString!='addresslist'\"\n      class=\"app-background-color ion-margin-horizontal ion-no-padding\">\n      <ion-row>\n        <ion-col size=auto>\n          <ion-button fill=clear (click)=\"cancelAddAddress()\" *ngIf=\"showCancelButton()\">\n            <ion-icon slot=\"icon-only\" color=\"danger\" name=\"close-circle-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button class=\"font-bold\" expand=\"block\" color=\"primary\" [disabled]=\"disableSaveButtonBool\"\n            (click)=\"saveFormData()\">\n            {{'save & continue'|translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_address-pages_shipping-address_shipping-address_module_ts-es5.js.map