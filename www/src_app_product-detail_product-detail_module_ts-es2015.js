(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_product-detail_product-detail_module_ts"],{

/***/ 21522:
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPageModule": function() { return /* binding */ ProductDetailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.page */ 96055);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var src_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/product-card/product-card.module */ 12682);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);











const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPage
    }
];
let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            src_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__.productCardModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_3__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_4__.ImageValidateDirectiveModule
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPage]
    })
], ProductDetailPageModule);



/***/ }),

/***/ 96055:
/*!*******************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPage": function() { return /* binding */ ProductDetailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-detail.page.html */ 14099);
/* harmony import */ var _product_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.page.scss */ 47441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-translation/app-translation.service */ 68829);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);
/* harmony import */ var src_services_app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/app-alert/app-alert.service */ 20728);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/app-wishlist/app-wish-list.service */ 70182);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);
/* harmony import */ var _modals_product_attributes_modal_product_attributes_modal_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../modals/product-attributes-modal/product-attributes-modal.page */ 44637);
/* harmony import */ var src_services_app_animations_app_animations_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/app-animations/app-animations.service */ 48095);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ 56818);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @capacitor/share */ 16380);























let ProductDetailPage = class ProductDetailPage {
    constructor(navCtrl, config, shared, appCartService, appHttpService, modalCtrl, loading, appEventsService, activatedRoute, appTranslationService, appToastService, appAlertService, appUserService, appWishListService, appAnimationsService, sanitizer, appLogService, photoViewer) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.shared = shared;
        this.appCartService = appCartService;
        this.appHttpService = appHttpService;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.appEventsService = appEventsService;
        this.activatedRoute = activatedRoute;
        this.appTranslationService = appTranslationService;
        this.appToastService = appToastService;
        this.appAlertService = appAlertService;
        this.appUserService = appUserService;
        this.appWishListService = appWishListService;
        this.appAnimationsService = appAnimationsService;
        this.sanitizer = sanitizer;
        this.appLogService = appLogService;
        this.photoViewer = photoViewer;
        this.dataJson = {};
        this.sliderConfig = {
            zoom: true
        };
        this.wishListFlagBool = false;
        this.relatedProductsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.quantityNumber = 1;
        this.priceNumber = 0;
        this.enableOutOFStockButtonBool = false;
        this.viewIsLoadedBool = false;
        this.backgroundIsAppliedBool = false;
        this.slidesCounter = 1;
        this.getProductData();
    }
    zoomImage(image) {
        this.photoViewer.show(image);
    }
    checkingProductStock() {
        this.appCartService.checkProductStock(this.dataJson.product_id, this.dataJson.product_type, null, this.quantityNumber).then((data) => {
            if (data.status == "outOfStock") {
                this.enableOutOFStockButtonBool = true;
            }
            else if (data.status == "canAddToCart") {
                this.appCartService.addToCart(this.dataJson.product_id, this.quantityNumber, null);
            }
            else if (data.status == "quantityIsLimited") {
                this.appToastService.toastError("Quantity is Limited");
                this.quantityNumber = data.stock;
            }
        });
    }
    addRemoveWishProduct() {
        this.appWishListService.addRemoveWishProduct(this.dataJson.product_id);
    }
    getHeartColor() {
        if (this.isInWishList())
            return 'danger';
        else
            return 'medium';
    }
    isInWishList() {
        return this.appWishListService.productIsInList(this.dataJson.product_id);
    }
    quantityMinus() {
        if (this.quantityNumber > 1)
            this.quantityNumber--;
    }
    calculatePrice() {
        return this.quantityNumber * this.priceNumber;
    }
    quantityPlus() {
        this.quantityNumber++;
    }
    addToCartButton() {
        if (this.dataJson.product_type == "variable")
            this.openProductAttributesModal();
        else {
            this.checkingProductStock();
        }
    }
    productDataIsEmpty() {
        for (var prop in this.dataJson) {
            if (this.dataJson.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    }
    goBack() {
        this.navCtrl.pop();
    }
    ngOnInit() {
    }
    getProductData() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        let url = "products/" + id;
        url += "?language_id=" + this.config.languageIdNumber;
        url += "&getCategory=1";
        url += "&getDetail=1";
        url += "&currency=" + this.config.currencyIdNumber;
        url += "&stock=1";
        this.appHttpService.getHttp(url).then((data) => {
            this.dataJson = data;
            this.getRelatedProducts();
        });
    }
    getRelatedProducts() {
        let url = "products";
        url += "?limit=" + this.config.perPageNumber;
        url += "&getCategory=1";
        url += "&getDetail=1";
        url += "&language_id=" + this.config.languageIdNumber;
        //url += "&productType=simple"
        url += "&currency=" + this.config.currencyIdNumber;
        url += "&stock=1";
        url += "&productCategories=" + this.dataJson.category[0].category_detail.detail[0].category_id;
        this.appHttpService.getHttp(url).then((data) => {
            this.relatedProductsArray = data;
        });
    }
    getLowestProductPrice() {
        let r = this.dataJson.product_combination[0].price;
        this.dataJson.product_combination.forEach(element => {
            if (element.price < r)
                r = element.price;
        });
        return r;
    }
    getHighestProductPrice() {
        let r = this.dataJson.product_combination[0].price;
        this.dataJson.product_combination.forEach(element => {
            if (element.price > r)
                r = element.price;
        });
        return r;
    }
    productDiscount() {
        var rtn = "";
        var p1 = parseInt(this.dataJson.product_price);
        var p2 = parseInt(this.dataJson.product_discount_price);
        var result = Math.abs((p1 - p2) / p1 * 100);
        result = parseInt(result.toString());
        if (result == 0) {
            return false;
        }
        rtn = '-' + result + '%';
        return rtn;
    }
    openProductAttributesModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_product_attributes_modal_product_attributes_modal_page__WEBPACK_IMPORTED_MODULE_14__.ProductAttributesModalPage,
                cssClass: 'product-attributes-modal',
                componentProps: {
                    data: this.dataJson,
                }
            });
            return yield modal.present();
        });
    }
    openReviewsPage() {
        this.navCtrl.navigateForward("/reviews/" + this.dataJson.product_id);
    }
    share() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, function* () {
            let shareRet = yield _capacitor_share__WEBPACK_IMPORTED_MODULE_17__.Share.share({
                title: this.dataJson.detail[0].title,
                text: this.dataJson.detail[0].title,
                url: this.config.urlString,
                dialogTitle: this.dataJson.detail[0].title,
            });
        });
    }
    ngAfterViewInit() {
        this.viewIsLoadedBool = true;
    }
    ngDoCheck() {
        if (this.dataJson.product_id != undefined) {
            if (this.viewIsLoadedBool) {
                if (!this.backgroundIsAppliedBool && this.config.appDesignNumber == 0) {
                    this.applyBackgroundColor();
                }
            }
        }
    }
    applyBackgroundColor() {
        let backGroundColorsArray = this.config.productCardColorsArray;
        try {
            let slides = document.querySelectorAll('.product-detail-page ion-slide');
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.backgroundColor = backGroundColorsArray[this.slidesCounter];
                this.slidesCounter++;
                if (this.slidesCounter == backGroundColorsArray.length)
                    this.slidesCounter = 0;
            }
            if (slides.length != 0)
                this.backgroundIsAppliedBool = true;
        }
        catch (error) {
        }
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.NavController },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_7__.AppCartService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_6__.AppHttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.ModalController },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__.AppEventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute },
    { type: src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_8__.AppTranslationService },
    { type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_9__.AppToastService },
    { type: src_services_app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_10__.AppAlertService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_11__.AppUserService },
    { type: src_services_app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_12__.AppWishListService },
    { type: src_services_app_animations_app_animations_service__WEBPACK_IMPORTED_MODULE_15__.AppAnimationsService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.DomSanitizer },
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_13__.AppLogService },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_16__.PhotoViewer }
];
ProductDetailPage.propDecorators = {
    sliderRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild, args: ['sliderRef', { static: false },] }]
};
ProductDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
        selector: 'app-product-detail',
        template: _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductDetailPage);



