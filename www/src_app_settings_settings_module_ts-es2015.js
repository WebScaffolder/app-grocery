(self["webpackChunkrawal"] = self["webpackChunkrawal"] || []).push([["src_app_settings_settings_module_ts"],{

/***/ 27075:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": function() { return /* binding */ SettingsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 7162);
/* harmony import */ var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/pipes/pipes.module */ 58905);








const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 7162:
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": function() { return /* binding */ SettingsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./settings.page.html */ 14718);
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss */ 69519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/config/config.service */ 83681);
/* harmony import */ var src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/loading/loading.service */ 45386);
/* harmony import */ var src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/shared-data/shared-data.service */ 81341);
/* harmony import */ var _modals_login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/login/login.page */ 33020);
/* harmony import */ var _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/privacy-policy/privacy-policy.page */ 76727);
/* harmony import */ var _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/term-services/term-services.page */ 18681);
/* harmony import */ var _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/refund-policy/refund-policy.page */ 30985);
/* harmony import */ var _modals_language_language_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/language/language.page */ 96463);
/* harmony import */ var _modals_currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/currency-list/currency-list.page */ 61511);
/* harmony import */ var src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/services/app-events/app-events.service */ 43804);
/* harmony import */ var src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/services/app-http/app-http.service */ 20688);
/* harmony import */ var src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/services/app-user/app-user.service */ 53755);
/* harmony import */ var src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/services/app-log/app-log.service */ 88955);
/* harmony import */ var _modals_app_log_page_app_log_page_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modals/app-log-page/app-log-page.page */ 98208);
/* harmony import */ var src_services_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/services/app-storage/app-storage.service */ 75211);
/* harmony import */ var _modals_app_settings_modal_app_settings_modal_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../modals/app-settings-modal/app-settings-modal.page */ 27597);
/* harmony import */ var src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/services/app-cart/app-cart.service */ 88632);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @capacitor/share */ 16380);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @capacitor/browser */ 28427);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @capacitor/app */ 42138);

























