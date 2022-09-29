(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 58310:
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPageModule": function() { return /* binding */ AboutUsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.page */ 88844);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);







// For Translation Language

const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
    }
];
let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        declarations: [
            _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
        ],
        entryComponents: [
            _about_us_page__WEBPACK_IMPORTED_MODULE_0__.AboutUsPage
        ]
    })
], AboutUsPageModule);



/***/ }),

/***/ 88844:
/*!*******************************************!*\
  !*** ./src/app/about-us/about-us.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsPage": function() { return /* binding */ AboutUsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about-us.page.html */ 42460);
/* harmony import */ var _about_us_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.page.scss */ 53571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/privacy-policy/privacy-policy.page */ 76727);
/* harmony import */ var _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/term-services/term-services.page */ 18681);
/* harmony import */ var _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/refund-policy/refund-policy.page */ 30985);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @capacitor/browser */ 28427);














let AboutUsPage = class AboutUsPage {
    constructor(shared, config, modalCtrl, loading, appCartService, appHttpService) {
        this.shared = shared;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.appCartService = appCartService;
        this.appHttpService = appHttpService;
    }
    ngOnInit() {
        if (this.shared.aboutUs == "")
            this.getPageData();
    }
    getPageData() {
        let url = "pages/1";
        url += "?language_id=" + this.config.languageIdNumber;
        this.appHttpService.getHttp(url).then((data) => {
            this.shared.aboutUs = data.detail[0].description;
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    showModal(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            if (value == 'privacyPolicy') {
                let modal = yield this.modalCtrl.create({
                    component: _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_5__.PrivacyPolicyPage
                });
                return yield modal.present();
            }
            else if (value == 'termServices') {
                let modal = yield this.modalCtrl.create({
                    component: _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_6__.TermServicesPage
                });
                return yield modal.present();
            }
            else {
                let modal = yield this.modalCtrl.create({
                    component: _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_7__.RefundPolicyPage
                });
                return yield modal.present();
            }
        });
    }
    openSite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.autoHide(2000);
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_10__.Browser.open({ url: this.config.yourSiteUrlString });
        });
    }
};
AboutUsPage.ctorParameters = () => [
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService },
    { type: _services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_8__.AppCartService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_9__.AppHttpService }
];
AboutUsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-about-us',
        template: _raw_loader_about_us_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_us_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutUsPage);



/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth-guard/auth-guard.service */ 327);




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
    {
        path: 'products',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_product-card_product-card_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 88980)).then(m => m.ProductsPageModule)
    },
    {
        path: 'products/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_product-card_product-card_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 88980)).then(m => m.ProductsPageModule)
    },
    {
        path: 'products/:id/:type',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_product-card_product-card_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 88980)).then(m => m.ProductsPageModule)
    },
    {
        path: 'products/:id/:type/:search',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_product-card_product-card_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_products_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.module */ 88980)).then(m => m.ProductsPageModule)
    },
    {
        path: 'product-detail/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_product-card_product-card_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_product-detail_product-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product-detail/product-detail.module */ 21522)).then(m => m.ProductDetailPageModule)
    },
    {
        path: 'cart',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_product-card_product-card_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cart_cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cart/cart.module */ 12943)).then(m => m.CartPageModule)
    },
    {
        path: 'shipping-address',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_app-progress-bar_app-progress-bar_module_ts"), __webpack_require__.e("default-src_components_add-shipping-address_add-shipping-address-component_module_ts-src_comp-16c2a5"), __webpack_require__.e("src_app_address-pages_shipping-address_shipping-address_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./address-pages/shipping-address/shipping-address.module */ 97923)).then(m => m.ShippingAddressPageModule),
        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
        data: {
            hideGuestLogin: false
        }
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_app-progress-bar_app-progress-bar_module_ts"), __webpack_require__.e("src_app_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payment/payment.module */ 24068)).then(m => m.PaymentPageModule),
        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService],
    },
    {
        path: 'order',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_app-progress-bar_app-progress-bar_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_order_order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./order/order.module */ 78865)).then(m => m.OrderPageModule),
        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'categories/:parent',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_categories-page-styles_categories-page-style1_categories-page-style1_m-8fe271"), __webpack_require__.e("src_app_categories_categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./categories/categories.module */ 71944)).then(m => m.CategoriesPageModule)
    },
    {
        path: 'add-review/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_add-review_add-review_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./add-review/add-review.module */ 3581)).then(m => m.AddReviewPageModule),
        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'reviews/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_reviews_reviews_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reviews/reviews.module */ 39764)).then(m => m.ReviewsPageModule),
        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'search',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_product-card_product-card_module_ts"), __webpack_require__.e("src_app_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./search/search.module */ 24682)).then(m => m.SearchPageModule)
    },
    {
        path: 'addresses',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_add-shipping-address_add-shipping-address-component_module_ts-src_comp-16c2a5"), __webpack_require__.e("src_app_address-pages_addresses_addresses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./address-pages/addresses/addresses.module */ 43424)).then(m => m.AddressesPageModule),
        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'my-account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_my-account_my-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./my-account/my-account.module */ 37796)).then(m => m.MyAccountPageModule),
        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'contact-us',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_contact-us_contact-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./contact-us/contact-us.module */ 63648)).then(m => m.ContactUsPageModule)
    },
    {
        path: 'my-orders',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_my-orders_my-orders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./my-orders/my-orders.module */ 73424)).then(m => m.MyOrdersPageModule),
        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'thank-you',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_thank-you_thank-you_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./thank-you/thank-you.module */ 12176)).then(m => m.ThankYouPageModule),
        data: {
            hideGuestLogin: false
        }
    },
    {
        path: 'my-order-detail/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_my-order-detail_my-order-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./my-order-detail/my-order-detail.module */ 95921)).then(m => m.MyOrderDetailPageModule),
        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
    {
        path: 'rewards',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_rewards_rewards_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rewards/rewards.module */ 76862)).then(m => m.RewardsPageModule),
        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_on_start_app_on_start_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-on-start/app-on-start.service */ 2678);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _modals_demo_settings_demo_settings_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals/demo-settings/demo-settings.page */ 7535);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/app */ 42138);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);














let AppComponent = class AppComponent {
    constructor(config, modalCtrl, appOnStartService, router, zone, shared, appCategoriesService, appUserService) {
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.appOnStartService = appOnStartService;
        this.router = router;
        this.zone = zone;
        this.shared = shared;
        this.appCategoriesService = appCategoriesService;
        this.appUserService = appUserService;
        this.openedCategories = [];
        this.initializeApp();
    }
    initializeApp() {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.isNativePlatform()) {
            this.initializeDeepLink();
        }
        this.initializeDeepLink();
        this.appOnStartService.loadAppSetting();
    }
    initializeDeepLink() {
        _capacitor_app__WEBPACK_IMPORTED_MODULE_6__.App.addListener('appUrlOpen', (data) => {
            this.zone.run(() => {
                // Example url: https://beerswift.app/tabs/tab2
                // slug = /tabs/tab2 
                // let string1 = data.url
                // let string2 = this.config.urlString
                console.log(data);
                // if (string1.indexOf(string2) != -1) {
                //   this.router.navigateByUrl('/tabs/home');
                // }
                const slug = data.url.split(".com").pop();
                if (slug) {
                    this.router.navigateByUrl(slug);
                }
                // If no match, do nothing - let regular routing
                // logic take over
            });
        });
    }
    openDemoSettings() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _modals_demo_settings_demo_settings_page__WEBPACK_IMPORTED_MODULE_4__.DemoSettingsPage,
            });
            return yield modal.present();
        });
    }
    categoryListIsSelected(id) {
        let opened = false;
        this.openedCategories.forEach(element => {
            if (id == element)
                opened = true;
        });
        return opened;
    }
    getRightIcon(id) {
        if (this.categoryListIsSelected(id)) {
            return "chevron-down-outline";
        }
        else {
            return "chevron-forward-outline";
        }
    }
    showHideCategoryList(id) {
        let found = 0;
        this.openedCategories.forEach((value, index) => {
            if (id == value) {
                found++;
                this.openedCategories.splice(index, 1);
            }
        });
        if (found == 0)
            this.openedCategories.push(id);
    }
    openCategory(id) {
        this.router.navigateByUrl("products/" + id);
        this.shared.toggleMenu();
    }
    openShopByFilter(value) {
        this.router.navigateByUrl("products/0/" + value);
        this.shared.toggleMenu();
    }
    getTitleName() {
        if (this.appUserService.userIsLogedIn())
            return this.appUserService.customerData.firstName;
        else
            return "guest";
    }
};
AppComponent.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_services_app_on_start_app_on_start_service__WEBPACK_IMPORTED_MODULE_2__.AppOnStartService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_8__.SharedDataService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_7__.AppCategoriesService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_9__.AppUserService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 83046);
/* harmony import */ var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/network-interface/ngx */ 64914);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-alert/app-alert.service */ 20728);
/* harmony import */ var src_services_app_animations_app_animations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/app-animations/app-animations.service */ 48095);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);
/* harmony import */ var src_services_app_network_app_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-network/app-network.service */ 88889);
/* harmony import */ var src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-order/app-order.service */ 92248);
/* harmony import */ var src_services_app_recentproducts_app_recent_products_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/app-recentproducts/app-recent-products.service */ 84113);
/* harmony import */ var src_services_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/app-storage/app-storage.service */ 75211);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);
/* harmony import */ var src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/app-translation/app-translation.service */ 68829);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/app-wishlist/app-wish-list.service */ 70182);
/* harmony import */ var src_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/services/auth-guard/auth-guard.service */ 327);
/* harmony import */ var src_services_back_button_exit_back_button_exit_app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/back-button-exit/back-button-exit-app.service */ 99609);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_firebase_phone_auth_firebase_phone_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/services/firebase-phone-auth/firebase-phone-auth.service */ 42049);
/* harmony import */ var src_services_get_device_id_get_device_id_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/services/get-device-id/get-device-id.service */ 48003);
/* harmony import */ var src_services_get_ip_Address_get_ip_address_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/services/get-ip-Address/get-ip-address.service */ 35186);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);
/* harmony import */ var _modals_app_log_page_app_log_page_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modals/app-log-page/app-log-page.module */ 13804);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _modals_blank_modal_blank_modal_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modals/blank-modal/blank-modal.module */ 28418);
/* harmony import */ var _modals_currency_list_currency_list_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modals/currency-list/currency-list.module */ 22479);
/* harmony import */ var _modals_demo_settings_demo_settings_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modals/demo-settings/demo-settings.module */ 32001);
/* harmony import */ var _modals_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modals/forgot-password/forgot-password.module */ 21260);
/* harmony import */ var _modals_language_language_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modals/language/language.module */ 88266);
/* harmony import */ var _modals_login_login_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modals/login/login.module */ 12425);
/* harmony import */ var _modals_phone_login_phone_login_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modals/phone-login/phone-login.module */ 88901);
/* harmony import */ var _modals_privacy_policy_privacy_policy_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modals/privacy-policy/privacy-policy.module */ 94495);
/* harmony import */ var _modals_product_attributes_modal_product_attributes_modal_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./modals/product-attributes-modal/product-attributes-modal.module */ 47954);
/* harmony import */ var _modals_refund_policy_refund_policy_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modals/refund-policy/refund-policy.module */ 72456);
/* harmony import */ var _modals_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modals/select-country/select-country.module */ 63636);
/* harmony import */ var _modals_select_zones_select_zones_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modals/select-zones/select-zones.module */ 17067);
/* harmony import */ var _modals_sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modals/sign-up/sign-up.module */ 91308);
/* harmony import */ var _modals_term_services_term_services_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modals/term-services/term-services.module */ 32348);
/* harmony import */ var _intro_intro_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./intro/intro.module */ 10025);
/* harmony import */ var _modals_app_settings_modal_app_settings_modal_module__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./modals/app-settings-modal/app-settings-modal.module */ 94221);
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ 56818);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 30222);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 61779);
/* harmony import */ var _about_us_about_us_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./about-us/about-us.module */ 58310);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var src_services_app_coordinates_app_coordinates_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! src/services/app-coordinates/app-coordinates.service */ 88691);
/* harmony import */ var src_services_in_app_browser_in_app_browser_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! src/services/in-app-browser/in-app-browser.service */ 19921);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);




























































let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_53__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_54__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_23__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_55__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_56__.HttpClientModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_57__.IonicModule.forRoot({
                mode: 'md'
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_22__.AppRoutingModule,
            _modals_app_log_page_app_log_page_module__WEBPACK_IMPORTED_MODULE_25__.AppLogPagePageModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_26__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_58__.FormsModule,
            _modals_blank_modal_blank_modal_module__WEBPACK_IMPORTED_MODULE_27__.BlankModalPageModule,
            _modals_language_language_module__WEBPACK_IMPORTED_MODULE_31__.LanguagePageModule,
            _modals_refund_policy_refund_policy_module__WEBPACK_IMPORTED_MODULE_36__.RefundPolicyPageModule,
            _about_us_about_us_module__WEBPACK_IMPORTED_MODULE_47__.AboutUsPageModule,
            _modals_currency_list_currency_list_module__WEBPACK_IMPORTED_MODULE_28__.CurrencyListPageModule,
            _modals_login_login_module__WEBPACK_IMPORTED_MODULE_32__.LoginPageModule,
            _modals_sign_up_sign_up_module__WEBPACK_IMPORTED_MODULE_39__.SignUpPageModule,
            _modals_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_30__.ForgotPasswordPageModule,
            _modals_privacy_policy_privacy_policy_module__WEBPACK_IMPORTED_MODULE_34__.PrivacyPolicyPageModule,
            _modals_term_services_term_services_module__WEBPACK_IMPORTED_MODULE_40__.TermServicesPageModule,
            _modals_select_country_select_country_module__WEBPACK_IMPORTED_MODULE_37__.SelectCountryPageModule,
            _modals_select_zones_select_zones_module__WEBPACK_IMPORTED_MODULE_38__.SelectZonesPageModule,
            _modals_demo_settings_demo_settings_module__WEBPACK_IMPORTED_MODULE_29__.DemoSettingsPageModule,
            _modals_phone_login_phone_login_module__WEBPACK_IMPORTED_MODULE_33__.PhoneLoginPageModule,
            _modals_product_attributes_modal_product_attributes_modal_module__WEBPACK_IMPORTED_MODULE_35__.ProductAttributesModalPageModule,
            _intro_intro_module__WEBPACK_IMPORTED_MODULE_41__.IntroPageModule,
            _modals_app_settings_modal_app_settings_modal_module__WEBPACK_IMPORTED_MODULE_42__.AppSettingsModalPageModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_48__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_49__.ImageValidateDirectiveModule
        ],
        providers: [
            src_services_config_config_service__WEBPACK_IMPORTED_MODULE_17__.ConfigService,
            src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService,
            src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_21__.SharedDataService,
            src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_6__.AppLogService,
            src_services_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_10__.AppStorageService,
            src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_13__.AppUserService,
            src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_8__.AppOrderService,
            src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_4__.AppCartService,
            src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_12__.AppTranslationService,
            src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_11__.AppToastService,
            src_services_app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService,
            src_services_app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_14__.AppWishListService,
            src_services_app_recentproducts_app_recent_products_service__WEBPACK_IMPORTED_MODULE_9__.AppRecentProductsService,
            src_services_app_network_app_network_service__WEBPACK_IMPORTED_MODULE_7__.AppNetworkService,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_0__.NativeGeocoder,
            src_services_get_device_id_get_device_id_service__WEBPACK_IMPORTED_MODULE_19__.GetDeviceIdService,
            src_services_get_ip_Address_get_ip_address_service__WEBPACK_IMPORTED_MODULE_20__.GetIpAddressService,
            _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_1__.NetworkInterface,
            src_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_15__.AuthGuardService,
            src_services_back_button_exit_back_button_exit_app_service__WEBPACK_IMPORTED_MODULE_16__.BackButtonExitAppService,
            src_services_firebase_phone_auth_firebase_phone_auth_service__WEBPACK_IMPORTED_MODULE_18__.FirebasePhoneAuthService,
            src_services_app_animations_app_animations_service__WEBPACK_IMPORTED_MODULE_3__.AppAnimationsService,
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_24__.HTTP,
            _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_43__.PhotoViewer,
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_44__.Facebook,
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_45__.GooglePlus,
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_46__.OneSignal,
            src_services_app_coordinates_app_coordinates_service__WEBPACK_IMPORTED_MODULE_50__.AppCoordinatesService,
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_52__.InAppBrowser,
            src_services_in_app_browser_in_app_browser_service__WEBPACK_IMPORTED_MODULE_51__.InAppBrowserService,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_59__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_57__.IonicRouteStrategy
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_23__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 10025:
/*!***************************************!*\
  !*** ./src/app/intro/intro.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPageModule": function() { return /* binding */ IntroPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intro.page */ 25808);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage
    }
];
let IntroPageModule = class IntroPageModule {
};
IntroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage]
    })
], IntroPageModule);



/***/ }),

/***/ 25808:
/*!*************************************!*\
  !*** ./src/app/intro/intro.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroPage": function() { return /* binding */ IntroPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./intro.page.html */ 56077);
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.page.scss */ 70653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);








let IntroPage = class IntroPage {
    constructor(navCtrl, shared, config, appEventsService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.shared = shared;
        this.config = config;
        this.appEventsService = appEventsService;
        this.modalCtrl = modalCtrl;
        this.sliderConfig = {
            observer: true,
            observeParents: true
        };
        this.slidesArray = [
            { image: "assets/intro/1.png", description: "online shopping", description2: "made easy" },
            { image: "assets/intro/2.png", description: "cook instantly", description2: "without any worries" },
            { image: "assets/intro/3.png", description: "ship at your home", description2: "in no time" }
        ];
    }
    swipeNext() {
        this.introSlides.slideNext();
    }
    //close modal
    dismiss() {
        this.modalCtrl.dismiss();
    }
    ngOnInit() {
    }
};
IntroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_4__.AppEventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
IntroPage.propDecorators = {
    introSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['introSlider',] }]
};
IntroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-intro',
        template: _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], IntroPage);



/***/ }),

/***/ 38204:
/*!********************************************************************!*\
  !*** ./src/app/modals/app-log-page/app-log-page-routing.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogPagePageRoutingModule": function() { return /* binding */ AppLogPagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _app_log_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-log-page.page */ 98208);




const routes = [
    {
        path: '',
        component: _app_log_page_page__WEBPACK_IMPORTED_MODULE_0__.AppLogPagePage
    }
];
let AppLogPagePageRoutingModule = class AppLogPagePageRoutingModule {
};
AppLogPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppLogPagePageRoutingModule);



/***/ }),

/***/ 13804:
/*!************************************************************!*\
  !*** ./src/app/modals/app-log-page/app-log-page.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogPagePageModule": function() { return /* binding */ AppLogPagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_log_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-log-page-routing.module */ 38204);
/* harmony import */ var _app_log_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-log-page.page */ 98208);
/* harmony import */ var src_components_app_json_tree_view_app_json_tree_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/app-json-tree-view/app-json-tree-view.component */ 56223);








let AppLogPagePageModule = class AppLogPagePageModule {
};
AppLogPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _app_log_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppLogPagePageRoutingModule
        ],
        declarations: [_app_log_page_page__WEBPACK_IMPORTED_MODULE_1__.AppLogPagePage,
            src_components_app_json_tree_view_app_json_tree_view_component__WEBPACK_IMPORTED_MODULE_2__.AppJsonTreeViewComponent]
    })
], AppLogPagePageModule);



/***/ }),

/***/ 98208:
/*!**********************************************************!*\
  !*** ./src/app/modals/app-log-page/app-log-page.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogPagePage": function() { return /* binding */ AppLogPagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_log_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app-log-page.page.html */ 51309);
/* harmony import */ var _app_log_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-log-page.page.scss */ 23027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);
/* harmony import */ var src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/app-translation/app-translation.service */ 68829);







let AppLogPagePage = class AppLogPagePage {
    constructor(appLogService, modalCtrl, appTranslationService) {
        this.appLogService = appLogService;
        this.modalCtrl = modalCtrl;
        this.appTranslationService = appTranslationService;
        this.segmentsTabs = "log";
    }
    ngOnInit() {
    }
    //close modal
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
AppLogPagePage.ctorParameters = () => [
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__.AppLogService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_3__.AppTranslationService }
];
AppLogPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-app-log-page',
        template: _raw_loader_app_log_page_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_log_page_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppLogPagePage);



/***/ }),

/***/ 34720:
/*!********************************************************************************!*\
  !*** ./src/app/modals/app-settings-modal/app-settings-modal-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettingsModalPageRoutingModule": function() { return /* binding */ AppSettingsModalPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _app_settings_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-settings-modal.page */ 27597);




const routes = [
    {
        path: '',
        component: _app_settings_modal_page__WEBPACK_IMPORTED_MODULE_0__.AppSettingsModalPage
    }
];
let AppSettingsModalPageRoutingModule = class AppSettingsModalPageRoutingModule {
};
AppSettingsModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppSettingsModalPageRoutingModule);



/***/ }),

/***/ 94221:
/*!************************************************************************!*\
  !*** ./src/app/modals/app-settings-modal/app-settings-modal.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettingsModalPageModule": function() { return /* binding */ AppSettingsModalPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_settings_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-settings-modal-routing.module */ 34720);
/* harmony import */ var _app_settings_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-settings-modal.page */ 27597);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








let AppSettingsModalPageModule = class AppSettingsModalPageModule {
};
AppSettingsModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _app_settings_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppSettingsModalPageRoutingModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_app_settings_modal_page__WEBPACK_IMPORTED_MODULE_1__.AppSettingsModalPage]
    })
], AppSettingsModalPageModule);



/***/ }),

/***/ 27597:
/*!**********************************************************************!*\
  !*** ./src/app/modals/app-settings-modal/app-settings-modal.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSettingsModalPage": function() { return /* binding */ AppSettingsModalPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_settings_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app-settings-modal.page.html */ 51741);
/* harmony import */ var _app_settings_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-settings-modal.page.scss */ 54590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_about_us_about_us_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/about-us/about-us.page */ 88844);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../currency-list/currency-list.page */ 61511);
/* harmony import */ var _language_language_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../language/language.page */ 96463);
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ 76727);
/* harmony import */ var _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../refund-policy/refund-policy.page */ 30985);
/* harmony import */ var _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../term-services/term-services.page */ 18681);














let AppSettingsModalPage = class AppSettingsModalPage {
    constructor(modalCtrl, appUserService, appHttpService, config) {
        this.modalCtrl = modalCtrl;
        this.appUserService = appUserService;
        this.appHttpService = appHttpService;
        this.config = config;
        this.darkModeToggle = false;
        if (this.config.darkModeBool)
            this.darkModeToggle = true;
    }
    openAboutUsPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_about_us_about_us_page__WEBPACK_IMPORTED_MODULE_2__.AboutUsPage,
            });
            return yield modal.present();
        });
    }
    openRefundPolicyPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_9__.RefundPolicyPage,
            });
            return yield modal.present();
        });
    }
    openPrivacyPolicyPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_8__.PrivacyPolicyPage,
            });
            return yield modal.present();
        });
    }
    openTermsPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_10__.TermServicesPage,
            });
            return yield modal.present();
        });
    }
    openLanguagePage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _language_language_page__WEBPACK_IMPORTED_MODULE_7__.LanguagePage,
            });
            return yield modal.present();
        });
    }
    openCurrencyPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_6__.CurrencyListPage,
            });
            return yield modal.present();
        });
    }
    logout() {
        this.appHttpService.postHttp('customer_logout', {}, true).then((data) => {
            this.appUserService.logOut();
            this.dismiss();
        });
    }
    changeDarkMode() {
        this.config.enableDarkMode(this.darkModeToggle);
    }
    //close modal
    dismiss() {
        this.modalCtrl.dismiss();
    }
    ngOnInit() {
    }
};
AppSettingsModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_4__.AppUserService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_3__.AppHttpService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService }
];
AppSettingsModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-app-settings-modal',
        template: _raw_loader_app_settings_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_settings_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppSettingsModalPage);



/***/ }),

/***/ 28418:
/*!**********************************************************!*\
  !*** ./src/app/modals/blank-modal/blank-modal.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankModalPageModule": function() { return /* binding */ BlankModalPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _blank_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blank-modal.page */ 60750);







const routes = [
    {
        path: '',
        component: _blank_modal_page__WEBPACK_IMPORTED_MODULE_0__.BlankModalPage
    }
];
let BlankModalPageModule = class BlankModalPageModule {
};
BlankModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_blank_modal_page__WEBPACK_IMPORTED_MODULE_0__.BlankModalPage],
        entryComponents: [_blank_modal_page__WEBPACK_IMPORTED_MODULE_0__.BlankModalPage]
    })
], BlankModalPageModule);



/***/ }),

/***/ 60750:
/*!********************************************************!*\
  !*** ./src/app/modals/blank-modal/blank-modal.page.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankModalPage": function() { return /* binding */ BlankModalPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_blank_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./blank-modal.page.html */ 35175);
/* harmony import */ var _blank_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blank-modal.page.scss */ 78566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let BlankModalPage = class BlankModalPage {
    constructor(modalCont) {
        this.modalCont = modalCont;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        //this.modalCont.dismiss();
    }
};
BlankModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
BlankModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-blank-modal',
        template: _raw_loader_blank_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_blank_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BlankModalPage);



/***/ }),

/***/ 22479:
/*!**************************************************************!*\
  !*** ./src/app/modals/currency-list/currency-list.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyListPageModule": function() { return /* binding */ CurrencyListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _currency_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-list.page */ 61511);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _currency_list_page__WEBPACK_IMPORTED_MODULE_0__.CurrencyListPage
    }
];
let CurrencyListPageModule = class CurrencyListPageModule {
};
CurrencyListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        declarations: [_currency_list_page__WEBPACK_IMPORTED_MODULE_0__.CurrencyListPage],
        entryComponents: [
            _currency_list_page__WEBPACK_IMPORTED_MODULE_0__.CurrencyListPage
        ]
    })
], CurrencyListPageModule);



/***/ }),

/***/ 61511:
/*!************************************************************!*\
  !*** ./src/app/modals/currency-list/currency-list.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyListPage": function() { return /* binding */ CurrencyListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_currency_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./currency-list.page.html */ 26943);
/* harmony import */ var _currency_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-list.page.scss */ 54854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var src_services_app_recentproducts_app_recent_products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-recentproducts/app-recent-products.service */ 84113);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);












let CurrencyListPage = class CurrencyListPage {
    constructor(loading, config, shared, appCartService, modalCtrl, appHttpService, appRecentProductsService, appLogService) {
        this.loading = loading;
        this.config = config;
        this.shared = shared;
        this.appCartService = appCartService;
        this.modalCtrl = modalCtrl;
        this.appHttpService = appHttpService;
        this.appRecentProductsService = appRecentProductsService;
        this.appLogService = appLogService;
        this.currencyListArray = [];
        this.getListOfCurrency();
    }
    getListOfCurrency() {
        this.loading.show();
        this.appHttpService.getHttp('currency').then((data) => {
            this.loading.hide();
            this.currencyListArray = data;
            this.currencyListArray.forEach(val => {
                if (this.config.currencyIdNumber == val.currency_id)
                    this.selectedCurrency = val;
            });
        });
    }
    updateCurrency(value) {
        if (value != undefined && this.config.currencyIdNumber != value.currency_id) {
            this.loading.show();
            localStorage.currencyIdNumber = value.currency_id;
            localStorage.currencyCodeString = value.title;
            localStorage.currencySymbolString = value.code;
            localStorage.currencyPositionString = value.symbol_position;
            localStorage.currencyDecimalNumber = value.decimal_place;
            //this.appCartService.emptyCart();
            //this.appRecentProductsService.emptyRecentViewed();
            setTimeout(() => {
                window.location.reload();
                this.loading.hide();
            }, 900);
        }
    }
    getSelectedColor(c) {
        if (c.currency_id == this.config.currencyIdNumber) {
            return 'primary';
        }
    }
    //close modal
    dismiss() {
        this.modalCtrl.dismiss();
    }
    ngOnInit() {
    }
};
CurrencyListPage.ctorParameters = () => [
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_6__.AppCartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService },
    { type: src_services_app_recentproducts_app_recent_products_service__WEBPACK_IMPORTED_MODULE_7__.AppRecentProductsService },
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_8__.AppLogService }
];
CurrencyListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-currency-list',
        template: _raw_loader_currency_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_currency_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CurrencyListPage);



