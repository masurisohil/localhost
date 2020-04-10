function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2snN":function(e,t,r){"use strict";r.r(t);var o=r("ofXK"),n=r("3Pt+"),i=r("Lw2Y"),a=r("zzOR"),c=r("sVkB"),d=r("fXoL"),b=r("tyNb"),l=r("AwSQ"),u=r("jhRr"),s=r("c8VH"),p=r("HOh6"),f=r("UaFz"),h=r("Jvtu"),v=r("ZOsW"),m=r("Pbud");function S(e,t){if(1&e&&d.Nb(0,"span",41),2&e){var r=d.cc();d.jc("innerHTML",r.formErrors.order_no,d.vc)}}function g(e,t){if(1&e){var r=d.Tb();d.Sb(0,"a",47),d.ac("click",(function(){d.uc(r);var e=d.cc(),t=e.$implicit,o=e.index;return d.cc().editform(null==t?null:t.po_detail_id,o,t)})),d.Nb(1,"i",49),d.Cc(2," Edit"),d.Rb()}}function R(e,t){if(1&e){var r=d.Tb();d.Sb(0,"tr"),d.Sb(1,"td"),d.Cc(2),d.Rb(),d.Sb(3,"td"),d.Cc(4),d.Rb(),d.Sb(5,"td"),d.Cc(6),d.Rb(),d.Sb(7,"td"),d.Cc(8),d.Rb(),d.Sb(9,"td"),d.Cc(10),d.Rb(),d.Sb(11,"td"),d.Cc(12),d.dc(13,"number"),d.Rb(),d.Sb(14,"td"),d.Sb(15,"div",42),d.Sb(16,"a",43),d.Nb(17,"i",44),d.Rb(),d.Sb(18,"div",45),d.Ac(19,g,3,0,"a",46),d.Sb(20,"a",47),d.ac("click",(function(){d.uc(r);var e=t.$implicit,o=t.index;return d.cc().deleteObject(e,o)})),d.Nb(21,"i",48),d.Cc(22," Delete "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()}if(2&e){var o=t.$implicit,n=t.index,i=d.cc();d.zb(2),d.Dc(n+1),d.zb(2),d.Dc(null==o?null:o.product_name),d.zb(2),d.Dc(null==o?null:o.sku_no),d.zb(2),d.Dc(null==o?null:o.qty),d.zb(2),d.Fc("",null==i.currentCompany?null:null==i.currentCompany.currency?null:i.currentCompany.currency.label," ",null==o?null:o.price,""),d.zb(2),d.Fc("",null==i.currentCompany?null:null==i.currentCompany.currency?null:i.currentCompany.currency.label," ",d.ec(13,9,(null==o?null:o.qty)*(null==o?null:o.price)),""),d.zb(7),d.jc("ngIf",i.isEditing)}}function y(e,t){1&e&&(d.Sb(0,"tr"),d.Sb(1,"td",50),d.Cc(2,"No records found"),d.Rb(),d.Rb())}var _,C=function(e){return{"has-error":e}},w=((_=function(){function e(t,r,o,i,c,d,b){_classCallCheck(this,e),this.router=t,this.activatedRoute=r,this.dataservice=o,this.fb=i,this.orderService=c,this.cdr=d,this.paginationService=b,this.PageTitle="Add Order",this.exampleOptions={defaultDate:new Date,dateFormat:a.a},this.supplierListArray=[],this.objectArray=[],this.clientListArray=[],this.loadingState=!1,this.showLoader=!1,this.formErrors={apierror:null,order_no:null},this.isEditing=!1,this.editId=null,this.orderId=!1,this.currentPage=1,this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({po_no:[null,n.t.compose([n.t.required])],po_date:[null,n.t.compose([n.t.required])],supplier_id:[null,n.t.compose([n.t.required])],client_id:[null],notes:[null],invoice_no:[null]})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.dataservice.currentCompany.subscribe((function(t){t&&(e.currentCompany=t)})),this.orderDate=new Date,this.addForm.patchValue({po_date:new Date}),this.getMasterData(),this.isEditing&&(this.getEditObject(),this.getOrderProductList())}},{key:"getMasterData",value:function(){var e=this;this.orderService.getOrderMasterData().subscribe((function(t){t.success&&(e.supplierListArray=t.data.supplier,e.clientListArray=t.data.client)}))}},{key:"getOrderProductList",value:function(){var e=this;this.orderService.getOrderProductList({order_id:this.editId}).subscribe((function(t){e.loadingState=!1,t.success&&t.data?(e.objectArray=t.data.list,e.pagination=e.paginationService.getPager(t.data.pagination.total_page,e.currentPage)):(e.objectArray=[],e.pagination=null)}),(function(t){e.loadingState=!1,e.objectArray=[],e.pagination=null}))}},{key:"getEditObject",value:function(){var e=this;this.orderService.getOrderById(this.editId).subscribe((function(t){t.success?(e.orderDate=t.data.po_date,e.addForm.patchValue({po_no:t.data.po_no,supplier_id:t.data.supplier_id,client_id:t.data.client_id,po_date:t.data.po_date,notes:t.data.notes?t.data.notes:"",invoice_no:t.data.invoice_no})):e.router.navigateByUrl("/inbound/order")}))}},{key:"getPage",value:function(e){this.currentPage=e,this.currentPage=1,this.getOrderProductList()}},{key:"onProductSubmit",value:function(e){e&&(e.index?this.objectArray[e.index]=e:this.objectArray.push(e))}},{key:"submitForm",value:function(e){var t=this;if(e.valid){this.showLoader=!0;var r=new FormData;r.append("po_no",e.value.po_no),r.append("po_date",i.a.changedateFormate(e.value.po_date[0])),r.append("supplier_id",e.value.supplier_id),r.append("client_id",e.value.client_id),r.append("invoice_no",e.value.invoice_no),r.append("notes",e.value.notes?e.value.notes:""),this.isEditing?this.orderService.editOrder(this.editId,r).subscribe((function(e){if(t.showLoader=!1,e.success){if(t.objectArray&&t.objectArray.length>0){var r=[];t.objectArray.filter((function(e){e.po_detail_id||r.push(e)})),r.filter((function(e){e.order_id=t.editId})),t.orderService.addOrderProduct(r).subscribe((function(e){t.showLoader=!1}),(function(e){t.showLoader=!1}))}t.router.navigateByUrl("/inbound/order")}}),(function(e){t.showLoader=!1})):this.orderService.addOrder(r).subscribe((function(e){if(t.showLoader=!1,e.success){var r=e.data.po_id;t.objectArray&&t.objectArray.length>0&&(t.objectArray.filter((function(e){e.order_id=r})),t.orderService.addOrderProduct(t.objectArray).subscribe((function(e){t.showLoader=!1}),(function(e){t.showLoader=!1}))),t.router.navigateByUrl("/inbound/order")}}),(function(e){t.showLoader=!1}))}}},{key:"addform",value:function(){var e=this;this.addForm.value.po_no?setTimeout((function(){e.productAdd.addObject()}),200):this.formErrors.order_no="* Plese Enter Order Number"}},{key:"editform",value:function(e,t,r){var o=this;setTimeout((function(){o.productAdd.editObject(e,t,r,o.editId,o.addForm.value.po_no)}),200)}},{key:"onRelodeEvent",value:function(e){e&&(this.getOrderProductList(),this.addForm.patchValue({po_date:new Date}))}},{key:"deleteObject",value:function(e,t){var r=this;swal.fire({title:a.b.delete_header_text,text:a.b.delete_smalll_text,icon:a.b.delete_dialogue_type,showCancelButton:!0,confirmButtonText:a.b.delete_confirm_button,cancelButtonText:a.b.delete_cancel_button}).then((function(o){o.value&&(e.po_detail_id?r.orderService.deleteOrderProduct(e.po_detail_id).subscribe((function(e){e.success&&r.getOrderProductList()})):r.objectArray.splice(t,1))})).catch(swal.noop)}},{key:"removeError",value:function(){this.addForm.value.po_no&&(this.formErrors.order_no=null)}},{key:"ngAfterViewChecked",value:function(){this.cdr.detectChanges()}}]),e}()).\u0275fac=function(e){return new(e||_)(d.Mb(b.e),d.Mb(b.a),d.Mb(l.a),d.Mb(n.e),d.Mb(u.a),d.Mb(d.h),d.Mb(s.a))},_.\u0275cmp=d.Gb({type:_,selectors:[["app-add-order"]],viewQuery:function(e,t){var r;1&e&&d.Ic(c.a,!0),2&e&&d.rc(r=d.bc())&&(t.productAdd=r.first)},decls:94,vars:23,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"col-7"],[1,"col-6"],[1,"form-group",3,"ngClass"],[1,"control-label","text-md-right"],[1,""],["type","text","placeholder","",1,"form-control",3,"formControl","change"],["class","help-block",3,"innerHTML",4,"ngIf"],[1,"form-group"],[1,"date-picker"],[3,"setDate","formControl","config"],[1,"date-picker-icon"],[1,"fa","fa-calendar"],["bindLabel","label","bindValue","value","placeholder","Select Supplier",3,"formControl","items"],["bindLabel","label","bindValue","value","placeholder","Select Client",3,"formControl","items"],["type","text","placeholder","",1,"form-control",3,"formControl"],[1,"row","mt-5"],[1,"col-7","d-flex","align-items-center"],[1,"col-5","text-right"],["type","button",1,"btn","btn-light",3,"click"],[1,"la","la-plus"],[1,"row","mt-3"],[1,"table-responsive-md"],[1,"table"],["width","80",1,"text-right"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"paginationList","currentPage","onPageChange"],[1,"col-5"],["rows","2",1,"form-control",3,"formControl"],[1,"text-right","border-top","py-4","mt-5","card-footer"],["type","button","routerLink","/inbound/order",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2"],[3,"ProductList","orderNo","onRelodeEvent","onProductSubmit"],[1,"help-block",3,"innerHTML"],[1,"action-drop","dropdown","text-right"],["href","#","data-toggle","dropdown","title","",1,"btn","shadow-none","btn-default","btn-sm","btn-icon-only"],[1,"fa","fa-ellipsis-h"],[1,"dropdown-menu","dropdown-icon-menu","drop-menu-right",2,"width","100px"],["class","dropdown-item",3,"click",4,"ngIf"],[1,"dropdown-item",3,"click"],[1,"fa","fa-trash","fa-fw","text-primary"],[1,"fa","fa-edit","fa-fw","text-primary"],["colspan","7"]],template:function(e,t){1&e&&(d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"div",3),d.Sb(4,"h2",4),d.Cc(5),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(6,"div",5),d.Sb(7,"form",6),d.ac("ngSubmit",(function(){return t.submitForm(t.addForm)})),d.Sb(8,"div",7),d.Sb(9,"div",2),d.Sb(10,"div",8),d.Sb(11,"div",2),d.Sb(12,"div",9),d.Sb(13,"div",10),d.Sb(14,"label",11),d.Cc(15,"Order No. "),d.Sb(16,"em"),d.Cc(17,"*"),d.Rb(),d.Rb(),d.Sb(18,"div",12),d.Sb(19,"input",13),d.ac("change",(function(){return t.removeError()})),d.Rb(),d.Ac(20,S,1,1,"span",14),d.Rb(),d.Rb(),d.Rb(),d.Sb(21,"div",9),d.Sb(22,"div",15),d.Sb(23,"label",11),d.Cc(24,"Order Date "),d.Sb(25,"em"),d.Cc(26,"*"),d.Rb(),d.Rb(),d.Sb(27,"div",16),d.Nb(28,"ng2-flatpickr",17),d.Sb(29,"span",18),d.Nb(30,"span",19),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(31,"div",2),d.Sb(32,"div",9),d.Sb(33,"div",15),d.Sb(34,"label",11),d.Cc(35,"Supplier "),d.Sb(36,"em"),d.Cc(37,"*"),d.Rb(),d.Rb(),d.Nb(38,"ng-select",20),d.Rb(),d.Rb(),d.Sb(39,"div",9),d.Sb(40,"div",15),d.Sb(41,"label",11),d.Cc(42,"Client"),d.Rb(),d.Nb(43,"ng-select",21),d.Rb(),d.Rb(),d.Rb(),d.Sb(44,"div",2),d.Sb(45,"div",9),d.Sb(46,"div",15),d.Sb(47,"label",11),d.Cc(48,"Invoice No. "),d.Rb(),d.Nb(49,"input",22),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(50,"div",23),d.Sb(51,"div",24),d.Sb(52,"h5"),d.Cc(53,"Product"),d.Rb(),d.Rb(),d.Sb(54,"div",25),d.Sb(55,"button",26),d.ac("click",(function(){return t.addform()})),d.Nb(56,"i",27),d.Cc(57," Add Product "),d.Rb(),d.Rb(),d.Rb(),d.Sb(58,"div",28),d.Sb(59,"div",3),d.Sb(60,"div",29),d.Sb(61,"table",30),d.Sb(62,"thead"),d.Sb(63,"tr"),d.Sb(64,"th"),d.Cc(65,"No."),d.Rb(),d.Sb(66,"th"),d.Cc(67,"Product"),d.Rb(),d.Sb(68,"th"),d.Cc(69,"Sku No"),d.Rb(),d.Sb(70,"th"),d.Cc(71,"Order Quantity"),d.Rb(),d.Sb(72,"th"),d.Cc(73,"Price"),d.Rb(),d.Sb(74,"th"),d.Cc(75,"Total Price"),d.Rb(),d.Sb(76,"th",31),d.Cc(77,"Action"),d.Rb(),d.Rb(),d.Rb(),d.Sb(78,"tbody"),d.Ac(79,R,23,11,"tr",32),d.Ac(80,y,3,0,"tr",33),d.Rb(),d.Rb(),d.Rb(),d.Sb(81,"pagination",34),d.ac("onPageChange",(function(e){return t.getPage(e)})),d.Rb(),d.Rb(),d.Rb(),d.Sb(82,"div",2),d.Sb(83,"div",35),d.Sb(84,"div",15),d.Sb(85,"label",11),d.Cc(86,"Notes"),d.Rb(),d.Nb(87,"textarea",36),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(88,"div",37),d.Sb(89,"button",38),d.Cc(90,"Cancel"),d.Rb(),d.Sb(91,"button",39),d.Cc(92,"Submit"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(93,"app-add-product",40),d.ac("onRelodeEvent",(function(e){return t.onRelodeEvent(e)}))("onProductSubmit",(function(e){return t.onProductSubmit(e)})),d.Rb()),2&e&&(d.zb(5),d.Fc("",t.isEditing?"Update":"Create"," ",t.PageTitle,""),d.zb(2),d.jc("formGroup",t.addForm),d.zb(6),d.jc("ngClass",d.nc(21,C,t.formErrors.order_no)),d.zb(6),d.jc("formControl",t.addForm.controls.po_no),d.zb(1),d.jc("ngIf",t.formErrors.order_no),d.zb(8),d.jc("setDate",t.orderDate)("formControl",t.addForm.controls.po_date)("config",t.exampleOptions),d.zb(10),d.jc("formControl",t.addForm.controls.supplier_id)("items",t.supplierListArray),d.zb(5),d.jc("formControl",t.addForm.controls.client_id)("items",t.clientListArray),d.zb(6),d.jc("formControl",t.addForm.controls.invoice_no),d.zb(30),d.jc("ngForOf",t.objectArray),d.zb(1),d.jc("ngIf",!t.loadingState&&0===t.objectArray.length),d.zb(1),d.jc("paginationList",t.pagination)("currentPage",t.currentPage),d.zb(6),d.jc("formControl",t.addForm.controls.notes),d.zb(6),d.jc("ProductList",t.objectArray)("orderNo",t.addForm.value.po_no))},directives:[n.v,n.p,p.a,n.j,o.j,n.c,n.o,n.g,f.a,o.l,h.a,v.a,o.k,m.a,b.f,c.a],pipes:[o.e],encapsulation:2}),_),j=r("PCNd"),P=r("Vr6k"),k=r("QSzr"),A=r("DpbK");r.d(t,"AddOrderModule",(function(){return F}));var L,O=[{path:"",component:w}],F=((L=function e(){_classCallCheck(this,e)}).\u0275mod=d.Kb({type:L}),L.\u0275inj=d.Jb({factory:function(e){return new(e||L)},providers:[u.a],imports:[[o.b,b.i.forChild(O),A.a,h.b,n.l,n.s,j.a,v.b,k.a,P.a]]}),L)}}]);