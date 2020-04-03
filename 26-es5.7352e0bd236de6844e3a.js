function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,a){return e&&_defineProperties(t.prototype,e),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"19WJ":function(t,e,a){"use strict";a.r(e);var n,i=a("ofXK"),o=a("FasR"),c=a("fXoL"),r=a("tyNb"),s=a("c8VH"),u=a("Q05f"),l=a("AwSQ"),p=a("jTkZ"),d=a("Eb8l"),h=a("LPFR"),y=((n=function(){function t(e,a,n,i){_classCallCheck(this,t),this.router=e,this.paginationService=a,this.companyService=n,this.dataService=i,this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.PageTitle="Company",this.headerData=[]}return _createClass(t,[{key:"ngOnInit",value:function(){this.loadform=!1,this.setHeaderData(),this.getObjects()}},{key:"setHeaderData",value:function(){this.headerData.push(new o.e({label:"Company Name",key:"company_name",viewUrl:{path:"/company/edit/",id:"company_id"}}),new o.f({label:"Company Email",key:"company_email"}));var t=new o.a({edit:{path:"/company/edit/",id:"company_id"},view:{path:"/company/view/",id:"company_id"}});this.headerData.push(t)}},{key:"getObjects",value:function(){var t=this,e={page:this.currentPage};this.searchText&&(e.search=this.searchText),this.companyService.getCompanyList(e).subscribe((function(e){t.loadingState=!1,e.success?(t.objectArray=e.data.list,t.pagination=t.paginationService.getPager(e.data.pagination.total_page,t.currentPage)):(t.objectArray=[],t.pagination=null)}),(function(e){t.loadingState=!1,t.objectArray=[],t.pagination=null}))}},{key:"getPage",value:function(t){this.currentPage=t,this.getObjects()}},{key:"searchObject",value:function(t){this.searchText=t,this.currentPage=1,this.getObjects()}},{key:"onReloadEvent",value:function(){this.getObjects()}},{key:"onClickEvent",value:function(t){this.onCompanySelect(t)}},{key:"onCompanySelect",value:function(t){var e=this;this.companyService.selectCompany(t.company_id).subscribe((function(t){t.success?(e.dataService.saveToken(t.data.Token.token),e.dataService.updateCompany(t.data.Company),e.router.navigateByUrl("/dashboard")):(e.objectArray=[],e.pagination=null)}))}}]),t}()).\u0275fac=function(t){return new(t||n)(c.Mb(r.e),c.Mb(s.a),c.Mb(u.a),c.Mb(l.a))},n.\u0275cmp=c.Gb({type:n,selectors:[["app-company-list"]],decls:13,vars:6,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col","d-flex"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent","clickEvent"]],template:function(t,e){1&t&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"div",2),c.Sb(3,"div",3),c.Sb(4,"h2",4),c.Cc(5),c.Rb(),c.Sb(6,"div",5),c.Sb(7,"search-box",6),c.ac("text",(function(t){return e.searchObject(t)})),c.Rb(),c.Rb(),c.Sb(8,"div",5),c.Nb(9,"app-btn-add",7),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(10,"div",8),c.Sb(11,"div",9),c.Sb(12,"app-table-list",10),c.ac("reloadEvent",(function(){return e.onReloadEvent()}))("clickEvent",(function(t){return e.onClickEvent(t)})),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&t&&(c.zb(5),c.Dc(e.PageTitle),c.zb(2),c.jc("placeholder","Search Here..."),c.zb(2),c.jc("btnName","Add Company")("editData","/company/add"),c.zb(3),c.jc("headerData",e.headerData)("rawData",e.objectArray))},directives:[p.a,d.a,h.a],encapsulation:2}),n),b=a("KUiO"),m=a("uq2c"),f=a("g3N6"),v=a("OTx7");a.d(e,"CompanyListModule",(function(){return k}));var g,C=[{path:"",component:y,data:{title:"company_list"}},{path:"add",loadChildren:function(){return Promise.all([a.e(1),a.e(0),a.e(6)]).then(a.bind(null,"SFaS")).then((function(t){return t.CompanyAddModule}))},data:{title:"add_company"}},{path:"edit/:id",loadChildren:function(){return Promise.all([a.e(1),a.e(0),a.e(6)]).then(a.bind(null,"SFaS")).then((function(t){return t.CompanyAddModule}))},data:{title:"edit_company"}},{path:"view/:id",loadChildren:function(){return a.e(32).then(a.bind(null,"ChnI")).then((function(t){return t.CompanyViewModule}))},data:{title:"company_list"}}],k=((g=function t(){_classCallCheck(this,t)}).\u0275mod=c.Kb({type:g}),g.\u0275inj=c.Jb({factory:function(t){return new(t||g)},imports:[[i.b,f.a,m.a,b.a,v.a,r.i.forChild(C)]]}),g)},Q05f:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("AytR"),i=a("fXoL"),o=a("tk/3"),c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.API_URL=n.a.APIEndpoint}return _createClass(t,[{key:"getCompanyList",value:function(t){return this.http.get("".concat(this.API_URL,"/company"),{params:t})}},{key:"addCompany",value:function(t){return this.http.post("".concat(this.API_URL,"/company"),t)}},{key:"editCompany",value:function(t,e){return this.http.put("".concat(this.API_URL,"/company/").concat(t),e)}},{key:"getCompanyById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/company/").concat(t),{params:e})}},{key:"getCompanyViewById",value:function(t){return this.http.get("".concat(this.API_URL,"/company/").concat(t,"/view"))}},{key:"getCompanyMasterData",value:function(){return this.http.get("".concat(this.API_URL,"/company/master-data"))}},{key:"selectCompany",value:function(t){return this.http.get("".concat(this.API_URL,"/company/select/").concat(t))}},{key:"unSelectCompany",value:function(){return this.http.get("".concat(this.API_URL,"/company/deselect"))}},{key:"getCompanyNameList",value:function(){return this.http.get("".concat(this.API_URL,"/company"))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Wb(o.b))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);