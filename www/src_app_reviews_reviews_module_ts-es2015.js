(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_reviews_reviews_module_ts"],{

/***/ 39764:
/*!*******************************************!*\
  !*** ./src/app/reviews/reviews.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsPageModule": function() { return /* binding */ ReviewsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reviews.page */ 20133);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/no-record-found/no-record-found.module */ 34334);









const routes = [
    {
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_0__.ReviewsPage
    }
];
let ReviewsPageModule = class ReviewsPageModule {
};
ReviewsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_2__.NoRecordFoundModule
        ],
        declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_0__.ReviewsPage]
    })
], ReviewsPageModule);



/***/ }),

/***/ 20133:
/*!*****************************************!*\
  !*** ./src/app/reviews/reviews.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewsPage": function() { return /* binding */ ReviewsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reviews_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reviews.page.html */ 6161);
/* harmony import */ var _reviews_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews.page.scss */ 45550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);











let ReviewsPage = class ReviewsPage {
    constructor(navCtrl, activatedRoute, applicationRef, config, appHttpService, modalCtrl, loading, shared, appLogService) {
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
    pullRefresh() {
        this.pageNumber = 1;
        this.getProductReviews();
    }
    showHideContent(id, type) {
        var element = document.getElementById(id);
        if (type == "show") {
            document.getElementById("a" + id).style.whiteSpace = "normal";
            document.getElementById("more" + id).style.display = "none";
            document.getElementById("less" + id).style.display = "unset";
        }
        else {
            document.getElementById("a" + id).style.whiteSpace = "nowrap";
            document.getElementById("more" + id).style.display = "unset";
            document.getElementById("less" + id).style.display = "none";
        }
    }
    //===============================================================================================================================
    getProductReviews() {
        let url = "review";
        url += "?limit=" + this.config.perPageNumber;
        url += "&product_id=" + this.id;
        url += "&language_id=" + this.config.languageIdNumber;
        url += "&customer=1";
        url += "&currency=" + this.config.currencyIdNumber;
        if (this.pageNumber == 1) {
            this.httpLoading = true;
        }
        this.appHttpService.getHttp(url, true).then((data) => {
            let dat = data;
            this.infinite.complete();
            if (this.pageNumber == 1) {
                this.reviewsArray = [];
                this.httpLoading = false;
            }
            if (dat.length != 0)
                for (let value of dat)
                    this.reviewsArray.push(value);
            if (dat.length < this.config.perPageNumber)
                this.infinite.disabled = true;
            this.pageNumber++;
            this.ionRefresher.complete();
            this.calculateAll();
        });
    }
    //===============================================================================================================================
    openReviewsPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward("/add-review/" + this.id);
        });
    }
    //===============================================================================================================================
    // <!-- 2.0 updates -->
    totalRating() {
        let total = 0;
        for (let value of this.reviewsArray) {
            total = total + value.rating;
        }
        let result = total;
        if (total == 0)
            result = 0;
        return result;
    }
    calculateAll() {
        let total2 = 0;
        for (let value of this.reviewsArray) {
            total2 = total2 + value.rating;
        }
        this.average = (total2 / this.reviewsArray.length);
        if (this.reviewsArray.length == 0)
            this.average = 0;
        let r1 = 0, r2 = 0, r3 = 0, r4 = 0, r5 = 0;
        let total = this.reviewsArray.length;
        for (let value of this.reviewsArray) {
            if (value.rating == 1)
                r1++;
            if (value.rating == 2)
                r2++;
            if (value.rating == 3)
                r3++;
            if (value.rating == 4)
                r4++;
            if (value.rating == 5)
                r5++;
            console.log(value.rating);
        }
        console.log();
        this.r1 = (100 / total) * r1;
        if (r1 == 0)
            this.r1 = 0;
        this.r2 = (100 / total) * r2;
        if (r2 == 0)
            this.r2 = 0;
        this.r3 = (100 / total) * r3;
        if (r3 == 0)
            this.r3 = 0;
        this.r4 = (100 / total) * r4;
        if (r4 == 0)
            this.r4 = 0;
        this.r5 = (100 / total) * r5;
        if (r5 == 0)
            this.r5 = 0;
    }
    ngOnInit() {
        this.pullRefresh();
    }
    ionViewWillEnter() {
    }
    goBack() {
        this.navCtrl.pop();
    }
};
ReviewsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ApplicationRef },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_6__.AppLogService }
];
ReviewsPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll, { static: false },] }],
    ionRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRefresher, { static: false },] }]
};
ReviewsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-reviews',
        template: _raw_loader_reviews_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reviews_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReviewsPage);



