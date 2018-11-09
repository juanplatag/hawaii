webpackJsonp([4],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallecompaniasPageModule", function() { return DetallecompaniasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detallecompanias__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetallecompaniasPageModule = /** @class */ (function () {
    function DetallecompaniasPageModule() {
    }
    DetallecompaniasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detallecompanias__["a" /* DetallecompaniasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detallecompanias__["a" /* DetallecompaniasPage */]),
            ],
        })
    ], DetallecompaniasPageModule);
    return DetallecompaniasPageModule;
}());

//# sourceMappingURL=detallecompanias.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallecompaniasPage; });
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
 * Generated class for the DetallecompaniasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallecompaniasPage = /** @class */ (function () {
    function DetallecompaniasPage(navCtrl, navParams, viewCtrl, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.screenOrientation = screenOrientation;
        this.backgroundImage = 'assets/img/fondo.jpg';
        this.compania = 'assets/gif/aseguradoraancon.png';
        this.imagetexto = 'assets/img/ancon.png';
        this.images = [];
        this.items = navParams.data;
        //screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    DetallecompaniasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detallecompanias',template:/*ion-inline-start:"C:\ionic3\hawaiiweb\src\pages\detallecompanias\detallecompanias.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title >\n        Compañía\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content fullscreen elestic-header>\n<div no-padding *ngFor="let item of items">\n    <ion-card>\n      <img src={{item.imageUrl}}/>\n      <ion-card-content>\n        <!--<ion-card-title>\n         {{item.title}}\n        </ion-card-title>-->\n          <h3 align="justify">\n          {{item.descripcion1}}\n          <br/><br/>\n          {{item.descripcion2}}\n          <br/><br/>\n          {{item.descripcion3}}\n          <br/><br/>\n          {{item.descripcion4}}\n          <br/><br/>\n          {{item.descripcion5}}\n\n        </h3>\n      </ion-card-content>\n    </ion-card>\n</div>\n\n</ion-content>  \n\n\n'/*ion-inline-end:"C:\ionic3\hawaiiweb\src\pages\detallecompanias\detallecompanias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], DetallecompaniasPage);
    return DetallecompaniasPage;
}());

//# sourceMappingURL=detallecompanias.js.map

/***/ })

});
//# sourceMappingURL=4.js.map