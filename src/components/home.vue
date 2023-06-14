<template>
  <v-container style="max-width: 1920px;margin-top: -10px;padding: 0;">
        <v-carousel ref="myCarousel" :touchless="true" interval="3000" :cycle="true" >
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
        <template>
  <v-container>
    <v-row>
            <v-col cols="12" class="text-center my-5">
                <h2>🏆 인기 사진 TOP 10 🏆</h2>
            </v-col>
        </v-row>
        <swiper ref="filterSwiper" :options="swiperOption" role="tablist">
    <swiper-slide role="tab"><v-img class="img1" style="width: 100%;height: 100%;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content2%2Fimg1.jpg?alt=media&token=35e17181-5060-4606-b0df-74044409e663">
    </v-img>bodere님</swiper-slide>
    <swiper-slide role="tab"><v-img class="img1" style="width: 100%;height: 100%;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content2%2Fimg2.jpg?alt=media&token=51e5a1d4-6425-4ac7-b667-06865d8c18ea"></v-img></swiper-slide>
    <swiper-slide role="tab"><v-img class="img1" style="width: 100%;height: 100%;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content2%2Fimg1.jpg?alt=media&token=35e17181-5060-4606-b0df-74044409e663"></v-img></swiper-slide>
    <swiper-slide role="tab"><v-img class="img1" style="width: 100%;height: 100%;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content2%2Fimg3.jpg?alt=media&token=8bae8811-c0a7-4b52-a1d1-d12109788dd6"></v-img></swiper-slide>
    <swiper-slide role="tab"><v-img class="img1" style="width: 100%;height: 100%;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content2%2Fimg5.jpg?alt=media&token=6765ca2e-5d30-4586-ac1e-c0d77dd855ef"></v-img></swiper-slide>
    <swiper-slide role="tab"><v-img class="img1" style="width: 100%;height: 100%;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content2%2Fimg6.jpg?alt=media&token=59bb495a-8235-4d0c-a33e-4c6df61776b2"></v-img></swiper-slide>
    <swiper-slide role="tab"><v-img class="img1" style="width: 100%;height: 100%;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content2%2Fimg7.jpg?alt=media&token=1c073b5a-0587-4a6e-a1ad-f6eecc59f894"></v-img></swiper-slide>
    <swiper-slide role="tab"><v-img class="img1" style="width: 100%;height: 100%;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content2%2Fimg8.jpg?alt=media&token=859237e9-4568-49a0-89db-f38f17312ac0"></v-img></swiper-slide>
    <swiper-slide role="tab"><v-img class="img1" style="width: 100%;height: 100%;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content2%2Fimg9.jpg?alt=media&token=4697d0e2-68d9-4f5c-bf53-95a560317368"></v-img></swiper-slide>
    <swiper-slide role="tab"><v-img class="img1" style="width: 100%;height: 100%;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content2%2Fimg10.jpg?alt=media&token=0a43a9e8-e2cf-4df1-9897-a3741fd74238"></v-img></swiper-slide>
  </swiper>
  </v-container>
</template>
        <template>
  <v-container>
    <v-row>
            <v-col cols="12" class="text-center my-5" data-aos="fade" data-aos-duration="800">
                <h2>집 꾸미는 재미가 쏠쏠 🧂</h2>
            </v-col>
        </v-row>
      <v-layout wrap justify-center>
        <v-flex xs5 class="mr-5 mb-5" 
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content1%2Fimg1.jpg?alt=media&token=bc4a5958-fdb6-4f9c-89ab-a196e1de7d14" min-height="200" max-height="350" cover class="img darken-4 hover ? 'zoom' : ''"></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:16px;color:deepskyblue">집에서도 피크닉 가능!</v-card-title>
            <v-card-subtitle style="text-align:center">넓은 거실과 테라스가 있는 집</v-card-subtitle>
          </v-card>
        </v-flex>

        <v-flex xs5 class="mb-5"
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content1%2Fimg2.jpg?alt=media&token=ae4802a3-1e9e-48bb-9e7c-011fd5a671b7" min-height="200" max-height="350" cover class="img darken-4"></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:15px;color:deepskyblue">아이와 함께</v-card-title>
            <v-card-subtitle style="text-align:center">손뜨개 작가의 따뜻한 감성이 가득한 집</v-card-subtitle>
          </v-card>
        </v-flex>

        <v-flex xs5 class="mr-5 mb-5"
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content1%2Fimg3.jpg?alt=media&token=6419d210-b3c6-48ea-816e-5abcbd2dc9de" min-height="200" max-height="350" class="img darken-4" cover></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:15px;color:deepskyblue">두터운면과 예리한 선</v-card-title>
            <v-card-subtitle style="text-align:center">공존하는 자연스러운 신혼집</v-card-subtitle>
          </v-card>
        </v-flex>

        <v-flex xs5 class="mb-5"
        data-aos="fade-left"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content1%2Fimg4.jpg?alt=media&token=944d7292-132f-4fb5-8f6c-6dbdab220875" min-height="200" max-height="350" cover class="img darken-4"></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:15px;color:deepskyblue">우드&화이트로</v-card-title>
            <v-card-subtitle style="text-align:center">완성한,햇살 가득히 품은 주택</v-card-subtitle>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>
