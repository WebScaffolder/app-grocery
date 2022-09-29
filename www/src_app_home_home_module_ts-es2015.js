(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_home_home_module_ts"],{

/***/ 24135:
/*!***********************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/definitions.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 88592:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreen": function() { return /* binding */ SplashScreen; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 24135);

const SplashScreen = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('SplashScreen', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_splash-screen_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 78962)).then(m => new m.SplashScreenWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var src_components_home_page_styles_home_page_style1_home_page_style1_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/home-page-styles/home-page-style1/home-page-style1.module */ 22471);
/* harmony import */ var src_components_home_page_styles_home_page_style10_home_page_style10_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/home-page-styles/home-page-style10/home-page-style10.module */ 56065);
/* harmony import */ var src_components_home_page_styles_home_page_style2_home_page_style2_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/home-page-styles/home-page-style2/home-page-style2.module */ 91922);
/* harmony import */ var src_components_home_page_styles_home_page_style3_home_page_style3_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/home-page-styles/home-page-style3/home-page-style3.module */ 28760);
/* harmony import */ var src_components_home_page_styles_home_page_style4_home_page_style4_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/home-page-styles/home-page-style4/home-page-style4.module */ 30390);
/* harmony import */ var src_components_home_page_styles_home_page_style6_home_page_style6_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/home-page-styles/home-page-style6/home-page-style6.module */ 21632);
/* harmony import */ var src_components_home_page_styles_home_page_style7_home_page_style7_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/home-page-styles/home-page-style7/home-page-style7.module */ 26755);
/* harmony import */ var src_components_home_page_styles_home_page_style9_home_page_style9_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/home-page-styles/home-page-style9/home-page-style9.module */ 57952);
/* harmony import */ var src_components_home_page_styles_home_page_style5_home_page_style5_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/home-page-styles/home-page-style5/home-page-style5.module */ 38510);
/* harmony import */ var src_components_home_page_styles_home_page_style8_home_page_style8_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/home-page-styles/home-page-style8/home-page-style8.module */ 14835);


















const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(routes),
            src_components_home_page_styles_home_page_style1_home_page_style1_module__WEBPACK_IMPORTED_MODULE_2__.HomePageStyle1Module,
            src_components_home_page_styles_home_page_style2_home_page_style2_module__WEBPACK_IMPORTED_MODULE_4__.HomePageStyle2Module,
            src_components_home_page_styles_home_page_style3_home_page_style3_module__WEBPACK_IMPORTED_MODULE_5__.HomePageStyle3Module,
            src_components_home_page_styles_home_page_style4_home_page_style4_module__WEBPACK_IMPORTED_MODULE_6__.HomePageStyle4Module,
            src_components_home_page_styles_home_page_style5_home_page_style5_module__WEBPACK_IMPORTED_MODULE_10__.HomePageStyle5Module,
            src_components_home_page_styles_home_page_style6_home_page_style6_module__WEBPACK_IMPORTED_MODULE_7__.HomePageStyle6Module,
            src_components_home_page_styles_home_page_style7_home_page_style7_module__WEBPACK_IMPORTED_MODULE_8__.HomePageStyle7Module,
            src_components_home_page_styles_home_page_style8_home_page_style8_module__WEBPACK_IMPORTED_MODULE_11__.HomePageStyle8Module,
            src_components_home_page_styles_home_page_style9_home_page_style9_module__WEBPACK_IMPORTED_MODULE_9__.HomePageStyle9Module,
            src_components_home_page_styles_home_page_style10_home_page_style10_module__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle10Module,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule
        ],
        declarations: [
            _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
        ]
    })
], HomePageModule);



/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);
/* harmony import */ var src_services_app_recentproducts_app_recent_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-recentproducts/app-recent-products.service */ 84113);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _modals_app_log_page_app_log_page_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/app-log-page/app-log-page.page */ 98208);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @capacitor/splash-screen */ 88592);















let HomePage = class HomePage {
    //for product slider after banner
    constructor(nav, config, modalCtrl, appEventsService, router, shared, appCartService, appRecentProductsService) {
        this.nav = nav;
        this.config = config;
        this.modalCtrl = modalCtrl;
        this.appEventsService = appEventsService;
        this.router = router;
        this.shared = shared;
        this.appCartService = appCartService;
        this.appRecentProductsService = appRecentProductsService;
        this.segments = "topSeller"; //first segment by default 
        this.scrollTopButton = false; //for scroll down fab 
    }
    toggleMenu() {
        this.shared.toggleMenu();
    }
    openSearchPage() {
        this.nav.navigateForward("search");
    }
    setMethod(d) {
        console.log(d);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Capacitor.isNativePlatform()) {
            _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_9__.SplashScreen.hide();
        }
    }
    // For FAB Scroll
    onScroll(e) {
        if (e.detail.scrollTop >= 500) {
            this.scrollTopButton = true;
        }
        if (e.detail.scrollTop < 500) {
            this.scrollTopButton = false;
        }
    }
    openAppLog() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_app_log_page_app_log_page_page__WEBPACK_IMPORTED_MODULE_8__.AppLogPagePage
            });
            return yield modal.present();
        });
    }
    // For Scroll To Top Content
    scrollToTop() {
        this.content.scrollToTop(700);
        this.scrollTopButton = false;
    }
    openProducts(value) {
        this.nav.navigateForward("/products/0/" + value);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_4__.AppEventsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_6__.AppCartService },
    { type: src_services_app_recentproducts_app_recent_products_service__WEBPACK_IMPORTED_MODULE_5__.AppRecentProductsService }
];
HomePage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, { static: false },] }],
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['recentSlider', { static: false },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 83277:
/*!*************************************************************!*\
  !*** ./src/components/app-heading/app-heading.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeadingComponent": function() { return /* binding */ AppHeadingComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_heading_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app-heading.component.html */ 14519);
/* harmony import */ var _app_heading_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-heading.component.scss */ 54638);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let AppHeadingComponent = class AppHeadingComponent {
    constructor() { }
    ngOnInit() { }
};
AppHeadingComponent.ctorParameters = () => [];
AppHeadingComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input, args: ['data',] }]
};
AppHeadingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-heading',
        template: _raw_loader_app_heading_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_heading_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppHeadingComponent);



/***/ }),

/***/ 15673:
/*!**********************************************************!*\
  !*** ./src/components/app-heading/app-heading.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeadingModule": function() { return /* binding */ AppHeadingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _app_heading_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-heading.component */ 83277);






let AppHeadingModule = class AppHeadingModule {
};
AppHeadingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _app_heading_component__WEBPACK_IMPORTED_MODULE_1__.AppHeadingComponent,
        ],
        exports: [
            _app_heading_component__WEBPACK_IMPORTED_MODULE_1__.AppHeadingComponent
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule
        ],
    })
], AppHeadingModule);



/***/ }),

/***/ 64686:
/*!***************************************************!*\
  !*** ./src/components/banner/banner.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": function() { return /* binding */ BannerComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_banner_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./banner.component.html */ 91680);
/* harmony import */ var _banner_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.component.scss */ 52687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);











let BannerComponent = class BannerComponent {
    constructor(shared, navCtrl, config, loading, appHttpService, appUserService, appLogService) {
        this.shared = shared;
        this.navCtrl = navCtrl;
        this.config = config;
        this.loading = loading;
        this.appHttpService = appHttpService;
        this.appUserService = appUserService;
        this.appLogService = appLogService;
        this.slideOpts = {
            autoplay: {
                delay: 2500,
                //disableOnInteraction: false,
            }
        };
    }
    failedImageLoad($event) {
        console.log($event);
    }
    //===============================================================================================
    //on click image banners
    bannerClick(image) {
        // if (image.banner_navigation.name == 'Category') {
        //   this.navCtrl.navigateForward("/products/" + image.banner_ref_id);
        // }
        // else if (image.banner_navigation.name == 'Product') {
        //   this.navCtrl.navigateForward("/product-detail/" + image.banner_ref_id)
        // }
        // else {
        this.navCtrl.navigateForward("/products");
        // }
    }
    ngOnInit() {
    }
};
BannerComponent.ctorParameters = () => [
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_6__.AppUserService },
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_7__.AppLogService }
];
BannerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-banner',
        template: _raw_loader_banner_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_banner_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BannerComponent);



/***/ }),

/***/ 31547:
/*!************************************************!*\
  !*** ./src/components/banner/banner.module.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bannerModule": function() { return /* binding */ bannerModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../banner/banner.component */ 64686);






//for home banner

let bannerModule = class bannerModule {
};
bannerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent,
        ],
        exports: [
            _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__.BannerComponent,
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_0__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_1__.ImageValidateDirectiveModule
        ],
    })
], bannerModule);



/***/ }),

/***/ 26455:
/*!******************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style10/home-page-style10.component.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle10Component": function() { return /* binding */ HomePageStyle10Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_style10_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page-style10.component.html */ 94880);
/* harmony import */ var _home_page_style10_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-style10.component.scss */ 27068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let HomePageStyle10Component = class HomePageStyle10Component {
    constructor() { }
    ngOnInit() { }
};
HomePageStyle10Component.ctorParameters = () => [];
HomePageStyle10Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-page-style10',
        template: _raw_loader_home_page_style10_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_style10_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageStyle10Component);



/***/ }),

