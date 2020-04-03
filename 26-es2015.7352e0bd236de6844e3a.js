(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"19WJ":function(t,e,a){"use strict";a.r(e);var n=a("ofXK"),i=a("FasR"),o=a("fXoL"),s=a("tyNb"),r=a("c8VH"),c=a("Q05f"),h=a("AwSQ"),p=a("jTkZ"),d=a("Eb8l"),l=a("LPFR");let b=(()=>{class t{constructor(t,e,a,n){this.router=t,this.paginationService=e,this.companyService=a,this.dataService=n,this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.PageTitle="Company",this.headerData=[]}ngOnInit(){this.loadform=!1,this.setHeaderData(),this.getObjects()}setHeaderData(){this.headerData.push(new i.e({label:"Company Name",key:"company_name",viewUrl:{path:"/company/edit/",id:"company_id"}}),new i.f({label:"Company Email",key:"company_email"}));let t=new i.a({edit:{path:"/company/edit/",id:"company_id"},view:{path:"/company/view/",id:"company_id"}});this.headerData.push(t)}getObjects(){const t={page:this.currentPage};this.searchText&&(t.search=this.searchText),this.companyService.getCompanyList(t).subscribe(t=>{this.loadingState=!1,t.success?(this.objectArray=t.data.list,this.pagination=this.paginationService.getPager(t.data.pagination.total_page,this.currentPage)):(this.objectArray=[],this.pagination=null)},t=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(t){this.currentPage=t,this.getObjects()}searchObject(t){this.searchText=t,this.currentPage=1,this.getObjects()}onReloadEvent(){this.getObjects()}onClickEvent(t){this.onCompanySelect(t)}onCompanySelect(t){this.companyService.selectCompany(t.company_id).subscribe(t=>{t.success?(this.dataService.saveToken(t.data.Token.token),this.dataService.updateCompany(t.data.Company),this.router.navigateByUrl("/dashboard")):(this.objectArray=[],this.pagination=null)})}}return t.\u0275fac=function(e){return new(e||t)(o.Mb(s.e),o.Mb(r.a),o.Mb(c.a),o.Mb(h.a))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-company-list"]],decls:13,vars:6,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col","d-flex"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent","clickEvent"]],template:function(t,e){1&t&&(o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Sb(3,"div",3),o.Sb(4,"h2",4),o.Cc(5),o.Rb(),o.Sb(6,"div",5),o.Sb(7,"search-box",6),o.ac("text",(function(t){return e.searchObject(t)})),o.Rb(),o.Rb(),o.Sb(8,"div",5),o.Nb(9,"app-btn-add",7),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(10,"div",8),o.Sb(11,"div",9),o.Sb(12,"app-table-list",10),o.ac("reloadEvent",(function(){return e.onReloadEvent()}))("clickEvent",(function(t){return e.onClickEvent(t)})),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&t&&(o.zb(5),o.Dc(e.PageTitle),o.zb(2),o.jc("placeholder","Search Here..."),o.zb(2),o.jc("btnName","Add Company")("editData","/company/add"),o.zb(3),o.jc("headerData",e.headerData)("rawData",e.objectArray))},directives:[p.a,d.a,l.a],encapsulation:2}),t})();var m=a("KUiO"),u=a("uq2c"),y=a("g3N6"),g=a("OTx7");a.d(e,"CompanyListModule",(function(){return C}));const v=[{path:"",component:b,data:{title:"company_list"}},{path:"add",loadChildren:()=>Promise.all([a.e(1),a.e(0),a.e(6)]).then(a.bind(null,"SFaS")).then(t=>t.CompanyAddModule),data:{title:"add_company"}},{path:"edit/:id",loadChildren:()=>Promise.all([a.e(1),a.e(0),a.e(6)]).then(a.bind(null,"SFaS")).then(t=>t.CompanyAddModule),data:{title:"edit_company"}},{path:"view/:id",loadChildren:()=>a.e(32).then(a.bind(null,"ChnI")).then(t=>t.CompanyViewModule),data:{title:"company_list"}}];let C=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[n.b,y.a,u.a,m.a,g.a,s.i.forChild(v)]]}),t})()},Q05f:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("AytR"),i=a("fXoL"),o=a("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.API_URL=n.a.APIEndpoint}getCompanyList(t){return this.http.get(`${this.API_URL}/company`,{params:t})}addCompany(t){return this.http.post(`${this.API_URL}/company`,t)}editCompany(t,e){return this.http.put(`${this.API_URL}/company/${t}`,e)}getCompanyById(t,e=null){return this.http.get(`${this.API_URL}/company/${t}`,{params:e})}getCompanyViewById(t){return this.http.get(`${this.API_URL}/company/${t}/view`)}getCompanyMasterData(){return this.http.get(`${this.API_URL}/company/master-data`)}selectCompany(t){return this.http.get(`${this.API_URL}/company/select/${t}`)}unSelectCompany(){return this.http.get(`${this.API_URL}/company/deselect`)}getCompanyNameList(){return this.http.get(`${this.API_URL}/company`)}}return t.\u0275fac=function(e){return new(e||t)(i.Wb(o.b))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);