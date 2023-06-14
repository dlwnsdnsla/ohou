
<template>
  <v-container style="max-width: 1920px;margin-top: 50px;padding: 0;">
    <swiper ref="filterSwiper" :options="swiperOption" role="tablist">
    <swiper-slide role="tab"><span @click="furniture()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg1.png?alt=media&token=af98e137-abfa-4f8b-9d97-3fd1198f691c"></v-img>가구</span></swiper-slide>
    <swiper-slide role="tab"><span @click="fabric()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg2.png?alt=media&token=e5bd7c1b-4a63-4ec1-903d-e382ab14068d"></v-img>패브릭</span></swiper-slide>
    <swiper-slide role="tab"><span @click="digital()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg3.png?alt=media&token=e5f57c2e-56e7-44c9-8588-e59d25b8813e"></v-img>가전·디지털</span></swiper-slide>
    <swiper-slide role="tab"><span @click="kitchen()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg4.png?alt=media&token=963cd6f5-2e55-4f13-967c-df2cd6db1622"></v-img>주방용품</span></swiper-slide>
    <swiper-slide role="tab"><span @click="food()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg5.png?alt=media&token=419e8b9d-b2b5-4d24-9283-e8cdc310113f"></v-img>식품</span></swiper-slide>
    <swiper-slide role="tab"><span @click="deco()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg6.png?alt=media&token=9da6633c-e972-487f-bc41-ede35e5bf1da"></v-img>데코·식물</span></swiper-slide>
    <swiper-slide role="tab"><span @click="light()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg7.png?alt=media&token=5229b95f-3414-4247-95dc-d878ebd933a2"></v-img>조명</span></swiper-slide>
    <swiper-slide role="tab"><span @click="acceptance()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg8.png?alt=media&token=7f61cc31-c3b3-4e5f-845f-29c11a6eb87c"></v-img>수납·정리</span></swiper-slide>
    <swiper-slide role="tab"><span @click="life()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg9.png?alt=media&token=51b9789f-ab93-4254-b778-acba06968d72"></v-img>생활용품</span></swiper-slide>
    <swiper-slide role="tab"><span @click="necessity()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg10.png?alt=media&token=95ac7c81-84dd-4a8c-a6ae-9b5f7ff8c0bf"></v-img>생필품</span></swiper-slide>
    <swiper-slide role="tab"><span @click="kids()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg11.png?alt=media&token=3baa21e0-8c54-4711-9201-e1b6a1341126"></v-img>유아·아동</span></swiper-slide>
    <swiper-slide role="tab"><span @click="animal()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg12.png?alt=media&token=3ff34b9d-901f-4a68-960f-26fdb2361003"></v-img>반려동물</span></swiper-slide>
    <swiper-slide role="tab"><span @click="camping()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg13.png?alt=media&token=dbce39d4-8b1e-4462-801f-80a7d11c2c7a"></v-img>캠핑·레저</span></swiper-slide>
    <swiper-slide role="tab"><span @click="diy()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg14.png?alt=media&token=50918d5b-562d-4aa5-8810-01c6f18d4268"></v-img>공구·DIY</span></swiper-slide>
    <swiper-slide role="tab"><span @click="interior()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg15.png?alt=media&token=d673ce88-337f-4c5c-a0ec-128e83d2a6eb"></v-img>인테리어시공</span></swiper-slide>
    <swiper-slide role="tab"><span @click="rental()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg16.png?alt=media&token=60ff5768-af9d-4043-abe5-85493a2c57d2"></v-img>렌탈</span></swiper-slide>
    <swiper-slide role="tab"><span @click="groceries()"><v-img style="width: 72px;height: 72px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Fimg17.png?alt=media&token=469f9084-0cc5-4c92-b4b1-d596d54adee0"></v-img>장보기</span></swiper-slide>
  </swiper>
  <template>
  <v-container style="max-width: 1920px;padding: 0;margin-top: 50px;">
    <v-slide-y-transition mode="out-in">
    <router-view></router-view>
  </v-slide-y-transition>
  </v-container>
