function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"/SVk":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("fXoL"),o=function(){var e=function(){function e(t){_classCallCheck(this,e),this._el=t}return _createClass(e,[{key:"onKeyDown",value:function(e){var t=e;-1!==[46,8,9,27,13].indexOf(t.keyCode)||65===t.keyCode&&(t.ctrlKey||t.metaKey)||88===t.keyCode&&(t.ctrlKey||t.metaKey)||t.keyCode>=35&&t.keyCode<=39||(t.shiftKey||t.keyCode<48||t.keyCode>57)&&(t.keyCode<96||t.keyCode>105||110===t.keyCode||190===t.keyCode)&&t.preventDefault()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Mb(n.l))},e.\u0275dir=n.Hb({type:e,selectors:[["","number",""]],hostBindings:function(e,t){1&e&&n.ac("keydown",(function(e){return t.onKeyDown(e)}))}}),e}()},HOh6:function(e,t,r){"use strict";var n=r("xgIS"),o=r("vkgz"),i=r("jtHE"),a=r("fXoL");r.d(t,"a",(function(){return l}));var s,l=((s=function(){function e(t){var r,a=this;_classCallCheck(this,e),this.host=t,this.submit$=Object(n.a)(this.element,"submit").pipe(Object(o.a)((function(){!1===a.element.classList.contains("submitted")&&a.element.classList.add("submitted")})),(r={bufferSize:1,windowTime:void 0,refCount:!1,scheduler:void 0},function(e){return e.lift(function(e){var t,r,n=e.bufferSize,o=void 0===n?Number.POSITIVE_INFINITY:n,a=e.windowTime,s=void 0===a?Number.POSITIVE_INFINITY:a,l=e.refCount,c=e.scheduler,d=0,u=!1,b=!1;return function(e){d++,t&&!u||(u=!1,t=new i.a(o,s,c),r=e.subscribe({next:function(e){t.next(e)},error:function(e){u=!0,t.error(e)},complete:function(){b=!0,r=void 0,t.complete()}}));var n=t.subscribe(this);this.add((function(){d--,n.unsubscribe(),r&&!b&&l&&0===d&&(r.unsubscribe(),r=void 0,t=void 0)}))}}(r))}))}return _createClass(e,[{key:"element",get:function(){return this.host.nativeElement}}]),e}()).\u0275fac=function(e){return new(e||s)(a.Mb(a.l))},s.\u0275dir=a.Hb({type:s,selectors:[["form"]]}),s)},LhZO:function(e,t,r){"use strict";r.r(t);var n=r("ofXK"),o=r("tyNb"),i=r("3Pt+"),a=r("fXoL"),s=r("HNGx"),l=r("HOh6"),c=r("Jvtu"),d=r("UaFz"),u=r("/SVk");function b(e,t){if(1&e){var r=a.Tb();a.Sb(0,"tr",33),a.Sb(1,"td"),a.Sb(2,"div",34),a.Bc(3),a.Rb(),a.Rb(),a.Sb(4,"td"),a.Nb(5,"input",35),a.Rb(),a.Sb(6,"td"),a.Nb(7,"input",36),a.Rb(),a.Sb(8,"td",22),a.Nb(9,"input",37),a.Rb(),a.Sb(10,"td",22),a.Sb(11,"input",38),a.ac("input",(function(){a.tc(r);var e=t.index;return a.cc().setMissingQuantity(e)})),a.Rb(),a.Rb(),a.Sb(12,"td",22),a.Sb(13,"input",39),a.ac("input",(function(){a.tc(r);var e=t.index;return a.cc().setMissingQuantity(e)})),a.Rb(),a.Rb(),a.Sb(14,"td",22),a.Nb(15,"input",40),a.Rb(),a.Rb()}if(2&e){var n=t.index;a.ic("formGroupName",n),a.zb(3),a.Cc(n+1)}}var m,f=((m=function(){function e(t,r,n,o,a){_classCallCheck(this,e),this.activatedRoute=t,this.unloadService=r,this.location=n,this.fb=o,this.router=a,this.PageTitle="Genrate Unloading",this.exampleOptions={defaultDate:new Date,noCalendar:!0},this.orderDetails={},this.productList=[],this.addForm=this.fb.group({delivery_name:[null,i.t.compose([i.t.required])],delivery_phone:[null,i.t.compose([i.t.required])],delivery_vehicle_no:[null,i.t.compose([i.t.required])],receiver_name:[null,i.t.compose([i.t.required])],receiver_phone:[null,i.t.compose([i.t.required])],notes:[null],unload_detail:this.fb.array([])}),this.activatedRoute.snapshot.paramMap.get("id")&&(this.viewId=this.activatedRoute.snapshot.paramMap.get("id"))}return _createClass(e,[{key:"ngOnInit",value:function(){this.getObject()}},{key:"back",value:function(){this.location.back()}},{key:"getObject",value:function(){var e=this;this.unloadService.getUnloadReportsDetails(this.viewId).subscribe((function(t){t.success?(e.orderDetails=t.data.order_detail,e.productList=t.data.product,e.setData()):(e.orderDetails={},e.productList=[])}),(function(t){e.orderDetails={},e.productList=[]}))}},{key:"setData",value:function(){var e=this;if(this.addForm.patchValue({notes:this.orderDetails.notes,delivery_name:this.orderDetails.delivery_name,delivery_phone:this.orderDetails.delivery_phone,delivery_vehicle_no:this.orderDetails.delivery_vehicle_no,receiver_name:this.orderDetails.receiver_name,receiver_phone:this.orderDetails.receiver_phone}),this.productList.length>0){for(var t=this.addForm.get("unload_detail"),r=0;r<=t.length+1;r++)t.removeAt(r);this.productList.forEach((function(r,n){t.push(e.fb.group({unload_detail_id:r.unload_detail_id,sku_no:r.sku_no,product_name:r.product_name,order_qty:r.order_qty,received_qty:r.received_qty,missing_qty:r.missing_qty,damaged_qty:r.damaged_qty}))}))}}},{key:"submitForm",value:function(e){var t=this;if(e.valid){this.showLoader=!0;var r=new FormData;r.append("delivery_name",e.value.delivery_name),r.append("delivery_phone",e.value.delivery_phone),r.append("delivery_vehicle_no",e.value.delivery_vehicle_no),r.append("receiver_name",e.value.receiver_name),r.append("receiver_phone",e.value.receiver_phone),r.append("unload_detail",JSON.stringify(e.value.unload_detail)),r.append("notes",e.value.notes?e.value.notes:""),this.unloadService.getUnloadSubmitReports(this.viewId,r).subscribe((function(e){t.showLoader=!1,e.success&&t.back()}),(function(e){t.showLoader=!1}))}}},{key:"addNewRow",value:function(){this.addForm.get("unload_detail").push(this.initRows())}},{key:"initRows",value:function(){return new i.i({unload_detail_id:new i.f(""),sku_no:new i.f(""),product_name:new i.f(""),order_qty:new i.f(0,i.t.compose([i.t.required])),received_qty:new i.f(0,i.t.compose([i.t.required])),missing_qty:new i.f(0,i.t.compose([i.t.required])),damaged_qty:new i.f(0,i.t.compose([i.t.required]))})}},{key:"setMissingQuantity",value:function(e){var t=this.addForm.controls.unload_detail.at(e),r=t.value.damaged_qty,n=t.value.received_qty,o=t.value.order_qty,i=Number(o)-(Number(n)+Number(r))>0?Number(o)-(Number(n)+Number(r)):0;t.controls.missing_qty.setValue(i)}}]),e}()).\u0275fac=function(e){return new(e||m)(a.Mb(o.a),a.Mb(s.a),a.Mb(n.h),a.Mb(i.e),a.Mb(o.e))},m.\u0275cmp=a.Gb({type:m,selectors:[["app-generate-unloading"]],decls:117,vars:14,consts:[[1,"container-fluid"],[1,"page-header","border-b"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal","pb-4",3,"formGroup","ngSubmit"],[1,"row","mt-3"],[1,"col-7","pl-3"],[1,"col-6"],[1,"form-group"],[1,"control-label","text-md-right"],[1,""],["type","text","disabled","",1,"form-control",3,"value"],[1,"date-picker"],["disabled","",3,"setDate","config"],[1,"date-picker-icon"],[1,"fa","fa-calendar"],["rows","2",1,"form-control",3,"formControl"],[1,"row","mt-4"],[1,"table-responsive-md","mt-3"],[1,"table"],[1,"text-center"],["formArrayName","unload_detail"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"row","mt-4","border","border-left-0","border-right-0","pt-4","pb-2"],[1,"col-md-6"],["type","text","placeholder","",1,"form-control",3,"formControl"],["number","","type","text","placeholder","",1,"form-control",3,"formControl"],[1,"row","mt-2"],[1,"text-right"],["type","button",1,"btn","btn-light",3,"click"],["type","submit",1,"btn","btn-secondary","ml-2"],[3,"formGroupName"],[1,"p-1"],["type","text","formControlName","sku_no","disabled","",1,"input_formarray","form-control"],["type","text","formControlName","product_name","disabled","",1,"input_formarray","form-control"],["type","text","formControlName","order_qty","disabled","",1,"input_formarray","form-control"],["type","text","formControlName","received_qty",1,"input_formarray","form-control",3,"input"],["type","text","formControlName","damaged_qty",1,"input_formarray","form-control",3,"input"],["type","text","formControlName","missing_qty","disabled","",1,"input_formarray","form-control"]],template:function(e,t){1&e&&(a.Sb(0,"div",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"div",3),a.Sb(4,"h2",4),a.Bc(5),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(6,"div",5),a.Sb(7,"form",6),a.ac("ngSubmit",(function(){return t.submitForm(t.addForm)})),a.Sb(8,"div",7),a.Sb(9,"div",8),a.Sb(10,"div",2),a.Sb(11,"div",9),a.Sb(12,"div",10),a.Sb(13,"label",11),a.Bc(14,"PO Date "),a.Sb(15,"em"),a.Bc(16,"*"),a.Rb(),a.Rb(),a.Sb(17,"div",12),a.Nb(18,"input",13),a.dc(19,"date"),a.Rb(),a.Rb(),a.Rb(),a.Sb(20,"div",9),a.Sb(21,"div",10),a.Sb(22,"label",11),a.Bc(23,"Date of Receipt "),a.Sb(24,"em"),a.Bc(25,"*"),a.Rb(),a.Rb(),a.Sb(26,"div",14),a.Nb(27,"ng2-flatpickr",15),a.Sb(28,"span",16),a.Nb(29,"span",17),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(30,"div",2),a.Sb(31,"div",3),a.Sb(32,"div",10),a.Sb(33,"label",11),a.Bc(34,"Notes"),a.Rb(),a.Nb(35,"textarea",18),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(36,"div",19),a.Sb(37,"div",3),a.Sb(38,"h5"),a.Bc(39,"Items"),a.Rb(),a.Sb(40,"div",20),a.Sb(41,"table",21),a.Sb(42,"thead"),a.Sb(43,"tr"),a.Sb(44,"th"),a.Bc(45,"No."),a.Rb(),a.Sb(46,"th"),a.Bc(47,"SKU no"),a.Rb(),a.Sb(48,"th"),a.Bc(49,"Product"),a.Rb(),a.Sb(50,"th",22),a.Bc(51,"Order Qty"),a.Rb(),a.Sb(52,"th",22),a.Bc(53,"Receive Qty"),a.Rb(),a.Sb(54,"th",22),a.Bc(55,"Damaged Qty "),a.Rb(),a.Sb(56,"th",22),a.Bc(57,"Missing Qty"),a.Rb(),a.Rb(),a.Rb(),a.Sb(58,"tbody",23),a.zc(59,b,16,2,"tr",24),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(60,"div",25),a.Sb(61,"div",26),a.Sb(62,"h5"),a.Bc(63,"Delivery By"),a.Rb(),a.Sb(64,"div",7),a.Sb(65,"div",26),a.Sb(66,"div",10),a.Sb(67,"label",11),a.Bc(68,"Name "),a.Sb(69,"em"),a.Bc(70,"*"),a.Rb(),a.Rb(),a.Sb(71,"div",12),a.Nb(72,"input",27),a.Rb(),a.Rb(),a.Rb(),a.Sb(73,"div",26),a.Sb(74,"div",10),a.Sb(75,"label",11),a.Bc(76,"Phone No. "),a.Sb(77,"em"),a.Bc(78,"*"),a.Rb(),a.Rb(),a.Sb(79,"div",12),a.Nb(80,"input",28),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(81,"div",29),a.Sb(82,"div",26),a.Sb(83,"div",10),a.Sb(84,"label",11),a.Bc(85,"Vehicle No. "),a.Sb(86,"em"),a.Bc(87,"*"),a.Rb(),a.Rb(),a.Sb(88,"div",12),a.Nb(89,"input",27),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(90,"div",26),a.Sb(91,"h5"),a.Bc(92,"Received By"),a.Rb(),a.Sb(93,"div",7),a.Sb(94,"div",26),a.Sb(95,"div",10),a.Sb(96,"label",11),a.Bc(97,"Name "),a.Sb(98,"em"),a.Bc(99,"*"),a.Rb(),a.Rb(),a.Sb(100,"div",12),a.Nb(101,"input",27),a.Rb(),a.Rb(),a.Rb(),a.Sb(102,"div",26),a.Sb(103,"div",10),a.Sb(104,"label",11),a.Bc(105,"Phone No. "),a.Sb(106,"em"),a.Bc(107,"*"),a.Rb(),a.Rb(),a.Sb(108,"div",12),a.Nb(109,"input",28),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(110,"div",7),a.Sb(111,"div",3),a.Sb(112,"div",30),a.Sb(113,"button",31),a.ac("click",(function(){return t.back()})),a.Bc(114,"Cancel"),a.Rb(),a.Sb(115,"button",32),a.Bc(116,"Submit"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&e&&(a.zb(5),a.Cc(t.PageTitle),a.zb(2),a.ic("formGroup",t.addForm),a.zb(11),a.ic("value",a.ec(19,12,null==t.orderDetails?null:t.orderDetails.po_date)),a.zb(9),a.ic("setDate",null==t.orderDetails?null:t.orderDetails.receipt_date)("config",t.exampleOptions),a.zb(8),a.ic("formControl",t.addForm.controls.notes),a.zb(24),a.ic("ngForOf",t.addForm.controls.unload_detail.controls),a.zb(13),a.ic("formControl",t.addForm.controls.delivery_name),a.zb(8),a.ic("formControl",t.addForm.controls.delivery_phone),a.zb(9),a.ic("formControl",t.addForm.controls.delivery_vehicle_no),a.zb(12),a.ic("formControl",t.addForm.controls.receiver_name),a.zb(8),a.ic("formControl",t.addForm.controls.receiver_phone))},directives:[i.v,i.p,l.a,i.j,c.a,i.c,i.o,d.a,i.g,i.d,n.k,u.a,i.k,i.h],pipes:[n.d],styles:[".input_formarray[_ngcontent-%COMP%] {\n    width: 80%;\n  }"]}),m),v=r("Vr6k"),p=r("PCNd");r.d(t,"GenerateUnloadingModule",(function(){return _}));var h,y=[{path:":id",component:f}],_=((h=function e(){_classCallCheck(this,e)}).\u0275mod=a.Kb({type:h}),h.\u0275inj=a.Jb({factory:function(e){return new(e||h)},imports:[[n.b,o.i.forChild(y),c.b,i.l,v.a,p.a,i.s]]}),h)},UaFz:function(e,t,r){"use strict";var n,o,i=r("fXoL"),a=((n=function(){function e(t){_classCallCheck(this,e),this.cdr=t,this._hide=!0}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"text",set:function(e){e!==this._text&&(this._text=e,this._hide=!e,this.cdr.detectChanges())}}]),e}()).\u0275fac=function(e){return new(e||n)(i.Mb(i.h))},n.\u0275cmp=i.Gb({type:n,selectors:[["app-control-error"]],inputs:{text:"text"},decls:1,vars:3,consts:[[1,"help","is-danger",3,"innerHTML"]],template:function(e,t){1&e&&i.Nb(0,"p",0),2&e&&(i.Eb("hide",t._hide),i.ic("innerHTML",t._text,i.uc))},encapsulation:2,changeDetection:0}),n),s=r("EY2u"),l=r("VRyK"),c={first_name:{required:"* Please enter first name"},last_name:{required:"* Please enter last name"},email:{required:"* Please enter email",email:"* Please enter valid email",validateEmail:"* Please enter valid email"},phone_number:{required:"Please enter phone number",minlength:"Please enter at least 8 digits",maxlength:"Please enter at least 18 digits"},password:{required:"* Please enter password",pattern:"* Password must contains at least 6 characters"},confirm_password:{required:"* Please enter confirm password",validatePassword:"* Your Password is not matched"},tree_level_name:{required:"* Please enter tree level name"},max_node:{required:"* Please enter max node"},tree_order:{required:"* Please enter tree order"},tree_name:{required:"* Please enter tree name"},tree_level_id:{required:"* Please enter tree level"},user_type:{required:"* Please enter user type"},wallet_name:{required:"* Please enter wallet name"},currency_id:{required:"* Please select currency"},wallet_type:{required:"* Please select wallet type"},otp:{required:"* Please enter OTP"},login_pin:{required:"* Please enter PIN",maxlength:"Pin Max 4 Digit",minlength:"Please enter at least 4 digits"},bank_name:{required:"* Please enter bank name"},bank_code:{required:"* Please enter code",maxlength:"Code Max 4 Digit",minlength:"Please enter at least 4 digits"},amount:{required:"* Please enter amount",max:"amount max balance"},sms:{required:"* Please enter content"},webhook:{required:"* Please enter content"},device_number:{required:"* Please enter device number"},name:{required:"* Please enter name"},location:{required:"* Please enter location"},group_id:{required:"* Please select group"}},d=((o=function e(t){_classCallCheck(this,e),this.vcr=t}).\u0275fac=function(e){return new(e||o)(i.Mb(i.N))},o.\u0275dir=i.Hb({type:o,selectors:[["","controlErrorContainer",""]]}),o),u=r("HOh6"),b=r("3Pt+");r.d(t,"a",(function(){return f}));var m,f=((m=function(){function e(t,r,n,o,i){_classCallCheck(this,e),this.vcr=t,this.resolver=r,this.form=o,this.controlDir=i,this.customErrors={},this.container=n?n.vcr:t,this.submit$=this.form?this.form.submit$:s.a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.control&&this.control.valueChanges&&Object(l.a)(this.control.valueChanges,this.submit$).subscribe((function(t){var r=e.control.errors;if(r){var n=e.getFormControlName(e.control),o=Object.keys(r)[0],i=c[n];null!=i&&""!==i&&e.setError(i[o])}else e.ref&&e.setError(null)}))}},{key:"getFormControlName",value:function(e){var t=e.parent.controls;return Object.keys(t).find((function(r){return e===t[r]}))||null}},{key:"setError",value:function(e){if(!this.ref){var t=this.resolver.resolveComponentFactory(a);this.ref=this.container.createComponent(t)}this.ref.instance.text=e}},{key:"ngOnDestroy",value:function(){}},{key:"control",get:function(){return this.controlDir.control}}]),e}()).\u0275fac=function(e){return new(e||m)(i.Mb(i.N),i.Mb(i.j),i.Mb(d,8),i.Mb(u.a,9),i.Mb(b.n))},m.\u0275dir=i.Hb({type:m,selectors:[["","formControl",""],["","formControlName",""]],inputs:{customErrors:"customErrors"}}),m)},Vr6k:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("ofXK"),o=r("3Pt+"),i=r("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[n.b,o.l]]}),e}()},xgIS:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("HDdC"),o=r("DH7j"),i=r("n6bG"),a=r("lJxs");function s(e,t,r,l){return Object(i.a)(r)&&(l=r,r=void 0),l?s(e,t,r).pipe(Object(a.a)((function(e){return Object(o.a)(e)?l.apply(void 0,_toConsumableArray(e)):l(e)}))):new n.a((function(n){!function e(t,r,n,o,i){var a;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(t)){var s=t;t.addEventListener(r,n,i),a=function(){return s.removeEventListener(r,n,i)}}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(t)){var l=t;t.on(r,n),a=function(){return l.off(r,n)}}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(t)){var c=t;t.addListener(r,n),a=function(){return c.removeListener(r,n)}}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(var d=0,u=t.length;d<u;d++)e(t[d],r,n,o,i)}o.add(a)}(e,t,(function(e){n.next(arguments.length>1?Array.prototype.slice.call(arguments):e)}),n,r)}))}}}]);