<template>
    <v-container class="my-10">
        <v-row>
            <v-col cols="12">
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
                        <h1 class="my-5" style="font-weight: bold;line-height: 1.5em;">{{ itemPic.title }}</h1>
                        <p class="body-1 text-center">등록된 설명 : {{ itemPic.info }}</p>
                        <p class="body-1 text-center">등록된 카테고리 : {{ itemPic.value.name }}</p>
                        <p class="body-1 text-center">등록된 가격 : {{ itemPic.price | comma }}원</p>
                        <p class="body-1 text-center">등록된 상품 옵션1 : {{ itemPic.option1 }}</p>
                        <p class="body-1 text-center">등록된 상품 옵션2 : {{ itemPic.option2 }}</p>
                        <p class="body-1 text-center">등록된 상품 옵션3 : {{ itemPic.option3 }}</p>
                        <p class="body-1 text-center">등록된 상품 옵션4 : {{ itemPic.option4 }}</p>
                        <p class="body-1 text-center">등록된 상품 옵션5 : {{ itemPic.option5 }}</p>
                        <p class="body-1 text-center">등록된 상품 컬러1 : {{ itemPic.color1 }}</p>
                        <p class="body-1 text-center">등록된 상품 컬러2 : {{ itemPic.color2 }}</p>
                        <p class="body-1 text-center">등록된 상품 컬러3 : {{ itemPic.color3 }}</p>
                        <p class="body-1 text-center">등록된 상품 컬러4 : {{ itemPic.color4 }}</p>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12" class="text-center mt-3">
                <v-btn  outlined color="#00B0FF" dark @click="fnEditItem">
                    <v-icon left>mdi-note</v-icon>수정하기
                </v-btn>
                <v-btn class="ml-3" outlined color="red" dark @click="fnDeleteItem">
                    <v-icon left>mdi-delete</v-icon>삭제하기
                </v-btn>
                <v-btn color="#00B0FF" dark @click="$router.push('/itemlist')" class="mx-3">
                    <v-icon left>mdi mdi-menu</v-icon>상품목록으로 돌아가기
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { oItemDB, oStorage } from '@/assets/firebase'
    import swal from 'sweetalert'
    export default {
        name:'infoPage',
        firebase:{ oItems : oItemDB},
        data() {
            return {
               oItems: [],
               itemPic : null,
               showBtn : false
            }
        },
        filters:{
            comma(val){
  	        return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        },
        created(){
            const { idnum, userEmail } = this.$route.params.item
            this.itemPic = this.oItems.find( item => item.idnum === idnum )
            if (userEmail === this.$store.getters.fnGetUser.email) {
                this.showBtn = !this.showBtn
            }
        },
        methods:{
            fnDeleteItem(){
                oItemDB.child(this.itemPic['.key']).remove()
                if ( this.itemPic.filename ) {
                    oStorage.ref('images').child(this.itemPic.filename).delete()
                    oStorage.ref('images').child(this.itemPic.subimagename).delete()
                    oStorage.ref('images').child(this.itemPic.subimage2name).delete()
                    oStorage.ref('images').child(this.itemPic.subimage3name).delete()
                    oStorage.ref('images').child(this.itemPic.subimage4name).delete()
                }
                swal('삭제가 완료되었습니다!',"",'success')
                .then(this.$router.push('/itemlist'))
            },
            fnEditItem(){
                this.$router.push({name:'item_edit', params:{ item:this.itemPic, title:this.itemPic.title, page:this.pageNum }})
            },
            goBack(){
            this.$router.go(-1); [2]
        },
        }
    }
</script>

<style lang="scss" scoped>

</style>