/***/ 56065:
/*!***************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style10/home-page-style10.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle10Module": function() { return /* binding */ HomePageStyle10Module; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _home_page_style10_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-style10.component */ 26455);









let HomePageStyle10Module = class HomePageStyle10Module {
};
HomePageStyle10Module = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _home_page_style10_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle10Component
        ],
        exports: [
            _home_page_style10_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle10Component
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule
        ],
    })
], HomePageStyle10Module);



/***/ }),

/***/ 78524:
/*!****************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style1/home-page-style1.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle1Component": function() { return /* binding */ HomePageStyle1Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_style1_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page-style1.component.html */ 32345);
/* harmony import */ var _home_page_style1_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-style1.component.scss */ 44880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let HomePageStyle1Component = class HomePageStyle1Component {
    constructor(config, nav, shared, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.shared = shared;
        this.appCategoriesService = appCategoriesService;
    }
    onClickCategory(c) {
        this.nav.navigateForward("/products/" + c.id + "/newest");
    }
    ngOnInit() {
    }
};
HomePageStyle1Component.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
HomePageStyle1Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home-page-style1',
        template: _raw_loader_home_page_style1_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_style1_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageStyle1Component);



/***/ }),

/***/ 22471:
/*!*************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style1/home-page-style1.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle1Module": function() { return /* binding */ HomePageStyle1Module; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _home_page_style1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-style1.component */ 78524);
/* harmony import */ var src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/banner/banner.module */ 31547);
/* harmony import */ var src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/home-products-list/home-products-list.module */ 7131);
/* harmony import */ var src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/products-slider/product-slider.module */ 99423);
/* harmony import */ var src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/app-heading/app-heading.module */ 15673);
/* harmony import */ var src_components_info_bar_info_bar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/info-bar/info-bar.module */ 51030);














let HomePageStyle1Module = class HomePageStyle1Module {
};
HomePageStyle1Module = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _home_page_style1_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle1Component
        ],
        exports: [
            _home_page_style1_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle1Component
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule,
            src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_6__.productSliderModule,
            src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_5__.homeProductsListModule,
            src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__.bannerModule,
            src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_7__.AppHeadingModule,
            src_components_info_bar_info_bar_module__WEBPACK_IMPORTED_MODULE_8__.AppInfoBarModule
        ],
    })
], HomePageStyle1Module);



/***/ }),

/***/ 32171:
/*!****************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style2/home-page-style2.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle2Component": function() { return /* binding */ HomePageStyle2Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_style2_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page-style2.component.html */ 66321);
/* harmony import */ var _home_page_style2_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-style2.component.scss */ 47777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let HomePageStyle2Component = class HomePageStyle2Component {
    constructor(config, nav, shared, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.shared = shared;
        this.appCategoriesService = appCategoriesService;
    }
    onClickCategory(c) {
        this.nav.navigateForward("/products/" + c.id + "/newest");
    }
    ngOnInit() { }
};
HomePageStyle2Component.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
HomePageStyle2Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home-page-style2',
        template: _raw_loader_home_page_style2_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_style2_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageStyle2Component);



/***/ }),

/***/ 91922:
/*!*************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style2/home-page-style2.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle2Module": function() { return /* binding */ HomePageStyle2Module; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _home_page_style2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-style2.component */ 32171);
/* harmony import */ var src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/products-slider/product-slider.module */ 99423);
/* harmony import */ var src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/banner/banner.module */ 31547);
/* harmony import */ var src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/home-products-list/home-products-list.module */ 7131);
/* harmony import */ var src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/app-heading/app-heading.module */ 15673);
/* harmony import */ var src_components_info_bar_info_bar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/info-bar/info-bar.module */ 51030);














let HomePageStyle2Module = class HomePageStyle2Module {
};
HomePageStyle2Module = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _home_page_style2_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle2Component
        ],
        exports: [
            _home_page_style2_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle2Component
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule,
            src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_4__.productSliderModule,
            src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__.bannerModule,
            src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_6__.homeProductsListModule,
            src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_7__.AppHeadingModule,
            src_components_info_bar_info_bar_module__WEBPACK_IMPORTED_MODULE_8__.AppInfoBarModule
        ],
    })
], HomePageStyle2Module);



/***/ }),

/***/ 59158:
/*!****************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style3/home-page-style3.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle3Component": function() { return /* binding */ HomePageStyle3Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_style3_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page-style3.component.html */ 18452);
/* harmony import */ var _home_page_style3_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-style3.component.scss */ 68099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let HomePageStyle3Component = class HomePageStyle3Component {
    constructor(config, nav, shared, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.shared = shared;
        this.appCategoriesService = appCategoriesService;
    }
    onClickCategory(c) {
        this.nav.navigateForward("/products/" + c.id + "/newest");
    }
    ngOnInit() { }
};
HomePageStyle3Component.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
HomePageStyle3Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home-page-style3',
        template: _raw_loader_home_page_style3_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_style3_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageStyle3Component);



/***/ }),

/***/ 28760:
/*!*************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style3/home-page-style3.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle3Module": function() { return /* binding */ HomePageStyle3Module; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _home_page_style3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-style3.component */ 59158);
/* harmony import */ var src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/banner/banner.module */ 31547);
/* harmony import */ var src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/products-slider/product-slider.module */ 99423);
/* harmony import */ var src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/home-products-list/home-products-list.module */ 7131);
/* harmony import */ var src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/app-heading/app-heading.module */ 15673);













let HomePageStyle3Module = class HomePageStyle3Module {
};
HomePageStyle3Module = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _home_page_style3_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle3Component
        ],
        exports: [
            _home_page_style3_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle3Component
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule,
            src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_5__.productSliderModule,
            src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_6__.homeProductsListModule,
            src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__.bannerModule,
            src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_7__.AppHeadingModule
        ],
    })
], HomePageStyle3Module);



/***/ }),

/***/ 66162:
/*!****************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style4/home-page-style4.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle4Component": function() { return /* binding */ HomePageStyle4Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_style4_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page-style4.component.html */ 98435);
/* harmony import */ var _home_page_style4_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-style4.component.scss */ 15418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let HomePageStyle4Component = class HomePageStyle4Component {
    constructor(config, nav, shared, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.shared = shared;
        this.appCategoriesService = appCategoriesService;
    }
    onClickCategory(c) {
        this.nav.navigateForward("/products/" + c.id + "/newest");
    }
    ngOnInit() { }
};
HomePageStyle4Component.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
HomePageStyle4Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home-page-style4',
        template: _raw_loader_home_page_style4_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_style4_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageStyle4Component);



/***/ }),

/***/ 30390:
/*!*************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style4/home-page-style4.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle4Module": function() { return /* binding */ HomePageStyle4Module; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _home_page_style4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-style4.component */ 66162);
/* harmony import */ var src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/banner/banner.module */ 31547);
/* harmony import */ var src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/products-slider/product-slider.module */ 99423);
/* harmony import */ var src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/home-products-list/home-products-list.module */ 7131);
/* harmony import */ var src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/app-heading/app-heading.module */ 15673);













let HomePageStyle4Module = class HomePageStyle4Module {
};
HomePageStyle4Module = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _home_page_style4_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle4Component
        ],
        exports: [
            _home_page_style4_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle4Component
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule,
            src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_5__.productSliderModule,
            src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_6__.homeProductsListModule,
            src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__.bannerModule,
            src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_7__.AppHeadingModule
        ],
    })
], HomePageStyle4Module);



/***/ }),

/***/ 44063:
/*!****************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style5/home-page-style5.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle5Component": function() { return /* binding */ HomePageStyle5Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_style5_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page-style5.component.html */ 63038);
/* harmony import */ var _home_page_style5_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-style5.component.scss */ 2801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let HomePageStyle5Component = class HomePageStyle5Component {
    constructor(config, nav, shared, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.shared = shared;
        this.appCategoriesService = appCategoriesService;
    }
    onClickCategory(c) {
        this.nav.navigateForward("/products/" + c.id + "/newest");
    }
    ngOnInit() { }
};
HomePageStyle5Component.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
HomePageStyle5Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home-page-style5',
        template: _raw_loader_home_page_style5_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_style5_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageStyle5Component);



/***/ }),

/***/ 38510:
/*!*************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style5/home-page-style5.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle5Module": function() { return /* binding */ HomePageStyle5Module; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _home_page_style5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-style5.component */ 44063);
/* harmony import */ var src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/banner/banner.module */ 31547);
/* harmony import */ var src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/home-products-list/home-products-list.module */ 7131);
/* harmony import */ var src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/products-slider/product-slider.module */ 99423);
/* harmony import */ var src_components_home_segments_home_segments_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/home-segments/home-segments.module */ 33741);
/* harmony import */ var src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/app-heading/app-heading.module */ 15673);














let HomePageStyle5Module = class HomePageStyle5Module {
};
HomePageStyle5Module = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _home_page_style5_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle5Component
        ],
        exports: [
            _home_page_style5_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle5Component
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule,
            src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_6__.productSliderModule,
            src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_5__.homeProductsListModule,
            src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__.bannerModule,
            src_components_home_segments_home_segments_module__WEBPACK_IMPORTED_MODULE_7__.homeSegmentsModule,
            src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_8__.AppHeadingModule
        ],
    })
], HomePageStyle5Module);



/***/ }),

