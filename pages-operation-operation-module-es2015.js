(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-operation-operation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <form class=\"form-horizontal\" role=\"form\">\r\n            <div class=\"card-body\">\r\n                <div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Transfer Order No.</label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">From Bin <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <select class=\"form-control\">\r\n                                <option>Select Bin</option>\r\n                                <option>B1</option>\r\n                                <option>B2</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">SKU <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <select class=\"form-control\">\r\n                                <option>Select Product</option>\r\n                                <option>Zone A</option>\r\n                                <option>Zone B</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Total Quantity\r\n                            <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">To Bin <em>*</em></label>\r\n                        <div class=\"col-md-5\">\r\n                            <select class=\"form-control\">\r\n                                <option>Select Bin</option>\r\n                                <option>B1</option>\r\n                                <option>B2</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3\">Location</label>\r\n                        <div class=\"col-md-5\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"\" disabled>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n                <button type=\"button\" class=\"btn btn-light\" routerLink=\"/inbound/registeration\">Cancel</button>\r\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n            </div>\r\n        </form>\r\n        \r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header border-b\">\r\n        <div class=\"row m-0\">\r\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\" id=\"productStock-tab\" data-toggle=\"tab\" href=\"#productStock\" role=\"tab\"\r\n                        aria-controls=\"productStock\" aria-selected=\"true\">Product Stock</a>\r\n                </li>\r\n\r\n            </ul>\r\n            <div class=\"tab-content\" id=\"myTabContent\">\r\n                <div class=\"tab-pane fade show active\" id=\"productStock\" role=\"tabpanel\"\r\n                    aria-labelledby=\"productStock-tab\">\r\n                    <div class=\"table-responsive-md mt-3\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"thead-dark\">\r\n                                <tr>\r\n                                    <th class=\"align-items-center d-flex\">\r\n                                        <div class=\"form-check form-check-inline mr-0\">\r\n                                            <div class=\"checkbox-container\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"all\">\r\n                                                <span class=\"checkmark\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </th>\r\n                                    <th>Article</th>\r\n                                    <th>Serial No</th>\r\n                                    <th>Description</th>\r\n                                    <th>Bin</th>\r\n                                    <th>Bin Location</th>\r\n                                    <th>Stock In Date</th>\r\n                                    <th>Stock Out Date</th>\r\n                                    <th>Status</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td class=\"align-items-center d-flex\">\r\n                                        <div class=\"form-check form-check-inline mr-0\">\r\n                                            <div class=\"checkbox-container\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"all\">\r\n                                                <span class=\"checkmark\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>MC-1579177226867</td>\r\n                                    <td>00584</td>\r\n                                    <td>lorem ispum lorem ispum</td>\r\n                                    <td class=\"text-center\">500</td>\r\n                                    <td>Johnberg</td>\r\n                                    <td>18/01/2020</td>\r\n                                    <td>20/01/2020</td>\r\n                                    <td><span class=\"badge badge-success\">Success</span></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"align-items-center d-flex\">\r\n                                        <div class=\"form-check form-check-inline mr-0\">\r\n                                            <div class=\"checkbox-container\">\r\n                                                <input class=\"form-check-input\" type=\"checkbox\" value=\"all\">\r\n                                                <span class=\"checkmark\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </td>\r\n                                    <td>MC-1579177226867</td>\r\n                                    <td>00584</td>\r\n                                    <td>lorem ispum lorem ispum</td>\r\n                                    <td class=\"text-center\">500</td>\r\n                                    <td>Johnberg</td>\r\n                                    <td>18/01/2020</td>\r\n                                    <td>20/01/2020</td>\r\n                                    <td><span class=\"badge badge-warning text-white\">Pending</span></td>\r\n                                </tr>\r\n\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdGlvbi9hZGQtYmluLXRyYW5zZmVyL2FkZC1iaW4tdHJhbnNmZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddBinTransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBinTransferComponent", function() { return AddBinTransferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddBinTransferComponent = class AddBinTransferComponent {
    constructor() {
        this.PageTitle = "Generate Bin Transfer Order";
    }
    ngOnInit() {
    }
};
AddBinTransferComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-bin-transfer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-bin-transfer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-bin-transfer.component.css */ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.css")).default]
    })
], AddBinTransferComponent);



