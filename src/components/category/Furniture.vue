<template>
  
  <v-container class="pd-0" style="padding: 0;max-width: 1920px;margin-top: 100px;">
        <v-row>
            <v-col cols="12" class="text-center hidden-sm-and-down" style="margin:-50px 0 50px 0">
                <h3>가구</h3>
            </v-col>
        </v-row>
        <v-carousel ref="myCarousel" :touchless="true" interval="3000" :cycle="true" style="max-width: 1920px;margin: 0 auto;" class="hidden-sm-and-down" >
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
        <template>
      <v-container class="hidden-md-and-up" style="height:350px;margin-top:-200px;overflow: hidden;padding: 0;" >
        <div>
          <v-carousel ref="myCarousel" :touchless="true" interval="3000" :cycle="true" style="max-width: 1700px;margin: 0 auto;" >
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" contain></v-carousel-item>
        </v-carousel>
        </div>
      </v-container>
    </template>
        <template>
  <v-container style="width:80%">
    <v-row>
            <v-col cols="12" class="text-center my-5">
            </v-col>
        </v-row>
        <div class="hidden-md-and-down">
          <v-img style="max-width: 650px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu1.png?alt=media&token=72ff2797-f6cb-4049-9616-36fe644074e9"></v-img>
          <div class="d-flex flex-row mb-6 justify-center" >
          <v-img style="width: 310px;" contain src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu1_1.png?alt=media&token=cd28d0b8-fa9c-42a6-a6f6-4757c98ba987"></v-img>
          <v-img style="width: 310px;" contain src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu1_2.png?alt=media&token=26fa346c-815d-4da6-aaec-e51cf60386de"></v-img>
          <v-img style="width: 310px;" contain src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu1_3.png?alt=media&token=16e12eb2-9c6e-40f7-965d-d933a4fe95c8"></v-img>
      </div>
    </div>
    <div class="hidden-lg-and-up" style="margin-top: -60px;">
      <v-img style="max-width: 650px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu1.png?alt=media&token=72ff2797-f6cb-4049-9616-36fe644074e9"></v-img>
      <div class="d-flex flex-row mb-6 justify-center">
          <v-img style="width: 170px;"  contain src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu1_5.png?alt=media&token=df6df37b-f93d-4d37-baac-589832ca3c37"></v-img>
          <v-img style="width: 170px;" contain src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu1_6.png?alt=media&token=fcfe8051-ed6f-4a9d-8fc2-0ac9cc70131f"></v-img>
          <v-img style="width: 170px;" contain src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu1_4.png?alt=media&token=239b54bf-3209-4f5e-aeb0-dbfed28f7b4d"></v-img>
        </div>
      </div>
      <div  class="hidden-md-and-down">
      <v-img style="max-width: 650px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu2_1.png?alt=media&token=82397e82-546a-419b-9f34-246d41df4722"></v-img>
        <div class="d-flex justify-center">
          <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu2_2.png?alt=media&token=a58b56c7-6a51-4ae8-acbe-d8b2c97e9019"></v-img>
        </div>
      </div>
      <div class="hidden-lg-and-up" style="margin-top: -40px;">
      <v-img style="max-width: 650px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu2_1.png?alt=media&token=82397e82-546a-419b-9f34-246d41df4722"></v-img>
        <div class="d-flex justify-center">
          <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu2_3.png?alt=media&token=75e01946-03bf-494c-b602-55fe9567eba3"></v-img>
        </div>
      </div>
  </v-container>