/***/ }),

/***/ 32001:
/*!**************************************************************!*\
  !*** ./src/app/modals/demo-settings/demo-settings.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoSettingsPageModule": function() { return /* binding */ DemoSettingsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _demo_settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-settings.page */ 7535);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _demo_settings_page__WEBPACK_IMPORTED_MODULE_0__.DemoSettingsPage
    }
];
let DemoSettingsPageModule = class DemoSettingsPageModule {
};
DemoSettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_demo_settings_page__WEBPACK_IMPORTED_MODULE_0__.DemoSettingsPage]
    })
], DemoSettingsPageModule);



/***/ }),

/***/ 7535:
/*!************************************************************!*\
  !*** ./src/app/modals/demo-settings/demo-settings.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoSettingsPage": function() { return /* binding */ DemoSettingsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_demo_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./demo-settings.page.html */ 23551);
/* harmony import */ var _demo_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo-settings.page.scss */ 79708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);
/* harmony import */ var src_services_app_recentproducts_app_recent_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-recentproducts/app-recent-products.service */ 84113);
/* harmony import */ var src_services_app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-wishlist/app-wish-list.service */ 70182);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);













let DemoSettingsPage = class DemoSettingsPage {
    constructor(loading, modalCont, config, appCartService, nav, appHttpService, shared, appWishListService, appRecentProductsService, appLogService) {
        this.loading = loading;
        this.modalCont = modalCont;
        this.config = config;
        this.appCartService = appCartService;
        this.nav = nav;
        this.appHttpService = appHttpService;
        this.shared = shared;
        this.appWishListService = appWishListService;
        this.appRecentProductsService = appRecentProductsService;
        this.appLogService = appLogService;
        this.colors = [
            { value: '#0478ed', name: 'default' },
            //{ value: '#ffffff', name: 'white' },
            { value: '#EC3F34', name: 'green-theme' },
            { value: '#BF04A0', name: 'red-theme' },
            { value: '#FCAD8E', name: 'magnesium-theme' },
            { value: '#FF8EA6', name: 'salmon-theme' },
            { value: '#44B3FF', name: 'plum-theme' },
            { value: '#9546FE', name: 'blue-theme' },
            { value: '#A6633C', name: 'pink-theme' },
            { value: '#3CA68D', name: 'orange-theme' },
            { value: '#3C51A6', name: 'maroon-theme' },
            { value: '#726DFF', name: 'cayanne-theme' },
            { value: '#FF6D6D', name: 'sea-theme' },
            { value: '#B3182A', name: 'theme15' },
            { value: '#3980ff', name: 'theme16' },
            { value: '#483A6F', name: 'theme17' },
            { value: '#621529', name: 'theme18' },
            { value: '#fb8500', name: 'theme19' },
            { value: '#f72585', name: 'theme20' },
            { value: '#606c38', name: 'theme21' },
            { value: '#582f0e', name: 'theme22' },
            { value: '#ffc300', name: 'theme23' },
            { value: '#bfd200', name: 'theme24' },
            { value: '#77bfa3', name: 'theme25' },
            { value: '#2e294e', name: 'theme26' },
            { value: '#22333b', name: 'theme27' },
            { value: '#118ab2', name: 'theme28' },
            { value: '#e63946', name: 'theme29' },
            { value: '#f2542d', name: 'theme30' },
            { value: '#0466c8', name: 'theme31' },
            { value: '#c5d86d', name: 'theme32' },
            // { value: '#76d6ff', name: 'sky' },
            // { value: '#9437ff', name: 'grape' },
        ];
        this.themeMode = 'dark';
        this.loaderLanguages = true;
        this.loaderCurrecny = true;
        this.banner = "1";
        //================================================================
        this.languagesArray = [];
        this.currencyListArray = [];
        this.getLanguages();
        this.getListOfCurrency();
        if (this.config.darkModeBool) {
            this.themeMode = 'dark';
        }
        else {
            this.themeMode = 'light';
        }
        //this.banner = this.config.bannerStyle;
        console.log(this.config.darkModeBool, this.themeMode);
    }
    modeChange() {
        if (this.themeMode == 'dark') {
            this.config.enableDarkMode(true);
        }
        else {
            this.config.enableDarkMode(false);
        }
    }
    setBannerStyle(banner) {
        // this.config.setBannerStyle(banner);
        // this.config.bannerStyle = banner
    }
    setCardStyle(card) {
        this.config.productCardStyleNumber = card;
        this.dismiss();
    }
    setCategoryStyle(s) {
        this.config.categoryPageNumber = s;
        this.dismiss();
    }
    setHomeStyle(s) {
        this.config.homePageNumber = s;
        this.dismiss();
    }
    //close modal
    dismiss() {
        this.modalCont.dismiss();
    }
    ngOnInit() {
    }
    changeAppTheme(value) {
        this.config.appThemeString = value;
    }
    getLanguages() {
        //getting all languages
        this.appHttpService.getHttp('language?page=1&limit=100').then((data) => {
            this.loaderLanguages = false;
            this.languagesArray = data;
            for (let data of this.languagesArray) {
                if (data.id == this.config.languageIdNumber) {
                    this.selectedLanguage = data;
                }
            }
        });
    }
    updateLanguage(lang) {
        if (lang != undefined && this.config.languageIdNumber != lang.id) {
            this.loading.show();
            localStorage.languageIdNumber = lang.id;
            localStorage.languageCodeString = lang.code;
            localStorage.appDirectionString = lang.direction;
            //this.appCartService.emptyCart();
            //this.appRecentProductsService.emptyRecentViewed();
            setTimeout(() => {
                window.location.reload();
                this.loading.hide();
            }, 900);
        }
    }
    getListOfCurrency() {
        this.appHttpService.getHttp('currency').then((data) => {
            this.currencyListArray = data;
            this.loaderCurrecny = false;
            this.currencyListArray.forEach(val => {
                if (this.config.currencyIdNumber == val.currency_id)
                    this.selectedCurrency = val;
            });
        });
    }
    updateCurrency(value) {
        if (value != undefined && this.config.currencyIdNumber != value.currency_id) {
            this.loading.show();
            localStorage.currencyIdNumber = value.currency_id;
            localStorage.currencyCodeString = value.title;
            localStorage.currencySymbolString = value.code;
            localStorage.currencyPositionString = value.symbol_position;
            localStorage.currencyDecimalNumber = value.decimal_place;
            //this.appCartService.emptyCart();
            //this.appRecentProductsService.emptyRecentViewed();
            setTimeout(() => {
                window.location.reload();
                this.loading.hide();
            }, 900);
        }
    }
};
DemoSettingsPage.ctorParameters = () => [
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_8__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_7__.ConfigService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_2__.AppCartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_3__.AppHttpService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_9__.SharedDataService },
    { type: src_services_app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_6__.AppWishListService },
    { type: src_services_app_recentproducts_app_recent_products_service__WEBPACK_IMPORTED_MODULE_5__.AppRecentProductsService },
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_4__.AppLogService }
];
DemoSettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-demo-settings',
        template: _raw_loader_demo_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_demo_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DemoSettingsPage);



/***/ }),

/***/ 21260:
/*!******************************************************************!*\
  !*** ./src/app/modals/forgot-password/forgot-password.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": function() { return /* binding */ ForgotPasswordPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 38244);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage],
        entryComponents: [
            _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
        ]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 38244:
/*!****************************************************************!*\
  !*** ./src/app/modals/forgot-password/forgot-password.page.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": function() { return /* binding */ ForgotPasswordPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgot-password.page.html */ 58215);
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss */ 74083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);










let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(loading, config, shared, appHttpService, appToastService, modalCtrl) {
        this.loading = loading;
        this.config = config;
        this.shared = shared;
        this.appHttpService = appHttpService;
        this.appToastService = appToastService;
        this.modalCtrl = modalCtrl;
        this.formData = {
            email: '',
        };
        this.errorMessage = '';
    }
    forgetPassword() {
        this.errorMessage = '';
        this.appHttpService.postHttp('forget_password', this.formData, true).then((data) => {
            this.dismiss();
            this.appToastService.toastMiddle("Email Sent Successfully!");
            // if (data.success == 1) {
            //   this.appToastService.toast(data.message);
            //   this.dismiss();
            // }
            // if (data.success == 0) {
            //   this.errorMessage = data.message;
            //   this.appToastService.toast(data.message);
            // }
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
    ngOnInit() {
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService },
    { type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__.AppToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 88266:
/*!****************************************************!*\
  !*** ./src/app/modals/language/language.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePageModule": function() { return /* binding */ LanguagePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _language_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language.page */ 96463);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _language_page__WEBPACK_IMPORTED_MODULE_0__.LanguagePage
    }
];
let LanguagePageModule = class LanguagePageModule {
};
LanguagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        exports: [
            _language_page__WEBPACK_IMPORTED_MODULE_0__.LanguagePage
        ],
        declarations: [_language_page__WEBPACK_IMPORTED_MODULE_0__.LanguagePage],
        entryComponents: [_language_page__WEBPACK_IMPORTED_MODULE_0__.LanguagePage]
    })
], LanguagePageModule);



/***/ }),

/***/ 96463:
/*!**************************************************!*\
  !*** ./src/app/modals/language/language.page.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagePage": function() { return /* binding */ LanguagePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./language.page.html */ 13353);
/* harmony import */ var _language_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.page.scss */ 70369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);









let LanguagePage = class LanguagePage {
    constructor(loading, modalCont, config, appHttpService, shared) {
        this.loading = loading;
        this.modalCont = modalCont;
        this.config = config;
        this.appHttpService = appHttpService;
        this.shared = shared;
        this.languagesArray = [];
        this.getLanguages();
    }
    getLanguages() {
        //getting all languages
        this.loading.show();
        this.appHttpService.getHttp('language?page=1&limit=100').then((data) => {
            this.loading.hide();
            this.languagesArray = data;
            for (let data of this.languagesArray) {
                if (data.id == this.config.languageIdNumber) {
                    this.selectedLanguage = data;
                }
            }
        });
    }
    updateLanguage(lang) {
        if (lang != undefined && this.config.languageIdNumber != lang.id) {
            this.loading.show();
            localStorage.languageIdNumber = lang.id;
            localStorage.languageCodeString = lang.code;
            localStorage.appDirectionString = lang.direction;
            //this.appCartService.emptyCart();
            //this.appRecentProductsService.emptyRecentViewed();
            setTimeout(() => {
                window.location.reload();
                this.loading.hide();
            }, 900);
        }
    }
    getSelectedColor(l) {
        if (l.id == this.config.languageIdNumber) {
            return 'primary';
        }
    }
    //close modal
    dismiss() {
        this.modalCont.dismiss();
    }
    ngOnInit() {
    }
};
LanguagePage.ctorParameters = () => [
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService }
];
LanguagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-language',
        template: _raw_loader_language_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_language_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LanguagePage);



/***/ }),

/***/ 12425:
/*!**********************************************!*\
  !*** ./src/app/modals/login/login.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 33020);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
        entryComponents: [
            _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
        ]
    })
], LoginPageModule);



/***/ }),

/***/ 33020:
/*!********************************************!*\
  !*** ./src/app/modals/login/login.page.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 53633);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 95708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forgot-password/forgot-password.page */ 38244);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);
/* harmony import */ var src_services_app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/services/app-alert/app-alert.service */ 20728);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 30222);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 19342);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @capacitor/app */ 42138);
/* harmony import */ var _capacitor_community_apple_sign_in__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @capacitor-community/apple-sign-in */ 90695);



















let LoginPage = class LoginPage {
    constructor(config, modalCtrl, loading, appCartService, shared, navCtrl, appEventsService, navParams, appHttpService, appToastService, appAlertService, appUserService, fb, googlePlus) {
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.appCartService = appCartService;
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.appEventsService = appEventsService;
        this.navParams = navParams;
        this.appHttpService = appHttpService;
        this.appToastService = appToastService;
        this.appAlertService = appAlertService;
        this.appUserService = appUserService;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.formData = { email: '', password: '' };
        this.signUpformData = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            confirm_password: '',
            status: 1
        };
        this.errorMessage = '';
        this.topSegmentsString = "signIn";
        this.hideGuestLogin = navParams.get('hideGuestLogin');
        this.shared.currentOpenedModel = this;
    }
    openForgetPasswordPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_4__.ForgotPasswordPage,
            });
            return yield modal.present();
        });
    }
    login() {
        let info = this.formData;
        if (this.appUserService.checkIfGuestSessionIsAvailable()) {
            info = Object.assign({ session_id: this.appUserService.getGuestSession() }, info);
        }
        this.appHttpService.postHttp('customer_login', info, true).then((data) => {
            this.appUserService.login(data);
            this.dismiss();
        });
    }
    signUp() {
        let info = this.signUpformData;
        if (this.appUserService.checkIfGuestSessionIsAvailable()) {
            info = Object.assign({ session_id: this.appUserService.getGuestSession() }, info);
        }
        this.appHttpService.postHttp('customer_register', info, true).then((data) => {
            this.appUserService.login(data);
            this.dismiss();
        });
    }
    facebookLogin() {
        this.fb.getLoginStatus().then((res) => {
            if (res.status == 'connected') {
                console.log("user connected already" + res.authResponse.accessToken);
                this.createAccount(res.authResponse.accessToken, 'fb');
            }
            else {
                console.log("USer Not login ");
                this.fb.login(['public_profile', 'email'])
                    .then((res) => {
                    // this.alert.show('Logged into Facebook!' + JSON.stringify(res));
                    console.log("successfully login ");
                    this.createAccount(res.authResponse.accessToken, 'fb');
                })
                    .catch(e => this.appAlertService.showAlert('Error logging into Facebook' + JSON.stringify(e)));
            }
        }).catch(e => this.appAlertService.showAlert('Error Check Login Status Facebook' + JSON.stringify(e)));
    }
    openAppleSignIn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, function* () {
            // const { SignInWithApple } = Plugins;
            // SignInWithApple.Authorize()
            //   .then(async (res) => {
            //     if (res.response && res.response.identityToken) {
            //       this.createAccount(res.response, 'apple');
            //       this.appAlertService.showAlert(JSON.stringify(res.response))
            //     } else {
            //       this.presentAlert();
            //     }
            //   })
            //   .catch((response) => {
            //     this.presentAlert();
            //   });
            let info = yield _capacitor_app__WEBPACK_IMPORTED_MODULE_14__.App.getInfo();
            let options = {
                clientId: info.id,
                redirectURI: this.config.urlString,
                scopes: 'email name',
                //  state: '12345',
                //  nonce: 'nonce',
            };
            _capacitor_community_apple_sign_in__WEBPACK_IMPORTED_MODULE_15__.SignInWithApple.authorize(options)
                .then((result) => {
                // Handle user information
                // Validate token with server and create new session
                this.createAccount(result, 'apple');
            })
                .catch(error => {
                // Handle error
            });
            // {
            //   "response": {
            //   "email": "foo@bar.com",
            //   "identityToken": "importantToken",
            //   "familyName": "Grimm",
            //   "user": "AppleUserId",
            //   "givenName": "Simon",
            //   "authorizationCode": "authCode"
            //   }
            // }
        });
    }
    presentAlert() {
        this.appAlertService.showAlertWithTitle("Please try again later", "Login Failed");
    }
    googleLogin() {
        this.loading.autoHide(500);
        this.googlePlus.login({})
            .then(res => {
            //  alert(JSON.stringify(res))
            this.createAccount(res, 'google');
        })
            .catch(err => this.appAlertService.showAlert(JSON.stringify(err)));
    }
    //============================================================================================  
    //creating new account using function facebook or google details 
    createAccount(info, type) {
        // alert(info);
        var dat = {};
        var url = '';
        if (type == 'fb') {
            url = 'customer_login/facebook/callback';
            url += "?code=" + info + '&scope=public_profile&authuser=email&prompt=prompt&fromApp=1';
            //dat.access_token = info;
        }
        else if (type == 'phone') {
            url = 'phoneregistration';
            dat.phone = info;
        }
        else if (type == 'apple') {
            url = 'customer_login/apple/callback';
            url += "?code=" + info.authorizationCode + '&scope=public_profile&authuser=email&prompt=prompt&fromApp=1';
        }
        else if (type == 'google') {
            url = 'customer_login/google/callback';
            url += "?code=" + info.accessToken + '&scope=public_profile&authuser=email&prompt=prompt&fromApp=1';
        }
        this.appHttpService.getHttp(url, true).then((data) => {
            this.appUserService.login(data);
            this.dismiss();
        });
    }
    ;
    //close modal
    dismiss() {
        this.modalCtrl.dismiss();
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_8__.AppCartService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NavController },
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_6__.AppEventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.NavParams },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_7__.AppHttpService },
    { type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_9__.AppToastService },
    { type: src_services_app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_10__.AppAlertService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_11__.AppUserService },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_12__.Facebook },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_13__.GooglePlus }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 88901:
/*!**********************************************************!*\
  !*** ./src/app/modals/phone-login/phone-login.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneLoginPageModule": function() { return /* binding */ PhoneLoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _phone_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-login.page */ 20192);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);







let PhoneLoginPageModule = class PhoneLoginPageModule {
};
PhoneLoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        declarations: [_phone_login_page__WEBPACK_IMPORTED_MODULE_0__.PhoneLoginPage],
        entryComponents: [
            _phone_login_page__WEBPACK_IMPORTED_MODULE_0__.PhoneLoginPage
        ]
    })
], PhoneLoginPageModule);



/***/ }),

/***/ 20192:
/*!********************************************************!*\
  !*** ./src/app/modals/phone-login/phone-login.page.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhoneLoginPage": function() { return /* binding */ PhoneLoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_phone_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./phone-login.page.html */ 18984);
/* harmony import */ var _phone_login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./phone-login.page.scss */ 35667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var src_services_firebase_phone_auth_firebase_phone_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/firebase-phone-auth/firebase-phone-auth.service */ 42049);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);
/* harmony import */ var src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-order/app-order.service */ 92248);











let PhoneLoginPage = class PhoneLoginPage {
    constructor(config, modalCtrl, loading, shared, appEventsService, firebasePhoneAuthService, appOrderService) {
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.appEventsService = appEventsService;
        this.firebasePhoneAuthService = firebasePhoneAuthService;
        this.appOrderService = appOrderService;
        this.formData = {
            customers_telephone: '',
        };
        this.errorMessage = '';
        this.shared.currentOpenedModel = this;
        let loginWithPhoneNumber = this.appEventsService.subscribe("loginWithPhoneNumber");
        loginWithPhoneNumber.subscriptions.add(loginWithPhoneNumber.event.subscribe(data => {
            // if (this.appOrderService.orderDetails.guest_status == 0) {
            //   this.dismiss();
            // }
        }));
    }
    login() {
        if (this.config.phoneAuthWithFirebaseBool)
            this.firebasePhoneAuthService.verifyPhoneNumber(this.formData.customers_telephone);
    }
    ngAfterViewInit() {
        if (this.config.phoneAuthWithFirebaseBool)
            this.firebasePhoneAuthService.createRecaptcha();
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss();
        });
    }
    ngOnInit() {
    }
};
PhoneLoginPage.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_6__.AppEventsService },
    { type: src_services_firebase_phone_auth_firebase_phone_auth_service__WEBPACK_IMPORTED_MODULE_5__.FirebasePhoneAuthService },
    { type: src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_7__.AppOrderService }
];
PhoneLoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-phone-login',
        template: _raw_loader_phone_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_phone_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PhoneLoginPage);



/***/ }),

/***/ 94495:
/*!****************************************************************!*\
  !*** ./src/app/modals/privacy-policy/privacy-policy.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPageModule": function() { return /* binding */ PrivacyPolicyPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.page */ 76727);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPage
    }
];
let PrivacyPolicyPageModule = class PrivacyPolicyPageModule {
};
PrivacyPolicyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        declarations: [_privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPage],
        entryComponents: [
            _privacy_policy_page__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyPage
        ]
    })
], PrivacyPolicyPageModule);



/***/ }),

/***/ 76727:
/*!**************************************************************!*\
  !*** ./src/app/modals/privacy-policy/privacy-policy.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyPage": function() { return /* binding */ PrivacyPolicyPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./privacy-policy.page.html */ 88706);
/* harmony import */ var _privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.page.scss */ 71631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let PrivacyPolicyPage = class PrivacyPolicyPage {
    constructor(mdCtrl, shared, config, appHttpService) {
        this.mdCtrl = mdCtrl;
        this.shared = shared;
        this.config = config;
        this.appHttpService = appHttpService;
        this.shared.currentOpenedModel = this;
    }
    ngOnInit() {
        if (this.shared.privacyPolicy == "")
            this.getPageData();
    }
    getPageData() {
        let url = "pages/3";
        url += "?language_id=" + this.config.languageIdNumber;
        this.appHttpService.getHttp(url).then((data) => {
            this.shared.privacyPolicy = data.detail[0].description;
        });
    }
    // For Modal Dismiss
    dismiss() {
        this.shared.currentOpenedModel = null;
        this.mdCtrl.dismiss();
    }
};
PrivacyPolicyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__.AppHttpService }
];
PrivacyPolicyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-privacy-policy',
        template: _raw_loader_privacy_policy_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_privacy_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrivacyPolicyPage);



/***/ }),

/***/ 77288:
/*!********************************************************************************************!*\
  !*** ./src/app/modals/product-attributes-modal/product-attributes-modal-routing.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductAttributesModalPageRoutingModule": function() { return /* binding */ ProductAttributesModalPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _product_attributes_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-attributes-modal.page */ 44637);




const routes = [
    {
        path: '',
        component: _product_attributes_modal_page__WEBPACK_IMPORTED_MODULE_0__.ProductAttributesModalPage
    }
];
let ProductAttributesModalPageRoutingModule = class ProductAttributesModalPageRoutingModule {
};
ProductAttributesModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductAttributesModalPageRoutingModule);



/***/ }),

/***/ 47954:
/*!************************************************************************************!*\
  !*** ./src/app/modals/product-attributes-modal/product-attributes-modal.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductAttributesModalPageModule": function() { return /* binding */ ProductAttributesModalPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _product_attributes_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-attributes-modal-routing.module */ 77288);
/* harmony import */ var _product_attributes_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-attributes-modal.page */ 44637);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);









let ProductAttributesModalPageModule = class ProductAttributesModalPageModule {
};
ProductAttributesModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _product_attributes_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductAttributesModalPageRoutingModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_3__.ImageValidateDirectiveModule
        ],
        declarations: [_product_attributes_modal_page__WEBPACK_IMPORTED_MODULE_1__.ProductAttributesModalPage]
    })
], ProductAttributesModalPageModule);



/***/ }),

/***/ 44637:
/*!**********************************************************************************!*\
  !*** ./src/app/modals/product-attributes-modal/product-attributes-modal.page.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductAttributesModalPage": function() { return /* binding */ ProductAttributesModalPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_product_attributes_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-attributes-modal.page.html */ 51331);
/* harmony import */ var _product_attributes_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-attributes-modal.page.scss */ 96645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/app-toast/app-toast.service */ 58824);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);









let ProductAttributesModalPage = class ProductAttributesModalPage {
    constructor(appToastService, config, modalCtrl, appHttpService, appCartService) {
        this.appToastService = appToastService;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.appHttpService = appHttpService;
        this.appCartService = appCartService;
        this.data = {};
        this.imageUrlString = "assets/dumy.jpg";
        this.quantityNumber = 1;
        this.priceNumber = 0;
        this.selectedVariationsArray = [];
        this.selectedCombitionProductObject = {};
        this.enableOutOFStockButtonBool = false;
    }
    ngOnInit() {
        this.priceNumber = this.data.product_price;
        if (this.data.product_discount_price != 0)
            this.priceNumber = this.data.product_discount_price;
        if (this.data.product_type == "variable")
            this.setDefaultAttributes();
    }
    setDefaultAttributes() {
        console.clear();
        this.data.product_combination[0].combination.forEach(element => {
            console.log(element);
        });
    }
    addVaration(attribute, id, name) {
        let found = 0;
        this.selectedVariationsArray.forEach(element => {
            if (attribute == element.attribute) {
                element.id = id;
                element.name = name;
                found++;
            }
        });
        if (found == 0)
            this.selectedVariationsArray.push({ "attribute": attribute, "id": id, "name": name });
        if (this.selectedVariationsArray.length == this.data.attribute.length) {
            this.findAndSelectProductCombination();
        }
    }
    findAndSelectProductCombination() {
        let found = 0;
        this.data.product_combination.forEach(combinations => {
            found = 0;
            this.selectedVariationsArray.forEach(inner => {
                combinations.combination.forEach(element => {
                    if (element.variation_id == inner.id) {
                        console.log(element.variation_id, inner.id);
                        found++;
                    }
                });
                //let searchString = JSON.stringify(combinations)
                //if (searchString.includes('"variation_id":' + inner.id)) found++
                //console.log(inner.name, searchString.includes('"variation_id":' + inner.id))
                if (found == this.selectedVariationsArray.length)
                    this.selectedCombitionProductObject = combinations;
            });
        });
        console.log(this.selectedCombitionProductObject);
        this.imageUrlString = this.config.imgThumbnailUrlString + this.selectedCombitionProductObject.gallary.gallary_name;
        this.priceNumber = this.selectedCombitionProductObject.price;
        this.enableOutOFStockButtonBool = false;
    }
    selectedBadge(attribute, id) {
        let found = 0;
        this.selectedVariationsArray.forEach(element => {
            if (attribute == element.attribute && id == element.id) {
                found++;
            }
        });
        if (found == 0) {
            return "light";
        }
        else {
            return "primary";
        }
    }
    addToCart() {
        if (this.selectedVariationsArray.length != this.data.attribute.length) {
            let msg = "Please Select all Variations";
            this.appToastService.toastError(msg);
            return;
        }
        else {
            this.checkingProductStock();
        }
    }
    checkingProductStock() {
        this.appCartService.checkProductStock(this.data.product_id, this.data.product_type, this.selectedCombitionProductObject.product_combination_id, this.quantityNumber).then((data) => {
            if (data.status == "outOfStock") {
                this.enableOutOFStockButtonBool = true;
            }
            else if (data.status == "canAddToCart") {
                this.appCartService.addToCart(this.data.product_id, this.quantityNumber, this.selectedCombitionProductObject.product_combination_id);
            }
            else if (data.status == "quantityIsLimited") {
                this.appToastService.toastError("Quantity is Limited");
                this.quantityNumber = data.stock;
            }
        });
    }
    quantityMinus() {
        if (this.quantityNumber > 1) {
            this.quantityNumber--;
            this.enableOutOFStockButtonBool = false;
        }
    }
    calculatePrice() {
        return this.quantityNumber * this.priceNumber;
    }
    quantityPlus() {
        //this.enableOutOFStockButtonBool = false
        this.quantityNumber++;
    }
    //close modal
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
ProductAttributesModalPage.ctorParameters = () => [
    { type: src_services_app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_3__.AppToastService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__.AppHttpService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_5__.AppCartService }
];
ProductAttributesModalPage.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
ProductAttributesModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product-attributes-modal',
        template: _raw_loader_product_attributes_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_attributes_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductAttributesModalPage);



