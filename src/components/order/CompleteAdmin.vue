<template>
    <v-container fluid style="padding: 0;margin: 0 auto;">
    <v-card class="mx-auto">
      <v-toolbar color="#81D4FA" dark>
        <v-toolbar-title>판매 완료된 상품 {{ list.length }}개</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items style="padding: 20px;">
              판매액 총 합계 : {{ allPrice | comma }}원
            </v-toolbar-items>
      </v-toolbar>
  
      <v-list>
        <h3 v-if="show" style="color: #868686;padding-top: 50px;text-align: center;">{{ none }}</h3>
        <p v-if="show" style="color: rgba(255, 0, 0, 0.61);padding-bottom: 50px;text-align: center;">({{ comment }})</p>
        <v-row v-if="show">
            <v-col cols="12" align="center">
                <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2FaddItems.png?alt=media&token=47295765-1233-4d4b-b7c3-69de42538c85" contain width="160px" height="120px" class="mb-5"></v-img>
                <v-btn class="mb-5 mt-5" to="/order_check" color="#81D4FA" dark>내 주문목록 확인하러 가기</v-btn>
            </v-col>
        </v-row>
        <template v-for="(item, index) in completelist">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
          <v-divider v-else-if="item.divider" :key="index" :inset="item.true"></v-divider>
          
          <v-list-item :key="item.title">
            <v-list-item-avatar>
            <v-img :src="item.url"></v-img>
          </v-list-item-avatar>
            <v-list-item-content class="d-flex">
              <v-list-item-title class="mb-1" style="font-size:15px;">판매된 상품 : <span>{{ item.name }}</span> </v-list-item-title>
              <v-list-item-title class="mb-5" style="font-size:15px;">구매자 ID : <span>{{ item.userEmail }}</span>님</v-list-item-title>
              <v-list-item-title style="color:#868686">판매 수량 : {{ item.orderCount }} </v-list-item-title>
              <v-list-item-title style="color:#868686">가격 : {{ item.totalPrice | comma }}원</v-list-item-title>
              <v-list-item-title style="color:#868686">구매 완료된 날짜 : {{ item.date }} </v-list-item-title>
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
    import { oCompleteDB } from '@/assets/firebase'
    export default {
        firebase:{ completelist : oCompleteDB },
        data(){
            return {
                completelist:[],
                list:[],
                rev:[],
                page:1,
                listCount:0,
                none:"",
                comment:"",
                show:false,
                totalPrice:0,
            }
        },
        filters:{
            comma(val){
  	        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        created(){
           const email = this.$store.getters.fnGetUser.email
           this.list = this.completelist
           console.log(this.list)
        },
        mounted() {
            this.listCount = this.list.reverse().length
            console.log(this.listCount)
            this.init()
            if(this.list.length == 0){
              this.none = "구매 완료한 상품이 없습니다!"
              this.comment = "리뷰 작성까지 완료된 상품 목록이 나타납니다."
              this.show = true
            }
        },
        methods:{
            updatePage(num){
                let start = (num-1) * this.pageSize
                let end = num * this.pageSize
                this.completelist = this.list.slice(start, end)
                this.page = num
            },
            init(){
                this.listCount = this.list.length
                console.log(this.listCount)
                if ( this.listCount < this.pageSize ) {
                    this.completelist = this.list
                } else {
                    this.completelist = this.list.slice(0, this.pageSize)
                }
            },
        },
        computed:{
            allPrice(){
                for(let i in this.list){
                    this.totalPrice += this.list[i].totalPrice /2
                }
                return this.totalPrice
            }
            
        },
    }
</script>

<style lang="scss" scoped>
span{
  font-size: 17px;
  font-weight: bold;
}
</style>