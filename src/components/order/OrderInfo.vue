<template>
    <v-container class="my-10">
        <v-row class="mb-10">
            <v-col cols="12">
                <div class="d-flex" style="flex-direction: column;align-items: center;">
                    <p style="font-size:22px;font-weight: bold;padding: 50px;">{{ itemPic.title }}</p>
                    <v-card class="py-3 px-3 text-center" flat>
                        <v-carousel ref="myCarousel" :touchless="true" interval="3000" :cycle="true" style="width: 500px;border-radius: 20px;" >
                        <v-carousel-item :src="itemPic.url" contain></v-carousel-item>
                        </v-carousel>
                    </v-card>
                    <v-card class="d-flex flex-column" flat>
                        <p><strong>선택 옵션</strong> : {{ itemPic.selectOption }}</p>
                        <p><strong>컬러</strong> : {{ itemPic.selectColor }}</p>
                        <p><strong>받으시는분 이름</strong> : {{ itemPic.orderName }}</p>
                        <p><strong>받으시는분 주소</strong> : {{ itemPic.orderAddress }}</p>
                        <p><strong>받으시는분 연락처</strong> : {{ itemPic.orderPhone }}</p>
                        <p><strong>주문 수량</strong> : {{ itemPic.orderCount }}개</p>
                        <p><strong>배송 상태</strong> : {{ itemPic.status.name }}</p>
                        <p style="font-size:24px;line-height:3.0em"><strong style="font-size:32px">{{ itemPic.totalPrice | comma }}</strong>원</p>
                    </v-card>
                </div>
            </v-col>
        </v-row>
        <v-form @submit.prevent="onSubmitForm">
                        <div class="text-center">
                            <v-btn v-if="showBtn" class="mx-1" color="#00B0FF" dark outlined @click="fnDeleteItem"><v-icon left>mdi-delete</v-icon>주문 취소하기</v-btn>
                            <v-btn v-if="showBtn2" color="#00B0FF" @click="moveToWrite" dark><v-icon left>mdi-pencil</v-icon>리뷰 작성하러가기</v-btn>
                            <v-btn class="mx-1" @click="moveToItemList">목록으로 돌아가기</v-btn>
                        </div>
                    </v-form>
    </v-container>
</template>

<script>
    import { oOrderDB } from '@/assets/firebase'
    import swal from 'sweetalert'
    export default {
    firebase:{ contentlist : oOrderDB },
    data() {
        return {
            contentlist:[],
            selected: "",
            showBtn : false,
            showBtn2 : false
        }
    },
    filters:{
            comma(val){
  	        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
    },
    created(){
            const { idnum } = this.$route.params.item
            console.log(idnum)
            this.type = this.$route.params.type
            this.pageNum = this.$route.params.page
            this.itemPic = this.contentlist.find( item => item.idnum === idnum )
            this.showBtn = this.itemPic.status.value === "before" ? true : false
            this.showBtn2 = this.itemPic.status.value === "complete" ? true : false
    },
        methods:{
            onSubmitForm(){
                const abc = this.itemPic['.key']
                oOrderDB.child(abc).update({
                        'status':this.itemPic.selected,
                    }).then(swal('수정되었습니다!',"",'success'))
                    .then(this.$router.push({name:'order_list'}))
            },
            moveToItemList(){
                    this.$router.push({name:'order_check'})
                
            },
            fnDeleteItem(){
                oOrderDB.child(this.itemPic['.key']).remove()
                .then(swal('주문이 취소 되었습니다!',"",'success'))
                .then(this.$router.push('/order_check'))
            },
            moveToWrite(){
                this.$router.push({name:'review_select'})
            },
        }
    }
</script>

<style lang="scss" scoped>
.v-text-field {
    margin: 0 auto;
    width: 500px;
}
p{
    font-size: 14px;
    strong {
        font-weight: bold;
        font-size: 15px;
    }
}
</style>