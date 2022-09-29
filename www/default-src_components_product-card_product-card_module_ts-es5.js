(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["default-src_components_product-card_product-card_module_ts"], {
    /***/
    67814:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style10/product-card-style10.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle10Component": function ProductCardStyle10Component() {
          return (
            /* binding */
            _ProductCardStyle10Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style10_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style10.component.html */
      1596);
      /* harmony import */


      var _product_card_style10_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style10.component.scss */
      99275);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle10Component = /*#__PURE__*/function () {
        function ProductCardStyle10Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle10Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickAddToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle10Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            this.onClickAddToCart.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle10Component;
      }();

      _ProductCardStyle10Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle10Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        discount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['discount']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickAddToCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle10Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style10',
        template: _raw_loader_product_card_style10_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style10_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle10Component);
      /***/
    },

    /***/
    13776:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style11/product-card-style11.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle11Component": function ProductCardStyle11Component() {
          return (
            /* binding */
            _ProductCardStyle11Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style11_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style11.component.html */
      19621);
      /* harmony import */


      var _product_card_style11_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style11.component.scss */
      690);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle11Component = /*#__PURE__*/function () {
        function ProductCardStyle11Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle11Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle11Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle11Component;
      }();

      _ProductCardStyle11Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle11Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle11Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style11',
        template: _raw_loader_product_card_style11_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style11_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle11Component);
      /***/
    },

    /***/
    7630:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style12/product-card-style12.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle12Component": function ProductCardStyle12Component() {
          return (
            /* binding */
            _ProductCardStyle12Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style12_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style12.component.html */
      85487);
      /* harmony import */


      var _product_card_style12_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style12.component.scss */
      30867);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle12Component = /*#__PURE__*/function () {
        function ProductCardStyle12Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle12Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickAddToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle12Component, [{
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            this.onClickAddToCart.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle12Component;
      }();

      _ProductCardStyle12Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle12Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        discount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['discount']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickAddToCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle12Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style12',
        template: _raw_loader_product_card_style12_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style12_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle12Component);
      /***/
    },

    /***/
    34280:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style13/product-card-style13.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle13Component": function ProductCardStyle13Component() {
          return (
            /* binding */
            _ProductCardStyle13Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style13_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style13.component.html */
      13905);
      /* harmony import */


      var _product_card_style13_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style13.component.scss */
      33082);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle13Component = /*#__PURE__*/function () {
        function ProductCardStyle13Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle13Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle13Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle13Component;
      }();

      _ProductCardStyle13Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle13Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle13Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style13',
        template: _raw_loader_product_card_style13_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style13_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle13Component);
      /***/
    },

    /***/
    80801:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style14/product-card-style14.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle14Component": function ProductCardStyle14Component() {
          return (
            /* binding */
            _ProductCardStyle14Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style14_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style14.component.html */
      53970);
      /* harmony import */


      var _product_card_style14_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style14.component.scss */
      36852);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle14Component = /*#__PURE__*/function () {
        function ProductCardStyle14Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle14Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle14Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle14Component;
      }();

      _ProductCardStyle14Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle14Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle14Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style14',
        template: _raw_loader_product_card_style14_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style14_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle14Component);
      /***/
    },

    /***/
    28180:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style15/product-card-style15.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle15Component": function ProductCardStyle15Component() {
          return (
            /* binding */
            _ProductCardStyle15Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style15_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style15.component.html */
      87421);
      /* harmony import */


      var _product_card_style15_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style15.component.scss */
      72010);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle15Component = /*#__PURE__*/function () {
        function ProductCardStyle15Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle15Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle15Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle15Component;
      }();

      _ProductCardStyle15Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle15Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle15Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style15',
        template: _raw_loader_product_card_style15_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style15_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle15Component);
      /***/
    },

    /***/
    70877:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style16/product-card-style16.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle16Component": function ProductCardStyle16Component() {
          return (
            /* binding */
            _ProductCardStyle16Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style16_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style16.component.html */
      66129);
      /* harmony import */


      var _product_card_style16_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style16.component.scss */
      73016);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle16Component = /*#__PURE__*/function () {
        function ProductCardStyle16Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle16Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickAddToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle16Component, [{
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            this.onClickAddToCart.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle16Component;
      }();

      _ProductCardStyle16Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle16Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        discount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['discount']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickAddToCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle16Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style16',
        template: _raw_loader_product_card_style16_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style16_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle16Component);
      /***/
    },

    /***/
    96146:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style17/product-card-style17.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle17Component": function ProductCardStyle17Component() {
          return (
            /* binding */
            _ProductCardStyle17Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style17_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style17.component.html */
      85978);
      /* harmony import */


      var _product_card_style17_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style17.component.scss */
      32675);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle17Component = /*#__PURE__*/function () {
        function ProductCardStyle17Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle17Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle17Component, [{
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle17Component;
      }();

      _ProductCardStyle17Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle17Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle17Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style17',
        template: _raw_loader_product_card_style17_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style17_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle17Component);
      /***/
    },

    /***/
    31562:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style18/product-card-style18.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle18Component": function ProductCardStyle18Component() {
          return (
            /* binding */
            _ProductCardStyle18Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style18_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style18.component.html */
      14976);
      /* harmony import */


      var _product_card_style18_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style18.component.scss */
      24904);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle18Component = /*#__PURE__*/function () {
        function ProductCardStyle18Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle18Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickAddToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle18Component, [{
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            this.onClickAddToCart.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle18Component;
      }();

      _ProductCardStyle18Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle18Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        discount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['discount']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickAddToCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle18Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style18',
        template: _raw_loader_product_card_style18_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style18_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle18Component);
      /***/
    },

    /***/
    46099:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style19/product-card-style19.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle19Component": function ProductCardStyle19Component() {
          return (
            /* binding */
            _ProductCardStyle19Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style19_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style19.component.html */
      98742);
      /* harmony import */


      var _product_card_style19_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style19.component.scss */
      46660);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle19Component = /*#__PURE__*/function () {
        function ProductCardStyle19Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle19Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickAddToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle19Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartName",
          value: function getHeartName() {
            if (this.wishListStatus) return 'heart';else return 'heart-outline';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            this.onClickAddToCart.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle19Component;
      }();

      _ProductCardStyle19Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle19Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        discount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['discount']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickAddToCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle19Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style19',
        template: _raw_loader_product_card_style19_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style19_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle19Component);
      /***/
    },

    /***/
    42205:
    /*!*************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style1/product-card-style1.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle1Component": function ProductCardStyle1Component() {
          return (
            /* binding */
            _ProductCardStyle1Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style1.component.html */
      93844);
      /* harmony import */


      var _product_card_style1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style1.component.scss */
      26339);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle1Component = /*#__PURE__*/function () {
        function ProductCardStyle1Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle1Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle1Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle1Component;
      }();

      _ProductCardStyle1Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle1Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        discount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['discount']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle1Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style1',
        template: _raw_loader_product_card_style1_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style1_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle1Component);
      /***/
    },

    /***/
    84987:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style20/product-card-style20.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle20Component": function ProductCardStyle20Component() {
          return (
            /* binding */
            _ProductCardStyle20Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style20_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style20.component.html */
      8305);
      /* harmony import */


      var _product_card_style20_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style20.component.scss */
      5358);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle20Component = /*#__PURE__*/function () {
        function ProductCardStyle20Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle20Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle20Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle20Component;
      }();

      _ProductCardStyle20Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle20Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle20Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style20',
        template: _raw_loader_product_card_style20_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style20_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle20Component);
      /***/
    },

    /***/
    92609:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style21/product-card-style21.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle21Component": function ProductCardStyle21Component() {
          return (
            /* binding */
            _ProductCardStyle21Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style21_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style21.component.html */
      57421);
      /* harmony import */


      var _product_card_style21_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style21.component.scss */
      15993);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle21Component = /*#__PURE__*/function () {
        function ProductCardStyle21Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle21Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle21Component, [{
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle21Component;
      }();

      _ProductCardStyle21Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle21Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle21Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style21',
        template: _raw_loader_product_card_style21_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style21_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle21Component);
      /***/
    },

    /***/
    52546:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style22/product-card-style22.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle22Component": function ProductCardStyle22Component() {
          return (
            /* binding */
            _ProductCardStyle22Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style22_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style22.component.html */
      25351);
      /* harmony import */


      var _product_card_style22_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style22.component.scss */
      26747);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle22Component = /*#__PURE__*/function () {
        function ProductCardStyle22Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle22Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle22Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle22Component;
      }();

      _ProductCardStyle22Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle22Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle22Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style22',
        template: _raw_loader_product_card_style22_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style22_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle22Component);
      /***/
    },

    /***/
    16108:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style23/product-card-style23.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle23Component": function ProductCardStyle23Component() {
          return (
            /* binding */
            _ProductCardStyle23Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style23_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style23.component.html */
      32555);
      /* harmony import */


      var _product_card_style23_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style23.component.scss */
      95101);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle23Component = /*#__PURE__*/function () {
        function ProductCardStyle23Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle23Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickAddToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle23Component, [{
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            this.onClickAddToCart.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle23Component;
      }();

      _ProductCardStyle23Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle23Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickAddToCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle23Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style23',
        template: _raw_loader_product_card_style23_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style23_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle23Component);
      /***/
    },

    /***/
    99285:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style24/product-card-style24.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle24Component": function ProductCardStyle24Component() {
          return (
            /* binding */
            _ProductCardStyle24Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style24_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style24.component.html */
      75926);
      /* harmony import */


      var _product_card_style24_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style24.component.scss */
      92032);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/app-cart/app-cart.service */
      88632);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle24Component = /*#__PURE__*/function () {
        function ProductCardStyle24Component(config, shared, navCtrl, appCartService) {
          _classCallCheck(this, ProductCardStyle24Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.appCartService = appCartService;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickQuantityPlus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickQuantityMinus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.quantityNumber = 0;
        }

        _createClass(ProductCardStyle24Component, [{
          key: "getQuantity",
          value: function getQuantity() {
            return this.appCartService.getProductQuantity(this.data.product_id);
          }
        }, {
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "quantityMinus",
          value: function quantityMinus() {
            this.onClickQuantityMinus.emit();
          }
        }, {
          key: "quantityPlus",
          value: function quantityPlus() {
            this.onClickQuantityPlus.emit();
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle24Component;
      }();

      _ProductCardStyle24Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_2__.AppCartService
        }];
      };

      _ProductCardStyle24Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['wishListStatus']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickQuantityPlus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickQuantityMinus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }]
      };
      _ProductCardStyle24Component = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-product-card-style24',
        template: _raw_loader_product_card_style24_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style24_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle24Component);
      /***/
    },

    /***/
    78192:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style25/product-card-style25.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle25Component": function ProductCardStyle25Component() {
          return (
            /* binding */
            _ProductCardStyle25Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style25_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style25.component.html */
      28801);
      /* harmony import */


      var _product_card_style25_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style25.component.scss */
      24542);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/app-cart/app-cart.service */
      88632);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle25Component = /*#__PURE__*/function () {
        function ProductCardStyle25Component(config, shared, navCtrl, appCartService) {
          _classCallCheck(this, ProductCardStyle25Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.appCartService = appCartService;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickQuantityPlus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickQuantityMinus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.quantityNumber = 0;
        }

        _createClass(ProductCardStyle25Component, [{
          key: "getQuantity",
          value: function getQuantity() {
            return this.appCartService.getProductQuantity(this.data.product_id);
          }
        }, {
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "quantityMinus",
          value: function quantityMinus() {
            this.onClickQuantityMinus.emit();
          }
        }, {
          key: "quantityPlus",
          value: function quantityPlus() {
            this.onClickQuantityPlus.emit();
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle25Component;
      }();

      _ProductCardStyle25Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_2__.AppCartService
        }];
      };

      _ProductCardStyle25Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['wishListStatus']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickQuantityPlus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickQuantityMinus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }]
      };
      _ProductCardStyle25Component = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-product-card-style25',
        template: _raw_loader_product_card_style25_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style25_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle25Component);
      /***/
    },

    /***/
    41200:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style26/product-card-style26.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle26Component": function ProductCardStyle26Component() {
          return (
            /* binding */
            _ProductCardStyle26Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style26_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style26.component.html */
      71777);
      /* harmony import */


      var _product_card_style26_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style26.component.scss */
      66325);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/app-cart/app-cart.service */
      88632);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle26Component = /*#__PURE__*/function () {
        function ProductCardStyle26Component(config, shared, navCtrl, appCartService) {
          _classCallCheck(this, ProductCardStyle26Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.appCartService = appCartService;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickQuantityPlus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickQuantityMinus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.quantityNumber = 0;
        }

        _createClass(ProductCardStyle26Component, [{
          key: "getQuantity",
          value: function getQuantity() {
            return this.appCartService.getProductQuantity(this.data.product_id);
          }
        }, {
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "quantityMinus",
          value: function quantityMinus() {
            this.onClickQuantityMinus.emit();
          }
        }, {
          key: "quantityPlus",
          value: function quantityPlus() {
            this.onClickQuantityPlus.emit();
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle26Component;
      }();

      _ProductCardStyle26Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_2__.AppCartService
        }];
      };

      _ProductCardStyle26Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['wishListStatus']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickQuantityPlus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickQuantityMinus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }]
      };
      _ProductCardStyle26Component = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-product-card-style26',
        template: _raw_loader_product_card_style26_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style26_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle26Component);
      /***/
    },

    /***/
    49723:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style27/product-card-style27.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle27Component": function ProductCardStyle27Component() {
          return (
            /* binding */
            _ProductCardStyle27Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style27_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style27.component.html */
      4104);
      /* harmony import */


      var _product_card_style27_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style27.component.scss */
      36715);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/app-cart/app-cart.service */
      88632);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle27Component = /*#__PURE__*/function () {
        function ProductCardStyle27Component(config, shared, navCtrl, appCartService) {
          _classCallCheck(this, ProductCardStyle27Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.appCartService = appCartService;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickQuantityPlus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.onClickQuantityMinus = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.quantityNumber = 0;
        }

        _createClass(ProductCardStyle27Component, [{
          key: "getQuantity",
          value: function getQuantity() {
            return this.appCartService.getProductQuantity(this.data.product_id);
          }
        }, {
          key: "quantityMinus",
          value: function quantityMinus() {
            this.onClickQuantityMinus.emit();
          }
        }, {
          key: "quantityPlus",
          value: function quantityPlus() {
            this.onClickQuantityPlus.emit();
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle27Component;
      }();

      _ProductCardStyle27Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_2__.AppCartService
        }];
      };

      _ProductCardStyle27Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['data']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['outOfStock']
        }],
        discount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input,
          args: ['discount']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickQuantityPlus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }],
        onClickQuantityMinus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
        }]
      };
      _ProductCardStyle27Component = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-product-card-style27',
        template: _raw_loader_product_card_style27_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style27_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle27Component);
      /***/
    },

    /***/
    34742:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style28/product-card-style28.component.ts ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle28Component": function ProductCardStyle28Component() {
          return (
            /* binding */
            _ProductCardStyle28Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style28_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style28.component.html */
      4043);
      /* harmony import */


      var _product_card_style28_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style28.component.scss */
      33978);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle28Component = /*#__PURE__*/function () {
        function ProductCardStyle28Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle28Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickAddToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle28Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            this.onClickAddToCart.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle28Component;
      }();

      _ProductCardStyle28Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle28Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickAddToCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle28Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style28',
        template: _raw_loader_product_card_style28_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style28_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle28Component);
      /***/
    },

    /***/
    89216:
    /*!*********************************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style2/product-card-style2/product-card-style2.component.ts ***!
      \*********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle2Component": function ProductCardStyle2Component() {
          return (
            /* binding */
            _ProductCardStyle2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style2.component.html */
      4816);
      /* harmony import */


      var _product_card_style2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style2.component.scss */
      99955);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle2Component = /*#__PURE__*/function () {
        function ProductCardStyle2Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle2Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle2Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle2Component;
      }();

      _ProductCardStyle2Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle2Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle2Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style2',
        template: _raw_loader_product_card_style2_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style2_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle2Component);
      /***/
    },

    /***/
    2786:
    /*!*************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style3/product-card-style3.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle3Component": function ProductCardStyle3Component() {
          return (
            /* binding */
            _ProductCardStyle3Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style3.component.html */
      44866);
      /* harmony import */


      var _product_card_style3_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style3.component.scss */
      44785);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle3Component = /*#__PURE__*/function () {
        function ProductCardStyle3Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle3Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle3Component, [{
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle3Component;
      }();

      _ProductCardStyle3Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle3Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle3Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style3',
        template: _raw_loader_product_card_style3_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style3_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle3Component);
      /***/
    },

    /***/
    11065:
    /*!*************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style4/product-card-style4.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle4Component": function ProductCardStyle4Component() {
          return (
            /* binding */
            _ProductCardStyle4Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style4_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style4.component.html */
      22085);
      /* harmony import */


      var _product_card_style4_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style4.component.scss */
      81033);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle4Component = /*#__PURE__*/function () {
        function ProductCardStyle4Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle4Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle4Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle4Component;
      }();

      _ProductCardStyle4Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle4Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle4Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style4',
        template: _raw_loader_product_card_style4_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style4_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle4Component);
      /***/
    },

    /***/
    42867:
    /*!*************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style5/product-card-style5.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle5Component": function ProductCardStyle5Component() {
          return (
            /* binding */
            _ProductCardStyle5Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style5_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style5.component.html */
      92354);
      /* harmony import */


      var _product_card_style5_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style5.component.scss */
      40571);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle5Component = /*#__PURE__*/function () {
        function ProductCardStyle5Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle5Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle5Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle5Component;
      }();

      _ProductCardStyle5Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle5Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle5Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style5',
        template: _raw_loader_product_card_style5_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style5_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle5Component);
      /***/
    },

    /***/
    96959:
    /*!*************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style6/product-card-style6.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle6Component": function ProductCardStyle6Component() {
          return (
            /* binding */
            _ProductCardStyle6Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style6_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style6.component.html */
      880);
      /* harmony import */


      var _product_card_style6_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style6.component.scss */
      74413);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle6Component = /*#__PURE__*/function () {
        function ProductCardStyle6Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle6Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle6Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle6Component;
      }();

      _ProductCardStyle6Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle6Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle6Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style6',
        template: _raw_loader_product_card_style6_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style6_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle6Component);
      /***/
    },

    /***/
    53826:
    /*!*************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style7/product-card-style7.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle7Component": function ProductCardStyle7Component() {
          return (
            /* binding */
            _ProductCardStyle7Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style7_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style7.component.html */
      36246);
      /* harmony import */


      var _product_card_style7_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style7.component.scss */
      28272);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle7Component = /*#__PURE__*/function () {
        function ProductCardStyle7Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle7Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickWishIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle7Component, [{
          key: "clickWishIcon",
          value: function clickWishIcon() {
            this.onClickWishIcon.emit();
          }
        }, {
          key: "getHeartColor",
          value: function getHeartColor() {
            if (this.wishListStatus) return 'danger';else return 'medium';
          }
        }, {
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "getStarIconName",
          value: function getStarIconName(val) {
            // let value = parseFloat(val).toFixed(2)
            // let productRating = this.data.product_rating
            // if (productRating == null)
            return "star"; // if (parseFloat(productRating) >= parseFloat(value))
            //  return "star"
            // if (parseFloat(this.data.product_rating) < parseFloat(value) && parseFloat(this.data.product_rating + 1) >)
            //   return "star-half"
          }
        }, {
          key: "getStarIconColor",
          value: function getStarIconColor(val) {
            var value = parseFloat(val).toFixed(2);
            var productRating = this.data.product_rating;
            if (productRating == null) return "medium";
            if (parseFloat(productRating) >= parseFloat(value)) return "warning";else return "medium";
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle7Component;
      }();

      _ProductCardStyle7Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle7Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        wishListStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['wishListStatus']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickWishIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle7Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style7',
        template: _raw_loader_product_card_style7_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style7_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle7Component);
      /***/
    },

    /***/
    18958:
    /*!*************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style8/product-card-style8.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle8Component": function ProductCardStyle8Component() {
          return (
            /* binding */
            _ProductCardStyle8Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style8_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style8.component.html */
      86844);
      /* harmony import */


      var _product_card_style8_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style8.component.scss */
      40326);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle8Component = /*#__PURE__*/function () {
        function ProductCardStyle8Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle8Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickAddToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle8Component, [{
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            this.onClickAddToCart.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle8Component;
      }();

      _ProductCardStyle8Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle8Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        discount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['discount']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickAddToCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle8Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style8',
        template: _raw_loader_product_card_style8_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style8_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle8Component);
      /***/
    },

    /***/
    2488:
    /*!*************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style9/product-card-style9.component.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardStyle9Component": function ProductCardStyle9Component() {
          return (
            /* binding */
            _ProductCardStyle9Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_style9_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card-style9.component.html */
      87496);
      /* harmony import */


      var _product_card_style9_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card-style9.component.scss */
      30368);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardStyle9Component = /*#__PURE__*/function () {
        function ProductCardStyle9Component(config, shared, navCtrl) {
          _classCallCheck(this, ProductCardStyle9Component);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.onClickProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          this.onClickAddToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(ProductCardStyle9Component, [{
          key: "openProductPage",
          value: function openProductPage() {
            this.onClickProduct.emit();
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            this.onClickAddToCart.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductCardStyle9Component;
      }();

      _ProductCardStyle9Component.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _ProductCardStyle9Component.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['data']
        }],
        discount: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['discount']
        }],
        outOfStock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
          args: ['outOfStock']
        }],
        onClickProduct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }],
        onClickAddToCart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }]
      };
      _ProductCardStyle9Component = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-product-card-style9',
        template: _raw_loader_product_card_style9_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_style9_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardStyle9Component);
      /***/
    },

    /***/
    29706:
    /*!***************************************************************!*\
      !*** ./src/components/product-card/product-card.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductCardComponent": function ProductCardComponent() {
          return (
            /* binding */
            _ProductCardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_product_card_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./product-card.component.html */
      77527);
      /* harmony import */


      var _product_card_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-card.component.scss */
      19574);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_app_animations_app_animations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/app-animations/app-animations.service */
      48095);
      /* harmony import */


      var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/app-cart/app-cart.service */
      88632);
      /* harmony import */


      var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/app-events/app-events.service */
      43804);
      /* harmony import */


      var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/app-toast/app-toast.service */
      58824);
      /* harmony import */


      var src_services_app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/services/app-wishlist/app-wish-list.service */
      70182);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);

      var _ProductCardComponent = /*#__PURE__*/function () {
        function ProductCardComponent(config, shared, navCtrl, appWishListService, appEventsService, appCartService, appToastService, appAnimationsService) {
          _classCallCheck(this, ProductCardComponent);

          this.config = config;
          this.shared = shared;
          this.navCtrl = navCtrl;
          this.appWishListService = appWishListService;
          this.appEventsService = appEventsService;
          this.appCartService = appCartService;
          this.appToastService = appToastService;
          this.appAnimationsService = appAnimationsService;
          this.wishListFlagBool = false;
          this.quantityNumber = 1;
          this.enableOutOFStockButtonBool = false;
          this.viewIsLoadedBool = false;
          this.backgroundIsAppliedBool = false;
        }

        _createClass(ProductCardComponent, [{
          key: "openProductPage",
          value: function openProductPage() {
            this.shared.singleProductPageDataArray.push(this.data);
            this.navCtrl.navigateForward("/product-detail/" + this.data.product_id);
          }
        }, {
          key: "addRemoveWishProduct",
          value: function addRemoveWishProduct() {
            this.appWishListService.addRemoveWishProduct(this.data.product_id);
          }
        }, {
          key: "isInWishList",
          value: function isInWishList() {
            this.wishListFlagBool = this.appWishListService.productIsInList(this.data.product_id);
            return this.wishListFlagBool;
          }
        }, {
          key: "addToCart",
          value: function addToCart() {
            if (this.data.product_type == 'variable') {
              this.openProductPage();
            } else {
              this.checkingProductStock();
            }
          }
        }, {
          key: "quantityMinus",
          value: function quantityMinus() {
            if (this.quantityNumber > 1) {
              this.quantityNumber--;
              this.checkingProductStock();
            }
          }
        }, {
          key: "quantityPlus",
          value: function quantityPlus() {
            this.quantityNumber++;
            this.checkingProductStock();
          }
        }, {
          key: "checkingProductStock",
          value: function checkingProductStock() {
            var _this = this;

            this.appCartService.checkProductStock(this.data.product_id, this.data.product_type, null, this.quantityNumber).then(function (data) {
              if (data.status == "outOfStock") {
                _this.enableOutOFStockButtonBool = true;
              } else if (data.status == "canAddToCart") {
                _this.appCartService.addToCart(_this.data.product_id, _this.quantityNumber, null);
              } else if (data.status == "quantityIsLimited") {
                _this.appToastService.toastError("Quantity is Limited");

                _this.quantityNumber = data.stock;
              }
            });
          }
        }, {
          key: "productDiscount",
          value: function productDiscount() {
            var rtn = "";
            var p1 = parseInt(this.data.product_price);
            var p2 = parseInt(this.data.product_discount_price);
            var result = Math.abs((p1 - p2) / p1 * 100);
            result = parseInt(result.toString());

            if (result == 0) {
              return false;
            }

            rtn = '-' + result + '%';
            return rtn;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.viewIsLoadedBool = true;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.viewIsLoadedBool) {
              var card = this.getProductRef();
              if (!card.style.backgroundColor) this.backgroundIsAppliedBool = false;

              if (!this.backgroundIsAppliedBool) {
                if (this.data != 1) {
                  if (this.config.appDesignNumber == 0) {
                    this.applyBackgroundColor();
                    this.backgroundIsAppliedBool = true;
                  }
                }
              }
            }
          }
        }, {
          key: "getProductRef",
          value: function getProductRef() {
            return this.productRef.nativeElement.querySelector('ion-card');
          }
        }, {
          key: "applyBackgroundColor",
          value: function applyBackgroundColor() {
            var backGroundColorsArray = this.config.productCardColorsArray;
            var card = this.getProductRef();
            card.style.backgroundColor = backGroundColorsArray[this.shared.productCardCounterNumber];
            this.shared.productCardCounterNumber++;
            if (this.shared.productCardCounterNumber == backGroundColorsArray.length) this.shared.productCardCounterNumber = 0;
          }
        }]);

        return ProductCardComponent;
      }();

      _ProductCardComponent.ctorParameters = function () {
        return [{
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_8__.SharedDataService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
        }, {
          type: src_services_app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_6__.AppWishListService
        }, {
          type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_4__.AppEventsService
        }, {
          type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_3__.AppCartService
        }, {
          type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_5__.AppToastService
        }, {
          type: src_services_app_animations_app_animations_service__WEBPACK_IMPORTED_MODULE_2__.AppAnimationsService
        }];
      };

      _ProductCardComponent.propDecorators = {
        productRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
          args: ['productRef', {
            "static": false
          }]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
          args: ['data']
        }]
      };
      _ProductCardComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-product-card',
        template: _raw_loader_product_card_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_card_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductCardComponent);
      /***/
    },

    /***/
    12682:
    /*!************************************************************!*\
      !*** ./src/components/product-card/product-card.module.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "productCardModule": function productCardModule() {
          return (
            /* binding */
            _productCardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _product_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product-card.component */
      29706);
      /* harmony import */


      var _product_card_styles_product_card_style1_product_card_style1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style1/product-card-style1.component */
      42205);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var _product_card_styles_product_card_style2_product_card_style2_product_card_style2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style2/product-card-style2/product-card-style2.component */
      89216);
      /* harmony import */


      var _product_card_styles_product_card_style3_product_card_style3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style3/product-card-style3.component */
      2786);
      /* harmony import */


      var _product_card_styles_product_card_style4_product_card_style4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style4/product-card-style4.component */
      11065);
      /* harmony import */


      var _product_card_styles_product_card_style5_product_card_style5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style5/product-card-style5.component */
      42867);
      /* harmony import */


      var _product_card_styles_product_card_style6_product_card_style6_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style6/product-card-style6.component */
      96959);
      /* harmony import */


      var _product_card_styles_product_card_style10_product_card_style10_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style10/product-card-style10.component */
      67814);
      /* harmony import */


      var _product_card_styles_product_card_style11_product_card_style11_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style11/product-card-style11.component */
      13776);
      /* harmony import */


      var _product_card_styles_product_card_style12_product_card_style12_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style12/product-card-style12.component */
      7630);
      /* harmony import */


      var _product_card_styles_product_card_style13_product_card_style13_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style13/product-card-style13.component */
      34280);
      /* harmony import */


      var _product_card_styles_product_card_style14_product_card_style14_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style14/product-card-style14.component */
      80801);
      /* harmony import */


      var _product_card_styles_product_card_style15_product_card_style15_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style15/product-card-style15.component */
      28180);
      /* harmony import */


      var _product_card_styles_product_card_style16_product_card_style16_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style16/product-card-style16.component */
      70877);
      /* harmony import */


      var _product_card_styles_product_card_style17_product_card_style17_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style17/product-card-style17.component */
      96146);
      /* harmony import */


      var _product_card_styles_product_card_style18_product_card_style18_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style18/product-card-style18.component */
      31562);
      /* harmony import */


      var _product_card_styles_product_card_style19_product_card_style19_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style19/product-card-style19.component */
      46099);
      /* harmony import */


      var _product_card_styles_product_card_style20_product_card_style20_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style20/product-card-style20.component */
      84987);
      /* harmony import */


      var _product_card_styles_product_card_style21_product_card_style21_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style21/product-card-style21.component */
      92609);
      /* harmony import */


      var _product_card_styles_product_card_style22_product_card_style22_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style22/product-card-style22.component */
      52546);
      /* harmony import */


      var _product_card_styles_product_card_style23_product_card_style23_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style23/product-card-style23.component */
      16108);
      /* harmony import */


      var _product_card_styles_product_card_style7_product_card_style7_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style7/product-card-style7.component */
      53826);
      /* harmony import */


      var _product_card_styles_product_card_style8_product_card_style8_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style8/product-card-style8.component */
      18958);
      /* harmony import */


      var _product_card_styles_product_card_style9_product_card_style9_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style9/product-card-style9.component */
      2488);
      /* harmony import */


      var _product_card_styles_product_card_style24_product_card_style24_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style24/product-card-style24.component */
      99285);
      /* harmony import */


      var _product_card_styles_product_card_style25_product_card_style25_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style25/product-card-style25.component */
      78192);
      /* harmony import */


      var _product_card_styles_product_card_style26_product_card_style26_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style26/product-card-style26.component */
      41200);
      /* harmony import */


      var _product_card_styles_product_card_style27_product_card_style27_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style27/product-card-style27.component */
      49723);
      /* harmony import */


      var _product_card_styles_product_card_style28_product_card_style28_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../product-card-styles/product-card-style28/product-card-style28.component */
      34742);
      /* harmony import */


      var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! src/directives/appAnimation/animationDirective.module */
      73448);
      /* harmony import */


      var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! src/directives/imageValidate/imageValidate.module */
      31268);

      var _productCardModule = /*#__PURE__*/_createClass(function productCardModule() {
        _classCallCheck(this, productCardModule);
      });

      _productCardModule = (0, tslib__WEBPACK_IMPORTED_MODULE_32__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_33__.NgModule)({
        declarations: [_product_card_component__WEBPACK_IMPORTED_MODULE_0__.ProductCardComponent, _product_card_styles_product_card_style1_product_card_style1_component__WEBPACK_IMPORTED_MODULE_1__.ProductCardStyle1Component, _product_card_styles_product_card_style2_product_card_style2_product_card_style2_component__WEBPACK_IMPORTED_MODULE_3__.ProductCardStyle2Component, _product_card_styles_product_card_style3_product_card_style3_component__WEBPACK_IMPORTED_MODULE_4__.ProductCardStyle3Component, _product_card_styles_product_card_style4_product_card_style4_component__WEBPACK_IMPORTED_MODULE_5__.ProductCardStyle4Component, _product_card_styles_product_card_style5_product_card_style5_component__WEBPACK_IMPORTED_MODULE_6__.ProductCardStyle5Component, _product_card_styles_product_card_style6_product_card_style6_component__WEBPACK_IMPORTED_MODULE_7__.ProductCardStyle6Component, _product_card_styles_product_card_style7_product_card_style7_component__WEBPACK_IMPORTED_MODULE_22__.ProductCardStyle7Component, _product_card_styles_product_card_style8_product_card_style8_component__WEBPACK_IMPORTED_MODULE_23__.ProductCardStyle8Component, _product_card_styles_product_card_style9_product_card_style9_component__WEBPACK_IMPORTED_MODULE_24__.ProductCardStyle9Component, _product_card_styles_product_card_style10_product_card_style10_component__WEBPACK_IMPORTED_MODULE_8__.ProductCardStyle10Component, _product_card_styles_product_card_style11_product_card_style11_component__WEBPACK_IMPORTED_MODULE_9__.ProductCardStyle11Component, _product_card_styles_product_card_style12_product_card_style12_component__WEBPACK_IMPORTED_MODULE_10__.ProductCardStyle12Component, _product_card_styles_product_card_style13_product_card_style13_component__WEBPACK_IMPORTED_MODULE_11__.ProductCardStyle13Component, _product_card_styles_product_card_style14_product_card_style14_component__WEBPACK_IMPORTED_MODULE_12__.ProductCardStyle14Component, _product_card_styles_product_card_style15_product_card_style15_component__WEBPACK_IMPORTED_MODULE_13__.ProductCardStyle15Component, _product_card_styles_product_card_style16_product_card_style16_component__WEBPACK_IMPORTED_MODULE_14__.ProductCardStyle16Component, _product_card_styles_product_card_style17_product_card_style17_component__WEBPACK_IMPORTED_MODULE_15__.ProductCardStyle17Component, _product_card_styles_product_card_style18_product_card_style18_component__WEBPACK_IMPORTED_MODULE_16__.ProductCardStyle18Component, _product_card_styles_product_card_style19_product_card_style19_component__WEBPACK_IMPORTED_MODULE_17__.ProductCardStyle19Component, _product_card_styles_product_card_style20_product_card_style20_component__WEBPACK_IMPORTED_MODULE_18__.ProductCardStyle20Component, _product_card_styles_product_card_style21_product_card_style21_component__WEBPACK_IMPORTED_MODULE_19__.ProductCardStyle21Component, _product_card_styles_product_card_style22_product_card_style22_component__WEBPACK_IMPORTED_MODULE_20__.ProductCardStyle22Component, _product_card_styles_product_card_style23_product_card_style23_component__WEBPACK_IMPORTED_MODULE_21__.ProductCardStyle23Component, _product_card_styles_product_card_style24_product_card_style24_component__WEBPACK_IMPORTED_MODULE_25__.ProductCardStyle24Component, _product_card_styles_product_card_style25_product_card_style25_component__WEBPACK_IMPORTED_MODULE_26__.ProductCardStyle25Component, _product_card_styles_product_card_style26_product_card_style26_component__WEBPACK_IMPORTED_MODULE_27__.ProductCardStyle26Component, _product_card_styles_product_card_style27_product_card_style27_component__WEBPACK_IMPORTED_MODULE_28__.ProductCardStyle27Component, _product_card_styles_product_card_style28_product_card_style28_component__WEBPACK_IMPORTED_MODULE_29__.ProductCardStyle28Component],
        exports: [_product_card_component__WEBPACK_IMPORTED_MODULE_0__.ProductCardComponent],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_34__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_35__.CommonModule, src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule, src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_30__.AnimationDirectiveModule, src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_31__.ImageValidateDirectiveModule]
      })], _productCardModule);
      /***/
    },

    /***/
    99275:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style10/product-card-style10.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 5px;\n  right: unset;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container ion-icon {\n  font-size: 25px;\n  position: absolute;\n  bottom: -12px;\n  right: 5px;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTEwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxTQUFTO0VBQ1QsWUFBWTtBQUdwQjs7QUFkQTtFQWFZLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUsxQjs7QUFwQkE7RUFtQlEsYUFBYTtFQUNiLHVCQUF1QjtFQUl2QixrQkFBa0I7QUFFMUI7O0FBMUJBO0VBc0JZLFdBQVc7QUFRdkI7O0FBOUJBO0VBMEJZLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVixVQUFVO0FBUXRCIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTEwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggMXB4IDAuNHB4IHJnYigyNDIsIDIzOCwgMjM4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGlvbi1mYWIge1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAubGVmdC1mYWIge1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHJpZ2h0OiB1bnNldDtcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9pbWFnZV9jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogLTEycHg7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    690:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style11/product-card-style11.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTExLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxTQUFTO0VBQ1QsWUFBWTtBQUdwQjs7QUFkQTtFQWNZLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZUFBZTtBQUkzQjs7QUFwQkE7RUFtQlksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBSzFCOztBQTFCQTtFQXlCUSxVQUFVO0VBQ1YsV0FBVztBQUtuQjs7QUEvQkE7RUE0QlksZUFBZTtBQU8zQjs7QUFuQ0E7RUFnQ1EsYUFBYTtFQUNiLHVCQUF1QjtBQU8vQjs7QUF4Q0E7RUFtQ1ksV0FBVztBQVN2QiIsImZpbGUiOiJwcm9kdWN0LWNhcmQtc3R5bGUxMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDFweCAwLjRweCByZ2IoMjQyLCAyMzgsIDIzOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBpb24tZmFiIHtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLmxlZnQtZmFiIHtcbiAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICByaWdodDogdW5zZXQ7XG4gICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0LWZhYiB7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmRfaW1hZ2VfY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    30867:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style12/product-card-style12.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 5px;\n  right: unset;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTEyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxTQUFTO0VBQ1QsWUFBWTtBQUdwQjs7QUFkQTtFQWFZLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUsxQjs7QUFwQkE7RUFtQlEsVUFBVTtFQUNWLFdBQVc7QUFLbkI7O0FBekJBO0VBc0JZLGVBQWU7QUFPM0I7O0FBN0JBO0VBMEJRLGFBQWE7RUFDYix1QkFBdUI7QUFPL0I7O0FBbENBO0VBNkJZLFdBQVc7QUFTdkIiLCJmaWxlIjoicHJvZHVjdC1jYXJkLXN0eWxlMTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1mYWIge1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    33082:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style13/product-card-style13.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 0px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 0px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  border-radius: 0;\n  text-transform: capitalize;\n  display: block;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTEzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxTQUFTO0VBQ1QsWUFBWTtBQUdwQjs7QUFkQTtFQWFZLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsY0FBYztBQUsxQjs7QUFwQkE7RUFrQlksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBTTFCOztBQTFCQTtFQXdCUSxVQUFVO0VBQ1YsV0FBVztBQU1uQjs7QUEvQkE7RUEyQlksZUFBZTtBQVEzQjs7QUFuQ0E7RUErQlEsYUFBYTtFQUNiLHVCQUF1QjtBQVEvQjs7QUF4Q0E7RUFrQ1ksV0FBVztBQVV2QiIsImZpbGUiOiJwcm9kdWN0LWNhcmQtc3R5bGUxMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDFweCAwLjRweCByZ2IoMjQyLCAyMzgsIDIzOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBpb24tZmFiIHtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLmxlZnQtZmFiIHtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICByaWdodDogdW5zZXQ7XG4gICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1mYWIge1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    36852:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style14/product-card-style14.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: none;\n  background-color: transparent;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTE0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQXBCOztBQUxBO0VBT1EsUUFBUTtFQUNSLGtCQUFhO0FBRXJCOztBQVZBO0VBV1EsU0FBUztFQUNULFlBQVk7QUFHcEI7O0FBZkE7RUFlWSwwQkFBMEI7RUFDMUIsY0FBYztBQUkxQjs7QUFwQkE7RUFtQlksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBSzFCOztBQTFCQTtFQXlCUSxVQUFVO0VBQ1YsV0FBVztBQUtuQjs7QUEvQkE7RUE0QlksZUFBZTtBQU8zQjs7QUFuQ0E7RUFnQ1EsYUFBYTtFQUNiLHVCQUF1QjtBQU8vQjs7QUF4Q0E7RUFtQ1ksV0FBVztBQVN2QiIsImZpbGUiOiJwcm9kdWN0LWNhcmQtc3R5bGUxNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBpb24tZmFiIHtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLmxlZnQtZmFiIHtcbiAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICByaWdodDogdW5zZXQ7XG4gICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0LWZhYiB7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmRfaW1hZ2VfY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    72010:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style15/product-card-style15.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-chip {\n  padding: 0;\n  margin: 0;\n  height: auto;\n  border-radius: 4px;\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container ion-icon {\n  font-size: 25px;\n  position: absolute;\n  bottom: -12px;\n  right: 5px;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTE1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxTQUFTO0VBQ1QsWUFBWTtBQUdwQjs7QUFkQTtFQWFZLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBSy9COztBQTdCQTtFQTJCWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFNMUI7O0FBbkNBO0VBaUNRLFVBQVU7RUFDVixXQUFXO0FBTW5COztBQXhDQTtFQW9DWSxlQUFlO0FBUTNCOztBQTVDQTtFQXdDUSxhQUFhO0VBQ2IsdUJBQXVCO0VBSXZCLGtCQUFrQjtBQUsxQjs7QUFsREE7RUEyQ1ksV0FBVztBQVd2Qjs7QUF0REE7RUErQ1ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFVBQVU7QUFXdEIiLCJmaWxlIjoicHJvZHVjdC1jYXJkLXN0eWxlMTUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tY2hpcCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmlnaHQtZmFiIHtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9pbWFnZV9jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogLTEycHg7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    73016:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style16/product-card-style16.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 5px;\n  right: unset;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card ion-card-content ion-icon {\n  vertical-align: middle;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTE2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxTQUFTO0VBQ1QsWUFBWTtBQUdwQjs7QUFkQTtFQWFZLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUsxQjs7QUFwQkE7RUFtQlEsVUFBVTtFQUNWLFdBQVc7QUFLbkI7O0FBekJBO0VBc0JZLGVBQWU7QUFPM0I7O0FBN0JBO0VBMEJRLGFBQWE7RUFDYix1QkFBdUI7QUFPL0I7O0FBbENBO0VBNkJZLFdBQVc7QUFTdkI7O0FBdENBO0VBbUNZLHNCQUFzQjtBQU9sQyIsImZpbGUiOiJwcm9kdWN0LWNhcmQtc3R5bGUxNi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDFweCAwLjRweCByZ2IoMjQyLCAyMzgsIDIzOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBpb24tZmFiIHtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLmxlZnQtZmFiIHtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgICAgICByaWdodDogdW5zZXQ7XG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0LWZhYiB7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmRfaW1hZ2VfY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    32675:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style17/product-card-style17.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  background-color: transparent;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card ion-card-content {\n  margin-top: -15px;\n  background-color: var(--app-item-color);\n  border-radius: 10px 10px 10px 10px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTE3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQXBCOztBQUxBO0VBT1EsUUFBUTtFQUNSLGtCQUFhO0FBRXJCOztBQVZBO0VBV1EsU0FBUztFQUNULFlBQVk7QUFHcEI7O0FBZkE7RUFlWSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7QUFJM0I7O0FBckJBO0VBb0JZLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUsxQjs7QUEzQkE7RUEwQlEsVUFBVTtFQUNWLFdBQVc7QUFLbkI7O0FBaENBO0VBNkJZLGVBQWU7QUFPM0I7O0FBcENBO0VBaUNRLGFBQWE7RUFDYix1QkFBdUI7QUFPL0I7O0FBekNBO0VBb0NZLFdBQVc7QUFTdkI7O0FBN0NBO0VBd0NRLGlCQUFpQjtFQUNqQix1Q0FBdUM7RUFDdkMsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFTeEIiLCJmaWxlIjoicHJvZHVjdC1jYXJkLXN0eWxlMTcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1mYWIge1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWl0ZW0tY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    24904:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style18/product-card-style18.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 5px;\n  right: unset;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container .cart-buttons {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTE4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxTQUFTO0VBQ1QsWUFBWTtBQUdwQjs7QUFkQTtFQWFZLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUsxQjs7QUFwQkE7RUFtQlEsVUFBVTtFQUNWLFdBQVc7QUFLbkI7O0FBekJBO0VBc0JZLGVBQWU7QUFPM0I7O0FBN0JBO0VBMEJRLGFBQWE7RUFDYix1QkFBdUI7RUFJdkIsa0JBQWtCO0FBSTFCOztBQW5DQTtFQTZCWSxXQUFXO0FBVXZCOztBQXZDQTtFQWlDWSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFVdkIiLCJmaWxlIjoicHJvZHVjdC1jYXJkLXN0eWxlMTguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDVweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1mYWIge1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLmNhcnQtYnV0dG9ucyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    46660:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style19/product-card-style19.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 5px;\n  right: unset;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container .cart-buttons {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: inline-flex;\n}\n\nion-card .card_image_container .cart-buttons ion-button:first-child {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTE5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxTQUFTO0VBQ1QsWUFBWTtBQUdwQjs7QUFkQTtFQWFZLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUsxQjs7QUFwQkE7RUFtQlEsVUFBVTtFQUNWLFdBQVc7QUFLbkI7O0FBekJBO0VBc0JZLGVBQWU7QUFPM0I7O0FBN0JBO0VBMEJRLGFBQWE7RUFDYix1QkFBdUI7RUFJdkIsa0JBQWtCO0FBSTFCOztBQW5DQTtFQTZCWSxXQUFXO0FBVXZCOztBQXZDQTtFQWlDWSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxvQkFBb0I7QUFVaEM7O0FBOUNBO0VBc0NnQixXQUFXO0FBWTNCIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTE5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggMXB4IDAuNHB4IHJnYigyNDIsIDIzOCwgMjM4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGlvbi1mYWIge1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAubGVmdC1mYWIge1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHJpZ2h0OiB1bnNldDtcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmlnaHQtZmFiIHtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9pbWFnZV9jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5jYXJ0LWJ1dHRvbnMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGlvbi1idXR0b246Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    26339:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style1/product-card-style1.component.scss ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 5px;\n  right: unset;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFFcEIseUNBQW9EO0VBQ3BELGdCQUFnQjtBQUFwQjs7QUFKQTtFQU1RLFFBQVE7RUFDUixrQkFBYTtBQUVyQjs7QUFUQTtFQVVRLFNBQVM7RUFDVCxZQUFZO0FBR3BCOztBQWRBO0VBYVksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBSzFCOztBQXBCQTtFQW1CUSxVQUFVO0VBQ1YsV0FBVztBQUtuQjs7QUF6QkE7RUFzQlksZUFBZTtBQU8zQjs7QUE3QkE7RUEwQlEsYUFBYTtFQUNiLHVCQUF1QjtBQU8vQjs7QUFsQ0E7RUE2QlksV0FBVztBQVN2QiIsImZpbGUiOiJwcm9kdWN0LWNhcmQtc3R5bGUxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggMXB4IDAuNHB4IHJnYigyNDIsIDIzOCwgMjM4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGlvbi1mYWIge1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAubGVmdC1mYWIge1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHJpZ2h0OiB1bnNldDtcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmlnaHQtZmFiIHtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9pbWFnZV9jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    5358:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style20/product-card-style20.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-chip {\n  padding: 0;\n  margin: 0;\n  height: auto;\n  border-radius: 4px;\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container ion-icon {\n  font-size: 25px;\n  position: absolute;\n  bottom: -12px;\n  right: 5px;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTIwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxTQUFTO0VBQ1QsWUFBWTtBQUdwQjs7QUFkQTtFQWFZLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBSy9COztBQTdCQTtFQTJCWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFNMUI7O0FBbkNBO0VBaUNRLFVBQVU7RUFDVixXQUFXO0FBTW5COztBQXhDQTtFQW9DWSxlQUFlO0FBUTNCOztBQTVDQTtFQXdDUSxhQUFhO0VBQ2IsdUJBQXVCO0VBSXZCLGtCQUFrQjtBQUsxQjs7QUFsREE7RUEyQ1ksV0FBVztBQVd2Qjs7QUF0REE7RUErQ1ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFVBQVU7QUFXdEIiLCJmaWxlIjoicHJvZHVjdC1jYXJkLXN0eWxlMjAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tY2hpcCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmlnaHQtZmFiIHtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9pbWFnZV9jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogLTEycHg7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    15993:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style21/product-card-style21.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .right-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container ion-icon {\n  font-size: 25px;\n  position: absolute;\n  bottom: -12px;\n  right: 5px;\n  z-index: 1;\n}\n\nion-card ion-card-content ion-icon {\n  vertical-align: middle;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTIxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxVQUFVO0VBQ1YsV0FBVztBQUduQjs7QUFkQTtFQWNZLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZUFBZTtBQUkzQjs7QUFwQkE7RUFtQlksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBSzFCOztBQTFCQTtFQXlCUSxhQUFhO0VBQ2IsdUJBQXVCO0VBSXZCLGtCQUFrQjtBQUUxQjs7QUFoQ0E7RUE0QlksV0FBVztBQVF2Qjs7QUFwQ0E7RUFnQ1ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFVBQVU7QUFRdEI7O0FBNUNBO0VBeUNZLHNCQUFzQjtBQU9sQyIsImZpbGUiOiJwcm9kdWN0LWNhcmQtc3R5bGUyMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDFweCAwLjRweCByZ2IoMjQyLCAyMzgsIDIzOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBpb24tZmFiIHtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLnJpZ2h0LWZhYiB7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    26747:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style22/product-card-style22.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-chip {\n  padding: 0;\n  margin: 0;\n  height: auto;\n  border-radius: 4px;\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\nion-card .right-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container ion-icon {\n  font-size: 25px;\n  position: absolute;\n  bottom: -12px;\n  right: 5px;\n  z-index: 1;\n}\n\nion-card ion-card-content ion-icon {\n  vertical-align: middle;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTIyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxVQUFVO0VBQ1YsV0FBVztBQUduQjs7QUFkQTtFQWFZLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBSy9COztBQTdCQTtFQTJCWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFNMUI7O0FBbkNBO0VBaUNRLGFBQWE7RUFDYix1QkFBdUI7RUFJdkIsa0JBQWtCO0FBRzFCOztBQXpDQTtFQW9DWSxXQUFXO0FBU3ZCOztBQTdDQTtFQXdDWSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtBQVN0Qjs7QUFyREE7RUFpRFksc0JBQXNCO0FBUWxDIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTIyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggMXB4IDAuNHB4IHJnYigyNDIsIDIzOCwgMjM4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGlvbi1mYWIge1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAucmlnaHQtZmFiIHtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    95101:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style23/product-card-style23.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  background-color: transparent;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card ion-card-content {\n  margin-top: -15px;\n  background-color: var(--app-item-color);\n  border-radius: 10px 10px 10px 10px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTIzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQXBCOztBQUxBO0VBT1EsUUFBUTtFQUNSLGtCQUFhO0FBRXJCOztBQVZBO0VBV1EsU0FBUztFQUNULFlBQVk7QUFHcEI7O0FBZkE7RUFlWSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7QUFJM0I7O0FBckJBO0VBb0JZLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUsxQjs7QUEzQkE7RUEwQlEsVUFBVTtFQUNWLFdBQVc7QUFLbkI7O0FBaENBO0VBNkJZLGVBQWU7QUFPM0I7O0FBcENBO0VBaUNRLGFBQWE7RUFDYix1QkFBdUI7QUFPL0I7O0FBekNBO0VBb0NZLFdBQVc7QUFTdkI7O0FBN0NBO0VBd0NRLGlCQUFpQjtFQUNqQix1Q0FBdUM7RUFDdkMsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFTeEIiLCJmaWxlIjoicHJvZHVjdC1jYXJkLXN0eWxlMjMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1mYWIge1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWl0ZW0tY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    92032:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style24/product-card-style24.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-chip {\n  padding: 0;\n  margin: 0;\n  height: auto;\n  border-radius: 4px;\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\nion-card .right-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container ion-icon {\n  font-size: 25px;\n  position: absolute;\n  bottom: -12px;\n  right: 5px;\n  z-index: 1;\n}\n\nion-card ion-card-content ion-icon {\n  vertical-align: middle;\n}\n\nion-card .quantity-chip {\n  margin: 0;\n  border-radius: 5px;\n  padding: 0px 7px 0px 7px;\n  height: 20px;\n}\n\nion-card .quantity-chip ion-label {\n  padding: 0 15px;\n}\n\nion-card .quantity-chip ion-icon {\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTI0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxVQUFVO0VBQ1YsV0FBVztBQUduQjs7QUFkQTtFQWFZLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBSy9COztBQTdCQTtFQTJCWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFNMUI7O0FBbkNBO0VBaUNRLGFBQWE7RUFDYix1QkFBdUI7RUFJdkIsa0JBQWtCO0FBRzFCOztBQXpDQTtFQW9DWSxXQUFXO0FBU3ZCOztBQTdDQTtFQXdDWSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtBQVN0Qjs7QUFyREE7RUFpRFksc0JBQXNCO0FBUWxDOztBQXpEQTtFQXFEUSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixZQUFZO0FBUXBCOztBQWhFQTtFQTJEWSxlQUFlO0FBUzNCOztBQXBFQTtFQThEWSxlQUFlO0FBVTNCIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTI0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggMXB4IDAuNHB4IHJnYigyNDIsIDIzOCwgMjM4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGlvbi1mYWIge1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAucmlnaHQtZmFiIHtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5xdWFudGl0eS1jaGlwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCA3cHggMHB4IDdweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    24542:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style25/product-card-style25.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-chip {\n  padding: 0;\n  margin: 0;\n  height: auto;\n  border-radius: 4px;\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\nion-card .right-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container ion-icon {\n  font-size: 25px;\n  position: absolute;\n  bottom: -12px;\n  right: 5px;\n  z-index: 1;\n}\n\nion-card ion-card-content ion-icon {\n  vertical-align: middle;\n}\n\nion-card .quantity-chip {\n  margin: 0;\n  border-radius: 5px;\n  padding: 0px 7px 0px 7px;\n  height: 20px;\n}\n\nion-card .quantity-chip ion-label {\n  padding: 0 15px;\n}\n\nion-card .quantity-chip ion-icon {\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTI1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxVQUFVO0VBQ1YsV0FBVztBQUduQjs7QUFkQTtFQWFZLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBSy9COztBQTdCQTtFQTJCWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFNMUI7O0FBbkNBO0VBaUNRLGFBQWE7RUFDYix1QkFBdUI7RUFJdkIsa0JBQWtCO0FBRzFCOztBQXpDQTtFQW9DWSxXQUFXO0FBU3ZCOztBQTdDQTtFQXdDWSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtBQVN0Qjs7QUFyREE7RUFpRFksc0JBQXNCO0FBUWxDOztBQXpEQTtFQXFEUSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixZQUFZO0FBUXBCOztBQWhFQTtFQTJEWSxlQUFlO0FBUzNCOztBQXBFQTtFQThEWSxlQUFlO0FBVTNCIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTI1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggMXB4IDAuNHB4IHJnYigyNDIsIDIzOCwgMjM4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGlvbi1mYWIge1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAucmlnaHQtZmFiIHtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5xdWFudGl0eS1jaGlwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCA3cHggMHB4IDdweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    66325:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style26/product-card-style26.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n  background-color: transparent;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-chip {\n  padding: 0;\n  margin: 0;\n  height: auto;\n  border-radius: 4px;\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\nion-card .right-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container ion-icon {\n  font-size: 25px;\n  position: absolute;\n  bottom: -12px;\n  right: 5px;\n  z-index: 1;\n}\n\nion-card ion-card-content {\n  margin-top: -15px;\n  background-color: var(--app-item-color);\n  border-radius: 10px 10px 10px 10px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\nion-card ion-card-content ion-icon {\n  vertical-align: middle;\n}\n\nion-card .quantity-chip {\n  margin: 0;\n  border-radius: 5px;\n  padding: 0px 7px 0px 7px;\n  height: 20px;\n}\n\nion-card .quantity-chip ion-label {\n  padding: 0 15px;\n}\n\nion-card .quantity-chip ion-icon {\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTI2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBQWpDOztBQUxBO0VBT1EsUUFBUTtFQUNSLGtCQUFhO0FBRXJCOztBQVZBO0VBV1EsVUFBVTtFQUNWLFdBQVc7QUFHbkI7O0FBZkE7RUFjWSxVQUFVO0VBQ1YsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUsvQjs7QUE5QkE7RUE0QlksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBTTFCOztBQXBDQTtFQWtDUSxhQUFhO0VBQ2IsdUJBQXVCO0VBSXZCLGtCQUFrQjtBQUcxQjs7QUExQ0E7RUFxQ1ksV0FBVztBQVN2Qjs7QUE5Q0E7RUF5Q1ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFVBQVU7QUFTdEI7O0FBdERBO0VBaURRLGlCQUFpQjtFQUNqQix1Q0FBdUM7RUFDdkMsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFTeEI7O0FBOURBO0VBdURZLHNCQUFzQjtBQVdsQzs7QUFsRUE7RUEyRFEsU0FBUztFQUNULGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsWUFBWTtBQVdwQjs7QUF6RUE7RUFpRVksZUFBZTtBQVkzQjs7QUE3RUE7RUFvRVksZUFBZTtBQWEzQiIsImZpbGUiOiJwcm9kdWN0LWNhcmQtc3R5bGUyNi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDFweCAwLjRweCByZ2IoMjQyLCAyMzgsIDIzOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBpb24tZmFiIHtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLnJpZ2h0LWZhYiB7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICBpb24tY2hpcCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9pbWFnZV9jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogLTEycHg7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1pdGVtLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnF1YW50aXR5LWNoaXAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDdweCAwcHggN3B4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    36715:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style27/product-card-style27.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-chip {\n  padding: 0;\n  margin: 0;\n  height: auto;\n  border-radius: 4px;\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n\nion-card .right-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container ion-icon {\n  font-size: 25px;\n  position: absolute;\n  bottom: -12px;\n  right: 5px;\n  z-index: 1;\n}\n\nion-card ion-card-content ion-icon {\n  vertical-align: middle;\n}\n\nion-card .quantity-chip {\n  margin: 0;\n  border-radius: 5px;\n  padding: 0px 7px 0px 7px;\n  height: 20px;\n}\n\nion-card .quantity-chip ion-label {\n  padding: 0 15px;\n}\n\nion-card .quantity-chip ion-icon {\n  font-size: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTI3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxRQUFRO0VBQ1Isa0JBQWE7QUFFckI7O0FBVEE7RUFVUSxVQUFVO0VBQ1YsV0FBVztBQUduQjs7QUFkQTtFQWFZLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBSy9COztBQTdCQTtFQTJCWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFNMUI7O0FBbkNBO0VBaUNRLGFBQWE7RUFDYix1QkFBdUI7RUFJdkIsa0JBQWtCO0FBRzFCOztBQXpDQTtFQW9DWSxXQUFXO0FBU3ZCOztBQTdDQTtFQXdDWSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsVUFBVTtBQVN0Qjs7QUFyREE7RUFpRFksc0JBQXNCO0FBUWxDOztBQXpEQTtFQXFEUSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixZQUFZO0FBUXBCOztBQWhFQTtFQTJEWSxlQUFlO0FBUzNCOztBQXBFQTtFQThEWSxlQUFlO0FBVTNCIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTI3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggMXB4IDAuNHB4IHJnYigyNDIsIDIzOCwgMjM4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGlvbi1mYWIge1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAucmlnaHQtZmFiIHtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5xdWFudGl0eS1jaGlwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDBweCA3cHggMHB4IDdweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    33978:
    /*!*****************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style28/product-card-style28.component.scss ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card .cart-icon {\n  font-size: 25px;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTI4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW9CO0VBRXBCLHlDQUFvRDtFQUNwRCxnQkFBZ0I7QUFBcEI7O0FBSkE7RUFNUSxlQUFlO0FBRXZCOztBQVJBO0VBU1EsUUFBUTtFQUNSLGtCQUFhO0FBR3JCOztBQWJBO0VBYVEsU0FBUztFQUNULFlBQVk7QUFJcEI7O0FBbEJBO0VBaUJZLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZUFBZTtBQUszQjs7QUF4QkE7RUFzQlksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBTTFCOztBQTlCQTtFQTRCUSxVQUFVO0VBQ1YsV0FBVztBQU1uQjs7QUFuQ0E7RUErQlksZUFBZTtBQVEzQjs7QUF2Q0E7RUFtQ1EsYUFBYTtFQUNiLHVCQUF1QjtBQVEvQjs7QUE1Q0E7RUFzQ1ksV0FBVztBQVV2QiIsImZpbGUiOiJwcm9kdWN0LWNhcmQtc3R5bGUyOC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDFweCAwLjRweCByZ2IoMjQyLCAyMzgsIDIzOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAuY2FydC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgICBpb24tZmFiIHtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLmxlZnQtZmFiIHtcbiAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICByaWdodDogdW5zZXQ7XG4gICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0LWZhYiB7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmRfaW1hZ2VfY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    99955:
    /*!***********************************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style2/product-card-style2/product-card-style2.component.scss ***!
      \***********************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFFcEIseUNBQW9EO0VBQ3BELGdCQUFnQjtBQUFwQjs7QUFKQTtFQU1RLFFBQVE7RUFDUixrQkFBYTtBQUVyQjs7QUFUQTtFQVVRLFNBQVM7RUFDVCxZQUFZO0FBR3BCOztBQWRBO0VBY1ksMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0FBSTNCOztBQXBCQTtFQW1CWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFLMUI7O0FBMUJBO0VBeUJRLFVBQVU7RUFDVixXQUFXO0FBS25COztBQS9CQTtFQTRCWSxlQUFlO0FBTzNCOztBQW5DQTtFQWdDUSxhQUFhO0VBQ2IsdUJBQXVCO0FBTy9COztBQXhDQTtFQW1DWSxXQUFXO0FBU3ZCIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1mYWIge1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    44785:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style3/product-card-style3.component.scss ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFFcEIseUNBQW9EO0VBQ3BELGdCQUFnQjtBQUFwQjs7QUFKQTtFQU1RLFFBQVE7RUFDUixrQkFBYTtBQUVyQjs7QUFUQTtFQVVRLFNBQVM7RUFDVCxZQUFZO0FBR3BCOztBQWRBO0VBY1ksMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0FBSTNCOztBQXBCQTtFQW1CWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFLMUI7O0FBMUJBO0VBeUJRLFVBQVU7RUFDVixXQUFXO0FBS25COztBQS9CQTtFQTRCWSxlQUFlO0FBTzNCOztBQW5DQTtFQWdDUSxhQUFhO0VBQ2IsdUJBQXVCO0FBTy9COztBQXhDQTtFQW1DWSxXQUFXO0FBU3ZCIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1mYWIge1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    81033:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style4/product-card-style4.component.scss ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFFcEIseUNBQW9EO0VBQ3BELGdCQUFnQjtBQUFwQjs7QUFKQTtFQU1RLFFBQVE7RUFDUixrQkFBYTtBQUVyQjs7QUFUQTtFQVVRLFNBQVM7RUFDVCxZQUFZO0FBR3BCOztBQWRBO0VBY1ksMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0FBSTNCOztBQXBCQTtFQW1CWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFLMUI7O0FBMUJBO0VBeUJRLFVBQVU7RUFDVixXQUFXO0FBS25COztBQS9CQTtFQTRCWSxlQUFlO0FBTzNCOztBQW5DQTtFQWdDUSxhQUFhO0VBQ2IsdUJBQXVCO0FBTy9COztBQXhDQTtFQW1DWSxXQUFXO0FBU3ZCIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1mYWIge1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    40571:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style5/product-card-style5.component.scss ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFFcEIseUNBQW9EO0VBQ3BELGdCQUFnQjtBQUFwQjs7QUFKQTtFQU1RLFFBQVE7RUFDUixrQkFBYTtBQUVyQjs7QUFUQTtFQVVRLFNBQVM7RUFDVCxZQUFZO0FBR3BCOztBQWRBO0VBY1ksMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0FBSTNCOztBQXBCQTtFQW1CWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFLMUI7O0FBMUJBO0VBeUJRLFVBQVU7RUFDVixXQUFXO0FBS25COztBQS9CQTtFQTRCWSxlQUFlO0FBTzNCOztBQW5DQTtFQWdDUSxhQUFhO0VBQ2IsdUJBQXVCO0FBTy9COztBQXhDQTtFQW1DWSxXQUFXO0FBU3ZCIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1mYWIge1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    74413:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style6/product-card-style6.component.scss ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFFcEIseUNBQW9EO0VBQ3BELGdCQUFnQjtBQUFwQjs7QUFKQTtFQU1RLFFBQVE7RUFDUixrQkFBYTtBQUVyQjs7QUFUQTtFQVVRLFNBQVM7RUFDVCxZQUFZO0FBR3BCOztBQWRBO0VBY1ksMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0FBSTNCOztBQXBCQTtFQW1CWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFLMUI7O0FBMUJBO0VBeUJRLFVBQVU7RUFDVixXQUFXO0FBS25COztBQS9CQTtFQTRCWSxlQUFlO0FBTzNCOztBQW5DQTtFQWdDUSxhQUFhO0VBQ2IsdUJBQXVCO0FBTy9COztBQXhDQTtFQW1DWSxXQUFXO0FBU3ZCIiwiZmlsZSI6InByb2R1Y3QtY2FyZC1zdHlsZTYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbiAgICBib3gtc2hhZG93OiAwLjVweCAwLjVweCAxcHggMC40cHggcmdiKDI0MiwgMjM4LCAyMzgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgaW9uLWZhYiB7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5sZWZ0LWZhYiB7XG4gICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgcmlnaHQ6IHVuc2V0O1xuICAgICAgICBpb24tYmFkZ2Uge1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1mYWIge1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICBsZWZ0OiB1bnNldDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJkX2ltYWdlX2NvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    28272:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style7/product-card-style7.component.scss ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 2px;\n  right: unset;\n}\n\nion-card .left-fab ion-badge {\n  text-transform: capitalize;\n  display: block;\n  margin-top: 5px;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\nion-card .card_image_container ion-icon {\n  font-size: 25px;\n  position: absolute;\n  bottom: -12px;\n  right: 5px;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFFcEIseUNBQW9EO0VBQ3BELGdCQUFnQjtBQUFwQjs7QUFKQTtFQU1RLFFBQVE7RUFDUixrQkFBYTtBQUVyQjs7QUFUQTtFQVVRLFNBQVM7RUFDVCxZQUFZO0FBR3BCOztBQWRBO0VBY1ksMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxlQUFlO0FBSTNCOztBQXBCQTtFQW1CWSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFLMUI7O0FBMUJBO0VBeUJRLFVBQVU7RUFDVixXQUFXO0FBS25COztBQS9CQTtFQTRCWSxlQUFlO0FBTzNCOztBQW5DQTtFQWdDUSxhQUFhO0VBQ2IsdUJBQXVCO0VBSXZCLGtCQUFrQjtBQUkxQjs7QUF6Q0E7RUFtQ1ksV0FBVztBQVV2Qjs7QUE3Q0E7RUF1Q1ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFVBQVU7QUFVdEIiLCJmaWxlIjoicHJvZHVjdC1jYXJkLXN0eWxlNy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDFweCAwLjRweCByZ2IoMjQyLCAyMzgsIDIzOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBpb24tZmFiIHtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgLmxlZnQtZmFiIHtcbiAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICByaWdodDogdW5zZXQ7XG4gICAgICAgIGlvbi1iYWRnZSB7XG4gICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnJpZ2h0LWZhYiB7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIGxlZnQ6IHVuc2V0O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNhcmRfaW1hZ2VfY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGlvbi1pbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IC0xMnB4O1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    40326:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style8/product-card-style8.component.scss ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 5px;\n  right: unset;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFFcEIseUNBQW9EO0VBQ3BELGdCQUFnQjtBQUFwQjs7QUFKQTtFQU1RLFFBQVE7RUFDUixrQkFBYTtBQUVyQjs7QUFUQTtFQVVRLFNBQVM7RUFDVCxZQUFZO0FBR3BCOztBQWRBO0VBYVksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBSzFCOztBQXBCQTtFQW1CUSxVQUFVO0VBQ1YsV0FBVztBQUtuQjs7QUF6QkE7RUFzQlksZUFBZTtBQU8zQjs7QUE3QkE7RUEwQlEsYUFBYTtFQUNiLHVCQUF1QjtBQU8vQjs7QUFsQ0E7RUE2QlksV0FBVztBQVN2QiIsImZpbGUiOiJwcm9kdWN0LWNhcmQtc3R5bGU4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggMXB4IDAuNHB4IHJnYigyNDIsIDIzOCwgMjM4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGlvbi1mYWIge1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAubGVmdC1mYWIge1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHJpZ2h0OiB1bnNldDtcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmlnaHQtZmFiIHtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9pbWFnZV9jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    30368:
    /*!***************************************************************************************************!*\
      !*** ./src/components/product-card-styles/product-card-style9/product-card-style9.component.scss ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  margin: 0 !important;\n  box-shadow: 0.5px 0.5px 1px 0.4px #f2eeee;\n  border-radius: 0;\n}\n\nion-card ion-fab {\n  top: 5px;\n  --box-shadow: none;\n}\n\nion-card .left-fab {\n  left: 5px;\n  right: unset;\n}\n\nion-card .left-fab ion-fab-button {\n  width: 25px;\n  height: 25px;\n  font-size: 9px;\n}\n\nion-card .right-fab {\n  right: 5px;\n  left: unset;\n}\n\nion-card .right-fab ion-icon {\n  font-size: 25px;\n}\n\nion-card .card_image_container {\n  display: flex;\n  justify-content: center;\n}\n\nion-card .card_image_container ion-img {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC1zdHlsZTkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBb0I7RUFFcEIseUNBQW9EO0VBQ3BELGdCQUFnQjtBQUFwQjs7QUFKQTtFQU1RLFFBQVE7RUFDUixrQkFBYTtBQUVyQjs7QUFUQTtFQVVRLFNBQVM7RUFDVCxZQUFZO0FBR3BCOztBQWRBO0VBYVksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBSzFCOztBQXBCQTtFQW1CUSxVQUFVO0VBQ1YsV0FBVztBQUtuQjs7QUF6QkE7RUFzQlksZUFBZTtBQU8zQjs7QUE3QkE7RUEwQlEsYUFBYTtFQUNiLHVCQUF1QjtBQU8vQjs7QUFsQ0E7RUE2QlksV0FBVztBQVN2QiIsImZpbGUiOiJwcm9kdWN0LWNhcmQtc3R5bGU5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgYm94LXNoYWRvdzogMC41cHggMC41cHggMXB4IDAuNHB4IHJnYigyNDIsIDIzOCwgMjM4KTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGlvbi1mYWIge1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAubGVmdC1mYWIge1xuICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgIHJpZ2h0OiB1bnNldDtcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmlnaHQtZmFiIHtcbiAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZF9pbWFnZV9jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    19574:
    /*!*****************************************************************!*\
      !*** ./src/components/product-card/product-card.component.scss ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "div {\n  --ion-text-color: #000000 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFpQjtBQUNyQiIsImZpbGUiOiJwcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICAgIC0taW9uLXRleHQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    1596:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style10/product-card-style10.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\"\n      (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge color=\"dark\" class=\"font-extra-small font-bold\">\n\n        <!-- <div *ngIf=\"data.product_type=='variable'\">\n          {{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}\n        </div> -->\n        <!-- *ngIf=\"data.product_type=='simple'\" -->\n        <div>\n          <div *ngIf=\"data.product_discount_price!=0\">\n            <ion-text class=\"line-through truncate\">{{data.product_price|curency}}</ion-text>\n            &nbsp;\n            <ion-text class=\"truncate\">{{data.product_discount_price|curency}}</ion-text>\n          </div>\n          <div *ngIf=\"data.product_discount_price==0\">\n            {{data.product_price|curency}}\n          </div>\n        </div>\n        <!-- <div>{{getPrice()}}</div> -->\n      </ion-badge>\n    </ion-fab>\n    <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\"\n    (click)=\"openProductPage()\">\n    {{data.detail[0].title}}\n  </ion-card-content>\n  <ion-button size=small\n    class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-5 margin-bottom-10\"\n    expand=\"block\" color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='simple' && !outOfStock\">\n    {{'add to cart'|translate}}</ion-button>\n  <ion-button size=small\n    class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-5 margin-bottom-10\"\n    expand=\"block\" color=\"danger\" *ngIf=\"data.product_type=='simple' && outOfStock\">\n    {{'out of stock'|translate}}</ion-button>\n\n  <ion-button size=small\n    class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-5 margin-bottom-10\"\n    expand=\"block\" color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='variable'\">\n    {{'details'|translate}}\n  </ion-button>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    19621:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style11/product-card-style11.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n\n      <ion-badge *ngIf=\"data.is_featured!=0\" color=\"dark\" class=\"font-extra-small font-bold\">{{'featured'|translate}}\n      </ion-badge>\n    </ion-fab>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"right-fab\" id=\"hearticon\">\n      <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    {{data.category[0].category_detail.detail[0].name}}\n  </ion-card-content>\n  <ion-card-content\n    class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin ion-text-center\">\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\" class=\"ion-text-center\">\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\" class=\"ion-text-center\">\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    85487:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style12/product-card-style12.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\" *ngIf=\"data.product_discount_price!=0 && discount\">\n      <ion-fab-button size=small class=\"ion-no-margin font-extra-small font-bold\">\n        <span class=\"center\">{{discount}}</span>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\"\n    (click)=\"openProductPage()\">\n    {{data.detail[0].title}}\n  </ion-card-content>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding\" expand=\"full\"\n    color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='simple' && !outOfStock\">\n    {{'add to cart'|translate}}</ion-button>\n  <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding \" expand=\"full\"\n    color=\"danger\" *ngIf=\"data.product_type=='simple' && outOfStock\">\n    {{'out of stock'|translate}}</ion-button>\n\n  <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding\" expand=\"full\"\n    color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='variable'\">\n    {{'details'|translate}}\n  </ion-button>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    13905:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style13/product-card-style13.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n\n      <ion-badge *ngIf=\"data.is_featured!=0\" color=\"dark\" class=\"font-extra-small font-bold\">{{'featured'|translate}}\n      </ion-badge>\n    </ion-fab>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"right-fab\" id=\"hearticon\">\n      <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    {{data.category[0].category_detail.detail[0].name}}\n  </ion-card-content>\n  <ion-card-content\n    class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin ion-text-center\">\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\" class=\"ion-text-center\">\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\" class=\"ion-text-center\">\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    53970:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style14/product-card-style14.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge color=\"dark\" class=\"font-extra-small font-bold\">\n\n        <!-- <div *ngIf=\"data.product_type=='variable'\">\n          {{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}\n        </div> -->\n        <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n          <div *ngIf=\"data.product_discount_price!=0\">\n            <ion-text class=\"line-through truncate\">{{data.product_price|curency}}</ion-text>\n            &nbsp;\n            <ion-text class=\"truncate\">{{data.product_discount_price|curency}}</ion-text>\n          </div>\n          <div *ngIf=\"data.product_discount_price==0\">\n            {{data.product_price|curency}}\n          </div>\n        </div>\n      </ion-badge>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    {{data.category[0].category_detail.detail[0].name}}\n  </ion-card-content>\n  <ion-card-content\n    class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    87421:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style15/product-card-style15.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-chip outline=true class=\"font-extra-small font-bold\" *ngIf=\"data.product_discount_price!=0\">\n        <ion-label color=\"danger\">{{'sale'|translate}}</ion-label>\n      </ion-chip>\n      <ion-chip outline=true class=\"font-extra-small font-bold\" *ngIf=\"data.is_featured!=0\">\n        <ion-label color=\"dark\">{{'featured'|translate}}</ion-label>\n      </ion-chip>\n    </ion-fab>\n    <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    <ion-icon [name]=\"getStarIconName(1)\" [color]=\"getStarIconColor(1)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(2)\" [color]=\"getStarIconColor(2)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(3)\" [color]=\"getStarIconColor(3)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(4)\" [color]=\"getStarIconColor(4)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(5)\" [color]=\"getStarIconColor(5)\"></ion-icon>\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text color=\"danger\"> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    66129:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style16/product-card-style16.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\" *ngIf=\"data.product_discount_price!=0 && discount\">\n      <ion-fab-button size=small class=\"ion-no-margin font-extra-small font-bold\">\n        <span class=\"center\">{{discount}}</span>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\">\n    <ion-icon [name]=\"getStarIconName(1)\" [color]=\"getStarIconColor(1)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(2)\" [color]=\"getStarIconColor(2)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(3)\" [color]=\"getStarIconColor(3)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(4)\" [color]=\"getStarIconColor(4)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(5)\" [color]=\"getStarIconColor(5)\"></ion-icon>\n  </ion-card-content>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5\" (click)=\"openProductPage()\">\n    {{data.detail[0].title}}\n  </ion-card-content>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding\" expand=\"full\"\n    color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='simple' && !outOfStock\">\n    {{'add to cart'|translate}}</ion-button>\n  <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding \" expand=\"full\"\n    color=\"danger\" *ngIf=\"data.product_type=='simple' && outOfStock\">\n    {{'out of stock'|translate}}</ion-button>\n\n  <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding\" expand=\"full\"\n    color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='variable'\">\n    {{'details'|translate}}\n  </ion-button>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    85978:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style17/product-card-style17.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n\n      <ion-badge *ngIf=\"data.is_featured!=0\" color=\"dark\" class=\"font-extra-small font-bold\">{{'featured'|translate}}\n      </ion-badge>\n    </ion-fab>\n  </div>\n  <ion-card-content\n    class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 padding-top-5 padding-bottom-5 ion-text-center\">\n    <ion-text (click)=\"openProductPage()\"> {{data.detail[0].title}}</ion-text>\n    <!-- <div *ngIf=\"data.product_type=='variable'\">\n      <ion-row class=\"ion-no-margin ion-text-center\">\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n          <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n            - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </div> -->\n    <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n      <ion-row *ngIf=\"data.product_discount_price!=0\" class=\"ion-text-center\">\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n          <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n        </ion-col>\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n          <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"data.product_discount_price==0\" class=\"ion-text-center\">\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n          <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    14976:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style18/product-card-style18.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge color=\"dark\" class=\"font-extra-small font-bold\">\n\n        <!-- <div *ngIf=\"data.product_type=='variable'\">\n          {{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}\n        </div> -->\n        <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n          <div *ngIf=\"data.product_discount_price!=0\">\n            <ion-text class=\"line-through truncate\">{{data.product_price|curency}}</ion-text>\n            &nbsp;\n            <ion-text class=\"truncate\">{{data.product_discount_price|curency}}</ion-text>\n          </div>\n          <div *ngIf=\"data.product_discount_price==0\">\n            {{data.product_price|curency}}\n          </div>\n        </div>\n      </ion-badge>\n    </ion-fab>\n    <div class=\"cart-buttons\">\n      <ion-button size=small\n        class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-10 margin-bottom-10\"\n        expand=\"block\" color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='simple' && !outOfStock\">\n        {{'add to cart'|translate}}</ion-button>\n      <ion-button size=small\n        class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-10 margin-bottom-10\"\n        expand=\"block\" color=\"danger\" *ngIf=\"data.product_type=='simple' && outOfStock\">\n        {{'out of stock'|translate}}</ion-button>\n\n      <ion-button size=small\n        class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-10 margin-bottom-10\"\n        expand=\"block\" color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='variable'\">\n        {{'details'|translate}}\n      </ion-button>\n    </div>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    {{data.category[0].category_detail.detail[0].name}}\n  </ion-card-content>\n  <ion-card-content\n    class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text color=\"danger\"> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n\n\n\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    98742:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style19/product-card-style19.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge color=\"dark\" class=\"font-extra-small font-bold\">\n\n        <!-- <div *ngIf=\"data.product_type=='variable'\">\n          {{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}\n        </div> -->\n        <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n          <div *ngIf=\"data.product_discount_price!=0\">\n            <ion-text class=\"line-through truncate\">{{data.product_price|curency}}</ion-text>\n            &nbsp;\n            <ion-text class=\"truncate\">{{data.product_discount_price|curency}}</ion-text>\n          </div>\n          <div *ngIf=\"data.product_discount_price==0\">\n            {{data.product_price|curency}}\n          </div>\n        </div>\n      </ion-badge>\n    </ion-fab>\n    <div class=\"cart-buttons\">\n\n      <ion-button size=small\n        class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-10 margin-bottom-10\"\n        expand=\"block\" color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='simple' && !outOfStock\">\n        {{'add to cart'|translate}}</ion-button>\n      <ion-button size=small\n        class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-10 margin-bottom-10\"\n        expand=\"block\" color=\"danger\" *ngIf=\"data.product_type=='simple' && outOfStock\">\n        {{'out of stock'|translate}}</ion-button>\n\n      <ion-button size=small\n        class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-10 margin-bottom-10\"\n        expand=\"block\" color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='variable'\">\n        {{'details'|translate}}\n      </ion-button>\n      <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding  margin-right-10\"\n        (click)=\"clickWishIcon()\">\n        <ion-icon slot=\"icon-only\" color=\"light\" [name]=\"getHeartName()\" class=\"margin-horizontal-5\">\n        </ion-icon>\n      </ion-button>\n    </div>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    {{data.category[0].category_detail.detail[0].name}}\n  </ion-card-content>\n  <ion-card-content\n    class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text color=\"danger\"> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    93844:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style1/product-card-style1.component.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\"\n      (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\"\n      *ngIf=\"data.product_discount_price!=0 && discount\">\n      <ion-fab-button size=small class=\"ion-no-margin font-extra-small font-bold\">\n        <span class=\"center\">{{discount}}</span>\n      </ion-fab-button>\n    </ion-fab>\n    <!-- <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"right-fab\">\n      <ion-icon name=\"heart-circle-outline\" color=danger></ion-icon>\n    </ion-fab> -->\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"right-fab\" id=\"hearticon\">\n      <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\"\n    (click)=\"openProductPage()\">\n    {{data.detail[0].title}}\n  </ion-card-content>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    8305:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style20/product-card-style20.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-chip outline=true class=\"font-extra-small font-bold\" *ngIf=\"data.product_discount_price!=0\">\n        <ion-label color=\"danger\">{{'sale'|translate}}</ion-label>\n      </ion-chip>\n      <ion-chip outline=true class=\"font-extra-small font-bold\" *ngIf=\"data.is_featured!=0\">\n        <ion-label color=\"dark\">{{'featured'|translate}}</ion-label>\n      </ion-chip>\n    </ion-fab>\n    <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    <ion-icon [name]=\"getStarIconName(1)\" [color]=\"getStarIconColor(1)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(2)\" [color]=\"getStarIconColor(2)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(3)\" [color]=\"getStarIconColor(3)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(4)\" [color]=\"getStarIconColor(4)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(5)\" [color]=\"getStarIconColor(5)\"></ion-icon>\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text color=\"danger\"> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    57421:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style21/product-card-style21.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"right-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n\n      <ion-badge color=\"dark\" class=\"font-extra-small font-bold\" *ngIf=\"data.is_featured!=0\">{{'featured'|translate}}\n      </ion-badge>\n      <!-- <ion-chip outline=true class=\"font-extra-small font-bold\">\n        <ion-label color=\"danger\">{{'sale'|translate}}</ion-label>\n      </ion-chip>\n      <ion-chip outline=true class=\"font-extra-small font-bold\" *ngIf=\"data.is_featured!=0\">\n        <ion-label color=\"dark\">{{'featured'|translate}}</ion-label>\n      </ion-chip> -->\n    </ion-fab>\n    <!-- <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon> -->\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\">\n    <ion-icon [name]=\"getStarIconName(1)\" [color]=\"getStarIconColor(1)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(2)\" [color]=\"getStarIconColor(2)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(3)\" [color]=\"getStarIconColor(3)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(4)\" [color]=\"getStarIconColor(4)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(5)\" [color]=\"getStarIconColor(5)\"></ion-icon>\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5\" (click)=\"openProductPage()\">\n    <ion-text> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    25351:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style22/product-card-style22.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"right-fab\">\n      <ion-chip outline=true class=\"font-extra-small font-bold\" *ngIf=\"data.product_discount_price!=0\">\n        <ion-label color=\"danger\">{{'sale'|translate}}</ion-label>\n      </ion-chip>\n      <ion-chip outline=true class=\"font-extra-small font-bold\" *ngIf=\"data.is_featured!=0\">\n        <ion-label color=\"dark\">{{'featured'|translate}}</ion-label>\n      </ion-chip>\n    </ion-fab>\n    <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\">\n    <ion-icon [name]=\"getStarIconName(1)\" [color]=\"getStarIconColor(1)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(2)\" [color]=\"getStarIconColor(2)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(3)\" [color]=\"getStarIconColor(3)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(4)\" [color]=\"getStarIconColor(4)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(5)\" [color]=\"getStarIconColor(5)\"></ion-icon>\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5\" (click)=\"openProductPage()\">\n    <ion-text> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    32555:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style23/product-card-style23.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n\n      <ion-badge *ngIf=\"data.is_featured!=0\" color=\"dark\" class=\"font-extra-small font-bold\">{{'featured'|translate}}\n      </ion-badge>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-top-5 ion-text-center\">\n    <ion-text (click)=\"openProductPage()\"> {{data.detail[0].title}}</ion-text>\n    <!-- <div *ngIf=\"data.product_type=='variable'\">\n      <ion-row class=\"ion-no-margin ion-text-center\">\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n          <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n            - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </div> -->\n    <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n      <ion-row *ngIf=\"data.product_discount_price!=0\" class=\"ion-text-center\">\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n          <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n        </ion-col>\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n          <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"data.product_discount_price==0\" class=\"ion-text-center\">\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n          <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding\" expand=\"block\"\n      color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='simple' && !outOfStock\">\n      {{'add to cart'|translate}}</ion-button>\n    <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding \" expand=\"block\"\n      color=\"danger\" *ngIf=\"data.product_type=='simple' && outOfStock\">\n      {{'out of stock'|translate}}</ion-button>\n\n    <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding\" expand=\"block\"\n      color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='variable'\">\n      {{'details'|translate}}\n    </ion-button>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    75926:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style24/product-card-style24.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"right-fab\">\n      <ion-chip outline=true class=\"font-extra-small font-bold\" *ngIf=\"data.product_discount_price!=0\">\n        <ion-label color=\"danger\">{{'sale'|translate}}</ion-label>\n      </ion-chip>\n      <ion-chip outline=true class=\"font-extra-small font-bold\" *ngIf=\"data.is_featured!=0\">\n        <ion-label color=\"dark\">{{'featured'|translate}}</ion-label>\n      </ion-chip>\n    </ion-fab>\n    <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\">\n    <ion-icon [name]=\"getStarIconName(1)\" [color]=\"getStarIconColor(1)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(2)\" [color]=\"getStarIconColor(2)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(3)\" [color]=\"getStarIconColor(3)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(4)\" [color]=\"getStarIconColor(4)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(5)\" [color]=\"getStarIconColor(5)\"></ion-icon>\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5\" (click)=\"openProductPage()\">\n    <ion-text> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n  <div class=\"padding-bottom-5 padding-horizontal-5\" *ngIf=\"data.product_type=='simple'\">\n    <ion-chip outline=true [color]=\"(config.darkModeBool)?'light':'primary'\" class=\"quantity-chip ion-no-margin\"\n      *ngIf=\"!outOfStock\">\n      <ion-icon name=\"remove-outline\" (click)=\"quantityMinus()\"></ion-icon>\n      <ion-label class=\"font-bold font-small\">{{getQuantity()}}</ion-label>\n      <ion-icon name=\"add-outline\" (click)=\"quantityPlus()\"></ion-icon>\n    </ion-chip>\n    <ion-label class=\"font-medium ion-text-capitalize\" color=\"danger\" *ngIf=\"outOfStock\">{{'out of stock'|translate}}\n    </ion-label>\n  </div>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    28801:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style25/product-card-style25.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\"\n      (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge color=\"dark\" class=\"font-extra-small font-bold\">\n\n        <!-- <div *ngIf=\"data.product_type=='variable'\">\n          {{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}\n        </div> -->\n        <!-- *ngIf=\"data.product_type=='simple'\" -->\n        <div>\n          <div *ngIf=\"data.product_discount_price!=0\">\n            <ion-text class=\"line-through truncate\">{{data.product_price|curency}}</ion-text>\n            &nbsp;\n            <ion-text class=\"truncate\">{{data.product_discount_price|curency}}</ion-text>\n          </div>\n          <div *ngIf=\"data.product_discount_price==0\">\n            {{data.product_price|curency}}\n          </div>\n        </div>\n        <!-- <div>{{getPrice()}}</div> -->\n      </ion-badge>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    {{data.category[0].category_detail.detail[0].name}}\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text color=\"danger\"> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n  <div class=\"padding-bottom-5 padding-top-5 padding-horizontal-5 ion-text-center\" *ngIf=\"data.product_type=='simple'\">\n    <ion-chip outline=true [color]=\"(config.darkModeBool)?'light':'primary'\" class=\"quantity-chip ion-no-margin\"\n      *ngIf=\"!outOfStock\">\n      <ion-icon name=\"remove-outline\" (click)=\"quantityMinus()\"></ion-icon>\n      <ion-label class=\"font-bold font-small\">{{getQuantity()}}</ion-label>\n      <ion-icon name=\"add-outline\" (click)=\"quantityPlus()\"></ion-icon>\n    </ion-chip>\n    <ion-label class=\"font-medium ion-text-capitalize\" color=\"danger\" *ngIf=\"outOfStock\">{{'out of stock'|translate}}\n    </ion-label>\n  </div>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    71777:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style26/product-card-style26.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\"\n      (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n      <ion-badge *ngIf=\"data.is_featured!=0\" color=\"dark\" class=\"font-extra-small font-bold\">{{'featured'|translate}}\n      </ion-badge>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    <ion-text (click)=\"openProductPage()\"> {{data.detail[0].title}}</ion-text>\n    <div class=\"padding-bottom-5 padding-horizontal-5 ion-text-center\" *ngIf=\"data.product_type=='simple'\">\n      <ion-chip outline=true [color]=\"(config.darkModeBool)?'light':'primary'\" class=\"quantity-chip ion-no-margin\"\n        *ngIf=\"!outOfStock\">\n        <ion-icon name=\"remove-outline\" (click)=\"quantityMinus()\"></ion-icon>\n        <ion-label class=\"font-bold font-small\">{{getQuantity()}}</ion-label>\n        <ion-icon name=\"add-outline\" (click)=\"quantityPlus()\"></ion-icon>\n      </ion-chip>\n      <ion-label class=\"font-medium ion-text-capitalize\" color=\"danger\" *ngIf=\"outOfStock\">{{'out of stock'|translate}}\n      </ion-label>\n    </div>\n    <!-- <div *ngIf=\"data.product_type=='variable'\">\n      <ion-row class=\"ion-no-margin\">\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5 ion-text-center\">\n          <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n            - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </div> -->\n    <!-- *ngIf=\"data.product_type=='simple'\" -->\n    <div>\n      <ion-row *ngIf=\"data.product_discount_price!=0\">\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5 ion-text-center\">\n          <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n        </ion-col>\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5 ion-text-center\">\n          <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"data.product_discount_price==0\">\n        <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5 ion-text-center\">\n          <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-card-content>\n\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    4104:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style27/product-card-style27.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\" *ngIf=\"data.product_discount_price!=0 && discount\">\n      <ion-fab-button size=small class=\"ion-no-margin font-extra-small font-bold\">\n        <span class=\"center\">{{discount}}</span>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\">\n    <ion-icon [name]=\"getStarIconName(1)\" [color]=\"getStarIconColor(1)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(2)\" [color]=\"getStarIconColor(2)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(3)\" [color]=\"getStarIconColor(3)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(4)\" [color]=\"getStarIconColor(4)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(5)\" [color]=\"getStarIconColor(5)\"></ion-icon>\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5\">\n    <ion-text (click)=\"openProductPage()\"> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n  <div class=\"padding-bottom-5 padding-horizontal-5\" *ngIf=\"data.product_type=='simple'\">\n    <ion-chip outline=true [color]=\"(config.darkModeBool)?'light':'primary'\" class=\"quantity-chip ion-no-margin\"\n      *ngIf=\"!outOfStock\">\n      <ion-icon name=\"remove-outline\" (click)=\"quantityMinus()\"></ion-icon>\n      <ion-label class=\"font-bold font-small\">{{getQuantity()}}</ion-label>\n      <ion-icon name=\"add-outline\" (click)=\"quantityPlus()\"></ion-icon>\n    </ion-chip>\n    <ion-label class=\"font-medium ion-text-capitalize\" color=\"danger\" *ngIf=\"outOfStock\">{{'out of stock'|translate}}\n    </ion-label>\n  </div>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    4043:
    /*!*******************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style28/product-card-style28.component.html ***!
      \*******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\"\n      (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n\n      <ion-badge *ngIf=\"data.is_featured!=0\" color=\"dark\" class=\"font-extra-small font-bold\">{{'featured'|translate}}\n      </ion-badge>\n    </ion-fab>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"right-fab\" id=\"hearticon\">\n      <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 app-tex-color\"\n    (click)=\"openProductPage()\">\n    <ion-text> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n  <ion-row class=\"avenir-next-bold\">\n    <ion-col class=\"ion-no-padding\">\n      <!-- <div *ngIf=\"data.product_type=='variable'\">\n        <ion-row class=\"ion-no-margin ion-text-start\">\n          <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n            <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n              - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </div> -->\n      <!-- *ngIf=\"data.product_type=='simple'\" -->\n      <div>\n        <ion-row *ngIf=\"data.product_discount_price!=0\" class=\"ion-text-start\">\n          <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n            <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n          </ion-col>\n          <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n            <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"data.product_discount_price==0\" class=\"ion-text-start\">\n          <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n            <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n    <ion-col class=\"ion-no-padding ion-text-center\" size=3>\n      <ion-icon color=\"primary\" class=\"cart-icon\" name=\"bag\" (click)=\"addToCart()\"></ion-icon>\n\n\n      <!-- <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding\" expand=\"block\"\n        color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='simple' && !outOfStock\">\n        {{'add to cart'|translate}}</ion-button>\n      <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding \" expand=\"block\"\n        color=\"danger\" *ngIf=\"data.product_type=='simple' && outOfStock\">\n        {{'out of stock'|translate}}</ion-button>\n\n      <ion-button size=small class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding\" expand=\"block\"\n        color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='variable'\">\n        {{'details'|translate}}\n      </ion-button> -->\n    </ion-col>\n  </ion-row>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    4816:
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style2/product-card-style2/product-card-style2.component.html ***!
      \*************************************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n\n      <ion-badge *ngIf=\"data.is_featured!=0\" color=\"dark\" class=\"font-extra-small font-bold\">{{'featured'|translate}}\n      </ion-badge>\n    </ion-fab>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"right-fab\" id=\"hearticon\">\n      <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\"\n    (click)=\"openProductPage()\">\n    {{data.detail[0].title}}\n  </ion-card-content>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    44866:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style3/product-card-style3.component.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n\n      <ion-badge *ngIf=\"data.is_featured!=0\" color=\"dark\" class=\"font-extra-small font-bold\">{{'featured'|translate}}\n      </ion-badge>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\"\n    (click)=\"openProductPage()\">\n    {{data.detail[0].title}}\n  </ion-card-content>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    22085:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style4/product-card-style4.component.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n\n      <ion-badge *ngIf=\"data.is_featured!=0\" color=\"dark\" class=\"font-extra-small font-bold\">{{'featured'|translate}}\n      </ion-badge>\n    </ion-fab>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"right-fab\" id=\"hearticon\">\n      <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    {{data.category[0].category_detail.detail[0].name}}\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text color=\"danger\"> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    92354:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style5/product-card-style5.component.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge *ngIf=\"data.product_discount_price!=0\" color=\"danger\" class=\"font-extra-small font-bold\">\n        {{'sale'|translate}}</ion-badge>\n\n      <ion-badge *ngIf=\"data.is_featured!=0\" color=\"dark\" class=\"font-extra-small font-bold\">{{'featured'|translate}}\n      </ion-badge>\n    </ion-fab>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"right-fab\" id=\"hearticon\">\n      <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    <ion-icon [name]=\"getStarIconName(1)\" [color]=\"getStarIconColor(1)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(2)\" [color]=\"getStarIconColor(2)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(3)\" [color]=\"getStarIconColor(3)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(4)\" [color]=\"getStarIconColor(4)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(5)\" [color]=\"getStarIconColor(5)\"></ion-icon>\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text color=\"danger\"> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    880:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style6/product-card-style6.component.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge color=\"dark\" class=\"font-extra-small font-bold\">\n\n        <!-- <div *ngIf=\"data.product_type=='variable'\">\n          {{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}\n        </div> -->\n        <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n          <div *ngIf=\"data.product_discount_price!=0\">\n            <ion-text class=\"line-through truncate\">{{data.product_price|curency}}</ion-text>\n            &nbsp;\n            <ion-text class=\"truncate\">{{data.product_discount_price|curency}}</ion-text>\n          </div>\n          <div *ngIf=\"data.product_discount_price==0\">\n            {{data.product_price|curency}}\n          </div>\n        </div>\n        <!-- <div>{{getPrice()}}</div> -->\n      </ion-badge>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    {{data.category[0].category_detail.detail[0].name}}\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text color=\"danger\"> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    36246:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style7/product-card-style7.component.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-icon [color]=\"getHeartColor()\" name=\"heart-circle-outline\" (click)=\"clickWishIcon()\"></ion-icon>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5 ion-text-center\">\n    <ion-icon [name]=\"getStarIconName(1)\" [color]=\"getStarIconColor(1)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(2)\" [color]=\"getStarIconColor(2)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(3)\" [color]=\"getStarIconColor(3)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(4)\" [color]=\"getStarIconColor(4)\"></ion-icon>\n    <ion-icon [name]=\"getStarIconName(5)\" [color]=\"getStarIconColor(5)\"></ion-icon>\n  </ion-card-content>\n  <ion-card-content class=\"bold font-medium truncate ion-no-padding padding-horizontal-5 ion-text-center\"\n    (click)=\"openProductPage()\">\n    <ion-text color=\"danger\"> {{data.detail[0].title}}</ion-text>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    86844:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style8/product-card-style8.component.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\" (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\" *ngIf=\"data.product_discount_price!=0 && discount\">\n      <ion-fab-button size=small class=\"ion-no-margin font-extra-small font-bold\">\n        <span class=\"center\">{{discount}}</span>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\"\n    (click)=\"openProductPage()\">\n    {{data.detail[0].title}}\n  </ion-card-content>\n  <!-- <div *ngIf=\"data.product_type=='variable'\">\n    <ion-row class=\"ion-no-margin\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div> -->\n  <!-- *ngIf=\"data.product_type=='simple'\" -->\n  <div>\n    <ion-row *ngIf=\"data.product_discount_price!=0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_discount_price|curency}}</ion-text>\n      </ion-col>\n      <ion-col class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text class=\"line-through\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"data.product_discount_price==0\">\n      <ion-col size=\"auto\" class=\"font-medium truncate ion-no-padding padding-horizontal-5 padding-bottom-5\">\n        <ion-text color=\"danger\">{{data.product_price|curency}}</ion-text>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-button size=small\n    class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-5 margin-bottom-10\"\n    expand=\"block\" color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='simple' && !outOfStock\">\n    {{'add to cart'|translate}}</ion-button>\n  <ion-button size=small\n    class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-5 margin-bottom-10\"\n    expand=\"block\" color=\"danger\" *ngIf=\"data.product_type=='simple' && outOfStock\">\n    {{'out of stock'|translate}}</ion-button>\n\n  <ion-button size=small\n    class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-5 margin-bottom-10\"\n    expand=\"block\" color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='variable'\">\n    {{'details'|translate}}\n  </ion-button>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    87496:
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card-styles/product-card-style9/product-card-style9.component.html ***!
      \*****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-card *ngIf=\"data!=1\">\n  <div class=\"card_image_container\">\n    <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+data.product_gallary.gallary_name}}\"\n      (click)=\"openProductPage()\">\n    </ion-img>\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\" class=\"left-fab\">\n      <ion-badge color=\"dark\" class=\"font-extra-small font-bold\">\n\n        <!-- <div *ngIf=\"data.product_type=='variable'\">\n          {{data.product_combination[0].price|curency}}\n          - {{data.product_combination[data.product_combination.length-1].price|curency}}\n        </div> -->\n        <!-- *ngIf=\"data.product_type=='simple'\" -->\n        <div>\n          <div *ngIf=\"data.product_discount_price!=0\">\n            <ion-text class=\"line-through truncate\">{{data.product_price|curency}}</ion-text>\n            &nbsp;\n            <ion-text class=\"truncate\">{{data.product_discount_price|curency}}</ion-text>\n          </div>\n          <div *ngIf=\"data.product_discount_price==0\">\n            {{data.product_price|curency}}\n          </div>\n        </div>\n        <!-- <div>{{getPrice()}}</div> -->\n      </ion-badge>\n    </ion-fab>\n  </div>\n  <ion-card-content class=\"bold font-small truncate ion-no-padding padding-horizontal-5 padding-top-5\"\n    (click)=\"openProductPage()\">\n    {{data.detail[0].title}}\n  </ion-card-content>\n  <ion-button size=small\n    class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-5 margin-bottom-10\"\n    expand=\"block\" color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='simple' && !outOfStock\">\n    {{'add to cart'|translate}}</ion-button>\n  <ion-button size=small\n    class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-5 margin-bottom-10\"\n    expand=\"block\" color=\"danger\" *ngIf=\"data.product_type=='simple' && outOfStock\">\n    {{'out of stock'|translate}}</ion-button>\n\n  <ion-button size=small\n    class=\"font-medium ion-text-capitalize ion-no-margin ion-no-padding padding-horizontal-5 margin-bottom-10\"\n    expand=\"block\" color=\"primary\" (click)=\"addToCart()\" *ngIf=\"data.product_type=='variable'\">\n    {{'details'|translate}}\n  </ion-button>\n</ion-card>\n\n<ion-card *ngIf=\"data==1\">\n  <div class=\"margin-5\">\n    <ion-skeleton-text animated class=\"borders-radius-0 ion-no-margin\" style=\"height: 150px\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 90%\">\n    </ion-skeleton-text>\n    <ion-skeleton-text animated style=\"width: 50%\">\n    </ion-skeleton-text>\n  </div>\n</ion-card>";
      /***/
    },

    /***/
    77527:
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/product-card/product-card.component.html ***!
      \*******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div [class.round-borders]=\"config.roundBordersBool\" class=\"product-card-component\" [appAnimation]=\"'fade'\" #productRef>\n    <app-product-card-style1 *ngIf=\"config.productCardStyleNumber==1\" [data]=\"data\" (onClickProduct)=\"openProductPage()\"\n        (onClickWishIcon)=\"addRemoveWishProduct()\" [wishListStatus]=\"isInWishList()\" [discount]=\"productDiscount()\">\n    </app-product-card-style1>\n\n    <app-product-card-style2 *ngIf=\"config.productCardStyleNumber==2\" [data]=\"data\" (onClickProduct)=\"openProductPage()\"\n        (onClickWishIcon)=\"addRemoveWishProduct()\" [wishListStatus]=\"isInWishList()\">\n    </app-product-card-style2>\n\n    <app-product-card-style3 *ngIf=\"config.productCardStyleNumber==3\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\">\n    </app-product-card-style3>\n\n    <app-product-card-style4 *ngIf=\"config.productCardStyleNumber==4\" [data]=\"data\" (onClickProduct)=\"openProductPage()\"\n        (onClickWishIcon)=\"addRemoveWishProduct()\" [wishListStatus]=\"isInWishList()\">\n    </app-product-card-style4>\n\n    <app-product-card-style5 *ngIf=\"config.productCardStyleNumber==5\" [data]=\"data\" (onClickProduct)=\"openProductPage()\"\n        (onClickWishIcon)=\"addRemoveWishProduct()\" [wishListStatus]=\"isInWishList()\">\n    </app-product-card-style5>\n\n    <app-product-card-style6 *ngIf=\"config.productCardStyleNumber==6\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\">\n    </app-product-card-style6>\n\n\n    <app-product-card-style7 *ngIf=\"config.productCardStyleNumber==7\" [data]=\"data\" (onClickProduct)=\"openProductPage()\"\n        (onClickWishIcon)=\"addRemoveWishProduct()\" [wishListStatus]=\"isInWishList()\">\n    </app-product-card-style7>\n\n\n    <app-product-card-style8 *ngIf=\"config.productCardStyleNumber==8\" [data]=\"data\" (onClickProduct)=\"openProductPage()\"\n        [outOfStock]=\"enableOutOFStockButtonBool\" (onClickAddToCart)=\"addToCart()\">\n    </app-product-card-style8>\n\n    <app-product-card-style9 *ngIf=\"config.productCardStyleNumber==9\" [data]=\"data\" (onClickProduct)=\"openProductPage()\"\n        [outOfStock]=\"enableOutOFStockButtonBool\" (onClickAddToCart)=\"addToCart()\">\n    </app-product-card-style9>\n\n    <app-product-card-style10 *ngIf=\"config.productCardStyleNumber==10\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\" [outOfStock]=\"enableOutOFStockButtonBool\" (onClickAddToCart)=\"addToCart()\">\n    </app-product-card-style10>\n\n\n    <app-product-card-style11 *ngIf=\"config.productCardStyleNumber==11\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\">\n    </app-product-card-style11>\n\n\n    <app-product-card-style12 *ngIf=\"config.productCardStyleNumber==12\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" [outOfStock]=\"enableOutOFStockButtonBool\" (onClickAddToCart)=\"addToCart()\">\n    </app-product-card-style12>\n\n\n    <app-product-card-style13 *ngIf=\"config.productCardStyleNumber==13\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\">\n    </app-product-card-style13>\n\n\n    <app-product-card-style14 *ngIf=\"config.productCardStyleNumber==14\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\">\n    </app-product-card-style14>\n\n\n    <app-product-card-style15 *ngIf=\"config.productCardStyleNumber==15\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\">\n    </app-product-card-style15>\n\n    <app-product-card-style16 *ngIf=\"config.productCardStyleNumber==16\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" [outOfStock]=\"enableOutOFStockButtonBool\" (onClickAddToCart)=\"addToCart()\">\n    </app-product-card-style16>\n\n\n    <app-product-card-style17 *ngIf=\"config.productCardStyleNumber==17\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\">\n    </app-product-card-style17>\n    <app-product-card-style18 *ngIf=\"config.productCardStyleNumber==18\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" [outOfStock]=\"enableOutOFStockButtonBool\" (onClickAddToCart)=\"addToCart()\">\n    </app-product-card-style18>\n\n    <app-product-card-style19 *ngIf=\"config.productCardStyleNumber==19\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\" [outOfStock]=\"enableOutOFStockButtonBool\" (onClickAddToCart)=\"addToCart()\">\n    </app-product-card-style19>\n    <app-product-card-style20 *ngIf=\"config.productCardStyleNumber==20\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\">\n    </app-product-card-style20>\n\n    <app-product-card-style21 *ngIf=\"config.productCardStyleNumber==21\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\">\n    </app-product-card-style21>\n\n\n    <app-product-card-style22 *ngIf=\"config.productCardStyleNumber==22\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\">\n    </app-product-card-style22>\n\n\n    <app-product-card-style23 *ngIf=\"config.productCardStyleNumber==23\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" [outOfStock]=\"enableOutOFStockButtonBool\" (onClickAddToCart)=\"addToCart()\">\n    </app-product-card-style23>\n\n    <app-product-card-style27 *ngIf=\"config.productCardStyleNumber==24\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickQuantityMinus)=\"quantityMinus()\"\n        (onClickQuantityPlus)=\"quantityPlus()\" [outOfStock]=\"enableOutOFStockButtonBool\" [discount]=\"productDiscount()\">\n    </app-product-card-style27>\n\n    <app-product-card-style24 *ngIf=\"config.productCardStyleNumber==25\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\" (onClickQuantityMinus)=\"quantityMinus()\"\n        (onClickQuantityPlus)=\"quantityPlus()\" [outOfStock]=\"enableOutOFStockButtonBool\">\n    </app-product-card-style24>\n    <app-product-card-style25 *ngIf=\"config.productCardStyleNumber==26\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\" (onClickQuantityMinus)=\"quantityMinus()\"\n        (onClickQuantityPlus)=\"quantityPlus()\" [outOfStock]=\"enableOutOFStockButtonBool\">\n    </app-product-card-style25>\n    <app-product-card-style26 *ngIf=\"config.productCardStyleNumber==27\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\" (onClickQuantityMinus)=\"quantityMinus()\"\n        (onClickQuantityPlus)=\"quantityPlus()\" [outOfStock]=\"enableOutOFStockButtonBool\">\n    </app-product-card-style26>\n\n    <app-product-card-style28 *ngIf=\"config.productCardStyleNumber==28\" [data]=\"data\"\n        (onClickProduct)=\"openProductPage()\" (onClickWishIcon)=\"addRemoveWishProduct()\"\n        [wishListStatus]=\"isInWishList()\" (onClickAddToCart)=\"addToCart()\">\n    </app-product-card-style28>\n\n</div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_components_product-card_product-card_module_ts-es5.js.map