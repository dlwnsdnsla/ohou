<template>
  <v-app>
  <v-app-bar app color="white">
    <v-toolbar-title class="headline" style="color: black; cursor: pointer;"><v-img @click="home()" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Flogin-logo.PNG?alt=media&token=677c4f24-dda4-48c1-afec-981aaa59dc2d"></v-img></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <div class="d-flex" style="position: fixed;left: 50%;transform: translateX(-50%);">
      <div class="hidden-xs-only">
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#464646" dark v-bind="attrs" v-on="on" text>
          쇼핑하기
          </v-btn>
        </template>
        <v-list style="padding:30px">
            <v-list-item @click="search()">
              <v-list-item-title><v-icon class="left">mdi-magnify</v-icon>상품 찾기</v-list-item-title>
            </v-list-item>
            <v-list-item @click="furniture()">
              <v-list-item-title  style="height:45px;line-height: 45px;"><v-icon class="left">mdi-sitemap-outline</v-icon>카테고리 별 상품 보기</v-list-item-title>
            </v-list-item>
            <v-list-item @click="review()">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-note-edit-outline</v-icon>리뷰<span>{{ reviewItemCount }}개</span></v-list-item-title>
            </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="hidden-xs-only">
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#464646" dark v-bind="attrs" v-on="on" text>
          마이페이지
          </v-btn>
        </template>
        <v-list style="padding:30px">
          <v-list-item v-if="!fnGetAuthStatus" style="padding: 100px 0 70px 0;">
            <v-list-item-title>
                  <v-img style="margin:0 auto" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2FaddItems.png?alt=media&token=47295765-1233-4d4b-b7c3-69de42538c85" contain width="160px" height="120px"></v-img>
                </v-list-item-title>
          </v-list-item>
          <v-list-item>
              <v-list-item-title style="color:#81D4FA;" v-if="fnGetAuthStatus" @click="loginstatus()" class="pointer">
                {{ fnGetUser.email }}{{ user }}
                <span style="color: #464646;background: none;margin:0;padding: 0;">님</span>
              </v-list-item-title>
              <v-list-item-title style="color:rgba(255, 0, 0, 0.575);" v-if="!fnGetAuthStatus">
                로그인이 필요합니다 ! 
              </v-list-item-title>
            </v-list-item>
            <v-list-item v-if="!fnGetAuthStatus">
              <v-list-item-title>
                  <v-btn color="#00B0FF" dark to="/login">회원가입/로그인하러가기</v-btn>
                </v-list-item-title>
            </v-list-item>
            <v-list-item v-if="fnGetAuthStatus" @click="fnDoLogout">
              <v-list-item-title>
                  <v-btn color="#00B0FF" dark>로그아웃</v-btn>
                </v-list-item-title>
            </v-list-item>
            <v-list-item @click="cart()">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-cart</v-icon>장바구니<span v-if="fnGetAuthStatus">{{ cartItemCount }}개</span></v-list-item-title>
            </v-list-item>
            <v-list-item @click="myOrder()" v-if="fnGetAuthStatus">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-store-check-outline</v-icon>내 주문 목록<span v-if="fnGetAuthStatus">{{ orderListCount }}개</span></v-list-item-title>
            </v-list-item>
            <v-list-item @click="completeList()" v-if="fnGetAuthStatus">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-store-check</v-icon>구매 완료된 상품<span v-if="fnGetAuthStatus">{{ completeCount }}개</span></v-list-item-title>
            </v-list-item>
            <v-list-item @click="reviewSelect()" v-if="fnGetAuthStatus">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-note-edit-outline</v-icon>리뷰 쓰러가기<span v-if="fnGetAuthStatus">{{ reviewWriteCount }}개</span></v-list-item-title>
            </v-list-item>
            <v-list-item @click="orderManage()" v-if="showAddCategory">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-basket-check-outline</v-icon>주문 관리(관리자)<span>{{ orderItemCount }}개</span></v-list-item-title>
            </v-list-item>
            <v-list-item @click="completeAdmin()" v-if="showAddCategory">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-store-check</v-icon>판매 완료(관리자)<span v-if="fnGetAuthStatus">{{ completeAdminCount }}개</span></v-list-item-title>
          </v-list-item>
            <v-list-item @click="itemsManage()" v-if="showAddCategory">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-text-search</v-icon>상품 관리(관리자)<span>{{ itemCount }}개</span></v-list-item-title>
            </v-list-item>
        </v-list>
      </v-menu>
    </div>
    </div>
      <v-toolbar-items>
        <v-btn text to="/" class="hidden-xs-only" color="#81D4FA"><v-icon left>mdi-home</v-icon>홈</v-btn>
        <!-- <v-btn class="hidden-xs-only" color="#81D4FA" text v-for="item in fnGetMenuItems" :key="item.icon" :to="item.to">
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title  }}
        </v-btn>
        <v-btn class="hidden-xs-only" text v-if="fnGetAuthStatus" @click="fnDoLogout" color="#81D4FA">
          <v-icon left>mdi-arrow-right-bold-box-outline</v-icon>로그아웃
        </v-btn> -->
      </v-toolbar-items>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" absolute right temporary style="position: fixed;padding: 0px 20px;">
      <v-list nav dense class="text-left">
        <v-list-item-group v-model="group" active-class=" text--accent-4">
          <v-img class="pointer mt-5 mb-5" style="margin: 0 auto;" @click="home()" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Flogo.PNG?alt=media&token=c8a45319-a28e-4911-95cf-2413acf75fb1" width="82px" height="38px"></v-img>
          <v-img v-if="!fnGetAuthStatus" style="padding: 100px 0 70px 0;margin:0 auto" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2FaddItems.png?alt=media&token=47295765-1233-4d4b-b7c3-69de42538c85" contain width="160px" height="120px"></v-img>
          <v-list-item>
            <v-list-item-title style="color:#81D4FA;" v-if="fnGetAuthStatus" @click="loginstatus()">
              {{ fnGetUser.email }}{{ user }}
              <span style="color: #464646;background: none;margin:0;padding: 0;">님</span>
            </v-list-item-title>
            <v-list-item-title style="color:rgba(255, 0, 0, 0.575);" v-if="!fnGetAuthStatus">
                로그인이 필요합니다 ! 
              </v-list-item-title>
          </v-list-item>
          <div class="mt-5 mb-5 d-flex" style="justify-content: left;padding-left: 8px;">
              <v-btn v-for="item in fnGetMenuItems" :to="item.to" class="text-center" color="#81D4FA" dark outlined>{{ item.title  }}</v-btn>
              <v-btn v-if="fnGetAuthStatus" @click="fnDoLogout" class="text-center" color="#81D4FA" dark outlined>로그아웃</v-btn>
          </div>
          <v-list-item @click="search()">
            <v-list-item-title><v-icon class="left">mdi-magnify</v-icon>상품 찾기</v-list-item-title>
          </v-list-item>
          <v-list-item @click="furniture()">
            <v-list-item-title  style="height:45px;line-height: 45px;"><v-icon class="left">mdi-sitemap-outline</v-icon>카테고리 별 상품 보기</v-list-item-title>
          </v-list-item>
          <v-list-item @click="cart()">
            <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-cart</v-icon>장바구니<span v-if="fnGetAuthStatus">{{ cartItemCount }}개</span></v-list-item-title>
          </v-list-item>
          <v-list-item @click="myOrder()" v-if="fnGetAuthStatus">
            <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-store-check-outline</v-icon>내 주문 목록<span v-if="fnGetAuthStatus">{{ orderListCount }}개</span></v-list-item-title>
          </v-list-item>
          <v-list-item @click="completeList()" v-if="fnGetAuthStatus">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-store-check</v-icon>구매 완료된 상품<span v-if="fnGetAuthStatus">{{ completeCount }}개</span></v-list-item-title>
          </v-list-item>
          <v-list-item @click="review()">
            <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-note-edit-outline</v-icon>리뷰<span v-if="fnGetAuthStatus">{{ reviewItemCount }}개</span></v-list-item-title>
          </v-list-item>
          <v-list-item @click="reviewSelect()" v-if="fnGetAuthStatus">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-note-edit-outline</v-icon>리뷰 쓰러가기<span v-if="fnGetAuthStatus">{{ reviewWriteCount }}개</span></v-list-item-title>
          </v-list-item>
          <v-list-item @click="orderManage()" v-if="showAddCategory">
            <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-basket-check-outline</v-icon>주문 관리(관리자)<span>{{ orderItemCount }}개</span></v-list-item-title>
          </v-list-item>
          <v-list-item @click="completeAdmin()" v-if="showAddCategory">
              <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-store-check</v-icon>판매 완료(관리자)<span v-if="fnGetAuthStatus">{{ completeAdminCount }}개</span></v-list-item-title>
          </v-list-item>
          <v-list-item @click="itemsManage()" v-if="showAddCategory">
            <v-list-item-title style="height:45px;line-height: 45px;"><v-icon class="left">mdi-text-search</v-icon>상품 관리(관리자)<span>{{ itemCount }}개</span></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-slide-y-transition mode="out-in">
      <router-view></router-view>
      </v-slide-y-transition>
    </v-main>
  <v-footer app color="#00B0FF"></v-footer>
