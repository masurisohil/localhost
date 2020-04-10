function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,a,t){return a&&_defineProperties(e.prototype,a),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{pmwL:function(e,a,t){"use strict";t.r(a);var i,n=t("ofXK"),r=t("tyNb"),s=t("g3N6"),o=t("uq2c"),c=t("OTx7"),l=t("PCNd"),d=t("Vr6k"),b=t("3Pt+"),u=t("QSzr"),h=t("AytR"),p=t("fXoL"),v=t("tk/3"),g=((i=function(){function e(a){_classCallCheck(this,e),this.http=a,this.API_URL=h.a.APIEndpoint}return _createClass(e,[{key:"getAisleList",value:function(e){return this.http.get("".concat(this.API_URL,"/aisle"),{params:e})}},{key:"addAisle",value:function(e){return this.http.post("".concat(this.API_URL,"/aisle"),e)}},{key:"editAisle",value:function(e,a){return this.http.put("".concat(this.API_URL,"/aisle/").concat(e),a)}},{key:"getAisleById",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.http.get("".concat(this.API_URL,"/aisle/").concat(e),{params:a})}},{key:"getMasterData",value:function(){return this.http.get("".concat(this.API_URL,"/aisle/master-data"))}}]),e}()).\u0275fac=function(e){return new(e||i)(p.Wb(v.b))},i.\u0275prov=p.Ib({token:i,factory:i.\u0275fac}),i),m=t("8cFx"),f=t("HOh6"),S=t("UaFz"),R=t("ZOsW");function _(e,a){if(1&e&&p.Nb(0,"span",20),2&e){var t=p.cc();p.jc("innerHTML",t.formErrors.aisle_code,p.vc)}}function y(e,a){if(1&e&&(p.Qb(0),p.Nb(1,"img",21),p.Pb()),2&e){var t=p.cc();p.zb(1),p.jc("src",t.barCodeFile,p.wc)}}function w(e,a){1&e&&p.Nb(0,"img",22)}var C,A=function(e){return{"has-error":e}},j=function(e){return{"qt-loader qt-loader-mini qt-loader-left":e}},P=((C=function(){function e(a,t,i,n,r){_classCallCheck(this,e),this.router=a,this.activatedRoute=t,this.fb=i,this.aisleService=n,this.commonservice=r,this.PageTitle="Aisle",this.loadingState=!1,this.showLoader=!1,this.formErrors={aisle_code:null,apierror:null},this.areaListArray=[],this.isEditing=!1,this.editId=null,this.activatedRoute.snapshot.paramMap.get("id")&&(this.isEditing=!0,this.editId=this.activatedRoute.snapshot.paramMap.get("id")),this.addForm=this.fb.group({aisle_name:[null,b.t.compose([b.t.required])],aisle_code:[null,b.t.compose([b.t.required])],area_id:[null,b.t.compose([b.t.required])],aisle_bar_code:[null]})}return _createClass(e,[{key:"ngOnInit",value:function(){this.getMasterData(),this.isEditing?this.getEditObject():this.getAreaBarcode()}},{key:"getMasterData",value:function(){var e=this;this.aisleService.getMasterData().subscribe((function(a){a.success&&(e.areaListArray=a.data.area)}))}},{key:"getAreaBarcode",value:function(){var e=this;this.commonservice.getGenerateBarcode().subscribe((function(a){e.addForm.patchValue({aisle_bar_code:a.type});var t=window.URL||window.webkitURL;document.getElementById("barCodeShow").src=t.createObjectURL(a),e.selectedFile=new File([a],"noname.jpeg",{type:"image/jpeg"})}))}},{key:"getEditObject",value:function(){var e=this;this.aisleService.getAisleById(this.editId).subscribe((function(a){a.success?(e.addForm.patchValue(a.data),e.barCodeFile=a.data.aisle_bar_code_image):e.router.navigateByUrl("/manage/aisle")}))}},{key:"submitForm",value:function(e){var a=this;if(e.valid){this.showLoader=!0;var t=new FormData;t.append("aisle_name",e.value.aisle_name),t.append("aisle_code",e.value.aisle_code),t.append("area_id",e.value.area_id),t.append("aisle_bar_code",e.value.aisle_bar_code),this.selectedFile&&t.append("file",this.selectedFile),this.isEditing?this.aisleService.editAisle(this.editId,t).subscribe((function(e){a.showLoader=!1,e.success?a.router.navigateByUrl("/manage/aisle"):e.error.map((function(t){t.hasOwnProperty("aisle_code")?a.formErrors.aisle_code=t.aisle_code:a.formErrors.apierror="* ".concat(e.error)}))}),(function(e){a.showLoader=!1})):this.aisleService.addAisle(t).subscribe((function(e){a.showLoader=!1,e.success?a.router.navigateByUrl("/manage/aisle"):e.error.map((function(t){t.hasOwnProperty("aisle_code")?a.formErrors.aisle_code=t.aisle_code:a.formErrors.apierror="* ".concat(e.error)}))}),(function(e){a.showLoader=!1}))}}}]),e}()).\u0275fac=function(e){return new(e||C)(p.Mb(r.e),p.Mb(r.a),p.Mb(b.e),p.Mb(g),p.Mb(m.a))},C.\u0275cmp=p.Gb({type:C,selectors:[["app-add-aisle"]],decls:43,vars:17,consts:[[1,"side-container"],[1,"page-header"],[1,"row"],[1,"col"],[1,"mr-auto"],[1,"card"],["role","form",1,"form-horizontal",3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group","row","align-items-center"],[1,"control-label","text-md-right","col-md-4","col-lg-3","mb-0"],[1,"col-md-5"],["type","text","placeholder","",1,"form-control",3,"formControl"],[1,"col-md-5",3,"ngClass"],["class","help-block",3,"innerHTML",4,"ngIf"],["bindLabel","label","bindValue","value","placeholder","Select Area",3,"formControl","items"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"text-right","border-top","pt-4","mt-5","card-footer"],["type","button","routerLink","/manage/aisle",1,"btn","btn-light"],["type","submit",1,"btn","btn-secondary","ml-2",3,"ngClass","disabled"],[1,"help-block",3,"innerHTML"],["alt","","sizes","","srcset","",1,"bcode",3,"src"],["id","barCodeShow","alt","","sizes","","srcset","",1,"bcode"]],template:function(e,a){if(1&e&&(p.Sb(0,"div",0),p.Sb(1,"div",1),p.Sb(2,"div",2),p.Sb(3,"div",3),p.Sb(4,"h2",4),p.Cc(5),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(6,"div",5),p.Sb(7,"form",6),p.ac("ngSubmit",(function(){return a.submitForm(a.addForm)})),p.Sb(8,"div",7),p.Sb(9,"div"),p.Sb(10,"div",8),p.Sb(11,"label",9),p.Cc(12," Aisle Name "),p.Sb(13,"em"),p.Cc(14,"*"),p.Rb(),p.Rb(),p.Sb(15,"div",10),p.Nb(16,"input",11),p.Rb(),p.Rb(),p.Sb(17,"div",8),p.Sb(18,"label",9),p.Cc(19,"Aisle Code "),p.Sb(20,"em"),p.Cc(21,"*"),p.Rb(),p.Rb(),p.Sb(22,"div",12),p.Nb(23,"input",11),p.Ac(24,_,1,1,"span",13),p.Rb(),p.Rb(),p.Sb(25,"div",8),p.Sb(26,"label",9),p.Cc(27," Area Name "),p.Sb(28,"em"),p.Cc(29,"*"),p.Rb(),p.Rb(),p.Sb(30,"div",10),p.Nb(31,"ng-select",14),p.Rb(),p.Rb(),p.Sb(32,"div",8),p.Nb(33,"label",9),p.Sb(34,"div",10),p.Ac(35,y,2,1,"ng-container",15),p.Ac(36,w,1,0,"ng-template",null,16,p.Bc),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(38,"div",17),p.Sb(39,"button",18),p.Cc(40,"Cancel"),p.Rb(),p.Sb(41,"button",19),p.Cc(42,"Submit"),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb()),2&e){var t=p.sc(37);p.zb(5),p.Fc("",a.isEditing?"Update":"Create"," ",a.PageTitle,""),p.zb(2),p.jc("formGroup",a.addForm),p.zb(9),p.jc("formControl",a.addForm.controls.aisle_name),p.zb(6),p.jc("ngClass",p.nc(13,A,a.formErrors.aisle_code)),p.zb(1),p.jc("formControl",a.addForm.controls.aisle_code),p.zb(1),p.jc("ngIf",a.formErrors.aisle_code),p.zb(7),p.jc("formControl",a.addForm.controls.area_id)("items",a.areaListArray),p.zb(4),p.jc("ngIf",a.isEditing)("ngIfElse",t),p.zb(6),p.jc("ngClass",p.nc(15,j,a.showLoader))("disabled",a.showLoader)}},directives:[b.v,b.p,f.a,b.j,b.c,b.o,b.g,S.a,n.j,n.l,R.a,r.f],encapsulation:2}),C),k=t("FasR"),L=t("c8VH"),I=t("jTkZ"),E=t("Eb8l"),z=t("LPFR"),D=t("Pbud");function F(e,a){if(1&e){var t=p.Tb();p.Sb(0,"pagination",11),p.ac("onPageChange",(function(e){return p.uc(t),p.cc().getPage(e)})),p.Rb()}if(2&e){var i=p.cc();p.jc("paginationList",i.pagination)("currentPage",i.currentPage)}}var M,N,O=((N=function(){function e(a,t){_classCallCheck(this,e),this.paginationService=a,this.aisleService=t,this.PageTitle="Manage Aisle",this.loadform=!1,this.loadingState=!0,this.objectArray=[],this.pagination=null,this.searchText=null,this.currentPage=1,this.permissionObject=null,this.showPagination=!1,this.headerData=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.loadform=!1,this.setHeaderData(),this.getObjects()}},{key:"setHeaderData",value:function(){this.headerData.push(new k.f({label:"Aisle Name",key:"aisle_name"}),new k.f({label:"Aisle Code",key:"aisle_code"}),new k.f({label:"Bar Code No",key:"aisle_bar_code"}));var e=new k.a({edit:{path:"/manage/aisle/edit/",id:"aisle_id"},view:{path:"/manage/aisle/view/",id:"aisle_id"},delete:{path:"aisle/",id:"aisle_id"}});this.headerData.push(e)}},{key:"getObjects",value:function(){var e=this,a={page:this.currentPage};this.searchText&&(a.search=this.searchText),this.aisleService.getAisleList(a).subscribe((function(a){e.loadingState=!1,a.success?(e.objectArray=a.data.list,e.showPagination=!0,e.pagination=e.paginationService.getPager(a.data.pagination.total_page,e.currentPage)):(e.objectArray=[],e.pagination=null)}),(function(a){e.loadingState=!1,e.objectArray=[],e.pagination=null}))}},{key:"getPage",value:function(e){this.currentPage=e,this.getObjects()}},{key:"searchObject",value:function(e){this.searchText=e,this.currentPage=1,this.getObjects()}},{key:"onReloadEvent",value:function(){this.getObjects()}}]),e}()).\u0275fac=function(e){return new(e||N)(p.Mb(L.a),p.Mb(g))},N.\u0275cmp=p.Gb({type:N,selectors:[["app-aisle-list"]],decls:13,vars:7,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[3,"placeholder","text"],[3,"btnName","editData"],[1,"card"],[1,"card-body"],[3,"headerData","rawData","reloadEvent"],[3,"paginationList","currentPage","onPageChange",4,"ngIf"],[3,"paginationList","currentPage","onPageChange"]],template:function(e,a){1&e&&(p.Sb(0,"div",0),p.Sb(1,"div",1),p.Sb(2,"div",2),p.Sb(3,"h2",3),p.Cc(4),p.Rb(),p.Sb(5,"div",4),p.Sb(6,"search-box",5),p.ac("text",(function(e){return a.searchObject(e)})),p.Rb(),p.Rb(),p.Sb(7,"div",4),p.Nb(8,"app-btn-add",6),p.Rb(),p.Rb(),p.Rb(),p.Sb(9,"div",7),p.Sb(10,"div",8),p.Sb(11,"app-table-list",9),p.ac("reloadEvent",(function(){return a.onReloadEvent()})),p.Rb(),p.Ac(12,F,1,2,"pagination",10),p.Rb(),p.Rb(),p.Rb()),2&e&&(p.zb(4),p.Dc(a.PageTitle),p.zb(2),p.jc("placeholder","Search Here..."),p.zb(2),p.jc("btnName","Add Aisle")("editData","/manage/aisle/add"),p.zb(3),p.jc("headerData",a.headerData)("rawData",a.objectArray),p.zb(1),p.jc("ngIf",a.showPagination))},directives:[I.a,E.a,z.a,n.l,D.a],encapsulation:2}),N),T=((M=function(){function e(a,t){_classCallCheck(this,e),this.activatedRoute=a,this.aisleservice=t,this.activatedRoute.snapshot.paramMap.get("id")&&(this.viewId=this.activatedRoute.snapshot.paramMap.get("id"))}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.aisleservice.getAisleById(this.viewId).subscribe((function(a){a.success&&(e.objectArray=a.data)}))}},{key:"VoucherSourcetoPrint",value:function(){var e,a,t;return"\n            <html>\n            <head>\n              <script>\n                function step1() {\n                  setTimeout('step2()', 10);\n                }\n                function step2() {\n                  window.print(); window.close()\n                }\n              <\/script>\n            </head>\n\n            <body onload='step1()'>\n              <h3>Aisle Name:- ".concat(null===(e=this.objectArray)||void 0===e?void 0:e.aisle_name,"</h3>\n              <h3>Aisle Code:- ").concat(null===(a=this.objectArray)||void 0===a?void 0:a.aisle_code,"</h3>\n              <img src='").concat(null===(t=this.objectArray)||void 0===t?void 0:t.aisle_bar_code_image,"' />\n            </body>\n            </html>\n      ")}},{key:"VoucherPrint",value:function(){window.print()}}]),e}()).\u0275fac=function(e){return new(e||M)(p.Mb(r.a),p.Mb(g))},M.\u0275cmp=p.Gb({type:M,selectors:[["app-aisle-view"]],decls:32,vars:4,consts:[[1,"side-container"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],[1,"btn","btn-secondary",3,"click"],[1,"card"],[1,"card-body"],["id","details","role","tabpanel","aria-labelledby","details-tab",1,"tab-pane","fade","show","active"],[1,"row","mt-4"],[1,"col-md-4"],[1,"text-muted","mb-1","font-weight-bold"],[1,"col"],["alt","",3,"src"]],template:function(e,a){1&e&&(p.Sb(0,"div",0),p.Sb(1,"div",1),p.Sb(2,"div",2),p.Sb(3,"h2",3),p.Cc(4,"Aisle Details"),p.Rb(),p.Nb(5,"div",4),p.Sb(6,"div",4),p.Sb(7,"button",5),p.ac("click",(function(){return a.VoucherPrint()})),p.Cc(8,"Print"),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(9,"div",6),p.Sb(10,"div",7),p.Sb(11,"div",8),p.Sb(12,"div",9),p.Sb(13,"div",10),p.Sb(14,"label",11),p.Cc(15,"Aisle Name"),p.Rb(),p.Sb(16,"div"),p.Cc(17),p.Rb(),p.Rb(),p.Sb(18,"div",10),p.Sb(19,"label",11),p.Cc(20,"Aisle Code"),p.Rb(),p.Sb(21,"div"),p.Cc(22),p.Rb(),p.Rb(),p.Sb(23,"div",10),p.Sb(24,"label",11),p.Cc(25,"Bar code No"),p.Rb(),p.Sb(26,"div"),p.Cc(27),p.Rb(),p.Rb(),p.Rb(),p.Sb(28,"div",9),p.Sb(29,"div",12),p.Sb(30,"div"),p.Nb(31,"img",13),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb()),2&e&&(p.zb(17),p.Dc(null==a.objectArray?null:a.objectArray.aisle_name),p.zb(5),p.Dc(null==a.objectArray?null:a.objectArray.aisle_code),p.zb(5),p.Dc(null==a.objectArray?null:a.objectArray.aisle_bar_code),p.zb(4),p.jc("src",null==a.objectArray?null:a.objectArray.aisle_bar_code_image,p.wc))},encapsulation:2}),M);t.d(a,"AisleModule",(function(){return B}));var U,x=[{path:"",component:O,data:{title:"aisle_list"}},{path:"add",component:P,data:{title:"add_aisle"}},{path:"edit/:id",component:P,data:{title:"edit_aisle"}},{path:"view/:id",component:T,data:{title:"view_aisle"}}],B=((U=function e(){_classCallCheck(this,e)}).\u0275mod=p.Kb({type:U}),U.\u0275inj=p.Jb({factory:function(e){return new(e||U)},providers:[g],imports:[[n.b,r.i.forChild(x),c.a,s.a,o.a,b.l,b.s,d.a,R.b,l.a,u.a]]}),U)}}]);