/***/ }),

/***/ 72456:
/*!**************************************************************!*\
  !*** ./src/app/modals/refund-policy/refund-policy.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundPolicyPageModule": function() { return /* binding */ RefundPolicyPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _refund_policy_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./refund-policy.page */ 30985);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _refund_policy_page__WEBPACK_IMPORTED_MODULE_0__.RefundPolicyPage
    }
];
let RefundPolicyPageModule = class RefundPolicyPageModule {
};
RefundPolicyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        declarations: [_refund_policy_page__WEBPACK_IMPORTED_MODULE_0__.RefundPolicyPage],
        entryComponents: [
            _refund_policy_page__WEBPACK_IMPORTED_MODULE_0__.RefundPolicyPage
        ]
    })
], RefundPolicyPageModule);



/***/ }),

/***/ 30985:
/*!************************************************************!*\
  !*** ./src/app/modals/refund-policy/refund-policy.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundPolicyPage": function() { return /* binding */ RefundPolicyPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_refund_policy_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./refund-policy.page.html */ 82920);
/* harmony import */ var _refund_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./refund-policy.page.scss */ 61421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let RefundPolicyPage = class RefundPolicyPage {
    constructor(mdCtrl, shared, config, appHttpService) {
        this.mdCtrl = mdCtrl;
        this.shared = shared;
        this.config = config;
        this.appHttpService = appHttpService;
        this.shared.currentOpenedModel = this;
    }
    ngOnInit() {
        if (this.shared.refundPolicy == "")
            this.getPageData();
    }
    getPageData() {
        let url = "pages/2";
        url += "?language_id=" + this.config.languageIdNumber;
        this.appHttpService.getHttp(url).then((data) => {
            this.shared.refundPolicy = data.detail[0].description;
        });
    }
    // For Modal Dismiss
    dismiss() {
        this.shared.currentOpenedModel = null;
        this.mdCtrl.dismiss();
    }
};
RefundPolicyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__.AppHttpService }
];
RefundPolicyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-refund-policy',
        template: _raw_loader_refund_policy_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_refund_policy_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RefundPolicyPage);



/***/ }),

/***/ 63636:
/*!****************************************************************!*\
  !*** ./src/app/modals/select-country/select-country.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCountryPageModule": function() { return /* binding */ SelectCountryPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _select_country_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-country.page */ 30862);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _select_country_page__WEBPACK_IMPORTED_MODULE_0__.SelectCountryPage
    }
];
let SelectCountryPageModule = class SelectCountryPageModule {
};
SelectCountryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        ],
        declarations: [_select_country_page__WEBPACK_IMPORTED_MODULE_0__.SelectCountryPage]
    })
], SelectCountryPageModule);



/***/ }),

/***/ 30862:
/*!**************************************************************!*\
  !*** ./src/app/modals/select-country/select-country.page.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCountryPage": function() { return /* binding */ SelectCountryPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_select_country_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./select-country.page.html */ 66286);
/* harmony import */ var _select_country_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-country.page.scss */ 74627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-order/app-order.service */ 92248);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);













let SelectCountryPage = class SelectCountryPage {
    constructor(http, appEventsService, config, modalCtrl, loading, shared, appHttpService, navParams, appOrderService, appLogService) {
        this.http = http;
        this.appEventsService = appEventsService;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.appHttpService = appHttpService;
        this.navParams = navParams;
        this.appOrderService = appOrderService;
        this.appLogService = appLogService;
        this.searchQuery = '';
        this.countries = new Array;
        let url = 'country?sortBy=id&sortType=ASC&limit=999';
        url += "&language_id=" + this.config.languageIdNumber;
        appHttpService.getHttp(url, true).then((data) => {
            this.items = this.countries = data;
            setTimeout(() => { this.searchBar.setFocus(); }, 250);
        });
    }
    initializeItems() {
        this.items = this.countries;
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        let val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.country_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    //close modal
    dismiss(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss(data);
        });
    }
    selectCountry(data) {
        console.log(data);
        this.dismiss(data);
    }
    ngOnInit() {
    }
};
SelectCountryPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient },
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_5__.AppEventsService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_6__.AppHttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavParams },
    { type: src_services_app_order_app_order_service__WEBPACK_IMPORTED_MODULE_7__.AppOrderService },
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_8__.AppLogService }
];
SelectCountryPage.propDecorators = {
    searchBar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['Searchbar', { static: false },] }]
};
SelectCountryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-select-country',
        template: _raw_loader_select_country_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_select_country_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectCountryPage);



/***/ }),

/***/ 17067:
/*!************************************************************!*\
  !*** ./src/app/modals/select-zones/select-zones.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectZonesPageModule": function() { return /* binding */ SelectZonesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _select_zones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-zones.page */ 11218);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _select_zones_page__WEBPACK_IMPORTED_MODULE_0__.SelectZonesPage
    }
];
let SelectZonesPageModule = class SelectZonesPageModule {
};
SelectZonesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        ],
        declarations: [_select_zones_page__WEBPACK_IMPORTED_MODULE_0__.SelectZonesPage]
    })
], SelectZonesPageModule);



/***/ }),

/***/ 11218:
/*!**********************************************************!*\
  !*** ./src/app/modals/select-zones/select-zones.page.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectZonesPage": function() { return /* binding */ SelectZonesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_select_zones_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./select-zones.page.html */ 4363);
/* harmony import */ var _select_zones_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-zones.page.scss */ 44441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-translation/app-translation.service */ 68829);








let SelectZonesPage = class SelectZonesPage {
    constructor(navParams, modalCtrl, appTranslationService, config, appHttpService) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.appTranslationService = appTranslationService;
        this.config = config;
        this.appHttpService = appHttpService;
        this.searchQuery = '';
        this.zones = new Array;
        this.countryId = 0;
        this.countryId = this.navParams.get('id');
        let url = 'country/' + this.countryId;
        url += "?getStates=1";
        url += "&language_id=" + this.config.languageIdNumber;
        appHttpService.getHttp(url, true).then((data) => {
            this.items = this.zones = data.states;
        });
    }
    initializeItems() {
        this.items = this.zones;
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        let val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }
    //close modal
    dismiss(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss(data);
        });
    }
    selectZone(data) {
        if (data == "other") {
            this.appTranslationService.translateString("other").then((data) => {
                this.dismiss({ id: 0, name: data });
            });
        }
        else
            this.dismiss(data);
    }
    ngOnInit() {
    }
};
SelectZonesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_4__.AppTranslationService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_3__.AppHttpService }
];
SelectZonesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-select-zones',
        template: _raw_loader_select_zones_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_select_zones_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SelectZonesPage);



/***/ }),

/***/ 91308:
/*!**************************************************!*\
  !*** ./src/app/modals/sign-up/sign-up.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPageModule": function() { return /* binding */ SignUpPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.page */ 58405);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
    }
];
let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage],
        entryComponents: [
            _sign_up_page__WEBPACK_IMPORTED_MODULE_0__.SignUpPage
        ]
    })
], SignUpPageModule);



/***/ }),

/***/ 58405:
/*!************************************************!*\
  !*** ./src/app/modals/sign-up/sign-up.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpPage": function() { return /* binding */ SignUpPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sign-up.page.html */ 18685);
/* harmony import */ var _sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-up.page.scss */ 87308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../term-services/term-services.page */ 18681);
/* harmony import */ var _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../refund-policy/refund-policy.page */ 30985);
/* harmony import */ var _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../privacy-policy/privacy-policy.page */ 76727);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);














let SignUpPage = class SignUpPage {
    constructor(http, config, modalCtrl, loading, shared, platform, appHttpService, appUserService) {
        this.http = http;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.shared = shared;
        this.platform = platform;
        this.appHttpService = appHttpService;
        this.appUserService = appUserService;
        this.formData = {
            customers_firstname: '',
            customers_lastname: '',
            email: '',
            password: '',
            customers_telephone: '',
        };
        this.image = "";
        this.errorMessage = '';
        this.shared.currentOpenedModel = this;
    }
    registerUser() {
        this.errorMessage = '';
        this.loading.show();
        this.appHttpService.postHttp('processregistration', this.formData).then((data) => {
            this.loading.hide();
            if (data.success == 1) {
                this.appUserService.login(data.data[0]);
                this.dismiss();
            }
            if (data.success == 0) {
                this.errorMessage = data.message;
            }
        });
    }
    openPrivacyPolicyPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_7__.PrivacyPolicyPage
            });
            return yield modal.present();
        });
    }
    openTermServicesPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _term_services_term_services_page__WEBPACK_IMPORTED_MODULE_5__.TermServicesPage
            });
            return yield modal.present();
        });
    }
    openRefundPolicyPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_6__.RefundPolicyPage
            });
            return yield modal.present();
        });
    }
    dismiss() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.modalCtrl.dismiss();
        });
    }
    ngOnInit() {
    }
};
SignUpPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_8__.AppHttpService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_9__.AppUserService }
];
SignUpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-sign-up',
        template: _raw_loader_sign_up_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sign_up_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignUpPage);



/***/ }),

/***/ 32348:
/*!**************************************************************!*\
  !*** ./src/app/modals/term-services/term-services.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermServicesPageModule": function() { return /* binding */ TermServicesPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _term_services_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./term-services.page */ 18681);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _term_services_page__WEBPACK_IMPORTED_MODULE_0__.TermServicesPage
    }
];
let TermServicesPageModule = class TermServicesPageModule {
};
TermServicesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        declarations: [_term_services_page__WEBPACK_IMPORTED_MODULE_0__.TermServicesPage],
        entryComponents: [
            _term_services_page__WEBPACK_IMPORTED_MODULE_0__.TermServicesPage
        ]
    })
], TermServicesPageModule);



/***/ }),

/***/ 18681:
/*!************************************************************!*\
  !*** ./src/app/modals/term-services/term-services.page.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermServicesPage": function() { return /* binding */ TermServicesPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_term_services_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./term-services.page.html */ 16241);
/* harmony import */ var _term_services_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./term-services.page.scss */ 28669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let TermServicesPage = class TermServicesPage {
    constructor(mdCtrl, shared, config, appHttpService) {
        this.mdCtrl = mdCtrl;
        this.shared = shared;
        this.config = config;
        this.appHttpService = appHttpService;
        this.shared.currentOpenedModel = this;
    }
    ngOnInit() {
        if (this.shared.termServices == "")
            this.getPageData();
    }
    getPageData() {
        let url = "pages/4";
        url += "?language_id=" + this.config.languageIdNumber;
        this.appHttpService.getHttp(url).then((data) => {
            this.shared.termServices = data.detail[0].description;
        });
    }
    // For Modal Dismiss
    dismiss() {
        this.shared.currentOpenedModel = null;
        this.mdCtrl.dismiss();
    }
};
TermServicesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__.AppHttpService }
];
TermServicesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-term-services',
        template: _raw_loader_term_services_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_term_services_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermServicesPage);



/***/ }),

/***/ 56223:
/*!***************************************************************************!*\
  !*** ./src/components/app-json-tree-view/app-json-tree-view.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppJsonTreeViewComponent": function() { return /* binding */ AppJsonTreeViewComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_json_tree_view_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app-json-tree-view.component.html */ 96262);
/* harmony import */ var _app_json_tree_view_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-json-tree-view.component.scss */ 96476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);





let AppJsonTreeViewComponent = class AppJsonTreeViewComponent {
    constructor(appLogService) {
        this.appLogService = appLogService;
        this.expanded = true;
        this.cleanOnChange = true;
        this.segments = [];
    }
    setInnerHtml(data) {
        this.appLogService.innerHtml = data;
    }
    ngOnInit() { }
    ngOnChanges() {
        if (this.cleanOnChange) {
            this.segments = [];
        }
        if (typeof this.json === 'object') {
            Object.keys(this.json).forEach(key => {
                this.segments.push(this.parseKeyValue(key, this.json[key]));
            });
        }
        else {
            this.segments.push(this.parseKeyValue(`(${typeof this.json})`, this.json));
        }
    }
    isExpandable(segment) {
        return segment.type === 'object' || segment.type === 'array';
    }
    toggle(segment) {
        if (this.isExpandable(segment)) {
            segment.expanded = !segment.expanded;
        }
    }
    parseKeyValue(key, value) {
        const segment = {
            key: key,
            value: value,
            type: undefined,
            description: '' + value,
            expanded: this.expanded
        };
        switch (typeof segment.value) {
            case 'number': {
                segment.type = 'number';
                break;
            }
            case 'boolean': {
                segment.type = 'boolean';
                break;
            }
            case 'function': {
                segment.type = 'function';
                break;
            }
            case 'string': {
                segment.type = 'string';
                segment.description = '"' + segment.value + '"';
                break;
            }
            case 'undefined': {
                segment.type = 'undefined';
                segment.description = 'undefined';
                break;
            }
            case 'object': {
                // yea, null is object
                if (segment.value === null) {
                    segment.type = 'null';
                    segment.description = 'null';
                }
                else if (Array.isArray(segment.value)) {
                    segment.type = 'array';
                    segment.description = 'Array[' + segment.value.length + '] ' + JSON.stringify(segment.value);
                }
                else if (segment.value instanceof Date) {
                    segment.type = 'date';
                }
                else {
                    segment.type = 'object';
                    segment.description = 'Object ' + JSON.stringify(segment.value);
                }
                break;
            }
        }
        return segment;
    }
};
AppJsonTreeViewComponent.ctorParameters = () => [
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__.AppLogService }
];
AppJsonTreeViewComponent.propDecorators = {
    json: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    cleanOnChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
AppJsonTreeViewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-app-json-tree-view',
        template: _raw_loader_app_json_tree_view_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_json_tree_view_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppJsonTreeViewComponent);



/***/ }),

/***/ 18497:
/*!************************************************************!*\
  !*** ./src/directives/appAnimation/animation.directive.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationDirective": function() { return /* binding */ AnimationDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_app_animations_app_animations_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/app-animations/app-animations.service */ 48095);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/config/config.service */ 83681);




let AnimationDirective = class AnimationDirective {
    constructor(el, appAnimationsService, config) {
        this.el = el;
        this.appAnimationsService = appAnimationsService;
        this.config = config;
        this.appAnimation = '';
    }
    ngAfterViewInit() {
        if (this.appAnimation == "fade") {
            this.appAnimationsService.fadeAnimation(this.el.nativeElement, this.config.animationDurationNumber);
        }
    }
    ngOnDestroy() {
        if (this.appAnimation == "fade") {
            this.appAnimationsService.slideInAnimation(this.el.nativeElement, this.config.animationDurationNumber);
        }
    }
};
AnimationDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: src_services_app_animations_app_animations_service__WEBPACK_IMPORTED_MODULE_0__.AppAnimationsService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService }
];
AnimationDirective.propDecorators = {
    appAnimation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
AnimationDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
        selector: '[appAnimation]'
    })
], AnimationDirective);



/***/ }),

/***/ 73448:
/*!******************************************************************!*\
  !*** ./src/directives/appAnimation/animationDirective.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationDirectiveModule": function() { return /* binding */ AnimationDirectiveModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _animation_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation.directive */ 18497);



let AnimationDirectiveModule = class AnimationDirectiveModule {
};
AnimationDirectiveModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _animation_directive__WEBPACK_IMPORTED_MODULE_0__.AnimationDirective,
        ],
        exports: [
            _animation_directive__WEBPACK_IMPORTED_MODULE_0__.AnimationDirective
        ],
        imports: [],
    })
], AnimationDirectiveModule);



/***/ }),

/***/ 63160:
/*!******************************************************************!*\
  !*** ./src/directives/imageValidate/image-validate.directive.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageValidateDirective": function() { return /* binding */ ImageValidateDirective; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


let ImageValidateDirective = class ImageValidateDirective {
    constructor(el) {
        this.el = el;
        this.appImageValidate = 50;
        this.orginalImage = "";
    }
    //=================================== for defalut img tag ==========================================
    error() {
        console.log("error", this.el.nativeElement.src);
        this.setDemoImage();
    }
    load() {
        console.log("load", this.el.nativeElement.src);
    }
    //=================================== for ion-img tag ==========================================
    ionError() {
        console.error("--------------- ionError", this.el.nativeElement.src);
        this.setDemoImage();
        this.removeLoader();
    }
    ionImgWillLoad() {
        this.addLoader();
    }
    ionImgDidLoad() {
        this.removeLoader();
    }
    setDemoImage() {
        this.el.nativeElement.src = "assets/0.png";
        this.el.nativeElement.style.minHeight = this.appImageValidate + 'px';
        this.el.nativeElement.style.height = this.appImageValidate + 'px';
        this.el.nativeElement.style.width = this.appImageValidate + 'px';
    }
    addLoader() {
        let loaderWidth = 28;
        if (loaderWidth > this.appImageValidate)
            loaderWidth = this.appImageValidate;
        let spinnerHtml = '<div class="center"><ion-spinner style="width:' + loaderWidth + 'px;" name="crescent"></ion-spinner></div>';
        let html = '<div style="min-height:' + this.appImageValidate + 'px;width:100%;position: relative;">' + spinnerHtml + '</div>';
        this.el.nativeElement.style.display = "none";
        this.el.nativeElement.insertAdjacentHTML('afterend', html);
        this.orginalImage = this.el.nativeElement.src;
    }
    removeLoader() {
        this.el.nativeElement.style.display = "unset";
        // this.el.nativeElement.removeChild()
        var image = this.el.nativeElement;
        var parent = image.parentNode;
        var sibling = image.nextSibling;
        parent.removeChild(sibling);
        //parent.insertBefore(textNode, sibling);
        //this.el.nativeElement.src = this.orginalImage
    }
};
ImageValidateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
ImageValidateDirective.propDecorators = {
    appImageValidate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['error',] }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['load',] }],
    ionError: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ionError',] }],
    ionImgWillLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ionImgWillLoad',] }],
    ionImgDidLoad: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ionImgDidLoad',] }]
};
ImageValidateDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[appImageValidate]'
    })
], ImageValidateDirective);



/***/ }),

/***/ 31268:
/*!**************************************************************!*\
  !*** ./src/directives/imageValidate/imageValidate.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageValidateDirectiveModule": function() { return /* binding */ ImageValidateDirectiveModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _image_validate_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-validate.directive */ 63160);



let ImageValidateDirectiveModule = class ImageValidateDirectiveModule {
};
ImageValidateDirectiveModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _image_validate_directive__WEBPACK_IMPORTED_MODULE_0__.ImageValidateDirective,
        ],
        exports: [
            _image_validate_directive__WEBPACK_IMPORTED_MODULE_0__.ImageValidateDirective
        ],
        imports: [],
    })
], ImageValidateDirectiveModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 84123:
/*!*************************************************!*\
  !*** ./src/pipes/currency-pipe/curency.pipe.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurencyPipe": function() { return /* binding */ CurencyPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/config/config.service */ 83681);



let CurencyPipe = class CurencyPipe {
    constructor(config) {
        this.config = config;
    }
    transform(value) {
        let currency = this.config.currencySymbolString;
        let decimals = this.config.currencyDecimalNumber;
        let currecnyPos = this.config.currencyPositionString;
        let priceFixed = parseFloat(value).toFixed(decimals);
        //let priceFixed = value;
        if (priceFixed.toString() == 'NaN') {
            if (currecnyPos == 'left')
                return currency + "" + value;
            else
                return value + " " + currency;
        }
        else {
            if (currecnyPos == 'left')
                return currency + "" + priceFixed;
            else
                return priceFixed + "" + currency;
        }
    }
};
CurencyPipe.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService }
];
CurencyPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
        name: 'curency'
    })
], CurencyPipe);



/***/ }),

/***/ 58905:
/*!***********************************!*\
  !*** ./src/pipes/pipes.module.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": function() { return /* binding */ PipesModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _currency_pipe_curency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-pipe/curency.pipe */ 84123);
/* harmony import */ var _translate_app_translate_app_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate-app/translate-app.pipe */ 22047);




let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_currency_pipe_curency_pipe__WEBPACK_IMPORTED_MODULE_0__.CurencyPipe, _translate_app_translate_app_pipe__WEBPACK_IMPORTED_MODULE_1__.TranslateAppPipe],
        imports: [],
        exports: [_currency_pipe_curency_pipe__WEBPACK_IMPORTED_MODULE_0__.CurencyPipe, _translate_app_translate_app_pipe__WEBPACK_IMPORTED_MODULE_1__.TranslateAppPipe]
    })
], PipesModule);



/***/ }),

/***/ 22047:
/*!*******************************************************!*\
  !*** ./src/pipes/translate-app/translate-app.pipe.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateAppPipe": function() { return /* binding */ TranslateAppPipe; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/app-translation/app-translation.service */ 68829);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);




let TranslateAppPipe = class TranslateAppPipe {
    constructor(shared, appTranslationService) {
        this.shared = shared;
        this.appTranslationService = appTranslationService;
    }
    transform(value) {
        //console.log(value + " " + this.shared.translationListArray[value.toString()]);
        // if (this.appTranaltionService.translationListArray[value] == undefined) {
        //   if (this.shared.lab)
        //     this.appTranaltionService.missingValues[value] = value;
        //   return value;
        // }
        return this.appTranslationService.translateStringPipe(value);
    }
};
TranslateAppPipe.ctorParameters = () => [
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_1__.SharedDataService },
    { type: src_services_app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_0__.AppTranslationService }
];
TranslateAppPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Pipe)({
        name: 'translate',
        pure: false
    })
], TranslateAppPipe);



/***/ }),

/***/ 20728:
/*!*****************************************************!*\
  !*** ./src/services/app-alert/app-alert.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppAlertService": function() { return /* binding */ AppAlertService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-log/app-log.service */ 88955);
/* harmony import */ var _app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-translation/app-translation.service */ 68829);





let AppAlertService = class AppAlertService {
    constructor(alertCtrl, appTranslationService, appLogService) {
        this.alertCtrl = alertCtrl;
        this.appTranslationService = appTranslationService;
        this.appLogService = appLogService;
    }
    //=================================================
    showAlert(text) {
        this.appTranslationService.translateArray([text, "ok", "Alert"]).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log(res);
            const alert = yield this.alertCtrl.create({
                header: res["Alert"],
                message: res[text],
                buttons: [res["ok"]]
            });
            yield alert.present();
        }));
    }
    showAlertWithTitle(text, title) {
        this.appTranslationService.translateArray([text, "ok", title]).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: res[title],
                message: res[text],
                buttons: [res["ok"]]
            });
            yield alert.present();
        }));
    }
};
AppAlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_1__.AppTranslationService },
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__.AppLogService }
];
AppAlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AppAlertService);



/***/ }),

/***/ 48095:
/*!***************************************************************!*\
  !*** ./src/services/app-animations/app-animations.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppAnimationsService": function() { return /* binding */ AppAnimationsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 80476);



let AppAnimationsService = class AppAnimationsService {
    constructor(animationCtrl) {
        this.animationCtrl = animationCtrl;
    }
    fadeAnimation(nativElement, duration) {
        const animation = this.animationCtrl.create()
            .addElement(nativElement)
            .duration(duration)
            .iterations(1)
            .fromTo('opacity', '0', '1');
        ;
        animation.play();
    }
    fadeLeaveAnimation(nativElement, duration) {
        const animation = this.animationCtrl.create()
            .addElement(nativElement)
            .duration(duration)
            .iterations(1)
            .fromTo('opacity', '1', '0');
        ;
        animation.play();
    }
    fadeAnimationWithClassName(className, duration) {
        const animation = this.animationCtrl.create()
            .addElement(document.querySelector('.' + className))
            .duration(duration)
            .iterations(1)
            .fromTo('opacity', '0', '1');
        ;
        animation.play();
    }
    slideInAnimation(nativElement, duration) {
        const animation = this.animationCtrl.create()
            .addElement(nativElement)
            .duration(duration)
            .iterations(1)
            .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
            .fromTo('opacity', '0', '1');
        ;
        animation.play();
    }
};
AppAnimationsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.AnimationController }
];
AppAnimationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AppAnimationsService);



/***/ }),

/***/ 88632:
/*!***************************************************!*\
  !*** ./src/services/app-cart/app-cart.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppCartService": function() { return /* binding */ AppCartService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-http/app-http.service */ 20688);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 75211);
/* harmony import */ var _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-user/app-user.service */ 53755);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.service */ 83681);
/* harmony import */ var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-data/shared-data.service */ 81341);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../coupon/coupon.service */ 17239);
/* harmony import */ var _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-events/app-events.service */ 43804);
/* harmony import */ var _capacitor_haptics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/haptics */ 81583);













