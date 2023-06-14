<template>
    <v-container fluid style="padding: 0;margin: 0 auto;">
    <v-card class="mx-auto">
      <v-toolbar color="#81D4FA" dark>
        <v-toolbar-title>주문한 상품 목록 {{ list.length }}개</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items style="padding: 20px;">
              주문 금액 : {{ totalPrice | comma  }}원
            </v-toolbar-items>
      </v-toolbar>
      <v-list>
        <h3 v-if="show" style="color: #868686;padding: 50px 0;text-align: center;">{{ none }}</h3>
        <v-row v-if="show">
            <v-col cols="12" align="center">
              <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2FaddItems.png?alt=media&token=47295765-1233-4d4b-b7c3-69de42538c85" contain width="160px" height="120px" class="mb-5"></v-img>
                <v-btn class="mb-5 mt-5" to="/searchitems" color="#81D4FA" dark>상품 주문하러 가기</v-btn>
            </v-col>
        </v-row>
        <template v-for="(item, index) in list">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
          <v-divider v-else-if="item.divider" :key="index" :inset="item.true"></v-divider>
          
          <v-list-item v-else :key="item.title" @click="fnInfo(item)">
            <v-list-item-avatar>
            <v-img :src="item.url"></v-img>
          </v-list-item-avatar>
            <v-list-item-content class="d-flex">
              <v-list-item-title class="mb-5" style="font-size:18px;">주문 상품 : {{ item.title }} </v-list-item-title>
              <v-list-item-title>주문자명 : <span>{{ item.orderName }}</span></v-list-item-title>
              <v-list-item-title>주문자 ID : <span>{{ item.userEmail  }}</span></v-list-item-title>
              <v-list-item-title>주문자 연락처 : <span>{{ item.orderPhone  }}</span></v-list-item-title>
              <v-list-item-title>배송지 : <span>{{ item.orderAddress }}</span></v-list-item-title>
              <v-list-item-title>선택된 옵션 : <span>{{ item.selectOption  }}</span></v-list-item-title>
              <v-list-item-title>선택된 색상 : <span>{{ item.selectColor  }}</span></v-list-item-title>
              <v-list-item-title>주문 수량 : <span>{{ item.orderCount  }}</span>개</v-list-item-title>
              <v-list-item-title>주문 가격 : <span>{{ item.totalPrice | comma  }}</span>원</v-list-item-title>
              <v-list-item-title>주문 날짜 : <span>{{ item.date }}</span></v-list-item-title>
              <v-list-item-title>배송상태 : <span>{{ item.status.name }}</span></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="mt-5"></v-divider>
        </template>
      </v-list>
    </v-card>
    <v-pagination class="mb-2" v-model="page" :length="pages" @input="updatePage"></v-pagination>
</v-container>
  </template>
<script>
import { oOrderDB } from '@/assets/firebase'
    export default {
        firebase:{ oOrders : oOrderDB },
        data() {
            return {
                oOrders:[],
                orderList:[],
                page:1,
                pageSize:4,
                listCount:0,
                total:0,
                showBtn : false,
                list:[],
                none:"",
                show:false,
            }
        },
        filters:{
            comma(val){
  	        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        created(){
         const email = this.$store.getters.fnGetUser.email
         this.list = this.oOrders.filter((item)=>item.userEmail == email)
        },
        mounted() {
            this.listCount = this.list.reverse().length
            if(this.list.length == 0){
                this.none = "주문한 상품이 없습니다."
                console.log(this.none)
                this.show = true
            }
        },
        computed:{
            pages(){
                if (this.pageSize == null || this.listCount == null ) return 0;
                return Math.ceil(this.listCount / this.pageSize)
            },
            totalPrice(){
              let orderPrice = 0
                for(let i = 0; i < this.list.length; i++){
                    orderPrice += this.list[i].totalPrice
                }
                this. total = orderPrice
                return this.total
            }
        },
        methods:{
            fnInfo(item){
                this.$router.push({name:'order_info', params:{item:item, title:item.title}})
            },
            updatePage(num){
                let start = (num-1) * this.pageSize
                let end = num * this.pageSize
                this.orderList = this.oOrders.slice(start, end)
                this.page = num
            },
            init(){
                this.listCount = this.oOrders.length
                console.log(this.listCount)
                if ( this.listCount < this.pageSize ) {
                    this.orderList = this.oOrders
                } else {
                    this.orderList = this.oOrders.slice(0, this.pageSize)
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
.v-list-item__title {
  color: #464646;
  span {
    color: black;
  }
}
</style>