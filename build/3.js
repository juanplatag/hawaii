webpackJsonp([3],{

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InicioPageModule = /** @class */ (function () {
    function InicioPageModule() {
    }
    InicioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* inicio */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* inicio */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__inicio__["a" /* inicio */]
            ]
        })
    ], InicioPageModule);
    return InicioPageModule;
}());

//# sourceMappingURL=inicio.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return inicio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(242);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var inicio = /** @class */ (function () {
    function inicio(navCtrl, navParams, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.backgroundImage = 'assets/img/fondo.jpg';
        this.waze = 'https://www.waze.com/ul?q=Hawaii';
        this.ico01 = 'assets/img/hawaii.png';
        this.ico02 = 'assets/img/vuelos.png';
        this.ico03 = 'assets/img/agenda.png';
        this.ico04 = 'assets/img/compania.png';
        this.ico05 = 'assets/img/fotos.png';
        this.ico06 = 'assets/img/waze.png';
        // screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    inicio.prototype.goToVuelos = function () {
        this.navCtrl.push('VuelosPage');
    };
    inicio.prototype.goToAgenda = function () {
        this.navCtrl.push('AgendaPage');
    };
    inicio.prototype.goToprincipal = function () {
        this.navCtrl.push('PrincipalPage');
    };
    inicio.prototype.goToCompania = function () {
        this.navCtrl.push('PaisesPage');
    };
    inicio.prototype.openurl = function (url) {
        window.open(url, '_system', 'location=no');
        return false;
    };
    inicio = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\ionic3\hawaiiweb\src\pages\inicio\inicio.html"*/'<!--<ion-content padding class="transparent-header" [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}">-->\n<ion-header no-border>\n  <ion-navbar transparent>\n  </ion-navbar>\n</ion-header>\n<ion-content fullscreen elestic-header>\n  <div padding>\n    <ion-row>\n      <ion-col>\n        <img  class="logo" src="assets/img/logo.png" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n       <ion-grid>\n          <ion-row >\n             <ion-col width-50 ><img  src="{{ico01}}"  block (click)="goToprincipal()"></ion-col>\n             <ion-col width-50 ><img  src="{{ico02}}"  block (click)="goToVuelos()"></ion-col>\n          </ion-row>\n\n        <ion-row >\n            <ion-col width-50 ><img  src="{{ico03}}"  block (click)="goToAgenda()"></ion-col>\n            <ion-col width-50 ><img   src="{{ico04}}" block (click)="goToCompania()"></ion-col>\n        </ion-row>\n       </ion-grid> \n    </ion-row>\n   \n   \n  </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\ionic3\hawaiiweb\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], inicio);
    return inicio;
}());

//# sourceMappingURL=inicio.js.map

/***/ })

});
//# sourceMappingURL=3.js.map