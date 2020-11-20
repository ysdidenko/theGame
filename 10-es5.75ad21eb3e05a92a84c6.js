!function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"27Vs":function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var n=function(e){return e.Auto="Auto",e.General="General",e.Geography="Geography",e.Math="Math",e.Moto="Moto",e.Movies="Movies",e.Nature="Nature",e.Physics="Physics",e.Sports="Sports",e}({})},TwVa:function(e,t,o){"use strict";var n=o("27Vs");o.d(t,"AvailableCategories",(function(){return n.a})),o("wEdZ")},ekgB:function(o,n,i){"use strict";i.r(n),i.d(n,"GameModule",(function(){return S}));var c=i("ofXK"),a=i("tyNb"),r=i("R0Ic"),s=i("8QQh"),b=i("TwVa"),l=i("fXoL"),d=i("TEn/");function u(e,t){1&e&&l.Ib(0,"ion-icon",3)}function f(e,t){if(1&e){var o=l.Lb();l.Kb(0,"ion-button",1),l.Sb("click",(function(){l.bc(o);var e=t.$implicit;return l.Ub().selectCategory.emit(e)})),l.gc(1),l.fc(2,u,1,0,"ion-icon",2),l.Jb()}if(2&e){var n=t.$implicit;l.Xb("disabled",!n.opened),l.xb(1),l.ic(" ",n.name,""),l.xb(1),l.Xb("ngIf",!n.opened)}}var g,p=((g=function e(){t(this,e),this.categories=[{name:"Movies",opened:!0,icon:"videocam",category:b.AvailableCategories.Movies},{name:"Auto",opened:!0,icon:"car-sport",category:b.AvailableCategories.Auto},{name:"Nature",opened:!0,icon:"leaf",category:b.AvailableCategories.Nature},{name:"Physics",opened:!0,icon:"school",category:b.AvailableCategories.Physics},{name:"General",opened:!0,icon:"information-circle",category:b.AvailableCategories.General},{name:"Math",opened:!1,icon:"calculator",category:b.AvailableCategories.Math},{name:"Geography",opened:!1,icon:"globe",category:b.AvailableCategories.Geography},{name:"Sports",opened:!1,icon:"football",category:b.AvailableCategories.Sports}],this.selectCategory=new l.n}).\u0275fac=function(e){return new(e||g)},g.\u0275cmp=l.Bb({type:g,selectors:[["app-loader"]],outputs:{selectCategory:"selectCategory"},decls:3,vars:1,consts:[["color","secondary",3,"disabled","click",4,"ngFor","ngForOf"],["color","secondary",3,"disabled","click"],["slot","end","name","lock-closed",4,"ngIf"],["slot","end","name","lock-closed"]],template:function(e,t){1&e&&(l.Kb(0,"h2"),l.gc(1,"Load the barrel"),l.Jb(),l.fc(2,f,3,3,"ion-button",0)),2&e&&(l.xb(2),l.Xb("ngForOf",t.categories))},directives:[c.i,d.b,c.j,d.i],styles:["[_nghost-%COMP%]{overflow:auto;height:50vh;padding:20px;box-sizing:border-box;background:#222}h2[_ngcontent-%COMP%]{text-align:center}"]}),g),h=["content"];function v(e,t){if(1&e){var o=l.Lb();l.Kb(0,"app-loader",10),l.Sb("selectCategory",(function(e){return l.bc(o),l.Ub().selectCategory(e)})),l.Jb()}2&e&&l.Xb("@loaderState",void 0)}function m(e,t){if(1&e){var o=l.Lb();l.Kb(0,"ion-button",14),l.Sb("click",(function(){l.bc(o);var e=t.$implicit;return l.Ub(2).processAnswer(e.correct)})),l.gc(1),l.Jb()}if(2&e){var n=t.$implicit;l.xb(1),l.hc(n.text)}}function y(e,t){if(1&e&&(l.Kb(0,"ion-card",11),l.Ib(1,"img",12),l.Kb(2,"ion-card-header"),l.Kb(3,"ion-card-subtitle"),l.gc(4),l.Jb(),l.Kb(5,"ion-card-title"),l.gc(6),l.Jb(),l.Jb(),l.Kb(7,"ion-card-content"),l.fc(8,m,2,1,"ion-button",13),l.Jb(),l.Jb()),2&e){var o=l.Ub();l.xb(1),l.Xb("src",o.currentQuestion.image,l.cc),l.xb(3),l.hc(o.currentQuestion.category),l.xb(2),l.hc(o.currentQuestion.question),l.xb(2),l.Xb("ngForOf",o.currentQuestion.answers)}}function O(e,t){if(1&e){var o=l.Lb();l.Kb(0,"ion-button",15),l.Sb("click",(function(){return l.bc(o),l.Ub().shoot()})),l.gc(1," SHOOT! "),l.Jb()}}var x,C,w=((x=function(){function o(){t(this,o),this.isLoaderOpened=!1}var n,i,c;return n=o,(i=[{key:"ngOnInit",value:function(){this.isLoaderOpened=!0}},{key:"selectCategory",value:function(e){this.drum.addOneBullet(e),6===this.drum.bullets.length&&(this.isLoaderOpened=!1,this.isShootVisible=!0)}},{key:"shoot",value:function(){this.drum.randomShot()}},{key:"fireShot",value:function(e){var t=this;this.isShootVisible=!1,setTimeout((function(){t.content.scrollToPoint(0,document.getElementById("question").offsetTop-20,700)}),500),this.currentQuestion={question:"How many soccer players should each team have on the field at the start of each match?",answers:[{text:"11",correct:!0},{text:"22",correct:!1},{text:"10",correct:!1},{text:"15",correct:!1}],image:"https://res.cloudinary.com/opinionstage/image/upload/f_auto,q_auto/v1594283243/sports-trivia-questions.jpg",points:9,category:b.AvailableCategories.Sports,description:"Each team has 11 players on a field. This includes 10 outfielders and a goalkeeper. The most common setup is known as the 4-4-2. This has four defenders, four midfielders, and two forwards."}}},{key:"processAnswer",value:function(e){}}])&&e(n.prototype,i),c&&e(n,c),o}()).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=l.Bb({type:x,selectors:[["app-level"]],viewQuery:function(e,t){var o;1&e&&(l.jc(s.a,!0),l.jc(h,!0)),2&e&&(l.ac(o=l.Tb())&&(t.drum=o.first),l.ac(o=l.Tb())&&(t.content=o.first))},decls:11,vars:8,consts:[[3,"fullscreen"],["content",""],["slot","fixed"],[3,"selectCategory",4,"ngIf"],[3,"selectedCategory"],["id","question",4,"ngIf"],[1,"container"],["expand","block","color","secondary","size","large",3,"click",4,"ngIf"],[1,"bg"],["src","/assets/img/bg.jpg"],[3,"selectCategory"],["id","question"],[3,"src"],["expand","block","color","secondary",3,"click",4,"ngFor","ngForOf"],["expand","block","color","secondary",3,"click"],["expand","block","color","secondary","size","large",3,"click"]],template:function(e,t){1&e&&(l.Kb(0,"ion-content",0,1),l.Ib(2,"div"),l.Kb(3,"div",2),l.fc(4,v,1,1,"app-loader",3),l.Jb(),l.Kb(5,"app-revolver",4),l.Sb("selectedCategory",(function(e){return t.fireShot(e)})),l.Jb(),l.fc(6,y,9,4,"ion-card",5),l.Kb(7,"div",6),l.fc(8,O,2,0,"ion-button",7),l.Jb(),l.Kb(9,"div",8),l.Ib(10,"img",9),l.Jb(),l.Jb()),2&e&&(l.Xb("fullscreen",!0),l.xb(2),l.ec("padding-top",10,"vh"),l.Xb("@revolverState",t.isLoaderOpened||!!t.currentQuestion),l.xb(2),l.Xb("ngIf",t.isLoaderOpened),l.xb(1),l.Xb("@fadeIn",void 0),l.xb(1),l.Xb("ngIf",t.currentQuestion),l.xb(2),l.Xb("ngIf",t.isShootVisible))},directives:[d.h,c.j,s.a,p,d.c,d.e,d.f,d.g,d.d,c.i,d.b],styles:["ion-content[_ngcontent-%COMP%]{--background:#1d1d1d}.bg[_ngcontent-%COMP%]{height:60vh;width:100%;position:fixed;left:0;top:20vh;z-index:-1}.bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:222vh;max-width:222vh;height:60vh}app-loader[_ngcontent-%COMP%]{width:100%;position:fixed;bottom:0}.container[_ngcontent-%COMP%]{padding:20px}ion-button[_ngcontent-%COMP%]{margin-bottom:15px}"],data:{animation:[Object(r.j)("loaderState",[Object(r.i)(":enter",[Object(r.h)({opacity:0,bottom:"-50vh"}),Object(r.e)("400ms",Object(r.h)({bottom:"0",opacity:1}))]),Object(r.i)(":leave",[Object(r.e)("400ms",Object(r.h)({bottom:"-50vh",opacity:0}))])]),Object(r.j)("revolverState",[Object(r.g)("false",Object(r.h)({"padding-top":"17vh"})),Object(r.i)("* => *",Object(r.e)("400ms ease-out"))]),Object(r.j)("fadeIn",[Object(r.i)(":enter",[Object(r.h)({opacity:0}),Object(r.e)("400ms",Object(r.h)({opacity:1}))])])]}}),x),k=i("PCNd"),j=[{path:"",component:w}],S=((C=function e(){t(this,e)}).\u0275mod=l.Fb({type:C}),C.\u0275inj=l.Eb({factory:function(e){return new(e||C)},imports:[[c.b,a.i.forChild(j),k.a,d.k]]}),C)},wEdZ:function(e,t){}}])}();