</template>
<template>
  <v-container style="width: 80%;">
    <v-row>
            <v-col cols="12" class="text-center my-5">
            </v-col>
        </v-row>
        <div class="hidden-md-and-down">
          <v-img style="max-width: 650px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu3_1.png?alt=media&token=d5f55710-2ab3-4a33-89d1-71c273423bba"></v-img>
        <div class="d-flex flex-row mb-6 justify-center">
          <v-img style="width: 400px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu3_2.jpg?alt=media&token=f9e10c57-cc07-4a1f-b8e3-ff88761785db"></v-img>
          <v-img style="width: 400px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu3_3.jpg?alt=media&token=e7013b1f-7d21-41a1-8014-81ed889b5786"></v-img>
          <v-img style="width: 400px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu3_4.jpg?alt=media&token=94254d43-1e3d-4b90-9cd1-b7ace8dc71d7"></v-img>
        </div>
        <div class="d-flex flex-row mb-6 justify-center">
          <v-img style="width: 400px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu3_5.jpg?alt=media&token=38e656f2-92d8-4e81-854f-a651adfc2e9d"></v-img>
          <v-img style="width: 400px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu3_6.jpg?alt=media&token=81b20801-54ae-4025-a735-2ca3e56093d5"></v-img>
          <v-img style="width: 400px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu3_7.jpg?alt=media&token=1c6a9c55-e7f4-4161-b778-918074239096"></v-img>
        </div>
      </div>
      <div class="hidden-lg-and-up" style="margin-top: -120px;">
          <v-img style="max-width: 650px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu3_1.png?alt=media&token=d5f55710-2ab3-4a33-89d1-71c273423bba"></v-img>
        <div class="d-flex flex-row mb-6 justify-center">
          <v-img style="width: 170px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_6.jpg?alt=media&token=47861b4f-2d6f-4a5a-9f79-fbebc4b85e30"></v-img>
          <v-img style="width: 170px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_7.jpg?alt=media&token=129b713b-0710-44df-afdc-a4d596c1c538"></v-img>
          <v-img style="width: 170px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_8.jpg?alt=media&token=c1e215e5-9d67-4cfe-8530-6a5b1d302c3c"></v-img>
        </div>
        <div class="d-flex flex-row mb-6 justify-center">
          <v-img style="width: 170px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_9.jpg?alt=media&token=611e1a1a-6f01-463f-b188-28eaee9d7a67"></v-img>
          <v-img style="width: 170px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_10.jpg?alt=media&token=73c73d88-d0d9-4ee6-97b3-3ca04692b002"></v-img>
          <v-img style="width: 170px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_11.jpg?alt=media&token=8bf93488-6ffe-4a5b-a6de-55bdefb0beb5"></v-img>
        </div>
      </div>
      <div class="hidden-md-and-down">
        <v-img style="max-width: 650px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_1.png?alt=media&token=a9c364ed-7f33-414e-bfce-f6c66df2b134"></v-img>
        <div class="d-flex flex-row mb-6 justify-center">
          <v-img style="width: 230px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_2.png?alt=media&token=b337de58-3f97-4933-9558-47047f02fe69"></v-img>
          <v-img style="width: 230px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_3.png?alt=media&token=f297afc8-daa8-461b-8a2f-5a2a1e60889a"></v-img>
          <v-img style="width: 230px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_4.png?alt=media&token=d03c949b-f41f-4771-9e9d-63ecde0ef535"></v-img>
          <v-img style="width: 230px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_5.png?alt=media&token=e46d74bd-525e-4005-a0a7-20cba6bb6226"></v-img>
        </div>
      </div>
      <div class="hidden-lg-and-up">
        <v-img style="max-width: 650px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_1.png?alt=media&token=a9c364ed-7f33-414e-bfce-f6c66df2b134"></v-img>
        <div class="d-flex flex-row mb-6 justify-center">
          <v-img style="width: 130px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_12.png?alt=media&token=39f2d44a-4f81-4c10-af48-63cf74c38b65"></v-img>
          <v-img style="width: 130px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_13.png?alt=media&token=4e29940f-9c7a-42ca-bd0c-c1ffa8b7dcf0"></v-img>
          <v-img style="width: 130px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_14.png?alt=media&token=52c4fee4-6a0d-4794-a971-188bbb202c8c"></v-img>
          <v-img style="width: 130px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fmenu4_15.png?alt=media&token=f21c950e-54ab-492e-8762-554627eb6b12"></v-img>
        </div>
      </div>
  </v-container>
