(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var _services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth-guard/auth-guard.service */ 327);





const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_product-card_product-card_module_ts"), __webpack_require__.e("default-src_components_categories-page-styles_categories-page-style1_categories-page-style1_m-8fe271"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
                    }
                ]
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_categories-page-styles_categories-page-style1_categories-page-style1_m-8fe271"), __webpack_require__.e("src_app_categories_categories_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../categories/categories.module */ 71944)).then(m => m.CategoriesPageModule)
                    }
                ]
            },
            {
                path: 'wish-list',
                children: [
                    {
                        canActivate: [_services_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService],
                        path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_components_product-card_product-card_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_wish-list_wish-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../wish-list/wish-list.module */ 96253)).then(m => m.WishListPageModule)
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../settings/settings.module */ 27075)).then(m => m.SettingsPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);










let TabsPage = class TabsPage {
    constructor(shared, appCartService, config, navCtrl, appUserService, appLogService) {
        this.shared = shared;
        this.appCartService = appCartService;
        this.config = config;
        this.navCtrl = navCtrl;
        this.appUserService = appUserService;
        this.appLogService = appLogService;
        this.homePath = "./home-pages/home/home.module#HomePageModule";
    }
    ionChange(appTabs) {
        // this.config.currentRoute = "tabs/" + appTabs.getSelected();
        // //console.log(this.config.currentRoute);
        // if (this.appUserService.customerData.customers_id == null && this.config.currentRoute == 'tabs/cart') {
        //   this.navCtrl.navigateForward("/tabs/cart");
        // }
    }
};
TabsPage.ctorParameters = () => [
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__.SharedDataService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_4__.AppCartService },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_5__.AppUserService },
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_6__.AppLogService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: var(--app-icon-font-size);\n}\n\nion-label {\n  text-transform: capitalize;\n  font-size: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0VBQ0ksMEJBQTBCO0VBQzFCLGVBQWU7QUFDbkIiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1hcHAtaWNvbi1mb250LXNpemUpO1xufVxuXG5pb24tbGFiZWx7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs #appTabs (ionTabsDidChange)=\"ionChange(appTabs)\" *ngIf=\"config.appDesignNumber==0\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon src=\"assets/icon/home.svg\"></ion-icon>\n      <ion-label>\n        <b>{{'home'|translate}}</b>\n      </ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"categories\">\n      <ion-icon src=\"assets/icon/category.svg\"></ion-icon>\n      <ion-label>\n        <b>{{'categories'|translate}}</b>\n      </ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"wish-list\">\n      <ion-icon src=\"assets/icon/heart.svg\"></ion-icon>\n      <ion-label>\n        <b>{{'wish list'|translate}}</b>\n      </ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"settings\">\n      <ion-icon src=\"assets/icon/setting.svg\"></ion-icon>\n      <ion-label>\n        <b>{{'account'|translate}}</b>\n      </ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n\n<ion-tabs #appTabs (ionTabsDidChange)=\"ionChange(appTabs)\" *ngIf=\"config.appDesignNumber==1\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"categories\">\n      <ion-icon name=\"apps\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"wish-list\">\n      <ion-icon name=\"heart\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"settings\">\n      <ion-icon name=\"settings\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es2015.js.map