/***/ }),

/***/ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/operation/add-bin-transfer/add-bin-transfer.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AddBinTransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBinTransferModule", function() { return AddBinTransferModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-bin-transfer.component */ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.component.ts");





const routes = [
    {
        path: '',
        component: _add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__["AddBinTransferComponent"]
    }
];
let AddBinTransferModule = class AddBinTransferModule {
};
AddBinTransferModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_bin_transfer_component__WEBPACK_IMPORTED_MODULE_4__["AddBinTransferComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], AddBinTransferModule);



/***/ }),

/***/ "./src/app/pages/operation/operation-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/operation/operation-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OperationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationRoutingModule", function() { return OperationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _product_stock_product_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-stock/product-stock.component */ "./src/app/pages/operation/product-stock/product-stock.component.ts");




const routes = [
    {
        path: 'search-product',
        component: _product_stock_product_stock_component__WEBPACK_IMPORTED_MODULE_3__["ProductStockComponent"]
    },
    {
        path: 'add-bin-transfer',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./add-bin-transfer/add-bin-transfer.module */ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.module.ts")).then(m => m.AddBinTransferModule)
    },
    {
        path: 'transfer-order',
        loadChildren: () => __webpack_require__.e(/*! import() | transfer-order-transfer-order-module */ "transfer-order-transfer-order-module").then(__webpack_require__.bind(null, /*! ./transfer-order/transfer-order.module */ "./src/app/pages/operation/transfer-order/transfer-order.module.ts")).then(m => m.TransferOrderModule)
    }
];
let OperationRoutingModule = class OperationRoutingModule {
};
OperationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OperationRoutingModule);



/***/ }),

/***/ "./src/app/pages/operation/operation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/operation/operation.module.ts ***!
  \*****************************************************/
/*! exports provided: OperationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationModule", function() { return OperationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _operation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation-routing.module */ "./src/app/pages/operation/operation-routing.module.ts");
/* harmony import */ var _product_stock_product_stock_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-stock/product-stock.module */ "./src/app/pages/operation/product-stock/product-stock.module.ts");
/* harmony import */ var _add_bin_transfer_add_bin_transfer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-bin-transfer/add-bin-transfer.module */ "./src/app/pages/operation/add-bin-transfer/add-bin-transfer.module.ts");






let OperationModule = class OperationModule {
};
OperationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _operation_routing_module__WEBPACK_IMPORTED_MODULE_3__["OperationRoutingModule"],
            _product_stock_product_stock_module__WEBPACK_IMPORTED_MODULE_4__["ProductStockModule"],
            _add_bin_transfer_add_bin_transfer_module__WEBPACK_IMPORTED_MODULE_5__["AddBinTransferModule"]
        ]
    })
], OperationModule);



/***/ }),

/***/ "./src/app/pages/operation/product-stock/product-stock.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/operation/product-stock/product-stock.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdGlvbi9wcm9kdWN0LXN0b2NrL3Byb2R1Y3Qtc3RvY2suY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/operation/product-stock/product-stock.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/operation/product-stock/product-stock.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockComponent", function() { return ProductStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProductStockComponent = class ProductStockComponent {
    constructor() {
        this.PageTitle = "Product Stock";
    }
    ngOnInit() {
    }
};
ProductStockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-stock',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-stock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-stock.component.css */ "./src/app/pages/operation/product-stock/product-stock.component.css")).default]
    })
], ProductStockComponent);



/***/ }),

/***/ "./src/app/pages/operation/product-stock/product-stock.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/operation/product-stock/product-stock.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProductStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockModule", function() { return ProductStockModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _product_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-stock.component */ "./src/app/pages/operation/product-stock/product-stock.component.ts");




let ProductStockModule = class ProductStockModule {
};
ProductStockModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_stock_component__WEBPACK_IMPORTED_MODULE_3__["ProductStockComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], ProductStockModule);



/***/ })

}]);
//# sourceMappingURL=pages-operation-operation-module-es2015.js.map