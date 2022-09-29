(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_reviews_reviews_module_ts"], {
    /***/
    39764:
    /*!*******************************************!*\
      !*** ./src/app/reviews/reviews.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReviewsPageModule": function ReviewsPageModule() {
          return (
            /* binding */
            _ReviewsPageModule
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


      var _reviews_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reviews.page */
      20133);
      /* harmony import */


      var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/pipes/pipes.module */
      58905);
      /* harmony import */


      var src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/components/no-record-found/no-record-found.module */
      34334);

      var routes = [{
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_0__.ReviewsPage
      }];

      var _ReviewsPageModule = /*#__PURE__*/_createClass(function ReviewsPageModule() {
        _classCallCheck(this, ReviewsPageModule);
      });

      _ReviewsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule, src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_2__.NoRecordFoundModule],
        declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_0__.ReviewsPage]
      })], _ReviewsPageModule);
      /***/
    },

    /***/
    20133:
    /*!*****************************************!*\
      !*** ./src/app/reviews/reviews.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReviewsPage": function ReviewsPage() {
          return (
            /* binding */
            _ReviewsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_reviews_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./reviews.page.html */
      6161);
      /* harmony import */


      var _reviews_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reviews.page.scss */
      45550);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/services/config/config.service */
      83681);
      /* harmony import */


      var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/services/loading/loading.service */
      45386);
      /* harmony import */


      var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/services/shared-data/shared-data.service */
      81341);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/services/app-http/app-http.service */
      20688);
      /* harmony import */


      var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/services/app-log/app-log.service */
      88955);

      var _ReviewsPage = /*#__PURE__*/function () {
        function ReviewsPage(navCtrl, activatedRoute, applicationRef, config, appHttpService, modalCtrl, loading, shared, appLogService) {
          _classCallCheck(this, ReviewsPage);

          this.navCtrl = navCtrl;
          this.activatedRoute = activatedRoute;
          this.applicationRef = applicationRef;
          this.config = config;
          this.appHttpService = appHttpService;
          this.modalCtrl = modalCtrl;
          this.loading = loading;
          this.shared = shared;
          this.appLogService = appLogService;
          this.pageNumber = 1;
          this.reviewsArray = [];
          this.r1 = null;
          this.r2 = null;
          this.r3 = null;
          this.r4 = null;
          this.r5 = null;
          this.httpLoading = false;
          this.id = this.activatedRoute.snapshot.paramMap.get('id');
        }

        _createClass(ReviewsPage, [{
          key: "pullRefresh",
          value: function pullRefresh() {
            this.pageNumber = 1;
            this.getProductReviews();
          }
        }, {
          key: "showHideContent",
          value: function showHideContent(id, type) {
            var element = document.getElementById(id);

            if (type == "show") {
              document.getElementById("a" + id).style.whiteSpace = "normal";
              document.getElementById("more" + id).style.display = "none";
              document.getElementById("less" + id).style.display = "unset";
            } else {
              document.getElementById("a" + id).style.whiteSpace = "nowrap";
              document.getElementById("more" + id).style.display = "unset";
              document.getElementById("less" + id).style.display = "none";
            }
          } //===============================================================================================================================

        }, {
          key: "getProductReviews",
          value: function getProductReviews() {
            var _this = this;

            var url = "review";
            url += "?limit=" + this.config.perPageNumber;
            url += "&product_id=" + this.id;
            url += "&language_id=" + this.config.languageIdNumber;
            url += "&customer=1";
            url += "&currency=" + this.config.currencyIdNumber;

            if (this.pageNumber == 1) {
              this.httpLoading = true;
            }

            this.appHttpService.getHttp(url, true).then(function (data) {
              var dat = data;

              _this.infinite.complete();

              if (_this.pageNumber == 1) {
                _this.reviewsArray = [];
                _this.httpLoading = false;
              }

              if (dat.length != 0) {
                var _iterator = _createForOfIteratorHelper(dat),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var value = _step.value;

                    _this.reviewsArray.push(value);
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

              _this.calculateAll();
            });
          } //===============================================================================================================================

        }, {
          key: "openReviewsPage",
          value: function openReviewsPage() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.navCtrl.navigateForward("/add-review/" + this.id);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //===============================================================================================================================
          // <!-- 2.0 updates -->

        }, {
          key: "totalRating",
          value: function totalRating() {
            var total = 0;

            var _iterator2 = _createForOfIteratorHelper(this.reviewsArray),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var value = _step2.value;
                total = total + value.rating;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            var result = total;
            if (total == 0) result = 0;
            return result;
          }
        }, {
          key: "calculateAll",
          value: function calculateAll() {
            var total2 = 0;

            var _iterator3 = _createForOfIteratorHelper(this.reviewsArray),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var value = _step3.value;
                total2 = total2 + value.rating;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            this.average = total2 / this.reviewsArray.length;
            if (this.reviewsArray.length == 0) this.average = 0;
            var r1 = 0,
                r2 = 0,
                r3 = 0,
                r4 = 0,
                r5 = 0;
            var total = this.reviewsArray.length;

            var _iterator4 = _createForOfIteratorHelper(this.reviewsArray),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _value = _step4.value;
                if (_value.rating == 1) r1++;
                if (_value.rating == 2) r2++;
                if (_value.rating == 3) r3++;
                if (_value.rating == 4) r4++;
                if (_value.rating == 5) r5++;
                console.log(_value.rating);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            console.log();
            this.r1 = 100 / total * r1;
            if (r1 == 0) this.r1 = 0;
            this.r2 = 100 / total * r2;
            if (r2 == 0) this.r2 = 0;
            this.r3 = 100 / total * r3;
            if (r3 == 0) this.r3 = 0;
            this.r4 = 100 / total * r4;
            if (r4 == 0) this.r4 = 0;
            this.r5 = 100 / total * r5;
            if (r5 == 0) this.r5 = 0;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.pullRefresh();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          }
        }]);

        return ReviewsPage;
      }();

      _ReviewsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ApplicationRef
        }, {
          type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService
        }, {
          type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController
        }, {
          type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService
        }, {
          type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService
        }, {
          type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_6__.AppLogService
        }];
      };

      _ReviewsPage.propDecorators = {
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
      _ReviewsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-reviews',
        template: _raw_loader_reviews_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reviews_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ReviewsPage);
      /***/
    },

    /***/
    45550:
    /*!*******************************************!*\
      !*** ./src/app/reviews/reviews.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".review-page {\n  background-color: white;\n}\n\n.review-page .less {\n  display: none;\n}\n\n.review-page .rating-gird h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.review-page .rating-gird h1 {\n  font-size: 30px;\n  margin-top: 0;\n  text-align: center;\n}\n\n.review-page .rating-gird h3 {\n  color: var(--ion-color-secondary);\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.review-page .rating-gird ul {\n  padding-left: 15px;\n  margin-bottom: 0;\n  border-left: 1px solid #ccc;\n}\n\n.review-page .rating-gird ul li {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  list-style: none;\n  position: relative;\n}\n\n.review-page .rating-gird ul li .icon {\n  margin-left: 5px;\n}\n\n.review-page .rating-gird ul li .block {\n  height: 11px;\n  display: inline-block;\n  margin-left: 14px;\n  position: relative;\n  z-index: 2;\n}\n\n.review-page .rating-gird ul li::after {\n  content: \"\";\n  background-color: #f4f4f4;\n  height: 11px;\n  width: calc(100% - 36px);\n  position: absolute;\n  left: 36px;\n  z-index: 1;\n  top: 5px;\n}\n\n.review-page .rating-gird .button {\n  min-height: 45px;\n}\n\n.review-page .rating-users .item {\n  background-color: transparent;\n  align-items: flex-start;\n}\n\n.review-page .rating-users .item ion-avatar {\n  margin-top: 10px;\n}\n\n.review-page .rating-users .item h2 {\n  font-weight: bold;\n}\n\n.review-page .rating-users .item p p {\n  margin-top: 2px;\n  white-space: normal;\n}\n\n.review-page .animate {\n  -webkit-animation: fadeInRight 0.75s;\n          animation: fadeInRight 0.75s;\n}\n\n.review-page .stars-outer {\n  display: inline-block;\n  position: relative;\n  font-size: 15px;\n}\n\n.review-page .stars-outer::before {\n  content: \"\\2606\\2606\\2606\\2606\\2606\";\n  color: #ccc;\n}\n\n.review-page .stars-outer .stars-inner {\n  font-size: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.review-page .stars-outer .stars-inner::before {\n  content: \"\\2605\\2605\\2605\\2605\\2605\";\n  color: #f8ce0b;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksdUJBQXVCO0FBRjNCOztBQUZBO0VBRU0sYUFBYTtBQUluQjs7QUFOQTtFQVFRLGFBQWE7RUFDYixnQkFBZ0I7QUFFeEI7O0FBWEE7RUFhUSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUUxQjs7QUFqQkE7RUFtQlEsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFFMUI7O0FBdkJBO0VBd0JRLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBR25DOztBQTdCQTtFQTRCVSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBSzVCOztBQXJDQTtFQWtDWSxnQkFBZ0I7QUFPNUI7O0FBekNBO0VBcUNZLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBUXRCOztBQWpEQTtFQTRDWSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsUUFBUTtBQVNwQjs7QUE1REE7RUF3RFEsZ0JBQWdCO0FBUXhCOztBQWhFQTtFQTZEUSw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBTy9COztBQXJFQTtFQWlFVSxnQkFBZ0I7QUFRMUI7O0FBekVBO0VBb0VVLGlCQUFpQjtBQVMzQjs7QUE3RUE7RUF3RVksZUFBZTtFQUNmLG1CQUFtQjtBQVMvQjs7QUFsRkE7RUFnRk0sb0NBQTRCO1VBQTVCLDRCQUE0QjtBQU1sQzs7QUF0RkE7RUFvRk0scUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBTXJCOztBQTVGQTtFQXdGUSxvQ0FBb0M7RUFDcEMsV0FBVztBQVFuQjs7QUFqR0E7RUE0RlEsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFTeEI7O0FBMUdBO0VBb0dVLG9DQUFvQztFQUNwQyxjQUFjO0FBVXhCIiwiZmlsZSI6InJldmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldmlldy1wYWdlIHtcbiAgICAubGVzcyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAucmF0aW5nLWdpcmQge1xuICAgICAgaDQge1xuICAgICAgICAvL2ZvbnQtc2l6ZTogJGgyLWZvbnQtc2l6ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICAvL2ZvbnQtc2l6ZTogJGgyLWZvbnQtc2l6ZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvY2sge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGhlaWdodDogMTFweDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDM2cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgbWluLWhlaWdodDogNDVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnJhdGluZy11c2VycyB7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgXG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5hbmltYXRlIHtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluUmlnaHQgMC43NXM7XG4gICAgfVxuICBcbiAgICAuc3RhcnMtb3V0ZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXDI2MDZcXDI2MDZcXDI2MDZcXDI2MDZcXDI2MDZcIjtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICB9XG4gICAgICAuc3RhcnMtaW5uZXIge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlxcMjYwNVxcMjYwNVxcMjYwNVxcMjYwNVxcMjYwNVwiO1xuICAgICAgICAgIGNvbG9yOiAjZjhjZTBiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */";
      /***/
    },

    /***/
    6161:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'Ratings & Reviews'|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"review-page\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"pullRefresh()\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid class=\"rating-gird\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"5\">\n        <h1>{{average| number:'1.2-2'}}\n          <ion-icon name=\"star\"></ion-icon>\n        </h1>\n        <h3>{{reviewsArray.length}} {{'rating'|translate}}</h3>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ul>\n          <li>5\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r5+'%'\" style=\"background-color:green;\"></span>\n          </li>\n          <li>4\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r4+'%'\" style=\"background-color:lightgreen;\"></span>\n          </li>\n          <li>3\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r3+'%'\" style=\"background-color:yellow;\"></span>\n          </li>\n          <li>2\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r2+'%'\" style=\"background-color:orange;\"></span>\n          </li>\n          <li>1\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r1+'%'\" style=\"background-color:darkorange;\"></span>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" color=\"primary\" class=\"font-small\" (click)=\"openReviewsPage()\">{{'Rate and write a\n          review'|translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-no-record-found [data]=\"reviewsArray\" *ngIf=\"reviewsArray.length==0 && !httpLoading\">\n  </app-no-record-found>\n  <ion-list class=\"rating-users\" *ngIf=\"reviewsArray.length!=0\">\n\n    <ion-item *ngFor=\"let r of reviewsArray; let i = index\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/user.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{r.customer.customer_first_name}} {{r.customer.customer_last_name}}</h2>\n        <h3>{{r.created_at|date:'dd-MM-yyyy'}}</h3>\n        <p id=\"{{ 'a' + i }}\">\n          {{r.comment}}\n        </p>\n\n        <ion-badge class=\"ion-text-lowercase\">\n          <ion-text id=\"{{ 'more' + i }}\" (click)=\"showHideContent(i,'show')\">{{\"more\"|translate}}\n          </ion-text>\n          <ion-text id=\"{{ 'less' + i }}\" class=\"less\" (click)=\"showHideContent(i,'hide')\">\n            {{\"less\"|translate}}</ion-text>\n        </ion-badge>\n      </ion-label>\n      <div class=\"stars-outer\" slot=\"end\">\n        <div class=\"stars-inner\" [style.width]=\"(r.rating*20)+'%'\"></div>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getProductReviews()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_reviews_reviews_module_ts-es5.js.map