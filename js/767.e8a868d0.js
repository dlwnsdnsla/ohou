"use strict";(self["webpackChunkpractice"]=self["webpackChunkpractice"]||[]).push([[767],{9767:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var a=s(4562),r=s(6748),i=s(9582),o=s(266),n=s(9256),l=s(3821),c=s(4324),p=s(5495),d=s(5808),g=s(4525),u=s(5754),f=s(4528),m=s(1713),h=s(6313),y=s(7953),_=function(){var t=this,e=t._self._c;return e(n.Z,{staticStyle:{margin:"0",padding:"0"},attrs:{fluid:""}},[e(l.Z,{attrs:{items:t.list,"items-per-page":t.itemsPerPage,page:t.page,search:t.search,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"hide-default-footer":"","no-data-text":t.no_results_text},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e},"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"header",fn:function(){return[e(h.Z,{staticClass:"mb-2 d-flex justify-center",attrs:{color:"#ffffff",dark:"",flat:""}},[e(y.qW,{staticClass:"headline",staticStyle:{flex:"1",color:"#000"}},[t._v("생필품")])],1),e(m.Z,{staticClass:"d-flex flex-row mb-6 justify-center",staticStyle:{width:"70%",margin:"0 auto"}}),t.show?e(m.Z,[e(o.Z,{attrs:{cols:"12",align:"center"}},[e(p.Z,{staticClass:"mb-5",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2FaddItems.png?alt=media&token=47295765-1233-4d4b-b7c3-69de42538c85",contain:"",width:"200px",height:"160px"}}),e("h3",{staticStyle:{color:"#868686",padding:"50px 0","text-align":"center"}},[t._v(t._s(t.none))])],1)],1):t._e()]},proxy:!0},{key:"default",fn:function(s){return[e(m.Z,{staticClass:"mt-1",attrs:{align:"center"}},[e(o.Z,{attrs:{cols:"12",align:"right"}},[e(f.Z,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:r}){return[e(a.Z,t._g(t._b({staticClass:"ml-2 mr-2",staticStyle:{height:"35px","font-size":"12px"},attrs:{dark:"",color:"#464646",outlined:""}},"v-btn",r,!1),s),[t._v(" "+t._s(t.itemsPerPage)+"개씩 보기 "),e(c.Z,{staticClass:"ml-2"},[t._v("mdi-chevron-down")])],1)]}}],null,!0)},[e(d.Z,t._l(t.itemsPerPageArray,(function(s,a){return e(g.Z,{key:a,on:{click:function(e){return t.updateItemsPerPage(s)}}},[e(u.V9,[t._v(t._s(s))])],1)})),1)],1),e(r.Z,{attrs:{mandatory:""},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}},[e(a.Z,{staticStyle:{border:"none",height:"35px","font-size":"12px"},attrs:{pressed:"",value:"rvCount",outlined:"",dark:"",color:"#000000"},on:{click:t.sort}},[t._v("인기순")]),e(a.Z,{staticStyle:{border:"none",height:"35px","font-size":"12px"},attrs:{depressed:"",value:"price",outlined:"",dark:"",color:"#000000"},on:{click:t.sort}},[t._v("가격순")])],1),e("span",{staticStyle:{color:"#464646","font-size":"12px",margin:"0 20px"}},[t._v("전체 "+t._s(t.list.length)+" 개")])],1)],1),e(m.Z,[t._l(s.items,(function(s){return e(o.Z,{key:s.title,staticStyle:{display:"flex"},attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e(i.Z,{staticClass:"py-2 px-2",staticStyle:{cursor:"pointer"},attrs:{height:"450px",flat:""},on:{click:function(e){return t.fnInfo(s)}}},[e("div",{staticStyle:{overflow:"hidden","border-radius":"10px"}},[e(p.Z,{staticClass:"pointer",attrs:{src:s.url,height:"300px"}})],1),e("div",{staticClass:"d-flex flex-column mb-6",staticStyle:{height:"85px",padding:"10px 0"}},[e("p",{staticClass:"body-1",staticStyle:{color:"#464646",margin:"0",padding:"0"}},[e("strong",{staticStyle:{color:"#868686","font-size":"12px"}},[t._v(t._s(s.brand))])]),e("span",{staticClass:"body-1"},[e("strong",[t._v(t._s(s.title))])])]),e("span",{staticClass:"body-3",staticStyle:{"font-size":"12px","border-radius":"3px",background:"#81D4FA",padding:"5px",color:"#fff"}},[t._v("리뷰 "+t._s(s.rvCount)+"개")]),e("p",{staticClass:"body-1",staticStyle:{color:"#464646",margin:"5px 0 0 0","padding-bottom":"50px"}},[t._v(t._s(t._f("comma")(s.price))+"원")])])],1)})),e(o.Z,{staticStyle:{margin:"60px 0"},attrs:{cols:"12",align:"center"}},[e("span",{staticClass:"mr-4 ml-4"},[t._v("전체 "+t._s(t.numberOfPages)+" 페이지 ")]),e(a.Z,{staticClass:"mr-1",attrs:{dark:"",color:"#81D4FA"},on:{click:t.formerPage}},[e(c.Z,[t._v("mdi-chevron-left")])],1),e("span",{staticClass:"mr-4 ml-4"},[e("strong",[t._v(t._s(t.page)+" 페이지")])]),e(a.Z,{staticClass:"ml-1",attrs:{dark:"",color:"#81D4FA"},on:{click:t.nextPage}},[e(c.Z,[t._v("mdi-chevron-right")])],1)],1)],2)]}}])})],1)},x=[],v=(s(7658),s(1457)),P={firebase:{oItems:v.Ms},data(){return{itemsPerPageArray:[4,8,12],itemsPerPage:8,historyList:[],page:1,pageSize:8,listCount:0,list:[],oItems:[],search:"",dflag:!1,sortBy:"rvCount",sortDesc:!0,keys:["title","price","rvCount"],none:"",show:!1,no_results_text:""}},created(){this.list=this.oItems.filter((t=>"necessity"==t.value.value))},filters:{comma(t){return String(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}},mounted(){0==this.list.length&&(this.none="등록된 상품이 없습니다.",this.show=!0)},methods:{fnInfo(t){this.$router.push({name:"item_view",params:{item:t,title:t.title}})},nextPage(){this.page+1<=this.numberOfPages&&(this.page+=1)},formerPage(){this.page-1>=1&&(this.page-=1)},updateItemsPerPage(t){this.itemsPerPage=t},sort(){this.sortDesc=!this.sortDesc}},computed:{numberOfPages(){return Math.ceil(this.list.length/this.itemsPerPage)}}},b=P,Z=s(1001),k=(0,Z.Z)(b,_,x,!1,null,"42d5eb09",null),C=k.exports}}]);
//# sourceMappingURL=767.e8a868d0.js.map