(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{ChnI:function(b,l,a){"use strict";a.r(l);var e=a("ofXK"),r=a("fXoL"),c=a("tyNb"),t=a("Q05f");let n=(()=>{class b{constructor(b,l){this.activatedRoute=b,this.companyservice=l,this.activatedRoute.snapshot.paramMap.get("id")&&(this.viewId=this.activatedRoute.snapshot.paramMap.get("id"))}ngOnInit(){this.companyservice.getCompanyViewById(this.viewId).subscribe(b=>{b.success&&(this.objectArray=b.data)})}}return b.\u0275fac=function(l){return new(l||b)(r.Mb(c.a),r.Mb(t.a))},b.\u0275cmp=r.Gb({type:b,selectors:[["app-company-view"]],decls:89,vars:16,consts:[[1,"container-fluid"],[1,"page-header"],[1,"row","m-0"],[1,"mr-auto"],[1,"ml-3"],["routerLink","/company",1,"btn","shadow-none","btn-link"],[1,"fa","fa-chevron-left","mr-2","mt-1"],[1,"card"],[1,"card-body"],["id","details","role","tabpanel","aria-labelledby","details-tab",1,"tab-pane","fade","show","active"],[1,"row"],[1,"col-3"],["width","250px","alt","company logo",3,"src"],[1,"col-9"],[1,"row","mr-3","ml-3"],[1,"col"],[1,"text-muted","mb-1","font-weight-bold"],[1,"row","mt-5","mr-3","ml-3"]],template:function(b,l){1&b&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Sb(2,"div",2),r.Sb(3,"h2",3),r.Cc(4,"Company Details"),r.Rb(),r.Sb(5,"div",4),r.Sb(6,"a",5),r.Nb(7,"i",6),r.Cc(8,"Back to list "),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Sb(9,"div",7),r.Sb(10,"div",8),r.Sb(11,"div",9),r.Sb(12,"div",10),r.Sb(13,"div",11),r.Sb(14,"div"),r.Nb(15,"img",12),r.Rb(),r.Rb(),r.Sb(16,"div",13),r.Sb(17,"div",14),r.Sb(18,"div",15),r.Sb(19,"label",16),r.Cc(20,"Comapny Name"),r.Rb(),r.Sb(21,"div"),r.Cc(22),r.Rb(),r.Rb(),r.Sb(23,"div",15),r.Sb(24,"label",16),r.Cc(25,"Company Email"),r.Rb(),r.Sb(26,"div"),r.Cc(27),r.Rb(),r.Rb(),r.Rb(),r.Sb(28,"div",17),r.Sb(29,"div",15),r.Sb(30,"label",16),r.Cc(31,"Dile Code"),r.Rb(),r.Sb(32,"div"),r.Cc(33),r.Rb(),r.Rb(),r.Sb(34,"div",15),r.Sb(35,"label",16),r.Cc(36,"Phone Number"),r.Rb(),r.Sb(37,"div"),r.Cc(38),r.Rb(),r.Rb(),r.Rb(),r.Sb(39,"div",17),r.Sb(40,"div",15),r.Sb(41,"label",16),r.Cc(42,"Comapny Domain"),r.Rb(),r.Sb(43,"div"),r.Cc(44),r.Rb(),r.Rb(),r.Sb(45,"div",15),r.Sb(46,"label",16),r.Cc(47,"Company SubDomain"),r.Rb(),r.Sb(48,"div"),r.Cc(49),r.Rb(),r.Rb(),r.Rb(),r.Sb(50,"div",17),r.Sb(51,"div",15),r.Sb(52,"label",16),r.Cc(53,"language"),r.Rb(),r.Sb(54,"div"),r.Cc(55),r.Rb(),r.Rb(),r.Sb(56,"div",15),r.Sb(57,"label",16),r.Cc(58,"Currency"),r.Rb(),r.Sb(59,"div"),r.Cc(60),r.Rb(),r.Rb(),r.Rb(),r.Sb(61,"div",17),r.Sb(62,"div",15),r.Sb(63,"label",16),r.Cc(64,"Time Format"),r.Rb(),r.Sb(65,"div"),r.Cc(66),r.Rb(),r.Rb(),r.Sb(67,"div",15),r.Sb(68,"label",16),r.Cc(69,"Date Format"),r.Rb(),r.Sb(70,"div"),r.Cc(71),r.Rb(),r.Rb(),r.Rb(),r.Sb(72,"div",17),r.Sb(73,"div",15),r.Sb(74,"label",16),r.Cc(75,"Timezone"),r.Rb(),r.Sb(76,"div"),r.Cc(77),r.Rb(),r.Rb(),r.Sb(78,"div",15),r.Sb(79,"label",16),r.Cc(80,"Address"),r.Rb(),r.Sb(81,"div"),r.Cc(82),r.Rb(),r.Sb(83,"div"),r.Cc(84),r.Rb(),r.Sb(85,"div"),r.Cc(86),r.Rb(),r.Sb(87,"div"),r.Cc(88),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&b&&(r.zb(15),r.jc("src",null!=l.objectArray&&l.objectArray.company_logo?null==l.objectArray?null:l.objectArray.company_logo:"assets/no_image.png",r.wc),r.zb(7),r.Dc(null==l.objectArray?null:l.objectArray.company_name),r.zb(5),r.Dc(null==l.objectArray?null:l.objectArray.company_email),r.zb(6),r.Dc(null==l.objectArray?null:l.objectArray.dial_code),r.zb(5),r.Dc(null==l.objectArray?null:l.objectArray.phone_no),r.zb(6),r.Dc(null==l.objectArray?null:l.objectArray.company_domain),r.zb(5),r.Dc(null==l.objectArray?null:l.objectArray.company_subdomain),r.zb(6),r.Dc(null==l.objectArray?null:null==l.objectArray.language?null:l.objectArray.language.label),r.zb(5),r.Dc(null==l.objectArray?null:null==l.objectArray.currency?null:l.objectArray.currency.label),r.zb(6),r.Dc(null==l.objectArray?null:null==l.objectArray.time_format?null:l.objectArray.time_format.label),r.zb(5),r.Dc(null==l.objectArray?null:null==l.objectArray.date_format?null:l.objectArray.date_format.label),r.zb(6),r.Dc(null==l.objectArray?null:null==l.objectArray.timezone?null:l.objectArray.timezone.label),r.zb(5),r.Dc(null==l.objectArray?null:null==l.objectArray.address?null:l.objectArray.address.street_address),r.zb(2),r.Dc(null==l.objectArray?null:null==l.objectArray.address?null:l.objectArray.address.city),r.zb(2),r.Dc(null==l.objectArray?null:null==l.objectArray.address?null:l.objectArray.address.state),r.zb(2),r.Dc(null==l.objectArray?null:null==l.objectArray.address?null:l.objectArray.address.country_name))},directives:[c.h],encapsulation:2}),b})();a.d(l,"routes",(function(){return o})),a.d(l,"CompanyViewModule",(function(){return i}));const o=[{path:"",component:n}];let i=(()=>{class b{}return b.\u0275mod=r.Kb({type:b}),b.\u0275inj=r.Jb({factory:function(l){return new(l||b)},imports:[[e.b,c.i.forChild(o)]]}),b})()}}]);