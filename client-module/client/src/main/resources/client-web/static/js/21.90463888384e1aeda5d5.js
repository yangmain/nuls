webpackJsonp([21],{"+gqh":function(e,t){},Tcse:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("6ROu"),l=s.n(a),n=s("x47x"),i=s("LPk9"),o=s("+1pJ"),r=s("YgNb"),c=s("2tLR"),u={data:function(){return{accountAddressValue:localStorage.getItem("newAccountAddress"),dealList:[],totalAll:parseInt(sessionStorage.getItem("walletTotalAll"))||100,pages:parseInt(sessionStorage.getItem("walletPages"))||1,dealRegion:null===this.$route.query.address?"NULS":this.$route.query.address,dealOptions:[],nulsIf:null===this.$route.query.address,typeRegion:"",typeOptions:[{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"9",label:"9"},{value:"100",label:"100"},{value:"101",label:"101"},{value:"102",label:"102"},{value:"103",label:"103"}],incomeRegion:"",deallOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,s=new Date;s.setTime(s.getTime()-6048e5),e.$emit("pick",[s,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,s=new Date;s.setTime(s.getTime()-2592e6),e.$emit("pick",[s,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,s=new Date;s.setTime(s.getTime()-7776e6),e.$emit("pick",[s,t])}}]},deallTime:"",walletSetInterval:null}},components:{Back:i.a,AccountAddressBar:o.a},mounted:function(){var e=this;this.getAccountAssets(this.accountAddressValue),this.getAccountTxList(this.accountAddressValue,"?assetType="+this.dealRegion+"&type="+this.typeRegion+"&pageNumber="+this.pages+"&pageSize=20"),this.walletSetInterval=setInterval(function(){e.getAccountTxList(e.accountAddressValue,"?assetType="+e.dealRegion+"&type="+e.typeRegion+"&pageNumber="+e.pages+"&pageSize=20")},1e4)},destroyed:function(){clearInterval(this.walletSetInterval)},methods:{chenckAccountAddress:function(e){this.accountAddressValue=e,this.dealRegion="",this.nulsIf=!1,this.typeRegion="",this.pages=1,this.getAccountAssets(e),this.getAccountTxList(e,"?assetType="+this.dealRegion+"&type="+this.typeRegion+"&pageNumber="+this.pages+"&pageSize=20")},getAccountAssets:function(e){var t=this;Object(c.a)(e,this.pages,20).then(function(e){if(e.success){for(var s in e.data.list)e.data.list[s].address||(e.data.list[s].address="NULS");t.dealOptions=e.data.list}})},getAccountTxList:function(e,t){var s=this;Object(c.d)(e,t).then(function(e){if(e.success){for(var t=0;t<e.data.list.length;t++)if(e.data.list[t].time=l()(Object(r.i)(e.data.list[t].time)).format("YYYY-MM-DD HH:mm:ss"),"1000"===e.data.list[t].txType.toString()){var a=e.data.list[t].info.slice(0,1),i=new n.BigNumber(e.data.list[t].info);e.data.list[t].info="+"===a?a+i.toFormat().replace(/[,]/g,""):i.toFormat().replace(/[,]/g,"")}s.totalAll=parseInt(e.data.total),s.dealList=e.data.list}})},txIdConsensusSize:function(e){this.pages=e,this.getAccountTxList(this.accountAddressValue,"?assetType="+this.dealRegion+"&type="+this.typeRegion+"&pageNumber="+this.pages+"&pageSize=20")},changeDeal:function(e){this.pages=1;var t="";this.typeRegion="","NULS"===e?(t="NULS",this.nulsIf=!0):"0"===e?(e="",this.dealRegion="",this.nulsIf=!1):(this.nulsIf=!1,t=e),clearInterval(this.walletSetInterval),this.getAccountTxList(this.accountAddressValue,"?assetType="+t+"&type="+this.typeRegion+"&pageNumber="+this.pages+"&pageSize=20")},changeType:function(e){clearInterval(this.walletSetInterval),this.getAccountTxList(this.accountAddressValue,"?assetType="+this.dealRegion+"&type="+this.typeRegion+"&pageNumber="+this.pages+"&pageSize=20")},toTxid:function(e,t){sessionStorage.setItem("walletActiveName","second"),this.$router.push({name:"dealInfo",query:{hash:e,type:t}})},toLocked:function(e){this.$router.push({name:"/freezeList",params:{address:e}})}},beforeRouteLeave:function(e,t,s){"dealInfo"===e.name?(sessionStorage.setItem("walletTotalAll",this.totalAll.toString()),sessionStorage.setItem("walletPages",this.pages),sessionStorage.setItem("walletTypes",this.typeRegion)):(sessionStorage.removeItem("walletTotalAll"),sessionStorage.removeItem("walletPages"),sessionStorage.removeItem("walletTypes")),s()}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"deal-list"},[s("Back",{attrs:{backTitle:this.$t("message.walletManagement")}}),e._v(" "),s("div",{staticClass:"account-top"},[s("label",[e._v(e._s(e.$t("message.indexAccountAddress"))+"：")]),e._v(" "),s("AccountAddressBar",{on:{chenckAccountAddress:e.chenckAccountAddress}})],1),e._v(" "),s("h3",[e._v(e._s(e.$t("message.transactionRecord")))]),e._v(" "),s("div",{staticClass:"search"},[s("el-select",{staticClass:"deal-region",attrs:{"popper-append-to-body":!1,placeholder:e.$t("message.c207")},on:{change:e.changeDeal},model:{value:e.dealRegion,callback:function(t){e.dealRegion=t},expression:"dealRegion"}},[s("el-option",{attrs:{label:e.$t("message.c208"),value:"0"}}),e._v(" "),e._l(e.dealOptions,function(e){return s("el-option",{key:e.address,attrs:{label:e.asset,value:e.address}})})],2),e._v(" "),s("el-select",{directives:[{name:"show",rawName:"v-show",value:this.nulsIf,expression:"this.nulsIf"}],staticClass:"type-region",attrs:{"popper-append-to-body":!1,placeholder:e.$t("message.transactionType")},on:{change:e.changeType},model:{value:e.typeRegion,callback:function(t){e.typeRegion=t},expression:"typeRegion"}},[s("el-option",{attrs:{label:e.$t("message.c209"),value:"0"}}),e._v(" "),e._l(e.typeOptions,function(t){return s("el-option",{key:t.value,attrs:{label:e.$t("message.type"+t.label),value:t.value}})})],2)],1),e._v(" "),s("div",{staticClass:"deal-list-info cl"},[s("el-table",{attrs:{data:e.dealList},on:{"filter-change":e.changeType}},[s("el-table-column",{attrs:{prop:"symbol",label:e.$t("message.c207"),width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(null===t.row.symbol?"NULS":t.row.symbol)+"\n          ")]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"txType",label:e.$t("message.transactionType"),width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(e.$t("message.type"+t.row.txType))+"\n          ")]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"txid","min-width":"195",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{directives:[{name:"show",rawName:"v-show",value:0!==t.row.status,expression:"scope.row.status !==0"}],staticClass:"cursor-p text-d overflow",on:{click:function(s){e.toTxid(t.row.txHash,t.row.txType)}}},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(t.row.txHash)+"\n\t\t\t\t\t\t\t\t")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:null!==t.row.symbol&&0===t.row.status,expression:"scope.row.symbol !== null && scope.row.status ===0"}],staticClass:"overflow"},[e._v("\n\t\t\t\t\t\t\t\t\t"+e._s(t.row.txHash)+"\n\t\t\t\t\t\t\t\t")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("message.time"),width:"145",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.time))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("message.assetChange"),width:"138",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{class:t.row.info>0?"add":"minus"},[e._v(e._s(t.row.info))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("message.state"),width:"85",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(e.$t("message.statusS"+t.row.status)))])]}}])})],1),e._v(" "),s("el-pagination",{directives:[{name:"show",rawName:"v-show",value:this.totalAll>20,expression:"this.totalAll > 20"}],staticClass:"cb",attrs:{"current-page":e.pages,"page-size":20,layout:"prev, pager, next",total:e.totalAll},on:{"current-change":e.txIdConsensusSize}})],1)],1)},staticRenderFns:[]};var p=s("vSla")(u,d,!1,function(e){s("+gqh")},null,null);t.default=p.exports}});