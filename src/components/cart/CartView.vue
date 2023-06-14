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
                        <p style="font-size:22px;font-weight: bold;padding-bottom: 10px;">{{ itemPic.title }}</p>
                        <p>선택 옵션 : {{ itemPic.selectOption }}</p>
                        <p>컬러 : {{ itemPic.selectColor }}</p>
                        <p>받으시는분 이름 : {{ itemPic.orderName }}</p>
                        <p>받으시는분 주소 : {{ itemPic.orderAddress }}</p>
                        <p>받으시는분 연락처 : {{ itemPic.orderPhone }}</p>
                        <p>주문 수량 : <strong style="font-size: 22px;">{{ count }}</strong>개 
                        <v-btn v-on:click="countDown">-</v-btn>
                        <v-btn v-on:click="countUp">+</v-btn>
                        <span v-if="!show" style="color: red;font-weight: normal;font-size: 12px;margin-left: 15px;">{{ none }}</span>
                        </p>
                        <p style="font-size:24px;line-height:3.0em"><strong style="font-size:32px">{{ totalPrice | comma }}</strong>원</p>
                        <v-col cols="12" class="text-center mt-3">
                        <v-btn outlined color="#00B0FF" dark @click="fnDeleteItem">장바구니에서 삭제하기</v-btn>
                        <v-btn v-if="show" color="#00B0FF" dark @click="onSubmitForm" style="margin-left: 5px;">바로 주문하기</v-btn>
                        </v-col>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { oCartDB, oOrderDB } from '@/assets/firebase'
    import swal from 'sweetalert'
    export default {
        name:'infoPage',
        firebase:{ oCarts : oCartDB},
        data() {
            return {
               oCarts: [],
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
               title:'',
               imageData:'',
               count:1,
               total:0,
               show:true,
               none:"",
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
            this.itemPic = this.oCarts.find( item => item.idnum === idnum )
            this.total = this.itemPic.total
            this.count = this.itemPic.count
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
                        'selectOption':self.itemPic.selectOption,
                        'selectColor':self.itemPic.selectColor,
                        'orderAddress':self.itemPic.orderAddress,
                        'orderName':self.itemPic.orderName,
                        'orderPhone':self.itemPic.orderPhone,
                        'totalPrice':self.total,
                        'orderCount':self.count,
                        'date':dateString,
                        'status':self.status,
                        'userEmail':self.$store.getters.fnGetUser.email
                    }).then(swal('주문이 완료되었습니다!',"",'success'))
                    .then(oCartDB.child(this.itemPic['.key']).remove())
                    .then(self.$router.push('/'))
            },
            fnDeleteItem(){
                oCartDB.child(this.itemPic['.key']).remove()
                this.$router.push('/cart')
                .then(swal('장바구니에서 삭제되었습니다!',"",'success'))
                .then(self.$router.push('/'))
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

</style>