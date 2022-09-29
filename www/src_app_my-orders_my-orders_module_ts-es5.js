(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_my-orders_my-orders_module_ts"], {
    /***/
    73424:
    /*!***********************************************!*\
      !*** ./src/app/my-orders/my-orders.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyOrdersPageModule": function MyOrdersPageModule() {
          return (
            /* binding */
            _MyOrdersPageModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _my_orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./my-orders.page */
      16161);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var src_components_product_list_card_product_list_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/components/product-list-card/product-list-card.module */
      33873);
      /* harmony import */


      var src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/components/no-record-found/no-record-found.module */
      34334);

      var routes = [{
        path: '',
        component: _my_orders_page__WEBPACK_IMPORTED_MODULE_0__.MyOrdersPage
      }];

      var _MyOrdersPageModule = /*#__PURE__*/_createClass(function MyOrdersPageModule() {
        _classCallCheck(this, MyOrdersPageModule);
      });

      _MyOrdersPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, src_components_product_list_card_product_list_card_module__WEBPACK_IMPORTED_MODULE_2__.productListCardModule, src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_3__.NoRecordFoundModule],
        declarations: [_my_orders_page__WEBPACK_IMPORTED_MODULE_0__.MyOrdersPage]
      })], _MyOrdersPageModule);
      /***/
    },

    /***/
    16161:
    /*!*********************************************!*\
      !*** ./src/app/my-orders/my-orders.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyOrdersPage": function MyOrdersPage() {
          return (
            /* binding */
            _MyOrdersPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_my_orders_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./my-orders.page.html */
      61165);
      /* harmony import */


      var _my_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-orders.page.scss */
      56400);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);
      /* harmony import */


      var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/loading/loading.service */
      45386);
      /* harmony import */


      var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/app-http/app-http.service */
      20688);
      /* harmony import */


      var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/services/app-user/app-user.service */
      53755);
      /* harmony import */


      var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/services/app-cart/app-cart.service */
      88632);

      var _MyOrdersPage = /*#__PURE__*/function () {
        function MyOrdersPage(navCtrl, http, config, shared, appHttpService, loading, appUserService, appCartService) {
          _classCallCheck(this, MyOrdersPage);

          this.navCtrl = navCtrl;
          this.http = http;
          this.config = config;
          this.shared = shared;
          this.appHttpService = appHttpService;
          this.loading = loading;
          this.appUserService = appUserService;
          this.appCartService = appCartService;
          this.httpRunning = false;
          this.segmentsTabs = "pending";
          this.ordersArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
          this.pageNumber = 1;
        }

        _createClass(MyOrdersPage, [{
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          }
        }, {
          key: "pullRefresh",
          value: function pullRefresh() {
            this.pageNumber = 1;
            this.ordersArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            this.getOrders();
          }
        }, {
          key: "getOrders",
          value: function getOrders() {
            var _this = this;

            var url = "customer/order";
            url += "?limit=" + this.config.perPageNumber;
            url += "&orderDetail=1";
            url += "&productDetail=1";
            url += "&language_id=" + this.config.languageIdNumber;
            url += "&currency=" + this.config.currencyIdNumber;
            url += "&page=" + this.pageNumber;
            this.appHttpService.getHttp(url).then(function (data) {
              var dat = data;

              _this.infinite.complete();

              if (_this.pageNumber == 1) _this.ordersArray = [];

              if (dat.length != 0) {
                var _iterator = _createForOfIteratorHelper(dat),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var value = _step.value;

                    _this.ordersArray.push(value);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }

              if (dat.length < _this.config.perPageNumber) _this.infinite.disabled = true;
              _this.pageNumber++;

              _this.ionRefresher.complete();
            });
          }
        }, {
          key: "getOrderTotalPrice",
          value: function getOrderTotalPrice(o) {
            var priceFixed = parseFloat(o.order_price.toString()).toFixed(o.currency.decimal_place);
            return priceFixed + o.currency.code;
          }
        }, {
          key: "getFilteredOrders",
          value: function getFilteredOrders() {
            if (this.ordersArray[0] == 1) return this.ordersArray;

            if (this.segmentsTabs == 'pending') {
              var orders = [];
              this.ordersArray.forEach(function (element) {
                if (element.order_status.toLocaleLowerCase() == "pending") orders.push(element);
              });
              return orders;
            }

            if (this.segmentsTabs == 'delivered') {
              var _orders = [];
              this.ordersArray.forEach(function (element) {
                if (element.order_status.toLocaleLowerCase() == "delivered") _orders.push(element);
              });
              return _orders;
            }

            if (this.segmentsTabs == 'cancelled') {
              var _orders2 = [];
              this.ordersArray.forEach(function (element) {
                if (element.order_status.toLocaleLowerCase() == "cancelled") _orders2.push(element);
              });
              return _orders2;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getOrders();
          }
        }, {
          key: "showOrderDetail",
          value: function showOrderDetail(order) {
            this.navCtrl.navigateForward("/my-order-detail/" + order.order_id);
          }
        }, {
          key: "openProductsPage",
          value: function openProductsPage() {
            this.navCtrl.navigateForward("tabs/home");
          }
        }]);

        return MyOrdersPage;
      }();

      _MyOrdersPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService
        }, {
          type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
        }, {
          type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_6__.AppUserService
        }, {
          type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_7__.AppCartService
        }];
      };

      _MyOrdersPage.propDecorators = {
        infinite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll, {
            "static": false
          }]
        }],
        ionRefresher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRefresher, {
            "static": false
          }]
        }]
      };
      _MyOrdersPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-my-orders',
        template: _raw_loader_my_orders_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_orders_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyOrdersPage);
      /***/
    },

    /***/
    56400:
    /*!***********************************************!*\
      !*** ./src/app/my-orders/my-orders.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --padding-start: var(--app-padding-left-right);\n  --padding-end: var(--app-padding-left-right);\n}\n\nion-content .bottom-grid ion-row ion-col ion-label p {\n  line-height: 1;\n}\n\nion-content .bottom-grid ion-row ion-col .view-detail-button {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\nion-content ion-list ion-item {\n  --padding-start: 0;\n}\n\nion-content ion-list ion-item .item-inner {\n  padding: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4Q0FBZ0I7RUFDaEIsNENBQWM7QUFBbEI7O0FBSEE7RUFhd0IsY0FBYztBQU50Qzs7QUFQQTtFQWtCb0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBUDdCOztBQWJBO0VBMkJZLGtCQUFnQjtBQVY1Qjs7QUFqQkE7RUE2QmdCLHFCQUFxQjtBQVJyQyIsImZpbGUiOiJteS1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIC0tcGFkZGluZy1lbmQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuXG4gICAgLmJvdHRvbS1ncmlkIHtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICAgICAvLyBpb24tYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbG9yOiAjY2RkMmRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC52aWV3LWRldGFpbC1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgLml0ZW0taW5uZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    61165:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-orders/my-orders.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\">\n      {{'my orders'|translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"pullRefresh()\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid class=\"padding-top-10 bg-transparent\" [class.round-borders]=\"config.roundBordersBool\">\n    <ion-row>\n      <ion-segment class=\"app-segments\" [(ngModel)]=\"segmentsTabs\" mode=ios>\n        <ion-segment-button value=\"pending\">\n          <ion-label class=\"font-extra-large ion-text-capitalize\">{{'pending'|translate}}</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"delivered\">\n          <ion-label class=\"font-extra-large ion-text-capitalize\">{{'delivered'| translate }}</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"cancelled\">\n          <ion-label class=\"font-extra-large ion-text-capitalize\">{{'cancelled'| translate }}</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-row>\n  </ion-grid>\n  <app-no-record-found [data]=\"getFilteredOrders()\" *ngIf=\"getFilteredOrders().length==0\">\n  </app-no-record-found>\n  <div *ngFor=\"let order of getFilteredOrders()\" class=\"margin-top-5\" [class.round-borders]=\"config.roundBordersBool\">\n    <div *ngIf=\"order==1\">\n      <ion-card class=\"ion-no-border ion-no-margin\">\n        <ion-grid>\n          <div class=\"ion-padding custom-skeleton\">\n            <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 88%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70%\"></ion-skeleton-text>\n          </div>\n        </ion-grid>\n      </ion-card>\n    </div>\n    <div *ngIf=\"order!=1\">\n      <ion-grid class=\"bottom-grid\">\n        <ion-row>\n          <ion-col>\n            <ion-label>\n              <h3>{{'Order Id'|translate}}:{{order.order_id}} </h3>\n            </ion-label>\n            <ion-label>\n              <p class=\"font-small\">{{'Placed on'|translate}} {{order.order_date}}</p>\n            </ion-label>\n            <!-- <ion-label>\n              <p class=\"font-color-light font-small\">Delivered on 12/12/12 </p>\n            </ion-label> -->\n            <ion-label class=\"font-extra-small view-detail-button\" (click)=\"showOrderDetail(order)\">{{'View\n              Details'|translate}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-list class=\"bg-transparent\">\n        <ion-item *ngFor=\"let p of order.order_detail\" class=\"bg-transparent padding-bottom-10\" lines=\"none\">\n          <app-product-list-card page=\"myOrder\" [data]=\"p\"></app-product-list-card>\n        </ion-item>\n        <ion-item class=\"bg-transparent\" lines=\"none\">\n          <ion-label style=\"position: absolute; right: 10px;\" class=\"font-large\">\n            {{order.order_detail.length}} items total: <span class=\"color-primary\">{{getOrderTotalPrice(order)}}</span>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getOrders()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_my-orders_my-orders_module_ts-es5.js.map