(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{HOh6:function(e,t,r){"use strict";var i=r("xgIS"),n=r("vkgz"),o=r("jtHE"),s=r("fXoL");r.d(t,"a",(function(){return a}));let a=(()=>{class e{constructor(e){this.host=e,this.submit$=Object(i.a)(this.element,"submit").pipe(Object(n.a)(()=>{!1===this.element.classList.contains("submitted")&&this.element.classList.add("submitted")}),function(e,t,r){let i;return i={bufferSize:1,windowTime:void 0,refCount:!1,scheduler:void 0},e=>e.lift(function({bufferSize:e=Number.POSITIVE_INFINITY,windowTime:t=Number.POSITIVE_INFINITY,refCount:r,scheduler:i}){let n,s,a=0,c=!1,d=!1;return function(l){a++,n&&!c||(c=!1,n=new o.a(e,t,i),s=l.subscribe({next(e){n.next(e)},error(e){c=!0,n.error(e)},complete(){d=!0,s=void 0,n.complete()}}));const b=n.subscribe(this);this.add(()=>{a--,b.unsubscribe(),s&&!d&&r&&0===a&&(s.unsubscribe(),s=void 0,n=void 0)})}}(i))}())}get element(){return this.host.nativeElement}}return e.\u0275fac=function(t){return new(t||e)(s.Mb(s.l))},e.\u0275dir=s.Hb({type:e,selectors:[["form"]]}),e})()},PCNd:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r("ofXK"),n=r("fXoL");let o=(()=>{class e{}return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[i.b]]}),e})()},UaFz:function(e,t,r){"use strict";var i=r("fXoL");let n=(()=>{class e{constructor(e){this.cdr=e,this._hide=!0}set text(e){e!==this._text&&(this._text=e,this._hide=!e,this.cdr.detectChanges())}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(i.h))},e.\u0275cmp=i.Gb({type:e,selectors:[["app-control-error"]],inputs:{text:"text"},decls:1,vars:3,consts:[[1,"help","is-danger",3,"innerHTML"]],template:function(e,t){1&e&&i.Nb(0,"p",0),2&e&&(i.Eb("hide",t._hide),i.jc("innerHTML",t._text,i.vc))},encapsulation:2,changeDetection:0}),e})();var o=r("EY2u"),s=r("VRyK");const a={first_name:{required:"* Please enter first name"},last_name:{required:"* Please enter last name"},email:{required:"* Please enter email",email:"* Please enter valid email",validateEmail:"* Please enter valid email"},phone_number:{required:"Please enter phone number",minlength:"Please enter at least 8 digits",maxlength:"Please enter at least 18 digits"},password:{required:"* Please enter password",pattern:"* Password must contains at least 6 characters"},confirm_password:{required:"* Please enter confirm password",validatePassword:"* Your Password is not matched"},tree_level_name:{required:"* Please enter tree level name"},max_node:{required:"* Please enter max node"},tree_order:{required:"* Please enter tree order"},tree_name:{required:"* Please enter tree name"},tree_level_id:{required:"* Please enter tree level"},user_type:{required:"* Please enter user type"},wallet_name:{required:"* Please enter wallet name"},currency_id:{required:"* Please select currency"},wallet_type:{required:"* Please select wallet type"},otp:{required:"* Please enter OTP"},login_pin:{required:"* Please enter PIN",maxlength:"Pin Max 4 Digit",minlength:"Please enter at least 4 digits"},bank_name:{required:"* Please enter bank name"},bank_code:{required:"* Please enter code",maxlength:"Code Max 4 Digit",minlength:"Please enter at least 4 digits"},amount:{required:"* Please enter amount",max:"amount max balance"},sms:{required:"* Please enter content"},webhook:{required:"* Please enter content"},device_number:{required:"* Please enter device number"},name:{required:"* Please enter name"},location:{required:"* Please enter location"},group_id:{required:"* Please select group"}};let c=(()=>{class e{constructor(e){this.vcr=e}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(i.N))},e.\u0275dir=i.Hb({type:e,selectors:[["","controlErrorContainer",""]]}),e})();var d=r("HOh6"),l=r("3Pt+");r.d(t,"a",(function(){return b}));let b=(()=>{class e{constructor(e,t,r,i,n){this.vcr=e,this.resolver=t,this.form=i,this.controlDir=n,this.customErrors={},this.container=r?r.vcr:e,this.submit$=this.form?this.form.submit$:o.a}ngOnInit(){this.control&&this.control.valueChanges&&Object(s.a)(this.control.valueChanges,this.submit$).subscribe(e=>{const t=this.control.errors;if(t){const e=this.getFormControlName(this.control),r=Object.keys(t)[0],i=a[e];null!=i&&""!==i&&this.setError(i[r])}else this.ref&&this.setError(null)})}getFormControlName(e){const t=e.parent.controls;return Object.keys(t).find(r=>e===t[r])||null}get control(){return this.controlDir.control}setError(e){if(!this.ref){const e=this.resolver.resolveComponentFactory(n);this.ref=this.container.createComponent(e)}this.ref.instance.text=e}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(i.Mb(i.N),i.Mb(i.j),i.Mb(c,8),i.Mb(d.a,9),i.Mb(l.n))},e.\u0275dir=i.Hb({type:e,selectors:[["","formControl",""],["","formControlName",""]],inputs:{customErrors:"customErrors"}}),e})()},Vr6k:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r("ofXK"),n=r("3Pt+"),o=r("fXoL");let s=(()=>{class e{}return e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({factory:function(t){return new(t||e)},imports:[[i.b,n.l]]}),e})()},x2YT:function(e,t,r){"use strict";r.r(t);var i=r("ofXK"),n=r("tyNb"),o=r("Jvtu"),s=r("3Pt+"),a=r("Vr6k"),c=r("PCNd"),d=r("zzOR"),l=r("fXoL"),b=r("ICGj"),u=r("AwSQ"),m=r("HOh6"),p=r("UaFz");function f(e,t){if(1&e&&(l.Sb(0,"tr",33),l.Sb(1,"td"),l.Sb(2,"div",34),l.Cc(3),l.Rb(),l.Rb(),l.Sb(4,"td"),l.Nb(5,"input",35),l.Rb(),l.Sb(6,"td"),l.Nb(7,"input",36),l.Rb(),l.Sb(8,"td",23),l.Nb(9,"input",37),l.Rb(),l.Rb()),2&e){const e=t.index;l.jc("formGroupName",e),l.zb(3),l.Dc(e+1)}}let h=(()=>{class e{constructor(e,t,r,i,n,o){this.activatedRoute=e,this.pickListService=t,this.location=r,this.fb=i,this.router=n,this.dataService=o,this.PageTitle="Genrate PickList ",this.exampleOptions={defaultDate:new Date,dateFormat:d.a,noCalendar:!0},this.orderDetails={},this.productList=[],this.date_format="M/d/yy",this.addForm=this.fb.group({picked_by:[null,s.t.compose([s.t.required])],notes:[null],unload_detail:this.fb.array([])}),this.activatedRoute.snapshot.paramMap.get("id")&&(this.viewId=this.activatedRoute.snapshot.paramMap.get("id"))}ngOnInit(){this.dataService.currentCompany.subscribe(e=>{e&&(this.timezone=e.timezone.label,this.time_format=e.time_format.label,this.date_format=e.date_format.label,this.currentCompany=e)}),this.getObject()}back(){this.location.back()}getObject(){this.pickListService.getPickListReportsDetails(this.viewId).subscribe(e=>{e.success?(this.orderDetails=e.data.order_detail,this.productList=e.data.product,this.setData()):(this.orderDetails={},this.productList=[])},e=>{this.orderDetails={},this.productList=[]})}setData(){if(this.addForm.patchValue({notes:this.orderDetails.notes,picked_by:this.orderDetails.picked_by}),this.productList.length>0){const e=this.addForm.get("unload_detail");for(let t=0;t<=e.length+1;t++)e.removeAt(t);this.productList.forEach((t,r)=>{e.push(this.fb.group({pick_list_id:t.pick_list_id,sku_no:t.sku_no,product_name:t.product_name,product_qty:t.product_qty}))})}}submitForm(e){if(e.valid){this.showLoader=!0;const t=new FormData;t.append("picked_by",e.value.picked_by),this.pickListService.getPickListSubmitReports(this.viewId,t).subscribe(e=>{this.showLoader=!1,e.success&&this.back()},e=>{this.showLoader=!1})}}addNewRow(){this.addForm.get("unload_detail").push(this.initRows())}initRows(){return new s.i({pick_list_id:new s.f(""),sku_no:new s.f(""),product_name:new s.f(""),product_qty:new s.f(0,s.t.compose([s.t.required]))})}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(n.a),l.Mb(b.a),l.Mb(i.h),l.Mb(s.e),l.Mb(n.e),l.Mb(u.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["app-generate-pick-list"]],decls:75,vars:12,consts:[[1,"container-fluid"],[1,"page-header","border-b"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],[1,"card-body"],["role","form",1,"form-horizontal","pb-4",3,"formGroup","ngSubmit"],[1,"row","mt-3"],[1,"col-7","pl-3"],[1,"col-6"],[1,"form-group"],[1,"control-label","text-md-right"],[1,""],["type","text","disabled","",1,"form-control",3,"value"],[1,"date-picker"],["disabled","",3,"setDate","config"],[1,"date-picker-icon"],[1,"fa","fa-calendar"],["rows","2",1,"form-control",3,"formControl"],[1,"row","mt-4"],[1,"table-responsive-md","mt-3"],[1,"table"],[1,"text-center"],["formArrayName","unload_detail"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"row","mt-4","border","border-left-0","border-right-0","pt-4","pb-2"],[1,"col-md-6"],[1,"row","mt-2"],["type","text","placeholder","",1,"form-control",3,"formControl"],[1,"text-right"],["type","button",1,"btn","btn-light",3,"click"],["type","submit",1,"btn","btn-secondary","ml-2"],[3,"formGroupName"],[1,"p-1"],["type","text","formControlName","sku_no","disabled","",1,"input_formarray","form-control"],["type","text","formControlName","product_name","disabled","",1,"input_formarray","form-control"],["type","text","formControlName","product_qty","disabled","",1,"input_formarray","form-control"]],template:function(e,t){1&e&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Sb(3,"div",3),l.Sb(4,"h2",4),l.Cc(5),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(6,"div",5),l.Sb(7,"div",6),l.Sb(8,"form",7),l.ac("ngSubmit",(function(){return t.submitForm(t.addForm)})),l.Sb(9,"div",8),l.Sb(10,"div",9),l.Sb(11,"div",2),l.Sb(12,"div",10),l.Sb(13,"div",11),l.Sb(14,"label",12),l.Cc(15,"PO Date "),l.Sb(16,"em"),l.Cc(17,"*"),l.Rb(),l.Rb(),l.Sb(18,"div",13),l.Nb(19,"input",14),l.dc(20,"date"),l.Rb(),l.Rb(),l.Rb(),l.Sb(21,"div",10),l.Sb(22,"div",11),l.Sb(23,"label",12),l.Cc(24,"Date of Receipt "),l.Sb(25,"em"),l.Cc(26,"*"),l.Rb(),l.Rb(),l.Sb(27,"div",15),l.Nb(28,"ng2-flatpickr",16),l.Sb(29,"span",17),l.Nb(30,"span",18),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(31,"div",2),l.Sb(32,"div",3),l.Sb(33,"div",11),l.Sb(34,"label",12),l.Cc(35,"Notes"),l.Rb(),l.Nb(36,"textarea",19),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(37,"div",20),l.Sb(38,"div",3),l.Sb(39,"h5"),l.Cc(40,"Items"),l.Rb(),l.Sb(41,"div",21),l.Sb(42,"table",22),l.Sb(43,"thead"),l.Sb(44,"tr"),l.Sb(45,"th"),l.Cc(46,"No."),l.Rb(),l.Sb(47,"th"),l.Cc(48,"SKU no"),l.Rb(),l.Sb(49,"th"),l.Cc(50,"Product"),l.Rb(),l.Sb(51,"th",23),l.Cc(52,"Product Qty"),l.Rb(),l.Rb(),l.Rb(),l.Sb(53,"tbody",24),l.Ac(54,f,10,2,"tr",25),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(55,"div",26),l.Sb(56,"div",27),l.Sb(57,"h5"),l.Cc(58,"Picked By"),l.Rb(),l.Sb(59,"div",28),l.Sb(60,"div",27),l.Sb(61,"div",11),l.Sb(62,"label",12),l.Cc(63,"Picked by. "),l.Sb(64,"em"),l.Cc(65,"*"),l.Rb(),l.Rb(),l.Sb(66,"div",13),l.Nb(67,"input",29),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(68,"div",8),l.Sb(69,"div",3),l.Sb(70,"div",30),l.Sb(71,"button",31),l.ac("click",(function(){return t.back()})),l.Cc(72,"Cancel"),l.Rb(),l.Sb(73,"button",32),l.Cc(74,"Submit"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&e&&(l.zb(5),l.Dc(t.PageTitle),l.zb(3),l.jc("formGroup",t.addForm),l.zb(11),l.jc("value",l.gc(20,8,null==t.orderDetails?null:t.orderDetails.sales_order_date,t.date_format,t.timezone)),l.zb(9),l.jc("setDate",null==t.orderDetails?null:t.orderDetails.receipt_date)("config",t.exampleOptions),l.zb(8),l.jc("formControl",t.addForm.controls.notes),l.zb(18),l.jc("ngForOf",t.addForm.controls.unload_detail.controls),l.zb(13),l.jc("formControl",t.addForm.controls.picked_by))},directives:[s.v,s.p,m.a,s.j,o.a,s.c,s.o,p.a,s.g,s.d,i.k,s.k,s.h],pipes:[i.d],styles:[".input_formarray[_ngcontent-%COMP%] {\n    width: 80%;\n  }"]}),e})();r.d(t,"GeneratePickListModule",(function(){return S}));const v=[{path:":id",component:h}];let S=(()=>{class e{}return e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({factory:function(t){return new(t||e)},imports:[[i.b,n.i.forChild(v),o.b,s.l,a.a,c.a,s.s]]}),e})()},xgIS:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("HDdC"),n=r("DH7j"),o=r("n6bG"),s=r("lJxs");function a(e,t,r,c){return Object(o.a)(r)&&(c=r,r=void 0),c?a(e,t,r).pipe(Object(s.a)(e=>Object(n.a)(e)?c(...e):c(e))):new i.a(i=>{!function e(t,r,i,n,o){let s;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(t)){const e=t;t.addEventListener(r,i,o),s=()=>e.removeEventListener(r,i,o)}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(t)){const e=t;t.on(r,i),s=()=>e.off(r,i)}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(t)){const e=t;t.addListener(r,i),s=()=>e.removeListener(r,i)}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(let s=0,a=t.length;s<a;s++)e(t[s],r,i,n,o)}n.add(s)}(e,t,(function(e){i.next(arguments.length>1?Array.prototype.slice.call(arguments):e)}),i,r)})}}}]);