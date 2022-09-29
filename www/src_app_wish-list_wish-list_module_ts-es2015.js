(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_wish-list_wish-list_module_ts"],{

/***/ 96253:
/*!***********************************************!*\
  !*** ./src/app/wish-list/wish-list.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishListPageModule": function() { return /* binding */ WishListPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _wish_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wish-list.page */ 63236);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);
/* harmony import */ var src_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/product-card/product-card.module */ 12682);
/* harmony import */ var src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/no-record-found/no-record-found.module */ 34334);










const routes = [
    {
        path: '',
        component: _wish_list_page__WEBPACK_IMPORTED_MODULE_0__.WishListPage
    }
];
let WishListPageModule = class WishListPageModule {
};
WishListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes),
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            src_components_product_card_product_card_module__WEBPACK_IMPORTED_MODULE_2__.productCardModule,
            src_components_no_record_found_no_record_found_module__WEBPACK_IMPORTED_MODULE_3__.NoRecordFoundModule
        ],
        declarations: [_wish_list_page__WEBPACK_IMPORTED_MODULE_0__.WishListPage]
    })
], WishListPageModule);



/***/ }),

/***/ 63236:
/*!*********************************************!*\
  !*** ./src/app/wish-list/wish-list.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishListPage": function() { return /* binding */ WishListPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_wish_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./wish-list.page.html */ 53650);
/* harmony import */ var _wish_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wish-list.page.scss */ 50889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/services/app-wishlist/app-wish-list.service */ 70182);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);












let WishListPage = class WishListPage {
    constructor(navCtrl, config, appHttpService, loading, shared, appUserService, appCartService, appWishListService) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.appHttpService = appHttpService;
        this.loading = loading;
        this.shared = shared;
        this.appUserService = appUserService;
        this.appCartService = appCartService;
        this.appWishListService = appWishListService;
        this.page = 0;
        this.httpRunning = false;
        this.productsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.pageNumber = 1;
    }
    openSearchPage() {
        this.navCtrl.navigateForward("search");
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.pullRefresh();
    }
    pullRefresh() {
        this.pageNumber = 1;
        this.productsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        this.getProducts();
    }
    getProducts() {
        let url = "wishlist";
        url += "?limit=" + this.config.perPageNumber;
        url += "&getCategory=1";
        url += "&products=1";
        url += "&getDetail=1";
        url += "&language_id=" + this.config.languageIdNumber;
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
                    this.productsArray.push(value.products);
            if (dat.length < this.config.perPageNumber)
                this.infinite.disabled = true;
            this.pageNumber++;
            this.ionRefresher.complete();
        });
    }
    getTrashIconName() {
        this.removeHeartIcon();
        return 'trash';
    }
    removeHeartIcon() {
        try {
            let heartIcons = document.querySelectorAll('.wish-list-content .right-fab');
            for (var i = 0; i < heartIcons.length; i++) {
                heartIcons[i].remove();
            }
        }
        catch (error) {
        }
    }
    remove(p) {
        this.appWishListService.addRemoveWishProduct(p.product_id);
        this.productsArray.forEach((value, index) => {
            if (value.product_id == p.product_id) {
                this.productsArray.splice(index, 1);
            }
        });
    }
};
WishListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_5__.AppHttpService },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_6__.AppUserService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_8__.AppCartService },
    { type: src_services_app_wishlist_app_wish_list_service__WEBPACK_IMPORTED_MODULE_7__.AppWishListService }
];
WishListPage.propDecorators = {
    infinite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonInfiniteScroll, { static: false },] }],
    ionRefresher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRefresher, { static: false },] }]
};
WishListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-wish-list',
        template: _raw_loader_wish_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_wish_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WishListPage);



/***/ }),

/***/ 50889:
/*!***********************************************!*\
  !*** ./src/app/wish-list/wish-list.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bottom-products-grid {\n  padding-top: 0 !important;\n}\n\n.bottom-products-grid app-product-card app-product-card-style1 {\n  display: none !important;\n}\n\n.bottom-products-grid app-product-card app-product-card-style1 .right-fab {\n  display: none !important;\n}\n\nion-fab {\n  visibility: hidden !important;\n}\n\n.right-fab[_ngcontent-dod-c155] {\n  display: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpc2gtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7QUFDN0I7O0FBRkE7RUFJWSx3QkFBd0I7QUFFcEM7O0FBTkE7RUFNZ0Isd0JBQXdCO0FBSXhDOztBQUVBO0VBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0VBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6Indpc2gtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLXByb2R1Y3RzLWdyaWQge1xuICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgYXBwLXByb2R1Y3QtY2FyZCB7XG4gICAgICAgIGFwcC1wcm9kdWN0LWNhcmQtc3R5bGUxIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIC5yaWdodC1mYWIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWZhYiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodC1mYWJbX25nY29udGVudC1kb2QtYzE1NV0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 53650:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wish-list/wish-list.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" *ngIf=\"config.appDesignNumber==0\">\n  <ion-toolbar>\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" (click)=\"shared.toggleMenu()\" src=\"assets/icon/menu.svg\">\n    </ion-icon>\n    <ion-title mode=\"ios\"> {{'wish list'|translate}} </ion-title>\n    <ion-icon (click)=\"openSearchPage()\" class=\"header-icon margin-horizontal-10\" slot=\"end\" name=\"search-outline\">\n    </ion-icon>\n    <ion-icon class=\"header-icon\" slot=\"end\" name=\"bag-outline\" (click)=\"appCartService.openCartPage()\"></ion-icon>\n    <ion-badge color=\"danger\" class=\"cart-badge\"><span class=\"center\">{{appCartService.cartTotalItems()}}</span>\n    </ion-badge>\n  </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border\" *ngIf=\"config.appDesignNumber==1\">\n  <ion-toolbar color=\"primary\">\n    <ion-icon #icon1 class=\"header-icon\" slot=\"start\" (click)=\"shared.toggleMenu()\" src=\"assets/icon/menu.svg\">\n    </ion-icon>\n    <ion-title mode=\"ios\"> {{'wish list'|translate}} </ion-title>\n    <ion-icon (click)=\"openSearchPage()\" class=\"header-icon margin-horizontal-10\" slot=\"end\" name=\"search-outline\">\n    </ion-icon>\n    <ion-icon class=\"header-icon\" slot=\"end\" name=\"bag-outline\" (click)=\"appCartService.openCartPage()\"></ion-icon>\n    <ion-badge color=\"danger\" class=\"cart-badge\"><span class=\"center\">{{appCartService.cartTotalItems()}}</span>\n    </ion-badge>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"wish-list-content\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"pullRefresh()\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <app-no-record-found [data]=\"productsArray\" *ngIf=\"productsArray.length==0\"></app-no-record-found>\n  <!-- <ion-grid class=\"ion-no-padding top-margin\" *ngIf=\"productsArray.length == 0\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-no-padding\">\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <h4>{{'your wishlist is empty'|translate}}</h4>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <ion-grid class=\"bottom-products-grid margin-top-10\">\n\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let p of productsArray\">\n        <app-product-card [data]=\"p\"></app-product-card>\n        <ion-button size=\"small\" expand=\"full\" color=\"danger\" class=\"ion-no-margin\" (click)=\"remove(p)\" *ngIf=\"p!=1\">\n          <ion-icon [name]=\"getTrashIconName()\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll #infinite (ionInfinite)=\"getProducts()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_wish-list_wish-list_module_ts-es2015.js.map