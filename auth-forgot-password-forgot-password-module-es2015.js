(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"auth-box private-card\">\r\n    <div class=\"auth-logo\">\r\n      <h1 class=\"text-primary\">WMS</h1>\r\n    </div>\r\n    <div class=\"auth-heading\">\r\n      <h1 class=\"heading\">Reset your password</h1>\r\n      <p>Please enter the email address you'd like your password reset information sent to.</p>\r\n      <div *ngIf=\"formErrors.success\" class=\"alert alert-success alert-dismissible\">\r\n        <a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n        <span [innerHTML]=\"formErrors.success\"> </span>\r\n      </div>\r\n      <div *ngIf=\"formErrors.error\" class=\"alert alert-danger alert-dismissible\">\r\n        <a class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n        <span [innerHTML]=\"formErrors.error\"> </span>\r\n      </div>\r\n    </div>\r\n    <form class=\"form-signin\" [formGroup]=\"forgotForm\" (ngSubmit)=\"submitForm()\" >\r\n      <div class=\"form-group field-loginform-email required\">\r\n        <label class=\"control-label\">Email Address</label>\r\n        <input type=\"text\" [formControl]=\"forgotForm.controls['email']\" class=\"form-control input-lg\"\r\n          placeholder=\"Email ID\">\r\n      </div>\r\n      <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\"\r\n        class=\"btn btn-primary btn-lg btn-block m-top-24\">Reset Password</button>\r\n      <p class=\"text-muted m-top-24 m-bottom-0 text-center\">Remember Password?<a routerLink=\"/login\"> Log In</a></p>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");








let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(router, authService, fBuilder, config, dataService) {
        this.router = router;
        this.authService = authService;
        this.fBuilder = fBuilder;
        this.config = config;
        this.dataService = dataService;
        this.formErrors = {
            error: null,
            success: null
        };
        this.showLoader = false;
        this.currentCompany = null;
        this.config.config = { showHeader: false };
        this.forgotForm = this.fBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, src_app_common__WEBPACK_IMPORTED_MODULE_6__["validateEmailFormControl"]])],
        });
        this.dataService.currentCompany.subscribe((response) => {
            this.currentCompany = response;
        });
    }
    ngOnInit() { }
    submitForm() {
        if (this.forgotForm.valid) {
            this.showLoader = true;
            const formData = {
                email: this.forgotForm.value.email,
                company_id: this.currentCompany ? this.currentCompany.company_id : null,
            };
            this.authService.forgotPassword(formData).subscribe((response) => {
                this.showLoader = false;
                if (response.success) {
                    this.formErrors.success = `* ${response.data.message}`;
                    src_app_common__WEBPACK_IMPORTED_MODULE_6__["CommonFunction"].resetForm(this.forgotForm);
                    setTimeout(() => {
                        this.router.navigateByUrl('/login');
                    }, 3000);
                }
                else {
                    this.formErrors.error = `* ${response.error}`;
                }
            }, (error) => {
                this.formErrors.error = `* ${error.error}`;
                this.showLoader = false;
            });
        }
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_service_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }
];
ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/forgot-password/forgot-password.component.html")).default
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/auth/forgot-password/forgot-password.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/forgot-password/forgot-password.module.ts ***!
  \****************************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");








const routes = [
    {
        path: '',
        component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
        data: { title: 'forgot_password' }
    }
];
let ForgotPasswordModule = class ForgotPasswordModule {
};
ForgotPasswordModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__["FormValidationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        providers: [
            src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        ]
    })
], ForgotPasswordModule);



/***/ })

}]);
//# sourceMappingURL=auth-forgot-password-forgot-password-module-es2015.js.map