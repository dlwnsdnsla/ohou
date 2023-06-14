<template >
    <v-container fluid style="padding: 0;margin: 0 auto;">
    <v-card class="mx-auto">
      <v-toolbar color="#81D4FA" dark>
        <v-toolbar-title>장바구니 목록 {{ list.length }}개</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items style="padding: 20px;">
              총 합계 : {{ totalPrice | comma }}원
            </v-toolbar-items>
      </v-toolbar>
  
      <v-list>
        <h3 v-if="show" style="color: #868686;padding: 50px 0;text-align: center;">{{ none }}</h3>
        <v-row v-if="show">
            <v-col cols="12" align="center">
                <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2FaddItems.png?alt=media&token=47295765-1233-4d4b-b7c3-69de42538c85" contain width="160px" height="120px" class="mb-5"></v-img>
                <v-btn v-if="showLogin" class="mb-5 mt-5" to="/login"  color="#81D4FA" dark>장바구니에 상품을 담으려면 먼저 로그인하세요!</v-btn>
                <v-btn v-if="!showLogin" class="mb-5 mt-5" to="/searchitems" color="#81D4FA" dark>장바구니에 상품 담으러 가기</v-btn>
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
              <v-list-item-title style="font-size:18px"> {{ item.title }} </v-list-item-title>
              <v-list-item-subtitle class="mb-5">(상품가격 : {{ item.price | comma }}원)</v-list-item-subtitle>
              <v-list-item-subtitle><p class="mb-0" style="color: #000;">장바구니에 담은 수량 : {{ item.count | comma }}개</p></v-list-item-subtitle>
              <v-list-item-subtitle><p class="mb-0" style="color: #000;">장바구니에 담은 상품 가격 : {{ item.total | comma }}원</p></v-list-item-subtitle>
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
    import { oCartDB } from '@/assets/firebase'
    export default {
        firebase:{ oCarts : oCartDB },
        data() {
            return {
                oCarts:[],
                page:1,
                pageSize:4,
                listCount:0,
                cartList:[],
                total:0,
                count:1,
                list:[],
                none:"",
                show:false,
                showLogin : true,
            }
        },
        created(){
         const email = this.$store.getters.fnGetUser.email
         this.list = this.oCarts.filter((item)=>item.userEmail == email)
         this.showLogin = email ? false : true
        },
        filters:{
            comma(val){
  	        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        mounted() {
            this.listCount = this.oCarts.reverse().length
            console.log(this.listCount)
            this.init()
            if(this.list.length == 0){
                this.none = "장바구니에 담긴 상품이 없습니다."
                this.show = true
            }
        },
        methods:{
            updatePage(num){
                let start = (num-1) * this.pageSize
                let end = num * this.pageSize
                this.cartList = this.oCarts.slice(start, end)
                this.page = num
            },
            init(){
                this.listCount = this.oCarts.length
                console.log(this.listCount)
                if ( this.listCount < this.pageSize ) {
                    this.cartList = this.oCarts
                } else {
                    this.cartList = this.oCarts.slice(0, this.pageSize)
                }
            },
            fnInfo(item){
                this.$router.push({name:'cart_view', params:{item:item, title:item.title}})
            },
        },
        computed:{
            pages(){
                if (this.pageSize == null || this.listCount == null ) return 0;
                return Math.ceil(this.listCount / this.pageSize)
            },
            totalPrice(){
                for(let i in this.list){
                    this.total += this.list[i].total
                }
                return this.total
            }
            
        },
        
    }
</script>

<style lang="scss" scoped>
    .myflex { flex:0 1 25% }
</style>