</template>
  </v-container>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'FilterSwiper',
  data () {
    const _vm = this
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 6,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        freeMode: true,
        centerInsufficientSlides: true,
        on: {
          click: function () {
            _vm.slideMoveTo()	
            _vm.activeTab()						
          },
          tap: function () {
            _vm.slideMoveTo()	
            _vm.activeTab()
          },
          resize: function () {
            this.allowTouchMove = !_vm.isOverview
          }
        },
        
      }
    }
  },
  
  methods: {
    swiperInit: function () {
       this.swiper.allowTouchMove = !this.isOverview
       this.activeTab()
    },
    furniture(){
      this.$router.push({name:'furniture', params:{value:'furniture'}})
    },
    fabric(){
      this.$router.push({name:'fabric', params:{value:'fabric'}})
    },
    digital(){
      this.$router.push({name:'digital', params:{value:'digital'}})
    },
    kitchen(){
      this.$router.push({name:'kitchen', params:{value:'kitchen'}})
    },
    food(){
      this.$router.push({name:'food', params:{value:'food'}})
    },
    deco(){
      this.$router.push({name:'deco', params:{value:'deco'}})
    },
    light(){
      this.$router.push({name:'light', params:{value:'light'}})
    },
    acceptance(){
      this.$router.push({name:'acceptance', params:{value:'acceptance'}})
    },
    life(){
      this.$router.push({name:'life', params:{value:'life'}})
    },
    necessity(){
      this.$router.push({name:'necessity', params:{value:'necessity'}})
    },
    kids(){
      this.$router.push({name:'kids', params:{value:'kids'}})
    },
    animal(){
      this.$router.push({name:'animal', params:{value:'animal'}})
    },
    camping(){
      this.$router.push({name:'camping', params:{value:'camping'}})
    },
    diy(){
      this.$router.push({name:'diy', params:{value:'diy'}})
    },
    interior(){
      this.$router.push({name:'interior', params:{value:'interior'}})
    },
    rental(){
      this.$router.push({name:'rental', params:{value:'rental'}})
    },
    groceries(){
      this.$router.push({name:'groceries', params:{value:'groceries'}})
    },

    activeTab: function (swiper) {
      swiper = swiper || this.swiper
      if (swiper.hasOwnProperty('clickedSlide') && !swiper.clickedSlide) return

      const slideSelector = `.${swiper.params.slideClass}`
      const selectedEl = swiper.clickedSlide || swiper.slides[swiper.params.initialSlide]
      const swiperArr = document.querySelectorAll(slideSelector)
      Array.from(swiperArr).forEach((el) => {
        el.setAttribute('aria-selected', 'false')
        selectedEl.setAttribute('aria-selected', 'true')
      })
    },
    slideMoveTo: function (swiper = this.swiper) {
      if (!swiper.clickedSlide) return

      const activeIndex = swiper.clickedIndex
      swiper.slideTo(activeIndex)
    }
  },
  computed: {
    swiper: function () {
      return this.$refs.filterSwiper.swiper
    },
    isOverview: function () {
      return window.innerWidth >= this.swiper.virtualSize
    }
  },
  mounted () {
    this.swiperInit()
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  padding: 0 20px;
  &:before,
  &:after {
    display: block;
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    z-index: 10;
    content: "";
  }
  &:before {
    left: 0;
    background: linear-gradient(90deg, #fff -20.19%, rgba(255, 255, 255, 0.8) 18.31%, rgba(255, 255, 255, 0) 75%);
  }
  &:after {
    right: 0;
    background: linear-gradient(270deg, #fff -20.19%, rgba(255, 255, 255, 0.8) 18.31%, rgba(255, 255, 255, 0) 75%);
  }
  .swiper-wrapper {
    .swiper-slide {
      width: auto;
      min-width: 56px;
      padding: 0px 2px;
      font-size: 14px;
      line-height: 36px;
      text-align: center;
      color: #000;
      border: 0;
      appearance: none;
      cursor: pointer;
      transition: all 0.4s;
      &[aria-selected="true"] {
        span {
          color: deepskyblue;
        }
      }
      &:hover {
      }
      .v-img {
        width: 72px;
        height: 72px;
      }
    }
  }
}
</style>