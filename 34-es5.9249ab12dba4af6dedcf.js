function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,a,t){return a&&_defineProperties(e.prototype,a),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"Pd/b":function(e,a,t){"use strict";t.r(a);var n=t("ofXK"),i=t("tyNb"),r=t("g3N6"),o=t("uq2c"),c=t("OTx7"),s=t("QSzr"),u=t("PCNd"),d=t("FasR"),l=t("fXoL"),b=t("c8VH"),h=t("Fg9w"),g=t("jTkZ"),p=t("Eb8l"),f=t("LPFR"),y=t("Pbud");function w(e,a){if(1&e){var t=l.Tb();l.Sb(0,"pagination",12),l.ac("onPageChange",(function(e){return l.uc(t),l.cc().getPage(e)})),l.Rb()}if(2&e){var n=l.cc();l.jc("paginationList",n.pagination)("currentPage",n.currentPage)}}var P,v=((P=function(){function e(a,t){_classCallCheck(this,e),this.paginationService=a,this.putawayService=t,this.PageTitle="Manage Putaway",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.headerData=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.loadform=!1,this.setHeaderData(),this.getObjects()}},{key:"setHeaderData",value:function(){this.headerData.push(new d.f({label:"Order Number",key:"order.po_no"}),new d.f({label:"Transfer Order No",key:"transfer_order_no"}),new d.f({label:"SKU",key:"sku_no.sku_no"}),new d.f({label:"Bin Code",key:"put_away.bin_code"}),new d.f({label:"Bin Tag Id",key:"put_away.bin_tag_id"}),new d.f({label:"Putaway Qty",key:"put_away.put_away_qty"}));var e=new d.a({edit:{path:"/inbound/put-away/edit/",id:"transfer_order_id"},delete:{path:"transfer-order/",id:"transfer_order_id"}});this.headerData.push(e)}},{key:"getObjects",value:function(){var e=this,a={page:this.currentPage};this.searchText&&(a.search=this.searchText),this.putawayService.getPutAwayList(a).subscribe((function(a){e.loadingState=!1,a.success?(e.objectArray=a.data.list?a.data.list:[],e.showPagination=!0,e.pagination=e.paginationService.getPager(a.data.pagination.total_page,e.currentPage)):(e.objectArray=[],e.pagination=null)}),(function(a){e.loadingState=!1,e.objectArray=[],e.pagination=null}))}},{key:"getPage",value:function(e){this.currentPage=e,this.getObjects()}},{key:"searchObject",value:function(e){this.searchText=e,this.currentPage=1,this.getObjects()}},{key:"onReloadEvent",value:function(){this.getObjects()}}]),e}()).\u0275fac=function(e){return new(e||P)(l.Mb(b.a),l.Mb(h.a))},P.\u0275cmp=l.Gb({type:P,selectors:[["app-put-away"]],decls:14,vars:7,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col","d-flex"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(e,a){1&e&&(l.Sb(0,"div",0),l.Sb(1,"div",1),l.Sb(2,"div",2),l.Sb(3,"div",3),l.Sb(4,"h2",4),l.Cc(5),l.Rb(),l.Sb(6,"div",5),l.Sb(7,"search-box",6),l.ac("text",(function(e){return a.searchObject(e)})),l.Rb(),l.Rb(),l.Sb(8,"div",5),l.Nb(9,"app-btn-add",7),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(10,"div",8),l.Sb(11,"div",9),l.Sb(12,"app-table-list",10),l.ac("reloadEvent",(function(){return a.onReloadEvent()})),l.Rb(),l.Ac(13,w,1,2,"pagination",11),l.Rb(),l.Rb(),l.Rb()),2&e&&(l.zb(5),l.Dc(a.PageTitle),l.zb(2),l.jc("placeholder","Search Here..."),l.zb(2),l.jc("btnName","Add Putaway")("editData","/inbound/put-away/add"),l.zb(3),l.jc("headerData",a.headerData)("rawData",a.objectArray),l.zb(1),l.jc("ngIf",a.showPagination))},directives:[g.a,p.a,f.a,n.l,y.a],encapsulation:2}),P);t.d(a,"PutAwayModule",(function(){return j}));var _,S=[{path:"",component:v,data:{title:"product_register_list"}},{path:"add",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(8)]).then(t.bind(null,"Sg2+")).then((function(e){return e.AddPutAwayModule}))},data:{title:"add_product_register"}},{path:"edit",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(8)]).then(t.bind(null,"Sg2+")).then((function(e){return e.AddPutAwayModule}))},data:{title:"edit_product_register"}}],j=((_=function e(){_classCallCheck(this,e)}).\u0275mod=l.Kb({type:_}),_.\u0275inj=l.Jb({factory:function(e){return new(e||_)},providers:[h.a],imports:[[n.b,i.i.forChild(S),c.a,r.a,o.a,s.a,u.a]]}),_)}}]);