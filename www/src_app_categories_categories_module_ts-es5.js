(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_categories_categories_module_ts"], {
    /***/
    71944:
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPageModule": function CategoriesPageModule() {
          return (
            /* binding */
            _CategoriesPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./categories.page */
      14945);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var src_components_categories_page_styles_categories_page_style1_categories_page_style1_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/components/categories-page-styles/categories-page-style1/categories-page-style1.module */
      4025);
      /* harmony import */


      var src_components_categories_page_styles_categories_page_style3_categories_page_style3_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/components/categories-page-styles/categories-page-style3/categories-page-style3.module */
      20796);
      /* harmony import */


      var src_components_categories_page_styles_categories_page_style5_categories_page_style5_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/components/categories-page-styles/categories-page-style5/categories-page-style5.module */
      80930);
      /* harmony import */


      var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/directives/appAnimation/animationDirective.module */
      73448);
      /* harmony import */


      var src_components_categories_page_styles_categories_page_style2_categories_page_style2_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/components/categories-page-styles/categories-page-style2/categories-page-style2.module */
      74489);
      /* harmony import */


      var src_components_categories_page_styles_categories_page_style4_categories_page_style4_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/components/categories-page-styles/categories-page-style4/categories-page-style4.module */
      74531);
      /* harmony import */


      var src_components_categories_page_styles_categories_page_style6_categories_page_style6_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/components/categories-page-styles/categories-page-style6/categories-page-style6.module */
      60509);

      var routes = [{
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_0__.CategoriesPage
      }];

      var _CategoriesPageModule = /*#__PURE__*/_createClass(function CategoriesPageModule() {
        _classCallCheck(this, CategoriesPageModule);
      });

      _CategoriesPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, src_components_categories_page_styles_categories_page_style1_categories_page_style1_module__WEBPACK_IMPORTED_MODULE_2__.categoryPageStyle1Module, src_components_categories_page_styles_categories_page_style3_categories_page_style3_module__WEBPACK_IMPORTED_MODULE_3__.categoryPageStyle3Module, src_components_categories_page_styles_categories_page_style5_categories_page_style5_module__WEBPACK_IMPORTED_MODULE_4__.categoryPageStyle5Module, src_components_categories_page_styles_categories_page_style2_categories_page_style2_module__WEBPACK_IMPORTED_MODULE_6__.categoryPageStyle2Module, src_components_categories_page_styles_categories_page_style4_categories_page_style4_module__WEBPACK_IMPORTED_MODULE_7__.categoryPageStyle4Module, src_components_categories_page_styles_categories_page_style6_categories_page_style6_module__WEBPACK_IMPORTED_MODULE_8__.categoryPageStyle6Module, src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_5__.AnimationDirectiveModule],
        declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_0__.CategoriesPage]
      })], _CategoriesPageModule);
      /***/
    },

    /***/
    14945:
    /*!***********************************************!*\
      !*** ./src/app/categories/categories.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPage": function CategoriesPage() {
          return (
            /* binding */
            _CategoriesPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./categories.page.html */
      33955);
      /* harmony import */


      var _categories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories.page.scss */
      27468);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/app-categories/app-categories.service */
      10677);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/app-cart/app-cart.service */
      88632);

      var _CategoriesPage = /*#__PURE__*/function () {
        function CategoriesPage(shared, config, appCategoriesService, navCtrl, appCartService, activatedRoute) {
          _classCallCheck(this, CategoriesPage);

          this.shared = shared;
          this.config = config;
          this.appCategoriesService = appCategoriesService;
          this.navCtrl = navCtrl;
          this.appCartService = appCartService;
          this.activatedRoute = activatedRoute;
          this.parentIdNumber = this.activatedRoute.snapshot.paramMap.get('parent');
          if (this.parentIdNumber == undefined || this.parentIdNumber == null) this.parentIdNumber = 0;
        }

        _createClass(CategoriesPage, [{
          key: "openSearchPage",
          value: function openSearchPage() {
            this.navCtrl.navigateForward("search");
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          }
        }, {
          key: "getListOfCategories",
          value: function getListOfCategories() {
            var arr = [];
            if (this.parentIdNumber == 0) arr = this.appCategoriesService.categoriesArray;else arr = this.appCategoriesService.getCategories(this.parentIdNumber);
            return arr;
          }
        }, {
          key: "getHeaderTitle",
          value: function getHeaderTitle() {
            if (this.parentIdNumber == 0) this.parentNameString = "";else {
              this.parentNameString = this.appCategoriesService.getCategoryName(this.parentIdNumber);
            }
            return this.parentNameString;
          }
        }, {
          key: "openProductPage",
          value: function openProductPage(value) {
            if (this.appCategoriesService.checkCategoriesHasChild(value.id)) {
              this.navCtrl.navigateForward("categories/" + value.id);
            } else {
              this.navCtrl.navigateForward("products/" + value.id);
            }
          }
        }, {
          key: "openSubCategories",
          value: function openSubCategories(parent) {
            var count = 0;

            var _iterator = _createForOfIteratorHelper(this.appCategoriesService.allCategoriesArray),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var value = _step.value;
                if (parent.id == value.parent_id) count++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (count != 0) this.navCtrl.navigateForward("/categories/" + parent.id);else this.navCtrl.navigateForward("/products/" + parent.id);
          }
        }, {
          key: "viewAll",
          value: function viewAll() {
            this.navCtrl.navigateForward("/products/" + this.parentIdNumber);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoriesPage;
      }();

      _CategoriesPage.ctorParameters = function () {
        return [{
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }, {
          type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_4__.AppCategoriesService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_5__.AppCartService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
        }];
      };

      _CategoriesPage = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-categories',
        template: _raw_loader_categories_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoriesPage);
      /***/
    },

    /***/
    19078:
    /*!**********************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style2/categories-page-style2.component.ts ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPageStyle2Component": function CategoriesPageStyle2Component() {
          return (
            /* binding */
            _CategoriesPageStyle2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_categories_page_style2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./categories-page-style2.component.html */
      31026);
      /* harmony import */


      var _categories_page_style2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style2.component.scss */
      89983);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/app-categories/app-categories.service */
      10677);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);

      var _CategoriesPageStyle2Component = /*#__PURE__*/function () {
        function CategoriesPageStyle2Component(appCategoriesService, config) {
          _classCallCheck(this, CategoriesPageStyle2Component);

          this.appCategoriesService = appCategoriesService;
          this.config = config;
          this.onClickCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(CategoriesPageStyle2Component, [{
          key: "clickCategory",
          value: function clickCategory(value) {
            this.onClickCategory.emit(value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoriesPageStyle2Component;
      }();

      _CategoriesPageStyle2Component.ctorParameters = function () {
        return [{
          type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }];
      };

      _CategoriesPageStyle2Component.propDecorators = {
        parent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['parent']
        }],
        categoriesArray: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['dataArray']
        }],
        onClickCategory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _CategoriesPageStyle2Component = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-categories-page-style2',
        template: _raw_loader_categories_page_style2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_categories_page_style2_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoriesPageStyle2Component);
      /***/
    },

    /***/
    74489:
    /*!*******************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style2/categories-page-style2.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "categoryPageStyle2Module": function categoryPageStyle2Module() {
          return (
            /* binding */
            _categoryPageStyle2Module
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _categories_page_style2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style2.component */
      19078);
      /* harmony import */


      var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/directives/appAnimation/animationDirective.module */
      73448);
      /* harmony import */


      var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/directives/imageValidate/imageValidate.module */
      31268);

      var _categoryPageStyle2Module = /*#__PURE__*/_createClass(function categoryPageStyle2Module() {
        _classCallCheck(this, categoryPageStyle2Module);
      });

      _categoryPageStyle2Module = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_categories_page_style2_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageStyle2Component],
        exports: [_categories_page_style2_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageStyle2Component],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_2__.AnimationDirectiveModule, src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__.ImageValidateDirectiveModule]
      })], _categoryPageStyle2Module);
      /***/
    },

    /***/
    28600:
    /*!**********************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style4/categories-page-style4.component.ts ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPageStyle4Component": function CategoriesPageStyle4Component() {
          return (
            /* binding */
            _CategoriesPageStyle4Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_categories_page_style4_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./categories-page-style4.component.html */
      29261);
      /* harmony import */


      var _categories_page_style4_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style4.component.scss */
      48365);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/app-categories/app-categories.service */
      10677);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);

      var _CategoriesPageStyle4Component = /*#__PURE__*/function () {
        function CategoriesPageStyle4Component(appCategoriesService, config) {
          _classCallCheck(this, CategoriesPageStyle4Component);

          this.appCategoriesService = appCategoriesService;
          this.config = config;
          this.onClickCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(CategoriesPageStyle4Component, [{
          key: "clickCategory",
          value: function clickCategory(value) {
            this.onClickCategory.emit(value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoriesPageStyle4Component;
      }();

      _CategoriesPageStyle4Component.ctorParameters = function () {
        return [{
          type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }];
      };

      _CategoriesPageStyle4Component.propDecorators = {
        parent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['parent']
        }],
        categoriesArray: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['dataArray']
        }],
        onClickCategory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _CategoriesPageStyle4Component = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-categories-page-style4',
        template: _raw_loader_categories_page_style4_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_categories_page_style4_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoriesPageStyle4Component);
      /***/
    },

    /***/
    74531:
    /*!*******************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style4/categories-page-style4.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "categoryPageStyle4Module": function categoryPageStyle4Module() {
          return (
            /* binding */
            _categoryPageStyle4Module
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _categories_page_style4_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style4.component */
      28600);
      /* harmony import */


      var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/directives/appAnimation/animationDirective.module */
      73448);
      /* harmony import */


      var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/directives/imageValidate/imageValidate.module */
      31268);

      var _categoryPageStyle4Module = /*#__PURE__*/_createClass(function categoryPageStyle4Module() {
        _classCallCheck(this, categoryPageStyle4Module);
      });

      _categoryPageStyle4Module = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_categories_page_style4_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageStyle4Component],
        exports: [_categories_page_style4_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageStyle4Component],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_2__.AnimationDirectiveModule, src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__.ImageValidateDirectiveModule]
      })], _categoryPageStyle4Module);
      /***/
    },

    /***/
    5436:
    /*!**********************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style6/categories-page-style6.component.ts ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPageStyle6Component": function CategoriesPageStyle6Component() {
          return (
            /* binding */
            _CategoriesPageStyle6Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_categories_page_style6_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./categories-page-style6.component.html */
      19359);
      /* harmony import */


      var _categories_page_style6_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style6.component.scss */
      63357);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/app-categories/app-categories.service */
      10677);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);

      var _CategoriesPageStyle6Component = /*#__PURE__*/function () {
        function CategoriesPageStyle6Component(appCategoriesService, config) {
          _classCallCheck(this, CategoriesPageStyle6Component);

          this.appCategoriesService = appCategoriesService;
          this.config = config;
          this.onClickCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.parentIdNumber = 0;
          this.segment = "0";
        }

        _createClass(CategoriesPageStyle6Component, [{
          key: "getListOfCategories",
          value: function getListOfCategories() {
            var arr = [];

            if (this.categoriesArray[0].id != undefined && this.parentIdNumber == 0) {
              this.parentObject = this.categoriesArray[0];
              this.parentIdNumber = this.parentObject.id;
              this.segment = this.parentIdNumber.toString();
            }

            if (this.segment != "0") {
              this.parentIdNumber = parseInt(this.segment);
              this.parentObject = this.appCategoriesService.getCategoryObject(this.parentIdNumber);
            }

            if (this.parentIdNumber != 0) arr = this.appCategoriesService.getCategories(this.parentIdNumber);
            return arr;
          }
        }, {
          key: "clickCategory",
          value: function clickCategory(value) {
            this.onClickCategory.emit(value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoriesPageStyle6Component;
      }();

      _CategoriesPageStyle6Component.ctorParameters = function () {
        return [{
          type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }];
      };

      _CategoriesPageStyle6Component.propDecorators = {
        parent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['parent']
        }],
        categoriesArray: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['dataArray']
        }],
        onClickCategory: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _CategoriesPageStyle6Component = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-categories-page-style6',
        template: _raw_loader_categories_page_style6_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_categories_page_style6_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoriesPageStyle6Component);
      /***/
    },

    /***/
    60509:
    /*!*******************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style6/categories-page-style6.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "categoryPageStyle6Module": function categoryPageStyle6Module() {
          return (
            /* binding */
            _categoryPageStyle6Module
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/directives/appAnimation/animationDirective.module */
      73448);
      /* harmony import */


      var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/directives/imageValidate/imageValidate.module */
      31268);
      /* harmony import */


      var _categories_page_style6_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories-page-style6.component */
      5436);

      var _categoryPageStyle6Module = /*#__PURE__*/_createClass(function categoryPageStyle6Module() {
        _classCallCheck(this, categoryPageStyle6Module);
      });

      _categoryPageStyle6Module = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_categories_page_style6_component__WEBPACK_IMPORTED_MODULE_3__.CategoriesPageStyle6Component],
        exports: [_categories_page_style6_component__WEBPACK_IMPORTED_MODULE_3__.CategoriesPageStyle6Component],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule, src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule]
      })], _categoryPageStyle6Module);
      /***/
    },

    /***/
    27468:
    /*!*************************************************!*\
      !*** ./src/app/categories/categories.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    89983:
    /*!************************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style2/categories-page-style2.component.scss ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  margin-top: 10px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n  background-color: transparent;\n}\n\nion-grid ion-col ion-card {\n  margin-bottom: 2px;\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n}\n\nion-grid ion-col ion-card ion-row {\n  --ion-grid-column-padding: 0;\n}\n\nion-grid ion-col:nth-child(even) {\n  padding-left: 5px;\n}\n\nion-grid ion-col:nth-child(odd) {\n  padding-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtcGFnZS1zdHlsZTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLDJDQUEyQztFQUMzQyw2QkFBNkI7QUFDakM7O0FBTEE7RUFRWSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDekM7O0FBWkE7RUFhZ0IsNEJBQTBCO0FBRzFDOztBQWhCQTtFQW1CUSxpQkFBaUI7QUFDekI7O0FBcEJBO0VBc0JRLGtCQUFrQjtBQUUxQiIsImZpbGUiOiJjYXRlZ29yaWVzLXBhZ2Utc3R5bGUyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICBpb24tY29sIHtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1jb2w6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIGlvbi1jb2w6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    48365:
    /*!************************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style4/categories-page-style4.component.scss ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  margin-top: 10px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n  background-color: transparent;\n}\n\nion-grid ion-col ion-card {\n  margin-bottom: 2px;\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n}\n\nion-grid ion-col ion-card ion-card-header {\n  background-color: var(--app-item-color);\n  margin-top: -10px;\n  border-radius: 7px;\n}\n\nion-grid ion-col:nth-child(even) {\n  padding-left: 5px;\n}\n\nion-grid ion-col:nth-child(odd) {\n  padding-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtcGFnZS1zdHlsZTQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLDJDQUEyQztFQUMzQyw2QkFBNkI7QUFDakM7O0FBTEE7RUFRWSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDekM7O0FBWkE7RUFjZ0IsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFFbEM7O0FBbEJBO0VBc0JRLGlCQUFpQjtBQUF6Qjs7QUF0QkE7RUF5QlEsa0JBQWtCO0FBQzFCIiwiZmlsZSI6ImNhdGVnb3JpZXMtcGFnZS1zdHlsZTQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIGlvbi1jb2wge1xuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWl0ZW0tY29sb3IpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlvbi1jb2w6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIGlvbi1jb2w6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    63357:
    /*!************************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style6/categories-page-style6.component.scss ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-segment {\n  display: block;\n  position: absolute;\n  border-radius: 0;\n  top: 10px;\n  height: 100%;\n}\n\nion-segment ion-segment-button {\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --padding-top: 20px;\n  --border-radius: 0;\n  --indicator-box-shadow: none;\n}\n\nion-segment ion-segment-button ion-img {\n  width: 12vw;\n}\n\nion-grid {\n  margin-top: 20px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n  background-color: transparent;\n  padding-left: 100px;\n}\n\nion-grid ion-col ion-card {\n  margin-bottom: 2px;\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n}\n\nion-grid ion-col ion-card ion-avatar {\n  margin: auto;\n  width: 12vw;\n  height: 12vw;\n}\n\nion-grid ion-col ion-card ion-row {\n  --ion-grid-column-padding: 0;\n}\n\nion-grid ion-col {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtcGFnZS1zdHlsZTYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsWUFBWTtBQUZoQjs7QUFIQTtFQU9RLHNCQUFpQjtFQUNqQixxQkFBZ0I7RUFDaEIsbUJBQWM7RUFDZCxtQkFBYztFQUNkLGtCQUFnQjtFQUNoQiw0QkFBdUI7QUFBL0I7O0FBWkE7RUFjWSxXQUFXO0FBRXZCOztBQUtBO0VBQ0ksZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQywyQ0FBMkM7RUFDM0MsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUZ2Qjs7QUFIQTtFQVFZLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUR6Qzs7QUFWQTtFQWNnQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFBNUI7O0FBaEJBO0VBbUJnQiw0QkFBMEI7QUFDMUM7O0FBcEJBO0VBeUJRLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFEMUIiLCJmaWxlIjoiY2F0ZWdvcmllcy1wYWdlLXN0eWxlNi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50e1xuLy8gICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbi8vIH1cbmlvbi1zZWdtZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB0b3A6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMnZ3O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYm94LXNoYWRvdzogMCAtNXB4IDVweCAtNXB4ICMzMzM7XG4gICAgLy8gYm94LXNoYWRvdzogNXB4IDAgNXB4IC01cHggIzMzMztcbn1cbmlvbi1ncmlkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTJ2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    33955:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" *ngIf=\"config.appDesignNumber==0\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\" *ngIf=\"getHeaderTitle()\">\n    </ion-icon>\n    <ion-icon #icon1 *ngIf=\"!getHeaderTitle()\" class=\"header-icon\" slot=\"start\" src=\"assets/icon/menu.svg\"\n      (click)=\"shared.toggleMenu()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'categories'|translate}} </ion-title>\n    <ion-icon (click)=\"openSearchPage()\" class=\"header-icon margin-horizontal-10\" slot=\"end\" name=\"search-outline\">\n    </ion-icon>\n    <ion-icon class=\"header-icon\" slot=\"end\" name=\"bag-outline\" (click)=\"appCartService.openCartPage()\"></ion-icon>\n    <ion-badge color=\"danger\" class=\"cart-badge\"><span class=\"center\">{{appCartService.cartTotalItems()}}</span>\n    </ion-badge>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border\" *ngIf=\"config.appDesignNumber==1\">\n  <ion-toolbar color=\"primary\">\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\" *ngIf=\"getHeaderTitle()\">\n    </ion-icon>\n    <ion-icon #icon1 *ngIf=\"!getHeaderTitle()\" class=\"header-icon\" slot=\"start\" src=\"assets/icon/menu.svg\"\n      (click)=\"shared.toggleMenu()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'categories'|translate}} </ion-title>\n    <ion-icon (click)=\"openSearchPage()\" class=\"header-icon margin-horizontal-10\" slot=\"end\" name=\"search-outline\">\n    </ion-icon>\n    <ion-icon class=\"header-icon\" slot=\"end\" name=\"bag-outline\" (click)=\"appCartService.openCartPage()\"></ion-icon>\n    <ion-badge color=\"danger\" class=\"cart-badge\"><span class=\"center\">{{appCartService.cartTotalItems()}}</span>\n    </ion-badge>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border\" *ngIf=\"getHeaderTitle()\">\n  <ion-toolbar>\n    <ion-title mode=\"ios\">{{getHeaderTitle()}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <app-categories-page-style1 *ngIf=\"config.categoryPageNumber==1\" [parent]=\"parentIdNumber\"\n    [dataArray]=\"getListOfCategories()\" (onClickCategory)=\"openProductPage($event)\">\n  </app-categories-page-style1>\n  <app-categories-page-style2 *ngIf=\"config.categoryPageNumber==2\" [parent]=\"parentIdNumber\"\n    [dataArray]=\"getListOfCategories()\" (onClickCategory)=\"openProductPage($event)\"></app-categories-page-style2>\n  <app-categories-page-style3 *ngIf=\"config.categoryPageNumber==3\" [parent]=\"parentIdNumber\"\n    [dataArray]=\"getListOfCategories()\" (onClickCategory)=\"openProductPage($event)\"></app-categories-page-style3>\n  <app-categories-page-style4 *ngIf=\"config.categoryPageNumber==4\" [parent]=\"parentIdNumber\"\n    [dataArray]=\"getListOfCategories()\" (onClickCategory)=\"openProductPage($event)\"></app-categories-page-style4>\n  <app-categories-page-style5 *ngIf=\"config.categoryPageNumber==5\" [parent]=\"parentIdNumber\"\n    [dataArray]=\"getListOfCategories()\" (onClickCategory)=\"openProductPage($event)\"></app-categories-page-style5>\n  <app-categories-page-style6 [parent]=\"parentIdNumber\" *ngIf=\"config.categoryPageNumber==6\"\n    [dataArray]=\"getListOfCategories()\" (onClickCategory)=\"openProductPage($event)\"></app-categories-page-style6>\n</ion-content>";
      /***/
    },

    /***/
    31026:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/categories-page-styles/categories-page-style2/categories-page-style2.component.html ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid class=\"ion-no-padding\">\n  <ion-row class=\"ion-no-padding\">\n    <ion-col size=\"6\" *ngFor=\"let c of categoriesArray\" class=\"ion-no-padding\" [appAnimation]=\"'fade'\">\n      <ion-card (click)=\"clickCategory(c)\" class=\"ion-no-margin\" [class.round-borders]=\"config.roundBordersBool\">\n        <ion-img [appImageValidate]=\"70\" [src]=\"config.imgThumbnailUrlString+c.gallary\"\n          [class.round-borders]=\"config.roundBordersBool\">\n        </ion-img>\n        <ion-card-header class=\"ion-text-center ion-no-padding padding-vertical-5\">\n          <ion-card-title class=\"font-extra-large ion-text-capitalize truncate\">{{c.name}}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>";
      /***/
    },

    /***/
    29261:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/categories-page-styles/categories-page-style4/categories-page-style4.component.html ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid class=\"ion-no-padding\">\n  <ion-row class=\"ion-no-padding\">\n    <ion-col size=\"6\" *ngFor=\"let c of categoriesArray\" class=\"ion-no-padding\" [appAnimation]=\"'fade'\">\n      <ion-card (click)=\"clickCategory(c)\" class=\"ion-no-margin\">\n        <ion-img [appImageValidate]=\"70\" [src]=\"config.imgThumbnailUrlString+c.gallary\" [class.round-borders]=\"config.roundBordersBool\">\n        </ion-img>\n        <ion-card-header class=\"ion-text-center ion-no-padding padding-vertical-5\">\n          <ion-card-title class=\"font-extra-large ion-text-capitalize truncate\">{{c.name}}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>";
      /***/
    },

    /***/
    19359:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/categories-page-styles/categories-page-style6/categories-page-style6.component.html ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid class=\"ion-no-padding\">\n  <ion-row class=\"ion-no-padding\">\n    <ion-col size=\"3\" *ngFor=\"let c of getListOfCategories()\" class=\"ion-no-padding\">\n      <ion-card (click)=\"clickCategory(c)\" class=\"ion-no-margin\">\n        <ion-avatar [class.round-borders]=\"config.roundBordersBool\">\n          <ion-img [appImageValidate]=\"25\" [src]=\"config.imgThumbnailUrlString+c.gallary\">\n          </ion-img>\n        </ion-avatar>\n        <ion-card-header class=\"ion-text-center ion-no-padding padding-vertical-5\">\n          <ion-card-title class=\"font-small ion-text-capitalize truncate\">{{c.name}}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-button expand=\"block\" class=\"font-small ion-text-capitalize\" (click)=\"clickCategory(parentObject)\" fill=clear>\n    {{\"view all\"|translate}}</ion-button>\n</ion-grid>\n\n<!-- Scrollable Segment -->\n<ion-segment scrollable value=\"heart\" mode=ios [(ngModel)]=\"segment\">\n  <ion-segment-button value=\"{{c.id}}\" *ngFor=\"let c of categoriesArray\" [appAnimation]=\"'fade'\">\n    <ion-img [appImageValidate]=\"20\" [src]=\"config.imgThumbnailUrlString+c.icon\"></ion-img>\n    <ion-label class=\"ion-text-capitalize font-small\">{{c.name}}</ion-label>\n  </ion-segment-button>\n</ion-segment>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_categories_categories_module_ts-es5.js.map