/***/ }),

/***/ 45550:
/*!*******************************************!*\
  !*** ./src/app/reviews/reviews.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".review-page {\n  background-color: white;\n}\n\n.review-page .less {\n  display: none;\n}\n\n.review-page .rating-gird h4 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.review-page .rating-gird h1 {\n  font-size: 30px;\n  margin-top: 0;\n  text-align: center;\n}\n\n.review-page .rating-gird h3 {\n  color: var(--ion-color-secondary);\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.review-page .rating-gird ul {\n  padding-left: 15px;\n  margin-bottom: 0;\n  border-left: 1px solid #ccc;\n}\n\n.review-page .rating-gird ul li {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  list-style: none;\n  position: relative;\n}\n\n.review-page .rating-gird ul li .icon {\n  margin-left: 5px;\n}\n\n.review-page .rating-gird ul li .block {\n  height: 11px;\n  display: inline-block;\n  margin-left: 14px;\n  position: relative;\n  z-index: 2;\n}\n\n.review-page .rating-gird ul li::after {\n  content: \"\";\n  background-color: #f4f4f4;\n  height: 11px;\n  width: calc(100% - 36px);\n  position: absolute;\n  left: 36px;\n  z-index: 1;\n  top: 5px;\n}\n\n.review-page .rating-gird .button {\n  min-height: 45px;\n}\n\n.review-page .rating-users .item {\n  background-color: transparent;\n  align-items: flex-start;\n}\n\n.review-page .rating-users .item ion-avatar {\n  margin-top: 10px;\n}\n\n.review-page .rating-users .item h2 {\n  font-weight: bold;\n}\n\n.review-page .rating-users .item p p {\n  margin-top: 2px;\n  white-space: normal;\n}\n\n.review-page .animate {\n  -webkit-animation: fadeInRight 0.75s;\n          animation: fadeInRight 0.75s;\n}\n\n.review-page .stars-outer {\n  display: inline-block;\n  position: relative;\n  font-size: 15px;\n}\n\n.review-page .stars-outer::before {\n  content: \"\\2606\\2606\\2606\\2606\\2606\";\n  color: #ccc;\n}\n\n.review-page .stars-outer .stars-inner {\n  font-size: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.review-page .stars-outer .stars-inner::before {\n  content: \"\\2605\\2605\\2605\\2605\\2605\";\n  color: #f8ce0b;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksdUJBQXVCO0FBRjNCOztBQUZBO0VBRU0sYUFBYTtBQUluQjs7QUFOQTtFQVFRLGFBQWE7RUFDYixnQkFBZ0I7QUFFeEI7O0FBWEE7RUFhUSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUUxQjs7QUFqQkE7RUFtQlEsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFFMUI7O0FBdkJBO0VBd0JRLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBR25DOztBQTdCQTtFQTRCVSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBSzVCOztBQXJDQTtFQWtDWSxnQkFBZ0I7QUFPNUI7O0FBekNBO0VBcUNZLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBUXRCOztBQWpEQTtFQTRDWSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsUUFBUTtBQVNwQjs7QUE1REE7RUF3RFEsZ0JBQWdCO0FBUXhCOztBQWhFQTtFQTZEUSw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBTy9COztBQXJFQTtFQWlFVSxnQkFBZ0I7QUFRMUI7O0FBekVBO0VBb0VVLGlCQUFpQjtBQVMzQjs7QUE3RUE7RUF3RVksZUFBZTtFQUNmLG1CQUFtQjtBQVMvQjs7QUFsRkE7RUFnRk0sb0NBQTRCO1VBQTVCLDRCQUE0QjtBQU1sQzs7QUF0RkE7RUFvRk0scUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBTXJCOztBQTVGQTtFQXdGUSxvQ0FBb0M7RUFDcEMsV0FBVztBQVFuQjs7QUFqR0E7RUE0RlEsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFTeEI7O0FBMUdBO0VBb0dVLG9DQUFvQztFQUNwQyxjQUFjO0FBVXhCIiwiZmlsZSI6InJldmlld3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldmlldy1wYWdlIHtcbiAgICAubGVzcyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAucmF0aW5nLWdpcmQge1xuICAgICAgaDQge1xuICAgICAgICAvL2ZvbnQtc2l6ZTogJGgyLWZvbnQtc2l6ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICAvL2ZvbnQtc2l6ZTogJGgyLWZvbnQtc2l6ZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYmxvY2sge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMXB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgICAgICAgICAgIGhlaWdodDogMTFweDtcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDM2cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgbWluLWhlaWdodDogNDVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnJhdGluZy11c2VycyB7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgXG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5hbmltYXRlIHtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluUmlnaHQgMC43NXM7XG4gICAgfVxuICBcbiAgICAuc3RhcnMtb3V0ZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXDI2MDZcXDI2MDZcXDI2MDZcXDI2MDZcXDI2MDZcIjtcbiAgICAgICAgY29sb3I6ICNjY2M7XG4gICAgICB9XG4gICAgICAuc3RhcnMtaW5uZXIge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlxcMjYwNVxcMjYwNVxcMjYwNVxcMjYwNVxcMjYwNVwiO1xuICAgICAgICAgIGNvbG9yOiAjZjhjZTBiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ== */");