/***/ 98835:
/*!****************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style6/home-page-style6.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle6Component": function() { return /* binding */ HomePageStyle6Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_style6_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page-style6.component.html */ 92133);
/* harmony import */ var _home_page_style6_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-style6.component.scss */ 4702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let HomePageStyle6Component = class HomePageStyle6Component {
    constructor(config, nav, shared, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.shared = shared;
        this.appCategoriesService = appCategoriesService;
    }
    onClickCategory(c) {
        this.nav.navigateForward("/products/" + c.id + "/newest");
    }
    openProductPage(value) {
        if (this.appCategoriesService.checkCategoriesHasChild(value.id)) {
            this.nav.navigateForward("categories/" + value.id);
        }
        else {
            this.nav.navigateForward("products/" + value.id);
        }
    }
    ngOnInit() { }
};
HomePageStyle6Component.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
HomePageStyle6Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home-page-style6',
        template: _raw_loader_home_page_style6_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_style6_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageStyle6Component);



/***/ }),

/***/ 21632:
/*!*************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style6/home-page-style6.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle6Module": function() { return /* binding */ HomePageStyle6Module; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _home_page_style6_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-style6.component */ 98835);
/* harmony import */ var src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/banner/banner.module */ 31547);
/* harmony import */ var src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/home-products-list/home-products-list.module */ 7131);
/* harmony import */ var src_components_home_segments_home_segments_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/home-segments/home-segments.module */ 33741);
/* harmony import */ var src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/products-slider/product-slider.module */ 99423);
/* harmony import */ var src_components_categories_page_styles_categories_page_style1_categories_page_style1_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/categories-page-styles/categories-page-style1/categories-page-style1.module */ 4025);
/* harmony import */ var src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/app-heading/app-heading.module */ 15673);















let HomePageStyle6Module = class HomePageStyle6Module {
};
HomePageStyle6Module = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [
            _home_page_style6_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle6Component
        ],
        exports: [
            _home_page_style6_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle6Component
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule,
            src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_7__.productSliderModule,
            src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_5__.homeProductsListModule,
            src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__.bannerModule,
            src_components_home_segments_home_segments_module__WEBPACK_IMPORTED_MODULE_6__.homeSegmentsModule,
            src_components_categories_page_styles_categories_page_style1_categories_page_style1_module__WEBPACK_IMPORTED_MODULE_8__.categoryPageStyle1Module,
            src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_9__.AppHeadingModule
        ],
    })
], HomePageStyle6Module);



/***/ }),

/***/ 24404:
/*!****************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style7/home-page-style7.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle7Component": function() { return /* binding */ HomePageStyle7Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_style7_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page-style7.component.html */ 20755);
/* harmony import */ var _home_page_style7_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-style7.component.scss */ 41443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let HomePageStyle7Component = class HomePageStyle7Component {
    constructor(config, nav, shared, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.shared = shared;
        this.appCategoriesService = appCategoriesService;
    }
    onClickCategory(c) {
        this.nav.navigateForward("/products/" + c.id + "/newest");
    }
    openProductPage(value) {
        if (this.appCategoriesService.checkCategoriesHasChild(value.id)) {
            this.nav.navigateForward("categories/" + value.id);
        }
        else {
            this.nav.navigateForward("products/" + value.id);
        }
    }
    ngOnInit() { }
};
HomePageStyle7Component.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
HomePageStyle7Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home-page-style7',
        template: _raw_loader_home_page_style7_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_style7_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageStyle7Component);



/***/ }),

/***/ 26755:
/*!*************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style7/home-page-style7.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle7Module": function() { return /* binding */ HomePageStyle7Module; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _home_page_style7_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-style7.component */ 24404);
/* harmony import */ var src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/banner/banner.module */ 31547);
/* harmony import */ var src_components_categories_page_styles_categories_page_style5_categories_page_style5_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/categories-page-styles/categories-page-style5/categories-page-style5.module */ 80930);
/* harmony import */ var src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/home-products-list/home-products-list.module */ 7131);
/* harmony import */ var src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/products-slider/product-slider.module */ 99423);
/* harmony import */ var src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/app-heading/app-heading.module */ 15673);














let HomePageStyle7Module = class HomePageStyle7Module {
};
HomePageStyle7Module = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _home_page_style7_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle7Component
        ],
        exports: [
            _home_page_style7_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle7Component
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule,
            src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_7__.productSliderModule,
            src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_6__.homeProductsListModule,
            src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__.bannerModule,
            src_components_categories_page_styles_categories_page_style5_categories_page_style5_module__WEBPACK_IMPORTED_MODULE_5__.categoryPageStyle5Module,
            src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_8__.AppHeadingModule
        ],
    })
], HomePageStyle7Module);



/***/ }),

/***/ 72684:
/*!****************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style8/home-page-style8.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle8Component": function() { return /* binding */ HomePageStyle8Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_style8_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page-style8.component.html */ 86009);
/* harmony import */ var _home_page_style8_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-style8.component.scss */ 23204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let HomePageStyle8Component = class HomePageStyle8Component {
    constructor(config, nav, shared, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.shared = shared;
        this.appCategoriesService = appCategoriesService;
    }
    onClickCategory(c) {
        this.nav.navigateForward("/products/" + c.id + "/newest");
    }
    openProductPage(value) {
        if (this.appCategoriesService.checkCategoriesHasChild(value.id)) {
            this.nav.navigateForward("categories/" + value.id);
        }
        else {
            this.nav.navigateForward("products/" + value.id);
        }
    }
    ngOnInit() { }
};
HomePageStyle8Component.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
HomePageStyle8Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home-page-style8',
        template: _raw_loader_home_page_style8_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_style8_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageStyle8Component);



/***/ }),

/***/ 14835:
/*!*************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style8/home-page-style8.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle8Module": function() { return /* binding */ HomePageStyle8Module; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _home_page_style8_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-style8.component */ 72684);
/* harmony import */ var src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/banner/banner.module */ 31547);
/* harmony import */ var src_components_categories_page_styles_categories_page_style3_categories_page_style3_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/categories-page-styles/categories-page-style3/categories-page-style3.module */ 20796);
/* harmony import */ var src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/home-products-list/home-products-list.module */ 7131);
/* harmony import */ var src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/products-slider/product-slider.module */ 99423);
/* harmony import */ var src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/app-heading/app-heading.module */ 15673);














let HomePageStyle8Module = class HomePageStyle8Module {
};
HomePageStyle8Module = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _home_page_style8_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle8Component
        ],
        exports: [
            _home_page_style8_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle8Component
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule,
            src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_7__.productSliderModule,
            src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_6__.homeProductsListModule,
            src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_4__.bannerModule,
            src_components_categories_page_styles_categories_page_style3_categories_page_style3_module__WEBPACK_IMPORTED_MODULE_5__.categoryPageStyle3Module,
            src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_8__.AppHeadingModule
        ],
    })
], HomePageStyle8Module);



/***/ }),

/***/ 82713:
/*!****************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style9/home-page-style9.component.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle9Component": function() { return /* binding */ HomePageStyle9Component; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_style9_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-page-style9.component.html */ 29819);
/* harmony import */ var _home_page_style9_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page-style9.component.scss */ 33540);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);








let HomePageStyle9Component = class HomePageStyle9Component {
    constructor(config, nav, shared, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.shared = shared;
        this.appCategoriesService = appCategoriesService;
        this.sliderConfig = {
            slidesPerView: "auto",
            spaceBetween: 10,
        };
    }
    onClickCategory(c) {
        this.nav.navigateForward("/products/" + c.id + "/newest");
    }
    ngOnInit() { }
};
HomePageStyle9Component.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
HomePageStyle9Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-home-page-style9',
        template: _raw_loader_home_page_style9_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_style9_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePageStyle9Component);



/***/ }),

/***/ 57952:
/*!*************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style9/home-page-style9.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageStyle9Module": function() { return /* binding */ HomePageStyle9Module; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/directives/appAnimation/animationDirective.module */ 73448);
/* harmony import */ var src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/directives/imageValidate/imageValidate.module */ 31268);
/* harmony import */ var _home_page_style9_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page-style9.component */ 82713);
/* harmony import */ var src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/home-products-list/home-products-list.module */ 7131);
/* harmony import */ var src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/banner/banner.module */ 31547);
/* harmony import */ var src_components_home_segments_home_segments_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/home-segments/home-segments.module */ 33741);
/* harmony import */ var src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/products-slider/product-slider.module */ 99423);
/* harmony import */ var src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/app-heading/app-heading.module */ 15673);














let HomePageStyle9Module = class HomePageStyle9Module {
};
HomePageStyle9Module = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [
            _home_page_style9_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle9Component
        ],
        exports: [
            _home_page_style9_component__WEBPACK_IMPORTED_MODULE_3__.HomePageStyle9Component
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            src_directives_appAnimation_animationDirective_module__WEBPACK_IMPORTED_MODULE_1__.AnimationDirectiveModule,
            src_directives_imageValidate_imageValidate_module__WEBPACK_IMPORTED_MODULE_2__.ImageValidateDirectiveModule,
            src_components_home_products_list_home_products_list_module__WEBPACK_IMPORTED_MODULE_4__.homeProductsListModule,
            src_components_products_slider_product_slider_module__WEBPACK_IMPORTED_MODULE_7__.productSliderModule,
            src_components_banner_banner_module__WEBPACK_IMPORTED_MODULE_5__.bannerModule,
            src_components_home_segments_home_segments_module__WEBPACK_IMPORTED_MODULE_6__.homeSegmentsModule,
            src_components_app_heading_app_heading_module__WEBPACK_IMPORTED_MODULE_8__.AppHeadingModule
        ],
    })
], HomePageStyle9Module);



