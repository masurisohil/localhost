(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8D99":function(t,e,a){"use strict";a.r(e);var i=a("ofXK"),r=a("tyNb"),o=a("3Pt+"),s=a("Lw2Y"),c=a("FasR"),d=a("zzOR"),n=a("fXoL"),b=a("5eHb"),l=a("ICGj"),h=a("c8VH"),p=a("AwSQ"),u=a("Jvtu"),m=a("LPFR");function f(t,e){if(1&t&&(n.Sb(0,"div",19),n.Sb(1,"div",20),n.Sb(2,"div",2),n.Sb(3,"div",21),n.Sb(4,"div",22),n.Sb(5,"label",23),n.Dc(6," Sales Order Date "),n.Sb(7,"em"),n.Dc(8,"*"),n.Rb(),n.Rb(),n.Sb(9,"div",24),n.Nb(10,"input",25),n.Rb(),n.Rb(),n.Rb(),n.Sb(11,"div",21),n.Sb(12,"div",22),n.Sb(13,"label",23),n.Dc(14,"Date of Receipt"),n.Rb(),n.Sb(15,"div",26),n.Nb(16,"ng2-flatpickr",27),n.Sb(17,"span",28),n.Nb(18,"span",29),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t){const t=n.cc();n.zb(10),n.jc("formControl",t.addForm.controls.sales_order_date),n.zb(6),n.jc("formControl",t.addForm.controls.pick_list_date)("config",t.exampleOptions)}}function S(t,e){if(1&t){const t=n.Tb();n.Qb(0),n.Sb(1,"div",19),n.Sb(2,"div",3),n.Sb(3,"app-table-list",30),n.ac("checkBoxSelectEvent",(function(e){return n.vc(t),n.cc().checkBoxSelectEvent(e)}))("reloadEvent",(function(){return n.vc(t),n.cc().onReloadEvent()})),n.Rb(),n.Rb(),n.Rb(),n.Pb()}if(2&t){const t=n.cc();n.zb(3),n.jc("headerData",t.headerData)("rawData",t.productList)}}const v=function(t){return{"qt-loader qt-loader-mini qt-loader-left":t}};let g=(()=>{class t{constructor(t,e,a,i,r,s,c,n){if(this.location=t,this.toastr=e,this.picklistService=a,this.paginationService=i,this.activatedRoute=r,this.fb=s,this.dataService=c,this.router=n,this.PageTitle="Genrate PickList",this.objectDetails=!1,this.productList=[],this.productItems=[],this.headerData=[],this.date_format="M/d/yy",this.showLoader=!1,this.formErrors={apierror:null},this.exampleOptions={defaultDate:new Date,dateFormat:d.a},this.activatedRoute.snapshot.paramMap.get("id")){let e=this.activatedRoute.snapshot.paramMap.get("id");t.path()==`/outbound/pick-list/generate/${e}`?(this.orderId=this.activatedRoute.snapshot.paramMap.get("id"),this.orderId&&this.getUnloadGenerateListById()):(this.editId=e,this.isEditing=!0)}this.addForm=this.fb.group({pick_list_date:[null,o.t.compose([o.t.required])],sales_order_date:[null,o.t.compose([o.t.required])]})}ngOnInit(){this.dataService.currentCompany.subscribe(t=>{t&&(this.timezone=t.timezone.label,this.time_format=t.time_format.label,this.date_format=t.date_format.label,this.currentCompany=t)}),this.addForm.patchValue({pick_list_date:new Date}),this.setHeaderData()}setHeaderData(){this.headerData.push(new c.b({class:"align-items-center d-flex",key:"sales_order_detail_id"}),new c.i({label:"SKU",key:"sku_no"}),new c.i({label:"Product",key:"product_name"}),new c.i({label:"Order Quantity",key:"qty"}))}back(){this.location.back()}getUnloadGenerateListById(){this.picklistService.getPickListGenerateListById(this.orderId).subscribe(t=>{t.success?(this.objectDetails=t.data.sales_order_detail?t.data.sales_order_detail:{},this.productList=t.data.product_list?t.data.product_list:[],this.setData()):(this.objectDetails=null,this.productList=[],this.pagination=null)})}setData(){this.searchText=this.objectDetails.sales_order_no,this.addForm.patchValue({sales_order_date:this.objectDetails.sales_order_date,pick_list_date:new Date})}submitForm(t){if(t.valid){this.showLoader=!0;const e=new FormData;e.append("pick_list_date",s.a.changedateFormate(t.value.pick_list_date[0])),e.append("po_id",this.orderId),e.append("client_id",this.objectDetails.client_id),e.append("product",JSON.stringify(this.productItems)),e.append("sales_order_id",JSON.stringify(this.orderId)),e.append("pick_list_no",JSON.stringify(this.objectDetails.sales_order_no)),this.isEditing||this.picklistService.addPickListGenerate(e).subscribe(t=>{setTimeout(()=>{this.showLoader=!1},700),t.success?this.back():t.error.filter(t=>{t.hasOwnProperty("product")&&this.toastr.error("","Please Select a Product...!")})},t=>{this.showLoader=!1})}}getPage(t){this.currentPage=t}searchObject(){console.log("searchObject",this.searchText)}onReloadEvent(){this.getUnloadGenerateListById()}checkBoxSelectEvent(t){this.productItems=[],t&&t.length>0&&t.filter(t=>{let e=new Object;e.product_id=t.product_id,e.product_qty=t.qty,this.productItems.push(e)})}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(i.h),n.Mb(b.b),n.Mb(l.a),n.Mb(h.a),n.Mb(r.a),n.Mb(o.e),n.Mb(p.a),n.Mb(r.e))},t.\u0275cmp=n.Gb({type:t,selectors:[["app-generate"]],decls:32,vars:9,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],[1,"card-body"],[1,"form-group","row"],[1,"control-label","text-md-right","col-md-3"],[1,"d-flex"],["type","text","placeholder","",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","ml-2",3,"click"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],["class","row mt-3",4,"ngIf"],[1,"row","mt-4"],[4,"ngIf"],[1,"text-right","border-top","pt-4","mt-5","mb-3"],["type","button",1,"btn","btn-light",3,"click"],["type","submit",1,"btn","btn-secondary","ml-2",3,"ngClass","disabled"],[1,"row","mt-3"],[1,"col-7","pl-3"],[1,"col-6"],[1,"form-group"],[1,"control-label","text-md-right"],[1,""],["value","addForm.value.sales_order_date |date:date_format :timezone","type","text","placeholder","","disabled","",1,"form-control",3,"formControl"],[1,"date-picker"],[3,"formControl","config"],[1,"date-picker-icon"],[1,"fa","fa-calendar"],[3,"headerData","rawData","checkBoxSelectEvent","reloadEvent"]],template:function(t,e){1&t&&(n.Sb(0,"div",0),n.Sb(1,"div",1),n.Sb(2,"div",2),n.Sb(3,"div",3),n.Sb(4,"h2",4),n.Dc(5),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Sb(6,"div",5),n.Sb(7,"div",6),n.Sb(8,"div",7),n.Sb(9,"label",8),n.Dc(10,"Order Number "),n.Sb(11,"em"),n.Dc(12,"*"),n.Rb(),n.Rb(),n.Sb(13,"div",9),n.Sb(14,"input",10),n.ac("ngModelChange",(function(t){return e.searchText=t})),n.Rb(),n.Sb(15,"button",11),n.ac("click",(function(){return e.searchObject()})),n.Dc(16,"Search"),n.Rb(),n.Rb(),n.Rb(),n.Sb(17,"form",12),n.ac("ngSubmit",(function(){return e.submitForm(e.addForm)})),n.Bc(18,f,19,3,"div",13),n.Sb(19,"div",14),n.Sb(20,"div",3),n.Sb(21,"h5"),n.Dc(22,"Product"),n.Rb(),n.Rb(),n.Rb(),n.Sb(23,"div"),n.Bc(24,S,4,2,"ng-container",15),n.Sb(25,"div",2),n.Sb(26,"div",3),n.Sb(27,"div",16),n.Sb(28,"button",17),n.ac("click",(function(){return e.back()})),n.Dc(29,"Cancel"),n.Rb(),n.Sb(30,"button",18),n.Dc(31,"Generate"),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb(),n.Rb()),2&t&&(n.zb(5),n.Ec(e.PageTitle),n.zb(9),n.jc("ngModel",e.searchText),n.zb(3),n.jc("formGroup",e.addForm),n.zb(1),n.jc("ngIf",e.objectDetails),n.zb(6),n.jc("ngIf",e.productList.length>0),n.zb(6),n.jc("ngClass",n.nc(7,v,e.showLoader))("disabled",e.showLoader))},directives:[o.c,o.o,o.q,o.v,o.p,o.j,i.l,i.j,o.g,u.a,m.a],encapsulation:2}),t})();var _=a("OTx7");a.d(e,"GenerateModule",(function(){return D}));const R=[{path:"",component:g},{path:":id",component:g}];let D=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[i.b,u.b,o.l,o.s,_.a,r.i.forChild(R)]]}),t})()}}]);