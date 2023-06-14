<template>
    <v-container fluid style="margin: 0;padding: 0;">
        <v-toolbar color="#81D4FA" dark style="margin-bottom: 20px;display: flex;justify-content: center;">
            <span v-if="!show" style="font-weight: normal;">{{ title }}</span>
            <span v-if="show" style="margin-left: 30px;">작성된 리뷰가 없는 상품입니다.</span>
      </v-toolbar>
      <h3 v-if="show" style="color: #868686;padding: 50px 0;text-align: center;">{{ none }}</h3>
        <v-row v-if="show">
            <v-col cols="12" align="center">
                <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2FaddItems.png?alt=media&token=47295765-1233-4d4b-b7c3-69de42538c85" contain width="160px" height="120px" class="mb-5"></v-img>
                <span v-if="show">작성된 리뷰가 없는 상품입니다.</span>
            </v-col>
        </v-row>
      <v-data-iterator :items="list" :items-per-page.sync="itemsPerPage" :page.sync="page" :search="search" :sort-by="sortBy"
      :sort-desc="sortDesc" hide-default-footer :no-data-text="no_results_text">
        <template v-slot:default="props">
          <v-row>
            <v-col cols="12" align="right">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn style="height: 35px;font-size: 12px;" dark color="#464646" class="ml-2 mr-2" v-bind="attrs" v-on="on" outlined>
                  {{ itemsPerPage }}개씩 보기
                    <v-icon class="ml-2">mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(number, index) in itemsPerPageArray" :key="index" @click="updateItemsPerPage(number)">
                    <v-list-item-title>{{ number }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-btn-toggle v-model="sortBy" mandatory>
              <v-btn style="border: none;height: 35px;font-size: 12px;" @click="sort" pressed :value="`date`" outlined dark color="#000000">날짜·시간순</v-btn>
            </v-btn-toggle>
              <span style="color:#464646;font-size:12px;margin:0 20px">전체 {{ list.length }} 개</span>
            </v-col>
            <!-- <v-select style="width: 100px;height: 50px;" v-model="sortBy" solo-inverted hide-details :items="keys" prepend-inner-icon="mdi-magnify" label="정렬"></v-select> -->
          </v-row>
          <v-row>
            <v-col v-for="item in props.items" :key="item.title" cols="12" sm="6" md="4" lg="3" style="display: flex;margin-bottom: 100px;">
                <v-card class="py-2 px-2" height="450px" flat>
                    <p class="body-1" style="color:#81D4FA;height: 33px;">{{ item.userEmail  }}<strong style="color: #464646;">님의 게시글</strong></p>
                    <div style="overflow: hidden;border-radius: 10px;"><v-img style="border-radius: 10px;" :src="item.url" height="300px" class="pointer" @click="fnInfo(item)"></v-img></div>
                    <p style="font-size: 13px;font-weight: bold;padding-top: 20px;height: 70px;">{{ item.name }}</p>
                    <h1 style="font-size: 15px;color:#000000;font-weight: bold;" class="my-3">{{ item.title }}</h1>
                    <p class="body-1 grey--text">작성일 : {{ item.date }}</p>
                </v-card>
            </v-col>
            <!-- <v-col cols="12" class="text-center" v-if="showBtn">
            <v-btn color="#81D4FA" @click="moveToWrite" dark><v-icon left>mdi-pencil</v-icon>리뷰 작성하러가기</v-btn>
        </v-col>
        <v-col cols="12" class="text-center" v-if="showLogin">
            <v-btn block color="#81D4FA" to="/login" dark>리뷰를 작성하려면 로그인 하세요</v-btn>
        </v-col> -->
            <v-col cols="12" align="center" style="margin: 60px 0;">
              <span class="mr-4 ml-4 ">전체 {{ numberOfPages }} 페이지
          </span>
          <v-btn dark color="#81D4FA" class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <span class="mr-4 ml-4 "><strong>{{ page }} 페이지</strong>
          </span>
          <v-btn dark color="#81D4FA" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  </template>
  
  <script>
    import { oItemsReviewDB } from '@/assets/firebase'
  
    export default {
        firebase:{ oReviews : oItemsReviewDB },
        data() {
            return {
              itemsPerPageArray: [4, 8, 12],
                itemsPerPage: 4,
                historyList:[],
                page: 1,
                pageSize: 4,
                listCount:0,
                list:[],
                oReviews:[],
                search: '',
                dflag:false,
                sortBy: 'date',
                sortDesc: true,
                showBtn : false,
                showLogin : true,
                show:false,
                no_results_text: ""
            }
        },
        filters:{
            comma(val){
            return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        methods:{
            fnInfo(item){
                this.$router.push({name:'reviewinfo_page', params:{item:item, title:item.title}})
            },
            nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
      sort(){
        this.sortDesc = !this.sortDesc
      },
      moveToWrite(){
                this.$router.push({name:'review_select'})
            },
      
        },
        mounted() {
            this.listCount = this.list.reverse().length
            this.init()
        },
        computed:{
          numberOfPages () {
        return Math.ceil(this.list.length / this.itemsPerPage)
      },
            
        },
        created(){
          this.list = this.oReviews
          const email = this.$store.getters.fnGetUser.email
          this.showBtn = email ? true : false
          this.showLogin = email ? false : true
          const value = this.$route.params.value
          this.list = this.oReviews.filter((item)=>item.name == value)
          this.title = value
          if(this.list.length == 0){
                this.show = true
            }
        },
    }
  </script>
  
  <style lang="scss" scoped>
  .py-2 {
  transition: all 0.4s;
  &:hover {
    text-decoration: underline;
    .pointer {
      transition: all 0.4s;
      transform: scale(1.15);
  }
  }
  }
  </style>