/***/ }),

/***/ 52080:
/*!***************************************************************************!*\
  !*** ./src/components/home-products-list/home-products-list.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeProductsListComponent": function() { return /* binding */ HomeProductsListComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_products_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-products-list.component.html */ 24187);
/* harmony import */ var _home_products_list_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-products-list.component.scss */ 22862);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/config/config.service */ 83681);








let HomeProductsListComponent = class HomeProductsListComponent {
    constructor(config, nav, appHttpService, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.appHttpService = appHttpService;
        this.appCategoriesService = appCategoriesService;
        this.productsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.pageNumber = 1;
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        let url = "products";
        url += "?limit=" + this.config.perPageNumber;
        url += "&getCategory=1";
        url += "&getDetail=1";
        url += "&language_id=" + this.config.languageIdNumber;
        //url += "&productType=simple"
        url += "&currency=" + this.config.currencyIdNumber;
        url += "&stock=1";
        url += "&page=" + this.pageNumber;
        this.appHttpService.getHttp(url).then((data) => {
            let dat = data;
            this.infinite.complete();
            if (this.pageNumber == 1)
                this.productsArray = [];
            if (dat.length != 0)
                for (let value of dat)
                    this.productsArray.push(value);
            if (dat.length < this.config.perPageNumber)
                this.infinite.disabled = true;
            this.pageNumber++;
        });
    }
};
HomeProductsListComponent.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_3__.AppHttpService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
HomeProductsListComponent.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonInfiniteScroll, { static: false },] }]
};
HomeProductsListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home-products-list',
        template: _raw_loader_home_products_list_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_products_list_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeProductsListComponent);



/***/ }),

/***/ 7131:
/*!************************************************************************!*\
  !*** ./src/components/home-products-list/home-products-list.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeProductsListModule": function() { return /* binding */ homeProductsListModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _home_products_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-products-list.component */ 52080);
/* harmony import */ var _product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-card/product-card.module */ 12682);







let homeProductsListModule = class homeProductsListModule {
};
homeProductsListModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _home_products_list_component__WEBPACK_IMPORTED_MODULE_1__.HomeProductsListComponent,
        ],
        exports: [
            _home_products_list_component__WEBPACK_IMPORTED_MODULE_1__.HomeProductsListComponent,
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__.productCardModule
        ],
    })
], homeProductsListModule);



/***/ }),

/***/ 90417:
/*!*****************************************************************!*\
  !*** ./src/components/home-segments/home-segments.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSegmentsComponent": function() { return /* binding */ HomeSegmentsComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_segments_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-segments.component.html */ 91710);
/* harmony import */ var _home_segments_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-segments.component.scss */ 54791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);







let HomeSegmentsComponent = class HomeSegmentsComponent {
    constructor(config, nav, appHttpService) {
        this.config = config;
        this.nav = nav;
        this.appHttpService = appHttpService;
        this.topSegmentsString = "1";
        this.oneProductsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.twoProductsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.threeProductsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    }
    ngOnInit() {
        this.getProducts("topseller", 1);
        this.getProducts("featured", 2);
        this.getProducts("onsale", 3);
    }
    getProducts(sort, array) {
        let url = "products";
        url += "?limit=" + 10;
        url += "&getCategory=1";
        url += "&getDetail=1";
        url += "&language_id=" + this.config.languageIdNumber;
        //url += "&productType=simple"
        url += "&currency=" + this.config.currencyIdNumber;
        url += "&stock=1";
        url += "&sortType=ASC";
        if (sort == "topseller") {
            url += "&topSelling=1";
        }
        if (sort == "onsale") {
            url += "&sortBy=discount_price";
        }
        if (sort == "featured") {
            url += "&isFeatured=1";
        }
        this.appHttpService.getHttp(url).then((data) => {
            let dat = data;
            if (array == 1)
                this.oneProductsArray = dat;
            if (array == 2)
                this.twoProductsArray = dat;
            if (array == 3)
                this.threeProductsArray = dat;
        });
    }
};
HomeSegmentsComponent.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_2__.AppHttpService }
];
HomeSegmentsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home-segments',
        template: _raw_loader_home_segments_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_segments_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeSegmentsComponent);



/***/ }),

/***/ 33741:
/*!**************************************************************!*\
  !*** ./src/components/home-segments/home-segments.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeSegmentsModule": function() { return /* binding */ homeSegmentsModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _product_card_product_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-card/product-card.module */ 12682);
/* harmony import */ var _home_segments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-segments.component */ 90417);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);








let homeSegmentsModule = class homeSegmentsModule {
};
homeSegmentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _home_segments_component__WEBPACK_IMPORTED_MODULE_2__.HomeSegmentsComponent
        ],
        exports: [
            _home_segments_component__WEBPACK_IMPORTED_MODULE_2__.HomeSegmentsComponent
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _product_card_product_card_module__WEBPACK_IMPORTED_MODULE_1__.productCardModule
        ],
    })
], homeSegmentsModule);



/***/ }),

/***/ 15015:
/*!*******************************************************!*\
  !*** ./src/components/info-bar/info-bar.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoBarComponent": function() { return /* binding */ InfoBarComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_info_bar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./info-bar.component.html */ 73871);
/* harmony import */ var _info_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-bar.component.scss */ 32474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let InfoBarComponent = class InfoBarComponent {
    constructor() { }
    ngOnInit() { }
};
InfoBarComponent.ctorParameters = () => [];
InfoBarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-info-bar',
        template: _raw_loader_info_bar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_info_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InfoBarComponent);



/***/ }),

/***/ 51030:
/*!****************************************************!*\
  !*** ./src/components/info-bar/info-bar.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInfoBarModule": function() { return /* binding */ AppInfoBarModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _info_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info-bar.component */ 15015);






let AppInfoBarModule = class AppInfoBarModule {
};
AppInfoBarModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _info_bar_component__WEBPACK_IMPORTED_MODULE_1__.InfoBarComponent,
        ],
        exports: [
            _info_bar_component__WEBPACK_IMPORTED_MODULE_1__.InfoBarComponent
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule
        ],
    })
], AppInfoBarModule);



/***/ }),

/***/ 99423:
/*!*****************************************************************!*\
  !*** ./src/components/products-slider/product-slider.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productSliderModule": function() { return /* binding */ productSliderModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var _products_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-slider.component */ 32879);
/* harmony import */ var _product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-card/product-card.module */ 12682);







let productSliderModule = class productSliderModule {
};
productSliderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _products_slider_component__WEBPACK_IMPORTED_MODULE_1__.ProductsSliderComponent
        ],
        exports: [
            _products_slider_component__WEBPACK_IMPORTED_MODULE_1__.ProductsSliderComponent
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_0__.PipesModule,
            _product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__.productCardModule
        ],
    })
], productSliderModule);



/***/ }),

/***/ 32879:
/*!*********************************************************************!*\
  !*** ./src/components/products-slider/products-slider.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsSliderComponent": function() { return /* binding */ ProductsSliderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_products_slider_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./products-slider.component.html */ 76317);
/* harmony import */ var _products_slider_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-slider.component.scss */ 868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/app-categories/app-categories.service */ 10677);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/config/config.service */ 83681);








let ProductsSliderComponent = class ProductsSliderComponent {
    constructor(config, nav, appHttpService, appCategoriesService) {
        this.config = config;
        this.nav = nav;
        this.appHttpService = appHttpService;
        this.appCategoriesService = appCategoriesService;
        this.sliderConfig = {
            slidesPerView: this.config.productSlidesPerPageNumber,
            spaceBetween: 10
        };
        this.productsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.pageNumber = 1;
    }
    ngOnInit() {
        console.log(this.filter);
        this.getProducts();
    }
    getProducts() {
        //let sortBy = ""
        //sortBy = this.filter
        let url = "products";
        url += "?limit=10";
        url += "&getCategory=1";
        url += "&getDetail=1";
        url += "&language_id=" + this.config.languageIdNumber;
        url += "&currency=" + this.config.currencyIdNumber;
        url += "&stock=1";
        url += "&page=" + this.pageNumber;
        if (this.filter == "topseller") {
            url += "&sortType=ASC";
            url += "&topSelling=1";
        }
        if (this.filter == "newest") {
            url += "&sortType=ASC";
        }
        if (this.filter == "featured") {
            url += "&sortType=ASC";
            url += "&isFeatured=1";
        }
        this.appHttpService.getHttp(url).then((data) => {
            let dat = data;
            if (this.pageNumber == 1)
                this.productsArray = [];
            if (dat.length != 0)
                for (let value of dat)
                    this.productsArray.push(value);
            this.pageNumber++;
        });
    }
    openProducts() {
        this.nav.navigateForward("/products/0");
    }
};
ProductsSliderComponent.ctorParameters = () => [
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_3__.AppHttpService },
    { type: src_services_app_categories_app_categories_service__WEBPACK_IMPORTED_MODULE_2__.AppCategoriesService }
];
ProductsSliderComponent.propDecorators = {
    filter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input, args: ['filter',] }]
};
ProductsSliderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-products-slider',
        template: _raw_loader_products_slider_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_products_slider_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductsSliderComponent);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".searchbar {\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQTBDO0VBQzFDLDJDQUEyQztBQUMvQyIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hiYXIge1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xufVxuIl19 */");