/***/ }),

/***/ 6161:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reviews/reviews.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'Ratings & Reviews'|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"review-page\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"pullRefresh()\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid class=\"rating-gird\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"5\">\n        <h1>{{average| number:'1.2-2'}}\n          <ion-icon name=\"star\"></ion-icon>\n        </h1>\n        <h3>{{reviewsArray.length}} {{'rating'|translate}}</h3>\n      </ion-col>\n      <ion-col size=\"7\">\n        <ul>\n          <li>5\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r5+'%'\" style=\"background-color:green;\"></span>\n          </li>\n          <li>4\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r4+'%'\" style=\"background-color:lightgreen;\"></span>\n          </li>\n          <li>3\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r3+'%'\" style=\"background-color:yellow;\"></span>\n          </li>\n          <li>2\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r2+'%'\" style=\"background-color:orange;\"></span>\n          </li>\n          <li>1\n            <ion-icon name=\"star\"></ion-icon>\n            <span class=\"block animate\" [style.width]=\"r1+'%'\" style=\"background-color:darkorange;\"></span>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"full\" color=\"primary\" class=\"font-small\" (click)=\"openReviewsPage()\">{{'Rate and write a\n          review'|translate}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-no-record-found [data]=\"reviewsArray\" *ngIf=\"reviewsArray.length==0 && !httpLoading\">\n  </app-no-record-found>\n  <ion-list class=\"rating-users\" *ngIf=\"reviewsArray.length!=0\">\n\n    <ion-item *ngFor=\"let r of reviewsArray; let i = index\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/user.png\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{r.customer.customer_first_name}} {{r.customer.customer_last_name}}</h2>\n        <h3>{{r.created_at|date:'dd-MM-yyyy'}}</h3>\n        <p id=\"{{ 'a' + i }}\">\n          {{r.comment}}\n        </p>\n\n        <ion-badge class=\"ion-text-lowercase\">\n          <ion-text id=\"{{ 'more' + i }}\" (click)=\"showHideContent(i,'show')\">{{\"more\"|translate}}\n          </ion-text>\n          <ion-text id=\"{{ 'less' + i }}\" class=\"less\" (click)=\"showHideContent(i,'hide')\">\n            {{\"less\"|translate}}</ion-text>\n        </ion-badge>\n      </ion-label>\n      <div class=\"stars-outer\" slot=\"end\">\n        <div class=\"stars-inner\" [style.width]=\"(r.rating*20)+'%'\"></div>\n      </div>\n    </ion-item>\n  </ion-list>\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getProductReviews()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_reviews_reviews_module_ts-es2015.js.map