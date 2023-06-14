<template>
  <v-container fluid style="margin: 0;padding: 0;">
    
    <v-data-iterator :items="list" :items-per-page.sync="itemsPerPage" :page.sync="page" :search="search" :sort-by="sortBy" :sort-desc="sortDesc" hide-default-footer :no-data-text="no_results_text">
      <template v-slot:header>
        <v-toolbar class="mb-2 d-flex justify-center" color="#ffffff" dark flat>
          <v-toolbar-title class="headline" style="flex: 1;color: #000;">생활용품</v-toolbar-title>
        </v-toolbar>
        <v-row class="d-flex flex-row mb-6 justify-center" style="width: 70%;margin: 0 auto;">
</v-row>
        <v-row v-if="show">
          <v-col cols="12" align="center">
            <v-img src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2FaddItems.png?alt=media&token=47295765-1233-4d4b-b7c3-69de42538c85" contain width="200px" height="160px" class="mb-5"></v-img>
            <h3 style="color: #868686;padding: 50px 0;text-align: center;">{{ none }}</h3>
          </v-col>
        </v-row>
</template>
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
              keys: [
                'title',
                'price',
                'rvCount',
              ],
              none:"",
              show:false,
              no_results_text: ""
          }
      },
      created(){
        this.list = this.oItems.filter((item)=>item.value.value == "life")
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
</style>