/***/ }),

/***/ 54638:
/*!***************************************************************!*\
  !*** ./src/components/app-heading/app-heading.component.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1oZWFkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksdURBQXVEO0VBQ3ZELHdEQUF3RDtBQUE1RCIsImZpbGUiOiJhcHAtaGVhZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbnAge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG59XG4iXX0= */");

/***/ }),

/***/ 52687:
/*!*****************************************************!*\
  !*** ./src/components/banner/banner.component.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n.content ion-slide ion-img {\n  width: 100%;\n}\n\n.content ion-slide ion-img img.no-image {\n  color: red;\n  font-size: 20px;\n  line-height: 200px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJDQUEyQztFQUMzQyw0Q0FBNEM7QUFDOUM7O0FBSEE7RUFNTSxXQUFXO0FBQ2pCOztBQVBBO0VBUVEsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBRzFCIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG5cbiAgaW9uLXNsaWRlIHtcbiAgICBpb24taW1nIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaW1nLm5vLWltYWdlIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 27068:
/*!********************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style10/home-page-style10.component.scss ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXBhZ2Utc3R5bGUxMC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 44880:
/*!******************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style1/home-page-style1.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 0;\n}\n\n.offers-grid ion-col {\n  padding: 0;\n}\n\n.offers-grid ion-col ion-row ion-icon {\n  font-size: 22px;\n}\n\n.offers-grid ion-col ion-row ion-label {\n  margin-top: 5px;\n  width: 100%;\n}\n\n.categories-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\n.categories-grid ion-row {\n  display: flex;\n  justify-content: center;\n}\n\n.categories-grid ion-row ion-col {\n  padding-top: 0;\n  padding-bottom: 20px;\n}\n\n.categories-grid ion-row ion-label {\n  padding-top: 2px;\n  text-align: center;\n}\n\n.hot-items-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\nion-grid {\n  --ion-grid-padding: 0;\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zdHlsZTEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBYTtBQUNqQjs7QUFGQTtFQUdRLGdCQUFnQjtBQUd4Qjs7QUFBQTtFQUVRLFVBQVU7QUFFbEI7O0FBSkE7RUFLZ0IsZUFBZTtBQUcvQjs7QUFSQTtFQVFnQixlQUFlO0VBQ2YsV0FBVztBQUkzQjs7QUFFQTtFQUNJLHVEQUF1RDtFQUN2RCx3REFBd0Q7QUFDNUQ7O0FBSEE7RUFJUSxhQUFhO0VBQ2IsdUJBQXVCO0FBRy9COztBQVJBO0VBT1ksY0FBYztFQUNkLG9CQUFvQjtBQUtoQzs7QUFiQTtFQVdZLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFNOUI7O0FBRkE7RUFDSSx1REFBdUQ7RUFDdkQsd0RBQXdEO0FBSzVEOztBQUhBO0VBQ0kscUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyw0Q0FBNEM7QUFNaEQiLCJmaWxlIjoiaG9tZS1wYWdlLXN0eWxlMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxufVxuLm9mZmVycy1ncmlkIHtcbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXRlZ29yaWVzLWdyaWQge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaG90LWl0ZW1zLWdyaWQge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG59XG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG59XG4iXX0= */");

/***/ }),

/***/ 47777:
/*!******************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style2/home-page-style2.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 0;\n}\n\n.offers-grid ion-col {\n  padding: 0;\n}\n\n.offers-grid ion-col ion-row ion-icon {\n  font-size: 22px;\n}\n\n.offers-grid ion-col ion-row ion-label {\n  margin-top: 5px;\n  width: 100%;\n}\n\n.categories-grid {\n  margin-top: 10px;\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n  background-color: transparent;\n}\n\n.categories-grid ion-col ion-card {\n  margin-bottom: 2px;\n  border: none;\n  box-shadow: none;\n  background-color: transparent;\n}\n\n.categories-grid ion-col ion-card ion-row {\n  --ion-grid-column-padding: 0;\n}\n\n.categories-grid ion-col:nth-child(even) {\n  padding-left: 5px;\n}\n\n.categories-grid ion-col:nth-child(odd) {\n  padding-right: 5px;\n}\n\n.hot-items-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\nion-grid {\n  --ion-grid-padding: 0;\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zdHlsZTIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBYTtBQUNqQjs7QUFGQTtFQUdRLGdCQUFnQjtBQUd4Qjs7QUFBQTtFQUVRLFVBQVU7QUFFbEI7O0FBSkE7RUFLZ0IsZUFBZTtBQUcvQjs7QUFSQTtFQVFnQixlQUFlO0VBQ2YsV0FBVztBQUkzQjs7QUFFQTtFQUNJLGdCQUFnQjtFQUNoQiwwQ0FBMEM7RUFDMUMsMkNBQTJDO0VBQzNDLDZCQUE2QjtBQUNqQzs7QUFMQTtFQVFZLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUN6Qzs7QUFaQTtFQWFnQiw0QkFBMEI7QUFHMUM7O0FBaEJBO0VBbUJRLGlCQUFpQjtBQUN6Qjs7QUFwQkE7RUFzQlEsa0JBQWtCO0FBRTFCOztBQUNBO0VBQ0ksdURBQXVEO0VBQ3ZELHdEQUF3RDtBQUU1RDs7QUFBQTtFQUNJLHFCQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsNENBQTRDO0FBR2hEIiwiZmlsZSI6ImhvbWUtcGFnZS1zdHlsZTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbn1cbi5vZmZlcnMtZ3JpZCB7XG4gICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2F0ZWdvcmllcy1ncmlkIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgaW9uLWNvbCB7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpb24tY29sOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIH1cbiAgICBpb24tY29sOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIH1cbn1cbi5ob3QtaXRlbXMtZ3JpZCB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbn1cbmlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 68099:
/*!******************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style3/home-page-style3.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 0;\n}\n\n.offers-grid ion-col {\n  padding: 0;\n}\n\n.offers-grid ion-col ion-row ion-icon {\n  font-size: 22px;\n}\n\n.offers-grid ion-col ion-row ion-label {\n  margin-top: 5px;\n  width: 100%;\n}\n\n.categories-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\n.categories-grid ion-row {\n  display: flex;\n  justify-content: center;\n}\n\n.categories-grid ion-row ion-col {\n  padding-top: 0;\n  padding-bottom: 20px;\n}\n\n.categories-grid ion-row ion-label {\n  padding-top: 2px;\n  text-align: center;\n}\n\n.hot-items-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\nion-grid {\n  --ion-grid-padding: 0;\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zdHlsZTMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBYTtBQUNqQjs7QUFGQTtFQUdRLGdCQUFnQjtBQUd4Qjs7QUFBQTtFQUVRLFVBQVU7QUFFbEI7O0FBSkE7RUFLZ0IsZUFBZTtBQUcvQjs7QUFSQTtFQVFnQixlQUFlO0VBQ2YsV0FBVztBQUkzQjs7QUFFQTtFQUNJLHVEQUF1RDtFQUN2RCx3REFBd0Q7QUFDNUQ7O0FBSEE7RUFJUSxhQUFhO0VBQ2IsdUJBQXVCO0FBRy9COztBQVJBO0VBT1ksY0FBYztFQUNkLG9CQUFvQjtBQUtoQzs7QUFiQTtFQVdZLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFNOUI7O0FBRkE7RUFDSSx1REFBdUQ7RUFDdkQsd0RBQXdEO0FBSzVEOztBQUhBO0VBQ0kscUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyw0Q0FBNEM7QUFNaEQiLCJmaWxlIjoiaG9tZS1wYWdlLXN0eWxlMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxufVxuLm9mZmVycy1ncmlkIHtcbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXRlZ29yaWVzLWdyaWQge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaG90LWl0ZW1zLWdyaWQge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG59XG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG59XG4iXX0= */");

/***/ }),

/***/ 15418:
/*!******************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style4/home-page-style4.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 0;\n}\n\n.offers-grid ion-col {\n  padding: 0;\n}\n\n.offers-grid ion-col ion-row ion-icon {\n  font-size: 22px;\n}\n\n.offers-grid ion-col ion-row ion-label {\n  margin-top: 5px;\n  width: 100%;\n}\n\n.categories-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\n.categories-grid ion-row {\n  display: flex;\n  justify-content: center;\n}\n\n.categories-grid ion-row ion-col {\n  padding-top: 0;\n  padding-bottom: 20px;\n}\n\n.categories-grid ion-row ion-label {\n  padding-top: 2px;\n  text-align: center;\n}\n\n.hot-items-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\nion-grid {\n  --ion-grid-padding: 0;\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zdHlsZTQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBYTtBQUNqQjs7QUFGQTtFQUdRLGdCQUFnQjtBQUd4Qjs7QUFBQTtFQUVRLFVBQVU7QUFFbEI7O0FBSkE7RUFLZ0IsZUFBZTtBQUcvQjs7QUFSQTtFQVFnQixlQUFlO0VBQ2YsV0FBVztBQUkzQjs7QUFFQTtFQUNJLHVEQUF1RDtFQUN2RCx3REFBd0Q7QUFDNUQ7O0FBSEE7RUFJUSxhQUFhO0VBQ2IsdUJBQXVCO0FBRy9COztBQVJBO0VBT1ksY0FBYztFQUNkLG9CQUFvQjtBQUtoQzs7QUFiQTtFQVdZLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFNOUI7O0FBRkE7RUFDSSx1REFBdUQ7RUFDdkQsd0RBQXdEO0FBSzVEOztBQUhBO0VBQ0kscUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyw0Q0FBNEM7QUFNaEQiLCJmaWxlIjoiaG9tZS1wYWdlLXN0eWxlNC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxufVxuLm9mZmVycy1ncmlkIHtcbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXRlZ29yaWVzLWdyaWQge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaG90LWl0ZW1zLWdyaWQge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG59XG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG59XG4iXX0= */");

