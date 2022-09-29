(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_my-account_my-account_module_ts"], {
    /***/
    37796:
    /*!*************************************************!*\
      !*** ./src/app/my-account/my-account.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyAccountPageModule": function MyAccountPageModule() {
          return (
            /* binding */
            _MyAccountPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _my_account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./my-account.page */
      6197);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);

      var routes = [{
        path: '',
        component: _my_account_page__WEBPACK_IMPORTED_MODULE_0__.MyAccountPage
      }];

      var _MyAccountPageModule = /*#__PURE__*/_createClass(function MyAccountPageModule() {
        _classCallCheck(this, MyAccountPageModule);
      });

      _MyAccountPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_0__.MyAccountPage]
      })], _MyAccountPageModule);
      /***/
    },

    /***/
    6197:
    /*!***********************************************!*\
      !*** ./src/app/my-account/my-account.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyAccountPage": function MyAccountPage() {
          return (
            /* binding */
            _MyAccountPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_my_account_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./my-account.page.html */
      87787);
      /* harmony import */


      var _my_account_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./my-account.page.scss */
      99932);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
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


      var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/services/app-toast/app-toast.service */
      58824);
      /* harmony import */


      var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/services/app-user/app-user.service */
      53755);
      /* harmony import */


      var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/services/app-log/app-log.service */
      88955);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _MyAccountPage = /*#__PURE__*/function () {
        function MyAccountPage(config, shared, appHttpService, appToastService, loading, appUserService, navCtrl, appLogService) {
          _classCallCheck(this, MyAccountPage);

          this.config = config;
          this.shared = shared;
          this.appHttpService = appHttpService;
          this.appToastService = appToastService;
          this.loading = loading;
          this.appUserService = appUserService;
          this.navCtrl = navCtrl;
          this.appLogService = appLogService;
          this.myAccountData = {
            first_name: '',
            last_name: '',
            password_confirmation: '',
            password: ''
          };
        }

        _createClass(MyAccountPage, [{
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          } //============================================================================================  
          //function updating user information

        }, {
          key: "updateInfo",
          value: function updateInfo() {
            var _this = this;

            var info = this.myAccountData;
            this.appHttpService.putHttp('profile/' + this.appUserService.customerData.id, info, true, true).then(function (data) {
              _this.myAccountData.first_name = data.customer_first_name;
              _this.myAccountData.last_name = data.customer_last_name;
              _this.myAccountData.password = "";
              _this.myAccountData.password_confirmation = "";

              _this.appUserService.updateUserInfo(data);
            });
          } //============================================================================================

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.myAccountData.first_name = this.appUserService.customerData.firstName;
            this.myAccountData.last_name = this.appUserService.customerData.lastName;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyAccountPage;
      }();

      _MyAccountPage.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService
        }, {
          type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__.AppToastService
        }, {
          type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
        }, {
          type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_7__.AppUserService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
        }, {
          type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_8__.AppLogService
        }];
      };

      _MyAccountPage = (0, tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-my-account',
        template: _raw_loader_my_account_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_my_account_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyAccountPage);
      /***/
    },

    /***/
    99932:
    /*!*************************************************!*\
      !*** ./src/app/my-account/my-account.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "form {\n  margin: 0;\n}\n\nion-list {\n  padding: 0;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\nion-list ion-item {\n  --background: transparent;\n}\n\nion-list ion-item ion-input {\n  border-radius: 5px;\n  background-color: var(--app-item-color);\n  --padding-start: 10px;\n  margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBUztBQUNiOztBQUNBO0VBQ0ksVUFBVTtFQUNWLDBDQUEwQztFQUMxQywyQ0FBMkM7QUFFL0M7O0FBTEE7RUFLUSx5QkFBYTtBQUlyQjs7QUFUQTtFQU9ZLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMscUJBQWdCO0VBQ2hCLGdCQUFnQjtBQU01QiIsImZpbGUiOiJteS1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuICAgIG1hcmdpbjogMDtcbn1cbmlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgaW9uLWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1pdGVtLWNvbG9yKTtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    87787:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-account/my-account.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\">{{'profile' |translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form #userForm=\"ngForm\" (ngSubmit)=\"updateInfo()\">\n    <ion-list class=\"margin-top-10 padding-top-0 padding-bottom-0 bg-transparent\" [class.round-borders]=\"config.roundBordersBool\">\n      <ion-item lines=none>\n        <ion-label position=\"stacked\">* {{'First Name'|translate}}</ion-label>\n        <ion-input placeholder=\"{{'First Name'|translate}}\" type=\"text\" [(ngModel)]=\"myAccountData.first_name\"\n          name=\"customers_first_name\" required class=\"font-medium\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=none>\n        <ion-label position=\"stacked\">* {{'Last Name'|translate}}</ion-label>\n        <ion-input placeholder=\"{{'Last Name'|translate}}\" type=\"text\" [(ngModel)]=\"myAccountData.last_name\"\n          name=\"customers_last_name\" required class=\"font-medium\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=none>\n        <ion-label position=\"stacked\">* {{'password'|translate}}</ion-label>\n        <ion-input placeholder=\"{{'password'|translate}}\" type=\"password\" [(ngModel)]=\"myAccountData.password\"\n          name=\"customers_password\" required class=\"font-medium\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=none>\n        <ion-label position=\"stacked\">* {{'confirm password'|translate}}</ion-label>\n        <ion-input placeholder=\"{{'confirm password'|translate}}\" type=\"password\"\n          [(ngModel)]=\"myAccountData.password_confirmation\" name=\"password_confirmation\" required class=\"font-medium\">\n        </ion-input>\n      </ion-item>\n      <ion-button expand=\"block\" class=\"ion-margin\" type=\"submit\" [disabled]=\"!userForm.form.valid\">{{'Update'|translate}}\n      </ion-button>\n    </ion-list>\n  </form>\n\n</ion-content>\n\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{'Edit Profile'| translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"my-account-content\">\n  <form #userForm=\"ngForm\" (ngSubmit)=\"updateInfo()\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"myAccountData.customers_first_name\" name=\"customers_first_name\" required>\n      </ion-input>\n    </ion-item>\n    <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"myAccountData.customers_last_name\" name=\"customers_last_name\" required>\n      </ion-input>\n    </ion-item>\n    <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Phone Number'|translate}}</ion-label>\n      <ion-input inputmode=\"tel\" minlength=9 maxlength=15 pattern=\"^([0-9\\(\\)\\/\\+ \\-]*)$\"\n        [(ngModel)]=\"myAccountData.customers_telephone\" name=\"phone\" required></ion-input>\n    </ion-item>\n    <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n    <ion-button expand=\"full\" color=\"secondary\" type=\"submit\" [disabled]=\"!userForm.form.valid\">{{'Update'|translate}}\n    </ion-button>\n  </form>\n</ion-content> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_my-account_my-account_module_ts-es5.js.map