webpackJsonp([5],{

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniasPageModule", function() { return CompaniasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__companias__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompaniasPageModule = /** @class */ (function () {
    function CompaniasPageModule() {
    }
    CompaniasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__companias__["a" /* CompaniasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__companias__["a" /* CompaniasPage */]),
            ],
        })
    ], CompaniasPageModule);
    return CompaniasPageModule;
}());

//# sourceMappingURL=companias.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniasPage; });
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
 * Generated class for the CompaniasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompaniasPage = /** @class */ (function () {
    function CompaniasPage(navCtrl, navParams, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.screenOrientation = screenOrientation;
        this.backgroundImage = 'assets/img/fondo.jpg';
        this.items = navParams.data;
        //screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    CompaniasPage.prototype.goToprincipal = function (id) {
        this.companiaitems = this.items.find(function (companias) { return companias.id == id; });
        //console.log( this.companiaitems); 
        var itemsm = [];
        itemsm.push(this.companiaitems);
        //console.log( this.itemsm);
        this.navCtrl.push('DetallecompaniasPage', itemsm);
    };
    CompaniasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-companias',template:/*ion-inline-start:"C:\ionic3\hawaiiweb\src\pages\companias\companias.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title >\n        Compañías\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen elestic-header>\n<div class="buttons">\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of items">\n      <ion-item class="movie-info" block (click)="goToprincipal(item.id)">\n        <ion-thumbnail item-start>\n          <img [src]="item.imageUrl">\n        </ion-thumbnail>\n        {{item.title}}\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n   </div>\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\hawaiiweb\src\pages\companias\companias.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], CompaniasPage);
    return CompaniasPage;
}());

//# sourceMappingURL=companias.js.map

/***/ })

});
//# sourceMappingURL=5.js.map