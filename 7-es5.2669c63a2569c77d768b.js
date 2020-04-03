function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2snN":function(t,e,r){"use strict";r.r(e);var o=r("ofXK"),n=r("3Pt+"),i=r("Lw2Y"),a=r("zzOR"),c=r("sVkB"),d=r("fXoL"),b=r("tyNb"),l=r("AwSQ"),u=r("jhRr"),s=r("c8VH"),p=r("HOh6"),f=r("UaFz"),h=r("Jvtu"),m=r("ZOsW"),v=r("Pbud");function g(t,e){if(1&t&&d.Nb(0,"span",40),2&t){var r=d.cc();d.jc("innerHTML",r.formErrors.order_no,d.vc)}}function S(t,e){if(1&t){var r=d.Tb();d.Sb(0,"a",46),d.ac("click",(function(){d.uc(r);var t=d.cc(),e=t.$implicit,o=t.index;return d.cc().editform(null==e?null:e.po_detail_id,o,e)})),d.Nb(1,"i",48),d.Cc(2," Edit"),d.Rb()}}function R(t,e){if(1&t){var r=d.Tb();d.Sb(0,"tr"),d.Sb(1,"td"),d.Cc(2),d.Rb(),d.Sb(3,"td"),d.Cc(4),d.Rb(),d.Sb(5,"td"),d.Cc(6),d.Rb(),d.Sb(7,"td"),d.Cc(8),d.Rb(),d.Sb(9,"td"),d.Cc(10),d.Rb(),d.Sb(11,"td"),d.Cc(12),d.dc(13,"number"),d.Rb(),d.Sb(14,"td"),d.Sb(15,"div",41),d.Sb(16,"a",42),d.Nb(17,"i",43),d.Rb(),d.Sb(18,"div",44),d.Ac(19,S,3,0,"a",45),d.Sb(20,"a",46),d.ac("click",(function(){d.uc(r);var t=e.$implicit,o=e.index;return d.cc().deleteObject(t,o)})),d.Nb(21,"i",47),d.Cc(22," Delete "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()}if(2&t){var o=e.$implicit,n=e.index,i=d.cc();d.zb(2),d.Dc(n+1),d.zb(2),d.Dc(null==o?null:o.product_name),d.zb(2),d.Dc(null==o?null:o.sku_no),d.zb(2),d.Dc(null==o?null:o.qty),d.zb(2),d.Fc("",null==i.currentCompany?null:null==i.currentCompany.currency?null:i.currentCompany.currency.label," ",null==o?null:o.price,""),d.zb(2),d.Fc("",null==i.currentCompany?null:null==i.currentCompany.currency?null:i.currentCompany.currency.label," ",d.ec(13,9,(null==o?null:o.qty)*(null==o?null:o.price)),""),d.zb(7),d.jc("ngIf",i.isEditing)}}function y(t,e){1&t&&(d.Sb(0,"tr"),d.Sb(1,"td",49),d.Cc(2,"No records found"),d.Rb(),d.Rb())}var _,C=function(t){return{"has-error":t}},w=((_=function(){function t(e,r,o,i,c,d,b){_classCallCheck(this,t),this.router=e,this.activatedRoute=r,this.dataservice=o,this.fb=i,this.orderService=c,this.cdr=d,this.paginationService=b,this.PageTitle="Add Order",this.exampleOptions={defaultDate:new Date,dateFormat:a.a},this.supplierListArray=[],this.objectArray=[],this.clientListArray=[],this.loadingState=!1,this.showLoader=!1,this.formErrors={apierror:null,order_no:null},this.isEditing=!1,this.editId=null,this.orderId=!1,this.currentPage=1,this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({po_no:[null,n.t.compose([n.t.required])],po_date:[null,n.t.compose([n.t.required])],supplier_id:[null,n.t.compose([n.t.required])],client_id:[null],notes:[null]})}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.dataservice.currentCompany.subscribe((function(e){e&&(t.currentCompany=e)})),this.orderDate=new Date,this.addForm.patchValue({po_date:new Date}),this.getMasterData(),this.isEditing&&(this.getEditObject(),this.getOrderProductList())}},{key:"getMasterData",value:function(){var t=this;this.orderService.getOrderMasterData().subscribe((function(e){e.success&&(t.supplierListArray=e.data.supplier,t.clientListArray=e.data.client)}))}},{key:"getOrderProductList",value:function(){var t=this;this.orderService.getOrderProductList({order_id:this.editId}).subscribe((function(e){t.loadingState=!1,e.success&&e.data?(t.objectArray=e.data.list,t.pagination=t.paginationService.getPager(e.data.pagination.total_page,t.currentPage)):(t.objectArray=[],t.pagination=null)}),(function(e){t.loadingState=!1,t.objectArray=[],t.pagination=null}))}},{key:"getEditObject",value:function(){var t=this;this.orderService.getOrderById(this.editId).subscribe((function(e){e.success?(t.orderDate=e.data.po_date,t.addForm.patchValue({po_no:e.data.po_no,supplier_id:e.data.supplier_id,client_id:e.data.client_id,po_date:e.data.po_date,notes:e.data.notes?e.data.notes:""})):t.router.navigateByUrl("/inbound/order")}))}},{key:"getPage",value:function(t){this.currentPage=t,this.currentPage=1,this.getOrderProductList()}},{key:"onProductSubmit",value:function(t){t&&(t.index?this.objectArray[t.index]=t:this.objectArray.push(t))}},{key:"submitForm",value:function(t){var e=this;if(t.valid){this.showLoader=!0;var r=new FormData;r.append("po_no",t.value.po_no),r.append("po_date",i.a.changedateFormate(t.value.po_date[0])),r.append("supplier_id",t.value.supplier_id),r.append("client_id",t.value.client_id),r.append("notes",t.value.notes?t.value.notes:""),this.isEditing?this.orderService.editOrder(this.editId,r).subscribe((function(t){if(e.showLoader=!1,t.success){if(e.objectArray&&e.objectArray.length>0){var r=[];e.objectArray.filter((function(t){t.po_detail_id||r.push(t)})),r.filter((function(t){t.order_id=e.editId})),e.orderService.addOrderProduct(r).subscribe((function(t){e.showLoader=!1}),(function(t){e.showLoader=!1}))}e.router.navigateByUrl("/inbound/order")}}),(function(t){e.showLoader=!1})):this.orderService.addOrder(r).subscribe((function(t){if(e.showLoader=!1,t.success){var r=t.data.po_id;e.objectArray&&e.objectArray.length>0&&(e.objectArray.filter((function(t){t.order_id=r})),e.orderService.addOrderProduct(e.objectArray).subscribe((function(t){e.showLoader=!1}),(function(t){e.showLoader=!1}))),e.router.navigateByUrl("/inbound/order")}}),(function(t){e.showLoader=!1}))}}},{key:"addform",value:function(){var t=this;this.addForm.value.po_no?setTimeout((function(){t.productAdd.addObject()}),200):this.formErrors.order_no="* Plese Enter Order Number"}},{key:"editform",value:function(t,e,r){var o=this;setTimeout((function(){o.productAdd.editObject(t,e,r,o.editId,o.addForm.value.po_no)}),200)}},{key:"onRelodeEvent",value:function(t){t&&(this.getOrderProductList(),this.addForm.patchValue({po_date:new Date}))}},{key:"deleteObject",value:function(t,e){var r=this;swal.fire({title:a.b.delete_header_text,text:a.b.delete_smalll_text,icon:a.b.delete_dialogue_type,showCancelButton:!0,confirmButtonText:a.b.delete_confirm_button,cancelButtonText:a.b.delete_cancel_button}).then((function(o){o.value&&(t.po_detail_id?r.orderService.deleteOrderProduct(t.po_detail_id).subscribe((function(t){t.success&&r.getOrderProductList()})):r.objectArray.splice(e,1))})).catch(swal.noop)}},{key:"removeError",value:function(){this.addForm.value.po_no&&(this.formErrors.order_no=null)}},{key:"ngAfterViewChecked",value:function(){this.cdr.detectChanges()}}]),t}()).\u0275fac=function(t){return new(t||_)(d.Mb(b.e),d.Mb(b.a),d.Mb(l.a),d.Mb(n.e),d.Mb(u.a),d.Mb(d.h),d.Mb(s.a))},_.\u0275cmp=d.Gb({type:_,selectors:[["app-add-order"]],viewQuery:function(t,e){var r;1&t&&d.Hc(c.a,!0),2&t&&d.rc(r=d.bc())&&(e.productAdd=r.first)},decls:88,vars:22,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"col-7"],[1,"col-6"],[1,"form-group",3,"ngClass"],[1,"control-label","text-md-right"],[1,""],["type","text","placeholder","",1,"form-control",3,"formControl","change"],["class","help-block",3,"innerHTML",4,"ngIf"],[1,"form-group"],[1,"date-picker"],[3,"setDate","formControl","config"],[1,"date-picker-icon"],[1,"fa","fa-calendar"],["bindLabel","label","bindValue","value","placeholder","Select Supplier",3,"formControl","items"],["bindLabel","label","bindValue","value","placeholder","Select Client",3,"formControl","items"],[1,"row","mt-5"],[1,"col-7","d-flex","align-items-center"],[1,"col-5","text-right"],["type","button",1,"btn","btn-light",3,"click"],[1,"la","la-plus"],[1,"row","mt-3"],[1,"table-responsive-md"],[1,"table"],["width","80",1,"text-right"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"paginationList","currentPage","onPageChange"],[1,"col-5"],["rows","2",1,"form-control",3,"formControl"],[1,"text-right","border-top","py-4","mt-5","card-footer"],["type","button","routerLink","/inbound/order",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2"],[3,"ProductList","orderNo","onRelodeEvent","onProductSubmit"],[1,"help-block",3,"innerHTML"],[1,"action-drop","dropdown","text-right"],["href","#","data-toggle","dropdown","title","",1,"btn","shadow-none","btn-default","btn-sm","btn-icon-only"],[1,"fa","fa-ellipsis-h"],[1,"dropdown-menu","dropdown-icon-menu","drop-menu-right",2,"width","100px"],["class","dropdown-item",3,"click",4,"ngIf"],[1,"dropdown-item",3,"click"],[1,"fa","fa-trash","fa-fw","text-primary"],[1,"fa","fa-edit","fa-fw","text-primary"],["colspan","7"]],template:function(t,e){1&t&&(d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"div",3),d.Sb(4,"h2",4),d.Cc(5),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(6,"div",5),d.Sb(7,"form",6),d.ac("ngSubmit",(function(){return e.submitForm(e.addForm)})),d.Sb(8,"div",7),d.Sb(9,"div",2),d.Sb(10,"div",8),d.Sb(11,"div",2),d.Sb(12,"div",9),d.Sb(13,"div",10),d.Sb(14,"label",11),d.Cc(15,"Order No. "),d.Sb(16,"em"),d.Cc(17,"*"),d.Rb(),d.Rb(),d.Sb(18,"div",12),d.Sb(19,"input",13),d.ac("change",(function(){return e.removeError()})),d.Rb(),d.Ac(20,g,1,1,"span",14),d.Rb(),d.Rb(),d.Rb(),d.Sb(21,"div",9),d.Sb(22,"div",15),d.Sb(23,"label",11),d.Cc(24,"Order Date "),d.Sb(25,"em"),d.Cc(26,"*"),d.Rb(),d.Rb(),d.Sb(27,"div",16),d.Nb(28,"ng2-flatpickr",17),d.Sb(29,"span",18),d.Nb(30,"span",19),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(31,"div",2),d.Sb(32,"div",9),d.Sb(33,"div",15),d.Sb(34,"label",11),d.Cc(35,"Supplier "),d.Sb(36,"em"),d.Cc(37,"*"),d.Rb(),d.Rb(),d.Nb(38,"ng-select",20),d.Rb(),d.Rb(),d.Sb(39,"div",9),d.Sb(40,"div",15),d.Sb(41,"label",11),d.Cc(42,"Client"),d.Rb(),d.Nb(43,"ng-select",21),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(44,"div",22),d.Sb(45,"div",23),d.Sb(46,"h5"),d.Cc(47,"Product"),d.Rb(),d.Rb(),d.Sb(48,"div",24),d.Sb(49,"button",25),d.ac("click",(function(){return e.addform()})),d.Nb(50,"i",26),d.Cc(51," Add Product "),d.Rb(),d.Rb(),d.Rb(),d.Sb(52,"div",27),d.Sb(53,"div",3),d.Sb(54,"div",28),d.Sb(55,"table",29),d.Sb(56,"thead"),d.Sb(57,"tr"),d.Sb(58,"th"),d.Cc(59,"No."),d.Rb(),d.Sb(60,"th"),d.Cc(61,"Product"),d.Rb(),d.Sb(62,"th"),d.Cc(63,"Sku No"),d.Rb(),d.Sb(64,"th"),d.Cc(65,"Order Quantity"),d.Rb(),d.Sb(66,"th"),d.Cc(67,"Price"),d.Rb(),d.Sb(68,"th"),d.Cc(69,"Total Price"),d.Rb(),d.Sb(70,"th",30),d.Cc(71,"Action"),d.Rb(),d.Rb(),d.Rb(),d.Sb(72,"tbody"),d.Ac(73,R,23,11,"tr",31),d.Ac(74,y,3,0,"tr",32),d.Rb(),d.Rb(),d.Rb(),d.Sb(75,"pagination",33),d.ac("onPageChange",(function(t){return e.getPage(t)})),d.Rb(),d.Rb(),d.Rb(),d.Sb(76,"div",2),d.Sb(77,"div",34),d.Sb(78,"div",15),d.Sb(79,"label",11),d.Cc(80,"Notes"),d.Rb(),d.Nb(81,"textarea",35),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(82,"div",36),d.Sb(83,"button",37),d.Cc(84,"Cancel"),d.Rb(),d.Sb(85,"button",38),d.Cc(86,"Submit"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(87,"app-add-product",39),d.ac("onRelodeEvent",(function(t){return e.onRelodeEvent(t)}))("onProductSubmit",(function(t){return e.onProductSubmit(t)})),d.Rb()),2&t&&(d.zb(5),d.Fc("",e.isEditing?"Update":"Create"," ",e.PageTitle,""),d.zb(2),d.jc("formGroup",e.addForm),d.zb(6),d.jc("ngClass",d.nc(20,C,e.formErrors.order_no)),d.zb(6),d.jc("formControl",e.addForm.controls.po_no),d.zb(1),d.jc("ngIf",e.formErrors.order_no),d.zb(8),d.jc("setDate",e.orderDate)("formControl",e.addForm.controls.po_date)("config",e.exampleOptions),d.zb(10),d.jc("formControl",e.addForm.controls.supplier_id)("items",e.supplierListArray),d.zb(5),d.jc("formControl",e.addForm.controls.client_id)("items",e.clientListArray),d.zb(30),d.jc("ngForOf",e.objectArray),d.zb(1),d.jc("ngIf",!e.loadingState&&0===e.objectArray.length),d.zb(1),d.jc("paginationList",e.pagination)("currentPage",e.currentPage),d.zb(6),d.jc("formControl",e.addForm.controls.notes),d.zb(6),d.jc("ProductList",e.objectArray)("orderNo",e.addForm.value.po_no))},directives:[n.v,n.p,p.a,n.j,o.j,n.c,n.o,n.g,f.a,o.l,h.a,m.a,o.k,v.a,b.f,c.a],pipes:[o.e],encapsulation:2}),_),j=r("PCNd"),P=r("Vr6k"),k=r("QSzr"),A=r("DpbK");r.d(e,"AddOrderModule",(function(){return F}));var L,O=[{path:"",component:w}],F=((L=function t(){_classCallCheck(this,t)}).\u0275mod=d.Kb({type:L}),L.\u0275inj=d.Jb({factory:function(t){return new(t||L)},providers:[u.a],imports:[[o.b,b.i.forChild(O),A.a,h.b,n.l,n.s,j.a,m.b,k.a,P.a]]}),L)}}]);