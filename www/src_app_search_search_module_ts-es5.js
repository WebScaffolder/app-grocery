(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_search_search_module_ts"], {
    /***/
    24682:
    /*!*****************************************!*\
      !*** ./src/app/search/search.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPageModule": function SearchPageModule() {
          return (
            /* binding */
            _SearchPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./search.page */
      75105);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var src_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/components/product-card/product-card.module */
      12682);

      var routes = [{
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage
      }];

      var _SearchPageModule = /*#__PURE__*/_createClass(function SearchPageModule() {
        _classCallCheck(this, SearchPageModule);
      });

      _SearchPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, src_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__.productCardModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_0__.SearchPage]
      })], _SearchPageModule);
      /***/
    },

    /***/
    75105:
    /*!***************************************!*\
      !*** ./src/app/search/search.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SearchPage": function SearchPage() {
          return (
            /* binding */
            _SearchPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./search.page.html */
      74173);
      /* harmony import */


      var _search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./search.page.scss */
      7802);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/loading/loading.service */
      45386);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/app-http/app-http.service */
      20688);
      /* harmony import */


      var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/services/app-toast/app-toast.service */
      58824);
      /* harmony import */


      var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/services/app-cart/app-cart.service */
      88632);
      /* harmony import */


      var src_services_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/services/app-storage/app-storage.service */
      75211);

      var _SearchPage = /*#__PURE__*/function () {
        function SearchPage(navCtrl, config, appHttpService, http, loading, appCartService, appToastService, shared, appStorageService) {
          _classCallCheck(this, SearchPage);

          this.navCtrl = navCtrl;
          this.config = config;
          this.appHttpService = appHttpService;
          this.http = http;
          this.loading = loading;
          this.appCartService = appCartService;
          this.appToastService = appToastService;
          this.shared = shared;
          this.appStorageService = appStorageService;
          this.pageNumber = 1;
          this.searchHistoryArray = [];
        }

        _createClass(SearchPage, [{
          key: "onChangeKeyword",
          value: function onChangeKeyword(e) {//console.log(this.search);
            // if (search != undefined) {
            //rchResult = [];
            //  }
          }
        }, {
          key: "getSearchData",
          value: function getSearchData() {
            if (this.searchString != undefined) {
              if (this.searchString == null || this.searchString == '') {
                this.appToastService.toast("Please enter something");
                return 0;
              }
            } else {
              this.appToastService.toast("Please enter something");
              return 0;
            }

            this.saveAndUpdateHistoryArray();
            this.openProducts();
          }
        }, {
          key: "recentSearchClick",
          value: function recentSearchClick(value) {
            this.searchString = value;
            this.openProducts();
          }
        }, {
          key: "openProducts",
          value: function openProducts() {
            this.navCtrl.navigateForward("/products/0/newest/" + this.searchString);
          }
        }, {
          key: "saveAndUpdateHistoryArray",
          value: function saveAndUpdateHistoryArray() {
            this.searchHistoryArray.push(this.searchString);
            localStorage.searchHistoryArray = JSON.stringify(this.searchHistoryArray);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          }
        }, {
          key: "removeAllHistory",
          value: function removeAllHistory() {
            this.searchHistoryArray = [];
            localStorage.searchHistoryArray = JSON.stringify(this.searchHistoryArray);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.searchHistoryArray != undefined) this.searchHistoryArray = JSON.parse(localStorage.searchHistoryArray);
          }
        }]);

        return SearchPage;
      }();

      _SearchPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService
        }, {
          type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }, {
          type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
        }, {
          type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_7__.AppCartService
        }, {
          type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__.AppToastService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: src_services_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_8__.AppStorageService
        }];
      };

      _SearchPage.propDecorators = {
        infinite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll, {
            "static": false
          }]
        }]
      };
      _SearchPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-search',
        template: _raw_loader_search_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_search_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SearchPage);
      /***/
    },

    /***/
    7802:
    /*!*****************************************!*\
      !*** ./src/app/search/search.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".bottom-products-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\nion-badge {\n  border: 1px solid var(--ion-text-color);\n}\n\nform {\n  margin-top: 10px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1REFBdUQ7RUFDdkQsd0RBQXdEO0FBQzVEOztBQUVBO0VBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQywyQ0FBMkM7QUFDL0MiLCJmaWxlIjoic2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tcHJvZHVjdHMtZ3JpZCB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbn1cblxuaW9uLWJhZGdlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbmZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG59XG4iXX0= */";
      /***/
    },

    /***/
    74173:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'search'| translate }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"getSearchData()\">\n    <ion-searchbar [(ngModel)]=\"searchString\" name=\"searchString\" class=\"font-small\"\n      (ionInput)=\"onChangeKeyword($event)\" placeholder=\"{{'What are you looking for?'|translate}}\">\n    </ion-searchbar>\n  </form>\n  <ion-row class=\"ion-text-center ion-no-padding ion-padding padding-bottom-5\" *ngIf=\"searchHistoryArray.length!=0\">\n    <ion-col class=\"font-small ion-no-padding\">{{'recent searches'|translate}}</ion-col>\n  </ion-row>\n  <ion-row class=\"ion-no-padding ion-padding\" *ngIf=\"searchHistoryArray.length!=0\">\n    <ion-col class=\"ion-no-padding\">\n      <ion-badge color=\"light\"\n        class=\"font-extra-small app-tex-color ion-margin-end margin-bottom-10 padding-horizontal-10 variable-background-color\"\n        *ngFor=\"let s of searchHistoryArray\" (click)=\"recentSearchClick(s)\">\n        {{s}}\n      </ion-badge>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"ion-text-center ion-no-padding ion-padding padding-bottom-5\" *ngIf=\"searchHistoryArray.length!=0\">\n    <ion-col class=\"font-small ion-no-padding\">\n      <ion-button class=\"font-small\" fill=\"outline\" size=small color=\"danger\" (click)=\"removeAllHistory()\">\n        {{'remove'|translate}}</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_search_search_module_ts-es5.js.map