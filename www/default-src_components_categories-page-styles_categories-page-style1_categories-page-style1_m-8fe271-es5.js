(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["default-src_components_categories-page-styles_categories-page-style1_categories-page-style1_m-8fe271"], {
    /***/
    65116:
    /*!**********************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style1/categories-page-style1.component.ts ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPageStyle1Component": function CategoriesPageStyle1Component() {
          return (
            /* binding */
            _CategoriesPageStyle1Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_categories_page_style1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./categories-page-style1.component.html */
      2299);
      /* harmony import */


      var _categories_page_style1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style1.component.scss */
      19487);
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

      var _CategoriesPageStyle1Component = /*#__PURE__*/function () {
        function CategoriesPageStyle1Component(appCategoriesService, config) {
          _classCallCheck(this, CategoriesPageStyle1Component);

          this.appCategoriesService = appCategoriesService;
          this.config = config;
          this.onClickCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(CategoriesPageStyle1Component, [{
          key: "clickCategory",
          value: function clickCategory(value) {
            this.onClickCategory.emit(value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoriesPageStyle1Component;
      }();

      _CategoriesPageStyle1Component.ctorParameters = function () {
        return [{
          type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }];
      };

      _CategoriesPageStyle1Component.propDecorators = {
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
      _CategoriesPageStyle1Component = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-categories-page-style1',
        template: _raw_loader_categories_page_style1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_categories_page_style1_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoriesPageStyle1Component);
      /***/
    },

    /***/
    4025:
    /*!*******************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style1/categories-page-style1.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "categoryPageStyle1Module": function categoryPageStyle1Module() {
          return (
            /* binding */
            _categoryPageStyle1Module
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


      var _categories_page_style1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style1.component */
      65116);
      /* harmony import */


      var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/directives/appAnimation/animationDirective.module */
      73448);
      /* harmony import */


      var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/directives/imageValidate/imageValidate.module */
      31268);

      var _categoryPageStyle1Module = /*#__PURE__*/_createClass(function categoryPageStyle1Module() {
        _classCallCheck(this, categoryPageStyle1Module);
      });

      _categoryPageStyle1Module = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_categories_page_style1_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageStyle1Component],
        exports: [_categories_page_style1_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageStyle1Component],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_2__.AnimationDirectiveModule, src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__.ImageValidateDirectiveModule]
      })], _categoryPageStyle1Module);
      /***/
    },

    /***/
    53353:
    /*!**********************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style3/categories-page-style3.component.ts ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPageStyle3Component": function CategoriesPageStyle3Component() {
          return (
            /* binding */
            _CategoriesPageStyle3Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_categories_page_style3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./categories-page-style3.component.html */
      31991);
      /* harmony import */


      var _categories_page_style3_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style3.component.scss */
      3516);
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

      var _CategoriesPageStyle3Component = /*#__PURE__*/function () {
        function CategoriesPageStyle3Component(appCategoriesService, config) {
          _classCallCheck(this, CategoriesPageStyle3Component);

          this.appCategoriesService = appCategoriesService;
          this.config = config;
          this.onClickCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(CategoriesPageStyle3Component, [{
          key: "clickCategory",
          value: function clickCategory(value) {
            this.onClickCategory.emit(value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoriesPageStyle3Component;
      }();

      _CategoriesPageStyle3Component.ctorParameters = function () {
        return [{
          type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }];
      };

      _CategoriesPageStyle3Component.propDecorators = {
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
      _CategoriesPageStyle3Component = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-categories-page-style3',
        template: _raw_loader_categories_page_style3_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_categories_page_style3_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoriesPageStyle3Component);
      /***/
    },

    /***/
    20796:
    /*!*******************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style3/categories-page-style3.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "categoryPageStyle3Module": function categoryPageStyle3Module() {
          return (
            /* binding */
            _categoryPageStyle3Module
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


      var _categories_page_style3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style3.component */
      53353);
      /* harmony import */


      var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/directives/appAnimation/animationDirective.module */
      73448);
      /* harmony import */


      var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/directives/imageValidate/imageValidate.module */
      31268);

      var _categoryPageStyle3Module = /*#__PURE__*/_createClass(function categoryPageStyle3Module() {
        _classCallCheck(this, categoryPageStyle3Module);
      });

      _categoryPageStyle3Module = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_categories_page_style3_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageStyle3Component],
        exports: [_categories_page_style3_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageStyle3Component],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_2__.AnimationDirectiveModule, src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__.ImageValidateDirectiveModule]
      })], _categoryPageStyle3Module);
      /***/
    },

    /***/
    55112:
    /*!**********************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style5/categories-page-style5.component.ts ***!
      \**********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CategoriesPageStyle5Component": function CategoriesPageStyle5Component() {
          return (
            /* binding */
            _CategoriesPageStyle5Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_categories_page_style5_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./categories-page-style5.component.html */
      86);
      /* harmony import */


      var _categories_page_style5_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style5.component.scss */
      18781);
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

      var _CategoriesPageStyle5Component = /*#__PURE__*/function () {
        function CategoriesPageStyle5Component(appCategoriesService, config) {
          _classCallCheck(this, CategoriesPageStyle5Component);

          this.appCategoriesService = appCategoriesService;
          this.config = config;
          this.onClickCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(CategoriesPageStyle5Component, [{
          key: "clickCategory",
          value: function clickCategory(value) {
            this.onClickCategory.emit(value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CategoriesPageStyle5Component;
      }();

      _CategoriesPageStyle5Component.ctorParameters = function () {
        return [{
          type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }];
      };

      _CategoriesPageStyle5Component.propDecorators = {
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
      _CategoriesPageStyle5Component = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-categories-page-style5',
        template: _raw_loader_categories_page_style5_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_categories_page_style5_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CategoriesPageStyle5Component);
      /***/
    },

    /***/
    80930:
    /*!*******************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style5/categories-page-style5.module.ts ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "categoryPageStyle5Module": function categoryPageStyle5Module() {
          return (
            /* binding */
            _categoryPageStyle5Module
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


      var _categories_page_style5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./categories-page-style5.component */
      55112);
      /* harmony import */


      var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/directives/appAnimation/animationDirective.module */
      73448);
      /* harmony import */


      var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/directives/imageValidate/imageValidate.module */
      31268);

      var _categoryPageStyle5Module = /*#__PURE__*/_createClass(function categoryPageStyle5Module() {
        _classCallCheck(this, categoryPageStyle5Module);
      });

      _categoryPageStyle5Module = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_categories_page_style5_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageStyle5Component],
        exports: [_categories_page_style5_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesPageStyle5Component],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_2__.AnimationDirectiveModule, src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__.ImageValidateDirectiveModule]
      })], _categoryPageStyle5Module);
      /***/
    },

    /***/
    19487:
    /*!************************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style1/categories-page-style1.component.scss ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin-bottom: 2px;\n}\n\nion-card ion-row {\n  --ion-grid-column-padding: 0;\n}\n\nion-card ion-row ion-col {\n  align-items: center;\n  display: flex;\n}\n\nion-card ion-row ion-col ion-label {\n  padding: 20px;\n}\n\nion-list {\n  margin-top: 10px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n  background-color: transparent;\n}\n\nion-list ion-item {\n  --background: transparent;\n  margin-bottom: 5px;\n  --inner-padding-end: 0;\n}\n\nion-list ion-item ion-img {\n  width: 12%;\n  -webkit-margin-end: 10px;\n          margin-inline-end: 10px;\n  --border-radius: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtcGFnZS1zdHlsZTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxrQkFBa0I7QUFGdEI7O0FBQ0E7RUFHUSw0QkFBMEI7QUFBbEM7O0FBSEE7RUFLWSxtQkFBbUI7RUFDbkIsYUFBYTtBQUV6Qjs7QUFSQTtFQVFnQixhQUFhO0FBSTdCOztBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQywyQ0FBMkM7RUFDM0MsNkJBQTZCO0FBRWpDOztBQU5BO0VBTVEseUJBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQW9CO0FBSTVCOztBQVpBO0VBV1ksVUFBVTtFQUNWLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWdCO0FBSzVCIiwiZmlsZSI6ImNhdGVnb3JpZXMtcGFnZS1zdHlsZTEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tY29udGVudHtcbi8vICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4vLyB9XG5pb24tY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGlvbi1yb3cge1xuICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTIlO1xuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    3516:
    /*!************************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style3/categories-page-style3.component.scss ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  margin-top: 10px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n  background-color: transparent;\n}\n\nion-grid ion-col ion-card {\n  margin-bottom: 2px;\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n}\n\nion-grid ion-col ion-card ion-img {\n  filter: opacity(0.5);\n}\n\nion-grid ion-col:nth-child(even) {\n  padding-left: 5px;\n}\n\nion-grid ion-col:nth-child(odd) {\n  padding-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtcGFnZS1zdHlsZTMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLDJDQUEyQztFQUMzQyw2QkFBNkI7QUFDakM7O0FBTEE7RUFRWSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDekM7O0FBWkE7RUFhZ0Isb0JBQW9CO0FBR3BDOztBQWhCQTtFQW1CUSxpQkFBaUI7QUFDekI7O0FBcEJBO0VBc0JRLGtCQUFrQjtBQUUxQiIsImZpbGUiOiJjYXRlZ29yaWVzLXBhZ2Utc3R5bGUzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICBpb24tY29sIHtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDAuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tY29sOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIH1cbiAgICBpb24tY29sOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    18781:
    /*!************************************************************************************************************!*\
      !*** ./src/components/categories-page-styles/categories-page-style5/categories-page-style5.component.scss ***!
      \************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-grid {\n  margin-top: 10px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n  background-color: transparent;\n}\n\nion-grid ion-col ion-card {\n  margin-bottom: 2px;\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n}\n\nion-grid ion-col ion-card ion-avatar {\n  margin: auto;\n  width: 44vw;\n  height: 44vw;\n  border-radius: 100% !important;\n}\n\nion-grid ion-col ion-card ion-row {\n  --ion-grid-column-padding: 0;\n}\n\nion-grid ion-col:nth-child(even) {\n  padding-left: 5px;\n}\n\nion-grid ion-col:nth-child(odd) {\n  padding-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtcGFnZS1zdHlsZTUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLDJDQUEyQztFQUMzQyw2QkFBNkI7QUFDakM7O0FBTEE7RUFRWSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDekM7O0FBWkE7RUFjZ0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQThCO0FBRTlDOztBQW5CQTtFQW9CZ0IsNEJBQTBCO0FBRzFDOztBQXZCQTtFQTBCUSxpQkFBaUI7QUFDekI7O0FBM0JBO0VBNkJRLGtCQUFrQjtBQUUxQiIsImZpbGUiOiJjYXRlZ29yaWVzLXBhZ2Utc3R5bGU1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICBpb24tY29sIHtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ0dnc7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NHZ3O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tY29sOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIH1cbiAgICBpb24tY29sOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    2299:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/categories-page-styles/categories-page-style1/categories-page-style1.component.html ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-content> -->\n\n<div class=\"center\" *ngIf=\"config.homePageNumber==0\">\n  <ion-spinner></ion-spinner>\n</div>\n<ion-list>\n  <div *ngFor=\"let c of categoriesArray\">\n    <ion-item (click)=\"clickCategory(c)\" *ngIf=\"c!=1\" lines=\"none\" [class.round-borders]=\"config.roundBordersBool\" [appAnimation]=\"'fade'\">\n      <ion-img [appImageValidate]=\"70\" slot=\"start\" [src]=\"config.imgThumbnailUrlString+c.gallary\"\n        [class.round-borders]=\"config.roundBordersBool\"></ion-img>\n      <ion-label>\n        <p class=\"font-medium font-bold\">{{c.name}}</p>\n      </ion-label>\n    </ion-item>\n    <ion-row *ngIf=\"c==1\">\n      <ion-col size=\"1.7\">\n        <ion-skeleton-text animated style=\"width: 100%; height: 100%;\"></ion-skeleton-text>\n      </ion-col>\n      <ion-col size=\"10.3\">\n        <ion-label class=\"font-medium\" animated style=\"width: 100%;\">\n          <ion-skeleton-text></ion-skeleton-text>\n        </ion-label>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-list>";
      /***/
    },

    /***/
    31991:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/categories-page-styles/categories-page-style3/categories-page-style3.component.html ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid class=\"ion-no-padding\">\n  <ion-row class=\"ion-no-padding\">\n    <ion-col size=\"6\" *ngFor=\"let c of categoriesArray\" class=\"ion-no-padding\" [appAnimation]=\"'fade'\">\n      <ion-card (click)=\"clickCategory(c)\" class=\"ion-no-margin\" [class.round-borders]=\"config.roundBordersBool\">\n        <ion-img [appImageValidate]=\"70\" [src]=\"config.imgThumbnailUrlString+c.gallary\"\n          [class.round-borders]=\"config.roundBordersBool\">\n        </ion-img>\n        <ion-card-header class=\"ion-text-center ion-no-padding padding-vertical-5 center\">\n          <ion-card-title class=\"font-extra-large ion-text-capitalize avenir-next-bold\">{{c.name}}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>";
      /***/
    },

    /***/
    86:
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/categories-page-styles/categories-page-style5/categories-page-style5.component.html ***!
      \**************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-grid class=\"ion-no-padding\">\n  <ion-row class=\"ion-no-padding\">\n    <ion-col size=\"6\" *ngFor=\"let c of categoriesArray\" class=\"ion-no-padding\" [appAnimation]=\"'fade'\">\n      <ion-card (click)=\"clickCategory(c)\" class=\"ion-no-margin\">\n        <ion-avatar>\n          <ion-img [appImageValidate]=\"70\" [src]=\"config.imgThumbnailUrlString+c.gallary\">\n          </ion-img>\n        </ion-avatar>\n        <ion-card-header class=\"ion-text-center ion-no-padding padding-vertical-5\">\n          <ion-card-title class=\"font-extra-large ion-text-capitalize truncate\">{{c.name}}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_components_categories-page-styles_categories-page-style1_categories-page-style1_m-8fe271-es5.js.map