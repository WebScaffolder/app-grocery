(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_payment_payment_module_ts"], {
    /***/
    23509:
    /*!***************************************************!*\
      !*** ./src/app/payment/payment-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentPageRoutingModule": function PaymentPageRoutingModule() {
          return (
            /* binding */
            _PaymentPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./payment.page */
      70684);

      var routes = [{
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
      }];

      var _PaymentPageRoutingModule = /*#__PURE__*/_createClass(function PaymentPageRoutingModule() {
        _classCallCheck(this, PaymentPageRoutingModule);
      });

      _PaymentPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PaymentPageRoutingModule);
      /***/
    },

    /***/
    24068:
    /*!*******************************************!*\
      !*** ./src/app/payment/payment.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentPageModule": function PaymentPageModule() {
          return (
            /* binding */
            _PaymentPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./payment-routing.module */
      23509);
      /* harmony import */


      var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./payment.page */
      70684);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var src_components_app_progress_bar_app_progress_bar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/components/app-progress-bar/app-progress-bar.module */
      77603);

      var _PaymentPageModule = /*#__PURE__*/_createClass(function PaymentPageModule() {
        _classCallCheck(this, PaymentPageModule);
      });

      _PaymentPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, src_components_app_progress_bar_app_progress_bar_module__WEBPACK_IMPORTED_MODULE_3__.AppProgressBarModule],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage]
      })], _PaymentPageModule);
      /***/
    },

    /***/
    70684:
    /*!*****************************************!*\
      !*** ./src/app/payment/payment.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaymentPage": function PaymentPage() {
          return (
            /* binding */
            _PaymentPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./payment.page.html */
      42086);
      /* harmony import */


      var _payment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./payment.page.scss */
      12894);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/app-http/app-http.service */
      20688);
      /* harmony import */


      var src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/app-order/app-order.service */
      92248);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);

      var _PaymentPage = /*#__PURE__*/function () {
        function PaymentPage(navCtrl, config, appOrderService, appHttpService) {
          _classCallCheck(this, PaymentPage);

          this.navCtrl = navCtrl;
          this.config = config;
          this.appOrderService = appOrderService;
          this.appHttpService = appHttpService;
          this.paymentMethodsArray = [];
        }

        _createClass(PaymentPage, [{
          key: "selectPaymentMethod",
          value: function selectPaymentMethod(value) {
            this.appOrderService.orderDetails.payment_method = value.payment_method_name;
            this.appOrderService.orderDetails.payment_method_type = value.payment_method_type;
            this.navCtrl.navigateForward("/order");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getPaymentMethods();
          }
        }, {
          key: "getPaymentMethods",
          value: function getPaymentMethods() {
            var _this = this;

            var url = "payment_method";
            url += "?language_id=" + this.config.languageIdNumber;
            url += "&getDetail=1";
            url += "&currency=" + this.config.currencyIdNumber;
            this.appHttpService.getHttp(url).then(function (data) {
              _this.paymentMethodsArray = data;
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          }
        }]);

        return PaymentPage;
      }();

      _PaymentPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService
        }, {
          type: src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_3__.AppOrderService
        }, {
          type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__.AppHttpService
        }];
      };

      _PaymentPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-payment',
        template: _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PaymentPage);
      /***/
    },

    /***/
    12894:
    /*!*******************************************!*\
      !*** ./src/app/payment/payment.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-app-progress-bar {\n  width: 100%;\n}\n\n.list-grid {\n  border-radius: 5px;\n  padding: 0;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\n.list-grid ion-row ion-icon {\n  width: 20px !important;\n  height: 40px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQUNmOztBQUtBO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwwQ0FBMEM7RUFDMUMsMkNBQTJDO0FBRi9DOztBQUZBO0VBT1ksc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQURuQyIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1hcHAtcHJvZ3Jlc3MtYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJvcmRlci1yYWRpdXMge1xuICAgIFxufVxuLmxpc3QtZ3JpZCB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    42086:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\">{{'Checkout' |translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding variable-background-color margin-top-5\">\n    <ion-row>\n      <app-app-progress-bar [value]=\"2\"></app-app-progress-bar>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"heading color-dark\">\n    <ion-row>\n      <ion-col>\n        <ion-label>\n          <h2 class=\"ion-text-center font-medium ion-text-capitalize\">{{'payment method'|translate}}</h2>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"center\">\n    <ion-spinner *ngIf=\"paymentMethodsArray.length==0\"></ion-spinner>\n  </div>\n  <ion-grid class=\"list-grid\" *ngIf=\"paymentMethodsArray.length!=0\">\n    <div *ngFor=\"let p of paymentMethodsArray\">\n      <ion-row class=\"variable-background-color\" [class.round-borders]=\"config.roundBordersBool\"\n        (click)=\"selectPaymentMethod(p)\">\n        <ion-col class=\"ion-align-items-center d-flex padding-vertical-0\" id=\"cash\">\n          <ion-icon name=\"cash-outline\"></ion-icon>\n          <ion-label class=\"font-large padding-horizontal-20\">\n            {{p.payment_method_title}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_payment_payment_module_ts-es5.js.map