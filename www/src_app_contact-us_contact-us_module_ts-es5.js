(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_contact-us_contact-us_module_ts"], {
    /***/
    63648:
    /*!*************************************************!*\
      !*** ./src/app/contact-us/contact-us.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactUsPageModule": function ContactUsPageModule() {
          return (
            /* binding */
            _ContactUsPageModule
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


      var _contact_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contact-us.page */
      11432);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);

      var routes = [{
        path: '',
        component: _contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage
      }];

      var _ContactUsPageModule = /*#__PURE__*/_createClass(function ContactUsPageModule() {
        _classCallCheck(this, ContactUsPageModule);
      });

      _ContactUsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        declarations: [_contact_us_page__WEBPACK_IMPORTED_MODULE_0__.ContactUsPage]
      })], _ContactUsPageModule);
      /***/
    },

    /***/
    11432:
    /*!***********************************************!*\
      !*** ./src/app/contact-us/contact-us.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactUsPage": function ContactUsPage() {
          return (
            /* binding */
            _ContactUsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./contact-us.page.html */
      60420);
      /* harmony import */


      var _contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contact-us.page.scss */
      66926);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/loading/loading.service */
      45386);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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


      var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/services/app-user/app-user.service */
      53755);

      var _ContactUsPage = /*#__PURE__*/function () {
        function ContactUsPage(navCtrl, http, config, loading, shared, appHttpService, appToastService, appUserService) {
          _classCallCheck(this, ContactUsPage);

          this.navCtrl = navCtrl;
          this.http = http;
          this.config = config;
          this.loading = loading;
          this.shared = shared;
          this.appHttpService = appHttpService;
          this.appToastService = appToastService;
          this.appUserService = appUserService;
          this.contact = {
            last_name: '',
            first_name: '',
            email: '',
            message: ''
          };
          this.errorMessage = '';
        }

        _createClass(ContactUsPage, [{
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.loadMap();
          } //============================================================================================

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            if (this.appUserService.userIsLogedIn()) {
              this.contact.first_name = this.appUserService.customerData.firstName;
              this.contact.last_name = this.appUserService.customerData.lastName;
              this.contact.email = this.appUserService.customerData.email;
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this = this;

            var info = this.contact;
            this.appHttpService.postHttp('contact-us', info, true).then(function (data) {
              if (_this.appUserService.userIsLogedIn()) {
                _this.contact.message = "";
                _this.contact.email = "";
                _this.contact.first_name = "";
                _this.contact.last_name = "";
              } else {
                _this.contact.message = "";
              }
            });
          }
        }, {
          key: "loadMap",
          value: function loadMap() {// /* The create() function will take the ID of your map element */
            // const map = GoogleMaps.create('map');
            // map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
            //   const coordinates: LatLng = new LatLng(this.config.latitude, this.config.longitude);
            //   map.setCameraTarget(coordinates);
            //   map.setCameraZoom(15);
            // });
            // let marker: Marker = map.addMarkerSync({
            //   position: { lat: this.config.latitude, lng: this.config.longitude },
            //   title: this.config.address,
            // })
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactUsPage;
      }();

      _ContactUsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }, {
          type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService
        }, {
          type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService
        }, {
          type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__.AppToastService
        }, {
          type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_7__.AppUserService
        }];
      };

      _ContactUsPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: ['map', {
            "static": false
          }]
        }]
      };
      _ContactUsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contact_us_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ContactUsPage);
      /***/
    },

    /***/
    66926:
    /*!*************************************************!*\
      !*** ./src/app/contact-us/contact-us.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-grid ion-col ion-label span {\n  color: red;\n}\n\nion-content ion-grid ion-item {\n  border: 1px solid #f1f3f2;\n  --box-shadow: none;\n}\n\nion-content ion-grid ion-item ion-textarea {\n  --padding-start: 0;\n  --padding-end: 5px;\n  --padding-top: 5px;\n  font-size: 10px;\n}\n\nion-content ion-grid ion-item input {\n  padding-bottom: 0 !important;\n}\n\nion-content ion-grid ion-item ion-input {\n  --padding-start: 0;\n  --padding-end: 5px;\n  --padding-top: 5px;\n  font-size: 10px;\n}\n\nion-content ion-grid ion-item ion-input .native-input {\n  padding-bottom: 0 !important;\n}\n\nion-content ion-button {\n  --border-radius: none;\n  --box-shadow: none;\n  text-transform: none;\n}\n\nion-content .button_container {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS29CLFVBQVU7QUFIOUI7O0FBRkE7RUFVWSx5QkFBeUI7RUFDekIsa0JBQWE7QUFKekI7O0FBUEE7RUFjZ0Isa0JBQWdCO0VBQ2hCLGtCQUFjO0VBQ2Qsa0JBQWM7RUFDZCxlQUFlO0FBSC9COztBQWRBO0VBb0JnQiw0QkFBNEI7QUFGNUM7O0FBbEJBO0VBd0JnQixrQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxrQkFBYztFQUNkLGVBQWU7QUFGL0I7O0FBekJBO0VBNkJvQiw0QkFBNEI7QUFBaEQ7O0FBN0JBO0VBbUNRLHFCQUFnQjtFQUNoQixrQkFBYTtFQUNiLG9CQUFvQjtBQUY1Qjs7QUFuQ0E7RUF3Q1Esa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBRGpCIiwiZmlsZSI6ImNvbnRhY3QtdXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgaW9uLWdyaWR7XG4gICAgICAgIGlvbi1jb2x7XG4gICAgICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmM2YyO1xuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgaW9uLXRleHRhcmVhe1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDVweDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXR7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dHtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA1cHg7XG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAubmF0aXZlLWlucHV0e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIC5idXR0b25fY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    60420:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'feedback'|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form #userForm=\"ngForm\" (ngSubmit)=\"submit()\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"font-medium\"><span>*</span>{{'Please write your feedback below'|translate}} </ion-label>\n          <ion-item lines=\"none\">\n            <!-- <ion-label position=\"stacked\">Textarea</ion-label> -->\n            <ion-textarea rows=\"6\" placeholder=\"Write your feedback here\" type=\"text\" [(ngModel)]=\"contact.message\"\n              name=\"message\" required></ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"font-medium\"><span>*</span> {{'First Name'|translate}}</ion-label>\n          <ion-item lines=\"none\">\n            <!-- <ion-label position=\"stacked\">Textarea</ion-label> -->\n            <ion-input style=\"padding: 0 !important;\" type=\"text\" [(ngModel)]=\"contact.first_name\" name=\"firstname\"\n              placeholder=\"{{'First Name'|translate}}\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"font-medium\"><span>*</span> {{'Last Name'|translate}}</ion-label>\n          <ion-item lines=\"none\">\n            <ion-input style=\"padding: 0 !important;\" type=\"text\" [(ngModel)]=\"contact.last_name\" name=\"last_name\"\n              placeholder=\"{{'Last Name'|translate}}\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"font-medium\"><span>*</span>{{'Email'|translate}} </ion-label>\n          <ion-item lines=\"none\">\n            <ion-input placeholder=\"email@example.com\" type=\"email\" email\n              pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" [(ngModel)]=\"contact.email\"\n              required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid class=\"button_container\">\n      <ion-row>\n        <ion-col>\n          <ion-button class=\"ion-no-border font-bold\" expand=\"block\" type=\"submit\" [disabled]=\"!userForm.form.valid\">{{'Submit'|translate}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n</ion-content>\n\n\n<!-- <ion-header>\n</ion-header>\n\n<ion-content>\n  <div #map id=\"map\"></div>\n  <ion-card class=\"ion-no-padding\">\n    <ion-card-content class=\"ion-no-padding\">\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"pin\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <p wrap-text>\n            {{config.address}}\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"mail\"></ion-icon>\n        </ion-avatar>\n        <ion-label>\n          <p>\n            {{config.email}}\n          </p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <ion-icon name=\"call\"></ion-icon>\n        </ion-avatar>\n\n        <ion-label>\n          <p>\n            {{config.phoneNo}}\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <form #contactForm=\"ngForm\" (ngSubmit)=\"submit()\">\n        <ion-item>\n          <ion-label position=\"floating\">{{'Name'|translate}}</ion-label>\n          <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"contact.name\" required>\n          </ion-input>\n        </ion-item>\n        <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n        <ion-item>\n          <ion-label position=\"floating\">{{'Email'|translate}}</ion-label>\n          <ion-input type=\"email\" email pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\"\n            [(ngModel)]=\"contact.email\" required>\n          </ion-input>\n        </ion-item>\n        <ion-text class=\"helptext\"> * {{\"invalid email\"|translate}}</ion-text>\n        <ion-item>\n          <ion-label position=\"floating\">{{'Your Messsage'|translate}}</ion-label>\n          <ion-input type=\"text\" name=\"message\" [(ngModel)]=\"contact.message\" required>\n          </ion-input>\n        </ion-item>\n        <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n        <ion-col col-12>\n          <label *ngIf=\"errorMessage!=''\">\n            <span>{{errorMessage}}</span>\n          </label>\n        </ion-col>\n\n        <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!contactForm.form.valid\">{{'Send'|translate}}</ion-button>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content> -->";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_contact-us_contact-us_module_ts-es5.js.map