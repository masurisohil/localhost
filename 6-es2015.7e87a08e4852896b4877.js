(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{HOh6:function(e,t,r){"use strict";var n=r("xgIS"),o=r("vkgz"),i=r("jtHE"),s=r("fXoL");r.d(t,"a",(function(){return a}));let a=(()=>{class e{constructor(e){this.host=e,this.submit$=Object(n.a)(this.element,"submit").pipe(Object(o.a)(()=>{!1===this.element.classList.contains("submitted")&&this.element.classList.add("submitted")}),function(e,t,r){let n;return n={bufferSize:1,windowTime:void 0,refCount:!1,scheduler:void 0},e=>e.lift(function({bufferSize:e=Number.POSITIVE_INFINITY,windowTime:t=Number.POSITIVE_INFINITY,refCount:r,scheduler:n}){let o,s,a=0,c=!1,l=!1;return function(u){a++,o&&!c||(c=!1,o=new i.a(e,t,n),s=u.subscribe({next(e){o.next(e)},error(e){c=!0,o.error(e)},complete(){l=!0,s=void 0,o.complete()}}));const d=o.subscribe(this);this.add(()=>{a--,d.unsubscribe(),s&&!l&&r&&0===a&&(s.unsubscribe(),s=void 0,o=void 0)})}}(n))}())}get element(){return this.host.nativeElement}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(s.l))},e.\u0275dir=s.Hb({type:e,selectors:[["form"]]}),e})()},SFaS:function(e,t,r){"use strict";r.r(t);var n=r("ofXK"),o=r("3Pt+"),i=r("fXoL"),s=r("tyNb"),a=r("Q05f"),c=r("HOh6"),l=r("UaFz");let u=(()=>{class e{constructor(e,t,r,n){this.router=e,this.activatedRoute=t,this.fb=r,this.companyService=n,this.PageTitle="Company",this.loadingState=!1,this.showLoader=!1,this.formErrors={company_email:null,apierror:null},this.isEditing=!1,this.editId=null,this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({company_name:[null,o.t.compose([o.t.required])],company_email:[null,o.t.compose([o.t.required,o.t.email])]})}ngOnInit(){this.isEditing&&this.getEditObject()}getEditObject(){this.companyService.getCompanyById(this.editId).subscribe(e=>{e.success?this.addForm.patchValue(e.data):this.router.navigateByUrl("/company")})}submitForm(e){if(e.valid){this.showLoader=!0;const t=new FormData;t.append("company_name",e.value.company_name),t.append("company_email",e.value.company_email),this.isEditing?this.companyService.editCompany(this.editId,t).subscribe(e=>{this.showLoader=!1,e.success?this.router.navigateByUrl("/company"):e.error.map(t=>{t.hasOwnProperty("company_email")?this.formErrors.company_email=t.company_email:this.formErrors.apierror=`* ${e.error}`})},e=>{this.showLoader=!1}):this.companyService.addCompany(t).subscribe(e=>{this.showLoader=!1,e.success?this.router.navigateByUrl("/company"):e.error.map(t=>{t.hasOwnProperty("company_email")?this.formErrors.company_email=t.company_email:this.formErrors.apierror=`* ${e.error}`})},e=>{this.showLoader=!1})}}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(s.e),i.Mb(s.a),i.Mb(o.e),i.Mb(a.a))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-company-add"]],decls:29,vars:4,consts:[[1,"container-fluid"],[1,"page-header","border-b"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group","row"],[1,"control-label","text-md-right","col-md-4","col-lg-3"],[1,"col-md-5"],["type","text","placeholder","",1,"form-control",3,"formControl"],[1,"text-right","border-top","py-4","mt-5","card-footer"],["type","button","routerLink","/company",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2"]],template:function(e,t){1&e&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"div",2),i.Sb(3,"div",3),i.Sb(4,"h2",4),i.Bc(5),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(6,"div",5),i.Sb(7,"form",6),i.ac("ngSubmit",(function(){return t.submitForm(t.addForm)})),i.Sb(8,"div",7),i.Sb(9,"div"),i.Sb(10,"div",8),i.Sb(11,"label",9),i.Bc(12,"Name "),i.Sb(13,"em"),i.Bc(14," *"),i.Rb(),i.Rb(),i.Sb(15,"div",10),i.Nb(16,"input",11),i.Rb(),i.Rb(),i.Sb(17,"div",8),i.Sb(18,"label",9),i.Bc(19,"Email "),i.Sb(20,"em"),i.Bc(21," *"),i.Rb(),i.Rb(),i.Sb(22,"div",10),i.Nb(23,"input",11),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(24,"div",12),i.Sb(25,"button",13),i.Bc(26,"Cancel"),i.Rb(),i.Sb(27,"button",14),i.Bc(28,"Submit"),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&e&&(i.zb(5),i.Cc(t.PageTitle),i.zb(2),i.ic("formGroup",t.addForm),i.zb(9),i.ic("formControl",t.addForm.controls.company_name),i.zb(7),i.ic("formControl",t.addForm.controls.company_email))},directives:[o.v,o.p,c.a,o.j,o.c,o.o,o.g,l.a,s.f],encapsulation:2}),e})();var d=r("Vr6k");r.d(t,"CompanyAddModule",(function(){return b}));const m=[{path:"",component:u,data:{title:"add_company"}}];let b=(()=>{class e{}return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[n.b,o.s,d.a,s.i.forChild(m)]]}),e})()},UaFz:function(e,t,r){"use strict";var n=r("fXoL");let o=(()=>{class e{constructor(e){this.cdr=e,this._hide=!0}set text(e){e!==this._text&&(this._text=e,this._hide=!e,this.cdr.detectChanges())}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(n.h))},e.\u0275cmp=n.Gb({type:e,selectors:[["app-control-error"]],inputs:{text:"text"},decls:1,vars:3,consts:[[1,"help","is-danger",3,"innerHTML"]],template:function(e,t){1&e&&n.Nb(0,"p",0),2&e&&(n.Eb("hide",t._hide),n.ic("innerHTML",t._text,n.uc))},encapsulation:2,changeDetection:0}),e})();var i=r("EY2u"),s=r("VRyK");const a={first_name:{required:"* Please enter first name"},last_name:{required:"* Please enter last name"},email:{required:"* Please enter email",email:"* Please enter valid email",validateEmail:"* Please enter valid email"},phone_number:{required:"Please enter phone number",minlength:"Please enter at least 8 digits",maxlength:"Please enter at least 18 digits"},password:{required:"* Please enter password",pattern:"* Password must contains at least 6 characters"},confirm_password:{required:"* Please enter confirm password",validatePassword:"* Your Password is not matched"},tree_level_name:{required:"* Please enter tree level name"},max_node:{required:"* Please enter max node"},tree_order:{required:"* Please enter tree order"},tree_name:{required:"* Please enter tree name"},tree_level_id:{required:"* Please enter tree level"},user_type:{required:"* Please enter user type"},wallet_name:{required:"* Please enter wallet name"},currency_id:{required:"* Please select currency"},wallet_type:{required:"* Please select wallet type"},otp:{required:"* Please enter OTP"},login_pin:{required:"* Please enter PIN",maxlength:"Pin Max 4 Digit",minlength:"Please enter at least 4 digits"},bank_name:{required:"* Please enter bank name"},bank_code:{required:"* Please enter code",maxlength:"Code Max 4 Digit",minlength:"Please enter at least 4 digits"},amount:{required:"* Please enter amount",max:"amount max balance"},sms:{required:"* Please enter content"},webhook:{required:"* Please enter content"},device_number:{required:"* Please enter device number"},name:{required:"* Please enter name"},location:{required:"* Please enter location"},group_id:{required:"* Please select group"}};let c=(()=>{class e{constructor(e){this.vcr=e}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(n.N))},e.\u0275dir=n.Hb({type:e,selectors:[["","controlErrorContainer",""]]}),e})();var l=r("HOh6"),u=r("3Pt+");r.d(t,"a",(function(){return d}));let d=(()=>{class e{constructor(e,t,r,n,o){this.vcr=e,this.resolver=t,this.form=n,this.controlDir=o,this.customErrors={},this.container=r?r.vcr:e,this.submit$=this.form?this.form.submit$:i.a}ngOnInit(){this.control&&this.control.valueChanges&&Object(s.a)(this.control.valueChanges,this.submit$).subscribe(e=>{const t=this.control.errors;if(t){const e=this.getFormControlName(this.control),r=Object.keys(t)[0],n=a[e];null!=n&&""!==n&&this.setError(n[r])}else this.ref&&this.setError(null)})}getFormControlName(e){const t=e.parent.controls;return Object.keys(t).find(r=>e===t[r])||null}get control(){return this.controlDir.control}setError(e){if(!this.ref){const e=this.resolver.resolveComponentFactory(o);this.ref=this.container.createComponent(e)}this.ref.instance.text=e}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(n.N),n.Mb(n.j),n.Mb(c,8),n.Mb(l.a,9),n.Mb(u.n))},e.\u0275dir=n.Hb({type:e,selectors:[["","formControl",""],["","formControlName",""]],inputs:{customErrors:"customErrors"}}),e})()},Vr6k:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("ofXK"),o=r("3Pt+"),i=r("fXoL");let s=(()=>{class e{}return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[n.b,o.l]]}),e})()},xgIS:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("HDdC"),o=r("DH7j"),i=r("n6bG"),s=r("lJxs");function a(e,t,r,c){return Object(i.a)(r)&&(c=r,r=void 0),c?a(e,t,r).pipe(Object(s.a)(e=>Object(o.a)(e)?c(...e):c(e))):new n.a(n=>{!function e(t,r,n,o,i){let s;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(t)){const e=t;t.addEventListener(r,n,i),s=()=>e.removeEventListener(r,n,i)}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(t)){const e=t;t.on(r,n),s=()=>e.off(r,n)}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(t)){const e=t;t.addListener(r,n),s=()=>e.removeListener(r,n)}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(let s=0,a=t.length;s<a;s++)e(t[s],r,n,o,i)}o.add(s)}(e,t,(function(e){n.next(arguments.length>1?Array.prototype.slice.call(arguments):e)}),n,r)})}}}]);