</v-app>
 </template>
 
 <script>
 import { oItemDB, oCartDB, oOrderDB, oItemsReviewDB, oCompleteDB } from '@/assets/firebase'
 export default {
   name: 'App',
   firebase:{ oItems : oItemDB, oCarts : oCartDB, oOrders : oOrderDB, oReviews : oItemsReviewDB, oComplete : oCompleteDB },
   data () {
      return {
        showAddCategory: false,
        oCarts: [],
        oOrders: [],
        oPhotos: [],
        oItems: [],
        list:[],
        cartList:[],
        oReviews:[],
        show:false,
        drawer: false,
        group: null,
        user:"",
        reviewCount:[],
        oComplete:[]
      }
    },
    computed:{
      fnGetMenuItems(){
        if (!this.fnGetAuthStatus) {
          return [{
            title:'회원가입/로그인',
            icon:'mdi-lock-open-outline',
            to:'/login'
          }]
        }
      },
      fnGetAuthStatus(){

          return this.$store.getters.fnGetAuthStatus
      },
      fnGetUser(){
                let oUserInfo = this.$store.getters.fnGetUser
                return oUserInfo
      },
      reviewItemCount(){
                return this.oReviews.length
      },
      cartItemCount(){
        this.cartList = this.oCarts.filter((item)=>item.userEmail == this.$store.getters.fnGetUser.email)
                return this.cartList.length
      },
      orderItemCount(){
                return this.oOrders.length
      },
      itemCount(){
                return this.oItems.length
      },
      orderListCount(){
        this.list = this.oOrders.filter((item)=>item.userEmail == this.$store.getters.fnGetUser.email)
                return this.list.length
      },
      reviewWriteCount(){
        this.reviewCount = this.list.filter((item)=>item.status.value == "complete")
                return this.reviewCount.length
      },
      completeCount(){
        this.complete = this.oComplete.filter((item)=>item.userEmail == this.$store.getters.fnGetUser.email)
                return this.complete.length
      },
      completeAdminCount(){
                return this.oComplete.length
      },
    },
    methods:{
      fnDoLogout(){
        this.$store.dispatch('fnDoLogout')
      },
      furniture(){
      this.$router.push({name:'furniture'})
    },
    home(){
      this.$router.push({path:'/'})
    },
    search(){
      this.$router.push({name:'searchitems'})
    },
    cart(){
      this.$router.push({name:'cart'})
    },
    myOrder(){
      this.$router.push({name:'order_check'})
    },
    orderManage(){
      this.$router.push({name:'order_list'})
    },
    itemsManage(){
      this.$router.push({name:'itemlist'})
    },
    review(){
      this.$router.push({name:'review_list'})
    },
    reviewSelect(){
      this.$router.push({name:'review_select'})
    },
    completeList(){
      this.$router.push({name:'complete_list'})
    },
    completeAdmin(){
      this.$router.push({name:'complete_admin'})
    },
    loginstatus(){
      this.$router.push({name:'loginstatus'})
    },
    },
    created(){
            const user = this.$store.getters.fnGetUser.email
            this.showAddCategory = user === "admin@gmail.com" ? true : false
            this.show = user === "admin@gmail.com" ? true : false
            if(this.$store.getters.fnGetUser.email == "admin@gmail.com"){
              this.user = "(관리자)"
            } else {
              this.user = ""
            }
        },
    watch: {
      group () {
        this.drawer = false
      },
    },    
 }
 </script>
 
<style lang="scss" scoped>
.v-list-item {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    font-size:12px;
    border-radius: 3px;
    background: #81D4FA;
    padding: 2px 6px;
    color: #fff;
    margin-left: 5px;
  }
  .left {
    font-size: 18px;
    margin-right: 10px;
  }
}
</style>
