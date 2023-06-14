<template>
    <v-container fluid style="margin: 0;padding: 0;">
    <v-card class="mx-auto">
      <v-toolbar color="#81D4FA" dark>
        <v-toolbar-title>등록된 상품 개수 {{ oItems.length }}개</v-toolbar-title>
      </v-toolbar>
  
      <v-list>
        <template v-for="(item, index) in historyList">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
          <v-divider v-else-if="item.divider" :key="index" :inset="item.true"></v-divider>
          
          <v-list-item v-else :key="item.title" @click="fnInfo(item)">
            <v-list-item-content class="d-flex">
              <v-list-item-title class="mb-5" style="font-size:18px">상품명 : {{ item.title }} </v-list-item-title>
              <v-list-item-subtitle>상품종류 : {{ item.value.name }}</v-list-item-subtitle>
              <v-list-item-subtitle>제조사명 : {{ item.brand }}</v-list-item-subtitle>
              <v-list-item-subtitle>상품가격 : {{ item.price | comma }}원</v-list-item-subtitle>
              <v-list-item-subtitle class="grey--text">상품 등록 날짜 : {{ item.date }}</v-list-item-subtitle>
            </v-list-item-content>
            <div style="width: 200px;">
            <v-img :src="item.url"></v-img>
        </div>
          </v-list-item>
          <v-divider class="mt-5"></v-divider>
        </template>
      </v-list>
    </v-card>
    <div class="text-center" style="margin: 20px 0;">
    <v-btn class="mx-1" type="submit" color="#00B0FF" dark @click="moveToWrite"><v-icon left>mdi-pencil</v-icon>상품 등록하기</v-btn>
    </div>
    <v-pagination class="mb-2" v-model="page" :length="pages" @input="updatePage"></v-pagination>
</v-container>
  </template>
<script>
    import { oItemDB } from '@/assets/firebase'
    export default {
        name:'itemList',
        firebase:{ oItems : oItemDB },
        data() {
            return {
                oItems:[],
                page:1,
                pageSize:4,
                listCount:0,
                historyList:[],
            }
        },
        filters:{
            comma(val){
  	        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        mounted() {
            this.listCount = this.oItems.reverse().length
            console.log(this.listCount)
            this.init()
        },
        methods:{
            moveToWrite(){
                this.$router.push({name:'add_items'})
            },
            fnInfo(item){
                this.$router.push({name:'item_info', params:{item:item, title:item.title}})
            },
            updatePage(num){
                let start = (num-1) * this.pageSize
                let end = num * this.pageSize
                this.historyList = this.oItems.slice(start, end)
                this.page = num
            },
            init(){
                this.listCount = this.oItems.length
                console.log(this.listCount)
                if ( this.listCount < this.pageSize ) {
                    this.historyList = this.oItems
                } else {
                    this.historyList = this.oItems.slice(0, this.pageSize)
                }
            }
        },
        computed:{
            pages(){
                if (this.pageSize == null || this.listCount == null ) return 0;
                return Math.ceil(this.listCount / this.pageSize)
            },
            
        },
        
    }
</script>

<style lang="scss" scoped>
    .myflex { flex:0 1 25% }
</style>