let AppCartService = class AppCartService {
    constructor(storage, config, shared, appUserService, appHttpService, appToastService, nav, couponService, appEventsService) {
        this.storage = storage;
        this.config = config;
        this.shared = shared;
        this.appUserService = appUserService;
        this.appHttpService = appHttpService;
        this.appToastService = appToastService;
        this.nav = nav;
        this.couponService = couponService;
        this.appEventsService = appEventsService;
        this.cartProductsArray = new Array();
        this.cartquantityNumber = 0.0;
        this.cartTaxFloat = 0.0;
        this.cartSubTotalFloat = 0.0;
        this.cartShippingFloat = 0.0;
        this.cartTotalFloat = 0.0;
        this.cartDiscountFloat = 0.0;
        //============================================== coupon =================================
        this.couponObject = null;
        this.registerEvents();
        if (this.appUserService.userIsLogedIn())
            this.getCartFromServer();
    }
    registerEvents() {
        let userLogin = this.appEventsService.subscribe("userLogin");
        userLogin.subscriptions.add(userLogin.event.subscribe(data => {
            this.getCartFromServer();
        }));
        let userLogout = this.appEventsService.subscribe("userLogout");
        userLogout.subscriptions.add(userLogout.event.subscribe(data => {
            this.emptyCart();
        }));
    }
    emptyCart() {
        this.cartProductsArray = [];
        this.removeCoupon;
        this.cartTotalItems();
    }
    openCartPage() {
        this.nav.navigateForward("cart");
    }
    getCartFromServer() {
        let url = "";
        if (this.appUserService.whoIsUser() == "customer") {
            url = "cart";
            url += "?language_id=" + this.config.languageIdNumber;
            url += "&currency=" + this.config.currencyIdNumber;
        }
        else {
            url = "cart/guest/get";
            url += "?session_id=" + this.appUserService.getGuestSession();
            url += "&language_id=" + this.config.languageIdNumber;
            url += "&currency=" + this.config.currencyIdNumber;
        }
        this.appHttpService.getHttp(url, false).then((data) => {
            this.cartProductsArray = data;
            if (this.cartProductsArray.length == 0)
                this.removeCoupon();
            this.cartTotalItems();
        });
    }
    checkProductStock(id, type, combinationId = null, quantity) {
        let url = "available_qty";
        url += "?product_id=" + id;
        if (combinationId != null)
            url += "&product_combination_id=" + combinationId;
        url += "&product_type=" + type;
        return new Promise(resolve => {
            this.appHttpService.getHttp(url, true).then((data) => {
                let stock = parseInt(data.remaining_stock);
                if (stock == 0) {
                    resolve({ status: "outOfStock" });
                }
                else if (stock >= quantity) {
                    resolve({ status: "canAddToCart" });
                }
                else if (stock < quantity) {
                    resolve({ status: "quantityIsLimited", stock: stock });
                }
            });
        });
    }
    addToCart(id, quantity, combinationId = null) {
        let data = {};
        data.product_id = id;
        data.qty = quantity;
        if (combinationId != null)
            data.product_combination_id = combinationId;
        if (this.appUserService.checkIfGuestSessionIsAvailable())
            data.session_id = this.appUserService.getGuestSession();
        let url = "cart/guest/store";
        if (this.appUserService.whoIsUser() == "customer")
            url = "cart";
        this.appHttpService.postHttp(url, data, true).then((data) => {
            this.appToastService.toastMiddle("Added to Cart!");
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.isNativePlatform())
                _capacitor_haptics__WEBPACK_IMPORTED_MODULE_9__.Haptics.vibrate();
            if (this.appUserService.whoIsUser() == "guest")
                this.appUserService.setGuestSession(data.session);
            this.getCartFromServer();
        });
    }
    deleteProductFromCart(id, combinationId = null) {
        let data = {};
        data.product_id = id.toString();
        if (combinationId != null)
            data.product_combination_id = combinationId;
        if (this.appUserService.checkIfGuestSessionIsAvailable())
            data.session_id = this.appUserService.getGuestSession();
        let url = "cart/guest/delete";
        if (this.appUserService.whoIsUser() == "customer")
            url = "cart/delete";
        this.appHttpService.deleteHttp(url, data, true).then((data) => {
            this.appToastService.toastMiddle("Deleted From Cart!");
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.isNativePlatform())
                _capacitor_haptics__WEBPACK_IMPORTED_MODULE_9__.Haptics.vibrate();
            this.getCartFromServer();
        });
    }
    calculateFinalPrice() {
        this.cartTotalFloat = 0;
        //this.cartTaxFloat = 0
        this.cartSubTotalFloat = 0;
        //this.cartShippingFloat = 0
        //this.cartDiscountFloat = 0
        let total = 0;
        this.cartProductsArray.forEach((value, index) => {
            let price = value.total;
            //if (value.discount_price != null) price = value.discount_price
            total += price;
        });
        this.cartSubTotalFloat = total;
        this.cartTotalFloat = total + this.cartTaxFloat + this.cartShippingFloat - this.cartDiscountFloat;
    }
    //Function calcualte the total items of cart
    cartTotalItems() {
        let total = 0;
        for (let value of this.cartProductsArray) {
            total += parseInt(value.qty);
        }
        this.cartquantityNumber = total;
        this.calculateFinalPrice();
        //console.log("updated", this.cartquantity);
        return total;
    }
    ;
    checkCouponAvalability(value) {
        let url = "coupon";
        url += "?coupon_code=" + value;
        this.appHttpService.postHttp(url, {}, true).then((data) => {
            this.couponObject = data;
            this.applyCoupon();
            this.calculateFinalPrice();
            this.appToastService.toastMiddle("Coupon Applied!");
        });
    }
    applyCoupon() {
        if (this.couponObject) {
            if (this.couponObject.type == "fixed") {
                this.cartDiscountFloat = this.couponObject.amount;
            }
            if (this.couponObject.type == "percentage") {
                let discount = (this.cartSubTotalFloat / 100) * this.couponObject.amount;
                this.cartDiscountFloat = discount;
            }
        }
    }
    removeCoupon() {
        this.cartDiscountFloat = 0;
        this.calculateFinalPrice();
    }
    getProductQuantity(id) {
        let quantity = 0;
        this.cartProductsArray.forEach(element => {
            if (element.product_id == id) {
                quantity = element.qty;
            }
        });
        return quantity;
    }
};
AppCartService.ctorParameters = () => [
    { type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__.AppStorageService },
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_2__.AppUserService },
    { type: _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_0__.AppHttpService },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_6__.AppToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _coupon_coupon_service__WEBPACK_IMPORTED_MODULE_7__.CouponService },
    { type: _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_8__.AppEventsService }
];
AppCartService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
    })
], AppCartService);



/***/ }),

/***/ 10677:
/*!***************************************************************!*\
  !*** ./src/services/app-categories/app-categories.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppCategoriesService": function() { return /* binding */ AppCategoriesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let AppCategoriesService = class AppCategoriesService {
    constructor() {
        this.allCategoriesArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.categoriesArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.subCategoriesArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    }
    sortCategories(resoponse) {
        if (this.allCategoriesArray[0] == 1) {
            this.allCategoriesArray = [];
            this.categoriesArray = [];
            this.subCategoriesArray = [];
        }
        for (let value of resoponse) {
            this.allCategoriesArray.push(value);
            if (value.parent == null)
                this.categoriesArray.push(value);
            else
                this.subCategoriesArray.push(value);
        }
    }
    getCategories(parentId) {
        let cat = [];
        for (let value of this.allCategoriesArray) {
            if (value.parent == parentId) {
                cat.push(value);
            }
        }
        return cat;
    }
    checkCategoriesHasChild(parentId) {
        if (this.getCategories(parentId).length == 0)
            return false;
        else
            return true;
    }
    getCategoryName(id) {
        let name = "";
        for (let value of this.allCategoriesArray) {
            if (value.id == id) {
                name = value.name;
            }
        }
        return name;
    }
    getCategoryObject(id) {
        let obj = {};
        for (let value of this.allCategoriesArray) {
            if (value.id == id) {
                obj = value;
            }
        }
        return obj;
    }
    getCategoriesPageItems(parent) {
        let c = [];
        if (parent == undefined)
            c = this.categoriesArray;
        else {
            for (let v of this.allCategoriesArray) {
                if (v.parent == parent) {
                    c.push(v);
                }
            }
        }
        return c;
    }
};
AppCategoriesService.ctorParameters = () => [];
AppCategoriesService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AppCategoriesService);



/***/ }),

/***/ 88691:
/*!*****************************************************************!*\
  !*** ./src/services/app-coordinates/app-coordinates.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppCoordinatesService": function() { return /* binding */ AppCoordinatesService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/geolocation */ 61091);
/* harmony import */ var _app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-alert/app-alert.service */ 20728);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);





let AppCoordinatesService = class AppCoordinatesService {
    constructor(appAlertService, appToastService) {
        this.appAlertService = appAlertService;
        this.appToastService = appToastService;
    }
    getCurrentLocationCoordinates() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const checkPermission = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__.Geolocation.checkPermissions();
            //checkPermission.location
            if (checkPermission.location != 'granted') {
                this.appAlertService.showAlert("Please Grant Location Permission");
                _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__.Geolocation.requestPermissions();
            }
            console.log("Location Permisson", checkPermission.location);
            try {
                const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__.Geolocation.getCurrentPosition();
                console.log(coordinates);
                return { lat: coordinates.coords.latitude, long: coordinates.coords.longitude };
            }
            catch (error) {
                this.appToastService.toastMiddle("Please enable Location service");
                console.log(error);
                return "error";
            }
        });
    }
};
AppCoordinatesService.ctorParameters = () => [
    { type: _app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_1__.AppAlertService },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__.AppToastService }
];
AppCoordinatesService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AppCoordinatesService);



/***/ }),

/***/ 43804:
/*!*******************************************************!*\
  !*** ./src/services/app-events/app-events.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppEventsService": function() { return /* binding */ AppEventsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/Subject */ 13409);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subscription */ 43984);




let AppEventsService = class AppEventsService {
    constructor() {
        this.openCategoryPage = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.openDeepLink = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.openHomePage = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.openShippingAddressPage = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.setting = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.showAd = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.settingsLoaded = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.recentDeleted = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.cartChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.wishListUpdate = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.openThankYouPage = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.openSubcategoryPage = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.countryChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.stateChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.updateSideMenu = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.productExpired = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.loginWithPhoneNumber = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.userLogin = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.userLogout = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.subscriptions = new rxjs_internal_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.openCategoryPage$ = this.openCategoryPage.asObservable();
        this.openDeepLink$ = this.openDeepLink.asObservable();
        this.openHomePage$ = this.openHomePage.asObservable();
        this.openShippingAddressPage$ = this.openShippingAddressPage.asObservable();
        this.setting$ = this.setting.asObservable();
        this.recentDeleted$ = this.recentDeleted.asObservable();
        this.settingsLoaded$ = this.settingsLoaded.asObservable();
        this.cartChange$ = this.cartChange.asObservable();
        this.wishListUpdate$ = this.wishListUpdate.asObservable();
        this.showAd$ = this.showAd.asObservable();
        this.openThankYouPage$ = this.openThankYouPage.asObservable();
        this.openSubcategoryPage$ = this.openSubcategoryPage.asObservable();
        this.countryChange$ = this.countryChange.asObservable();
        this.stateChange$ = this.stateChange.asObservable();
        this.updateSideMenu$ = this.updateSideMenu.asObservable();
        this.productExpired$ = this.productExpired.asObservable();
        this.loginWithPhoneNumber$ = this.loginWithPhoneNumber.asObservable();
        this.userLogin$ = this.userLogin.asObservable();
        this.userLogout$ = this.userLogout.asObservable();
    }
    publish(eventName, eventData) {
        if (eventName == "openCategoryPage")
            this.openCategoryPage.next(eventData);
        if (eventName == "openDeepLink")
            this.openDeepLink.next(eventData);
        if (eventName == "openHomePage")
            this.openHomePage.next(eventData);
        if (eventName == "openShippingAddressPage")
            this.openShippingAddressPage.next(eventData);
        if (eventName == "setting")
            this.setting.next(eventData);
        if (eventName == "settingsLoaded")
            this.settingsLoaded.next(eventData);
        if (eventName == "recentDeleted")
            this.recentDeleted.next(eventData);
        if (eventName == "cartChange")
            this.cartChange.next(eventData);
        if (eventName == "wishListUpdate")
            this.wishListUpdate.next(eventData);
        if (eventName == "showAd")
            this.showAd.next(eventData);
        if (eventName == "openThankYouPage")
            this.openThankYouPage.next(eventData);
        if (eventName == "openSubcategoryPage")
            this.openSubcategoryPage.next(eventData);
        if (eventName == "countryChange")
            this.countryChange.next(eventData);
        if (eventName == "stateChange")
            this.stateChange.next(eventData);
        if (eventName == "updateSideMenu")
            this.updateSideMenu.next(eventData);
        if (eventName == "productExpired")
            this.productExpired.next(eventData);
        if (eventName == "loginWithPhoneNumber")
            this.loginWithPhoneNumber.next(eventData);
        if (eventName == "userLogin")
            this.userLogin.next(eventData);
        if (eventName == "userLogout")
            this.userLogout.next(eventData);
    }
    subscribe(eventName) {
        if (eventName == "openCategoryPage")
            return { subscriptions: this.subscriptions, event: this.openCategoryPage$ };
        if (eventName == "openDeepLink")
            return { subscriptions: this.subscriptions, event: this.openDeepLink$ };
        if (eventName == "openHomePage")
            return { subscriptions: this.subscriptions, event: this.openHomePage$ };
        if (eventName == "setting")
            return { subscriptions: this.subscriptions, event: this.setting$ };
        if (eventName == "settingsLoaded")
            return { subscriptions: this.subscriptions, event: this.settingsLoaded$ };
        if (eventName == "recentDeleted")
            return { subscriptions: this.subscriptions, event: this.recentDeleted$ };
        if (eventName == "cartChange")
            return { subscriptions: this.subscriptions, event: this.cartChange$ };
        if (eventName == "wishListUpdate")
            return { subscriptions: this.subscriptions, event: this.wishListUpdate$ };
        if (eventName == "showAd")
            return { subscriptions: this.subscriptions, event: this.showAd$ };
        if (eventName == "openShippingAddressPage")
            return { subscriptions: this.subscriptions, event: this.openShippingAddressPage$ };
        if (eventName == "openThankYouPage")
            return { subscriptions: this.subscriptions, event: this.openThankYouPage$ };
        if (eventName == "openSubcategoryPage")
            return { subscriptions: this.subscriptions, event: this.openSubcategoryPage$ };
        if (eventName == "countryChange")
            return { subscriptions: this.subscriptions, event: this.countryChange$ };
        if (eventName == "stateChange")
            return { subscriptions: this.subscriptions, event: this.stateChange$ };
        if (eventName == "updateSideMenu")
            return { subscriptions: this.subscriptions, event: this.updateSideMenu$ };
        if (eventName == "productExpired")
            return { subscriptions: this.subscriptions, event: this.productExpired$ };
        if (eventName == "loginWithPhoneNumber")
            return { subscriptions: this.subscriptions, event: this.loginWithPhoneNumber$ };
        if (eventName == "userLogin")
            return { subscriptions: this.subscriptions, event: this.userLogin$ };
        if (eventName == "userLogout")
            return { subscriptions: this.subscriptions, event: this.userLogout$ };
    }
};
AppEventsService.ctorParameters = () => [];
AppEventsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AppEventsService);



/***/ }),

/***/ 20688:
/*!***************************************************!*\
  !*** ./src/services/app-http/app-http.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHttpService": function() { return /* binding */ AppHttpService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-events/app-events.service */ 43804);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-log/app-log.service */ 88955);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.service */ 83681);
/* harmony import */ var _get_device_id_get_device_id_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../get-device-id/get-device-id.service */ 48003);
/* harmony import */ var _get_ip_Address_get_ip_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../get-ip-Address/get-ip-address.service */ 35186);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);
/* harmony import */ var _loading_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading/loading.service */ 45386);
/* harmony import */ var _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-user/app-user.service */ 53755);













let AppHttpService = class AppHttpService {
    constructor(appEventsService, getIpAddressService, getDeviceIdService, config, platform, appLogService, appToastService, angularHttp, httpNative, loading, appUserService) {
        this.appEventsService = appEventsService;
        this.getIpAddressService = getIpAddressService;
        this.getDeviceIdService = getDeviceIdService;
        this.config = config;
        this.platform = platform;
        this.appLogService = appLogService;
        this.appToastService = appToastService;
        this.angularHttp = angularHttp;
        this.httpNative = httpNative;
        this.loading = loading;
        this.appUserService = appUserService;
    }
    //============================================================================
    onReceiveError200(type, requestUrl, postData = {}, response) {
        let info = "Error : Http : " + type + " : ";
        this.appLogService.log(info + requestUrl, postData, response);
        //this.appToastService.toastError(info + requestUrl, response)
        this.appToastService.toastError(response.message);
        console.log(info + requestUrl, postData, response);
    }
    //============================================================================
    onReceiveSuccess(type, requestUrl, postData = {}, response) {
        let info = "Response : Http : " + type + " : ";
        this.appLogService.log(info + requestUrl, postData, response);
        //console.log(info + requestUrl, response)
    }
    //============================================================================
    onReceiveErrorNot200(type, requestUrl, postData = {}, response) {
        let info = "Error : Http : " + type + " : ";
        console.log(info + requestUrl, postData, response);
        this.appLogService.log(info + requestUrl, postData, response);
        //this.appToastService.toastError(info + requestUrl)
        this.appToastService.toastError(response.error.message);
    }
    //======================================================
    compareStrings(s1, s2) {
        if (s1.toLocaleLowerCase() == s2.toLocaleLowerCase())
            return true;
        else
            return false;
    }
    //===================================================== Get Request ===================================
    getHeadersForHttp() {
        let headers = {
            'Content-Type': 'application/json',
            'clientid': this.config.clientIdString,
            'clientsecret': this.config.clientSecretString
        };
        if (this.appUserService.whoIsUser() == "customer") {
            let Authorization = "Bearer " + this.appUserService.getCustomerToken();
            headers = Object.assign({ Authorization: Authorization }, headers);
        }
        return headers;
    }
    getHttp(req, loader = false, showAlert = false) {
        let customHeaders = this.getHeadersForHttp();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders(customHeaders)
        };
        return new Promise(resolve => {
            if (loader)
                this.loading.show();
            if (this.platform.is('cordova')) {
                this.httpNative.get(this.config.urlString + req, {}, customHeaders)
                    .then((data) => {
                    let response = JSON.parse(data.data);
                    if (this.compareStrings(response.status, "Error")) {
                        this.onReceiveError200("Get", req, {}, response.message);
                        if (showAlert)
                            this.appToastService.toastErrorWithCloseButton(response.message);
                    }
                    else if (this.compareStrings(response.status, "Warning")) {
                        this.onReceiveError200("Get", req, {}, response.message);
                    }
                    else if (this.compareStrings(response.status, "Success")) {
                        this.onReceiveSuccess("Get", req, {}, response.data);
                        resolve(response.data);
                    }
                    if (loader)
                        this.loading.hide();
                })
                    .catch(error => {
                    if (loader)
                        this.loading.hide();
                    this.onReceiveErrorNot200("Get", req, {}, error);
                });
            }
            else {
                this.angularHttp.get(this.config.urlString + req, httpOptions).subscribe((data) => {
                    if (loader)
                        this.loading.hide();
                    let response = data;
                    if (this.compareStrings(response.status, "Error")) {
                        this.onReceiveError200("Get", req, {}, response.message);
                    }
                    else if (this.compareStrings(response.status, "Warning")) {
                        this.onReceiveError200("Get", req, {}, response.message);
                    }
                    else if (this.compareStrings(response.status, "Success")) {
                        this.onReceiveSuccess("Get", req, {}, response.data);
                        resolve(response.data);
                    }
                    if (loader)
                        this.loading.hide();
                }, (error) => {
                    if (loader)
                        this.loading.hide();
                    this.onReceiveErrorNot200("Get", req, {}, error);
                });
            }
        });
    }
    //================================================ Post Request ===============================================
    postHttp(req, postData, loader = false) {
        let customHeaders = this.getHeadersForHttp();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders(customHeaders)
        };
        return new Promise(resolve => {
            if (loader)
                this.loading.show();
            if (this.platform.is('cordova')) {
                this.httpNative.setDataSerializer("json");
                this.httpNative.clearCookies();
                this.httpNative.post(this.config.urlString + req, postData, customHeaders)
                    .then(data => {
                    if (loader)
                        this.loading.hide();
                    let response = JSON.parse(data.data);
                    if (this.compareStrings(response.status, "Error")) {
                        this.onReceiveError200("POST", req, postData, response.message);
                    }
                    else if (this.compareStrings(response.status, "Warning")) {
                        this.onReceiveError200("POST", req, {}, response.message);
                    }
                    else if (this.compareStrings(response.status, "Success")) {
                        this.onReceiveSuccess("POST", req, postData, response.data);
                        resolve(response.data);
                    }
                })
                    .catch(error => {
                    console.log(error);
                    let er = JSON.parse(error.error);
                    if (loader)
                        this.loading.hide();
                    this.onReceiveErrorNot200("POST", req, postData, { error: er });
                });
            }
            else {
                this.angularHttp.post(this.config.urlString + req, postData, httpOptions).subscribe((data) => {
                    if (loader)
                        this.loading.hide();
                    let response = data;
                    if (this.compareStrings(response.status, "Error")) {
                        this.onReceiveError200("POST", req, postData, response.message);
                    }
                    else if (this.compareStrings(response.status, "Warning")) {
                        this.onReceiveError200("POST", req, {}, response.message);
                    }
                    else if (this.compareStrings(response.status, "Success")) {
                        this.onReceiveSuccess("POST", req, postData, response.data);
                        resolve(response.data);
                    }
                }, (error) => {
                    if (loader)
                        this.loading.hide();
                    this.onReceiveErrorNot200("POST", req, postData, error);
                });
            }
        });
    }
    //================================================ Post Request ===============================================
    putHttp(req, postData, loader = false, showAlert = false) {
        let customHeaders = this.getHeadersForHttp();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders(customHeaders)
        };
        return new Promise(resolve => {
            if (loader)
                this.loading.show();
            if (this.platform.is('cordova')) {
                this.httpNative.setDataSerializer("json");
                this.httpNative.clearCookies();
                this.httpNative.put(this.config.urlString + req, postData, customHeaders)
                    .then(data => {
                    if (loader)
                        this.loading.hide();
                    let response = JSON.parse(data.data);
                    if (this.compareStrings(response.status, "Error")) {
                        this.onReceiveError200("PUT", req, postData, response.message);
                    }
                    else if (this.compareStrings(response.status, "Warning")) {
                        this.onReceiveError200("PUT", req, {}, response.message);
                    }
                    else if (this.compareStrings(response.status, "Success")) {
                        this.onReceiveSuccess("PUT", req, postData, response.data);
                        if (showAlert)
                            this.appToastService.toastMiddle(response.message);
                        resolve(response.data);
                    }
                })
                    .catch(error => {
                    let er = JSON.parse(error.error);
                    if (loader)
                        this.loading.hide();
                    this.onReceiveErrorNot200("PUT", req, postData, { error: er });
                });
            }
            else {
                this.angularHttp.put(this.config.urlString + req, postData, httpOptions).subscribe((data) => {
                    if (loader)
                        this.loading.hide();
                    let response = data;
                    if (this.compareStrings(response.status, "Error")) {
                        this.onReceiveError200("PUT", req, postData, response.message);
                    }
                    else if (this.compareStrings(response.status, "Warning")) {
                        this.onReceiveError200("POST", req, {}, response.message);
                    }
                    else if (this.compareStrings(response.status, "Success")) {
                        this.onReceiveSuccess("PUT", req, postData, response.data);
                        if (showAlert)
                            this.appToastService.toastMiddle(response.message);
                        resolve(response.data);
                    }
                }, (error) => {
                    if (loader)
                        this.loading.hide();
                    this.onReceiveErrorNot200("PUT", req, postData, error);
                });
            }
        });
    }
    //================================================ delete Request ===============================================
    deleteHttp(req, postData, loader = false) {
        let customHeaders = this.getHeadersForHttp();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpHeaders(customHeaders)
        };
        return new Promise(resolve => {
            if (loader)
                this.loading.show();
            if (this.platform.is('cordova')) {
                let postDataa = {};
                for (let key in postData) {
                    let value = postData[key];
                    postDataa[key] = String(value);
                }
                this.httpNative.setDataSerializer("json");
                this.httpNative.clearCookies();
                this.httpNative.delete(this.config.urlString + req, postDataa, customHeaders)
                    .then(data => {
                    if (loader)
                        this.loading.hide();
                    let response = JSON.parse(data.data);
                    if (this.compareStrings(response.status, "Error")) {
                        this.onReceiveError200("DELETE", req, postData, response.message);
                    }
                    else if (this.compareStrings(response.status, "Warning")) {
                        this.onReceiveError200("DELETE", req, {}, response.message);
                    }
                    else if (this.compareStrings(response.status, "Success")) {
                        this.onReceiveSuccess("DELETE", req, postData, response.data);
                        resolve(response.data);
                    }
                })
                    .catch(error => {
                    let er = JSON.parse(error.error);
                    if (loader)
                        this.loading.hide();
                    this.onReceiveErrorNot200("DELETE", req, postData, { error: er });
                });
            }
            else {
                let options = { headers: customHeaders, params: postData };
                this.angularHttp.delete(this.config.urlString + req, options).subscribe((data) => {
                    if (loader)
                        this.loading.hide();
                    let response = data;
                    if (this.compareStrings(response.status, "Error")) {
                        this.onReceiveError200("DELETE", req, postData, response.message);
                    }
                    else if (this.compareStrings(response.status, "Warning")) {
                        this.onReceiveError200("DELETE", req, {}, response.message);
                    }
                    else if (this.compareStrings(response.status, "Success")) {
                        this.onReceiveSuccess("DELETE", req, postData, response.data);
                        resolve(response.data);
                    }
                }, (error) => {
                    if (loader)
                        this.loading.hide();
                    this.onReceiveErrorNot200("DELETE", req, postData, error);
                });
            }
        });
    }
    //=====================================================================
    angularHttpGet(url) {
        return new Promise(resolve => {
            this.angularHttp.get(url).subscribe((data) => {
                this.onReceiveSuccess("GET", url, {}, data);
                resolve(data);
            }, (error) => {
                this.onReceiveErrorNot200("GET", url, {}, error);
            });
        });
    }
};
AppHttpService.ctorParameters = () => [
    { type: _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_0__.AppEventsService },
    { type: _get_ip_Address_get_ip_address_service__WEBPACK_IMPORTED_MODULE_5__.GetIpAddressService },
    { type: _get_device_id_get_device_id_service__WEBPACK_IMPORTED_MODULE_4__.GetDeviceIdService },
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform },
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_1__.AppLogService },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__.AppToastService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__.HTTP },
    { type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService },
    { type: _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_8__.AppUserService }
];
AppHttpService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injectable)({
        providedIn: 'root'
    })
], AppHttpService);



/***/ }),

/***/ 88955:
/*!*************************************************!*\
  !*** ./src/services/app-log/app-log.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLogService": function() { return /* binding */ AppLogService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let AppLogService = class AppLogService {
    constructor() {
        this.dataTemp = {};
        this.dataTempError = {};
        this.innerHtml = "";
        this.counter = 1;
    }
    log(...arg) {
        //console.trace();
        //console.log(arg[0].constructor.name, Function.caller)
        // console.log(...arg);
        let source = this.counter + " >> " + arg[0];
        let result = {};
        //result.source = arg[0].constructor.name;
        for (let i = 0; i < arg.length; i++) {
            if (i != 0)
                result[i + "- arg >>"] = arg[i];
        }
        //console.log(source.toLocaleLowerCase());
        if (source.toLocaleLowerCase().search("error") != -1) {
            this.dataTempError[source] = result;
            this.dataError = JSON.parse(JSON.stringify(this.dataTempError));
        }
        else {
            this.dataTemp[source] = result;
            this.data = JSON.parse(JSON.stringify(this.dataTemp));
        }
        this.counter++;
    }
};
AppLogService.ctorParameters = () => [];
AppLogService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], AppLogService);



/***/ }),

/***/ 88889:
/*!*********************************************************!*\
  !*** ./src/services/app-network/app-network.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppNetworkService": function() { return /* binding */ AppNetworkService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-alert/app-alert.service */ 20728);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/network */ 63848);




let AppNetworkService = class AppNetworkService {
    constructor(appAlertService) {
        this.appAlertService = appAlertService;
        this.checkInternetConnection();
    }
    checkInternetConnection() {
        let handler = _capacitor_network__WEBPACK_IMPORTED_MODULE_1__.Network.addListener('networkStatusChange', (status) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // Get the current network status
            if (status.connected == false) {
                this.appAlertService.showAlertWithTitle("Please Connect to the Internet", "Disconnected");
            }
            else {
                //window.location.reload();
                //this.appAlertService.showAlertWithTitle("Network connected Reloading Data" + '...', "Connected");
            }
            console.log("Network status changed", status);
        }));
    }
};
AppNetworkService.ctorParameters = () => [
    { type: _app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_0__.AppAlertService }
];
AppNetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AppNetworkService);



/***/ }),

/***/ 2678:
/*!***********************************************************!*\
  !*** ./src/services/app-on-start/app-on-start.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppOnStartService": function() { return /* binding */ AppOnStartService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 75211);
/* harmony import */ var _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-events/app-events.service */ 43804);
/* harmony import */ var _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-http/app-http.service */ 20688);
/* harmony import */ var _app_recentproducts_app_recent_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-recentproducts/app-recent-products.service */ 84113);
/* harmony import */ var _app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-translation/app-translation.service */ 68829);
/* harmony import */ var _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-user/app-user.service */ 53755);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/config.service */ 83681);
/* harmony import */ var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared-data/shared-data.service */ 81341);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ 42329);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_intro_intro_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/intro/intro.page */ 25808);
/* harmony import */ var _app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-categories/app-categories.service */ 10677);
/* harmony import */ var _app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app-wishlist/app-wish-list.service */ 70182);
/* harmony import */ var _app_network_app_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app-network/app-network.service */ 88889);
