/***/ }),

/***/ 2801:
/*!******************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style5/home-page-style5.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 0;\n}\n\n.hot-items-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\nion-grid {\n  --ion-grid-padding: 0;\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zdHlsZTUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBYTtBQUNqQjs7QUFGQTtFQUdRLGdCQUFnQjtBQUd4Qjs7QUFBQTtFQUNJLHVEQUF1RDtFQUN2RCx3REFBd0Q7QUFHNUQ7O0FBREE7RUFDSSxxQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLDRDQUE0QztBQUloRCIsImZpbGUiOiJob21lLXBhZ2Utc3R5bGU1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG59XG4uaG90LWl0ZW1zLWdyaWQge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG59XG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG59XG4iXX0= */");

/***/ }),

/***/ 4702:
/*!******************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style6/home-page-style6.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 0;\n}\n\n.offers-grid ion-col {\n  padding: 0;\n}\n\n.offers-grid ion-col ion-row ion-icon {\n  font-size: 22px;\n}\n\n.offers-grid ion-col ion-row ion-label {\n  margin-top: 5px;\n  width: 100%;\n}\n\n.categories-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\n.categories-grid ion-row {\n  display: flex;\n  justify-content: center;\n}\n\n.categories-grid ion-row ion-col {\n  padding-top: 0;\n  padding-bottom: 20px;\n}\n\n.categories-grid ion-row ion-label {\n  padding-top: 2px;\n  text-align: center;\n}\n\n.hot-items-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\nion-grid {\n  --ion-grid-padding: 0;\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zdHlsZTYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBYTtBQUNqQjs7QUFGQTtFQUdRLGdCQUFnQjtBQUd4Qjs7QUFBQTtFQUVRLFVBQVU7QUFFbEI7O0FBSkE7RUFLZ0IsZUFBZTtBQUcvQjs7QUFSQTtFQVFnQixlQUFlO0VBQ2YsV0FBVztBQUkzQjs7QUFFQTtFQUNJLHVEQUF1RDtFQUN2RCx3REFBd0Q7QUFDNUQ7O0FBSEE7RUFJUSxhQUFhO0VBQ2IsdUJBQXVCO0FBRy9COztBQVJBO0VBT1ksY0FBYztFQUNkLG9CQUFvQjtBQUtoQzs7QUFiQTtFQVdZLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFNOUI7O0FBRkE7RUFDSSx1REFBdUQ7RUFDdkQsd0RBQXdEO0FBSzVEOztBQUhBO0VBQ0kscUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyw0Q0FBNEM7QUFNaEQiLCJmaWxlIjoiaG9tZS1wYWdlLXN0eWxlNi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxufVxuLm9mZmVycy1ncmlkIHtcbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYXRlZ29yaWVzLWdyaWQge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaG90LWl0ZW1zLWdyaWQge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KSAtIDVweCk7XG59XG5pb24tZ3JpZCB7XG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG59XG4iXX0= */");

/***/ }),

/***/ 41443:
/*!******************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style7/home-page-style7.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 0;\n}\n\n.categories-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\n.categories-grid ion-row {\n  display: flex;\n  justify-content: center;\n}\n\n.categories-grid ion-row ion-col {\n  padding-top: 0;\n  padding-bottom: 20px;\n}\n\n.categories-grid ion-row ion-label {\n  padding-top: 2px;\n  text-align: center;\n}\n\n.hot-items-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\nion-grid {\n  --ion-grid-padding: 0;\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zdHlsZTcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBYTtBQUNqQjs7QUFGQTtFQUdRLGdCQUFnQjtBQUd4Qjs7QUFBQTtFQUNJLHVEQUF1RDtFQUN2RCx3REFBd0Q7QUFHNUQ7O0FBTEE7RUFJUSxhQUFhO0VBQ2IsdUJBQXVCO0FBSy9COztBQVZBO0VBT1ksY0FBYztFQUNkLG9CQUFvQjtBQU9oQzs7QUFmQTtFQVdZLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFROUI7O0FBSkE7RUFDSSx1REFBdUQ7RUFDdkQsd0RBQXdEO0FBTzVEOztBQUxBO0VBQ0kscUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyw0Q0FBNEM7QUFRaEQiLCJmaWxlIjoiaG9tZS1wYWdlLXN0eWxlNy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxufVxuLmNhdGVnb3JpZXMtZ3JpZCB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbiAgICBpb24tcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5ob3QtaXRlbXMtZ3JpZCB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbn1cbmlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 23204:
/*!******************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style8/home-page-style8.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 0;\n}\n\n.hot-items-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\nion-grid {\n  --ion-grid-padding: 0;\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zdHlsZTguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBYTtBQUNqQjs7QUFGQTtFQUdRLGdCQUFnQjtBQUd4Qjs7QUFDQTtFQUNJLHVEQUF1RDtFQUN2RCx3REFBd0Q7QUFFNUQ7O0FBQUE7RUFDSSxxQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLDRDQUE0QztBQUdoRCIsImZpbGUiOiJob21lLXBhZ2Utc3R5bGU4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG59XG5cbi5ob3QtaXRlbXMtZ3JpZCB7XG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpIC0gNXB4KTtcbn1cbmlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 33540:
/*!******************************************************************************************!*\
  !*** ./src/components/home-page-styles/home-page-style9/home-page-style9.component.scss ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: transparent;\n}\n\nion-item ion-label {\n  margin-bottom: 0;\n}\n\n.hot-items-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n}\n\nion-grid {\n  --ion-grid-padding: 0;\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n.top-categories {\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\n.top-categories ion-slides ion-slide {\n  width: 65px;\n  display: block;\n  overflow: hidden;\n  color: var(--ion-text-color);\n  text-transform: capitalize;\n}\n\n.top-categories ion-slides ion-slide ion-avatar {\n  margin: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS1zdHlsZTkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBYTtBQUNqQjs7QUFGQTtFQUdRLGdCQUFnQjtBQUd4Qjs7QUFBQTtFQUNJLHVEQUF1RDtFQUN2RCx3REFBd0Q7QUFHNUQ7O0FBREE7RUFDSSxxQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLDRDQUE0QztBQUloRDs7QUFEQTtFQUNJLDBDQUEwQztFQUMxQywyQ0FBMkM7QUFJL0M7O0FBTkE7RUFNWSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0FBSXRDOztBQWRBO0VBYWdCLFlBQVk7QUFLNUIiLCJmaWxlIjoiaG9tZS1wYWdlLXN0eWxlOS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxufVxuLmhvdC1pdGVtcy1ncmlkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCkgLSA1cHgpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCkgLSA1cHgpO1xufVxuaW9uLWdyaWQge1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xufVxuXG4udG9wLWNhdGVnb3JpZXMge1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIGlvbi1zbGlkZXMge1xuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 22862:
/*!*****************************************************************************!*\
  !*** ./src/components/home-products-list/home-products-list.component.scss ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottom-products-grid {\n  padding-left: calc(var(--app-padding-left-right) - 5px);\n  padding-right: calc(var(--app-padding-left-right) - 5px);\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.bottom-products-grid ion-col {\n  padding-top: 0;\n  padding-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcHJvZHVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVEQUF1RDtFQUN2RCx3REFBd0Q7RUFDeEQsY0FBYztFQUNkLGlCQUFpQjtBQUNyQjs7QUFMQTtFQU1RLGNBQWM7RUFDZCxvQkFBb0I7QUFHNUIiLCJmaWxlIjoiaG9tZS1wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbS1wcm9kdWN0cy1ncmlkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCkgLSA1cHgpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCkgLSA1cHgpO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 54791:
/*!*******************************************************************!*\
  !*** ./src/components/home-segments/home-segments.component.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n.content .bottom-products-grid {\n  padding-left: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtc2VnbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBMkM7RUFDM0MsNENBQTRDO0FBQ2hEOztBQUhBO0VBSVEsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFHM0IiLCJmaWxlIjoiaG9tZS1zZWdtZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWFwcC1wYWRkaW5nLWxlZnQtcmlnaHQpO1xuICAgIC5ib3R0b20tcHJvZHVjdHMtZ3JpZCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ 32474:
/*!*********************************************************!*\
  !*** ./src/components/info-bar/info-bar.component.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".offers-grid {\n  padding: 0;\n}\n\n.offers-grid ion-col {\n  padding: 0;\n}\n\n.offers-grid ion-col ion-row ion-icon {\n  font-size: 22px;\n}\n\n.offers-grid ion-col ion-row ion-label {\n  margin-top: 5px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtBQUNkOztBQUZBO0VBR1EsVUFBVTtBQUdsQjs7QUFOQTtFQU1nQixlQUFlO0FBSS9COztBQVZBO0VBU2dCLGVBQWU7RUFDZixXQUFXO0FBSzNCIiwiZmlsZSI6ImluZm8tYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmVycy1ncmlkIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 868:
/*!***********************************************************************!*\
  !*** ./src/components/products-slider/products-slider.component.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  padding-left: var(--app-padding-left-right);\n  padding-right: var(--app-padding-left-right);\n}\n\n.content .swiper-slide {\n  width: 40%;\n  text-align: inherit;\n}\n\n.content ion-slides ion-slide:last-child {\n  height: auto;\n}\n\n.content app-product-card {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUEyQztFQUMzQyw0Q0FBNEM7QUFDaEQ7O0FBSEE7RUFJUSxVQUFVO0VBQ1YsbUJBQW1CO0FBRzNCOztBQVJBO0VBV2dCLFlBQVk7QUFDNUI7O0FBWkE7RUFnQlEsV0FBVztBQUFuQiIsImZpbGUiOiJwcm9kdWN0cy1zbGlkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICAuc3dpcGVyLXNsaWRlIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICB9XG5cbiAgICBpb24tc2xpZGVzIHtcbiAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFwcC1wcm9kdWN0LWNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" *ngIf=\"config.appDesignNumber==0\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" (click)=\"toggleMenu()\" slot=\"start\" src=\"assets/icon/menu.svg\"></ion-icon>\n    <ion-title mode=\"ios\"><img src=\"assets/header.png\" /> </ion-title>\n    <ion-icon class=\"header-icon\" slot=\"end\" name=\"bag-outline\" (click)=\"appCartService.openCartPage()\"></ion-icon>\n    <ion-badge color=\"danger\" class=\"cart-badge\"><span class=\"center\">{{appCartService.cartTotalItems()}}</span>\n    </ion-badge>\n  </ion-toolbar>\n</ion-header>\n<ion-header class=\"ion-no-border\" *ngIf=\"config.appDesignNumber==1\">\n  <ion-toolbar color=\"primary\">\n    <ion-title mode=\"ios\"> {{config.appNameString}} </ion-title>\n    <ion-icon #icon1 class=\"header-icon\" (click)=\"toggleMenu()\" slot=\"start\" src=\"assets/icon/menu.svg\"></ion-icon>\n\n    <ion-icon (click)=\"openSearchPage()\" class=\"header-icon margin-horizontal-10\" slot=\"end\" name=\"search-outline\">\n    </ion-icon>\n    <ion-icon class=\"header-icon\" slot=\"end\" name=\"bag-outline\" (click)=\"appCartService.openCartPage()\"></ion-icon>\n    <ion-badge color=\"danger\" class=\"cart-badge\"><span class=\"center\">{{appCartService.cartTotalItems()}}</span>\n    </ion-badge>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row class=\"searchbar margin-vertical-10\" [class.round-borders]=\"config.roundBordersBool\"\n    *ngIf=\"config.appDesignNumber==0\">\n    <ion-searchbar (click)=\"openSearchPage()\" name=\"search\" placeholder=\"{{'What are you looking for?'|translate}}\">\n    </ion-searchbar>\n  </ion-row>\n  <div class=\"center\" *ngIf=\"config.homePageNumber==0\">\n    <ion-spinner></ion-spinner>\n  </div>\n  <app-home-page-style1 *ngIf=\"config.homePageNumber==1\"></app-home-page-style1>\n  <app-home-page-style2 *ngIf=\"config.homePageNumber==2\"></app-home-page-style2>\n  <app-home-page-style3 *ngIf=\"config.homePageNumber==3\"></app-home-page-style3>\n  <app-home-page-style4 *ngIf=\"config.homePageNumber==4\"></app-home-page-style4>\n  <app-home-page-style5 *ngIf=\"config.homePageNumber==5\"></app-home-page-style5>\n  <app-home-page-style6 *ngIf=\"config.homePageNumber==6\"></app-home-page-style6>\n  <app-home-page-style7 *ngIf=\"config.homePageNumber==7\"></app-home-page-style7>\n  <app-home-page-style8 *ngIf=\"config.homePageNumber==8\"></app-home-page-style8>\n  <app-home-page-style9 *ngIf=\"config.homePageNumber==9\"></app-home-page-style9>\n  <!-- <app-home-page-style10 *ngIf=\"config.homePageNumber==10\"></app-home-page-style10> -->\n\n</ion-content>");

/***/ }),