let SettingsPage = class SettingsPage {
    constructor(navCtrl, modalCtrl, config, appHttpService, storage, loading, appEventsService, shared, 
    //public iab: InAppBrowser,
    plt, appUserService, appLogService, appCartService) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.config = config;
        this.appHttpService = appHttpService;
        this.storage = storage;
        this.loading = loading;
        this.appEventsService = appEventsService;
        this.shared = shared;
        this.plt = plt;
        this.appUserService = appUserService;
        this.appLogService = appLogService;
        this.appCartService = appCartService;
        this.setting = {};
        this.tapCounter = 0;
    }
    openSettingsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _modals_app_settings_modal_app_settings_modal_page__WEBPACK_IMPORTED_MODULE_17__.AppSettingsModalPage,
            });
            return yield modal.present();
        });
    }
    changeDarkMode() {
        this.config.darkModeBool = this.setting.darkMode;
        this.updateSetting();
    }
    updateSetting() {
        console.log(this.setting);
        this.storage.set('setting', this.setting);
    }
    openLoginPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _modals_login_login_page__WEBPACK_IMPORTED_MODULE_5__.LoginPage,
                componentProps: {
                    'hideGuestLogin': true
                }
            });
            return yield modal.present();
        });
    }
    openCurrencyPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _modals_currency_list_currency_list_page__WEBPACK_IMPORTED_MODULE_10__.CurrencyListPage,
            });
            return yield modal.present();
        });
    }
    logOut() {
        this.appUserService.logOut();
    }
    openAccountPage() {
        this.navCtrl.navigateForward("/my-account");
    }
    openSite() {
        this.loading.autoHide(2000);
        //this.iab.create(this.config.yourSiteUrlString, "blank");
    }
    //============================================================================================
    //turning on off local  notification
    onOffPushNotification() {
        // var dat: { [k: string]: any } = {};
        // dat.device_id = this.appPushNotificationService.pushNotificationId;
        // if (this.setting.notification == false) dat.is_notify = 0;
        // else dat.is_notify = 1;
        // this.appHttpService.postHttp('notify_me', dat).then((data: any) => {
        //   if (data.success == 1) {
        //     this.updateSetting();
        //   }
        // });
    }
    ;
    hideShowFooterMenu() {
        this.appEventsService.publish('setting', this.setting);
        this.updateSetting();
    }
    hideShowCartButton() {
        this.appEventsService.publish('setting', this.setting);
        this.updateSetting();
    }
    showModal(value) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            if (value == 'language') {
                let modal = yield this.modalCtrl.create({
                    component: _modals_language_language_page__WEBPACK_IMPORTED_MODULE_9__.LanguagePage
                });
                return yield modal.present();
            }
            else if (value == 'privacyPolicy') {
                let modal = yield this.modalCtrl.create({
                    component: _modals_privacy_policy_privacy_policy_page__WEBPACK_IMPORTED_MODULE_6__.PrivacyPolicyPage
                });
                return yield modal.present();
            }
            else if (value == 'termServices') {
                let modal = yield this.modalCtrl.create({
                    component: _modals_term_services_term_services_page__WEBPACK_IMPORTED_MODULE_7__.TermServicesPage
                });
                return yield modal.present();
            }
            else {
                let modal = yield this.modalCtrl.create({
                    component: _modals_refund_policy_refund_policy_page__WEBPACK_IMPORTED_MODULE_8__.RefundPolicyPage
                });
                return yield modal.present();
            }
        });
    }
    ionViewWillEnter() {
        this.getStoredSettings();
    }
    getStoredSettings() {
        this.storage.get('setting').then((val) => {
            if (val != null || val != undefined) {
                this.setting = val;
            }
            else {
                this.setting.localNotification = true;
                this.setting.notification = true;
                this.setting.cartButton = true;
                this.setting.footer = true;
            }
            this.setting.darkMode = this.config.darkModeBool;
            //this.changeDarkMode();
        });
    }
    rateUs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            if (this.config.currentPlatfromString == "ios") {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_20__.Browser.open({ url: this.config.iosStoreUrlString.toString() });
            }
            else {
                const info = yield _capacitor_app__WEBPACK_IMPORTED_MODULE_21__.App.getInfo();
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_20__.Browser.open({ url: "https://play.google.com/store/apps/details?id=" + info.id });
            }
            // this.loading.autoHide(2000);
            // if (this.plt.is('ios')) {
            //   this.iab.create(this.config.iosStoreUrlString.toString(), "_system");
            // } else if (this.plt.is('android')) {
            //   const info = await Device.getInfo();
            //   this.iab.create("https://play.google.com/store/apps/details?id=" + info.appId, "_system");
            // }
        });
    }
    share() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            this.loading.autoHide(2000);
            if (this.config.currentPlatfromString == "ios") {
                let shareRet = yield _capacitor_share__WEBPACK_IMPORTED_MODULE_19__.Share.share({
                    title: this.config.appNameString,
                    text: this.config.appNameString,
                    url: this.config.iosStoreUrlString.toString(),
                    dialogTitle: this.config.iosStoreUrlString.toString(),
                });
            }
            else {
                const deviceInfo = yield _capacitor_app__WEBPACK_IMPORTED_MODULE_21__.App.getInfo();
                let shareRet = yield _capacitor_share__WEBPACK_IMPORTED_MODULE_19__.Share.share({
                    title: deviceInfo.name,
                    text: deviceInfo.name,
                    url: "https://play.google.com/store/apps/details?id=" + deviceInfo.id,
                    dialogTitle: deviceInfo.name,
                });
            }
        });
    }
    showOption(value) {
        // if (this.config.wishListPage && value == "wishListPage" && this.appUserService.customerData.customers_id != null) { return true; }
        // else if (this.config.editProfilePage && value == "editPage" && this.appUserService.customerData.customers_id != null) { return true; }
        // else if (value == "changePasswordPage" && this.appUserService.customerData.customers_id != null) { return true; }
        // else if (value == "address" && this.appUserService.customerData.customers_id != null) { return true; }
        // else if (this.config.myOrdersPage && value == "myOrdersPage" && this.appUserService.customerData.customers_id != null) { return true; }
        // else if (this.config.contactUsPage && value == "contactPage") { return true; }
        // else if (this.config.aboutUsPage && value == "aboutUsPage") { return true; }
        // else if (this.config.newsPage && value == "newsPage") { return true; }
        // else if (this.config.introPage && value == "introPage") { return true; }
        // else if (this.config.shareApp && value == "sharePage") { return true; }
        // else if (this.config.rateApp && value == "ratePage") { return true; }
        // else if (this.config.settingPage && value == "settingsPage") { return true; }
        //else
        return true;
    }
    openPage(value) {
        if (value == "share")
            this.share();
        else if (value == "rate")
            this.rateUs();
        else
            this.navCtrl.navigateForward('/' + value);
    }
    ngOnInit() {
    }
    openLogPage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _modals_app_log_page_app_log_page_page__WEBPACK_IMPORTED_MODULE_15__.AppLogPagePage
            });
            return yield modal.present();
        });
    }
    userTapHeader() {
        this.tapCounter++;
        if (this.tapCounter == 10) {
            this.openLogPage();
            this.tapCounter = 0;
        }
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.ModalController },
    { type: src_services_config_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService },
    { type: src_services_app_http_app_http_service__WEBPACK_IMPORTED_MODULE_12__.AppHttpService },
    { type: src_services_app_storage_app_storage_service__WEBPACK_IMPORTED_MODULE_16__.AppStorageService },
    { type: src_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_services_app_events_app_events_service__WEBPACK_IMPORTED_MODULE_11__.AppEventsService },
    { type: src_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__.SharedDataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.Platform },
    { type: src_services_app_user_app_user_service__WEBPACK_IMPORTED_MODULE_13__.AppUserService },
    { type: src_services_app_log_app_log_service__WEBPACK_IMPORTED_MODULE_14__.AppLogService },
    { type: src_services_app_cart_app_cart_service__WEBPACK_IMPORTED_MODULE_18__.AppCartService }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_24__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SettingsPage);



