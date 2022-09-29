(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_products_products_module_ts"], {
    /***/
    88980:
    /*!*********************************************!*\
      !*** ./src/app/products/products.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsPageModule": function ProductsPageModule() {
          return (
            /* binding */
            _ProductsPageModule
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


      var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./products.page */
      43854);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var src_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/components/product-card/product-card.module */
      12682);
      /* harmony import */


      var src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/components/no-record-found/no-record-found.module */
      34334);

      var routes = [{
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage
      }];

      var _ProductsPageModule = /*#__PURE__*/_createClass(function ProductsPageModule() {
        _classCallCheck(this, ProductsPageModule);
      });

      _ProductsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_3__.NoRecordFoundModule, src_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__.productCardModule],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage]
      })], _ProductsPageModule);
      /***/
    },

    /***/
    43854:
    /*!*******************************************!*\
      !*** ./src/app/products/products.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsPage": function ProductsPage() {
          return (
            /* binding */
            _ProductsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./products.page.html */
      75974);
      /* harmony import */


      var _products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./products.page.scss */
      27451);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      39895);
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


      var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/app-events/app-events.service */
      43804);
      /* harmony import */


      var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/services/app-http/app-http.service */
      20688);
      /* harmony import */


      var src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/services/app-translation/app-translation.service */
      68829);
      /* harmony import */


      var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/services/app-user/app-user.service */
      53755);
      /* harmony import */


      var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/services/app-cart/app-cart.service */
      88632);
      /* harmony import */


      var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/services/app-log/app-log.service */
      88955);
      /* harmony import */


      var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/services/app-categories/app-categories.service */
      10677);

      var _ProductsPage = /*#__PURE__*/function () {
        function ProductsPage(navCtrl, activatedRoute, config, shared, appHttpService, loading, appEventsService, actionSheet, menuCtrl, appTranslationService, appCartService, appUserService, appLogService, appCategoriesService) {
          _classCallCheck(this, ProductsPage);

          this.navCtrl = navCtrl;
          this.activatedRoute = activatedRoute;
          this.config = config;
          this.shared = shared;
          this.appHttpService = appHttpService;
          this.loading = loading;
          this.appEventsService = appEventsService;
          this.actionSheet = actionSheet;
          this.menuCtrl = menuCtrl;
          this.appTranslationService = appTranslationService;
          this.appCartService = appCartService;
          this.appUserService = appUserService;
          this.appLogService = appLogService;
          this.appCategoriesService = appCategoriesService;
          this.scrollTopButton = false;
          this.products = new Array();
          this.selectedTab = 0;
          this.categoryId = this.selectedTab;
          this.categogiesSelectNumber = this.selectedTab;
          this.categoryName = '';
          this.searchString = ""; //sortArray = ['id', 'price', 'product_type', 'discount_price', 'product_status', 'product_view', 'seo_desc', 'created_at']
          // sortTypeArray = ['ASC', 'DESC']

          this.sortArray = ['newest', 'a - z', 'z - a', 'price : high - low', 'price : low - high', 'top seller', 'on sale', 'featured'];
          this.sortOrder = this.sortArray[0];
          this.sortOrderValue = "created_at";
          this.sortType = 'ASC';
          this.page = 1;
          this.applyFilter = false;
          this.filters = [];
          this.selectedFilters = [];
          this.price = {
            lower: 0,
            upper: 10000
          };
          this.maxAmount = 10000;
          this.side = "right";
          this.productView = 'grid';
          this.httpRunning = true;
          this.hidePriceRange = false;
          if (config.appDirectionString == "rtl") this.side = "left";
          var catIdParam = this.activatedRoute.snapshot.paramMap.get('id');
          var typeParam = this.activatedRoute.snapshot.paramMap.get('type');
          var searchParam = this.activatedRoute.snapshot.paramMap.get('search');

          if (catIdParam != null) {
            this.selectedTab = this.categoryId = this.categogiesSelectNumber = parseInt(catIdParam);
          }

          if (typeParam != null) {
            this.sortOrder = typeParam;
          }

          if (searchParam != null) {
            this.searchString = searchParam;
          }

          console.log(catIdParam, typeParam, searchParam);
          this.getProducts(null);
          this.getFilters(this.categoryId);
        }

        _createClass(ProductsPage, [{
          key: "removeSearchFilter",
          value: function removeSearchFilter() {
            this.searchString = "";
            this.resetProductPageCountAndScrollThenGetNewProducts();
          }
        }, {
          key: "removeAttribute",
          value: function removeAttribute(id) {
            this.addVaration({
              id: id
            }, {
              id: id
            });
            this.applyFilters();
          }
        }, {
          key: "getAttributeName",
          value: function getAttributeName(id) {
            var r = "";
            this.filters.forEach(function (x) {
              x.variations.forEach(function (y) {
                if (id == y.id) {
                  r = y.detail[0].name;
                }
              });
            });
            return r;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          }
        }, {
          key: "showSelectedFilters",
          value: function showSelectedFilters() {
            if (this.selectedFilters.length != 0) return true;else if (this.categoryId != 0) return true;else if (this.sortOrder != this.sortArray[0]) return true;else if (this.searchString != '') return true;
          }
        }, {
          key: "getProducts",
          value: function getProducts(infiniteScroll) {
            var _this = this;

            this.httpRunning = true;

            if (this.page == 1) {
              this.loading.show();
            }

            var url = "products";
            url += "?limit=" + this.config.perPageNumber;
            url += "&getCategory=1";
            url += "&getDetail=1";
            url += "&language_id=" + this.config.languageIdNumber; //url += "&productType=simple"

            url += "&currency=" + this.config.currencyIdNumber;
            url += "&stock=1";
            url += "&page=" + this.page;
            url += "&sortBy=" + this.sortOrderValue;
            url += "&sortType=" + this.sortType; //(ASC,DESC)

            if (this.searchString != "") url += "&searchParameter=" + this.searchString;
            if (this.sortOrder == "top seller") url += "&topSelling=1";
            if (this.sortOrder == "featured") url += "&isFeatured=1";
            if (this.selectedTab != 0) url += "&productCategories=" + this.selectedTab;

            if (this.applyFilter == true) {
              url += "&price_from=" + this.price.lower;
              url += "&price_to=" + this.price.upper;

              if (this.selectedFilters.length != 0) {
                url += "&variations=" + this.selectedFilters.toString();
              }
            }

            this.appHttpService.getHttp(url).then(function (data) {
              _this.httpRunning = false; // console.log(data.product_data.length + "   " + this.page);

              _this.infinite.complete();

              if (_this.page == 1) {
                _this.products = new Array();

                _this.loading.hide();

                _this.scrollToTop();
              }

              _this.page++;

              var _iterator = _createForOfIteratorHelper(data),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var value = _step.value;

                  _this.products.push(value);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (data.length == 0) {
                _this.infinite.disabled = true;
              }
            });
          } //changing tab

        }, {
          key: "changeTab",
          value: function changeTab(c) {
            if (c == this.categoryId) return;
            console.log(c);
            this.applyFilter = false;
            this.infinite.disabled = false;
            this.page = 1;
            this.categogiesSelectNumber = this.categoryId = this.selectedTab = c;
            console.log(this.categoryId); //this.getProducts(null);

            this.removeFilters(); //this.getFilters(this.selectedTab);
          } //============================================================================================  
          //getting countries from server

        }, {
          key: "getFilters",
          value: function getFilters(id) {
            var _this2 = this;

            var url = "attributes";
            url += "?limit=" + 1000;
            url += "&language_id=" + this.config.languageIdNumber;
            url += "&currency=" + this.config.currencyIdNumber;
            url += "&getVariation=1";
            url += "&getVariationByLarguage=1";
            this.appHttpService.getHttp(url).then(function (data) {
              _this2.filters = data;
            });
          }
        }, {
          key: "selectedBadge",
          value: function selectedBadge(att, v) {
            var attribute = att.detail[0].name;
            var valueName = v.detail[0].name;
            var valueId = v.id;
            var found = 0;
            this.selectedFilters.forEach(function (value, index) {
              if (value == valueId) {
                found++;
              }
            });

            if (found == 0) {
              return "light";
            } else {
              return "primary";
            }
          }
        }, {
          key: "addVaration",
          value: function addVaration(att, v) {
            var _this3 = this;

            // let attribute = att.detail[0].name
            // let valueName = v.detail[0].name
            var valueId = v.id;
            var found = 0;
            this.selectedFilters.forEach(function (value, index) {
              //value.name == attribute && value.value == valueName && value.id == valueId
              if (value == valueId) {
                _this3.selectedFilters.splice(index, 1);

                found++;
              }
            }); //{ 'name': attribute, 'value': valueName, 'id': valueId }

            if (found == 0) this.selectedFilters.push(valueId); //console.log(this.selectedFilters)
          }
        }, {
          key: "applyFilters",
          value: function applyFilters() {
            this.applyFilter = true;
            this.resetProductPageCountAndScrollThenGetNewProducts();
            this.menuCtrl.close("menu2");
          }
        }, {
          key: "resetFilters",
          value: function resetFilters() {
            this.getFilters(this.selectedTab);
            this.menuCtrl.close("menu2");
          }
        }, {
          key: "removeFilters",
          value: function removeFilters() {
            this.selectedFilters = [];
            this.applyFilter = false;
            this.menuCtrl.close("menu2");
            this.resetProductPageCountAndScrollThenGetNewProducts();
            this.getFilters(this.selectedTab);
          }
        }, {
          key: "resetProductPageCountAndScrollThenGetNewProducts",
          value: function resetProductPageCountAndScrollThenGetNewProducts() {
            this.page = 1;
            this.infinite.disabled = false;
            this.getProducts(null);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {}
        }, {
          key: "getSortProducts",
          value: function getSortProducts(value) {
            //console.log(value);
            if (value == this.sortOrder) return 0;else {
              this.sortOrder = value;

              if (this.sortOrder == "newest") {
                this.sortOrderValue = 'created_at';
                this.sortType = "ASC";
              }

              if (this.sortOrder == "price : high - low") {
                this.sortOrderValue = 'price';
                this.sortType = "DESC";
              }

              if (this.sortOrder == "price : low - high") {
                this.sortOrderValue = 'price';
                this.sortType = "ASC";
              }

              if (this.sortOrder == "top seller") {
                this.sortOrderValue = 'created_at';
                this.sortType = "ASC";
              }

              if (this.sortOrder == "on sale") {
                this.sortOrderValue = 'discount_price';
                this.sortType = "ASC";
              }

              if (this.sortOrder == "featured") {
                this.sortOrderValue = 'created_at';
                this.sortType = "ASC";
              }

              if (this.sortOrder == "a - z") {
                this.sortOrderValue = 'created_at';
                this.sortType = "ASC";
              }

              if (this.sortOrder == "z - a") {
                this.sortOrderValue = 'created_at';
                this.sortType = "DESC";
              }

              this.resetProductPageCountAndScrollThenGetNewProducts();
            } //sortArray = ['id', 'price', 'product_type', 'discount_price', 'product_status', 'product_view', 'seo_desc', 'created_at']
            // sortTypeArray = ['ASC', 'DESC']
            // sortArray = ['newest', 'a - z', 'z - a', 'price : high - low', 'price : low - high', 'top seller', 'on sale', 'featured'];
          }
        }, {
          key: "openSortBy",
          value: function openSortBy() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this4 = this;

              var buttonArray;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      buttonArray = [];
                      this.appTranslationService.translateArray(this.sortArray).then(function (res) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                          var _this5 = this;

                          var _loop, key, action;

                          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                            while (1) {
                              switch (_context2.prev = _context2.next) {
                                case 0:
                                  _loop = function _loop(key) {
                                    buttonArray.push({
                                      text: res[key],
                                      handler: function handler() {
                                        _this5.getSortProducts(key);
                                      }
                                    });
                                  };

                                  for (key in res) {
                                    _loop(key);
                                  }

                                  this.appTranslationService.translateString("Cancel").then(function (res) {
                                    return (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                                        while (1) {
                                          switch (_context.prev = _context.next) {
                                            case 0:
                                              buttonArray.push({
                                                text: res,
                                                role: 'cancel',
                                                handler: function handler() {}
                                              });

                                            case 1:
                                            case "end":
                                              return _context.stop();
                                          }
                                        }
                                      }, _callee);
                                    }));
                                  });
                                  _context2.next = 5;
                                  return this.actionSheet.create({
                                    cssClass: 'shop-action-sheet',
                                    buttons: buttonArray
                                  });

                                case 5:
                                  action = _context2.sent;
                                  _context2.next = 8;
                                  return action.present();

                                case 8:
                                case "end":
                                  return _context2.stop();
                              }
                            }
                          }, _callee2, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.menuCtrl.toggle("menu2");
          }
        }, {
          key: "changeLayout",
          value: function changeLayout() {
            if (this.productView == 'list') this.productView = "grid";else this.productView = "list";
            this.scrollToTop();
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            try {
              this.content.scrollToTop(700);
              this.scrollTopButton = false;
            } catch (error) {}
          }
        }, {
          key: "onScroll",
          value: function onScroll(e) {
            if (e.scrollTop >= 1200) this.scrollTopButton = true;
            if (e.scrollTop < 1200) this.scrollTopButton = false; //else this.scrollTopButton=false;
            //   console.log(e);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductsPage;
      }();

      _ProductsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
        }, {
          type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_6__.AppHttpService
        }, {
          type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService
        }, {
          type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__.AppEventsService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.MenuController
        }, {
          type: src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_7__.AppTranslationService
        }, {
          type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_9__.AppCartService
        }, {
          type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_8__.AppUserService
        }, {
          type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_10__.AppLogService
        }, {
          type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_11__.AppCategoriesService
        }];
      };

      _ProductsPage.propDecorators = {
        infinite: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInfiniteScroll, {
            "static": false
          }]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, {
            "static": false
          }]
        }],
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSlides, {
            "static": false
          }]
        }]
      };
      _ProductsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-products',
        template: _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProductsPage);
      /***/
    },

    /***/
    27451:
    /*!*********************************************!*\
      !*** ./src/app/products/products.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  min-height: inherit;\n}\n\nion-toolbar ion-slides ion-slide {\n  height: 56px;\n  width: auto;\n  padding-left: 10px;\n  padding-right: 10px;\n  font-size: 14px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-right-width: 0;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: transparent;\n  color: var(--ion-text-color);\n  text-transform: capitalize;\n}\n\nion-toolbar ion-slides .selected {\n  border-bottom-color: var(--ion-text-color);\n  background-color: var(accent-color);\n}\n\nion-toolbar .disable {\n  pointer-events: none;\n}\n\n.top-selection-header {\n  padding: 0;\n}\n\n.top-selection-header ion-col {\n  padding: 0;\n}\n\n.top-selection-header ion-col ion-item {\n  --min-height: auto;\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  text-align: center;\n  display: grid;\n}\n\n.top-selection-header ion-col ion-item ion-select {\n  margin: 0;\n  --padding-start: 0;\n}\n\n.top-selection-header ion-col ion-select::part(text) {\n  display: none;\n}\n\n.products-page-content {\n  --padding-start: var(--app-padding-left-right);\n  --padding-end: var(--app-padding-left-right);\n}\n\nion-badge {\n  border: 1px solid lightgray;\n}\n\n.sort-items {\n  border-radius: 5px;\n  --background: var(--ion-background-color);\n}\n\n.shop-action-sheet {\n  --color: var(--ion-text-color);\n}\n\nion-label,\nion-card-title {\n  --color: var(--ion-text-color) !important;\n  color: var(--ion-text-color) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFGQTtFQUtNLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLDBCQUEwQjtBQUNoQzs7QUFsQkE7RUFvQk0sMENBQTBDO0VBQzFDLG1DQUFtQztBQUV6Qzs7QUF2QkE7RUF5Qkksb0JBQW9CO0FBRXhCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUZBO0VBS0ksVUFBVTtBQUNkOztBQU5BO0VBT00sa0JBQWE7RUFDYixrQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCxnQkFBYztFQUNkLHNCQUFvQjtFQUNwQix3QkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFHbkI7O0FBakJBO0VBZ0JRLFNBQVM7RUFDVCxrQkFBZ0I7QUFLeEI7O0FBdEJBO0VBcUJNLGFBQWE7QUFLbkI7O0FBQUE7RUFFRSw4Q0FBZ0I7RUFDaEIsNENBQWM7QUFFaEI7O0FBQ0E7RUFDRSwyQkFBMkI7QUFFN0I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUNBQWE7QUFFZjs7QUFDQTtFQUNFLDhCQUFRO0FBRVY7O0FBQ0E7O0VBRUUseUNBQVE7RUFDUix1Q0FBdUM7QUFFekMiLCJmaWxlIjoicHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICBpb24tc2xpZGVzIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgICAuc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKGFjY2VudC1jb2xvcik7XG4gICAgfVxuICB9XG4gIC5kaXNhYmxlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4udG9wLXNlbGVjdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICAvL3BhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSArIDIwcHgpO1xuICAvL3BhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCkgKyAyMHB4KTtcbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLW1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgaW9uLXNlbGVjdCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi5wcm9kdWN0cy1wYWdlLWNvbnRlbnQge1xuICAvLy0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xufVxuXG5pb24tYmFkZ2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbi5zb3J0LWl0ZW1zIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnNob3AtYWN0aW9uLXNoZWV0IHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuXG5pb24tbGFiZWwsXG5pb24tY2FyZC10aXRsZSB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    75974:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'shop'|translate}} </ion-title>\n    <ion-icon class=\"header-icon\" slot=\"end\" name=\"bag-outline\" (click)=\"appCartService.openCartPage()\"></ion-icon>\n    <ion-badge color=\"danger\" class=\"cart-badge\"><span class=\"center\">{{appCartService.cartTotalItems()}}</span>\n    </ion-badge>\n  </ion-toolbar>\n</ion-header>\n<ion-row class=\"top-selection-header variable-background-color\">\n  <ion-col size=\"auto\">\n    <ion-item class=\"font-small ion-margin-start\" lines=none>\n      <ion-label>{{'category'|translate}}</ion-label>\n      <ion-select mode=ios [value]=\"categogiesSelectNumber\" [(ngModel)]=\"categogiesSelectNumber\"\n        okText=\"{{'ok'|translate}}\" cancelText=\"{{'cancel'|translate}}\" (ionChange)=\"changeTab(categogiesSelectNumber)\">\n        <ion-select-option [value]=\"0\">{{'all'|translate}}</ion-select-option>\n        <ion-select-option *ngFor=\"let c of appCategoriesService.allCategoriesArray\" [value]=\"c.id\">{{c.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-col>\n\n  <ion-col size=\"auto\">\n    <ion-item class=\"font-small ion-margin-start\" lines=none (click)=\"openSortBy()\">\n      <ion-label>{{'sort'|translate}}</ion-label>\n      <ion-select style=\"pointer-events: none;\">\n      </ion-select>\n    </ion-item>\n  </ion-col>\n  <ion-col></ion-col>\n  <ion-col size=2>\n    <ion-item class=\"font-small\" lines=none (click)=\"toggleMenu()\">\n      <ion-label class=\"ion-text-end margin-right-5\">{{'filter'|translate}}</ion-label>\n      <ion-icon class=\"font-extra-small\" name=\"funnel-outline\"></ion-icon>\n    </ion-item>\n  </ion-col>\n</ion-row>\n<ion-row class=\"padding-top-10 ion-padding-horizontal app-background-color\" *ngIf=\"showSelectedFilters()\">\n\n  <ion-badge color=\"light\" class=\"font-extra-small ion-margin-end margin-bottom-10\" *ngIf=\"searchString!=''\"\n    (click)=\"removeSearchFilter()\">\n    {{searchString}} <ion-icon class=\"font-extra-small\" name=\"close\">\n    </ion-icon>\n  </ion-badge>\n  <ion-badge color=\"light\" class=\"font-extra-small ion-margin-end margin-bottom-10\" *ngIf=\"categoryId!=0\"\n    (click)=\"changeTab(0)\">\n    {{appCategoriesService.getCategoryName(categoryId)}} <ion-icon class=\"font-extra-small\" name=\"close\">\n    </ion-icon>\n  </ion-badge>\n  <ion-badge color=\"light\" class=\"font-extra-small ion-margin-end margin-bottom-10\" *ngIf=\"sortOrder!=sortArray[0]\"\n    (click)=\"getSortProducts(sortArray[0])\">\n    {{sortOrder}} <ion-icon class=\"font-extra-small\" name=\"close\">\n    </ion-icon>\n  </ion-badge>\n  <ion-badge color=\"light\" [class.hide-content]=\"!applyFilter\" class=\"font-extra-small ion-margin-end margin-bottom-10\"\n    *ngFor=\"let f of selectedFilters\" (click)=\"removeAttribute(f)\">\n    {{getAttributeName(f)}} <ion-icon class=\"font-extra-small\" name=\"close\">\n    </ion-icon>\n  </ion-badge>\n</ion-row>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\" id=\"productContent\" class=\"products-page-content\">\n  <app-no-record-found [data]=\"products\" *ngIf=\"products.length==0 && !httpRunning\"></app-no-record-found>\n  <ion-grid class=\"bottom-products-grid ion-no-padding margin-top-10\" *ngIf=\"productView=='grid'\">\n    <ion-row>\n      <ion-col size=\"6\" class=\"padding-5\" *ngFor=\"let p of products\">\n        <app-product-card [data]=\"p\"></app-product-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- infinite scroll -->\n  <ion-infinite-scroll threshold=\"10px\" #infinite (ionInfinite)=\"getProducts($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<ion-fab vertical=\"bottom\" horizontal=\"end\" *ngIf=\"scrollTopButton\">\n  <ion-fab-button (click)=\"scrollToTop()\">\n    <ion-icon name=\"arrow-up\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<ion-menu side=\"end\" menuId=\"menu2\" contentId=\"productContent\">\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar class=\"ion-no-padding\">\n      <ion-buttons slot=\"end\">\n        <ion-button slot=\"icon-only\" (click)=\"toggleMenu()\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title class=\"avenir-next-bold font-medium ion-padding-horizontal\">{{\"Filters\"|translate}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"side-menu ion-no-padding variable-background-color\">\n    <div *ngIf=\"!hidePriceRange\" class=\"ion-no-margin variable-background-color\">\n      <ion-card-header class=\"ion-no-padding ion-padding-horizontal\">\n        <ion-card-title class=\"font-small\">{{'price'| translate}}</ion-card-title>\n      </ion-card-header>\n      <ion-item lines=none>\n        <ion-range dualKnobs=\"true\" class=\"ion-no-padding\" [(ngModel)]=\"price\" [min]=\"0\" [max]=\"maxAmount\">\n          <ion-label slot=\"start\" class=\"font-small\">{{price.lower}}</ion-label>\n          <ion-label slot=\"end\" class=\"font-small\">{{price.upper}}</ion-label>\n        </ion-range>\n      </ion-item>\n    </div>\n\n    <div *ngIf=\"filters.length>0\">\n      <div class=\"ion-no-margin variable-background-color\">\n        <ion-card-content>\n          <ion-row class=\"ion-no-margin ion-text-capitalize\" *ngFor=\"let att of filters\">\n            <ion-label class=\"width-full font-small padding-vertical-10 ion-text-capitalize\" color=\"dark\">\n              {{att.detail[0].name}}\n            </ion-label>\n            <ion-row>\n              <!-- <ion-badge [color]=\"selectedBadge(att,v)\" *ngFor=\"let v of att.variations\"\n                class=\"font-small margin-right-10 font-bold-500 margin-bottom-5 padding-vertical-5 padding-horizontal-10\"\n                (click)=\"addVaration(att,v)\">\n                {{v.detail[0].name}}\n              </ion-badge> -->\n              <ion-badge [color]=\"selectedBadge(att,v)\" class=\"font-extra-small ion-margin-end margin-bottom-10\"\n                *ngFor=\"let v of att.variations\" (click)=\"addVaration(att,v)\">\n                {{v.detail[0].name}} <ion-icon class=\"font-extra-small\" *ngIf=\"selectedBadge(att,v)=='primary'\"\n                  name=\"checkmark-outline\">\n                </ion-icon>\n              </ion-badge>\n            </ion-row>\n          </ion-row>\n        </ion-card-content>\n      </div>\n    </div>\n  </ion-content>\n\n  <ion-footer class=\"ion-no-border\">\n    <ion-toolbar class=\"variable-background-color\">\n      <ion-row>\n        <ion-col size=4>\n          <ion-button (click)=\"removeFilters()\" expand=\"block\" color=\"medium\">\n            {{'Reset'| translate}}\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button (click)=\"applyFilters()\" expand=\"block\" color=\"primary\">\n            {{'Apply'| translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n</ion-menu>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_products_products_module_ts-es5.js.map