<template>
    <v-container class="my-10">
        <v-row>
            <v-col cols="12">
                <v-card-text>
                    </v-card-text>
                <div class="d-flex" style="flex-direction: column;align-items: center;">
                    <v-card class="py-3 px-3 text-center" flat>
                        <v-carousel ref="myCarousel" :touchless="true" interval="3000" :cycle="true" style="width: 500px;border-radius: 20px;" >
                        <v-carousel-item :src="itemPic.url" contain></v-carousel-item>
                        <v-carousel-item :src="itemPic.suburl" contain></v-carousel-item>
                        <v-carousel-item :src="itemPic.suburl2" contain></v-carousel-item>
                        <v-carousel-item :src="itemPic.suburl3" contain></v-carousel-item>
                        <v-carousel-item :src="itemPic.suburl4" contain></v-carousel-item>
                        </v-carousel>
                    </v-card>
                    <v-card class="d-flex flex-column" flat>
                        <p style="font-size:14px;color: #656e75;">{{ itemPic.brand }}</p>
                        <p style="font-size:22px;font-weight: bold;">{{ itemPic.title }}</p>
                        <v-btn @click="selectReview()" style="font-size:12px;line-height: 0;font-weight: bold;width: 60px;border-radius: 10px;" color="#81D4FA" dark>리뷰 {{ rvCount.length }}개</v-btn>
                        <p style="font-size:24px;line-height:3.0em;color: #464646;"><span style="font-size:32px">{{ itemPic.price | comma }}</span>원</p>
                        <v-col cols="12" class="text-center mt-3">
                        <v-btn v-if="!showLogin" color="#00B0FF" dark @click="sheet = !sheet">주문하기</v-btn>
                        <v-btn v-if="showLogin" color="#00B0FF" to="/login" dark>주문 하려면 로그인 하세요</v-btn>
                        </v-col>
                        <div class="text-center">
    <v-bottom-sheet v-model="sheet" scrollable class="text-center">
        <v-card>
            <v-card-title>
                <p><v-btn text color="red" @click="sheet = !sheet">닫기</v-btn></p>
                <p>{{ itemPic.title }}</p>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 650px;">
                <div class="py-3 d-flex flex-column" style="justify-content: center;align-items: center; margin-top: 50px;overflow: auto;">
            <v-select v-model="selectOption" style="width: 400px;margin: 0 auto;" :items="[ itemPic.option1, itemPic.option2, itemPic.option3, itemPic.option4, itemPic.option5 ]" label="상품의 옵션을 고르세요" :rules="[ v => !!v || '옵션을 선택해주세요!' ]">
                        <template v-slot:item="{ item, attrs, on }">
                        <v-list-item v-bind="attrs" v-on="on">
                        <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
                        </v-list-item>
                        </template>
                        </v-select>
                        <v-select style="width: 400px;margin: 0 auto;" v-model="selectColor" :items="[ itemPic.color1, itemPic.color2, itemPic.color3, itemPic.color4 ]" label="상품의 색상을 고르세요" :rules="[ v => !!v || '색상을 골라주세요!' ]">
                        <template v-slot:item="{ item, attrs, on }">
                        <v-list-item v-bind="attrs" v-on="on">
                        <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
                        </v-list-item>
                        </template>
                        </v-select>
                        <v-text-field name="Name" label="주문자명" type="name" v-model="orderName" required style="width: 400px;margin: 0 auto;" :rules="[ v => !!v || '주문자명을 입력해주세요!' ]"></v-text-field>
                        <v-text-field name="Address" label="배송받을 주소" type="address" v-model="orderAddress" required style="width: 400px;margin: 0 auto;" :rules="[ v => !!v || '배송받을 주소를 입력해주세요!' ]"></v-text-field>
                        <v-text-field name="Phone" label="연락처" type="phone" v-model="orderPhone" required style="width: 400px;margin: 0 auto;" :rules="[ v => !!v || '연락처를 입력해주세요!' ]"></v-text-field>
                        <p>주문 수량 : <strong style="font-size: 22px;">{{ count }}</strong>개</p>
                        <v-row class="pb-5">
                            <v-col>
                                <v-btn v-on:click="countDown" v-bind:disabled="count === 0">-</v-btn>
                                <v-btn v-on:click="countUp">+</v-btn>
                            </v-col>
                        </v-row>
                        <span v-if="!show" style="color: red;font-weight: normal;font-size: 12px;margin-left: 15px;">{{ none }}</span>
                        <p style="font-size:24px;line-height:3.0em"><strong style="font-size:24px">총 상품 가격 : {{ totalPrice | comma }}</strong>원</p>
                        <div class="text-center" v-if="!bIsWait">
                            <v-btn v-if="show" outlined color="#00B0FF" dark @click="addToCartList">장바구니에 담기</v-btn>
                            <v-btn v-if="show" class="mx-1" type="submit" color="#00B0FF" dark @click="onSubmitForm">상품 주문하기</v-btn>
                        </div>
                        <div class="text-center" v-else>
                            <v-progress-circular size="50" indeterminate color="grey"></v-progress-circular>
                        </div>
                    
        </div>
            </v-card-text>
        </v-card>
    </v-bottom-sheet>
  </div>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { oCartDB, oItemDB, oOrderDB, oItemsReviewDB } from '@/assets/firebase'
    import swal from 'sweetalert'
    export default {
        name:'infoPage',
        firebase:{ oItems : oItemDB, oReviews : oItemsReviewDB},
        data() {
            return {
               oItems: [],
               oReviews: [],
               itemPic : null,
               bIsWait:false,
               sheet: false,
               selectColor:'',
               selectOption:'',
               orderAddress:'',
               orderName:'',
               orderPhone:'',
               files:'',
               price:'',
               date:'',
               status:
                {name:'배송전(주문 취소 가능)',value:'before'},
               orderCount:1,
               title:'',
               imageData:'',
               rvCount:0,
               count:1,
               total:0,
               show:true,
               showLogin : true,
               dateString:'',
            }
        },
        filters:{
            comma(val){
  	        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        created(){
            const { idnum } = this.$route.params.item
            this.itemPic = this.oItems.find( item => item.idnum === idnum )
            this.rvCount = this.oReviews.filter((item)=>item.name == this.itemPic.title)
            console.log(this.rvCount.length)
            this.total = this.itemPic.price
            const abc = this.itemPic['.key']
                oItemDB.child(abc).update({
                    'rvCount':this.rvCount.length,
                    })
            const email = this.$store.getters.fnGetUser.email
            this.showLogin = email ? false : true
        },
        mounted() {
            if(this.totalPrice == 0){
                this.none = "주문 수량을 정해주세요 !"
            }
        },
        methods:{
            goBack(){
            this.$router.go(-1); [2]
        },
        onSubmitForm(){
            this.onUpload()
        },
        previewImage(){
        },
        onUpload(){
            var date = new Date();
            var year = date.getFullYear();
            var month = ('0' + (date.getMonth() + 1)).slice(-2);
            var day = ('0' + date.getDate()).slice(-2);
            var hours = ('0' + date.getHours()).slice(-2); 
            var minutes = ('0' + date.getMinutes()).slice(-2);
            var dateString = year + '년' + ' ' + month  + '월' + ' ' + day + '일' + ' ' + hours + '시' + ' ' + minutes + '분'
            this.$store.commit('fnSetNum')
                const self = this
                    oOrderDB.push({
                        'url':self.itemPic.url,
                        'idnum':self.$store.getters.fnGetNum,
                        'title':self.itemPic.title,
                        'selectOption':self.selectOption,
                        'selectColor':self.selectColor,
                        'orderAddress':self.orderAddress,
                        'orderName':self.orderName,
                        'orderPhone':self.orderPhone,
                        'orderCount':self.count,
                        'totalPrice':self.total,
                        'date':dateString,
                        'status':self.status,
                        'userEmail':self.$store.getters.fnGetUser.email
                    }).then(swal('주문이 완료되었습니다!',"",'success'))
                    .then(self.$router.push('/'))
            },
            addToCartList(){
                this.$store.commit('fnSetNum')
                oCartDB.push({
                        'url':this.itemPic.url,
                        'suburl':this.itemPic.suburl,
                        'suburl2':this.itemPic.suburl2,
                        'suburl3':this.itemPic.suburl3,
                        'suburl4':this.itemPic.suburl4,
                        'idnum':this.$store.getters.fnGetNum,
                        'title':this.itemPic.title,
                        'selectOption':this.selectOption,
                        'selectColor':this.selectColor,
                        'orderAddress':this.orderAddress,
                        'orderName':this.orderName,
                        'price':this.itemPic.price,
                        'total':this.total,
                        'count':this.count,
                        'orderPhone':this.orderPhone,
                        'userEmail':this.$store.getters.fnGetUser.email
                    }).then(swal('장바구니에 추가되었습니다!',"",'success'))
                    .then(this.$router.push('/'))
            },
            selectReview(){
      this.$router.push({name:'review_selectlist', params:{value:this.itemPic.title}})
    },
    countUp : function(){
                    this.count++
                    this.total += this.itemPic.price
                    if (this.count <= 0) {   
                        this.show = false
                        this.none = " 주문 수량을 수정해주세요 ! "
                    } else {
                        this.show = true
                        this.none = ""
                    }
            },
            countDown : function(){
                    this.count--
                    this.total -= this.itemPic.price
                    if (this.count <= 0) {   
                        this.show = false
                        this.none = " 주문 수량을 수정해주세요 ! "
                    }
            }
        },
        computed:{
            totalPrice(){
               this.total
                return this.total
            }
            
        },
    }
</script>

<style lang="scss" scoped>
.v-card__title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.v-card__text {
    overflow: auto;
}
</style>