<template>
    <v-container fluid style="padding: 0;margin: 0 auto;">
    <v-card class="mx-auto">
      <v-toolbar color="#81D4FA" dark>
        <v-toolbar-title>주문된 상품 목록 {{ oOrders.length }}개</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items style="padding: 20px;">
              총 매출액 : {{ totalPrice | comma  }}원
            </v-toolbar-items>
      </v-toolbar>
  
      <v-list>
        <template v-for="(item, index) in orderList">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
          <v-divider v-else-if="item.divider" :key="index" :inset="item.true"></v-divider>
          
          <v-list-item v-else-if="showList" :key="item.title" @click="fnInfo(item)">
            <v-list-item-avatar>
            <v-img :src="item.url"></v-img>
          </v-list-item-avatar>
            <v-list-item-content class="d-flex">
              <v-list-item-title class="mb-5" style="font-size:18px;font-weight: bold;">주문 상품 : {{ item.title }} </v-list-item-title>
              <v-list-item-title>주문자명 : <span>{{ item.orderName }}</span></v-list-item-title>
              <v-list-item-title>주문자 ID : <span>{{ item.userEmail  }}</span></v-list-item-title>
              <v-list-item-title>주문자 연락처 : <span>{{ item.orderPhone  }}</span></v-list-item-title>
              <v-list-item-title>선택된 옵션 : <span>{{ item.selectOption  }}</span></v-list-item-title>
              <v-list-item-title>배송지 : <span>{{ item.orderAddress  }}</span></v-list-item-title>
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
                page:1,
                listCount:0,
                pageSize:4,
                orderList:[],
                total:0,
                showList : false
            }
        },
        filters:{
            comma(val){
  	        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        created(){
            const email = this.$store.getters.fnGetUser.email
            this.showList = email === email ? true : false
        },
        mounted() {
            this.listCount = this.oOrders.reverse().length
            console.log(this.listCount)
            this.init()
        },
        methods:{
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
            fnInfo(item){
                this.$router.push({name:'order_view', params:{item:item, title:item.title}})
            },
        },
        computed:{
            pages(){
                if (this.pageSize == null || this.listCount == null ) return 0;
                return Math.ceil(this.listCount / this.pageSize)
            },
            totalPrice(){
                for(let i in this.orderList){
                    this.total += this.orderList[i].totalPrice
                }
                return this.total
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>