/***/ }),

/***/ 47441:
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  color: var(--ion-text-color);\n  --color: var(--ion-text-color);\n}\n\nion-item {\n  --background: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 0;\n}\n\nion-content {\n  --padding-start: var(--app-padding-left-right);\n  --padding-end: var(--app-padding-left-right);\n}\n\nion-content .heart-top {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  z-index: 2;\n}\n\nion-content .heart-top ion-icon {\n  font-size: 20px;\n}\n\nion-content ion-slide ion-img {\n  width: 100%;\n}\n\nion-content .name-price-card {\n  padding: 10px 10px;\n  border-radius: 0%;\n  box-shadow: none;\n  margin-top: 3px;\n}\n\nion-content .name-price-card ion-icon {\n  font-size: 20px;\n}\n\nion-content .name-price-card ion-badge {\n  --padding-start: 7px;\n  --padding-end: 7px;\n  --padding-bottom: 3px;\n  --padding-top: 3px;\n  border-radius: 2px;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n\nion-content .product-detail-custom-card {\n  padding: 0px 10px;\n  margin-top: 3px;\n  border-radius: 0%;\n  box-shadow: none;\n}\n\nion-content .product-detail-custom-card ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n\nion-content .product-detail-custom-card .single-review-start {\n  --min-height: none;\n}\n\nion-content .product-detail-custom-card .single-review-start ion-avatar {\n  height: auto;\n}\n\nion-content .product-detail-custom-card .quantity-chip {\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\nion-content .product-detail-custom-card .quantity-chip ion-icon {\n  font-size: 35px;\n}\n\nion-content .product-detail-custom-card .quantity-chip ion-label {\n  padding: 0px 10px;\n  font-size: 20px;\n}\n\nion-content .product-quantity-card .label-col {\n  display: table;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\nion-content .product-quantity-card .label-col ion-label {\n  display: table-cell;\n  vertical-align: middle;\n}\n\nion-content .stars-outer {\n  display: inline-block;\n  position: relative;\n  font-size: 15px;\n}\n\nion-content .stars-outer::before {\n  content: \"\\2606  \\2606  \\2606  \\2606  \\2606\";\n  color: #ccc;\n}\n\nion-content .stars-outer .stars-inner {\n  font-size: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\nion-content .stars-outer .stars-inner::before {\n  content: \"\\2605  \\2605  \\2605  \\2605  \\2605\";\n  color: #f8ce0b;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUE0QjtFQUM1Qiw4QkFBUTtBQUNaOztBQUNBO0VBQ0kseUJBQWE7QUFFakI7O0FBSEE7RUFHUSxnQkFBZ0I7QUFJeEI7O0FBREE7RUFVSSw4Q0FBZ0I7RUFDaEIsNENBQWM7QUFMbEI7O0FBTkE7RUFFUSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0FBUWxCOztBQWJBO0VBT1ksZUFBZTtBQVUzQjs7QUFqQkE7RUFjWSxXQUFXO0FBT3ZCOztBQXJCQTtFQWtCUSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBT3ZCOztBQTVCQTtFQXVCWSxlQUFlO0FBUzNCOztBQWhDQTtFQTBCWSxvQkFBZ0I7RUFDaEIsa0JBQWM7RUFDZCxxQkFBaUI7RUFDakIsa0JBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQVVyQzs7QUExQ0E7RUFxQ1EsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBU3hCOztBQWpEQTtFQTBDWSxrQkFBZ0I7RUFDaEIsc0JBQW9CO0VBQ3BCLGdCQUFjO0VBQ2QsbUJBQWlCO0FBVzdCOztBQXhEQTtFQWdEWSxrQkFBYTtBQVl6Qjs7QUE1REE7RUFrRGdCLFlBQVk7QUFjNUI7O0FBaEVBO0VBc0RZLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQWN4Qjs7QUF0RUE7RUEwRGdCLGVBQWU7QUFnQi9COztBQTFFQTtFQTZEZ0IsaUJBQWlCO0VBQ2pCLGVBQWU7QUFpQi9COztBQS9FQTtFQXFFWSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVc7QUFjdkI7O0FBeEZBO0VBNEVnQixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBZ0J0Qzs7QUE3RkE7RUFrRlEscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBZXZCOztBQW5HQTtFQXNGWSw0Q0FBNEM7RUFDNUMsV0FBVztBQWlCdkI7O0FBeEdBO0VBMEZZLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBa0I1Qjs7QUFqSEE7RUFrR2dCLDRDQUE0QztFQUM1QyxjQUFjO0FBbUI5QiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xufVxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG59XG5pb24tY29udGVudCB7XG4gICAgLmhlYXJ0LXRvcCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubmFtZS1wcmljZS1jYXJkIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJhZGdlIHtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogN3B4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogN3B4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9kdWN0LWRldGFpbC1jdXN0b20tY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAlO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNpbmdsZS1yZXZpZXctc3RhcnQge1xuICAgICAgICAgICAgLS1taW4taGVpZ2h0OiBub25lO1xuICAgICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5xdWFudGl0eS1jaGlwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZHVjdC1xdWFudGl0eS1jYXJkIHtcbiAgICAgICAgLmxhYmVsLWNvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zdGFycy1vdXRlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcMjYwNiAgXFwyNjA2ICBcXDI2MDYgIFxcMjYwNiAgXFwyNjA2XCI7XG4gICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgfVxuICAgICAgICAuc3RhcnMtaW5uZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyNjA1ICBcXDI2MDUgIFxcMjYwNSAgXFwyNjA1ICBcXDI2MDVcIjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y4Y2UwYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 14099:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"goBack()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'product details'|translate}} </ion-title>\n    <ion-icon #icon2 class=\"header-icon\" slot=\"end\" name=\"bag-outline\" (click)=\"appCartService.openCartPage()\">\n    </ion-icon>\n    <ion-badge color=\"danger\" class=\"cart-badge\"><span class=\"center\">{{appCartService.cartTotalItems()}}</span>\n    </ion-badge>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"product-detail-page\">\n  <div class=\"center\">\n    <ion-spinner *ngIf=\"productDataIsEmpty()\"></ion-spinner>\n  </div>\n  <div *ngIf=\"!productDataIsEmpty()\">\n    <div class=\"heart-top\">\n      <ion-icon name=\"heart\" [color]=\"getHeartColor()\" (click)=\"addRemoveWishProduct()\"></ion-icon>\n    </div>\n    <ion-slides pager=\"true\" [options]=\"sliderConfig\" color=\"light\" class=\"maze-bullet-slides margin-top-10\"\n      [class.round-borders]=\"config.roundBordersBool\">\n      <ion-slide *ngIf=\"dataJson.product_video_url\" [appAnimation]=\"'fade'\">\n        <video [class.round-borders]=\"config.roundBordersBool\" autoplay controls style=\"width: 50%;\">\n          <source [src]=\"sanitizer.bypassSecurityTrustResourceUrl(dataJson.product_video_url)\">\n        </video>\n      </ion-slide>\n      <ion-slide [appAnimation]=\"'fade'\">\n        <ion-img [appImageValidate]=\"150\" [class.round-borders]=\"config.roundBordersBool\"\n          [src]=\"config.imgMediumUrlString+dataJson.product_gallary.gallary_name\"\n          (click)=\"zoomImage(config.imgMediumUrlString+dataJson.product_gallary.gallary_name)\">\n        </ion-img>\n      </ion-slide>\n\n      <ion-slide *ngFor=\"let g of dataJson.product_gallary_detail\" [appAnimation]=\"'fade'\">\n        <ion-img [appImageValidate]=\"150\" [class.round-borders]=\"config.roundBordersBool\" \n        [src]=\"config.imgMediumUrlString+g.gallary_name\"\n          (click)=\"zoomImage(config.imgMediumUrlString+g.gallary_name)\">\n        </ion-img>\n      </ion-slide>\n\n    </ion-slides>\n    <ion-card class=\"bg-transparent name-price-card ion-no-margin ion-no-border\"\n      [class.round-borders]=\"config.roundBordersBool\">\n      <ion-row class=\"ion-no-margin\">\n        <ion-col class=\"ion-no-padding\">\n          <ion-badge color=\"danger\" *ngIf=\"dataJson.product_discount_price!=0\"\n            class=\"ion-margin-end font-extra-small round-borders-10 padding-vertical-5 padding-horizontal-15\">\n            <!--  -->\n            {{'sale'|translate}}\n          </ion-badge>\n          <!--  -->\n          <ion-badge color=\"secondary\" *ngIf=\"dataJson.is_featured\"\n            class=\"ion-margin-end font-extra-small round-borders-10 padding-vertical-5 padding-horizontal-15\">\n            {{'featured'|translate}}\n          </ion-badge>\n          <!-- <ion-badge color=\"success\" class=\"ion-margin-end\">{{'New'|translate}}</ion-badge> -->\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin padding-top-10\">\n        <ion-label class=\"font-large font-bold avenir-book\">{{dataJson.detail[0].title}} </ion-label>\n      </ion-row>\n      <div *ngIf=\"dataJson.product_type=='variable'\">\n        <ion-row class=\"ion-no-margin padding-top-5\">\n          <ion-label class=\"font-extra-large font-bold\" color=\"danger\">{{getLowestProductPrice()|curency}}\n            - {{getHighestProductPrice()|curency}}\n          </ion-label>\n        </ion-row>\n      </div>\n      <div *ngIf=\"dataJson.product_type=='simple'\">\n        <ion-row class=\"ion-no-margin padding-top-5\" *ngIf=\"dataJson.product_discount_price==0\">\n          <ion-label class=\"font-extra-large font-bold\" color=\"danger\">{{dataJson.product_price|curency}}</ion-label>\n        </ion-row>\n        <ion-row class=\"ion-no-margin padding-top-5\" *ngIf=\"dataJson.product_discount_price!=0\">\n          <ion-label class=\"font-extra-large font-bold\" color=\"danger\">{{dataJson.product_discount_price|curency}}\n          </ion-label>\n          <ion-label class=\"font-extra-large font-bold padding-horizontal-10 line-through\" color=\"medium\">\n            {{dataJson.product_price|curency}}\n          </ion-label>\n          <ion-badge color=\"danger\" *ngIf=\"productDiscount()\">{{productDiscount()}}</ion-badge>\n        </ion-row>\n      </div>\n      <ion-row class=\"ion-no-margin padding-top-5\" *ngIf=\"dataJson.category.length!=0\">\n        <ion-label class=\"font-medium font-bold ion-text-uppercase\">{{'Categories'|translate}}: </ion-label>\n        <ion-label class=\"font-medium padding-horizontal-10\" *ngFor=\"let c of dataJson.category\">\n          {{c.category_detail.detail[0].name}}</ion-label>\n      </ion-row>\n      <ion-row class=\"ion-no-margin padding-top-5\">\n        <ion-label class=\"font-medium font-bold ion-text-uppercase\">{{'id'|translate}}: </ion-label>\n        <ion-label class=\"font-medium padding-horizontal-10\">{{dataJson.product_id}}</ion-label>\n      </ion-row>\n      <ion-row class=\"ion-no-margin padding-top-5\" *ngIf=\"dataJson.product_brand\">\n        <ion-label class=\"font-medium font-bold\">{{'brand'|translate}}</ion-label>\n        <ion-label class=\"font-medium padding-horizontal-10\">{{dataJson.product_brand.brand_name}}\n        </ion-label>\n      </ion-row>\n      <ion-row class=\"ion-no-margin padding-top-10\">\n        <ion-label class=\"font-medium font-bold\" color=\"primary\">{{'product details'|translate}}</ion-label>\n      </ion-row>\n      <ion-row class=\"ion-no-margin padding-top-10 font-medium\">\n        <div [innerHTML]=\"dataJson.detail[0].desc\"></div>\n      </ion-row>\n    </ion-card>\n    <!-- =================================================================================================================== -->\n    <ion-card class=\"product-detail-custom-card ion-no-margin ion-no-border\"\n      [class.round-borders]=\"config.roundBordersBool\" *ngIf=\"dataJson.product_type=='variable'\">\n      <!--  -->\n      <ion-item lines=\"none\" mode=ios button (click)=\"openProductAttributesModal()\" detail class=\"ion-no-margin\">\n        <ion-label class=\" font-medium ion-no-margin font-large font-bold\">\n          {{'choose options'|translate}}\n        </ion-label>\n      </ion-item>\n    </ion-card>\n    <!-- =================================================================================================================== -->\n    <ion-card class=\"bg-transparent product-detail-custom-card product-quantity-card ion-no-margin ion-no-border\"\n      *ngIf=\"dataJson.product_type=='simple'\" [class.round-borders]=\"config.roundBordersBool\">\n      <ion-item lines=none>\n        <ion-grid class=\"ion-no-padding\">\n          <ion-row class=\"ion-no-margin\">\n            <ion-col class=\"ion-text-start ion-no-padding label-col\">\n              <ion-label class=\" font-extra-large font-bold avenir-book\" color=\"primary\">\n                {{'quantity'|translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"ion-text-end ion-no-margin\">\n              <ion-label class=\"width-full font-large padding-vertical-10\">\n                <ion-chip outline=true [color]=\"(config.darkModeBool)?'light':'primary'\"\n                  class=\"quantity-chip variable-background-color\">\n                  <ion-icon name=\"remove-circle\" (click)=\"quantityMinus()\" color=\"primary\"></ion-icon>\n                  <ion-label class=\"font-bold\">{{quantityNumber}}</ion-label>\n                  <ion-icon name=\"add-circle\" (click)=\"quantityPlus()\" color=\"primary\"></ion-icon>\n                </ion-chip>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-card>\n\n    <!-- =================================================================================================================== -->\n    <ion-card class=\"bg-transparent product-detail-custom-card ion-no-margin ion-no-border\"\n      [class.round-borders]=\"config.roundBordersBool\">\n      <ion-row class=\"ion-no-margin padding-top-10\">\n        <ion-col class=\"ion-no-padding\">\n          <ion-label class=\"font-medium font-bold\" color=\"primary\">{{'reviews'|translate}}</ion-label>\n        </ion-col>\n        <ion-col class=\"ion-text-end ion-no-padding\">\n          <ion-label class=\"font-extra-small font-bold ion-text-end\" color=\"medium\" (click)=\"openReviewsPage()\">{{'see\n            all'|translate}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-no-margin padding-top-5\">\n        <ion-label class=\"font-medium font-bold\">{{dataJson.detail[0].title}}</ion-label>\n      </ion-row>\n      <ion-row class=\"ion-no-margin padding-top-5\">\n        <div class=\"stars-outer\">\n          <div class=\"stars-inner\" [style.width]=\"(dataJson.product_rating*20)+'%'\"></div>\n        </div>\n      </ion-row>\n      <ion-row class=\"ion-no-margin padding-top-5\">\n        <ion-label class=\"font-medium font-bold\" *ngIf=\"dataJson.product_rating==null\" color=\"medium\">{{0|\n          number:'1.2-2'}}({{dataJson.reviews.length}} {{'reviews'|translate}})</ion-label>\n        <ion-label class=\"font-medium font-bold\" *ngIf=\"dataJson.product_rating!=null\" color=\"medium\">\n          {{dataJson.product_rating|\n          number:'1.2-2'}}({{dataJson.reviews.length}} {{'reviews'|translate}})</ion-label>\n      </ion-row>\n\n      <ion-item lines=\"none\" *ngIf=\"dataJson.reviews.length!=0\">\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/user.png\">\n        </ion-avatar>\n        <ion-label class=\"ion-no-margin\">\n          <h2 class=\"font-medium\">\n            <ion-text color=\"medium\">{{dataJson.reviews[0].comment}}</ion-text>\n          </h2>\n          <h3>\n            <div class=\"stars-outer font-small\">\n              <div class=\"stars-inner font-small\" [style.width]=\"(dataJson.reviews[0].rating*20)+'%'\"></div>\n            </div>\n          </h3>\n        </ion-label>\n      </ion-item>\n    </ion-card>\n    <ion-card class=\"bg-transparent product-recommended-card product-detail-custom-card ion-no-margin no-padding\"\n      [class.round-borders]=\"config.roundBordersBool\" *ngIf=\"relatedProductsArray.length!=0\">\n      <div lines=\"none\" class=\"bg-transparent ion-margin-vertical padding-horizontal-10\">\n        <ion-label class=\"avenir-next-bold font-large\">\n          {{\"you might also like\"|translate}}\n        </ion-label>\n      </div>\n\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let p of relatedProductsArray\">\n          <app-product-card [data]=\"p\"></app-product-card>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\" *ngIf=\"!productDataIsEmpty()\">\n  <ion-toolbar>\n    <ion-button expand=\"block\" *ngIf=\"!enableOutOFStockButtonBool\"\n      class=\"ion-no-margin ion-margin-horizontal ion-margin-bottom\" color=primary (click)=\"addToCartButton()\">\n      {{'add to cart'|translate}}\n    </ion-button>\n\n    <ion-button expand=\"block\" *ngIf=\"enableOutOFStockButtonBool\"\n      class=\"ion-no-margin ion-margin-horizontal ion-margin-bottom\" color=danger>\n      {{'out of stock'|translate}}\n    </ion-button>\n  </ion-toolbar>\n\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_product-detail_product-detail_module_ts-es2015.js.map