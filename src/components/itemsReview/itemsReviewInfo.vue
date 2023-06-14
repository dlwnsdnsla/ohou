<template>
    <v-container class="my-10">
        <v-row class="mb-10">
            <v-col cols="12">
                <div class="d-flex" style="flex-direction: column;align-items: center;">
                    <p style="font-size:22px;font-weight: bold;padding: 50px;">{{ itemPic.title }}</p>
                    <v-img :src="itemPic.url" style="border-radius: 10px;"></v-img>
                    <v-card class="d-flex flex-column" flat>
                        <p style="padding: 20px 0;color: #868686;"><strong>구매 상품</strong> : {{ itemPic.name }}</p>
                        <p style="font-size:18px;font-weight: bold;">{{ itemPic.info }}</p>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12">
                <v-card flat>
                    <v-form @submit.prevent="onSubmitForm">
                        <div class="text-center">
                            <v-btn class="mx-1" @click="moveToItemList">목록으로 돌아가기</v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { oItemsReviewDB } from '@/assets/firebase'
    import swal from 'sweetalert'
    export default {
    firebase:{ contentlist : oItemsReviewDB },
    data() {
        return {
            contentlist:[],
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
            console.log(this.contentlist)
    },
        methods:{
            onSubmitForm(){
                const abc = this.itemPic['.key']
                oOrderDB.child(abc).update({
                        'status':this.itemPic.selected,
                    }).then(swal('수정되었습니다!',"",'success'))
                    .then(this.$router.push({name:'review_list'}))
            },
            moveToItemList(){
                    this.$router.push({name:'review_list'})
                
            },
            fnDeleteItem(){
                oOrderDB.child(this.itemPic['.key']).remove()
                this.$router.push('/order_list')
                .then(swal('주문이 취소 되었습니다!',"",'success'))
                .then(self.$router.push('/'))
            },
        }
    }
</script>

<style lang="scss" scoped>
.v-text-field {
    margin: 0 auto;
    width: 500px;
}
</style>