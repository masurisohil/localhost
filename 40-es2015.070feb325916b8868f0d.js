(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"9RdM":function(l,e,r){"use strict";r.r(e);var t=r("ofXK"),i=r("fXoL"),d=r("tyNb"),s=r("HNGx"),a=r("AwSQ");function n(l,e){if(1&l&&(i.Sb(0,"div",32),i.Cc(1),i.dc(2,"date"),i.dc(3,"date"),i.Rb()),2&l){const l=i.cc();i.zb(1),i.Fc(" ",i.gc(2,2,null==l.orderDetails?null:l.orderDetails.arrival_date,l.date_format,l.timezone)," ",i.gc(3,6,null==l.orderDetails?null:l.orderDetails.arrival_date,l.time_format,l.timezone)," ")}}function o(l,e){1&l&&(i.Sb(0,"div",32),i.Cc(1,"- "),i.Rb())}function b(l,e){if(1&l&&(i.Sb(0,"span"),i.Cc(1),i.Rb()),2&l){const l=i.cc();i.zb(1),i.Ec(" ",null==l.orderDetails?null:null==l.orderDetails.supplier?null:null==l.orderDetails.supplier.address?null:l.orderDetails.supplier.address.street_address," ,")}}function u(l,e){if(1&l&&(i.Sb(0,"span"),i.Cc(1),i.Rb()),2&l){const l=i.cc();i.zb(1),i.Ec(" ",null==l.orderDetails?null:null==l.orderDetails.supplier?null:null==l.orderDetails.supplier.address?null:l.orderDetails.supplier.address.city," ,")}}function c(l,e){if(1&l&&(i.Sb(0,"span"),i.Cc(1),i.Rb()),2&l){const l=i.cc();i.zb(1),i.Ec(" ",null==l.orderDetails?null:null==l.orderDetails.supplier?null:null==l.orderDetails.supplier.address?null:l.orderDetails.supplier.address.state," ,")}}function D(l,e){if(1&l&&(i.Sb(0,"span"),i.Cc(1),i.Rb()),2&l){const l=i.cc();i.zb(1),i.Ec(" (",null==l.orderDetails?null:null==l.orderDetails.supplier?null:null==l.orderDetails.supplier.address?null:l.orderDetails.supplier.address.country_name," )")}}function p(l,e){if(1&l&&(i.Sb(0,"span"),i.Cc(1),i.Rb()),2&l){const l=i.cc();i.zb(1),i.Ec(" ",null==l.orderDetails?null:null==l.orderDetails.to_details?null:null==l.orderDetails.to_details.address?null:l.orderDetails.to_details.address.street_address," ,")}}function S(l,e){if(1&l&&(i.Sb(0,"span"),i.Cc(1),i.Rb()),2&l){const l=i.cc();i.zb(1),i.Ec(" ",null==l.orderDetails?null:null==l.orderDetails.to_details?null:null==l.orderDetails.to_details.address?null:l.orderDetails.to_details.address.city," ,")}}function R(l,e){if(1&l&&(i.Sb(0,"span"),i.Cc(1),i.Rb()),2&l){const l=i.cc();i.zb(1),i.Ec(" ",null==l.orderDetails?null:null==l.orderDetails.to_details?null:null==l.orderDetails.to_details.address?null:l.orderDetails.to_details.address.state," ,")}}function v(l,e){if(1&l&&(i.Sb(0,"span"),i.Cc(1),i.Rb()),2&l){const l=i.cc();i.zb(1),i.Ec(" (",null==l.orderDetails?null:null==l.orderDetails.to_details?null:null==l.orderDetails.to_details.address?null:l.orderDetails.to_details.address.country_name," )")}}function _(l,e){if(1&l&&(i.Sb(0,"tr"),i.Sb(1,"td"),i.Cc(2),i.Rb(),i.Sb(3,"td"),i.Cc(4),i.Rb(),i.Sb(5,"td"),i.Cc(6),i.Rb(),i.Sb(7,"td"),i.Cc(8),i.Rb(),i.Sb(9,"td"),i.Cc(10),i.Rb(),i.Sb(11,"td"),i.Cc(12),i.Rb(),i.Sb(13,"td"),i.Cc(14),i.Rb(),i.Rb()),2&l){const l=e.$implicit,r=e.index;i.zb(2),i.Ec(" ",r," "),i.zb(2),i.Ec(" ",null!=l&&l.product_name?null==l?null:l.product_name:"-"," "),i.zb(2),i.Ec(" ",null!=l&&l.sku_no?null==l?null:l.sku_no:"-"," "),i.zb(2),i.Ec(" ",null==l?null:l.order_qty," "),i.zb(2),i.Ec(" ",null==l?null:l.received_qty," "),i.zb(2),i.Ec(" ",null==l?null:l.damaged_qty," "),i.zb(2),i.Ec(" ",null==l?null:l.missing_qty," ")}}function m(l,e){1&l&&(i.Sb(0,"tr"),i.Sb(1,"td",33),i.Cc(2,"No records found"),i.Rb(),i.Rb())}let f=(()=>{class l{constructor(l,e,r,t){this.activatedRoute=l,this.unloadService=e,this.location=r,this.dataService=t,this.PageTitle="Unloading View",this.orderDetails={},this.productList=[],this.date_format="M/d/yy",this.activatedRoute.snapshot.paramMap.get("id")&&(this.viewId=this.activatedRoute.snapshot.paramMap.get("id"))}ngOnInit(){this.dataService.currentCompany.subscribe(l=>{l&&(this.timezone=l.timezone.label,this.time_format=l.time_format.label,this.date_format=l.date_format.label,this.currentCompany=l)}),this.getObject()}back(){this.location.back()}getObject(){this.unloadService.getUnloadGeneratedViewById(this.viewId).subscribe(l=>{l.success?(this.orderDetails=l.data.order_detail,this.productList=l.data.product):(this.orderDetails={},this.productList=[])},l=>{this.orderDetails={},this.productList=[]})}print(){window.print()}}return l.\u0275fac=function(e){return new(e||l)(i.Mb(d.a),i.Mb(s.a),i.Mb(t.h),i.Mb(a.a))},l.\u0275cmp=i.Gb({type:l,selectors:[["app-unloading-view"]],decls:145,vars:40,consts:[[1,"container-fluid"],[1,"page-header","border-b"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[1,"btn","shadow-none","btn-link",3,"click"],[1,"fa","fa-chevron-left","mr-2","mt-1"],[1,"btn","btn-dark",3,"click"],[1,"fa","fa-print","mr-2","mt-1"],[1,"card"],[1,"row"],[1,"col-md-6"],[1,"text-muted","mb-1","font-weight-bold"],[1,"mt-3"],[1,"col-md-7","text-right","align-items-center","d-flex","justify-content-end"],[1,"col-md-5"],[1,"border","p-2"],["class","border p-2 border-top-0 border-bottom-0",4,"ngIf"],[1,"border","my-4","border-left-0","border-right-0"],[1,"row","p-3"],[1,"mb-3"],[1,"mt-3","mb-0"],[1,"my-1"],[4,"ngIf"],[1,"mb-0"],[1,"col"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"row","my-4","border","border-left-0","border-right-0","py-3"],[1,"row","mt-3"],[1,"row","mt-2"],[1,"border","p-2","border-top-0","border-bottom-0"],["colspan","6"]],template:function(l,e){1&l&&(i.Sb(0,"div",0),i.Sb(1,"div",1),i.Sb(2,"div",2),i.Sb(3,"h2",3),i.Cc(4),i.Rb(),i.Sb(5,"div",4),i.Sb(6,"a",5),i.ac("click",(function(){return e.back()})),i.Nb(7,"i",6),i.Cc(8,"Back to Order "),i.Rb(),i.Rb(),i.Sb(9,"div",4),i.Sb(10,"a",7),i.ac("click",(function(){return e.print()})),i.Nb(11,"i",8),i.Cc(12,"Print "),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(13,"div",9),i.Sb(14,"div",10),i.Sb(15,"div",11),i.Sb(16,"div"),i.Sb(17,"label",12),i.Cc(18,"Purchase Order Number"),i.Rb(),i.Sb(19,"div"),i.Cc(20),i.Rb(),i.Rb(),i.Sb(21,"div",13),i.Sb(22,"label",12),i.Cc(23,"PO Date"),i.Rb(),i.Sb(24,"div"),i.Cc(25),i.dc(26,"date"),i.Rb(),i.Rb(),i.Rb(),i.Sb(27,"div",11),i.Sb(28,"div",10),i.Sb(29,"div",14),i.Sb(30,"label",12),i.Cc(31,"Date of Receipt"),i.Rb(),i.Rb(),i.Sb(32,"div",15),i.Sb(33,"div",16),i.Cc(34),i.dc(35,"date"),i.Rb(),i.Rb(),i.Rb(),i.Sb(36,"div",10),i.Sb(37,"div",14),i.Sb(38,"label",12),i.Cc(39,"Product Arrival Date & Time"),i.Rb(),i.Rb(),i.Sb(40,"div",15),i.Ac(41,n,4,10,"div",17),i.Ac(42,o,2,0,"div",17),i.Rb(),i.Rb(),i.Sb(43,"div",10),i.Sb(44,"div",14),i.Sb(45,"label",12),i.Cc(46,"Invoice No. "),i.Rb(),i.Rb(),i.Sb(47,"div",15),i.Sb(48,"div",16),i.Cc(49),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(50,"div",18),i.Sb(51,"div",19),i.Sb(52,"div",11),i.Sb(53,"h5",20),i.Cc(54,"From"),i.Rb(),i.Sb(55,"p",21),i.Cc(56),i.Rb(),i.Sb(57,"p",22),i.Ac(58,b,2,1,"span",23),i.Ac(59,u,2,1,"span",23),i.Ac(60,c,2,1,"span",23),i.Ac(61,D,2,1,"span",23),i.Rb(),i.Sb(62,"p",24),i.Cc(63),i.Rb(),i.Rb(),i.Sb(64,"div",11),i.Sb(65,"h5"),i.Cc(66,"To"),i.Rb(),i.Sb(67,"p",21),i.Cc(68),i.Rb(),i.Sb(69,"p",22),i.Ac(70,p,2,1,"span",23),i.Ac(71,S,2,1,"span",23),i.Ac(72,R,2,1,"span",23),i.Ac(73,v,2,1,"span",23),i.Rb(),i.Sb(74,"p",24),i.Cc(75),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(76,"div",10),i.Sb(77,"div",25),i.Sb(78,"div",26),i.Sb(79,"table",27),i.Sb(80,"thead"),i.Sb(81,"tr"),i.Sb(82,"th"),i.Cc(83,"No."),i.Rb(),i.Sb(84,"th"),i.Cc(85,"Product"),i.Rb(),i.Sb(86,"th"),i.Cc(87,"SKU No."),i.Rb(),i.Sb(88,"th"),i.Cc(89,"Order Qty (pcs)"),i.Rb(),i.Sb(90,"th"),i.Cc(91,"Receive Qty (pcs)"),i.Rb(),i.Sb(92,"th"),i.Cc(93,"Damage Qty"),i.Rb(),i.Sb(94,"th"),i.Cc(95,"Missing Qty"),i.Rb(),i.Rb(),i.Rb(),i.Sb(96,"tbody"),i.Ac(97,_,15,7,"tr",28),i.Ac(98,m,3,0,"tr",23),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(99,"div",29),i.Sb(100,"div",11),i.Sb(101,"h5"),i.Cc(102,"Delivery By"),i.Rb(),i.Sb(103,"div",30),i.Sb(104,"div",11),i.Sb(105,"label",12),i.Cc(106,"Name"),i.Rb(),i.Sb(107,"div"),i.Cc(108),i.Rb(),i.Rb(),i.Sb(109,"div",11),i.Sb(110,"label",12),i.Cc(111,"Phone No."),i.Rb(),i.Sb(112,"div"),i.Cc(113),i.Rb(),i.Rb(),i.Rb(),i.Sb(114,"div",31),i.Sb(115,"div",11),i.Sb(116,"label",12),i.Cc(117,"Vehicle No."),i.Rb(),i.Sb(118,"div"),i.Cc(119),i.Rb(),i.Rb(),i.Sb(120,"div",11),i.Sb(121,"label",12),i.Cc(122,"Signature"),i.Rb(),i.Sb(123,"div"),i.Cc(124),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Sb(125,"div",11),i.Sb(126,"h5"),i.Cc(127,"Received By"),i.Rb(),i.Sb(128,"div",30),i.Sb(129,"div",11),i.Sb(130,"label",12),i.Cc(131,"Name"),i.Rb(),i.Sb(132,"div"),i.Cc(133),i.Rb(),i.Rb(),i.Sb(134,"div",11),i.Sb(135,"label",12),i.Cc(136,"Phone No."),i.Rb(),i.Sb(137,"div"),i.Cc(138),i.Rb(),i.Rb(),i.Rb(),i.Sb(139,"div",31),i.Sb(140,"div",11),i.Sb(141,"label",12),i.Cc(142,"Signature"),i.Rb(),i.Sb(143,"div"),i.Cc(144),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb(),i.Rb()),2&l&&(i.zb(4),i.Dc(e.PageTitle),i.zb(16),i.Ec(" ",null==e.orderDetails?null:e.orderDetails.po_no," "),i.zb(5),i.Dc(i.gc(26,32,null==e.orderDetails?null:e.orderDetails.po_date,e.date_format,e.timezone)),i.zb(9),i.Dc(i.gc(35,36,null==e.orderDetails?null:e.orderDetails.receipt_date,e.date_format,e.timezone)),i.zb(7),i.jc("ngIf",null==e.orderDetails?null:e.orderDetails.arrival_date),i.zb(1),i.jc("ngIf",!(null!=e.orderDetails&&e.orderDetails.arrival_date)),i.zb(7),i.Dc(null!=e.orderDetails&&e.orderDetails.invoice_no?null==e.orderDetails?null:e.orderDetails.invoice_no:"-"),i.zb(7),i.Fc("",null==e.orderDetails?null:null==e.orderDetails.supplier?null:e.orderDetails.supplier.supplier_code," : ",null==e.orderDetails?null:null==e.orderDetails.supplier?null:e.orderDetails.supplier.supplier_name,""),i.zb(2),i.jc("ngIf",null==e.orderDetails?null:null==e.orderDetails.supplier?null:null==e.orderDetails.supplier.address?null:e.orderDetails.supplier.address.street_address),i.zb(1),i.jc("ngIf",null==e.orderDetails?null:null==e.orderDetails.supplier?null:null==e.orderDetails.supplier.address?null:e.orderDetails.supplier.address.city),i.zb(1),i.jc("ngIf",null==e.orderDetails?null:null==e.orderDetails.supplier?null:null==e.orderDetails.supplier.address?null:e.orderDetails.supplier.address.state),i.zb(1),i.jc("ngIf",null==e.orderDetails?null:null==e.orderDetails.supplier?null:null==e.orderDetails.supplier.address?null:e.orderDetails.supplier.address.country_name),i.zb(2),i.Fc(" ",null==e.orderDetails?null:null==e.orderDetails.supplier?null:e.orderDetails.supplier.dial_code," ",null==e.orderDetails?null:null==e.orderDetails.supplier?null:e.orderDetails.supplier.phone_number," "),i.zb(5),i.Fc("",null==e.orderDetails?null:null==e.orderDetails.to_details?null:e.orderDetails.to_details.client_code," : ",null==e.orderDetails?null:null==e.orderDetails.to_details?null:e.orderDetails.to_details.client_name,""),i.zb(2),i.jc("ngIf",null==e.orderDetails?null:null==e.orderDetails.to_details?null:null==e.orderDetails.to_details.address?null:e.orderDetails.to_details.address.street_address),i.zb(1),i.jc("ngIf",null==e.orderDetails?null:null==e.orderDetails.to_details?null:null==e.orderDetails.to_details.address?null:e.orderDetails.to_details.address.city),i.zb(1),i.jc("ngIf",null==e.orderDetails?null:null==e.orderDetails.to_details?null:null==e.orderDetails.to_details.address?null:e.orderDetails.to_details.address.state),i.zb(1),i.jc("ngIf",null==e.orderDetails?null:null==e.orderDetails.to_details?null:null==e.orderDetails.to_details.address?null:e.orderDetails.to_details.address.country_name),i.zb(2),i.Fc(" ",null==e.orderDetails?null:null==e.orderDetails.to_details?null:e.orderDetails.to_details.dial_code," ",null==e.orderDetails?null:null==e.orderDetails.to_details?null:e.orderDetails.to_details.phone_number," "),i.zb(22),i.jc("ngForOf",e.productList),i.zb(1),i.jc("ngIf",0==e.productList.length),i.zb(10),i.Dc(null!=e.orderDetails&&e.orderDetails.delivery_name?null==e.orderDetails?null:e.orderDetails.delivery_name:"-"),i.zb(5),i.Dc(null!=e.orderDetails&&e.orderDetails.delivery_phone?null==e.orderDetails?null:e.orderDetails.delivery_phone:"-"),i.zb(6),i.Dc(null!=e.orderDetails&&e.orderDetails.delivery_vehicle_no?null==e.orderDetails?null:e.orderDetails.delivery_vehicle_no:"-"),i.zb(5),i.Dc(null!=e.orderDetails&&e.orderDetails.delivery_sign?null==e.orderDetails?null:e.orderDetails.delivery_sign:"-"),i.zb(9),i.Dc(null!=e.orderDetails&&e.orderDetails.receiver_name?null==e.orderDetails?null:e.orderDetails.receiver_name:"-"),i.zb(5),i.Dc(null!=e.orderDetails&&e.orderDetails.receiver_phone?null==e.orderDetails?null:e.orderDetails.receiver_phone:"-"),i.zb(6),i.Dc(null!=e.orderDetails&&e.orderDetails.receiver_sign?null==e.orderDetails?null:e.orderDetails.receiver_sign:"-"))},directives:[t.l,t.k],pipes:[t.d],encapsulation:2}),l})();r.d(e,"UnloadingViewModule",(function(){return C}));const h=[{path:":id",component:f}];let C=(()=>{class l{}return l.\u0275mod=i.Kb({type:l}),l.\u0275inj=i.Jb({factory:function(e){return new(e||l)},imports:[[t.b,d.i.forChild(h)]]}),l})()}}]);