/***/ }),

/***/ 69519:
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-text-color: #000000 !important;\n}\n\nion-content .offers-outer {\n  width: 100% !important;\n}\n\nion-content .offers-grid {\n  background-color: var(--app-item-color);\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n  box-shadow: 0 1px 3px lightgrey;\n  padding-top: 0 !important;\n}\n\nion-content .offers-grid ion-item {\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  --min-height: 0;\n}\n\nion-content .offers-grid ion-col {\n  padding: 0;\n}\n\nion-content .offers-grid ion-col ion-row ion-icon {\n  font-size: 22px;\n}\n\nion-content .offers-grid ion-col ion-row ion-label {\n  margin-top: 5px;\n  width: 100%;\n}\n\n.user-data-container {\n  height: 125px;\n}\n\n.user-data-container .row-outer {\n  padding-left: 10px;\n}\n\n.user-data-container .row-outer ion-col {\n  display: flex;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.user-data-container .top-inner-grid {\n  box-shadow: none;\n  color: var(--ion-color-primary-contrast);\n  text-align: center;\n  padding-top: 0 !important;\n}\n\n.user-data-container .top-inner-grid ion-col {\n  padding: 0;\n}\n\n.user-data-container .top-inner-grid ion-col ion-row ion-label {\n  margin-top: 5px;\n  width: 100%;\n}\n\n.orders-grid {\n  margin-top: -20px;\n}\n\n.membership-grid {\n  margin-top: -20px;\n  padding-top: 0 !important;\n  padding: 0;\n  width: 88%;\n}\n\n.membership-grid ion-row {\n  padding: 0;\n  width: 100%;\n}\n\n.membership-grid ion-col {\n  padding: 0;\n  padding-top: 0;\n}\n\n.membership-grid ion-item {\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  --min-height: 0;\n}\n\n.membership-grid ion-item ion-button {\n  font-size: 5px !important;\n  height: 6px !important;\n}\n\n.daily-activity-grid {\n  margin-left: var(--app-padding-left-right);\n  margin-right: var(--app-padding-left-right);\n}\n\n.daily-activity-grid ion-item {\n  --background: transparent;\n  padding: 10px 0;\n}\n\n.daily-activity-grid ion-item ion-avatar {\n  width: 30px;\n  height: 30px;\n}\n\n.daily-activity-grid ion-col {\n  padding: 0;\n  background-color: transparent;\n}\n\n.daily-activity-grid .one-col {\n  background-color: #f7ecd5;\n}\n\n.daily-activity-grid .two-col {\n  background-color: #c4dcf4;\n}\n\n.daily-activity-grid .space-div {\n  width: 5px;\n}\n\n.iter {\n  justify-content: space-around;\n  display: flex;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFpQjtBQUNyQjs7QUFGQTtFQUdRLHNCQUFzQjtBQUc5Qjs7QUFOQTtFQU1RLHVDQUF1QztFQUN2QywwQ0FBMEM7RUFDMUMsMkNBQTJDO0VBRTNDLCtCQUErQjtFQUMvQix5QkFBeUI7QUFJakM7O0FBZkE7RUFhWSxrQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCx3QkFBc0I7RUFDdEIsc0JBQW9CO0VBQ3BCLGVBQWE7QUFNekI7O0FBdkJBO0VBb0JZLFVBQVU7QUFPdEI7O0FBM0JBO0VBdUJvQixlQUFlO0FBUW5DOztBQS9CQTtFQTBCb0IsZUFBZTtFQUNmLFdBQVc7QUFTL0I7O0FBSEE7RUFDSSxhQUFhO0FBTWpCOztBQVBBO0VBSVEsa0JBQWtCO0FBTzFCOztBQVhBO0VBTVksYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFTL0I7O0FBakJBO0VBWVEsZ0JBQWdCO0VBQ2hCLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIseUJBQXlCO0FBU2pDOztBQXhCQTtFQWtCWSxVQUFVO0FBVXRCOztBQTVCQTtFQXFCb0IsZUFBZTtFQUNmLFdBQVc7QUFXL0I7O0FBTEE7RUFDSSxpQkFBaUI7QUFRckI7O0FBTkE7RUFDSSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixVQUFVO0FBU2Q7O0FBYkE7RUFNUSxVQUFVO0VBQ1YsV0FBVztBQVduQjs7QUFsQkE7RUFVUSxVQUFVO0VBQ1YsY0FBYztBQVl0Qjs7QUF2QkE7RUFjUSxrQkFBZ0I7RUFDaEIsZ0JBQWM7RUFDZCx3QkFBc0I7RUFDdEIsc0JBQW9CO0VBQ3BCLGVBQWE7QUFhckI7O0FBL0JBO0VBb0JZLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFlbEM7O0FBWEE7RUFDSSwwQ0FBMEM7RUFDMUMsMkNBQTJDO0FBYy9DOztBQWhCQTtFQUlRLHlCQUFhO0VBQ2IsZUFBZTtBQWdCdkI7O0FBckJBO0VBT1ksV0FBVztFQUNYLFlBQVk7QUFrQnhCOztBQTFCQTtFQVlRLFVBQVU7RUFDViw2QkFBNkI7QUFrQnJDOztBQS9CQTtFQWdCUSx5QkFBeUI7QUFtQmpDOztBQW5DQTtFQW1CUSx5QkFBeUI7QUFvQmpDOztBQXZDQTtFQXNCUSxVQUFVO0FBcUJsQjs7QUFsQkE7RUFDSSw2QkFBNkI7RUFDN0IsYUFBYTtBQXFCakIiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0taW9uLXRleHQtY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgICAub2ZmZXJzLW91dGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm9mZmVycy1ncmlkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWl0ZW0tY29sb3IpO1xuICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IGxpZ2h0Z3JleTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IGxpZ2h0Z3JleTtcbiAgICAgICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnVzZXItZGF0YS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTI1cHg7XG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnJvdy1vdXRlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudG9wLWlubmVyLWdyaWQge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ub3JkZXJzLWdyaWQge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuLm1lbWJlcnNoaXAtZ3JpZCB7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiA4OCU7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIC0tbWluLWhlaWdodDogMDtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiA2cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5kYWlseS1hY3Rpdml0eS1ncmlkIHtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tYXBwLXBhZGRpbmctbGVmdC1yaWdodCk7XG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1hcHAtcGFkZGluZy1sZWZ0LXJpZ2h0KTtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5vbmUtY29sIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZWNkNTtcbiAgICB9XG4gICAgLnR3by1jb2wge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRkY2Y0O1xuICAgIH1cbiAgICAuc3BhY2UtZGl2IHtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICB9XG59XG4uaXRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 14718:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" color=\"primary\" (click)=\"userTapHeader()\">\n  <ion-toolbar color=\"primary\">\n    <ion-icon class=\"header-icon ion-margin-end\" slot=\"start\" name=\"settings-outline\" (click)=\"openSettingsModal()\">\n    </ion-icon>\n    <ion-icon class=\"header-icon ion-margin-start\" slot=\"end\" name=\"bag-outline\"\n      (click)=\"appCartService.openCartPage()\"></ion-icon>\n    <ion-badge color=\"danger\" class=\"cart-badge\"><span class=\"center\"\n        (click)=\"appCartService.openCartPage()\">{{appCartService.cartTotalItems()}}</span>\n    </ion-badge>\n  </ion-toolbar>\n\n</ion-header>\n<ion-content class=\"setting-page\">\n\n  <ion-grid class=\"ion-padding bg-primary user-data-container\">\n    <ion-row class=\"row-outer\">\n      <ion-avatar class=\"font-medium\">\n        <img src=\"assets/dumy.jpg\">\n      </ion-avatar>\n      <ion-col size=\"\" class=\"ion-no-padding primary-contrat-color ion-align-items-center ion-text-capitalize\">\n        <ion-label class=\"font-large color-light font-bold\" *ngIf=\"appUserService.userIsLogedIn()\">\n          {{appUserService.customerData.firstName}} {{appUserService.customerData.lastName}}\n        </ion-label>\n        <ion-label class=\"font-large color-light font-bold\" *ngIf=\"!appUserService.userIsLogedIn()\"\n          (click)=\"openLoginPage()\">{{'sign in'|translate}} /\n          {{'register'|translate}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <span class=\"opacity-background\"></span>\n    <!-- <ion-grid class=\"top-inner-grid ion-no-margin ion-margin-vertical margin-top-10 bg-transparent\">\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-label class=\"font-extra-large font-bold\">0</ion-label>\n          </ion-row>\n          <ion-row class=\"ion-text-center\">\n            <ion-label class=\"font-small ion-text-capitalize\">{{\"rewards\"}}</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-label class=\"font-extra-large font-bold\">{{'0'|curency}}</ion-label>\n          </ion-row>\n          <ion-row class=\"ion-text-center\">\n            <ion-label class=\"font-small ion-text-capitalize\">{{\"wallet\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-label class=\"font-extra-large font-bold\">0</ion-label>\n          </ion-row>\n          <ion-row class=\"ion-text-center ion-text-capitalize\">\n            <ion-label class=\"font-small\">{{\"points\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n\n  </ion-grid>\n\n\n  <!-- absolute grid -->\n  <!-- <ion-grid class=\"membership-grid bg-dark color-light\" [class.round-borders]=\"config.roundBordersBool\">\n    <div class=\"padding-bottom-10\">\n      <ion-item lines=\"none\" class=\"bg-dark padding-horizontal-15\">\n        <ion-label class=\"font-small font-bold ion-no-padding \" color=\"warning\">{{'Membership Benefits'|translate}}\n        </ion-label>\n        <ion-button fill=\"clear\" color=\"warning\" slot=\"end\" class=\"color-light ion-no-margin\">\n          <ion-icon size=\"small\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-item>\n      <ion-row>\n        <ion-col class=\"iter padding-horizontal-10\">\n          <ion-label class=\"font-small font-bold\" color=\"warning\">{{'New Member Gift'|translate}} <br>\n            <span class=\"avenir-next-bold\">\n              50% {{'OFF'|translate}}\n            </span>\n          </ion-label><br>\n          <ion-label class=\"font-small font-bold\" color=\"warning\">{{'Member Gift Item'|translate}}<br>\n            <span class=\"avenir-next-bold\">\n              50% {{'OFF'|translate}}\n            </span>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-grid> -->\n\n  <!-- <ion-grid class=\"daily-activity-grid ion-no-padding margin-top-10\" [class.round-borders]=\"config.roundBordersBool\">\n    <ion-row>\n      <ion-col class=\"variable-background-color\">\n        <ion-item lines=none class=\"one-col\">\n          <ion-avatar slot=\"end\">\n            <img src=\"assets/calender.png\">\n          </ion-avatar>\n          <ion-label>\n            <h3 class=\"font-small\">\n              <ion-label color=\"dark\">{{'check in'|translate}}</ion-label>\n            </h3>\n            <p class=\"font-extra-small\">\n              <ion-label color=\"primary\">{{'claim your 20 points'|translate}}</ion-label>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <div class=\"space-div\"></div>\n      <ion-col>\n        <ion-item lines=none class=\"two-col\">\n          <ion-avatar slot=\"end\">\n            <img src=\"assets/gift.png\">\n          </ion-avatar>\n          <ion-label>\n            <h3 class=\"font-small\">\n              <ion-label color=\"dark\">{{'share'|translate}}</ion-label>\n            </h3>\n            <p class=\"font-extra-small\">\n              <ion-label color=\"primary\">{{'up to 1000 wallet'|translate}}</ion-label>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <ion-grid class=\"offers-outer\">\n    <ion-grid class=\"offers-grid padding-bottom-20 orders-grid\" [class.round-borders]=\"config.roundBordersBool\"\n      [class.light-green-background]=\"config.appDesignNumber==0\">\n      <ion-item lines=\"none\" [class.light-green-background]=\"config.appDesignNumber==0\">\n        <ion-label class=\"font-small font-color-medium\">{{'My Orders'|translate}}</ion-label>\n        <ion-button slot=\"end\" fill=\"clear\" class=\"font-extra-small font-color-medium\" (click)=\"openPage('my-orders')\">\n          {{ 'view all' |translate}} ></ion-button>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"cube-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center\" (click)=\"openPage('my-orders')\">\n            <ion-label class=\"font-small ion-text-capitalize\">{{\"In Progress\"}}</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"airplane-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center\" (click)=\"openPage('my-orders')\">\n            <ion-label class=\"font-small ion-text-capitalize\">{{\"Delivered\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"star-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center ion-text-capitalize\" (click)=\"openPage('my-orders')\">\n            <ion-label class=\"font-small\">{{\"Reviews\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-grid>\n\n\n  <ion-grid class=\"offers-outer margin-top-10\">\n    <ion-grid class=\"offers-grid\" [class.round-borders]=\"config.roundBordersBool\"\n      [class.light-pink-background]=\"config.appDesignNumber==0\">\n      <ion-item lines=\"none\" [class.light-pink-background]=\"config.appDesignNumber==0\">\n        <ion-label class=\"font-small font-color-medium\">{{'help & info'|translate}}</ion-label>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"3\" class=\"margin-bottom-20\" (click)=\"openPage('my-account')\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"person-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center ion-text-capitalize\">\n            <ion-label class=\"font-small\">{{\"profile\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"3\" class=\"margin-bottom-20\" (click)=\"openPage('addresses')\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"location-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center ion-text-capitalize\">\n            <ion-label class=\"font-small\">{{\"address book\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"3\" class=\"margin-bottom-20\" (click)=\"openPage('rewards')\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"ticket-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center\">\n            <ion-label class=\"font-small ion-text-capitalize\">{{\"rewards\"}}</ion-label>\n          </ion-row>\n        </ion-col>\n        <!-- <ion-col size=\"3\" class=\"margin-bottom-20\" (click)=\"openPage('wallet')\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"wallet-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center\">\n            <ion-label class=\"font-small ion-text-capitalize\">{{\"wallet\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"3\" class=\"margin-bottom-20\" (click)=\"openPage('points')\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"cash-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center ion-text-capitalize\">\n            <ion-label class=\"font-small\">{{\"points\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col> -->\n        <ion-col size=\"3\" class=\"margin-bottom-20\" (click)=\"openPage('contact-us')\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center ion-text-capitalize\">\n            <ion-label class=\"font-small\">{{\"feedback\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"3\" class=\"margin-bottom-20\" (click)=\"openPage('share')\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"share-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center ion-text-capitalize\">\n            <ion-label class=\"font-small\">{{\"share\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"3\" class=\"margin-bottom-20\" (click)=\"openPage('rate')\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-icon name=\"star-half-outline\"></ion-icon>\n          </ion-row>\n          <ion-row class=\"ion-text-center ion-text-capitalize\">\n            <ion-label class=\"font-small\">{{\"rate us\"|translate}}</ion-label>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-grid>\n</ion-content>\n\n<ion-footer *ngIf=\"appUserService.customerData.customers_id!=null\">\n  <ion-button expand=\"full\" color=\"secondary\" (click)=\"logOut()\">{{'Log Out' | translate }}</ion-button>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_settings_settings_module_ts-es2015.js.map