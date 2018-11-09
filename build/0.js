webpackJsonp([0],{

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VuelosPageModule", function() { return VuelosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vuelos__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VuelosPageModule = /** @class */ (function () {
    function VuelosPageModule() {
    }
    VuelosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vuelos__["a" /* VuelosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vuelos__["a" /* VuelosPage */]),
            ],
        })
    ], VuelosPageModule);
    return VuelosPageModule;
}());

//# sourceMappingURL=vuelos.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VuelosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(242);
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
 * Generated class for the VuelosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VuelosPage = /** @class */ (function () {
    function VuelosPage(navCtrl, navParams, viewCtrl, imageViewerCtrl, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.screenOrientation = screenOrientation;
        this.backgroundImage = 'assets/img/vale03.jpg';
        this.testimonials = [
            {
                imageUrl: 'assets/img/17.jpg'
            },
            {
                imageUrl: 'assets/img/6.jpg'
            },
            {
                imageUrl: 'assets/img/7.jpg'
            },
            {
                imageUrl: 'assets/img/8.jpg'
            },
            {
                imageUrl: 'assets/img/9.jpg'
            },
        ];
        this.items = [];
        this.images = [];
        this._imageViewerCtrl = imageViewerCtrl;
        //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    VuelosPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('');
    };
    VuelosPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
        this.viewCtrl.setBackButtonText('');
    };
    VuelosPage.prototype.buscaridentificador = function (urlimagenes) {
        this.navCtrl.push('SliderWithArrowsPage', urlimagenes);
    };
    VuelosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vuelos',template:/*ion-inline-start:"C:\ionic3\hawaiiweb\src\pages\vuelos\vuelos.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title >\n        Vuelos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content fullscreen elestic-header>\n <div no-padding *ngFor="let testimonial of testimonials">\n  <ion-card >\n      <img src={{testimonial.imageUrl}} #myImage (click)="presentImage(myImage)" />\n  </ion-card>\n</div>\n\n</ion-content>  \n  '/*ion-inline-end:"C:\ionic3\hawaiiweb\src\pages\vuelos\vuelos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], VuelosPage);
    return VuelosPage;
}());

//# sourceMappingURL=vuelos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map