let AppOnStartService = class AppOnStartService {
    constructor(storage, modalCtrl, appHttp, config, shared, appEventsService, appTranslationService, appUserService, appHttpService, appRecentProductsService, appCategoriesService, appWishListService, appNetworkService) {
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.appHttp = appHttp;
        this.config = config;
        this.shared = shared;
        this.appEventsService = appEventsService;
        this.appTranslationService = appTranslationService;
        this.appUserService = appUserService;
        this.appHttpService = appHttpService;
        this.appRecentProductsService = appRecentProductsService;
        this.appCategoriesService = appCategoriesService;
        this.appWishListService = appWishListService;
        this.appNetworkService = appNetworkService;
    }
    //============================================================================
    getSettingsFromServer() {
        return this.appHttp.getHttp('setting?app_setting=1');
    }
    //============================================================================ 
    loadAppSetting() {
        return new Promise(resolve => {
            this.storage.get('appSettings').then((val) => {
                if (val == null) {
                    this.getSettingsFromServer().then((response) => {
                        let appSettings = {};
                        appSettings = response;
                        this.onSettingsLoaded(appSettings);
                        resolve(appSettings);
                    });
                }
                else {
                    let appSettings = val;
                    this.onSettingsLoaded(appSettings);
                    resolve(appSettings);
                }
            });
        });
    }
    //============================================================================
    //initalizing app after getting data from the server or local storage
    onSettingsLoaded(data) {
        this.openIntroPage();
        this.storage.set("appSettings", data);
        this.config.defaultSettings(data);
        this.settingDirectionOfApp();
        this.loadAppTranslation();
        this.getBanners();
        this.getCategories();
        if (this.appUserService.whoIsUser() == 'customer')
            this.appWishListService.getWishListProducts();
        //this.getPages()
        //this.appRecentProductsService.getRecentProducts()
        firebase_app__WEBPACK_IMPORTED_MODULE_8__.default.initializeApp(this.config.firebaseConfig);
        this.checkingNewSettingsFromServer();
    }
    openIntroPage() {
        this.storage.get('firsttimeApp').then((val) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            console.log("firsttimeApp", val);
            if (this.config.showIntroPageBool && val == null) {
                this.storage.set('firsttimeApp', 'firstTime');
                let modal = yield this.modalCtrl.create({
                    component: src_app_intro_intro_page__WEBPACK_IMPORTED_MODULE_9__.IntroPage,
                });
                return modal.present();
            }
        }));
    }
    //============================================================================
    settingDirectionOfApp() {
        //setting direction of the application
        document.documentElement.dir = this.config.appDirectionString;
    }
    //============================================================================
    loadAppTranslation() {
        let url = 'assets/i18n/' + this.config.languageCodeString + ".json";
        this.appHttpService.angularHttpGet(url).then((data) => {
            let tempdata = {};
            Object.keys(data).forEach(key => {
                let value = data[key];
                let k = key.toLocaleLowerCase();
                tempdata[k] = value;
            });
            this.appTranslationService.translationListArray = tempdata;
        });
    }
    //============================================================================
    getBanners() {
        //getting all banners
        this.appHttpService.getHttp('banner?getBannerNavigation=1&getBannerMedia=1').then((data) => {
            this.shared.bannersArray = data;
        });
    }
    getNewestProducts() {
        let url = "products";
        url += "?limit=" + this.config.perPageNumber;
        url += "&getCategory=1";
        url += "&getDetail=1";
        url += "&language_id=" + this.config.languageIdNumber;
        //url += "&productType=simple"
        url += "&currency=" + this.config.currencyIdNumber;
        url += "&stock=1";
        this.appHttpService.getHttp(url).then((data) => {
            this.shared.tab1Array = data;
        });
    }
    //============================================================================
    getCategories(page = 1) {
        let pageLimit = 100;
        let url = 'category';
        url += "?page=" + 1;
        url += "&getDetail=" + 1;
        url += "&limit=" + pageLimit;
        url += "&getMedia=" + 1;
        url += "&language_id=" + this.config.languageIdNumber;
        //getting all allCategories
        this.appHttpService.getHttp(url).then((data) => {
            let resoponse = data;
            if (resoponse.length == pageLimit)
                this.getCategories(++page);
            this.appCategoriesService.sortCategories(resoponse);
        });
    }
    //============================================================================
    getPages() {
        //getting tab 1
        let data = {};
        if (this.appUserService.customerData.customers_id != null)
            data.customers_id = this.appUserService.customerData.customers_id;
        data.page_number = 0;
        data.language_id = this.config.languageIdNumber;
        data.currency_code = this.config.currencyCodeString;
        //getting allpages from the server
        this.appHttpService.postHttp('getallpages', data).then((data) => {
            if (data.success == 1) {
                let pages = data.pages_data;
                for (let value of pages) {
                    if (value.slug == 'privacy-policy')
                        this.shared.privacyPolicy = value.description;
                    if (value.slug == 'term-services')
                        this.shared.termServices = value.description;
                    if (value.slug == 'refund-policy')
                        this.shared.refundPolicy = value.description;
                    if (value.slug == 'about-us')
                        this.shared.aboutUs = value.description;
                }
            }
        });
    }
    //============================================================================
    checkingNewSettingsFromServer() {
        this.getSettingsFromServer().then((data) => {
            let settings = data;
            this.storage.set("appSettings", settings);
        });
    }
};
AppOnStartService.ctorParameters = () => [
    { type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_0__.AppStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__.AppHttpService },
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService },
    { type: _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_7__.SharedDataService },
    { type: _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_1__.AppEventsService },
    { type: _app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_4__.AppTranslationService },
    { type: _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_5__.AppUserService },
    { type: _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__.AppHttpService },
    { type: _app_recentproducts_app_recent_products_service__WEBPACK_IMPORTED_MODULE_3__.AppRecentProductsService },
    { type: _app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_10__.AppCategoriesService },
    { type: _app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_11__.AppWishListService },
    { type: _app_network_app_network_service__WEBPACK_IMPORTED_MODULE_12__.AppNetworkService }
];
AppOnStartService = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Injectable)({
        providedIn: 'root'
    })
], AppOnStartService);



/***/ }),

/***/ 92248:
/*!*****************************************************!*\
  !*** ./src/services/app-order/app-order.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppOrderService": function() { return /* binding */ AppOrderService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-http/app-http.service */ 20688);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);
/* harmony import */ var _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-user/app-user.service */ 53755);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.service */ 83681);






let AppOrderService = class AppOrderService {
    constructor(appUserService, appHttpService, config, appToastService) {
        this.appUserService = appUserService;
        this.appHttpService = appHttpService;
        this.config = config;
        this.appToastService = appToastService;
        this.orderDetails = {
            billing_first_name: "",
            billing_last_name: "",
            billing_street_aadress: "",
            billing_city: "",
            billing_postcode: "",
            billing_country: "",
            billing_country_name: "",
            billing_state: "",
            billing_state_name: "",
            billing_phone: "",
            billing_location: "",
            delivery_first_name: "",
            delivery_last_name: "",
            delivery_street_aadress: "",
            delivery_city: "",
            delivery_postcode: "",
            delivery_country: "",
            delivery_state: "",
            delivery_country_name: "",
            delivery_state_name: "",
            delivery_phone: "",
            delivery_location: "",
            latlong: "",
            currency_id: 0,
            session_id: "",
            payment_id: 0,
            cc_cvc: "",
            cc_expiry_month: "12",
            cc_expiry_year: "2024",
            cc_number: "",
            payment_method: "cod",
            payment_method_type: "cod",
        };
    }
    addressIsFilled() {
        if (this.orderDetails.delivery_first_name == "")
            return false;
        else
            return true;
    }
    setOrderShippingAddress(data) {
        this.orderDetails.delivery_first_name = data.delivery_first_name;
        this.orderDetails.delivery_last_name = data.delivery_last_name;
        this.orderDetails.delivery_street_aadress = data.delivery_street_aadress;
        this.orderDetails.delivery_city = data.delivery_city;
        this.orderDetails.delivery_postcode = data.delivery_postcode;
        this.orderDetails.delivery_country = data.delivery_country;
        this.orderDetails.delivery_state = data.delivery_state;
        this.orderDetails.delivery_country_name = data.delivery_country_name;
        this.orderDetails.delivery_state_name = data.delivery_state_name;
        this.orderDetails.delivery_phone = data.delivery_phone;
        this.orderDetails.latlong = this.orderDetails.delivery_location = data.delivery_location;
    }
    setOrderBillingAddress(data) {
        this.orderDetails.billing_first_name = data.delivery_first_name;
        this.orderDetails.billing_last_name = data.delivery_last_name;
        this.orderDetails.billing_street_aadress = data.delivery_street_aadress;
        this.orderDetails.billing_city = data.delivery_city;
        this.orderDetails.billing_postcode = data.delivery_postcode;
        this.orderDetails.billing_country = data.delivery_country;
        this.orderDetails.billing_state = data.delivery_state;
        this.orderDetails.billing_country_name = data.delivery_country_name;
        this.orderDetails.billing_state_name = data.delivery_state_name;
        this.orderDetails.billing_phone = data.delivery_phone;
        this.orderDetails.billing_location = data.delivery_location;
        console.log(data);
    }
    addUserAddressToServer(value) {
        if (this.appUserService.whoIsUser() != "customer")
            return 0;
        let data = {};
        data = value;
        data.first_name = value.delivery_first_name;
        data.last_name = value.delivery_last_name;
        data.city = value.delivery_city;
        data.company = "null";
        data.country_id = value.delivery_country;
        data.dob = "2000-01-01";
        data.gender = "Male";
        data.postcode = value.delivery_postcode;
        data.state_id = value.delivery_state;
        data.street_address = value.delivery_street_aadress;
        data.suburb = value.delivery_city;
        data.phone = value.delivery_phone;
        data.latlong = value.delivery_location;
        data.is_default = "1";
        data.language_id = this.config.languageIdNumber;
        data.currency = this.config.currencyIdNumber;
        this.appHttpService.postHttp('customer_address_book', data, true).then((data) => {
            this.appToastService.toast("address added succesfuly");
        });
    }
    setOrderCurrencyId(value) {
    }
    setOrderSession(value) {
        this.orderDetails.session_id = value;
    }
};
AppOrderService.ctorParameters = () => [
    { type: _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_2__.AppUserService },
    { type: _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_0__.AppHttpService },
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_1__.AppToastService }
];
AppOrderService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], AppOrderService);



/***/ }),

/***/ 84113:
/*!************************************************************************!*\
  !*** ./src/services/app-recentproducts/app-recent-products.service.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRecentProductsService": function() { return /* binding */ AppRecentProductsService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-events/app-events.service */ 43804);
/* harmony import */ var _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-http/app-http.service */ 20688);
/* harmony import */ var _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-user/app-user.service */ 53755);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.service */ 83681);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 75211);







let AppRecentProductsService = class AppRecentProductsService {
    constructor(storage, config, appHttpService, appEventsService, appUserService) {
        this.storage = storage;
        this.config = config;
        this.appHttpService = appHttpService;
        this.appEventsService = appEventsService;
        this.appUserService = appUserService;
        this.recentViewedProducts = new Array();
        this.initializeRecentProducts();
    }
    initializeRecentProducts() {
        //getting recent viewed items from local storage
        this.storage.get('recentViewedProducts').then((val) => {
            if (val != null)
                this.recentViewedProducts = val;
        });
    }
    getRecentProducts() {
        let data = {};
        if (this.appUserService.customerData.customers_id != null)
            data.customers_id = this.appUserService.customerData.customers_id;
        data.language_id = this.config.languageIdNumber;
        data.currency_code = this.config.currencyCodeString;
        let arr = [];
        this.recentViewedProducts.forEach(element => {
            arr.push(element.products_id);
        });
        data.multiple_products_id = arr;
        this.recentViewedProducts = [];
        this.appHttpService.postHttp('getallproducts', data).then((data) => {
            if (data.success == 1) {
                this.recentViewedProducts = data.product_data;
            }
        });
    }
    //adding into recent array products
    addToRecent(p) {
        let found = false;
        for (let value of this.recentViewedProducts) {
            if (value.products_id == p.products_id) {
                found = true;
            }
        }
        if (found == false) {
            this.recentViewedProducts.push(p);
            this.storage.set('recentViewedProducts', this.recentViewedProducts);
        }
    }
    //removing from recent array products
    removeRecent(p) {
        this.recentViewedProducts.forEach((value, index) => {
            if (value.products_id == p.products_id) {
                this.recentViewedProducts.splice(index, 1);
                this.storage.set('recentViewedProducts', this.recentViewedProducts);
            }
        });
        this.appEventsService.publish('recentDeleted', "");
    }
    emptyRecentViewed() {
        this.recentViewedProducts = [];
        this.storage.set('recentViewedProducts', this.recentViewedProducts);
    }
};
AppRecentProductsService.ctorParameters = () => [
    { type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_4__.AppStorageService },
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_1__.AppHttpService },
    { type: _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_0__.AppEventsService },
    { type: _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_2__.AppUserService }
];
AppRecentProductsService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], AppRecentProductsService);



/***/ }),

/***/ 75211:
/*!*********************************************************!*\
  !*** ./src/services/app-storage/app-storage.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStorageService": function() { return /* binding */ AppStorageService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/storage */ 96628);



let AppStorageService = class AppStorageService {
    constructor() {
    }
    // JSON "set" example
    set(keyy, value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.set({
                key: keyy,
                value: JSON.stringify(value)
            });
        });
    }
    // JSON "get" example
    get(keyy) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const ret = yield _capacitor_storage__WEBPACK_IMPORTED_MODULE_0__.Storage.get({ key: keyy });
            const data = JSON.parse(ret.value);
            return data;
        });
    }
};
AppStorageService.ctorParameters = () => [];
AppStorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AppStorageService);



/***/ }),

/***/ 58824:
/*!*****************************************************!*\
  !*** ./src/services/app-toast/app-toast.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppToastService": function() { return /* binding */ AppToastService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-translation/app-translation.service */ 68829);




let AppToastService = class AppToastService {
    constructor(toastCtrl, appTranaltionService) {
        this.toastCtrl = toastCtrl;
        this.appTranaltionService = appTranaltionService;
    }
    toast(msg, time = 3500) {
        this.appTranaltionService.translateString(msg).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: res,
                duration: time,
                position: 'bottom'
            });
            toast.present();
        }));
    }
    toastError(msg, time = 3500) {
        this.appTranaltionService.translateString(msg).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: res,
                duration: time,
                position: 'bottom',
                color: "danger"
            });
            toast.present();
        }));
    }
    toastMiddle(msg) {
        this.appTranaltionService.translateString(msg).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: res,
                duration: 3500,
                position: 'middle'
            });
            toast.present();
        }));
    }
    toastWithCloseButton(msg) {
        this.appTranaltionService.translateString(msg).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: res,
                keyboardClose: true,
                position: 'middle',
                buttons: [
                    {
                        text: 'X',
                        role: 'cancel',
                    }
                ]
            });
            toast.present();
        }));
    }
    toastErrorWithCloseButton(msg) {
        this.appTranaltionService.translateString(msg).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: res,
                keyboardClose: true,
                position: 'middle',
                color: "danger",
                buttons: [
                    {
                        text: 'X',
                        role: 'cancel',
                    }
                ]
            });
            toast.present();
        }));
    }
};
AppToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController },
    { type: _app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_0__.AppTranslationService }
];
AppToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AppToastService);



/***/ }),

/***/ 68829:
/*!*****************************************************************!*\
  !*** ./src/services/app-translation/app-translation.service.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppTranslationService": function() { return /* binding */ AppTranslationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-log/app-log.service */ 88955);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 75211);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.service */ 83681);





let AppTranslationService = class AppTranslationService {
    constructor(config, appLogService, appStorageService) {
        this.config = config;
        this.appLogService = appLogService;
        this.appStorageService = appStorageService;
        this.translationListArray = {};
        this.missingValues = {};
        if (localStorage.missingValues)
            this.missingValues = JSON.parse(localStorage.missingValues);
    }
    consoleMissingValues() {
        console.log(this.missingValues);
    }
    // translation services
    translateStringPipe(value) {
        return this.getTranslationFromArray(value);
    }
    getTranslationFromArray(val) {
        let key = val.toLocaleLowerCase();
        let v = this.translationListArray[key];
        if (v == undefined) {
            this.missingValues[key] = key;
            v = key;
        }
        else {
            delete this.missingValues[key];
        }
        localStorage.missingValues = JSON.stringify(this.missingValues);
        return v;
    }
    // translation services
    translateString(value) {
        return new Promise(resolve => {
            resolve(this.getTranslationFromArray(value));
        });
    }
    translateArray(value) {
        return new Promise(resolve => {
            let tempArray = [];
            value.forEach(element => {
                tempArray[element] = this.getTranslationFromArray(element);
            });
            resolve(tempArray);
        });
    }
};
AppTranslationService.ctorParameters = () => [
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__.AppLogService },
    { type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_1__.AppStorageService }
];
AppTranslationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AppTranslationService);



/***/ }),

/***/ 53755:
/*!***************************************************!*\
  !*** ./src/services/app-user/app-user.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppUserService": function() { return /* binding */ AppUserService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 75211);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-log/app-log.service */ 88955);
/* harmony import */ var _loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading/loading.service */ 45386);
/* harmony import */ var _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-events/app-events.service */ 43804);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config.service */ 83681);




//import { AppPushNotificationService } from '../app-push-notification/app-push-notification.service'




let AppUserService = class AppUserService {
    constructor(storage, loading, 
    //public appPushNotificationService: AppPushNotificationService,
    appLogService, appEventsService, appToastService, config) {
        this.storage = storage;
        this.loading = loading;
        this.appLogService = appLogService;
        this.appEventsService = appEventsService;
        this.appToastService = appToastService;
        this.config = config;
        this.customerData = {};
        this.guestSessionString = "";
        this.initalizeCustomerData();
    }
    initalizeCustomerData() {
        //getting logged in customer data 
        // this.storage.get('customerData').then((val) => {
        //   if (val != null || val != undefined)
        //     this.login(val)
        // })
        //console.log(localStorage.customerData)
        if (localStorage.customerData == undefined || localStorage.customerData == 'undefined') { }
        else
            this.login(JSON.parse(localStorage.customerData));
    }
    login(data) {
        this.customerData.id = data.id;
        this.customerData.firstName = data.first_name;
        this.customerData.lastName = data.last_name;
        this.customerData.email = data.email;
        this.customerData.token = data.token;
        localStorage.customerData = JSON.stringify(data);
        console.log(this.customerData);
        this.appEventsService.publish('userLogin', "");
        this.setGuestSession("");
        //this.storage.set('customerData', data)
    }
    updateUserInfo(newData) {
        let oldData = JSON.parse(localStorage.customerData);
        this.customerData.firstName = oldData.first_name = newData.customer_first_name;
        this.customerData.lastName = oldData.last_name = newData.customer_last_name;
        this.customerData.email = oldData.email = newData.customer_email;
        localStorage.customerData = JSON.stringify(oldData);
    }
    logOut() {
        this.removeCustomerData();
        this.appEventsService.publish('userLogout', "");
        // this.fb.logout()
    }
    removeCustomerData() {
        this.customerData = {};
        localStorage.customerData = undefined;
        //this.storage.set('customerData', this.customerData)
    }
    getGuestSession() {
        return this.guestSessionString;
    }
    checkIfGuestSessionIsAvailable() {
        if (this.guestSessionString != "")
            return true;
        else
            return false;
    }
    setGuestSession(value) {
        this.guestSessionString = value;
    }
    whoIsUser() {
        let result = "";
        if (this.customerData.id == undefined)
            result = "guest";
        else
            result = "customer";
        return result;
    }
    getCustomerToken() {
        return this.customerData.token;
    }
    userIsLogedIn() {
        if (this.whoIsUser() == "customer")
            return true;
        else
            return false;
    }
};
AppUserService.ctorParameters = () => [
    { type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_0__.AppStorageService },
    { type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_1__.AppLogService },
    { type: _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_3__.AppEventsService },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_4__.AppToastService },
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService }
];
AppUserService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AppUserService);



/***/ }),

/***/ 70182:
/*!************************************************************!*\
  !*** ./src/services/app-wishlist/app-wish-list.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppWishListService": function() { return /* binding */ AppWishListService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-events/app-events.service */ 43804);
/* harmony import */ var _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-http/app-http.service */ 20688);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);
/* harmony import */ var _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-user/app-user.service */ 53755);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config.service */ 83681);
/* harmony import */ var _loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loading/loading.service */ 45386);








let AppWishListService = class AppWishListService {
    constructor(loading, appUserService, appToastService, appEventsService, config, appHttpService) {
        this.loading = loading;
        this.appUserService = appUserService;
        this.appToastService = appToastService;
        this.appEventsService = appEventsService;
        this.config = config;
        this.appHttpService = appHttpService;
        this.wishListArray = [];
        this.registerEvents();
    }
    registerEvents() {
        let userLogin = this.appEventsService.subscribe("userLogin");
        userLogin.subscriptions.add(userLogin.event.subscribe(data => {
            this.getWishListProducts();
        }));
        let userLogout = this.appEventsService.subscribe("userLogout");
        userLogout.subscriptions.add(userLogout.event.subscribe(data => {
            this.wishListArray = [];
        }));
    }
    addRemoveWishProduct(id) {
        if (this.appUserService.whoIsUser() != "customer") {
            this.appToastService.toastError("Please Login");
            return 0;
        }
        if (this.productIsInList(id))
            this.removeFromWishlist(id);
        else
            this.addToWishlist(id);
    }
    addToWishlist(id) {
        this.addWishList(id);
    }
    removeFromWishlist(id) {
        this.removeWishList(id);
    }
    addWishList(productId) {
        let d = {};
        d.customer_id = this.appUserService.customerData.id;
        d.product_id = productId;
        console.log(d);
        this.appHttpService.postHttp('wishlist', d, true).then((data) => {
            this.appEventsService.publish('wishListUpdate', { id: productId, value: true });
            this.updateWishList(data);
            this.appToastService.toast("added to wishlist");
        });
    }
    removeWishList(id) {
        let wishListId = this.getWishListId(id);
        let data = {};
        data.customer_id = this.appUserService.customerData.id;
        data.product_id = id;
        this.appHttpService.deleteHttp('wishlist/' + wishListId, data, true).then((data) => {
            this.appEventsService.publish('wishListUpdate', { id: id, value: false });
            this.updateWishList(data);
            this.appToastService.toast("removed from wishlist");
        });
    }
    //============================================================================
    getWishListProducts(page = 1) {
        let url = "wishlist";
        url += "?limit=" + 9999;
        url += "&language_id=" + this.config.languageIdNumber;
        url += "&currency=" + this.config.currencyIdNumber;
        url += "&getDetail=1";
        url += "&page=" + page;
        //getting all allCategories
        this.appHttpService.getHttp(url).then((data) => {
            let resoponse = data;
            //if (resoponse < 100) this.getWishListProducts(page++)
            if (resoponse.length != 0) {
                this.updateWishList(resoponse);
            }
        });
    }
    getWishListId(id) {
        let found = 0;
        this.wishListArray.forEach(element => {
            if (element.product_id == id)
                found = element.wishlist;
        });
        return found;
    }
    updateWishList(resoponse) {
        // for (let value of resoponse)
        //  this.wishListArray.push(value)
        this.wishListArray = resoponse;
    }
    productIsInList(id) {
        let found = false;
        this.wishListArray.forEach(element => {
            if (element.product_id == id)
                found = true;
        });
        return found;
    }
};
AppWishListService.ctorParameters = () => [
    { type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_3__.AppUserService },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__.AppToastService },
    { type: _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_0__.AppEventsService },
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService },
    { type: _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_1__.AppHttpService }
];
AppWishListService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AppWishListService);



/***/ }),

/***/ 327:
/*!*******************************************************!*\
  !*** ./src/services/auth-guard/auth-guard.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": function() { return /* binding */ AuthGuardService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_intro_intro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/intro/intro.page */ 25808);
/* harmony import */ var src_app_modals_login_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modals/login/login.page */ 33020);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-log/app-log.service */ 88955);
/* harmony import */ var _app_order_app_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-order/app-order.service */ 92248);
/* harmony import */ var _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-user/app-user.service */ 53755);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config.service */ 83681);









let AuthGuardService = class AuthGuardService {
    constructor(modalCtrl, appUserService, appOrderService, navCtrl, config, appLogService) {
        this.modalCtrl = modalCtrl;
        this.appUserService = appUserService;
        this.appOrderService = appOrderService;
        this.navCtrl = navCtrl;
        this.config = config;
        this.appLogService = appLogService;
    }
    canActivate(route, state) {
        if (!this.appUserService.userIsLogedIn()) {
            if (this.appUserService.whoIsUser() == "guest") {
                this.openLoginPage(route.data.hideGuestLogin);
                return false;
            }
            else if (this.appUserService.checkIfGuestSessionIsAvailable()) {
                return true;
            }
            else {
                this.openLoginPage(route.data.hideGuestLogin);
            }
        }
        else
            return true;
    }
    openLoginPage(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(value);
            let val = value;
            if (value == undefined)
                val = true;
            let modal = yield this.modalCtrl.create({
                component: src_app_modals_login_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage,
                componentProps: {
                    'hideGuestLogin': val
                }
            });
            return yield modal.present();
        });
    }
    openIntroPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: src_app_intro_intro_page__WEBPACK_IMPORTED_MODULE_0__.IntroPage,
            });
            return yield modal.present();
        });
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _app_user_app_user_service__WEBPACK_IMPORTED_MODULE_4__.AppUserService },
    { type: _app_order_app_order_service__WEBPACK_IMPORTED_MODULE_3__.AppOrderService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService },
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_2__.AppLogService }
];
AuthGuardService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
], AuthGuardService);



/***/ }),

/***/ 99609:
/*!***********************************************************************!*\
  !*** ./src/services/back-button-exit/back-button-exit-app.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BackButtonExitAppService": function() { return /* binding */ BackButtonExitAppService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config.service */ 83681);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-log/app-log.service */ 88955);








let BackButtonExitAppService = class BackButtonExitAppService {
    constructor(router, shared, plt, config, navCtrl, modalCtrl, appToastService, appLogService) {
        this.router = router;
        this.shared = shared;
        this.plt = plt;
        this.config = config;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.appToastService = appToastService;
        this.appLogService = appLogService;
        // set up hardware back button event.
        this.currentUrl = "";
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
    }
    // active hardware back button
    backButtonEvent() {
        this.plt.backButton.subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.currentUrl = this.router.url;
            this.routerOutlets.forEach((outlet) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (outlet && outlet.canGoBack()) {
                    outlet.pop();
                }
                else {
                    this.checkIfModalIsOpen();
                }
            }));
        }));
    }
    checkIfModalIsOpen() {
        this.modalCtrl.getTop().then((data) => {
            if (data == undefined)
                this.tryToCloseTheApp();
        });
    }
    tryToCloseTheApp() {
        if (this.getCurrentTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            navigator['app'].exitApp();
        }
        else if (this.isRootUrl()) {
            this.appToastService.toast('Press back again to exit App.', this.timePeriodToExit);
            this.lastTimeBackPress = this.getCurrentTime();
        }
    }
    isRootUrl() {
        console.log(this.currentUrl);
        if (this.currentUrl == '/tabs/home')
            return true;
        else if (this.currentUrl == '/tabs/cart')
            return true;
        else if (this.currentUrl == '/tabs/search')
            return true;
        else if (this.currentUrl == '/tabs/settings')
            return true;
        else if (this.currentUrl == '/tabs/categories')
            return true;
    }
    getCurrentTime() {
        return new Date().getTime();
    }
};
BackButtonExitAppService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_0__.SharedDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _config_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__.AppToastService },
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_3__.AppLogService }
];
BackButtonExitAppService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], BackButtonExitAppService);



