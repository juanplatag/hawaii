webpackJsonp([2],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesPageModule", function() { return PaisesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paises__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaisesPageModule = /** @class */ (function () {
    function PaisesPageModule() {
    }
    PaisesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paises__["a" /* PaisesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paises__["a" /* PaisesPage */]),
            ],
        })
    ], PaisesPageModule);
    return PaisesPageModule;
}());

//# sourceMappingURL=paises.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaisesPage; });
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
 * Generated class for the PaisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaisesPage = /** @class */ (function () {
    function PaisesPage(navCtrl, navParams, viewCtrl, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.screenOrientation = screenOrientation;
        this.backgroundImage = 'assets/img/fondo.jpg';
        this.items = [
            {
                id: 1,
                imageUrl: 'assets/gif/aseguradoraancon.png',
                title: 'Aseguradora Ancón',
                code_pais: "01",
                pais: 'Panamá',
                descripcion1: "Ubicaci\u00F3n: Panam\u00E1.",
                descripcion2: "Sede Principal: Ciudad de Panam\u00E1 m\u00E1s 8 sucursales y oficinas a nivel nacional.",
                descripcion3: "Rese\u00F1a: Inicia operaciones en 1992 y nace de la visi\u00F3n de importantes empresarios \n      quienes quisieron consolidar una compa\u00F1\u00EDa que ofreciera una nueva din\u00E1mica \n      en la oferta de seguros y fianzas en Panam\u00E1.",
                descripcion4: "Eficiencia, seguridad y confianza.",
                descripcion5: "Productos: Vida, salud, auto, patrimoniales."
            },
            {
                id: 2,
                imageUrl: 'assets/gif/MDS_PR.GIF',
                title: 'Multinacional Insurance Company',
                code_pais: "02",
                pais: 'Puerto Rico',
                descripcion1: "Ubicaci\u00F3n: Puerto Rico",
                descripcion2: "Sede Principal: San Juan. Sucursales en Ponce y Mayag\u00FCez.",
                descripcion3: "Rese\u00F1a: Dos empresas que se caracterizan por proveer la m\u00E1s alta calidad de servicio y la respuesta m\u00E1s diligente con los compromisos asumidos. Solidez Financiera, Servicio de Excelencia, Confianza e Innovaci\u00F3n.",
                descripcion4: "Productos: Vida, C\u00E1ncer, Incapacidad, Funeral, Auto, Patrimoniales, Personal Package, Hogar, y Viajes.",
                descripcion5: " "
            },
            {
                id: 3,
                imageUrl: 'assets/gif/LOGO-MULTI.GIF',
                title: 'Multinacional de Seguros',
                code_pais: "03",
                pais: 'Venezuela',
                descripcion1: "Ubicaci\u00F3n: Venezuela.",
                descripcion2: "Sede Principal: Caracas. 36 sucursales y oficinas a nivel nacional.",
                descripcion3: "Rese\u00F1a: 30 a\u00F1os de exitosa trayectoria en el mercado venezolano hacen de Multinacional de Seguros una referencia en la industria aseguradora del pa\u00EDs. Responde sus compromisos con solvencia, seriedad y confianza, a la vez que proyecta sus operaciones hacia el logro de la excelencia empresarial basada en la calidad de su gente.",
                descripcion4: "Productos: vida, salud, auto, patrimoniales.",
                descripcion5: " "
            },
            {
                id: 4,
                imageUrl: 'assets/gif/LOGO-INTERBANK.GIF',
                title: 'Interbank',
                code_pais: "03",
                pais: 'Venezuela',
                descripcion1: "Ubicaci\u00F3n: Venezuela.",
                descripcion2: "Sede Principal: Caracas. 2 sucursales y oficinas a nivel nacional.",
                descripcion3: "Rese\u00F1a: Desde 1999, InterBank Seguros ha laborado una reconocida trayectoria de \u00E9xitos en el sector asegurador venezolano, apalancada por un capital humano competente y por una robusta infraestructura tecnol\u00F3gica. Compromiso, Respeto y Excelente Calidad de Servicio para nuestros Clientes internos y externos.",
                descripcion4: "Productos: Auto, vida, salud, patrimoniales.",
                descripcion5: " "
            },
            {
                id: 5,
                imageUrl: 'assets/gif/LOGO-GUAYANA.GIF',
                title: 'Seguros Guayana',
                code_pais: "03",
                pais: 'Venezuela',
                descripcion1: "Ubicaci\u00F3n: Venezuela.",
                descripcion2: "Sede Principal: Puerto Ordaz. 11 sucursales y oficinas a nivel nacional.",
                descripcion3: "Rese\u00F1a: Con cuatro d\u00E9cadas de \"Compromiso a toda Prueba\" en el mercado asegurador venezolano, Seguros Guayana brinda protecci\u00F3n a las personas y a su patrimonio, de la mano de un equipo humano calificado y con gran vocaci\u00F3n de servicio. Seriedad, Solidez, Responsabilidad y Compromiso.",
                descripcion4: "Productos: Salud, personas, autom\u00F3vil, patrimoniales y fianzas.",
                descripcion5: " "
            },
            {
                id: 6,
                imageUrl: 'assets/gif/LOGO-ASKA.GIF',
                title: 'ASKA',
                code_pais: "04",
                pais: 'Curazao',
                descripcion1: "Ubicaci\u00F3n: Curazao.",
                descripcion2: "Sede Principal: Curazao.",
                descripcion3: "Rese\u00F1a: Veinte a\u00F1os asumiendo riesgos en Curazao, Bonaire y Saint Martin. Se ha posicionado entre las primeras opciones del mercado por la r\u00E1pida respuesta que brinda a sus Asegurados, el excelente servicio y la flexibilidad para adaptarse a la realidad, con productos en constante evoluci\u00F3n para satisfacer al m\u00E1ximo a sus clientes.",
                descripcion4: "Productos: Vida, funerario, auto, patrimoniales, viajes.",
                descripcion5: " "
            },
        ];
        this.paises = [
            {
                code_pais: "01",
                pais: 'Panamá',
                imageUrl: 'assets/pais/panama2.png'
            },
            {
                code_pais: "02",
                pais: 'Puerto Rico',
                imageUrl: 'assets/pais/puerto-rico.png',
            },
            {
                code_pais: "03",
                pais: 'Venezuela',
                imageUrl: 'assets/pais/venezuela.png'
            },
            {
                code_pais: "04",
                pais: 'Curazao',
                imageUrl: 'assets/pais/curazao.png'
            },
        ];
        //screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    PaisesPage.prototype.ionViewDidLoad = function () {
        this.viewCtrl.setBackButtonText('');
    };
    PaisesPage.prototype.goToprincipal = function (code_pais) {
        var itemsm = [];
        var contador = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.code_pais === code_pais) {
                itemsm.push(item);
                contador++;
            }
        }
        if (contador > 1) {
            this.navCtrl.push('CompaniasPage', itemsm);
        }
        else {
            this.navCtrl.push('DetallecompaniasPage', itemsm);
        }
    };
    PaisesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paises',template:/*ion-inline-start:"C:\ionic3\hawaiiweb\src\pages\paises\paises.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title >\n        Paises\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen elestic-header>  \n  <div class="buttons">\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of paises">\n      <ion-item class="movie-info" block (click)="goToprincipal(item.code_pais)"  >\n        <ion-thumbnail item-start>\n          <img [src]="item.imageUrl">\n        </ion-thumbnail>\n        {{item.pais}}\n        <!--<h2>{{item.pais}}</h2>-->\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\ionic3\hawaiiweb\src\pages\paises\paises.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], PaisesPage);
    return PaisesPage;
}());

//# sourceMappingURL=paises.js.map

/***/ })

});
//# sourceMappingURL=2.js.map