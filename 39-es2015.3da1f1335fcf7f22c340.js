(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{X8pz:function(t,e,a){"use strict";a.r(e);var o=a("ofXK"),i=a("tyNb"),r=a("3Pt+"),c=a("Lw2Y"),n=a("FasR"),d=a("zzOR"),s=a("fXoL"),b=a("5eHb"),l=a("HNGx"),p=a("c8VH"),u=a("AwSQ"),h=a("Jvtu"),m=a("LPFR");function f(t,e){if(1&t&&(s.Sb(0,"div",19),s.Sb(1,"div",20),s.Sb(2,"div",2),s.Sb(3,"div",21),s.Sb(4,"div",22),s.Sb(5,"label",23),s.Dc(6,"PO Date "),s.Sb(7,"em"),s.Dc(8,"*"),s.Rb(),s.Rb(),s.Sb(9,"div",24),s.Nb(10,"input",25),s.dc(11,"date"),s.Rb(),s.Rb(),s.Rb(),s.Sb(12,"div",21),s.Sb(13,"div",22),s.Sb(14,"label",23),s.Dc(15,"Date of Receipt"),s.Rb(),s.Sb(16,"div",26),s.Nb(17,"ng2-flatpickr",27),s.Sb(18,"span",28),s.Nb(19,"span",29),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t){const t=s.cc();s.zb(10),s.kc("value",s.gc(11,3,t.addForm.value.po_date,t.date_format,t.timezone)),s.zb(7),s.jc("formControl",t.addForm.controls.receipt_date)("config",t.exampleOptions)}}function S(t,e){if(1&t){const t=s.Tb();s.Qb(0),s.Sb(1,"div",19),s.Sb(2,"div",3),s.Sb(3,"app-table-list",30),s.ac("checkBoxSelectEvent",(function(e){return s.vc(t),s.cc().checkBoxSelectEvent(e)}))("reloadEvent",(function(){return s.vc(t),s.cc().onReloadEvent()})),s.Rb(),s.Rb(),s.Rb(),s.Pb()}if(2&t){const t=s.cc();s.zb(3),s.jc("headerData",t.headerData)("rawData",t.productList)}}const v=function(t){return{"qt-loader qt-loader-mini qt-loader-left":t}};let g=(()=>{class t{constructor(t,e,a,o,i,c,n,s){this.location=t,this.toastr=e,this.unloadService=a,this.paginationService=o,this.activatedRoute=i,this.dataService=c,this.fb=n,this.router=s,this.PageTitle="Genrate Unloading",this.objectDetails=!1,this.productList=[],this.productItems=[],this.headerData=[],this.date_format="M/d/yy",this.showLoader=!1,this.formErrors={apierror:null},this.exampleOptions={defaultDate:new Date,dateFormat:d.a},this.activatedRoute.snapshot.paramMap.get("id")&&(this.orderId=this.activatedRoute.snapshot.paramMap.get("id"),this.orderId&&this.getUnloadGenerateListById()),this.addForm=this.fb.group({receipt_date:[null,r.t.compose([r.t.required])],po_date:[null,r.t.compose([r.t.required])]})}ngOnInit(){this.dataService.currentCompany.subscribe(t=>{t&&(this.timezone=String(t.timezone.format),this.time_format=t.time_format.label,this.date_format=t.date_format.label,this.currentCompany=t)}),this.addForm.patchValue({receipt_date:new Date}),this.setHeaderData()}setHeaderData(){this.headerData.push(new n.b({class:"align-items-center d-flex",key:"product_id"}),new n.i({label:"SKU",key:"sku_no"}),new n.i({label:"Product",key:"product_name"}),new n.i({label:"Order Quantity",key:"order_quantity"}))}back(){this.location.back()}getUnloadGenerateListById(){this.unloadService.getUnloadGenerateListById(this.orderId).subscribe(t=>{t.success?(this.objectDetails=t.data.po_detail?t.data.po_detail:{},this.productList=t.data.product_list?t.data.product_list:[],this.setData()):(this.objectDetails=null,this.productList=[],this.pagination=null)})}setData(){this.searchText=this.objectDetails.po_no,this.addForm.patchValue({po_date:this.objectDetails.po_date,receipt_date:new Date})}submitForm(t){if(t.valid){this.showLoader=!0;const e=new FormData;e.append("receipt_date",c.a.changedateFormate(t.value.receipt_date[0])),e.append("po_id",this.orderId),e.append("supplier_id",this.objectDetails.supplier_id),e.append("to_details",this.objectDetails.client_id),e.append("product",JSON.stringify(this.productItems)),this.isEditing||this.unloadService.addUnloadGenerate(e).subscribe(t=>{setTimeout(()=>{this.showLoader=!1},700),t.success?this.back():t.error.filter(t=>{t.hasOwnProperty("product")&&this.toastr.error("","Please Select a Product...!")})},t=>{this.showLoader=!1})}}getPage(t){this.currentPage=t}searchObject(){console.log("searchObject",this.searchText)}onReloadEvent(){this.getUnloadGenerateListById()}checkBoxSelectEvent(t){this.productItems=[],t&&t.length>0&&t.filter(t=>{let e=new Object;e.product_id=t.product_id,e.order_qty=t.order_quantity,e.sku_no=t.sku_no,e.product_name=t.product_name,this.productItems.push(e)})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(o.h),s.Mb(b.b),s.Mb(l.a),s.Mb(p.a),s.Mb(i.a),s.Mb(u.a),s.Mb(r.e),s.Mb(i.e))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-generate"]],decls:32,vars:9,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],[1,"card-body"],[1,"form-group","row"],[1,"control-label","text-md-right","col-md-3","mt-2"],[1,"d-flex"],["type","text","placeholder","",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","ml-2",3,"click"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],["class","row mt-3",4,"ngIf"],[1,"row","mt-4"],[4,"ngIf"],[1,"text-right","border-top","pt-4","mt-5","mb-3"],["type","button",1,"btn","btn-light",3,"click"],["type","submit",1,"btn","btn-secondary","ml-2",3,"ngClass","disabled"],[1,"row","mt-3"],[1,"col-7","pl-3"],[1,"col-6"],[1,"form-group"],[1,"control-label","text-md-right"],[1,""],["type","text","placeholder","","disabled","",1,"form-control",3,"value"],[1,"date-picker"],[3,"formControl","config"],[1,"date-picker-icon"],[1,"fa","fa-calendar"],[3,"headerData","rawData","checkBoxSelectEvent","reloadEvent"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"div",2),s.Sb(3,"div",3),s.Sb(4,"h2",4),s.Dc(5),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(6,"div",5),s.Sb(7,"div",6),s.Sb(8,"div",7),s.Sb(9,"label",8),s.Dc(10,"Order Number "),s.Sb(11,"em"),s.Dc(12,"*"),s.Rb(),s.Rb(),s.Sb(13,"div",9),s.Sb(14,"input",10),s.ac("ngModelChange",(function(t){return e.searchText=t})),s.Rb(),s.Sb(15,"button",11),s.ac("click",(function(){return e.searchObject()})),s.Dc(16,"Search"),s.Rb(),s.Rb(),s.Rb(),s.Sb(17,"form",12),s.ac("ngSubmit",(function(){return e.submitForm(e.addForm)})),s.Bc(18,f,20,7,"div",13),s.Sb(19,"div",14),s.Sb(20,"div",3),s.Sb(21,"h5"),s.Dc(22,"Product"),s.Rb(),s.Rb(),s.Rb(),s.Sb(23,"div"),s.Bc(24,S,4,2,"ng-container",15),s.Sb(25,"div",2),s.Sb(26,"div",3),s.Sb(27,"div",16),s.Sb(28,"button",17),s.ac("click",(function(){return e.back()})),s.Dc(29,"Cancel"),s.Rb(),s.Sb(30,"button",18),s.Dc(31,"Generate"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.zb(5),s.Ec(e.PageTitle),s.zb(9),s.jc("ngModel",e.searchText),s.zb(3),s.jc("formGroup",e.addForm),s.zb(1),s.jc("ngIf",e.objectDetails),s.zb(6),s.jc("ngIf",e.productList.length>0),s.zb(6),s.jc("ngClass",s.nc(7,v,e.showLoader))("disabled",e.showLoader))},directives:[r.c,r.o,r.q,r.v,r.p,r.j,o.l,o.j,h.a,r.g,m.a],pipes:[o.d],encapsulation:2}),t})();var R=a("OTx7");a.d(e,"GenerateModule",(function(){return D}));const _=[{path:"",component:g},{path:":id",component:g}];let D=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[o.b,h.b,r.l,r.s,R.a,i.i.forChild(_)]]}),t})()}}]);