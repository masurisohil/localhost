(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"Jjl/":function(e,t,a){"use strict";a.r(t);var i=a("ofXK"),n=a("g3N6"),s=a("uq2c"),r=a("tyNb"),c=a("QSzr"),l=a("OTx7"),o=a("FasR"),d=a("fXoL"),h=a("c8VH"),b=a("ICGj"),p=a("jTkZ"),g=a("Eb8l"),u=a("LPFR"),k=a("Pbud");function P(e,t){if(1&e){const e=d.Tb();d.Sb(0,"pagination",12),d.ac("onPageChange",(function(t){return d.tc(e),d.cc().getPage(t)})),d.Rb()}if(2&e){const e=d.cc();d.ic("paginationList",e.pagination)("currentPage",e.currentPage)}}let v=(()=>{class e{constructor(e,t){this.paginationService=e,this.picklistService=t,this.PageTitle="Manage PickList",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.headerData=[]}ngOnInit(){this.loadform=!1,this.setHeaderData(),this.getObjects()}setHeaderData(){this.headerData.push(new o.f({label:"Order No",key:"sales_order.sales_order_no"}),new o.f({label:"Client Name",key:"client.label"}),new o.c({label:"Order Date",key:"sales_order.sales_order_date"}),new o.c({label:"PickList Date",key:"pick_list_date"}),new o.f({label:"Delievery Name",key:"delivery_name"}),new o.f({label:"Receipt Name",key:"receiver_name"}));let e=new o.a({edit:{path:"/outbound/pick-list/edit/",id:"pick_list_id"},view:{path:"/outbound/pick-list/view/",id:"pick_list_id"},delete:{path:"picking/",id:"pick_list_id"}});this.headerData.push(e)}getObjects(){const e={page:this.currentPage};this.searchText&&(e.search=this.searchText),this.picklistService.getPickList(e).subscribe(e=>{this.loadingState=!1,e.success?(this.objectArray=e.data.list?e.data.list:[],this.showPagination=!0,this.pagination=this.paginationService.getPager(e.data.pagination.total_page,this.currentPage)):(this.objectArray=[],this.pagination=null)},e=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(e){this.currentPage=e,this.getObjects()}searchObject(e){this.searchText=e,this.currentPage=1,this.getObjects()}onReloadEvent(){this.getObjects()}}return e.\u0275fac=function(t){return new(t||e)(d.Mb(h.a),d.Mb(b.a))},e.\u0275cmp=d.Gb({type:e,selectors:[["app-pick-list"]],decls:14,vars:7,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col","d-flex"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(e,t){1&e&&(d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"div",3),d.Sb(4,"h2",4),d.Bc(5),d.Rb(),d.Sb(6,"div",5),d.Sb(7,"search-box",6),d.ac("text",(function(e){return t.searchObject(e)})),d.Rb(),d.Rb(),d.Sb(8,"div",5),d.Nb(9,"app-btn-add",7),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(10,"div",8),d.Sb(11,"div",9),d.Sb(12,"app-table-list",10),d.ac("reloadEvent",(function(){return t.onReloadEvent()})),d.Rb(),d.zc(13,P,1,2,"pagination",11),d.Rb(),d.Rb(),d.Rb()),2&e&&(d.zb(5),d.Cc(t.PageTitle),d.zb(2),d.ic("placeholder","Search Here..."),d.zb(2),d.ic("btnName","Add PickList")("editData","/outbound/pick-list/generate"),d.zb(3),d.ic("headerData",t.headerData)("rawData",t.objectArray),d.zb(1),d.ic("ngIf",t.showPagination))},directives:[p.a,g.a,u.a,i.l,k.a],encapsulation:2}),e})();a.d(t,"PickListModule",(function(){return f}));const _=[{path:"",component:v,data:{title:"pick_list_list"}},{path:"generate",loadChildren:()=>Promise.all([a.e(3),a.e(10)]).then(a.bind(null,"8D99")).then(e=>e.GenerateModule),data:{title:"add_pick_list"}},{path:"edit",loadChildren:()=>Promise.all([a.e(3),a.e(10)]).then(a.bind(null,"8D99")).then(e=>e.GenerateModule),data:{title:"edit_pick_list"}},{path:"view",loadChildren:()=>a.e(53).then(a.bind(null,"o7z2")).then(e=>e.PickListViewModule),data:{title:"view_pick_list"}},{path:"generate-pick-list",loadChildren:()=>Promise.all([a.e(3),a.e(0),a.e(24)]).then(a.bind(null,"x2YT")).then(e=>e.GeneratePickListModule),data:{title:"add_pick_list"}}];let f=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},providers:[b.a],imports:[[i.b,n.a,s.a,c.a,l.a,r.i.forChild(_)]]}),e})()}}]);