<template>
  <v-container>
    <v-row>
            <v-col cols="12" class="text-center my-5" data-aos="fade" data-aos-duration="800">
                <h2>🥇 이번주 인기 랭킹 top 4 🥇</h2>
            </v-col>
        </v-row>
      <v-layout wrap justify-center>
        <v-flex xs5 class="mr-5 mb-5" 
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Ftop4%2Ftop4-1.jpg?alt=media&token=ac065d77-a0d6-412a-9da7-14f16277d0a9" min-height="200" max-height="350" cover class="img darken-4 hover ? 'zoom' : ''"></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:16px;color:deepskyblue">몇 번을 사도 다시 살</v-card-title>
            <v-card-subtitle style="text-align:center">만족도💯 내돈내산 살림잇템8</v-card-subtitle>
          </v-card>
        </v-flex>

        <v-flex xs5 class="mb-5" 
        data-aos="fade-left"
        data-aos-anchor-placement="top-center"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Ftop4%2Ftop4-2.jpg?alt=media&token=5e3a1f89-7798-4006-b718-4284d950d344" min-height="200" max-height="350" cover class="img darken-4"></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:15px;color:deepskyblue">주말에만 내려가요!</v-card-title>
            <v-card-subtitle style="text-align:center">진짜 원하는 곳에 살기 위해 시골집 마련한 후기</v-card-subtitle>
          </v-card>
        </v-flex>

        <v-flex xs5 class="mr-5 mb-5" 
        data-aos="fade-right"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Ftop4%2Ftop4-3.jpg?alt=media&token=60422c09-71c7-4e2a-9ff6-3fb15f74a03a" min-height="200" max-height="350" class="img darken-4" cover></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:15px;color:deepskyblue">샐러드 씻지 마세요!</v-card-title>
            <v-card-subtitle style="text-align:center">자취생 필수팁! 채소 3주 보관법!</v-card-subtitle>
          </v-card>
        </v-flex>

        <v-flex xs5 class="mb-5" data-aos="fade-left"
     data-aos-anchor-placement="top-center"
    data-aos-offset="-200"
    data-aos-delay="50"
    data-aos-duration="400"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Ftop4%2Ftop4-4.jpg?alt=media&token=3e99a5f1-47de-4ff2-b9d3-74ef37f26ff2" min-height="200" max-height="350" cover class="img darken-4"></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:15px;color:deepskyblue">예쁜데 실용적이기까지</v-card-title>
            <v-card-subtitle style="text-align:center">5만원 내외 애인 선물 추천8</v-card-subtitle>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>