</template>
<template>
  <v-container fluid style="margin: 0;padding: 0;">
    <v-img style="max-width: 650px;" src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2F168206046081522213.png?alt=media&token=dba318aa-8cd3-4fc3-ad81-3e3428669c57"></v-img>
    <v-row v-if="show">
          <v-col cols="12" align="center">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2FaddItems.png?alt=media&token=47295765-1233-4d4b-b7c3-69de42538c85" contain width="200px" height="160px" class="mb-5"></v-img>
            <h3 style="color: #868686;padding: 50px 0;text-align: center;">{{ none }}</h3>
          </v-col>
        </v-row>
    <v-data-iterator :items="list" :items-per-page.sync="itemsPerPage" :page.sync="page" :search="search" :sort-by="sortBy"
    :sort-desc="sortDesc" hide-default-footer :no-data-text="no_results_text">
      <template v-slot:default="props">
        <v-row class="mt-1" align="center">
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
              <v-btn style="border: none;height: 35px;font-size: 12px;" @click="sort" pressed :value="`rvCount`" outlined dark color="#000000">인기순</v-btn>
              <v-btn style="border: none;height: 35px;font-size: 12px;" @click="sort" depressed :value="`price`" outlined dark color="#000000">가격순</v-btn>
            </v-btn-toggle>
            <span style="color:#464646;font-size:12px;margin:0 20px">전체 {{ list.length }} 개</span>
          </v-col>
          <!-- <v-select style="width: 100px;height: 50px;" v-model="sortBy" solo-inverted hide-details :items="keys" prepend-inner-icon="mdi-magnify" label="정렬"></v-select> -->
        </v-row>
        <v-row>
          <v-col v-for="item in props.items" :key="item.title" cols="12" sm="6" md="4" lg="3" style="display: flex;">
              <v-card class="py-2 px-2" height="450px" flat @click="fnInfo(item)" style="cursor: pointer;">
          <div style="overflow: hidden;border-radius: 10px;"><v-img :src="item.url" height="300px" class="pointer"></v-img></div>
          <div style="height: 85px;padding: 10px 0;" class="d-flex flex-column mb-6">
            <p class="body-1" style="color: #464646; margin: 0;padding: 0;"><strong style="color:#868686;font-size: 12px;" >{{ item.brand  }}</strong></p>
            <span class="body-1"><strong>{{ item.title  }}</strong></span>
          </div>
          <span class="body-3" style="font-size:12px;border-radius: 3px;background: #81D4FA;padding: 5px;color: #fff;">리뷰 {{ item.rvCount  }}개</span>
          <p class="body-1" style="color: #464646; margin: 5px 0 0 0;padding-bottom: 50px;">{{ item.price | comma }}원</p>
      </v-card>
          </v-col>
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
      </v-container>
  </template>
  
  
  
  <script>
import { oItemDB } from '@/assets/firebase'

export default {
  firebase:{ oItems : oItemDB },
    data() {
        return {
          itemsPerPageArray: [4, 8, 12],
              itemsPerPage: 8,
              historyList:[],
              page: 1,
              pageSize: 8,
              listCount:0,
              list:[],
              oItems:[],
              search: '',
              dflag:false,
              sortBy: 'rvCount',
              sortDesc: true,
          drag: false,
          touch: false,
          items: [
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fimg1.jpg?alt=media&token=125c4fa3-0fb0-491b-b63a-91ee711a02f7",
              to: ""
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fimg2.jpg?alt=media&token=20a76879-9253-4fd1-8937-068d8bb47343"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fimg3.jpg?alt=media&token=870bb493-d6ed-4c88-a349-581d7f4db266"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fimg4.jpg?alt=media&token=c4862ea8-5923-44b6-94d3-b0d114305d37"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fimg5.jpg?alt=media&token=04fd3bdd-78be-4d89-b232-65811f41b207"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fimg6.jpg?alt=media&token=af939b4c-8748-4068-a2a2-d566a02b3d85"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fimg7.jpg?alt=media&token=7bec89e4-5e0d-43ef-b9ec-05d2807fb1fd"
            },
            {
              src: "https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Fcategory_content1%2Ffurniture%2Fimg8.jpg?alt=media&token=df12d2c1-5e13-4bb2-b5c4-6a00be986572"
            },
          ],
          none:"",
          show:false,
          no_results_text: ""
    
        };
      },
      created(){
         this.list = this.oItems.filter((item)=>item.value.value == "furniture")
        },
      filters:{
            comma(val){
  	        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        mounted() {
            if(this.list.length == 0){
                this.none = "등록된 상품이 없습니다."
                this.show = true
            }
        },
        methods:{
          fnInfo(item){
              this.$router.push({name:'item_view', params:{item:item, title:item.title}})
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
    }
    
      },
      computed:{
        numberOfPages () {
      return Math.ceil(this.list.length / this.itemsPerPage)
    },
          
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
   .imgwrap {
    overflow: hidden;
    cursor: pointer;
   }
</style>
<style lang="scss" scoped>
.py-2 {
transition: all 0.4s;
&:hover {
  .mb-6 {
  text-decoration: underline;
}
  .pointer {
    transition: all 0.4s;
    transform: scale(1.15);
}
}
}
.v-card {
  div {
      p {
        transition: all 0.2s;
      }
      span {
        transition: all 0.2s;
      }
    }
    p {
      transition: all 0.2s;
    }
  &:hover {
    .pointer {
      transform: scale(1.1);
    }
  }
}
</style>