/***/ }),

/***/ 83681:
/*!***********************************************!*\
  !*** ./src/services/config/config.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": function() { return /* binding */ ConfigService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-storage/app-storage.service */ 75211);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-log/app-log.service */ 88955);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/status-bar */ 64909);
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ 61779);








if (localStorage.darkModeBool == undefined)
    localStorage.darkModeBool = false;
let ConfigService = class ConfigService {
    constructor(storage, platform, appLogService, oneSignal) {
        this.storage = storage;
        this.platform = platform;
        this.appLogService = appLogService;
        this.oneSignal = oneSignal;
        this.yourSiteUrlString = 'http://api.iclouds.co.uk/grocery';
        this.clientIdString = "1234";
        this.clientSecretString = "sk_1234";
        // Initialize Firebase 
        this.firebaseConfig = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: ""
        };
        // google map key
        this.googleMapApiString = "";
        this.urlString = this.yourSiteUrlString + '/api/client/';
        this.imgThumbnailUrlString = this.yourSiteUrlString + "/gallary/thumbnail";
        this.imgMediumUrlString = this.yourSiteUrlString + "/gallary/medium";
        this.imgLargeUrlString = this.yourSiteUrlString + "/gallary/large";
        this.appDesignNumber = 0; //0 for n and 1 for r
        this.dummyImageString = "assets/dumy.jpg";
        this.showIntroPageBool = true; //  0 to hide and 1 to show intro page
        this.appInProductionBool = true; //  0 to hide and 1 to show intro page
        this.roundBordersBool = true; //make elements border round
        //app theming
        this.appThemeString = 'default';
        this.darkModeBool = false;
        // app info
        this.appNameString = '';
        this.iosStoreUrlString = "";
        // login page settings
        this.enableFacebookLoginBool = false;
        this.enableGoogleLoginBool = false;
        this.enableEmailLoginBool = false;
        this.enableAddressMapBool = false;
        this.enablePhoneLoginBool = false;
        this.phoneAuthWithFirebaseBool = false;
        // App Design Layout settings
        this.homePageNumber = 0;
        this.bannerStyleNumber = 0;
        this.categoryPageNumber = 0;
        this.productCardStyleNumber = 0;
        this.productSlidesPerPageNumber = 2.1;
        // App currency and language settings
        this.languageCodeString = "";
        this.currencyDecimalNumber = 2;
        this.currencyCodeString = "";
        this.currencyPositionString = "";
        this.appDirectionString = "";
        // Push notification settings
        this.onesignalAppIdString = "";
        this.onesignalSenderIdString = "";
        // others
        this.inventoryBool = false;
        this.perPageNumber = 10;
        this.currentPlatfromString = "web";
        this.animationDurationNumber = 700; // in milisecounds
        this.productCardColorsArray = ["#eaf3de", "#fbe5e2", "#d7f2fe", "#ffe9a5"];
        this.currentPlatfromString = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.getPlatform();
        this.setUserSettings();
        if (this.onesignalAppIdString != "")
            this.registerOneSignal();
    }
    registerOneSignal() {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.isNativePlatform()) {
            this.oneSignal.startInit(this.onesignalAppIdString, this.onesignalSenderIdString);
            this.oneSignal.endInit();
            this.oneSignal.handleNotificationReceived().subscribe(() => {
                // do something when notification is received
            });
        }
    }
    defaultSettings(settings) {
        let homePageNumber = 0;
        settings.forEach(element => {
            if (element.setting_key == "app_name")
                this.appNameString = element.setting_value;
            else if (element.setting_key == "home_style")
                homePageNumber = this.getIntergerFromString(element.setting_value);
            else if (element.setting_key == "category_style")
                this.categoryPageNumber = this.getIntergerFromString(element.setting_value);
            else if (element.setting_key == "card_style")
                this.productCardStyleNumber = this.getIntergerFromString(element.setting_value);
            else if (element.setting_key == "banner_style")
                this.bannerStyleNumber = this.getIntergerFromString(element.setting_value);
            else if (element.setting_key == "ios_app_url")
                this.iosStoreUrlString = element.setting_value;
            else if (element.setting_key == "google_login")
                this.enableGoogleLoginBool = (element.setting_value == "1") ? true : false;
            else if (element.setting_key == "facebook_login")
                this.enableFacebookLoginBool = (element.setting_value == "1") ? true : false;
            else if (element.setting_key == "phone_login")
                this.enablePhoneLoginBool = (element.setting_value == "1") ? true : false;
            else if (element.setting_key == "email_login")
                this.enableEmailLoginBool = (element.setting_value == "1") ? true : false;
            else if (element.setting_key == "inventory")
                this.inventoryBool = (element.setting_value == "1") ? true : false;
            else if (element.setting_key == "language_id")
                this.languageIdNumber = parseInt(element.setting_value);
            else if (element.setting_key == "language_code")
                this.languageCodeString = element.setting_value.toLocaleLowerCase();
            else if (element.setting_key == "direction")
                this.appDirectionString = element.setting_value;
            else if (element.setting_key == "currency_id")
                this.currencyIdNumber = parseInt(element.setting_value);
            else if (element.setting_key == "currency_code")
                this.currencyCodeString = element.setting_value;
            else if (element.setting_key == "currency_pos")
                this.currencyPositionString = element.setting_value;
            else if (element.setting_key == "currency_symbol")
                this.currencySymbolString = element.setting_value;
            else if (element.setting_key == "currency_decimals")
                this.currencyDecimalNumber = parseInt(element.setting_value);
        });
        this.setLanguageAndCurrenyData();
        this.homePageNumber = homePageNumber;
    }
    getIntergerFromString(value) {
        return parseInt((value).replace(/[^0-9]/g, ''));
    }
    setLanguageAndCurrenyData() {
        if (localStorage.languageCodeString == undefined) {
            localStorage.languageCodeString = this.languageCodeString;
            localStorage.languageIdNumber = this.languageIdNumber;
            localStorage.currencyDecimalNumber = this.currencyDecimalNumber;
            localStorage.currencyIdNumber = this.currencyIdNumber;
            localStorage.currencyCodeString = this.currencyCodeString;
            localStorage.currencyPositionString = this.currencyPositionString;
            localStorage.currencySymbolString = this.currencySymbolString;
            localStorage.appDirectionString = this.appDirectionString;
        }
        else {
            this.languageCodeString = localStorage.languageCodeString.toLocaleLowerCase();
            this.languageIdNumber = parseInt(localStorage.languageIdNumber);
            this.currencyDecimalNumber = parseInt(localStorage.currencyDecimalNumber);
            this.currencyIdNumber = parseInt(localStorage.currencyIdNumber);
            this.currencyCodeString = localStorage.currencyCodeString;
            this.currencyPositionString = localStorage.currencyPositionString;
            this.currencySymbolString = localStorage.currencySymbolString;
            this.appDirectionString = localStorage.appDirectionString;
        }
    }
    setUserSettings() {
        if (localStorage.darkModeBool == "true")
            this.enableDarkMode(true);
        else
            this.enableDarkMode(false);
    }
    enableDarkMode(bool) {
        this.darkModeBool = bool;
        this.changeStatusBarColor();
        if (bool)
            localStorage.darkModeBool = "true";
        else
            localStorage.darkModeBool = "false";
    }
    changeStatusBarColor() {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Capacitor.isNativePlatform()) {
            if (this.darkModeBool) {
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.Style.Dark });
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setBackgroundColor({ color: "#000000" });
            }
            else {
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setStyle({ style: _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.Style.Light });
                _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setBackgroundColor({ color: "#ffffff" });
            }
        }
    }
    transformCurrency(value) {
        let currency = this.currencySymbolString;
        let decimals = this.currencyDecimalNumber;
        let currecnyPos = this.currencyPositionString;
        let priceFixed = parseFloat(value).toFixed(decimals);
        //let priceFixed = value;
        if (priceFixed.toString() == 'NaN') {
            if (currecnyPos == 'left')
                return currency + "" + value;
            else
                return value + " " + currency;
        }
        else {
            if (currecnyPos == 'left')
                return currency + "" + priceFixed;
            else
                return priceFixed + "" + currency;
        }
    }
};
ConfigService.ctorParameters = () => [
    { type: _app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_0__.AppStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_1__.AppLogService },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_4__.OneSignal }
];
ConfigService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()
    //1.1.7
], ConfigService);



/***/ }),

/***/ 17239:
/*!***********************************************!*\
  !*** ./src/services/coupon/coupon.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CouponService": function() { return /* binding */ CouponService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-http/app-http.service */ 20688);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);
/* harmony import */ var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-data/shared-data.service */ 81341);





let CouponService = class CouponService {
    constructor(shared, appHttpService, appToastService) {
        this.shared = shared;
        this.appHttpService = appHttpService;
        this.appToastService = appToastService;
    }
};
CouponService.ctorParameters = () => [
    { type: _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService },
    { type: _app_http_app_http_service__WEBPACK_IMPORTED_MODULE_0__.AppHttpService },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_1__.AppToastService }
];
CouponService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], CouponService);



/***/ }),

/***/ 42049:
/*!*************************************************************************!*\
  !*** ./src/services/firebase-phone-auth/firebase-phone-auth.service.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebasePhoneAuthService": function() { return /* binding */ FirebasePhoneAuthService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 42329);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 71952);
/* harmony import */ var _loading_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading/loading.service */ 45386);
/* harmony import */ var _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared-data/shared-data.service */ 81341);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-events/app-events.service */ 43804);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);
/* harmony import */ var _app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-alert/app-alert.service */ 20728);
/* harmony import */ var _app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app-translation/app-translation.service */ 68829);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-log/app-log.service */ 88955);












let FirebasePhoneAuthService = class FirebasePhoneAuthService {
    constructor(loading, shared, alertController, appEventsService, appToastService, appAlertService, appTranslationService, appLogService) {
        this.loading = loading;
        this.shared = shared;
        this.alertController = alertController;
        this.appEventsService = appEventsService;
        this.appToastService = appToastService;
        this.appAlertService = appAlertService;
        this.appTranslationService = appTranslationService;
        this.appLogService = appLogService;
    }
    //=================================
    createRecaptcha() {
        let _this = this;
        window.recaptchaVerifier = new firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth.RecaptchaVerifier('phone-login-in-button', {
            'size': 'invisible',
            'callback': function (response) {
                console.log(response);
            }
        });
    }
    //================================= function to verify send code
    verifyPhoneNumber(phoneNumber) {
        this.loading.show();
        let _this = this;
        firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier).then(function (confirmationResult) {
            _this.loading.hide();
            _this.enterThePhoneCodeReceived(phoneNumber).then((data) => {
                if (data != null)
                    confirmationResult.confirm(data).then((data) => {
                        _this.loginAfterCodeVerify(phoneNumber);
                    }).catch((error) => {
                        _this.appAlertService.showAlert(data + " " + "Invalid Code Please try again.");
                        console.log(error);
                        //_this.errorMessage = error.message
                    });
            });
        }).catch((error) => {
            _this.loading.hide();
            console.log(error);
            _this.appAlertService.showAlert(error.message + " " + phoneNumber);
        });
    }
    enterThePhoneCodeReceived(phoneNumber) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.appTranslationService.translateArray(["Enter Sms Code You Received on", "Code", "Cancel", "ok"]).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                    const alert = yield this.alertController.create({
                        header: res["Enter Sms Code You Received on"] + " " + phoneNumber,
                        inputs: [
                            {
                                name: 'code',
                                type: 'text',
                                placeholder: res["Code"],
                            }
                        ],
                        buttons: [
                            {
                                text: res["Cancel"],
                                role: 'cancel',
                                cssClass: 'secondary',
                                handler: () => {
                                    resolve(null);
                                    console.log('Confirm Cancel');
                                }
                            }, {
                                text: res["ok"],
                                handler: (data) => {
                                    console.log(data);
                                    if (data.code == "")
                                        this.enterThePhoneCodeReceived(phoneNumber).then(data => {
                                            resolve(data);
                                        });
                                    else
                                        resolve(data.code);
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }));
            });
        });
    }
    loginAfterCodeVerify(phoneNumber) {
        this.appEventsService.publish("loginWithPhoneNumber", phoneNumber);
    }
};
FirebasePhoneAuthService.ctorParameters = () => [
    { type: _loading_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _app_events_app_events_service__WEBPACK_IMPORTED_MODULE_4__.AppEventsService },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_5__.AppToastService },
    { type: _app_alert_app_alert_service__WEBPACK_IMPORTED_MODULE_6__.AppAlertService },
    { type: _app_translation_app_translation_service__WEBPACK_IMPORTED_MODULE_7__.AppTranslationService },
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_8__.AppLogService }
];
FirebasePhoneAuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root'
    })
], FirebasePhoneAuthService);



/***/ }),

/***/ 48003:
/*!*************************************************************!*\
  !*** ./src/services/get-device-id/get-device-id.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetDeviceIdService": function() { return /* binding */ GetDeviceIdService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app-log/app-log.service */ 88955);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/device */ 42810);





let GetDeviceIdService = class GetDeviceIdService {
    constructor(platform, appLogService) {
        this.platform = platform;
        this.appLogService = appLogService;
        this.deviceId = "";
        this.realDeviceIdUpdatedCounter = 0;
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                this.setRealDeviceId();
            }
        });
    }
    setRealDeviceId() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_1__.Device.getId();
            this.realDeviceIdUpdatedCounter++;
            this.deviceId = info.uuid;
        });
    }
    getDeviceId() {
        let id = "";
        if (this.realDeviceIdUpdatedCounter == 0) {
            let d = new Date();
            id = d.getTime().toString();
        }
        else {
            id = this.deviceId;
        }
        return id;
    }
};
GetDeviceIdService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _app_log_app_log_service__WEBPACK_IMPORTED_MODULE_0__.AppLogService }
];
GetDeviceIdService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], GetDeviceIdService);



/***/ }),

/***/ 35186:
/*!***************************************************************!*\
  !*** ./src/services/get-ip-Address/get-ip-address.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetIpAddressService": function() { return /* binding */ GetIpAddressService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/network-interface/ngx */ 64914);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);




let GetIpAddressService = class GetIpAddressService {
    constructor(platform, networkInterface) {
        this.platform = platform;
        this.networkInterface = networkInterface;
        this.ipAddress = "";
        this.realIpAddressUpdatedCounter = 0;
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                this.setRealIpAddress();
            }
        });
    }
    getIpAddress() {
        var ip;
        if (this.realIpAddressUpdatedCounter == 0) {
            var p1 = (Math.floor(Math.random() * 255) + 1);
            var p2 = (Math.floor(Math.random() * 255));
            var p3 = (Math.floor(Math.random() * 255));
            var p4 = (Math.floor(Math.random() * 255));
            ip = p1 + "." + p2 + "." + p3 + "." + p4;
        }
        else {
            ip = this.ipAddress;
        }
        return ip;
    }
    setRealIpAddress() {
        this.networkInterface.getWiFiIPAddress()
            .then(address => {
            if (address.ip != undefined) {
                this.ipAddress = address.ip;
                this.realIpAddressUpdatedCounter++;
            }
        })
            .catch(error => {
            console.error(`Unable to get IP: ${error}`);
        });
        this.networkInterface.getCarrierIPAddress()
            .then(address => {
            if (address.ip != undefined) {
                this.ipAddress = address.ip;
                this.realIpAddressUpdatedCounter++;
            }
        })
            .catch(error => {
            console.error(`Unable to get IP: ${error}`);
        });
    }
};
GetIpAddressService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform },
    { type: _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_0__.NetworkInterface }
];
GetIpAddressService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], GetIpAddressService);



/***/ }),

/***/ 19921:
/*!***************************************************************!*\
  !*** ./src/services/in-app-browser/in-app-browser.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InAppBrowserService": function() { return /* binding */ InAppBrowserService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-toast/app-toast.service */ 58824);






let InAppBrowserService = class InAppBrowserService {
    constructor(inAppBrowser, config, navCtrl, appToastService) {
        this.inAppBrowser = inAppBrowser;
        this.config = config;
        this.navCtrl = navCtrl;
        this.appToastService = appToastService;
    }
    openSite(url, closeUrl = "thankyou") {
        // await Browser.open({
        //   url: this.config.yourSiteUrlString + "/order-web-view?token=" + this.appUserService.getCustomerToken(),
        //   windowName: '_self'
        // });
        // setTimeout(() => {
        //   Browser.close()
        // }, 5000);
        // Browser.addListener('browserPageLoaded', () => {
        //   console.log('browserPageLoaded event called');
        // });
        // Browser.addListener("browserFinished", () => { })
        let headerColor = "#ffffff";
        let textColor = "#000000";
        if (this.config.darkModeBool) {
            headerColor = "#1e1e1e";
            textColor = "#ffffff";
        }
        let options = {
            toolbarposition: "top",
            location: 'yes',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            hideurlbar: "yes",
            zoom: 'no',
            closebuttoncolor: textColor,
            toolbarcolor: headerColor,
            fullscreen: "no",
            toolbar: 'yes', //iOS only
        };
        //url = this.config.yourSiteUrlString + "/order-web-view?token=" + this.appUserService.getCustomerToken()
        const b = this.inAppBrowser.create(url, '_blank', options);
        let orderPlaced = false;
        b.on('loadstart').subscribe(res => {
            if (res.url.indexOf(closeUrl) != -1) {
                console.log(res.url);
                //this.appToastService.toast("Order Placed");
                this.navCtrl.navigateRoot("thank-you");
                orderPlaced = true;
                b.close();
            }
        });
        b.on('loadstop').subscribe(res => {
            console.log('loadstop');
        });
        b.on('exit').subscribe(res => {
            if (!orderPlaced)
                this.appToastService.toast("Order Cancelled");
        });
    }
};
InAppBrowserService.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__.InAppBrowser },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _app_toast_app_toast_service__WEBPACK_IMPORTED_MODULE_2__.AppToastService }
];
InAppBrowserService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], InAppBrowserService);



/***/ }),

/***/ 45386:
/*!*************************************************!*\
  !*** ./src/services/loading/loading.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": function() { return /* binding */ LoadingService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let LoadingService = class LoadingService {
    constructor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    show() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                duration: 10000
            });
            this.loading.present();
        });
    }
    hide() {
        try {
            this.loading.dismiss();
        }
        catch (error) { }
    }
    autoHide(time) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                duration: time
            });
            this.loading.present();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 81341:
/*!*********************************************************!*\
  !*** ./src/services/shared-data/shared-data.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedDataService": function() { return /* binding */ SharedDataService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);




let SharedDataService = class SharedDataService {
    constructor(appEventsService, platform, nav, menuCtrl) {
        this.appEventsService = appEventsService;
        this.platform = platform;
        this.nav = nav;
        this.menuCtrl = menuCtrl;
        this.bannersArray = [1, 1, 1, 1, 1];
        this.tab1Array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab2Array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.tab3Array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.flashSaleProductsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.privacyPolicy = "";
        this.termServices = "";
        this.refundPolicy = "";
        this.aboutUs = "";
        this.tempdata = {};
        this.currentOpenedModel = null;
        this.singleProductPageDataArray = [];
        this.lab = false;
        this.primaryHexColor = "#3980ff";
        this.productCardCounterNumber = 0;
        this.splashScreenHide = false;
    }
    openShopPage() {
        this.nav.navigateForward("products");
    }
    toggleMenu() {
        this.menuCtrl.toggle("mainMenu");
    }
    showAd() {
        //this.loading.autoHide(2000);
        this.appEventsService.publish('showAd', "");
    }
    getProductRatingPercentage(rating) {
        let val = (parseFloat(rating) * 100) / 5;
        return val + '%';
    }
};
SharedDataService.ctorParameters = () => [
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_0__.AppEventsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.MenuController }
];
SharedDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], SharedDataService);



/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 53571:
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-end: var(--app-padding-left-right);\n  --padding-start: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFjO0VBQ2QsOENBQWdCO0FBQ3BCIiwiZmlsZSI6ImFib3V0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xufVxuIl19 */");

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-menu ion-item {\n  --min-height: auto;\n}\n\n.main-menu ion-item ion-thumbnail {\n  width: 25px;\n  height: 25px;\n}\n\n.main-menu ion-list {\n  padding: 0;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.main-menu ion-list .start-icon {\n  font-size: 20px;\n}\n\n.rotation-animation {\n  -webkit-animation-name: rotate;\n          animation-name: rotate;\n  -webkit-animation-duration: 6s;\n          animation-duration: 6s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n}\n\n@-webkit-keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.margin50bottom {\n  margin-bottom: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGtCQUFhO0FBQXJCOztBQUZBO0VBSVksV0FBVztFQUNYLFlBQVk7QUFFeEI7O0FBUEE7RUFVUSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUM1Qjs7QUFiQTtFQWNZLGVBQWU7QUFHM0I7O0FBRUE7RUFDSSw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyx5Q0FBaUM7VUFBakMsaUNBQWlDO0FBQ3JDOztBQUVBO0VBQ0k7SUFDSSx1QkFBdUI7RUFDN0I7RUFDRTtJQUNJLHlCQUF5QjtFQUMvQjtBQUNGOztBQVBBO0VBQ0k7SUFDSSx1QkFBdUI7RUFDN0I7RUFDRTtJQUNJLHlCQUF5QjtFQUMvQjtBQUNGOztBQUVBO0VBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLW1lbnUge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIC5zdGFydC1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucm90YXRpb24tYW5pbWF0aW9uIHtcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuXG4ubWFyZ2luNTBib3R0b20ge1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 70653:
/*!***************************************!*\
  !*** ./src/app/intro/intro.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .padding-20 {\n  padding: 0 12vw;\n}\n\nion-content .top-text {\n  font-size: 25px;\n}\n\nion-content ion-slides {\n  margin-top: 60px;\n  overflow: visible;\n}\n\nion-content ion-slides ion-slide span {\n  margin-bottom: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n}\n\nion-content ion-slides ion-slide span .image-box {\n  min-height: 360px;\n  position: relative;\n}\n\nion-content ion-slides ion-slide span .image-box ion-img {\n  width: 100%;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\nion-content ion-slides ion-slide .button-grid {\n  position: absolute;\n  bottom: -130px;\n  width: 100%;\n}\n\nion-content ion-slides ion-slide .button-grid .upper-button {\n  width: 60% !important;\n  height: 40px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGVBQWU7QUFBbkI7O0FBRkE7RUFLSSxlQUFlO0FBQ25COztBQU5BO0VBUUksZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUVyQjs7QUFYQTtFQVlRLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFHbkI7O0FBbEJBO0VBaUJVLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFLNUI7O0FBdkJBO0VBb0JZLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7QUFPNUM7O0FBL0JBO0VBNkJRLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztBQU1uQjs7QUFyQ0E7RUFpQ1UscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQVFqQyIsImZpbGUiOiJpbnRyby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC5wYWRkaW5nLTIwIHtcbiAgICBwYWRkaW5nOiAwIDEydnc7XG4gIH1cbiAgLnRvcC10ZXh0IHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgaW9uLXNsaWRlcyB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBpb24tc2xpZGUge1xuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAuaW1hZ2UtYm94IHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgaW9uLWltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYnV0dG9uLWdyaWQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogLTEzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnVwcGVyLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 23027:
/*!************************************************************!*\
  !*** ./src/app/modals/app-log-page/app-log-page.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAtbG9nLXBhZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 54590:
/*!************************************************************************!*\
  !*** ./src/app/modals/app-settings-modal/app-settings-modal.page.scss ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\nion-item {\n  --border-color: var(--ion-color-primary);\n  --min-height: auto;\n}\n\nion-list {\n  border: 1px solid var(--ion-color-primary);\n  padding: 0;\n  margin-top: 10px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1zZXR0aW5ncy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0ksd0NBQWU7RUFDZixrQkFBYTtBQUNqQjs7QUFFQTtFQUNJLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDBDQUEwQztFQUMxQywyQ0FBMkM7QUFDL0MiLCJmaWxlIjoiYXBwLXNldHRpbmdzLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b2dnbGUge1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAtLW1pbi1oZWlnaHQ6IGF1dG87XG59XG5cbmlvbi1saXN0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xufVxuIl19 */");

/***/ }),

/***/ 78566:
/*!**********************************************************!*\
  !*** ./src/app/modals/blank-modal/blank-modal.page.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay1tb2RhbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 54854:
/*!**************************************************************!*\
  !*** ./src/app/modals/currency-list/currency-list.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toggle {\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\nion-item {\n  --min-height: auto;\n}\n\nion-list {\n  padding: 0;\n  margin-top: 10px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbmN5LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtFQUNJLGtCQUFhO0FBQ2pCOztBQUVBO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsMkNBQTJDO0FBQy9DIiwiZmlsZSI6ImN1cnJlbmN5LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvZ2dsZSB7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLW1pbi1oZWlnaHQ6IGF1dG87XG59XG5cbmlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG59XG4iXX0= */");

/***/ }),

