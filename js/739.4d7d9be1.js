"use strict";(self["webpackChunkpractice"]=self["webpackChunkpractice"]||[]).push([[739],{8739:function(t,e,i){i.r(e),i.d(e,{default:function(){return $}});var s=i(9582),a=i(9256),n=i(9223),r=i(5495),l=i(5808),o=i(4525),h=i(523),u=i(5754),p=i(5372),c=i(3687),g=i(2540),v=i(6313),d=i(7953),m=function(){var t=this,e=t._self._c;return e(a.Z,{staticStyle:{padding:"0",margin:"0 auto"},attrs:{fluid:""}},[e(s.Z,{staticClass:"mx-auto"},[e(v.Z,{attrs:{color:"#81D4FA",dark:""}},[e(d.qW,[t._v("주문된 상품 목록 "+t._s(t.oOrders.length)+"개")]),e(c.Z),e(d.lj,{staticStyle:{padding:"20px"}},[t._v(" 총 매출액 : "+t._s(t._f("comma")(t.totalPrice))+"원 ")])],1),e(l.Z,[t._l(t.orderList,(function(i,s){return[i.header?e(g.Z,{key:i.header,domProps:{textContent:t._s(i.header)}}):i.divider?e(n.Z,{key:s,attrs:{inset:i.true}}):t.showList?e(o.Z,{key:i.title,on:{click:function(e){return t.fnInfo(i)}}},[e(h.Z,[e(r.Z,{attrs:{src:i.url}})],1),e(u.km,{staticClass:"d-flex"},[e(u.V9,{staticClass:"mb-5",staticStyle:{"font-size":"18px","font-weight":"bold"}},[t._v("주문 상품 : "+t._s(i.title)+" ")]),e(u.V9,[t._v("주문자명 : "),e("span",[t._v(t._s(i.orderName))])]),e(u.V9,[t._v("주문자 ID : "),e("span",[t._v(t._s(i.userEmail))])]),e(u.V9,[t._v("주문자 연락처 : "),e("span",[t._v(t._s(i.orderPhone))])]),e(u.V9,[t._v("선택된 옵션 : "),e("span",[t._v(t._s(i.selectOption))])]),e(u.V9,[t._v("배송지 : "),e("span",[t._v(t._s(i.orderAddress))])]),e(u.V9,[t._v("선택된 색상 : "),e("span",[t._v(t._s(i.selectColor))])]),e(u.V9,[t._v("주문 수량 : "),e("span",[t._v(t._s(i.orderCount))]),t._v("개")]),e(u.V9,[t._v("주문 가격 : "),e("span",[t._v(t._s(t._f("comma")(i.totalPrice)))]),t._v("원")]),e(u.V9,[t._v("주문 날짜 : "),e("span",[t._v(t._s(i.date))])]),e(u.V9,[t._v("배송상태 : "),e("span",[t._v(t._s(i.status.name))])])],1)],1):t._e(),e(n.Z,{staticClass:"mt-5"})]}))],2)],1),e(p.Z,{staticClass:"mb-2",attrs:{length:t.pages},on:{input:t.updatePage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)},f=[],_=(i(7658),i(1457)),b={firebase:{oOrders:_.nF},data(){return{oOrders:[],page:1,listCount:0,pageSize:4,orderList:[],total:0,showList:!1}},filters:{comma(t){return String(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},created(){const t=this.$store.getters.fnGetUser.email;this.showList=t===t},mounted(){this.listCount=this.oOrders.reverse().length,console.log(this.listCount),this.init()},methods:{updatePage(t){let e=(t-1)*this.pageSize,i=t*this.pageSize;this.orderList=this.oOrders.slice(e,i),this.page=t},init(){this.listCount=this.oOrders.length,console.log(this.listCount),this.listCount<this.pageSize?this.orderList=this.oOrders:this.orderList=this.oOrders.slice(0,this.pageSize)},fnInfo(t){this.$router.push({name:"order_view",params:{item:t,title:t.title}})}},computed:{pages(){return null==this.pageSize||null==this.listCount?0:Math.ceil(this.listCount/this.pageSize)},totalPrice(){for(let t in this.orderList)this.total+=this.orderList[t].totalPrice;return this.total}}},y=b,L=i(1001),x=(0,L.Z)(y,m,f,!1,null,"454d9264",null),$=x.exports},5372:function(t,e,i){i.d(e,{Z:function(){return h}});i(7658);var s=i(2240),a=i(6746),n=i(6878),r=i(7756),l=i(6669),o=i(7678),h=(0,o.Z)(n.Z,(0,r.Z)({onVisible:["init"]}),l.Z).extend({name:"v-pagination",directives:{Resize:a.Z},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const i=e%2===0?1:0,s=Math.floor(e/2),a=this.length-s+1+i;if(this.value>s&&this.value<a){const t=1,e=this.length,a=this.value-s+2,n=this.value+s-2-i,r=a-1===t+1?2:"...",l=n+1===e-1?n+1:"...";return[1,r,...this.range(a,n),l,this.length]}if(this.value===s){const t=this.value+s-1-i;return[...this.range(1,t),"...",this.length]}if(this.value===a){const t=this.value-s+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,s),"...",...this.range(a,this.length)]}},watch:{value(){this.init()}},beforeMount(){this.init()},methods:{init(){this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((()=>this.selected=this.value),100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const i=[];t=t>0?t:1;for(let s=t;s<=e;s++)i.push(s);return i},genIcon(t,e,i,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":n},on:i?{}:{click:a}},[t(s.Z,[e])])])},genItem(t,e){const i=e===this.value&&(this.color||"primary"),s=e===this.value,a=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(a,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map(((e,i)=>t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)])))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})}}]);
//# sourceMappingURL=739.4d7d9be1.js.map