<template>
  <v-container>
    <v-row>
            <v-col cols="12" class="text-center my-5" data-aos="fade" data-aos-duration="800">
                <h2>아무도 알려주지 않은 🔥 실전 꿀팁!</h2>
            </v-col>
        </v-row>
      <v-layout wrap justify-center data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
    data-aos-offset="100"
    data-aos-delay="50"
    data-aos-duration="400"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false">
        <v-flex xs5 class="mb-5 mr-5">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content3%2Fimg4.gif?alt=media&token=cf70c1ab-2836-48da-9d74-be91d5ef62ec" min-height="200" max-height="350" cover class="img darken-4"></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:15px;color:deepskyblue">다이소 네트망으로👀</v-card-title>
            <v-card-subtitle style="text-align:center">펜트리 정리함 만드는 법</v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex xs5 class="mb-5">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content3%2Fimg2.gif?alt=media&token=7d572b8d-b566-408f-80d9-b183ccc48751" min-height="200" max-height="350" cover class="img darken-4"></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:15px;color:deepskyblue">더워지기 전에 필수!</v-card-title>
            <v-card-subtitle style="text-align:center">행주 제대로 삶는 법</v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex xs5 class="mr-5">
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content3%2Fimg1.jpg?alt=media&token=062729a1-9320-4932-94d8-bb250ed4b67f" min-height="200" max-height="350" cover class="img darken-4 hover ? 'zoom' : ''"></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:16px;color:deepskyblue">변형 없이 깨끗하게!</v-card-title>
            <v-card-subtitle style="text-align:center">캡모자 세탁 간단 노하우</v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex xs5>
          <v-card>
            <div class="imgwrap">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fhome_content3%2Fimg3.jpg?alt=media&token=18f452e4-0e04-4ee7-8bf4-4a9a8350d08c" min-height="200" max-height="350" class="img darken-4" cover></v-img>
          </div>
            <v-card-title class="justify-center" style="font-size:15px;color:deepskyblue">아파트 사는 사람은</v-card-title>
            <v-card-subtitle style="text-align:center">다 확인해야 할 미세먼지 환기법</v-card-subtitle>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>
  <v-btn @click="moveTo"><v-icon>mdi-home</v-icon></v-btn>
      </v-container>
  </template>
  
  
  
  <script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
  export default{
    components: {
      swiper,
    swiperSlide
  },
    data() {
      const _vm = this
        return {
          move: [],
          drag: false,
          touch: false,
          items: [
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fslide1.jpg?alt=media&token=238129d8-4fd2-4b1a-8630-6cb4bb0e4649",
              to: ""
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fslide2.jpg?alt=media&token=59160152-8532-424b-be2f-a5148387ecc5"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fslide3.jpg?alt=media&token=9cbb4ab7-b68a-4d50-bcee-09903e831e77"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fslide4.png?alt=media&token=e6b28ce5-78e6-4835-b418-7731f9deef20"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fslide5.png?alt=media&token=d859bd0f-647e-4f7f-a1e4-c53f89f43418"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fslide6.jpg?alt=media&token=bf986951-73af-4e8b-b3e7-dbd7db70b675"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fslide7.jpg?alt=media&token=6c047342-430e-414d-9990-1e4859efb02c"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fslide8.png?alt=media&token=7b5a32dd-b012-4532-936d-733690c8348b"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fslide9.png?alt=media&token=d986bb5a-17aa-4393-afce-6e6ee68181c9"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fslide10.png?alt=media&token=77a17dbb-3f27-4acf-939a-f9a56316611c"
            }
          ],
           swiperOption: {
        slidesPerView: '6',
        spaceBetween: 6,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        freeMode: true,
        centerInsufficientSlides: true,
        // slideToClickedSlide : true, 
        // centeredSlides : true,
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
        breakpoints : { 
          1024 : {
        slidesPerView : 2,
        },
          768 : {
        slidesPerView : 1,
        },
      },
      }
    
        };
      },
      methods: {
        moveTo(){
          window.scrollTo({top:10, behavior:'smooth'})
        },
        logic(e) {
          const currentMove = this.touch ? e.touches[0].clientX : e.clientX;
          if (this.move.length === 0) {
            this.move.push(currentMove);
          }
          if (this.move[this.move.length - 1] - currentMove < -500) {
            this.$refs.myCarousel.$el
              .querySelector(".v-window__prev")
              .querySelector(".v-btn")
              .click();
            this.drag = false;
            this.touch = false;
          }
          if (this.move[this.move.length - 1] - currentMove > 500) {
            this.$refs.myCarousel.$el
              .querySelector(".v-window__next")
              .querySelector(".v-btn")
              .click();
            this.drag = false;
            this.touch = false;
          }
        },
        swiperInit: function () {
       this.swiper.allowTouchMove = !this.isOverview
       this.activeTab()
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
      mounted() {
        this.swiperInit()
        // For touch devices
        this.$refs.myCarousel.$el.addEventListener("touchmove", (e) => {
          this.drag = false;
          this.touch = true;
          this.logic(e);
        });
        window.addEventListener("touchend", (e) => {
          this.move = [];
        });
  
        // For non-touch devices
        this.$refs.myCarousel.$el.addEventListener("mousedown", (e) => {
          this.drag = true;
          this.touch = false;
          this.logic(e);
        });
        this.$refs.myCarousel.$el.addEventListener("mousemove", (e) => {
          this.drag && this.logic(e);
        });
        window.addEventListener("mouseup", (e) => {
          this.drag = false;
          this.touch = false;
          this.move = [];
        });
      },
      computed: {
    swiper: function () {
      return this.$refs.filterSwiper.swiper
    },
    isOverview: function () {
      return window.innerWidth >= this.swiper.virtualSize
    }
  },
  }
  </script>

<style>
   .v-carousel__controls{
       background: none !important
   }
   .v-carousel__controls__item{
      color: skyblue !important
   }
   .img {
    transition: all 0.4s;
   }
   .img:hover {
    transform: scale(1.2);
   }
   .imgwrap {
    overflow: hidden;
    cursor: pointer;
   }
</style>
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
      overflow: hidden;
      width: auto;
      height: 400px;
      min-width: 56px;
      padding: 0px 2px;
      font-size: 14px;
      line-height: 36px;
      text-align: center;
      color: #000;
      border: 0;
      border-radius: 18px;
      background: #f3f4f7;
      appearance: none;
      cursor: pointer;
      transition: all 0.4s;
      opacity: 0.8;
      &[aria-selected="true"] {
        color: #fff;
        opacity:1;
      }
      .img1:hover {
        transition: all 0.4s;
          transform: scale(1.1);
      }
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>