/***/ 79708:
/*!**************************************************************!*\
  !*** ./src/app/modals/demo-settings/demo-settings.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".demo-settings ion-grid {\n  background-color: lightgrey;\n}\n\n.demo-settings .radio-list ion-card {\n  border: 1px solid lightgrey;\n}\n\n.demo-settings .icon-checked {\n  font-size: 40px;\n  color: var(--ion-color-primary-contrast);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.demo-settings ion-segment ion-segment-button {\n  border: 1px solid lightgrey;\n}\n\n.demo-settings ion-segment ion-icon {\n  font-size: 30px;\n}\n\n.demo-settings ion-list-header ion-label {\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.demo-settings .color-box {\n  font-size: 50px;\n}\n\n.demo-settings .color-box svg {\n  stroke: var(--ion-color-primary-contrast) !important;\n}\n\n.demo-settings .selected {\n  background-color: black;\n}\n\n.demo-settings ion-item ion-label {\n  font-size: 14px !important;\n  font-weight: bold;\n}\n\n.demo-settings .categories-cards {\n  padding: 10px;\n}\n\n.demo-settings .categories-cards ion-col div {\n  border: 1px solid lightgrey;\n  margin: 5px;\n  border-radius: 10px;\n}\n\n.demo-settings .categories-cards ion-col div img {\n  width: 100%;\n}\n\n.demo-settings .categories-cards .selected-card {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 98%;\n  height: 100%;\n  background-color: var(--ion-background-color);\n  opacity: 0.7;\n  border: 3px solid var(--ion-color-primary);\n  border-radius: 10px;\n  z-index: 9;\n}\n\n.demo-settings .categories-cards .selected-card ion-icon {\n  position: unset;\n  margin: auto;\n  font-size: 2.5rem !important;\n  color: var(--ion-color-primary);\n  z-index: 10;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMkJBQTJCO0FBQS9COztBQUZBO0VBTU0sMkJBQTJCO0FBQWpDOztBQU5BO0VBVUksZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFFVCxnQ0FBZ0M7QUFBcEM7O0FBaEJBO0VBb0JNLDJCQUEyQjtBQUFqQzs7QUFwQkE7RUF1Qk0sZUFBZTtBQUNyQjs7QUF4QkE7RUE0Qk0sZUFBZTtFQUNmLGlCQUFpQjtBQUF2Qjs7QUE3QkE7RUFpQ0ksZUFBZTtBQUFuQjs7QUFqQ0E7RUFtQ00sb0RBQW9EO0FBRTFEOztBQXJDQTtFQXVDSSx1QkFBdUI7QUFFM0I7O0FBekNBO0VBMkNNLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFFdkI7O0FBOUNBO0VBZ0RJLGFBQWE7QUFFakI7O0FBbERBO0VBb0RRLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsbUJBQW1CO0FBRTNCOztBQXhEQTtFQXdEVSxXQUFXO0FBSXJCOztBQTVEQTtFQThETSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLFlBQVk7RUFDWiw2Q0FBNkM7RUFDN0MsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsVUFBVTtBQUVoQjs7QUExRUE7RUEwRVEsZUFBZTtFQUNmLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLFdBQVc7QUFJbkIiLCJmaWxlIjoiZGVtby1zZXR0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby1zZXR0aW5ncyB7XG4gIGlvbi1ncmlkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIH1cbiAgLnJhZGlvLWxpc3Qge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICB9XG4gIH1cbiAgLmljb24tY2hlY2tlZCB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgaW9uLXNlZ21lbnQge1xuICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gIH1cbiAgaW9uLWxpc3QtaGVhZGVyIHtcbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG4gIC5jb2xvci1ib3gge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBzdmcge1xuICAgICAgc3Ryb2tlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxuICBpb24taXRlbSB7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG4gIC5jYXRlZ29yaWVzLWNhcmRzIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi1jb2wge1xuICAgICAgZGl2IHtcbiAgICAgICAgLy9ib3gtc2hhZG93OiByZ2JhKDE3LCAxNywgMjYsIDAuMDUpIDBweCAxcHggMHB4LCByZ2JhKDE3LCAxNywgMjYsIDAuMSkgMHB4IDBweCA4cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQtY2FyZCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgd2lkdGg6IDk4JTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB6LWluZGV4OiA5O1xuICAgICAgaW9uLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 74083:
/*!******************************************************************!*\
  !*** ./src/app/modals/forgot-password/forgot-password.page.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-grid ion-segment {\n  margin-bottom: 8px;\n}\n\nion-content ion-grid ion-row ion-segment-button ion-label {\n  text-transform: none;\n}\n\nion-content ion-item ion-checkbox {\n  color: lightgrey;\n  --size: 13px;\n  --border-width: 0.3px;\n}\n\nion-content ion-item ion-input {\n  --padding-start: 10px;\n}\n\nion-content ion-item ion-label {\n  padding-left: 10px;\n  --color: lightgrey;\n}\n\nion-content ion-item ion-button {\n  color: lightgrey;\n  text-transform: none;\n}\n\n.icons ion-button {\n  text-transform: none;\n}\n\n.icons ion-label {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxrQkFBa0I7QUFEOUI7O0FBRkE7RUFRb0Isb0JBQW9CO0FBRnhDOztBQU5BO0VBa0JZLGdCQUFnQjtFQUNoQixZQUFPO0VBQ1AscUJBQWU7QUFSM0I7O0FBWkE7RUF1QlkscUJBQWdCO0FBUDVCOztBQWhCQTtFQTRCWSxrQkFBa0I7RUFDbEIsa0JBQVE7QUFScEI7O0FBckJBO0VBZ0NZLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFQaEM7O0FBV0E7RUFHUSxvQkFBb0I7QUFWNUI7O0FBT0E7RUFPUSxhQUFhO0VBQ2IsY0FBYztBQVZ0QiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGlvbi1ncmlkIHtcbiAgICAgICAgaW9uLXNlZ21lbnQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpb24tYnV0dG9uOmZvY3Vze1xuICAgICAgICAgICAgLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24taXRlbSB7XG4gICAgICAgIGlvbi1jaGVja2JveCB7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgICAgICAgICAgLS1zaXplOiAxM3B4O1xuICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAuM3B4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgICAgIC8vIC0tcGxhY2Vob2xkZXItY29sb3I6ICNhZGFkYWQ7XG4gICAgICAgICAgICAvLyBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAtLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaWNvbnMge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAvLyBjb2xvcjogbGlnaHRncmV5O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgLy8gY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 70369:
/*!****************************************************!*\
  !*** ./src/app/modals/language/language.page.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --min-height: auto;\n}\n\nion-list {\n  padding: 0;\n  margin-top: 10px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFhO0FBQ2pCOztBQUVBO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsMkNBQTJDO0FBQy9DIiwiZmlsZSI6Imxhbmd1YWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICAtLW1pbi1oZWlnaHQ6IGF1dG87XG59XG5cbmlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG59XG4iXX0= */");

/***/ }),

/***/ 95708:
/*!**********************************************!*\
  !*** ./src/app/modals/login/login.page.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-grid ion-segment {\n  margin-bottom: 8px;\n}\n\nion-content ion-grid ion-row ion-segment-button ion-label {\n  text-transform: none;\n}\n\nion-content ion-item ion-checkbox {\n  --size: 13px;\n  --border-width: 0.3px;\n}\n\nion-content ion-item ion-input {\n  --padding-start: 10px;\n}\n\nion-content ion-item ion-label {\n  padding-left: 10px;\n}\n\nion-content ion-item ion-button {\n  text-transform: none;\n}\n\nion-content .social-login {\n  min-height: 50px;\n}\n\nion-content .social-login ion-col {\n  position: relative;\n}\n\nion-content .social-login ion-col .container {\n  display: contents;\n}\n\n.icons ion-button {\n  text-transform: none;\n}\n\n.icons ion-label {\n  margin-top: 0;\n  padding-top: 0;\n}\n\n.privacy-policy ion-col {\n  line-height: 0.9;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLGtCQUFrQjtBQUQ5Qjs7QUFGQTtFQVFvQixvQkFBb0I7QUFGeEM7O0FBTkE7RUFlWSxZQUFPO0VBQ1AscUJBQWU7QUFMM0I7O0FBWEE7RUFtQlkscUJBQWdCO0FBSjVCOztBQWZBO0VBd0JZLGtCQUFrQjtBQUw5Qjs7QUFuQkE7RUEyQlksb0JBQW9CO0FBSmhDOztBQXZCQTtFQStCUSxnQkFBZ0I7QUFKeEI7O0FBM0JBO0VBaUNZLGtCQUFrQjtBQUY5Qjs7QUEvQkE7RUFtQ2dCLGlCQUFpQjtBQUFqQzs7QUFLQTtFQUdRLG9CQUFvQjtBQUo1Qjs7QUFDQTtFQU9RLGFBQWE7RUFDYixjQUFjO0FBSnRCOztBQVFBO0VBRVEsZ0JBQWdCO0FBTnhCIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIGlvbi1zZWdtZW50IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgaW9uLWNoZWNrYm94IHtcbiAgICAgICAgICAgIC0tc2l6ZTogMTNweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwLjNweDtcbiAgICAgICAgfVxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAgICAgICAgICAgLy8gLS1wbGFjZWhvbGRlci1jb2xvcjogI2FkYWRhZDtcbiAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zb2NpYWwtbG9naW4ge1xuICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmljb25zIHtcbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLy8gY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIC8vIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIH1cbn1cblxuLnByaXZhY3ktcG9saWN5IHtcbiAgICBpb24tY29sIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuOTtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ 35667:
/*!**********************************************************!*\
  !*** ./src/app/modals/phone-login/phone-login.page.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG9uZS1sb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 71631:
/*!****************************************************************!*\
  !*** ./src/app/modals/privacy-policy/privacy-policy.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-end: var(--app-padding-left-right);\n  --padding-start: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFjO0VBQ2QsOENBQWdCO0FBQ3BCIiwiZmlsZSI6InByaXZhY3ktcG9saWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xufVxuIl19 */");

/***/ }),

/***/ 96645:
/*!************************************************************************************!*\
  !*** ./src/app/modals/product-attributes-modal/product-attributes-modal.page.scss ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inner-content {\n  max-height: 80vh;\n  overflow: auto;\n  padding: 0 var(--app-padding-left-right);\n}\n\n.inner-content .top-list {\n  padding: 10px;\n}\n\n.inner-content .top-list ion-item {\n  --padding-start: 0;\n}\n\n.inner-content .top-list ion-thumbnail {\n  --border-radius: 10%;\n}\n\n.inner-content .quantity-chip {\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.inner-content .quantity-chip ion-icon {\n  font-size: 35px;\n}\n\n.inner-content .quantity-chip ion-label {\n  padding: 0px 10px;\n  font-size: 20px;\n}\n\n.inner-content ion-badge {\n  border: 1px solid var(--ion-text-color);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtYXR0cmlidXRlcy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFVSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHdDQUF3QztBQVI1Qzs7QUFKQTtFQUVRLGFBQWE7QUFNckI7O0FBUkE7RUFJWSxrQkFBZ0I7QUFRNUI7O0FBWkE7RUFPWSxvQkFBZ0I7QUFTNUI7O0FBaEJBO0VBY1EsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBTXBCOztBQXRCQTtFQWtCWSxlQUFlO0FBUTNCOztBQTFCQTtFQXFCWSxpQkFBaUI7RUFDakIsZUFBZTtBQVMzQjs7QUEvQkE7RUEwQlEsdUNBQXVDO0FBUy9DIiwiZmlsZSI6InByb2R1Y3QtYXR0cmlidXRlcy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5uZXItY29udGVudCB7XG4gICAgLnRvcC1saXN0IHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIGlvbi10aHVtYm5haWwge1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWF4LWhlaWdodDogODB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAwIHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIC5xdWFudGl0eS1jaGlwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWJhZGdlIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 61421:
/*!**************************************************************!*\
  !*** ./src/app/modals/refund-policy/refund-policy.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-end: var(--app-padding-left-right);\n  --padding-start: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZnVuZC1wb2xpY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQWM7RUFDZCw4Q0FBZ0I7QUFDcEIiLCJmaWxlIjoicmVmdW5kLXBvbGljeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 74627:
/*!****************************************************************!*\
  !*** ./src/app/modals/select-country/select-country.page.scss ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: var(--app-padding-left-right);\n  --padding-end: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1jb3VudHJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDhDQUFnQjtFQUNoQiw0Q0FBYztBQUFsQiIsImZpbGUiOiJzZWxlY3QtY291bnRyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLy8tLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgLS1wYWRkaW5nLWVuZDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG59Il19 */");

/***/ }),

/***/ 44441:
/*!************************************************************!*\
  !*** ./src/app/modals/select-zones/select-zones.page.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: var(--app-padding-left-right);\n  --padding-end: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC16b25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4Q0FBZ0I7RUFDaEIsNENBQWM7QUFBbEIiLCJmaWxlIjoic2VsZWN0LXpvbmVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAvLy0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbn0iXX0= */");

/***/ }),

/***/ 87308:
/*!**************************************************!*\
  !*** ./src/app/modals/sign-up/sign-up.page.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLXVwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 28669:
/*!**************************************************************!*\
  !*** ./src/app/modals/term-services/term-services.page.scss ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-end: var(--app-padding-left-right);\n  --padding-start: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm0tc2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNENBQWM7RUFDZCw4Q0FBZ0I7QUFDcEIiLCJmaWxlIjoidGVybS1zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcclxuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 96476:
/*!*****************************************************************************!*\
  !*** ./src/components/app-json-tree-view/app-json-tree-view.component.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ngx-json-viewer {\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  position: relative;\n}\n\n.ngx-json-viewer .segment {\n  padding: 2px;\n  margin: 1px 1px 1px 12px;\n}\n\n.ngx-json-viewer .segment .segment-main {\n  word-wrap: break-word;\n}\n\n.ngx-json-viewer .segment .segment-main .toggler {\n  position: absolute;\n  margin-left: -14px;\n  margin-top: 3px;\n  font-size: 0.8em;\n  line-height: 1.2em;\n  vertical-align: middle;\n  color: #787878;\n}\n\n.ngx-json-viewer .segment .segment-main .toggler::after {\n  display: inline-block;\n  content: \" \\21E8\";\n  transition: transform 0.1s ease-in;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.ngx-json-viewer .segment .segment-main .segment-key {\n  color: #4e187c;\n  padding-left: 10px;\n}\n\n.ngx-json-viewer .segment .segment-main .segment-separator {\n  color: #999;\n}\n\n.ngx-json-viewer .segment .segment-main .segment-value {\n  color: #000;\n}\n\n.ngx-json-viewer .segment .children {\n  margin-left: 12px;\n}\n\n.ngx-json-viewer .segment-type-string > .segment-main > .segment-value {\n  color: #ff6b6b;\n}\n\n.ngx-json-viewer .segment-type-number > .segment-main > .segment-value {\n  color: #009688;\n}\n\n.ngx-json-viewer .segment-type-boolean > .segment-main > .segment-value {\n  color: #b938a4;\n}\n\n.ngx-json-viewer .segment-type-date > .segment-main > .segment-value {\n  color: #05668d;\n}\n\n.ngx-json-viewer .segment-type-array > .segment-main > .segment-value {\n  color: #999;\n}\n\n.ngx-json-viewer .segment-type-object > .segment-main > .segment-value {\n  color: #999;\n}\n\n.ngx-json-viewer .segment-type-function > .segment-main > .segment-value {\n  color: #999;\n}\n\n.ngx-json-viewer .segment-type-null > .segment-main > .segment-value {\n  color: #fff;\n}\n\n.ngx-json-viewer .segment-type-undefined > .segment-main > .segment-value {\n  color: #fff;\n}\n\n.ngx-json-viewer .segment-type-null > .segment-main > .segment-value {\n  background-color: red;\n}\n\n.ngx-json-viewer .segment-type-undefined > .segment-main > .segment-key {\n  color: #999;\n}\n\n.ngx-json-viewer .segment-type-undefined > .segment-main > .segment-value {\n  background-color: #999;\n}\n\n.ngx-json-viewer .segment-type-object > .segment-main,\n.ngx-json-viewer .segment-type-array > .segment-main {\n  white-space: nowrap;\n}\n\n.ngx-json-viewer .expanded > .toggler::after {\n  transform: rotate(90deg);\n}\n\n.ngx-json-viewer .expandable,\n.ngx-json-viewer .expandable > .toggler {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1qc29uLXRyZWUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQTtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7QUFYdEI7O0FBTUE7RUFRUSxZQUFZO0VBQ1osd0JBQXdCO0FBVmhDOztBQUNBO0VBWVkscUJBQXFCO0FBVGpDOztBQUhBO0VBZWdCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFSOUI7O0FBYkE7RUF3Qm9CLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixnQkFBZ0I7QUFQcEM7O0FBckJBO0VBaUNnQixjQUFjO0VBQ2Qsa0JBQWtCO0FBUmxDOztBQTFCQTtFQXNDZ0IsV0FBVztBQVIzQjs7QUE5QkE7RUEwQ2dCLFdBQVc7QUFSM0I7O0FBbENBO0VBK0NZLGlCQUFpQjtBQVQ3Qjs7QUF0Q0E7RUFxRFksY0FoRU87QUFxRG5COztBQTFDQTtFQXFEWSxjQS9ETztBQXdEbkI7O0FBOUNBO0VBcURZLGNBOURRO0FBMkRwQjs7QUFsREE7RUFxRFksY0E3REs7QUE4RGpCOztBQXREQTtFQXFEWSxXQTVERztBQWlFZjs7QUExREE7RUFxRFksV0EzREk7QUFvRWhCOztBQTlEQTtFQXFEWSxXQTFETTtBQXVFbEI7O0FBbEVBO0VBcURZLFdBekRJO0FBMEVoQjs7QUF0RUE7RUFxRFksV0F4RE87QUE2RW5COztBQTFFQTtFQTJEUSxxQkFBcUI7QUFtQjdCOztBQTlFQTtFQStEWSxXQUFXO0FBbUJ2Qjs7QUFsRkE7RUFrRVksc0JBQXNCO0FBb0JsQzs7QUF0RkE7O0VBdUVRLG1CQUFtQjtBQW9CM0I7O0FBM0ZBO0VBMkVRLHdCQUF3QjtBQW9CaEM7O0FBL0ZBOztFQWdGUSxlQUFlO0FBb0J2QiIsImZpbGUiOiJhcHAtanNvbi10cmVlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdHlwZS1jb2xvcnM6IChcbiAgICBzdHJpbmc6ICNmZjZiNmIsXG4gICAgbnVtYmVyOiAjMDA5Njg4LFxuICAgIGJvb2xlYW46ICNiOTM4YTQsXG4gICAgZGF0ZTogIzA1NjY4ZCxcbiAgICBhcnJheTogIzk5OSxcbiAgICBvYmplY3Q6ICM5OTksXG4gICAgZnVuY3Rpb246ICM5OTksXG4gICAgXCJudWxsXCI6ICNmZmYsXG4gICAgdW5kZWZpbmVkOiAjZmZmLFxuKTtcblxuLm5neC1qc29uLXZpZXdlciB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuc2VnbWVudCB7XG4gICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgbWFyZ2luOiAxcHggMXB4IDFweCAxMnB4O1xuXG4gICAgICAgIC5zZWdtZW50LW1haW4ge1xuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gICAgICAgICAgICAudG9nZ2xlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc4Nzg3ODtcblxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIiBcXDIxRThcIjtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlZ21lbnQta2V5IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRlMTg3YztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWdtZW50LXNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWdtZW50LXZhbHVlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jaGlsZHJlbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICR0eXBlLCAkY29sb3IgaW4gJHR5cGUtY29sb3JzIHtcbiAgICAgICAgLnNlZ21lbnQtdHlwZS0jeyR0eXBlfSA+IC5zZWdtZW50LW1haW4gPiAuc2VnbWVudC12YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3BlY2lhbCBjYXNlcyBuZWVkIGhpZ2hsaWdodHRlZFxuICAgIC5zZWdtZW50LXR5cGUtbnVsbCA+IC5zZWdtZW50LW1haW4gPiAuc2VnbWVudC12YWx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9XG4gICAgLnNlZ21lbnQtdHlwZS11bmRlZmluZWQgPiAuc2VnbWVudC1tYWluIHtcbiAgICAgICAgJiA+IC5zZWdtZW50LWtleSB7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgfVxuICAgICAgICAmID4gLnNlZ21lbnQtdmFsdWUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2VnbWVudC10eXBlLW9iamVjdCA+IC5zZWdtZW50LW1haW4sXG4gICAgLnNlZ21lbnQtdHlwZS1hcnJheSA+IC5zZWdtZW50LW1haW4ge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC5leHBhbmRlZCA+IC50b2dnbGVyOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB9XG5cbiAgICAuZXhwYW5kYWJsZSxcbiAgICAuZXhwYW5kYWJsZSA+IC50b2dnbGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 42460:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about-us/about-us.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    <ion-title mode=\"ios\">{{\"about us\"|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"center\" *ngIf=\"shared.aboutUs==''\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-text class=\"ion-no-padding\" *ngIf=\"shared.aboutUs!=''\">\n    <p [innerHTML]=\"shared.aboutUs\">\n    </p>\n  </ion-text>\n  <!--  <ion-list>\n    <ion-item (click)=\"openSite()\" lines=\"full\">\n      {{\"official website\"|translate}}\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n     <ion-item (click)=\"showModal('privacyPolicy')\" lines=\"full\">\n      {{'Privacy Policy'|translate}}\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"showModal('refundPolicy')\" lines=\"full\">\n      {{'Refund Policy'|translate}}\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"showModal('termServices')\" lines=\"none\">\n      {{'Term and Services'|translate}}\n      <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\n    </ion-item> \n  </ion-list>\n  -->\n</ion-content>");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app [class.dark-theme]=\"config.darkModeBool==true\" [class.light-theme]=\"config.darkModeBool==false\"\n  [class]=\"config.appThemeString\"\n  [class.light-mode-plus-white-theme]=\"config.appThemeString=='white' && config.darkModeBool==false\"\n  [class.dark-mode-plus-white-theme]=\"config.appThemeString=='white' && config.darkModeBool==true\"\n  [class.light-mode-plus-black-theme]=\"config.appThemeString=='default' && config.darkModeBool==false\"\n  [class.dark-mode-plus-black-theme]=\"config.appThemeString=='default' && config.darkModeBool==true\"\n  [class.appDesign1]=\"config.appDesignNumber==1\" [class.appDesign0]=\"config.appDesignNumber==0\">\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu type=\"overlay\" class=\"main-menu\" menuId=\"mainMenu\" contentId=\"main-content\">\n      <ion-header *ngIf=\"config.appDesignNumber==0\">\n        <ion-toolbar>\n          <ion-title class=\"avenir-next-bold ion-no-padding\"> {{'hello'| translate }} {{getTitleName()}} </ion-title>\n        </ion-toolbar>\n      </ion-header>\n      <ion-header *ngIf=\"config.appDesignNumber==1\">\n        <ion-toolbar color=\"primary\">\n          <ion-title class=\"avenir-next-bold ion-no-padding\"> {{'hello'| translate }} {{getTitleName()}} </ion-title>\n        </ion-toolbar>\n      </ion-header>\n\n      <ion-content class=\"variable-background-color\">\n        <ion-list>\n          <div *ngFor=\"let c of appCategoriesService.categoriesArray\">\n            <ion-item lines=\"none\">\n              <ion-label class=\"font-medium font-bold\" (click)=\"showHideCategoryList(c.id)\">{{c.name}}\n              </ion-label>\n              <ion-icon class=\"font-small\" [name]=\"getRightIcon(c.id)\" slot=\"end\"\n                *ngIf=\"appCategoriesService.checkCategoriesHasChild(c.id)\" (click)=\"showHideCategoryList(c.id)\">\n              </ion-icon>\n            </ion-item>\n            <div *ngIf=\"categoryListIsSelected(c.id)\">\n              <ion-item lines=\"none\" *ngFor=\"let sub of appCategoriesService.getCategories(c.id)\"\n                class=\"app-background-color sub-cat padding-horizontal-10\" [appAnimation]=\"'fade'\">\n                <ion-label class=\"font-medium font-bold\" (click)=\"openCategory(sub.id)\">\n                  {{sub.name}}\n                </ion-label>\n              </ion-item>\n            </div>\n          </div>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\">\n\n    </ion-router-outlet>\n  </ion-split-pane>\n\n\n  <ion-fab class=\"ion-padding-start margin50bottom\" vertical=\"bottom\" horizontal=\"top\"\n    *ngIf=\"!config.appInProductionBool\">\n    <ion-fab-button (click)=\"openDemoSettings()\">\n      <ion-icon class=\"rotation-animation\" name=\"settings\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-app>");

/***/ }),

/***/ 56077:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/intro/intro.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"variable-background-color\">\n  <ion-slides pager=\"true\" loop=\"true\" #introSlider class=\"ion-no-padding intro-slides\" [options]=\"sliderConfig\">\n    <ion-slide class=\"ion-no-padding\" *ngFor=\"let s of slidesArray; let i=index\">\n      <span class=\"ion-no-padding\">\n        <h1 class=\"ion-text-capitalize app-tex-color avenir-next-bold ion-text-start top-text padding-20\"\n          color=\"primary\">\n          {{s.description|translate}}\n        </h1>\n        <h1 class=\"ion-text-capitalize padding-20 avenir-next-bold ion-text-end top-text\">\n          <ion-text color=\"primary\">{{s.description2|translate}}</ion-text>\n        </h1>\n        <div class=\"image-box\">\n          <ion-img [src]=\"s.image\" class=\"center\" alt=\"Slide Images\"></ion-img>\n        </div>\n      </span>\n      <ion-grid class=\"button-grid\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button color=\"primary\" *ngIf=\"slidesArray.length!=i+1\"\n              class=\"font-bold-900 ion-text-capitalize upper-button\" [class.round-borders]=\"config.roundBordersBool\"\n              (click)=\"swipeNext()\">\n              {{\"next\"|translate}}</ion-button>\n            <ion-button color=\"primary\" *ngIf=\"slidesArray.length==i+1\"\n              class=\"font-bold-900 ion-text-capitalize upper-button\" [class.round-borders]=\"config.roundBordersBool\"\n              (click)=\"dismiss()\">\n              {{\"home\"|translate}}</ion-button>\n            <br>\n            <ion-button fill=\"clear\" class=\" font-bold-900 ion-text-capitalize\"\n              style=\"text-decoration: underline; text-transform: none;\" (click)=\"dismiss()\">{{\"skip\"|translate}}\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n\n\n\n<!-- <ion-content>\n  <ion-slides pager=\"true\" #IonSlides loop=\"true\" class=\"ion-no-padding\">\n    <ion-slide #IonSlides *ngFor=\"let slide of slides; let i=index\" class=\"ion-no-padding\">\n      <span class=\"ion-no-padding\">\n        <ion-row class=\"ion-justify-content-center\">\n          <img src=\"{{slide.image}}\" alt=\"Slide Images\">\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-icon name=\"{{slide.icon}}\"></ion-icon>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <h2>{{slide.title|translate}}</h2>\n        </ion-row>\n       <ion-row class=\"ion-justify-content-center\">\n          <ion-col>\n            <p>{{slide.description}}</p>\n          </ion-col>\n        </ion-row> \n<ion-row>\n  <ion-button *ngIf=\"slides.length!=i+1\" (click)=\"dismiss()\" fill=\"outline\">\n    {{ 'Skip' | translate }}\n  </ion-button>\n  <ion-button *ngIf=\"slides.length==i+1\" (click)=\"dismiss()\" fill=\"outline\">\n    {{ 'Done' | translate }}\n  </ion-button>\n</ion-row>\n</span>\n</ion-slide>\n</ion-slides>\n</ion-content> -->");

/***/ }),

