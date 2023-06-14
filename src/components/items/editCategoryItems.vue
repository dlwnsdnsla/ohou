<template>
    <v-container class="my-10">
        <v-row class="mb-10">
            <v-col cols="12" class="text-center">
                <h1>{{ itemPic.title }}</h1>
            </v-col>
            <v-col cols="12" class="text-center">
                <h2>상품 기본정보</h2>
            </v-col>
            <v-col cols="12">
                <v-card flat>
                    <v-form @submit.prevent="onSubmitForm">
                        <v-text-field v-model="itemPic.title" dense outlined label="상품명" :rules="[ v => !!v || '상품명은 필수입니다!' ]"></v-text-field>
                        <v-select v-model="itemPic.selected" :items="selectList" item-text="name" item-value="value" :rules="[ v => !!v || '카테고리 선택은 필수입니다!' ]" return-object>
                        </v-select>
                        <v-text-field v-model="itemPic.price" dense outlined label="가격" :rules="[ v => !!v || '가격을 기재해주세요!' ]"></v-text-field>
                        <v-text-field v-model="itemPic.brand" dense outlined label="제조사명" :rules="[ v => !!v || '제조사명을 기재해주세요!' ]"></v-text-field>
                        <v-textarea v-model="itemPic.info" label="상품설명" outlined rows="2" :value="itemPic.info"></v-textarea>
                        <v-col cols="12" class="text-center">
                        <h2>상품 상세옵션</h2>
                        </v-col>
                        <v-text-field v-model="itemPic.option1" dense outlined label="상품의 첫번째 옵션을 적어주세요"></v-text-field>
                        <v-text-field v-model="itemPic.option2" dense outlined label="상품의 두번째 옵션을 적어주세요"></v-text-field>
                        <v-text-field v-model="itemPic.option3" dense outlined label="상품의 세번째 옵션을 적어주세요"></v-text-field>
                        <v-text-field v-model="itemPic.option4" dense outlined label="상품의 네번째 옵션을 적어주세요"></v-text-field>
                        <v-text-field v-model="itemPic.option5" dense outlined label="상품의 다섯번째 옵션을 적어주세요"></v-text-field>
                        <v-col cols="12" class="text-center">
                        <h2>상품 색상옵션</h2>
                        </v-col>
                        <v-text-field v-model="itemPic.color1" dense outlined label="상품의 색상을 적어주세요"></v-text-field>
                        <v-text-field v-model="itemPic.color2" dense outlined label="상품의 색상을 적어주세요"></v-text-field>
                        <v-text-field v-model="itemPic.color3" dense outlined label="상품의 색상을 적어주세요"></v-text-field>
                        <v-text-field v-model="itemPic.color4" dense outlined label="상품의 색상을 적어주세요"></v-text-field>
                        <div class="text-center">
                            <v-btn class="mx-1" @click="moveToItemList">목록으로 돌아가기</v-btn>
                            <v-btn class="mx-1" type="submit" color="#00B0FF" dark>상품 등록하기</v-btn>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { oItemDB } from '@/assets/firebase'
    import swal from 'sweetalert'
    export default {
    firebase:{ contentlist : oItemDB },
    data() {
        return {
            contentlist:[],
            itemPic:null,
            pageNum:0,
            selected: "",
            selectList: [
                { name: "카테고리를 선택해 주세요.", value: "" },
                { name: "가구", value: "furniture" },
                { name: "패브릭", value: "fabric" },
                { name: "가전·디지털", value: "digital" },
                { name: "주방용품", value: "kitchen" },
                { name: "식품", value: "food" },
                { name: "데코·식물", value: "deco" },
                { name: "조명", value: "light" },
                { name: "수납·정리", value: "acceptance" },
                { name: "생활용품", value: "life" },
                { name: "생필품", value: "necessity" },
                { name: "유아·아동", value: "kids" },
                { name: "반려동물", value: "animal" },
                { name: "캠핑·레저", value: "camping" },
                { name: "공구·DIY", value: "diy" },
                { name: "인테리어시공", value: "interior" },
                { name: "렌탈", value: "rental" },
                { name: "장보기", value: "groceries" },
            ],
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
                this.itemPic.date = new Date().toISOString()
                const abc = this.itemPic['.key']
                oItemDB.child(abc).update({
                        'title':this.itemPic.title,
                        'info':this.itemPic.info,
                        'value':this.itemPic.selected,
                        'price':this.itemPic.price,
                        'brand':this.itemPic.brand,
                        'option1':this.itemPic.option1,
                        'option2':this.itemPic.option2,
                        'option3':this.itemPic.option3,
                        'option4':this.itemPic.option4,
                        'option5':this.itemPic.option5,
                        'color1':this.itemPic.color1,
                        'color2':this.itemPic.color2,
                        'color3':this.itemPic.color3,
                        'color4':this.itemPic.color4,
                        'date':this.itemPic.date.split('T')[0]
                    }).then(swal('수정되었습니다!',"",'success'))
                    .then(this.$router.push({name:'itemlist', params:{page:this.pageNum}}))
            },
            moveToItemList(){
                    this.$router.push({name:'itemlist', params:{page:this.pageNum} })
                
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