/***/ 14519:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/app-heading/app-heading.component.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"ion-text-center ion-no-margin font-extra-large ion-text-uppercase font-bold-900\">\n  {{data|translate}}\n</p>");

/***/ }),

/***/ 91680:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/banner/banner.component.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"shared.bannersArray.length!=0\" class=\"content\">\n  <div *ngIf=\"shared.bannersArray[0]==1\">\n    <ion-skeleton-text animated style=\"min-height: 211px;\">\n    </ion-skeleton-text>\n  </div>\n  <div *ngIf=\"shared.bannersArray[0]!=1\">\n    \n    <ion-slides pager=\"true\" [options]=\"slideOpts\"\n      class=\"ion-no-margin ion-no-padding maze-bullet-slides\" [appAnimation]=\"'fade'\">\n      <ion-slide *ngFor=\"let b of shared.bannersArray\" class=\"ion-no-padding animate-item\" (click)=\"bannerClick(b)\">\n        <ion-img [appImageValidate]=\"150\" [appAnimation]=\"'fade'\" [class.round-borders]=\"config.roundBordersBool\" src=\"{{config.imgMediumUrlString+b.gallary}}\"></ion-img>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>");

/***/ }),

/***/ 94880:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-page-styles/home-page-style10/home-page-style10.component.html ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  home-page-style10 works!\n</p>\n");

/***/ }),

/***/ 32345:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-page-styles/home-page-style1/home-page-style1.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-10\"></div>\n<app-banner></app-banner>\n<div class=\"margin-top-10\"></div>\n<app-info-bar></app-info-bar>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"shop by category\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<!-- grid container -->\n<ion-grid class=\"categories-grid\">\n  <ion-row>\n    <ion-col size=\"2.4\" *ngFor=\"let c of appCategoriesService.categoriesArray\" (click)=\"onClickCategory(c)\">\n      <ion-row>\n        <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+c.gallary}}\"\n          [class.round-borders]=\"config.roundBordersBool\">\n        </ion-img>\n      </ion-row>\n      <ion-row>\n        <ion-label class=\"font-small ion-text-capitalize\">{{c.name}}</ion-label>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"year end sale\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<!-- IMAGE ONLY -->\n<ion-grid class=\"ion-no-padding ion-no-margin\">\n  <img [appImageValidate]=\"70\" src=\"assets/Capture.png\" (click)=\"shared.openShopPage()\" [class.round-borders]=\"config.roundBordersBool\"/>\n</ion-grid>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"Top Rated\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-products-slider filter=\"topseller\"></app-products-slider>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"just for you\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-home-products-list></app-home-products-list>");

/***/ }),

/***/ 66321:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-page-styles/home-page-style2/home-page-style2.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-10\"></div>\n<app-banner></app-banner>\n<div class=\"margin-top-10\"></div>\n<app-info-bar></app-info-bar>\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"year end sale\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<!-- IMAGE ONLY -->\n<ion-grid class=\"ion-no-padding ion-no-margin\">\n  <img [appImageValidate]=\"70\" src=\"assets/Capture.png\" (click)=\"shared.openShopPage()\" [class.round-borders]=\"config.roundBordersBool\"/>\n</ion-grid>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"top rated\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-products-slider filter=\"topseller\"></app-products-slider>\n\n\n<!-- HOT ITEMS labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"shop by category\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<!-- grid container -->\n<ion-grid class=\"ion-no-padding\" class=\"categories-grid\">\n  <ion-row class=\"ion-no-padding\">\n    <ion-col size=\"6\" *ngFor=\"let c of appCategoriesService.categoriesArray\" class=\"ion-no-padding\">\n      <ion-card (click)=\"onClickCategory(c)\" class=\"ion-no-margin\">\n        <ion-img [appImageValidate]=\"70\" [src]=\"config.imgThumbnailUrlString+c.gallary\"\n          [class.round-borders]=\"config.roundBordersBool\">\n        </ion-img>\n        <ion-card-header class=\"ion-text-center ion-no-padding padding-vertical-5\">\n          <ion-card-title class=\"font-extra-large ion-text-capitalize truncate\">{{c.name}}</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"just for you\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-home-products-list></app-home-products-list>");

/***/ }),

/***/ 18452:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-page-styles/home-page-style3/home-page-style3.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-10\"></div>\n<app-banner></app-banner>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"Newest\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<app-products-slider filter=\"newest\"></app-products-slider>\n<!-- IMAGE ONLY -->\n<ion-grid class=\"ion-no-padding ion-no-margin ion-margin-top\">\n  <img [appImageValidate]=\"70\" src=\"assets/Capture.png\" (click)=\"shared.openShopPage()\" [class.round-borders]=\"config.roundBordersBool\"/>\n</ion-grid>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"Top Rated\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<app-products-slider filter=\"topseller\"></app-products-slider>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"just for you\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-home-products-list></app-home-products-list>");

