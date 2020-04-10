(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"0yhT":function(e,t,a){"use strict";a.r(t);var i=a("ofXK"),r=a("tyNb"),l=a("g3N6"),o=a("uq2c"),n=a("OTx7"),s=a("ZOsW"),c=a("PCNd"),d=a("Vr6k"),b=a("3Pt+"),h=a("QSzr"),v=a("FasR"),u=a("fXoL"),p=a("c8VH"),g=a("AytR"),m=a("tk/3");let f=(()=>{class e{constructor(e){this.http=e,this.API_URL=g.a.APIEndpoint}getLevelList(e){return this.http.get(`${this.API_URL}/level`,{params:e})}addLevel(e){return this.http.post(`${this.API_URL}/level`,e)}editLevel(e,t){return this.http.put(`${this.API_URL}/level/${e}`,t)}getLevelById(e,t=null){return this.http.get(`${this.API_URL}/level/${e}`,{params:t})}getMasterData(){return this.http.get(`${this.API_URL}/level/master-data`)}}return e.\u0275fac=function(t){return new(t||e)(u.Wb(m.b))},e.\u0275prov=u.Ib({token:e,factory:e.\u0275fac}),e})();var R=a("jTkZ"),S=a("Eb8l"),y=a("LPFR"),_=a("Pbud");function w(e,t){if(1&e){const e=u.Tb();u.Sb(0,"pagination",11),u.ac("onPageChange",(function(t){return u.uc(e),u.cc().getPage(t)})),u.Rb()}if(2&e){const e=u.cc();u.jc("paginationList",e.pagination)("currentPage",e.currentPage)}}let L=(()=>{class e{constructor(e,t){this.paginationService=e,this.levelService=t,this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.PageTitle="Manage Level",this.headerData=[]}ngOnInit(){this.loadform=!1,this.setHeaderData(),this.getObjects()}setHeaderData(){this.headerData.push(new v.f({label:"Level Name",key:"level_name"}),new v.f({label:"Level Code",key:"level_code"}),new v.f({label:"Bar Code No",key:"level_bar_code"}));let e=new v.a({edit:{path:"/manage/level/edit/",id:"level_id"},view:{path:"/manage/level/view/",id:"level_id"},delete:{path:"level/",id:"level_id"}});this.headerData.push(e)}getObjects(){const e={page:this.currentPage};this.searchText&&(e.search=this.searchText),this.levelService.getLevelList(e).subscribe(e=>{this.loadingState=!1,e.success?(this.objectArray=e.data.list,this.showPagination=!0,this.pagination=this.paginationService.getPager(e.data.pagination.total_page,this.currentPage)):(this.objectArray=[],this.pagination=null)},e=>{this.loadingState=!1,this.objectArray=[],this.pagination=null})}getPage(e){this.currentPage=e,this.getObjects()}searchObject(e){this.searchText=e,this.currentPage=1,this.getObjects()}onReloadEvent(){this.getObjects()}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(p.a),u.Mb(f))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-level-list"]],decls:13,vars:7,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(e,t){1&e&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"h2",3),u.Cc(4),u.Rb(),u.Sb(5,"div",4),u.Sb(6,"search-box",5),u.ac("text",(function(e){return t.searchObject(e)})),u.Rb(),u.Rb(),u.Sb(7,"div",4),u.Nb(8,"app-btn-add",6),u.Rb(),u.Rb(),u.Rb(),u.Sb(9,"div",7),u.Sb(10,"div",8),u.Sb(11,"app-table-list",9),u.ac("reloadEvent",(function(){return t.onReloadEvent()})),u.Rb(),u.Ac(12,w,1,2,"pagination",10),u.Rb(),u.Rb(),u.Rb()),2&e&&(u.zb(4),u.Dc(t.PageTitle),u.zb(2),u.jc("placeholder","Search Here..."),u.zb(2),u.jc("btnName","Add Level")("editData","/manage/level/add"),u.zb(3),u.jc("headerData",t.headerData)("rawData",t.objectArray),u.zb(1),u.jc("ngIf",t.showPagination))},directives:[R.a,S.a,y.a,i.l,_.a],encapsulation:2}),e})();var j=a("8cFx"),C=a("HOh6"),P=a("UaFz");function A(e,t){if(1&e&&u.Nb(0,"span",20),2&e){const e=u.cc();u.jc("innerHTML",e.formErrors.level_code,u.vc)}}function I(e,t){if(1&e&&(u.Qb(0),u.Nb(1,"img",21),u.Pb()),2&e){const e=u.cc();u.zb(1),u.jc("src",e.barCodeFile,u.wc)}}function E(e,t){1&e&&u.Nb(0,"img",22)}const z=function(e){return{"has-error":e}},N=function(e){return{"qt-loader qt-loader-mini qt-loader-left":e}};let D=(()=>{class e{constructor(e,t,a,i,r){this.router=e,this.activatedRoute=t,this.fb=a,this.levelservice=i,this.commonservice=r,this.PageTitle="Level",this.addNewRadio=!1,this.loadingState=!1,this.showLoader=!1,this.formErrors={level_code:null,apierror:null},this.isEditing=!1,this.editId=null,this.bayListArray=[],this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({level_name:[null,b.t.compose([b.t.required])],level_code:[null,b.t.compose([b.t.required])],bay_id:[null,b.t.compose([b.t.required])],level_bar_code:[null]})}ngOnInit(){this.getMasterData(),this.isEditing?this.getEditObject():this.getAreaBarcode()}getMasterData(){this.levelservice.getMasterData().subscribe(e=>{e.success&&(this.bayListArray=e.data.bay)})}getAreaBarcode(){this.commonservice.getGenerateBarcode().subscribe(e=>{this.addForm.patchValue({level_bar_code:e.type});const t=window.URL||window.webkitURL;document.getElementById("barCodeShow").src=t.createObjectURL(e),this.selectedFile=new File([e],"noname.jpeg",{type:"image/jpeg"})})}getEditObject(){this.levelservice.getLevelById(this.editId).subscribe(e=>{e.success?(this.addForm.patchValue(e.data),this.barCodeFile=e.data.level_bar_code_image):this.router.navigateByUrl("/manage/level")})}submitForm(e){if(e.valid){this.showLoader=!0;const t=new FormData;t.append("level_name",e.value.level_name),t.append("level_code",e.value.level_code),t.append("bay_id",e.value.bay_id),t.append("level_bar_code",e.value.level_bar_code),this.selectedFile&&t.append("file",this.selectedFile),this.isEditing?this.levelservice.editLevel(this.editId,t).subscribe(e=>{this.showLoader=!1,e.success?this.router.navigateByUrl("/manage/level"):e.error.map(t=>{t.hasOwnProperty("level_code")?this.formErrors.level_code=t.level_code:this.formErrors.apierror=`* ${e.error}`})},e=>{this.showLoader=!1}):this.levelservice.addLevel(t).subscribe(e=>{this.showLoader=!1,e.success?this.router.navigateByUrl("/manage/level"):e.error.map(t=>{t.hasOwnProperty("level_code")?this.formErrors.level_code=t.level_code:this.formErrors.apierror=`* ${e.error}`})},e=>{this.showLoader=!1})}}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(r.e),u.Mb(r.a),u.Mb(b.e),u.Mb(f),u.Mb(j.a))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-add-level"]],decls:43,vars:17,consts:[[1,"side-container"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group","row","align-items-center"],[1,"control-label","text-md-right","col-md-4","col-lg-3","mb-0"],[1,"col-md-5"],["type","text","placeholder","",1,"form-control",3,"formControl"],[1,"col-md-5",3,"ngClass"],["class","help-block",3,"innerHTML",4,"ngIf"],["bindLabel","label","bindValue","value","placeholder","Select Bay",3,"formControl","items"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"text-right","border-top","pt-4","mt-5","card-footer"],["type","button","routerLink","/manage/level",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2",3,"ngClass","disabled"],[1,"help-block",3,"innerHTML"],["alt","","sizes","","srcset","",1,"bcode",3,"src"],["id","barCodeShow","alt","","sizes","","srcset","",1,"bcode"]],template:function(e,t){if(1&e&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"div",3),u.Sb(4,"h2",4),u.Cc(5),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(6,"div",5),u.Sb(7,"form",6),u.ac("ngSubmit",(function(){return t.submitForm(t.addForm)})),u.Sb(8,"div",7),u.Sb(9,"div"),u.Sb(10,"div",8),u.Sb(11,"label",9),u.Cc(12,"Level Name "),u.Sb(13,"em"),u.Cc(14,"*"),u.Rb(),u.Rb(),u.Sb(15,"div",10),u.Nb(16,"input",11),u.Rb(),u.Rb(),u.Sb(17,"div",8),u.Sb(18,"label",9),u.Cc(19,"Level Code "),u.Sb(20,"em"),u.Cc(21,"*"),u.Rb(),u.Rb(),u.Sb(22,"div",12),u.Nb(23,"input",11),u.Ac(24,A,1,1,"span",13),u.Rb(),u.Rb(),u.Sb(25,"div",8),u.Sb(26,"label",9),u.Cc(27," Bay Name "),u.Sb(28,"em"),u.Cc(29,"*"),u.Rb(),u.Rb(),u.Sb(30,"div",10),u.Nb(31,"ng-select",14),u.Rb(),u.Rb(),u.Sb(32,"div",8),u.Nb(33,"label",9),u.Sb(34,"div",10),u.Ac(35,I,2,1,"ng-container",15),u.Ac(36,E,1,0,"ng-template",null,16,u.Bc),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(38,"div",17),u.Sb(39,"button",18),u.Cc(40,"Cancel"),u.Rb(),u.Sb(41,"button",19),u.Cc(42,"Submit"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&e){const e=u.sc(37);u.zb(5),u.Fc("",t.isEditing?"Update":"Create"," ",t.PageTitle,""),u.zb(2),u.jc("formGroup",t.addForm),u.zb(9),u.jc("formControl",t.addForm.controls.level_name),u.zb(6),u.jc("ngClass",u.nc(13,z,t.formErrors.level_code)),u.zb(1),u.jc("formControl",t.addForm.controls.level_code),u.zb(1),u.jc("ngIf",t.formErrors.level_code),u.zb(7),u.jc("formControl",t.addForm.controls.bay_id)("items",t.bayListArray),u.zb(4),u.jc("ngIf",t.isEditing)("ngIfElse",e),u.zb(6),u.jc("ngClass",u.nc(15,N,t.showLoader))("disabled",t.showLoader)}},directives:[b.v,b.p,C.a,b.j,b.c,b.o,b.g,P.a,i.j,i.l,s.a,r.f],encapsulation:2}),e})(),F=(()=>{class e{constructor(e,t){this.activatedRoute=e,this.levelservice=t,this.activatedRoute.snapshot.paramMap.get("id")&&(this.viewId=this.activatedRoute.snapshot.paramMap.get("id"))}ngOnInit(){this.levelservice.getLevelById(this.viewId).subscribe(e=>{e.success&&(this.objectArray=e.data)})}VoucherSourcetoPrint(){var e,t,a;return`\n            <html>\n            <head>\n              <script>\n                function step1() {\n                  setTimeout('step2()', 10);\n                }\n                function step2() {\n                  window.print(); window.close()\n                }\n              <\/script>\n            </head>\n\n            <body onload='step1()'>\n              <h3>Level Name:- ${null===(e=this.objectArray)||void 0===e?void 0:e.level_name}</h3>\n              <h3>Level Code:- ${null===(t=this.objectArray)||void 0===t?void 0:t.level_code}</h3>\n              <img src='${null===(a=this.objectArray)||void 0===a?void 0:a.level_bar_code_image}' />\n            </body>\n            </html>\n      `}VoucherPrint(){window.print()}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(r.a),u.Mb(f))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-level-view"]],decls:32,vars:4,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[1,"btn","btn-secondary",3,"click"],[1,"card"],[1,"card-body"],["id","details","role","tabpanel","aria-labelledby","details-tab",1,"tab-pane","fade","show","active"],[1,"row","mt-4"],[1,"col-md-4"],[1,"text-muted","mb-1","font-weight-bold"],[1,"col"],["alt","",3,"src"]],template:function(e,t){1&e&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"h2",3),u.Cc(4,"Level Details"),u.Rb(),u.Nb(5,"div",4),u.Sb(6,"div",4),u.Sb(7,"button",5),u.ac("click",(function(){return t.VoucherPrint()})),u.Cc(8,"Print"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(9,"div",6),u.Sb(10,"div",7),u.Sb(11,"div",8),u.Sb(12,"div",9),u.Sb(13,"div",10),u.Sb(14,"label",11),u.Cc(15,"Level Name"),u.Rb(),u.Sb(16,"div"),u.Cc(17),u.Rb(),u.Rb(),u.Sb(18,"div",10),u.Sb(19,"label",11),u.Cc(20,"Level Code"),u.Rb(),u.Sb(21,"div"),u.Cc(22),u.Rb(),u.Rb(),u.Sb(23,"div",10),u.Sb(24,"label",11),u.Cc(25,"Bar code No"),u.Rb(),u.Sb(26,"div"),u.Cc(27),u.Rb(),u.Rb(),u.Rb(),u.Sb(28,"div",9),u.Sb(29,"div",12),u.Sb(30,"div"),u.Nb(31,"img",13),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&e&&(u.zb(17),u.Dc(null==t.objectArray?null:t.objectArray.level_name),u.zb(5),u.Dc(null==t.objectArray?null:t.objectArray.level_code),u.zb(5),u.Dc(null==t.objectArray?null:t.objectArray.level_bar_code),u.zb(4),u.jc("src",null==t.objectArray?null:t.objectArray.level_bar_code_image,u.wc))},encapsulation:2}),e})();a.d(t,"LevelModule",(function(){return O}));const M=[{path:"",component:L,data:{title:"level_list"}},{path:"add",component:D,data:{title:"add_level"}},{path:"edit/:id",component:D,data:{title:"edit_level"}},{path:"view/:id",component:F,data:{title:"view_level"}}];let O=(()=>{class e{}return e.\u0275mod=u.Kb({type:e}),e.\u0275inj=u.Jb({factory:function(t){return new(t||e)},providers:[f],imports:[[i.b,r.i.forChild(M),n.a,l.a,o.a,b.l,b.s,d.a,c.a,s.b,h.a]]}),e})()}}]);