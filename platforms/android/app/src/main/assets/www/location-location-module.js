(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "./src/app/location/location.module.ts":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");







var routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]
    }
];
var LocationPageModule = /** @class */ (function () {
    function LocationPageModule() {
    }
    LocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
        })
    ], LocationPageModule);
    return LocationPageModule;
}());



/***/ }),

/***/ "./src/app/location/location.page.html":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-row>\n    <ion-col text-start padding-top>\n      <ion-title>Enter Your Track Mobile Data</ion-title>\n    </ion-col>\n    <ion-col text-end>\n      <ion-button (click)=\"loadMap()\" shape=\"round\" fill=\"outline\">\n        <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\n        Where !s !t\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n  <ion-row>\n    <ion-col>\n        <ion-item>\n          <ion-label floating>MCC</ion-label>\n          <ion-input [(ngModel)]=\"mcc\" type=\"text\" value=\"\" ></ion-input>\n        </ion-item>\n    </ion-col>\n    <ion-col>\n     <ion-item>\n          <ion-label floating>MNC</ion-label>\n          <ion-input [(ngModel)]=\"mnc\" type=\"text\" value=\"\" ></ion-input>\n        </ion-item>\n    </ion-col>\n    <ion-col>\n<ion-item>\n          <ion-label floating>LAC</ion-label>\n          <ion-input [(ngModel)]=\"lac\" type=\"text\" value=\"\" ></ion-input>\n        </ion-item>    </ion-col>\n    <ion-col>\n      <ion-item>\n          <ion-label floating>CELL ID</ion-label>\n          <ion-input [(ngModel)]=\"cellId\" type=\"text\" value=\"\" ></ion-input>\n        </ion-item>\n    </ion-col>\n  </ion-row>\n   </ion-grid>\n\n\n<div #map class=\"map\"></div>\n    \n  <!--  \n  <div class=\"map-wrapper\">\n   <div #map id=\"map\"></div>\n  </div>\n  <div id=\"address\">\n    <span>{{address}}</span>\n  </div> </div>\n  -->\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/location/location.page.scss":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  background: grey;\n  height: 100vh;\n  width: 100vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZGhha3Jpc2huYS9Eb2N1bWVudHMvTXlXb3Jrcy9PZmZpY2VMb2NhbEhvc3QvbXlPZmZpY2VXb3Jrcy9zdHVmZjIvZ2VvTG9jYXRpb24vc3JjL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm1hcCB7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/location/location.page.ts":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var H = window['H'];
var LocationPage = /** @class */ (function () {
    function LocationPage(http, geolocation) {
        var _this = this;
        this.http = http;
        // get current location 
        geolocation.getCurrentPosition().then(function (location) {
            //console.log(location.coords);
            // based on the current location forming the data  to the  json  
            _this.mapData({ latitude: location.coords.latitude, longitude: location.coords.longitude });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    LocationPage.prototype.loadMap = function () {
        /*  This function will get the data from APi call
            Based on the mcc,mnc,cid,lac
 
 
        */
        var _this = this;
        this.http.post('http://localhost:3000/mobileCodes', { mcc: this.mcc,
            mnc: this.mnc,
            lac: this.lac,
            cid: this.cellId
        }).subscribe(function (data) {
            console.log("POST Request is successful ", data);
            /*accuracy: 603
              latitude: 17.454144
              longitude: 78.541275*/
            _this.mapData(data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    LocationPage.prototype.mapData = function (val) {
        var coordsData = { lat: val.latitude, lng: val.longitude };
        var platform = new H.service.Platform({
            app_id: 'Xs9OgBdukNyvJbPrJjS7',
            app_code: 'rveTk4vWm3IgrJo4qdb_0g',
            useCIT: true,
            useHTTPS: true
        });
        var defaultLayers = platform.createDefaultLayers({
            tileSize: 256 * Math.min(2, devicePixelRatio),
            ppi: devicePixelRatio > 1 ? 320 : 72
        });
        var map = new H.Map(this.mapContainer.nativeElement, defaultLayers.normal.map, {
            center: coordsData,
            pixelRatio: Math.min(2, devicePixelRatio),
            zoom: 10
        });
        var marker = new H.map.Marker(coordsData);
        map.addObject(marker);
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        var ui = H.ui.UI.createDefault(map, defaultLayers);
        return map;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LocationPage.prototype, "mapContainer", void 0);
    LocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.page.html */ "./src/app/location/location.page.html"),
            styles: [__webpack_require__(/*! ./location.page.scss */ "./src/app/location/location.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], LocationPage);
    return LocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=location-location-module.js.map