webpackJsonp([1],{"7zck":function(t,s){},"A+db":function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("7+uW"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")({name:"App",data:function(){return{origin:"",desination:"",date:null,results:[]}}},a,!1,function(t){e("vCxg")},null,null).exports,r=e("/ocq"),i=e("PJh5"),l=e.n(i),c=e("mtWM"),u=e.n(c),d={name:"search",data:function(){return{head:"",content:"",date:"2018-10-01",notFound:!1,errorBar:!1,bookBar:!1,menu:!1,number:1,results:[],from:"",to:"",origins:[],destinations:[]}},methods:{aaj:function(){return console.log(l()(new Date).format("YYYY-MM-DD")),l()(new Date).format("YYYY-MM-DD")},alterTo:function(){var t=this;console.log(this.from.slice(0,-6)),u.a.post("https://localhost:3000/correspondingDestinations",{origin:this.from.slice(0,-6)}).then(function(s){t.destinations=s.data})},book:function(t,s,e,n,a,o,r){this.head="Thank you for booking your ticket with us. 😊",this.content="Your flight "+t+" ("+s+") will depart from "+e+" at "+this.momenty(a)+" and arrive in "+n+" at "+this.momenty(o),this.bookBar=!0},amount:function(t){return console.log(this.number),1===this.number?t:t+" x "+this.number+" = ₹"+t*this.number},duration:function(t,s){return parseInt(l.a.duration(l()(s).diff(l()(t))).asHours())+"h"+parseInt(l.a.duration(l()(s).diff(l()(t))).asMinutes())%60+"m"},momenty:function(t){return l()(t).format("kk:mm")},search:function(){var t=this;""===this.from||""===this.to||""===this.date?this.errorBar=!0:(console.log(this.from.slice(0,-6)),console.log(this.to.slice(0,-6)),u.a.post("https://localhost:3000/flights",{origin:this.from.slice(0,-6),destination:this.to.slice(0,-6)}).then(function(s){t.results=s.data}))},exchange:function(){var t=this.from;this.from=this.to,this.to=t}},created:function(){var t=this;u.a.get("https://localhost:3000/airports").then(function(s){console.log(s.data),t.origins=s.data.origins.sort(),t.destinations=s.data.destinations.sort()})}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-app",[e("div",[e("v-toolbar",{staticClass:"main",attrs:{height:"60"}}),t._v(" "),e("v-container",{attrs:{"mt-3":""}},[e("v-form",[e("v-flex",{staticClass:"font-weight-bold text-xs-left",staticStyle:{"font-size":"1.5em"}},[t._v("\n          Book Domestic and International flights\n        ")]),t._v(" "),e("v-layout",{staticClass:"text-xs-left",attrs:{row:"","align-end":"","mt-3":""}},[e("v-flex",{staticStyle:{position:"relative"}},[e("span",{staticStyle:{position:"absolute",height:"4px",width:"20px",background:"#7d5adf",top:"0.7em","border-radius":"2px"}}),t._v(" "),e("span",{staticClass:"font-weight-bold",staticStyle:{"margin-left":"30px","font-size":"1.1em"}},[t._v("Flight Details")])])],1),t._v(" "),e("v-layout",{attrs:{"mt-4":"","justify-center":"",row:"",wrap:""}},[e("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[e("v-autocomplete",{attrs:{items:t.origins,"persistent-hint":"",color:"main",label:"From","append-icon":"place",solo:""},on:{input:function(s){t.alterTo()}},model:{value:t.from,callback:function(s){t.from=s},expression:"from"}},[e("v-slide-x-reverse-transition",{attrs:{slot:"append-outer",mode:"out-in"},slot:"append-outer"})],1)],1),t._v(" "),e("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[e("v-autocomplete",{attrs:{color:"main",items:t.destinations,"persistent-hint":"",label:"To","append-icon":"place",solo:""},model:{value:t.to,callback:function(s){t.to=s},expression:"to"}},[e("v-slide-x-reverse-transition",{attrs:{slot:"append-outer",mode:"out-in"},slot:"append-outer"})],1)],1),t._v(" "),e("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[e("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(s){t.date=s}},model:{value:t.menu,callback:function(s){t.menu=s},expression:"menu"}},[e("v-text-field",{staticClass:"main--text",attrs:{slot:"activator",color:"main",solo:"",label:"Departure date","append-icon":"date_range",readonly:""},slot:"activator",model:{value:t.date,callback:function(s){t.date=s},expression:"date"}}),t._v(" "),e("v-date-picker",{attrs:{min:t.aaj(),color:"main",type:"date","no-title":"",scrollable:""},model:{value:t.date,callback:function(s){t.date=s},expression:"date"}},[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(s){t.menu=!1}}},[t._v("Cancel")]),t._v(" "),e("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(s){t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1),t._v(" "),e("v-flex",{attrs:{xs3:"",sm2:"",md1:"","ml-1":""}},[e("v-text-field",{attrs:{type:"number","append-icon":"people",color:"main",min:"1",solo:""},model:{value:t.number,callback:function(s){t.number=s},expression:"number"}})],1)],1),t._v(" "),e("v-layout",{attrs:{"justify-center":""}},[e("v-btn",{staticClass:"main white--text",staticStyle:{"border-radius":"4px"},attrs:{large:""},on:{click:function(s){t.search()}}},[t._v("\n            SEARCH\n            ")])],1),t._v(" "),t.results.length>0?e("v-layout",{staticClass:"text-xs-left",attrs:{row:"","align-end":"","mt-4":""}},[e("v-flex",{staticStyle:{position:"relative"}},[e("span",{staticStyle:{position:"absolute",height:"4px",width:"20px",background:"#7d5adf",top:"0.7em","border-radius":"2px"}}),t._v(" "),e("span",{staticClass:"font-weight-bold",staticStyle:{"margin-left":"30px","font-size":"1.1em"}},[t._v("Flight Results")])])],1):t._e(),t._v(" "),t.results.length>0?e("v-container",[e("v-list",{attrs:{"three-line":"",subheader:""}},t._l(t.results,function(s){return e("v-list-tile",{key:s.id,staticClass:"border1 mb-2 white"},[e("v-list-tile-avatar",{staticClass:"ml-3",staticStyle:{"margin-top":"1px"},attrs:{size:"50"}},[e("img",{attrs:{src:s.image}})]),t._v(" "),e("v-layout",[e("v-flex",{attrs:{xs2:""}},[e("v-layout",{attrs:{column:""}},[e("v-flex",{attrs:{"font-weight-bold":""}},[t._v("\n                      "+t._s(s.name)+"\n                    ")]),t._v(" "),e("v-flex",[t._v("\n                      "+t._s(s.fcode)+"\n                    ")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-layout",{attrs:{column:""}},[e("v-flex",{attrs:{"font-weight-bold":""}},[t._v("\n                      "+t._s(s.origin)+"\n                    ")]),t._v(" "),e("v-flex",[t._v("\n                      "+t._s(t.momenty(s.departure))+"\n                    ")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-layout",{attrs:{column:""}},[e("v-flex",{attrs:{"font-weight-bold":""}},[t._v("\n                      "+t._s(s.destination)+"\n                    ")]),t._v(" "),e("v-flex",[t._v("\n                      "+t._s(t.momenty(s.arrival))+"\n                    ")])],1)],1),t._v(" "),e("v-flex",{attrs:{xs2:"","pt-3":"","pl-4":"",title:"","font-weight-bold":""}},[e("v-icon",[t._v("access_time")]),t._v(" "+t._s(t.duration(s.departure,s.arrival))+"\n                ")],1),t._v(" "),e("v-flex",{attrs:{xs2:"",title:"","pt-3":"","green--text":""}},[t._v("\n                  ₹ "+t._s(t.amount(s.price))+"\n                ")]),t._v(" "),e("v-flex",{attrs:{xs2:""}},[e("v-btn",{staticClass:"main white--text",staticStyle:{"border-radius":"4px"},on:{click:function(e){t.book(s.name,s.fcode,s.origin,s.destination,s.departure,s.arrival,s.price)}},model:{value:t.bookBar,callback:function(s){t.bookBar=s},expression:"bookBar"}},[t._v("\n                    BOOK\n                  ")])],1)],1)],1)}))],1):t._e(),t._v(" "),t.notFound?e("v-container",{attrs:{"mt-5":"","pt-5":""}},[e("div",{staticClass:"title"},[t._v("No tickets could be found with the above parameters. 😕")])]):t._e()],1),t._v(" "),e("v-dialog",{attrs:{"max-width":"420"},model:{value:t.bookBar,callback:function(s){t.bookBar=s},expression:"bookBar"}},[e("v-card",[e("v-card-title",{staticClass:"headline font-weight-bold ma-2"},[t._v(t._s(t.head))]),t._v(" "),e("v-card-text",{staticClass:"subheading text-xs-left mx-2 mt-2"},[t._v("\n            "+t._s(t.content)+"\n          ")]),t._v(" "),e("v-layout",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(s){t.bookBar=!1}}},[t._v("\n              Okay\n            ")])],1)],1)],1),t._v(" "),e("v-snackbar",{attrs:{timeout:3e3,color:"red"},model:{value:t.errorBar,callback:function(s){t.errorBar=s},expression:"errorBar"}},[t._v("\n        Please fill in all the input fields.\n      ")])],1)],1)])},staticRenderFns:[]};var m=e("VU/8")(d,v,!1,function(t){e("A+db")},null,null).exports;n.default.use(r.a);var f=new r.a({routes:[{path:"/",name:"search",component:m}]}),j=e("3EgV"),h=e.n(j);e("gJtD"),e("7zck");n.default.config.productionTip=!1,n.default.use(h.a,{theme:{main:"#7d5adf"}}),new n.default({el:"#app",router:f,components:{App:o},template:"<App/>"})},gJtD:function(t,s){},uslO:function(t,s,e){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return e(o(t))}function o(t){var s=n[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="uslO"},vCxg:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.52b4b3d4f36792d8783d.js.map