/***/ }),

/***/ 98435:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-page-styles/home-page-style4/home-page-style4.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-10\"></div>\n<app-banner></app-banner>\n<div class=\"margin-top-10\"></div>\n\n<!-- IMAGE ONLY -->\n<ion-grid class=\"ion-no-padding ion-no-margin\" [appAnimation]=\"'fade'\" >\n  <img [appImageValidate]=\"70\" src=\"assets/Capture.png\" (click)=\"shared.openShopPage()\" [class.round-borders]=\"config.roundBordersBool\"/>\n\n</ion-grid>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"Shop By Category\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<!-- grid container -->\n<ion-grid class=\"categories-grid\">\n  <ion-row>\n    <ion-col size=\"2.4\" *ngFor=\"let c of appCategoriesService.categoriesArray\" (click)=\"onClickCategory(c)\"\n      [appAnimation]=\"'fade'\">\n      <ion-row>\n        <ion-img [appImageValidate]=\"70\" src=\"{{config.imgThumbnailUrlString+c.gallary}}\"\n          [class.round-borders]=\"config.roundBordersBool\">\n        </ion-img>\n      </ion-row>\n      <ion-row>\n        <ion-label class=\"font-small ion-text-capitalize\">{{c.name}}</ion-label>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"Top Rated\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-products-slider filter=\"topseller\"></app-products-slider>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"just for you\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-home-products-list></app-home-products-list>");

/***/ }),

/***/ 63038:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-page-styles/home-page-style5/home-page-style5.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-10\"></div>\n<app-banner></app-banner>\n<div class=\"margin-top-10\"></div>\n<app-home-segments></app-home-segments>\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"year end sale\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<!-- IMAGE ONLY -->\n<ion-grid class=\"ion-no-padding ion-no-margin\">\n  <img [appImageValidate]=\"70\" src=\"assets/Capture.png\" (click)=\"shared.openShopPage()\" [class.round-borders]=\"config.roundBordersBool\"/>\n</ion-grid>\n\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"featured\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-products-slider filter=\"featured\"></app-products-slider>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"just for you\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-home-products-list></app-home-products-list>");

/***/ }),

/***/ 92133:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-page-styles/home-page-style6/home-page-style6.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-10\"></div>\n<app-banner></app-banner>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"Categories\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<app-categories-page-style1 parent=\"0\" [dataArray]=\"appCategoriesService.categoriesArray\"\n  (onClickCategory)=\"openProductPage($event)\">\n</app-categories-page-style1>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"featured\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-products-slider filter=\"featured\"></app-products-slider>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"year end sale\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<!-- IMAGE ONLY -->\n<ion-grid class=\"ion-no-padding ion-no-margin\">\n  <img [appImageValidate]=\"70\" src=\"assets/Capture.png\" (click)=\"shared.openShopPage()\" [class.round-borders]=\"config.roundBordersBool\"/>\n</ion-grid>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"just for you\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-home-products-list></app-home-products-list>");

/***/ }),

/***/ 20755:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-page-styles/home-page-style7/home-page-style7.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-10\"></div>\n<app-banner></app-banner>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"Categories\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<app-categories-page-style5 parent=\"0\" [dataArray]=\"appCategoriesService.categoriesArray\"\n  (onClickCategory)=\"openProductPage($event)\">\n</app-categories-page-style5>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"year end sale\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<!-- IMAGE ONLY -->\n<ion-grid class=\"ion-no-padding ion-no-margin\">\n  <img [appImageValidate]=\"70\" src=\"assets/Capture.png\" (click)=\"shared.openShopPage()\" [class.round-borders]=\"config.roundBordersBool\"/>\n</ion-grid>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"featured\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-products-slider filter=\"featured\"></app-products-slider>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"just for you\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-home-products-list></app-home-products-list>");

/***/ }),

/***/ 86009:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-page-styles/home-page-style8/home-page-style8.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-10\"></div>\n<app-banner></app-banner>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"year end sale\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<!-- IMAGE ONLY -->\n<ion-grid class=\"ion-no-padding ion-no-margin\">\n  <img [appImageValidate]=\"70\" src=\"assets/Capture.png\" (click)=\"shared.openShopPage()\"\n    [class.round-borders]=\"config.roundBordersBool\" />\n</ion-grid>\n\n<!-- labels -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"featured\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-products-slider filter=\"featured\"></app-products-slider>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"Categories\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<app-categories-page-style3 parent=\"0\" [dataArray]=\"appCategoriesService.categoriesArray\"\n  (onClickCategory)=\"openProductPage($event)\">\n</app-categories-page-style3>\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"just for you\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-home-products-list></app-home-products-list>");

/***/ }),

/***/ 29819:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-page-styles/home-page-style9/home-page-style9.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"margin-top-10\"></div>\n<div class=\"ion-no-padding top-categories ion-margin-vertical\">\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let c of appCategoriesService.categoriesArray\" (click)=\"onClickCategory(c)\">\n      <ion-avatar class=\"ion-no-margin\">\n        <img [appImageValidate]=\"70\" [src]=\"config.imgThumbnailUrlString+c.gallary\">\n      </ion-avatar>\n      <p class=\"font-small ion-text-capitalize truncate ion-no-margin ion-text-center\">{{c.name}}</p>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<div class=\"margin-top-10\"></div>\n<app-banner></app-banner>\n<div class=\"margin-top-10\"></div>\n<app-home-segments></app-home-segments>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"featured\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-products-slider filter=\"featured\"></app-products-slider>\n\n<!-- labels  -->\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"year end sale\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n\n<!-- IMAGE ONLY -->\n<ion-grid class=\"ion-no-padding ion-no-margin\">\n  <img [appImageValidate]=\"70\" src=\"assets/Capture.png\" (click)=\"shared.openShopPage()\"\n    [class.round-borders]=\"config.roundBordersBool\" />\n</ion-grid>\n\n\n<div class=\"heading-top-margin\"></div>\n<app-heading data=\"just for you\"></app-heading>\n<div class=\"heading-bottom-margin\"></div>\n<app-home-products-list></app-home-products-list>");

/***/ }),

/***/ 24187:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-products-list/home-products-list.component.html ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid class=\"bottom-products-grid\">\n  <ion-row>\n    <ion-col size=\"6\" *ngFor=\"let p of productsArray\">\n      <app-product-card [data]=\"p\"></app-product-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-infinite-scroll #infinite (ionInfinite)=\"getProducts()\">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>");

/***/ }),

/***/ 91710:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/home-segments/home-segments.component.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <ion-segment [(ngModel)]=\"topSegmentsString\" mode=ios class=\"app-segments\">\n    <ion-segment-button value=\"1\">\n      <ion-label class=\"font-extra-large ion-text-capitalize\">{{'top seller'| translate }}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      <ion-label class=\"font-extra-large ion-text-capitalize\">{{'featured'| translate }}</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"3\">\n      <ion-label class=\"font-extra-large ion-text-capitalize\">{{'on sale'| translate }}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]=\"topSegmentsString\">\n    <div *ngSwitchCase=\"'1'\">\n      <ion-grid class=\"bottom-products-grid\">\n        <ion-row>\n          <ion-col size=\"6\" *ngFor=\"let p of oneProductsArray\">\n            <app-product-card [data]=\"p\"></app-product-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngSwitchCase=\"'2'\">\n      <ion-grid class=\"bottom-products-grid\">\n        <ion-row>\n          <ion-col size=\"6\" *ngFor=\"let p of twoProductsArray\">\n            <app-product-card [data]=\"p\"></app-product-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngSwitchCase=\"'3'\">\n      <ion-grid class=\"bottom-products-grid\">\n        <ion-row>\n          <ion-col size=\"6\" *ngFor=\"let p of threeProductsArray\">\n            <app-product-card [data]=\"p\"></app-product-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ 73871:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/info-bar/info-bar.component.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid class=\"offers-grid\">\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-icon name=\"ticket-outline\"></ion-icon>\n      </ion-row>\n      <ion-row class=\"ion-text-center\">\n        <ion-label class=\"font-small ion-text-capitalize\">{{\"10% off first order\"|translate}}</ion-label>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-icon name=\"cart-outline\"></ion-icon>\n      </ion-row>\n      <ion-row class=\"ion-text-center\">\n        <ion-label class=\"font-small ion-text-capitalize\">{{\"free shipping on $35+\"|translate}}</ion-label>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-icon name=\"calendar-outline\"></ion-icon>\n      </ion-row>\n      <ion-row class=\"ion-text-center ion-text-capitalize\">\n        <ion-label class=\"font-small\">{{\"30 days to return\"|translate}}</ion-label>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-grid>");

/***/ }),

/***/ 76317:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/components/products-slider/products-slider.component.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n  <!-- <app-no-record-found [data]=\"productsArray\" *ngIf=\"productsArray.length==0\"></app-no-record-found> -->\n  <ion-slides [options]=\"sliderConfig\" *ngIf=\"productsArray.length!=0\">\n    <ion-slide *ngFor=\"let p of productsArray\">\n      <app-product-card [data]=\"p\" appFadeAnimation></app-product-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-button fill=\"clear\" (click)=\"openProducts()\"> {{'Shop More'| translate}}\n        <ion-icon name=\"caret-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</div>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts-es2015.js.map