/***/ 51309:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/app-log-page/app-log-page.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">App Logging</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Default Segment -->\n  <ion-segment [(ngModel)]=\"segmentsTabs\">\n    <ion-segment-button value=\"log\">\n      <ion-label>Log</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"error\">\n      <ion-label>Error</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"html\">\n      <ion-label>html</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"translation\">\n      <ion-label>Translation</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"segmentsTabs\">\n    <div *ngSwitchCase=\"'log'\" style=\"padding-left: 5px;\">\n      <app-app-json-tree-view [json]=\"appLogService.data\" [expanded]=\"false\">\n      </app-app-json-tree-view>\n    </div>\n    <div *ngSwitchCase=\"'error'\" style=\"padding-left: 5px;\">\n      <app-app-json-tree-view [json]=\"appLogService.dataError\" [expanded]=\"false\">\n      </app-app-json-tree-view>\n    </div>\n    <div *ngSwitchCase=\"'html'\">\n      <span [innerHTML]=\"appLogService.innerHtml\"></span>\n    </div>\n    <div *ngSwitchCase=\"'translation'\">\n      <ion-button class=\"ion-no-border font-bold\" expand=\"block\" (click)=\"appTranslationService.consoleMissingValues()\">\n        Console All Values</ion-button>\n      <app-app-json-tree-view [json]=\"appTranslationService.missingValues\" [expanded]=\"false\">\n      </app-app-json-tree-view>\n    </div>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ 51741:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/app-settings-modal/app-settings-modal.page.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    <ion-title mode=\"ios\">{{\"Settings\"|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- List of Text Items -->\n  <ion-list [class.round-borders]=\"config.roundBordersBool\">\n    <ion-item lines=\"full\" (click)=\"openLanguagePage()\">\n      <ion-label class=\"font-medium font-bold\">{{\"language\"|translate}}</ion-label>\n      <ion-label class=\"font-medium font-bold ion-text-end\" color=\"danger\" slot=\"end\">{{config.languageCodeString}}\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openCurrencyPage()\">\n      <ion-label class=\"font-medium font-bold\">{{\"currency\"|translate}}</ion-label>\n      <ion-label class=\"font-medium font-bold ion-text-end\" color=\"danger\" slot=\"end\">{{config.currencyCodeString}}\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label class=\"font-medium font-bold\">\n        {{\"Dark Mode\"|translate}}\n      </ion-label>\n      <ion-toggle [(ngModel)]=\"darkModeToggle\" (ionChange)=\"changeDarkMode()\">\n      </ion-toggle>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openAboutUsPage()\">\n      <ion-label class=\"font-medium font-bold\">{{\"about us\"|translate}}</ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openPrivacyPolicyPage()\">\n      <ion-label class=\"font-medium font-bold\">{{\"privacy policy\"|translate}}</ion-label>\n    </ion-item>\n    <ion-item lines=\"full\" (click)=\"openRefundPolicyPage()\">\n      <ion-label class=\"font-medium font-bold\">{{\"refund policy\"|translate}}</ion-label>\n    </ion-item>\n    <ion-item lines=none (click)=\"openTermsPage()\">\n      <ion-label class=\"font-medium font-bold\">{{\"terms & services\"|translate}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-item *ngIf=\"appUserService.userIsLogedIn()\" lines=none class=\"bg-transparent\">\n    <ion-button expand=\"block\" color=\"danger\" style=\"width:100%\" class=\"ion-no-margin margin-top-10\" (click)=\"logout()\">\n      {{\"sign out\"|translate}}\n    </ion-button>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ 35175:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/blank-modal/blank-modal.page.html ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ 26943:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/currency-list/currency-list.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    <ion-title mode=\"ios\">{{\"Select Currency\"|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list [class.round-borders]=\"config.roundBordersBool\">\n    <ion-item *ngFor=\"let v of currencyListArray\" [color]=\"getSelectedColor(v)\" (click)=\"updateCurrency(v)\">\n      <ion-label class=\"font-medium font-bold\">{{v.title}}({{v.code}})</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ 23551:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/demo-settings/demo-settings.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"ion-no-padding\">\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"avenir-next-bold font-medium\">Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"demo-settings\">\n  <ion-list-header color=\"medium\" class=\"ion-margin-vertical\">\n    <ion-label>Change App Theme</ion-label>\n  </ion-list-header>\n  <ion-card class=\"ion-no-margin ion-margin-horizontal\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=2 *ngFor=\"let c of colors;\" (click)=\"changeAppTheme(c.name)\" class=\"ion-text-center\">\n          <ion-icon name=\"ellipse\" style.color=\"{{c.value}}\" class=\"color-box\">\n          </ion-icon>\n          <ion-icon class=\"icon-checked\" *ngIf=\"c.name==config.appThemeString\" name=\"checkmark-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n\n  <ion-list-header color=\"medium\" class=\"ion-margin-vertical\">\n    <ion-label>Choose Color Mode</ion-label>\n  </ion-list-header>\n\n  <ion-item lines=none class=\"bg-transparent\">\n\n    <ion-segment class=\"app-segments\" (ionChange)=\"modeChange()\" mode=\"ios\" [value]=\"themeMode\" [(ngModel)]=\"themeMode\">\n      <ion-segment-button value=\"dark\" class=\"ion-padding\">\n        <ion-icon name=\"color-palette-outline\"></ion-icon>\n        <ion-label>Dark Mode</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"light\" class=\"ion-padding\">\n        <ion-icon name=\"color-palette-outline\"></ion-icon>\n        <ion-label>Light Mode</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-item>\n\n  <ion-item color=\"medium\" class=\"ion-margin-top\">\n    <ion-label>\n      Multi Language\n    </ion-label>\n    <ion-spinner *ngIf=\"loaderLanguages\"></ion-spinner>\n  </ion-item>\n\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"selectedLanguage\" (ionChange)=\"updateLanguage(selectedLanguage)\" mode=ios>\n      <ion-card *ngFor=\"let l of languagesArray\" class=\"ion-no-margin ion-margin-top ion-margin-horizontal\">\n        <ion-item lines=none>\n          <ion-label>{{l.language_name}}({{l.code}})</ion-label>\n          <ion-radio [value]=\"l\"></ion-radio>\n        </ion-item>\n      </ion-card>\n    </ion-radio-group>\n  </ion-list>\n\n  <ion-item color=\"medium\" class=\"ion-margin-top\">\n    <ion-label>\n      Multi Currency\n    </ion-label>\n    <ion-spinner *ngIf=\"loaderCurrecny\"></ion-spinner>\n  </ion-item>\n\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"selectedCurrency\" (ionChange)=\"updateCurrency(selectedCurrency)\" mode=ios>\n      <ion-card *ngFor=\"let v of currencyListArray\" class=\"ion-no-margin ion-margin-top ion-margin-horizontal\">\n        <ion-item lines=none>\n          <ion-label>{{v.code}}({{v.symbol}})</ion-label>\n          <ion-radio [value]=\"v\"></ion-radio>\n        </ion-item>\n      </ion-card>\n    </ion-radio-group>\n  </ion-list>\n\n  <!--\n  <ion-item color=\"medium\" class=\"ion-margin-top\">\n    <ion-label>\n      Banner Style\n    </ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-row class=\"ion-no-padding product-cards ion-text-center\">\n      <ion-col (click)=\"setBannerStyle(p)\" *ngFor=\"let p of [1,2,3,4,5,6]\" class=\"ion-no-padding\"\n        (click)=\"setCardStyle(p)\" size=\"12\">\n        <img src=\"assets/banners/{{p}}.png\">\n\n        <ion-row class=\"selected-card\" *ngIf=\"p==config.bannerStyle\">\n          <ion-icon name=\"checkmark-circle\"></ion-icon>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n-->\n\n<ion-item color=\"medium\" class=\"ion-margin-top\">\n  <ion-label>\n    Home Page Styles\n  </ion-label>\n</ion-item>\n<ion-list>\n  <ion-row class=\"ion-no-padding categories-cards ion-text-center\">\n    <ion-col *ngFor=\"let p of [1,2,3,4,5,6,7,8,9]\" size=\"6\" (click)=\"setHomeStyle(p)\">\n\n      <div>\n        <img src=\"assets/home/{{p}}.png\">\n      </div>\n\n      <ion-row class=\"selected-card\" *ngIf=\"p==config.homePageNumber\">\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-list>\n\n<ion-item color=\"medium\" class=\"ion-margin-top\">\n  <ion-label>\n    Categories Styles\n  </ion-label>\n</ion-item>\n<ion-list>\n  <ion-row class=\"ion-no-padding categories-cards ion-text-center\">\n    <ion-col *ngFor=\"let p of [1,2,3,4,5,6]\" size=\"6\" (click)=\"setCategoryStyle(p)\">\n      <div>\n        <img src=\"assets/categories/{{p}}.png\">\n      </div>\n\n      <ion-row class=\"selected-card\" *ngIf=\"p==config.categoryPageNumber\">\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-list>\n\n\n<ion-item color=\"medium\" class=\"ion-margin-top\">\n  <ion-label>\n    Product Card Styles\n  </ion-label>\n</ion-item>\n<ion-list>\n  <ion-row class=\"ion-no-padding categories-cards ion-text-center\">\n    <ion-col *ngFor=\"let p of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]\" size=\"6\"\n      class=\"ion-no-padding\" (click)=\"setCardStyle(p)\">\n      <div>\n        <img src=\"assets/cards/{{p}}.png\">\n      </div>\n\n      <ion-row class=\"selected-card\" *ngIf=\"p==config.productCardStyleNumber\">\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-list>\n\n</ion-content>");

/***/ }),

/***/ 58215:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/forgot-password/forgot-password.page.html ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"dismiss()\"></ion-icon>\n    <ion-title mode=\"ios\"> {{'forgot password'| translate }} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #loginForm=\"ngForm\" class=\"form\" (ngSubmit)=\"forgetPassword()\">\n    <ion-item lines=\"none\" class=\"ion-margin-bottom\">\n      <ion-icon name=\"mail-outline\" size=\"small\"></ion-icon>\n      <ion-input class=\"font-large\" placeholder=\"email@example.com\" type=\"email\" email\n        pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" [(ngModel)]=\"formData.email\" required>\n      </ion-input>\n    </ion-item>\n    <ion-text class=\"helptext font-small\" color=danger> * {{\"invalid email\"|translate}}</ion-text>\n    <ion-item *ngIf=\"errorMessage!=''\" lines=\"none\">\n      <ion-label>\n        {{errorMessage| translate}}\n      </ion-label>\n    </ion-item>\n\n    <ion-button disabled=\"true\" expand=\"full\" color=\"secondary\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">\n      {{'Send'|translate}}\n    </ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ 13353:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/language/language.page.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    <ion-title mode=\"ios\">{{'Select Language'|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list [class.round-borders]=\"config.roundBordersBool\">\n    <ion-item *ngFor=\"let l of languagesArray\" [color]=\"getSelectedColor(l)\" (click)=\"updateLanguage(l)\">\n      <ion-label class=\"font-medium font-bold\">{{l.language_name}}({{l.code}})</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ 53633:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/login/login.page.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"arrow-back\" (click)=\"dismiss()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-text-capitalize\">\n  <ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col class=\"ion-text-center margin-top-20 margin-bottom-10 \">\n          <h1 class=\"font-extra-large\" *ngIf=\"topSegmentsString=='signIn'\">{{'welcome back'| translate }}!\n          </h1>\n          <h1 class=\"font-extra-large\" *ngIf=\"topSegmentsString=='signUp'\">{{'create a new account'|\n            translate }}</h1>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"margin-top-5\">\n        <ion-segment [(ngModel)]=\"topSegmentsString\">\n          <ion-segment-button value=\"signIn\">\n            <ion-label class=\"font-extra-large ion-text-capitalize\">{{'sign in'| translate }}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"signUp\">\n            <ion-label class=\"font-extra-large ion-text-capitalize\">{{'sign up'| translate }}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-row>\n      <div *ngIf=\"topSegmentsString=='signIn'\">\n        <!--------------------------------------- for login section --------------------------------------- -->\n        <!-- *ngIf=\"config.enableEmailLoginBool\" -->\n        <form #loginForm=\"ngForm\" class=\"form\" (ngSubmit)=\"login()\">\n          <ion-item lines=\"none\">\n            <ion-icon name=\"mail-outline\" size=\"small\"></ion-icon>\n            <ion-input class=\"font-large\" placeholder=\"email@example.com\" type=\"email\" email\n              pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" [(ngModel)]=\"formData.email\"\n              required></ion-input>\n          </ion-item>\n          <ion-text class=\"helptext font-small\" color=danger> * {{\"invalid email\"|translate}}</ion-text>\n          <ion-item lines=\"none\">\n            <ion-icon name=\"lock-closed-outline\" size=\"small\"></ion-icon>\n            <ion-input class=\"font-large\" placeholder=\"{{'password'| translate }}\" type=\"password\" name=\"password\"\n              [(ngModel)]=\"formData.password\" required></ion-input>\n          </ion-item>\n          <ion-text class=\"helptext font-small\" color=danger> * {{\"required\"|translate}}</ion-text>\n          <ion-item lines=\"none\">\n\n            <ion-label class=\"font-large\"></ion-label>\n            <ion-button fill=\"clear\" class=\"ion-no-padding ion-text-capitalize\" size=\"small\"\n              (click)=\"openForgetPasswordPage()\">{{'forgot your password'|\n              translate }}?\n            </ion-button>\n          </ion-item>\n          <ion-item lines=\"none\" *ngIf=\"errorMessage!=''\">\n            <ion-text color=\"danger\" class=\"font-small\">\n              {{errorMessage| translate}}\n            </ion-text>\n          </ion-item>\n          <ion-button expand=\"block\" class=\"font-bold ion-text-capitalize\" [disabled]=\"!loginForm.form.valid\"\n            type=\"submit\" color=\"primary\">{{'sign in'|\n            translate\n            }}</ion-button>\n        </form>\n\n      </div>\n      <div *ngIf=\"topSegmentsString=='signUp'\">\n        <!--------------------------------------- for sign up section --------------------------------------- -->\n        <!-- *ngIf=\"config.enableEmailLoginBool\" -->\n        <form #signUpForm=\"ngForm\" class=\"form\" (ngSubmit)=\"signUp()\">\n\n          <ion-item lines=\"none\">\n            <ion-icon name=\"person-outline\" size=\"small\"></ion-icon>\n            <ion-input class=\"font-large\" placeholder=\"{{'first name'|translate}}\" type=\"text\" name=\"first_name\"\n              [(ngModel)]=\"signUpformData.first_name\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"helptext font-small\" color=danger> * {{\"required\"|translate}}</ion-text>\n\n          <ion-item lines=\"none\">\n            <ion-icon name=\"person-outline\" size=\"small\"></ion-icon>\n            <ion-input class=\"font-large\" placeholder=\"{{'last name'|translate}}\" type=\"text\" name=\"last_name\"\n              [(ngModel)]=\"signUpformData.last_name\" required>\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"helptext font-small\" color=danger> * {{\"required\"|translate}}</ion-text>\n\n          <ion-item lines=\"none\">\n            <ion-icon name=\"mail-outline\" size=\"small\"></ion-icon>\n            <ion-input class=\"font-large\" placeholder=\"email@example.com\" type=\"email\" email\n              pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" [(ngModel)]=\"signUpformData.email\"\n              required>\n            </ion-input>\n          </ion-item>\n          <ion-text class=\"helptext font-small\" color=danger> * {{\"invalid email\"|translate}}</ion-text>\n\n          <ion-item lines=\"none\">\n            <ion-icon name=\"lock-closed-outline\" size=\"small\"></ion-icon>\n            <ion-input class=\"font-large\" placeholder=\"{{'password'| translate }}\" type=\"password\" name=\"password\"\n              [(ngModel)]=\"signUpformData.password\" required></ion-input>\n          </ion-item>\n          <ion-text class=\"helptext font-small\" color=danger> * {{\"required\"|translate}}</ion-text>\n\n          <ion-item lines=\"none\">\n            <ion-icon name=\"lock-closed-outline\" size=\"small\"></ion-icon>\n            <ion-input class=\"font-large\" placeholder=\"{{'confirm password'| translate }}\" type=\"password\"\n              name=\"confirm_password\" [(ngModel)]=\"signUpformData.confirm_password\" required></ion-input>\n          </ion-item>\n          <ion-text class=\"helptext font-small\" color=danger> * {{\"required\"|translate}}</ion-text>\n\n          <!-- <ion-item lines=\"none\">\n            <ion-label class=\"font-large\"></ion-label>\n            <ion-button fill=\"clear\" class=\"ion-no-padding ion-text-capitalize\" size=\"small\">{{'forgot your password'|\n              translate }}?\n            </ion-button>\n          </ion-item> -->\n          <ion-item lines=\"none\" *ngIf=\"errorMessage!=''\">\n            <ion-text color=\"danger\" class=\"font-small\">\n              {{errorMessage| translate}}\n            </ion-text>\n          </ion-item>\n          <ion-button expand=\"block\" class=\"font-bold ion-text-capitalize\" [disabled]=\"!signUpForm.form.valid\"\n            type=\"submit\" color=\"primary\">{{'sign up'|translate}}</ion-button>\n        </form>\n      </div>\n      <!-- bottom section -->\n      <ion-row class=\"padding-top-10 margin-top-60 icons ion-margin-bottom\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          <ion-button fill=\"clear\" class=\"ion-no-padding font-small\" size=\"small\">---- {{'or sign in\n            with'| translate }}\n            ----</ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-margin-top social-login\">\n        <ion-col size=\"12\">\n          <div class=\"center container\">\n            <div class=\"ion-text-center ion-padding-horizontal\" (click)=\"facebookLogin()\"\n              *ngIf=\"config.enableFacebookLoginBool\">\n              <ion-icon size=\"large\" name=\"logo-facebook\"></ion-icon><br>\n              <ion-label class=\"font-small\">facebook</ion-label>\n            </div>\n            <div class=\"ion-text-center ion-padding-horizontal\" (click)=\"googleLogin()\"\n              *ngIf=\"config.enableGoogleLoginBool\">\n              <ion-icon size=\"large\" name=\"logo-google\"></ion-icon><br>\n              <ion-label class=\"font-small\">google</ion-label>\n            </div>\n            <div class=\"ion-text-center ion-padding-horizontal\" (click)=\"openAppleSignIn()\"\n              *ngIf=\"config.currentPlatfromString=='ios'\">\n              <ion-icon size=\"large\" name=\"logo-apple\"></ion-icon><br>\n              <ion-label class=\"font-small\">apple</ion-label>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-text-center ion-justify-content-center margin-top-60 privacy-policy\">\n        <ion-col size=\"9\" class=\"ion-text-center\">\n          <ion-label class=\" font-medium\">\n            {{'we keep your data safe, for furthur assistance please refer to our'| translate\n            }}<ion-text color=\"primary\"> {{'privacy policy'| translate\n              }}</ion-text>.\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ 18984:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/phone-login/phone-login.page.html ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{'Login with'|translate}} {{'Phone Number'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #loginForm=\"ngForm\" class=\"form\" (ngSubmit)=\"login()\">\n    <ion-item>\n      <ion-label position=\"floating\">{{'Phone Number'|translate}}</ion-label>\n      <ion-input inputmode=\"tel\" minlength=9 maxlength=15 pattern=\"^([0-9\\(\\)\\/\\+ \\-]*)$\" name=\"Mobile\"\n        [(ngModel)]=\"formData.customers_telephone\" required placeholder=\"+100000000000\">\n      </ion-input>\n    </ion-item>\n    <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n\n    <ion-button disabled=\"true\" expand=\"full\" color=\"secondary\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">\n      {{'Login'|translate}}\n    </ion-button>\n  </form>\n  \n</ion-content>");

/***/ }),

/***/ 88706:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/privacy-policy/privacy-policy.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    <ion-title mode=\"ios\">{{'privacy policy'|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"center\" *ngIf=\"shared.privacyPolicy==''\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-text class=\"ion-no-padding\" *ngIf=\"shared.privacyPolicy!=''\">\n    <p [innerHTML]=\"shared.privacyPolicy\">\n    </p>\n  </ion-text>\n</ion-content>");

/***/ }),

/***/ 51331:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/product-attributes-modal/product-attributes-modal.page.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-content\">\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-button size=\"small\" fill=clear color=\"medium\" (click)=\"dismiss()\">\n      <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n    </ion-button>\n  </ion-fab>\n  <ion-list class=\"top-list ion-no-padding bg-transparent\">\n    <ion-item lines=none class=\"bg-transparent\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img [appImageValidate]=\"25\" src=\"{{imageUrlString}}\"></ion-img>\n      </ion-thumbnail>\n      <ion-grid class=\"ion-no-padding\">\n        <ion-row class=\"ion-no-margin\">\n          <ion-label class=\"font-large font-bold ion-text-capitalize\" color=\"danger\"> {{calculatePrice()|curency}}\n          </ion-label>\n        </ion-row>\n        <ion-row class=\"ion-no-margin padding-top-5\">\n          <ion-label class=\"font-large font-bold ion-text-capitalize\" color=\"medium\">{{'selected'|translate}}:\n          </ion-label>\n          <ion-label class=\"font-large font-bold ion-text-capitalize\"> <span\n              *ngFor=\"let v of selectedVariationsArray\">{{v.name}},</span></ion-label>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-row class=\"ion-no-margin\">\n      <ion-label class=\"width-full font-large padding-vertical-10 ion-text-capitalize\"\n        [color]=\"(config.darkModeBool)?'light':'primary'\">\n        {{'quantity'|translate}}\n      </ion-label>\n      <ion-chip outline=true [color]=\"(config.darkModeBool)?'light':'primary'\"\n        class=\"quantity-chip variable-background-color\">\n        <ion-icon name=\"remove-circle\" (click)=\"quantityMinus()\" color=\"primary\"></ion-icon>\n        <ion-label class=\"font-bold\">{{quantityNumber}}</ion-label>\n        <ion-icon name=\"add-circle\" (click)=\"quantityPlus()\" color=\"primary\"></ion-icon>\n      </ion-chip>\n    </ion-row>\n    <ion-row class=\"ion-no-margin ion-text-capitalize\" *ngFor=\"let option of data.attribute\">\n\n      <ion-label class=\"width-full font-large padding-vertical-10 ion-text-capitalize\"\n        [color]=\"(config.darkModeBool)?'light':'primary'\">\n        {{option.attributes.detail[0].name}}\n      </ion-label>\n      <ion-row>\n\n        <ion-badge [color]=\"selectedBadge(option.attributes.detail[0].name,value.product_variation.id)\"\n          class=\"font-extra-small ion-margin-end margin-bottom-10 padding-horizontal-10\"\n          *ngFor=\"let value of option.variations\"\n          (click)=\"addVaration(option.attributes.detail[0].name,value.product_variation.id,value.product_variation.detail[0].name)\">\n          {{value.product_variation.detail[0].name}}\n        </ion-badge>\n      </ion-row>\n    </ion-row>\n\n  </ion-list>\n</div>\n\n<ion-footer class=\"ion-no-border bg-transparent\">\n\n  <ion-toolbar class=\"bg-transparent\">\n    <ion-button expand=\"block\" *ngIf=\"!enableOutOFStockButtonBool\"\n      class=\"ion-no-margin ion-margin-horizontal ion-margin-bottom\" color=primary (click)=\"addToCart()\">\n      {{'continue'|translate}}\n    </ion-button>\n    <ion-button expand=\"block\" *ngIf=\"enableOutOFStockButtonBool\"\n      class=\"ion-no-margin ion-margin-horizontal ion-margin-bottom\" color=danger>\n      {{'out of stock'|translate}}\n    </ion-button>\n  </ion-toolbar>\n\n</ion-footer>");

/***/ }),

/***/ 82920:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/refund-policy/refund-policy.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    <ion-title mode=\"ios\">{{'refund policy'|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"center\" *ngIf=\"shared.refundPolicy==''\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-text class=\"ion-no-padding\" *ngIf=\"shared.refundPolicy!=''\">\n    <p [innerHTML]=\"shared.refundPolicy\">\n    </p>\n  </ion-text>\n</ion-content>");

/***/ }),

/***/ 66286:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-country/select-country.page.html ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"close\" (click)=\"dismiss(null)\"></ion-icon>\n    <ion-title mode=\"ios\">{{'Country'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-searchbar (ionInput)=\"getItems($event)\" name=\"search\" #Searchbar placeholder=\"{{'search'|translate}}\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list class=\"margin-top-10\" [class.round-borders]=\"config.roundBordersBool\">\n    <ion-item *ngFor=\"let item of items\" (click)=\"selectCountry(item)\">\n      {{ item.country_name }}\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ 4363:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/select-zones/select-zones.page.html ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"close\" (click)=\"dismiss(null)\"></ion-icon>\n    <ion-title mode=\"ios\">{{'Zone'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-searchbar (ionInput)=\"getItems($event)\" name=\"search\" #Searchbar placeholder=\"{{'search'|translate}}\">\n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"page-select-zones\">\n  <ion-list class=\"margin-top-10\" [class.round-borders]=\"config.roundBordersBool\">\n    <div *ngFor=\"let item of items\">\n      <ion-item (click)=\"selectZone(item)\">\n        {{ item.name }}\n      </ion-item>\n    </div>\n    <ion-item (click)=\"selectZone('other')\">\n      {{'other'|translate}}\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ 18685:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/sign-up/sign-up.page.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-no-padding\">{{'Create an Account'|translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #loginForm=\"ngForm\" class=\"form\" (ngSubmit)=\"registerUser()\">\n\n    <ion-item>\n      <ion-label position=\"floating\">{{'First Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"customers_firstname\" [(ngModel)]=\"formData.customers_firstname\" required>\n      </ion-input>\n    </ion-item>\n    <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Last Name'|translate}}</ion-label>\n      <ion-input type=\"text\" name=\"customers_lastname\" [(ngModel)]=\"formData.customers_lastname\" required>\n      </ion-input>\n    </ion-item>\n    <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Phone Number'|translate}}</ion-label>\n      <ion-input inputmode=\"tel\" minlength=9 maxlength=15 pattern=\"^([0-9\\(\\)\\/\\+ \\-]*)$\" name=\"Mobile\"\n        [(ngModel)]=\"formData.customers_telephone\" required>\n      </ion-input>\n    </ion-item>\n    <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Email'|translate}}</ion-label>\n      <ion-input type=\"email\" email name=\"email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n        [(ngModel)]=\"formData.email\" required>\n      </ion-input>\n    </ion-item>\n    <ion-text class=\"helptext\"> * {{\"invalid email\"|translate}}</ion-text>\n    <ion-item>\n      <ion-label position=\"floating\">{{'Password'|translate}}</ion-label>\n      <ion-input type=\"password\" name=\"c_d\" [(ngModel)]=\"formData.password\" required>\n      </ion-input>\n    </ion-item>\n    <ion-text class=\"helptext\"> * {{\"required\"|translate}}</ion-text>\n\n    <ion-item *ngIf=\"errorMessage!=''\" lines=\"none\">\n      <ion-label color=\"danger\">\n        {{errorMessage| translate}}\n      </ion-label>\n    </ion-item>\n\n    <p>{{\"Creating an account means you’re okay with our\"|translate}}\n      <a (click)=\"openTermServicesPage()\">{{'Term and Services'|translate}}</a>,\n      <a (click)=\"openPrivacyPolicyPage()\">{{'Privacy Policy'|translate}}</a> {{'and'|translate}}\n      <a (click)=\"openRefundPolicyPage()\">{{'Refund Policy'|translate}}</a>\n    </p>\n\n    <ion-button disabled=\"true\" expand=\"full\" color=\"secondary\" type=\"submit\" [disabled]=\"!loginForm.form.valid\">\n      {{'Register'|translate}}\n    </ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ 16241:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modals/term-services/term-services.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" name=\"close-outline\" (click)=\"dismiss()\"></ion-icon>\n    <ion-title mode=\"ios\">{{'terms & services'|translate}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"center\" *ngIf=\"shared.termServices==''\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-text class=\"ion-no-padding\" *ngIf=\"shared.termServices!=''\">\n    <p [innerHTML]=\"shared.termServices\">\n    </p>\n  </ion-text>\n</ion-content>");

/***/ }),

/***/ 96262:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/app-json-tree-view/app-json-tree-view.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"ngx-json-viewer\">\n  <section *ngFor=\"let segment of segments\" [ngClass]=\"['segment', 'segment-type-' + segment.type]\">\n    <section (click)=\"toggle(segment)\" [ngClass]=\"{\n            'segment-main': true,\n            'expandable': isExpandable(segment),\n            'expanded': segment.expanded\n          }\">\n      <div *ngIf=\"isExpandable(segment)\" class=\"toggler\"></div>\n      <span class=\"segment-key\">{{ segment.key }}</span>\n      <span class=\"segment-separator\">: </span>\n      <span *ngIf=\"!segment.expanded || !isExpandable(segment)\" class=\"segment-value\" (click)=\"setInnerHtml(segment.description)\">{{ segment.description\n        }}</span>\n    </section>\n    <section *ngIf=\"segment.expanded && isExpandable(segment)\" class=\"children\">\n      <app-app-json-tree-view [json]=\"segment.value\" [expanded]=\"expanded\"></app-app-json-tree-view>\n    </section>\n  </section>\n</section>");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map