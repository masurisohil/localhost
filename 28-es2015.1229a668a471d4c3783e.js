(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"19WJ":function(t,a,e){"use strict";e.r(a);var n=e("ofXK"),i=e("FasR"),s=e("fXoL"),o=e("tyNb"),r=e("c8VH"),c=e("Q05f"),h=e("AwSQ"),p=e("jTkZ"),d=e("Eb8l"),l=e("LPFR");let b=(()=>{class t{constructor(t,a,e,n){this.router=t,this.paginationService=a,this.companyService=e,this.dataService=n,this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.PageTitle="Company",this.headerData=[]}ngOnInit(){this.loadform=!1,this.setHeaderData(),this.getObjects()}setHeaderData(){this.headerData.push(new i.e({label:"Company Name",key:"company_name",viewUrl:{path:"/company/edit/",id:"company_id"}}),new i.f({label:"Company Email",key:"company_email"}));let t=new i.a({edit:{path:"/company/edit/",id:"company_id"}});this.headerData.push(t)}getObjects(){const t={page:this.currentPage};this.searchText&&(t.search=this.searchText),this.companyService.getCompanyList(t).subscribe(t=>{this.loadingState=!1,t.success?(this.objectArray=t.data.list,this.pagination=this.paginationService.getPager(t.data.pagination.total_page,this.currentPage)):(this.objectArray=[],this.pagination=null)},t=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(t){this.currentPage=t,this.getObjects()}searchObject(t){this.searchText=t,this.currentPage=1,this.getObjects()}onReloadEvent(){this.getObjects()}onClickEvent(t){this.onCompanySelect(t)}onCompanySelect(t){this.companyService.selectCompany(t.company_id).subscribe(t=>{t.success?(this.dataService.saveToken(t.data.Token.token),this.dataService.updateCompany(t.data.Company),this.router.navigateByUrl("/dashboard")):(this.objectArray=[],this.pagination=null)})}}return t.\u0275fac=function(a){return new(a||t)(s.Mb(o.e),s.Mb(r.a),s.Mb(c.a),s.Mb(h.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-company-list"]],decls:13,vars:6,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col","d-flex"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent","clickEvent"]],template:function(t,a){1&t&&(s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"div",2),s.Sb(3,"div",3),s.Sb(4,"h2",4),s.Bc(5),s.Rb(),s.Sb(6,"div",5),s.Sb(7,"search-box",6),s.ac("text",(function(t){return a.searchObject(t)})),s.Rb(),s.Rb(),s.Sb(8,"div",5),s.Nb(9,"app-btn-add",7),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(10,"div",8),s.Sb(11,"div",9),s.Sb(12,"app-table-list",10),s.ac("reloadEvent",(function(){return a.onReloadEvent()}))("clickEvent",(function(t){return a.onClickEvent(t)})),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.zb(5),s.Cc(a.PageTitle),s.zb(2),s.ic("placeholder","Search Here..."),s.zb(2),s.ic("btnName","Add Company")("editData","/company/add"),s.zb(3),s.ic("headerData",a.headerData)("rawData",a.objectArray))},directives:[p.a,d.a,l.a],encapsulation:2}),t})();var u=e("KUiO"),m=e("uq2c"),y=e("g3N6"),g=e("OTx7");e.d(a,"CompanyListModule",(function(){return S}));const v=[{path:"",component:b,data:{title:"company_list"}},{path:"add",loadChildren:()=>e.e(6).then(e.bind(null,"SFaS")).then(t=>t.CompanyAddModule),data:{title:"add_company"}},{path:"edit/:id",loadChildren:()=>e.e(6).then(e.bind(null,"SFaS")).then(t=>t.CompanyAddModule),data:{title:"edit_company"}}];let S=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(a){return new(a||t)},imports:[[n.b,y.a,m.a,u.a,g.a,o.i.forChild(v)]]}),t})()},Q05f:function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));var n=e("AytR"),i=e("fXoL"),s=e("tk/3");let o=(()=>{class t{constructor(t){this.http=t,this.API_URL=n.a.APIEndpoint}getCompanyList(t){return this.http.get(`${this.API_URL}/company`,{params:t})}addCompany(t){return this.http.post(`${this.API_URL}/company`,t)}editCompany(t,a){return this.http.put(`${this.API_URL}/company/${t}`,a)}getCompanyById(t,a=null){return this.http.get(`${this.API_URL}/company/${t}`,{params:a})}getCompanyMasterData(){return this.http.get(`${this.API_URL}/company_master_data`)}selectCompany(t){return this.http.get(`${this.API_URL}/company/select/${t}`)}unSelectCompany(){return this.http.get(`${this.API_URL}/company/deselect`)}getCompanyNameList(){return this.http.get(`${this.API_URL}/company`)}}return t.\u0275fac=function(a){return new(a||t)(i.Wb(s.b))},t.\u0275prov=i.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);