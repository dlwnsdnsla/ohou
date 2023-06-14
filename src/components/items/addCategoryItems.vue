<template>
    <v-container class="my-10">
        <v-row class="mb-10">
            <v-col cols="12" class="text-center">
                <h2>상품 기본정보</h2>
            </v-col>
            <v-col cols="12">
                <v-card flat>
                    <v-form @submit.prevent="onSubmitForm">
                        <v-text-field v-model="title" dense outlined label="상품명" :rules="[ v => !!v || '상품명은 필수입니다!' ]"></v-text-field>
                        <v-select v-model="selected" :items="selectList" item-text="name" item-value="value" :rules="[ v => !!v || '카테고리 선택은 필수입니다!' ]" return-object>
                        </v-select>
                        <v-text-field v-model="price" dense outlined label="가격" :rules="[ v => !!v || '가격을 기재해주세요!' ]"></v-text-field>
                        <v-text-field v-model="brand" dense outlined label="제조사명" :rules="[ v => !!v || '제조사명을 기재해주세요!' ]"></v-text-field>
                        <v-textarea v-model="info" label="상품설명" outlined rows="2"></v-textarea>
                        <v-col cols="12" class="text-center">
                        <h2>상품 상세옵션</h2>
                        </v-col>
                        <v-text-field v-model="option1" dense outlined label="상품의 첫번째 옵션을 적어주세요"></v-text-field>
                        <v-text-field v-model="option2" dense outlined label="상품의 두번째 옵션을 적어주세요"></v-text-field>
                        <v-text-field v-model="option3" dense outlined label="상품의 세번째 옵션을 적어주세요"></v-text-field>
                        <v-text-field v-model="option4" dense outlined label="상품의 네번째 옵션을 적어주세요"></v-text-field>
                        <v-text-field v-model="option5" dense outlined label="상품의 다섯번째 옵션을 적어주세요"></v-text-field>
                        <v-col cols="12" class="text-center">
                        <h2>상품 색상옵션</h2>
                        </v-col>
                        <v-text-field v-model="color1" dense outlined label="상품의 색상을 적어주세요"></v-text-field>
                        <v-text-field v-model="color2" dense outlined label="상품의 색상을 적어주세요"></v-text-field>
                        <v-text-field v-model="color3" dense outlined label="상품의 색상을 적어주세요"></v-text-field>
                        <v-text-field v-model="color4" dense outlined label="상품의 색상을 적어주세요"></v-text-field>
                        <v-col cols="12" class="text-center">
                        <h2>상품 상세사진</h2>
                        </v-col>
                        <div style="display: flex;">
                            <v-file-input @change="previewImage" accept="image/*" v-model="files" dense label="상품 대표 사진 첨부" placeholder="사진 업로드" prepend-icon="mdi-paperclip" outlined :show-size="1000" couter style="width:500px; padding-bottom:20px"></v-file-input>
                            <v-file-input @change="previewImage" accept="image/*" v-model="subImage" dense label="추가 사진 첨부" placeholder="사진 업로드" prepend-icon="mdi-paperclip" outlined :show-size="1000" couter style="width:500px; padding-bottom:20px"></v-file-input>
                            <v-file-input @change="previewImage" accept="image/*" v-model="subImage2" dense label="추가 사진 첨부" placeholder="사진 업로드" prepend-icon="mdi-paperclip" outlined :show-size="1000" couter style="width:500px; padding-bottom:20px"></v-file-input>
                            <v-file-input @change="previewImage" accept="image/*" v-model="subImage3" dense label="추가 사진 첨부" placeholder="사진 업로드" prepend-icon="mdi-paperclip" outlined :show-size="1000" couter style="width:500px; padding-bottom:20px"></v-file-input>
                            <v-file-input @change="previewImage" accept="image/*" v-model="subImage4" dense label="추가 사진 첨부" placeholder="사진 업로드" prepend-icon="mdi-paperclip" outlined :show-size="1000" couter style="width:500px; padding-bottom:20px"></v-file-input>
                        </div>
                        <div class="text-center" v-if="!bIsWait">
                            <v-btn class="mx-1" @click="moveToList">목록으로 돌아가기</v-btn>
                            <v-btn class="mx-1" type="submit" color="#00B0FF" dark>상품 등록하기</v-btn>
                        </div>
                        <div class="text-center" v-else>
                            <v-progress-circular size="50" indeterminate color="grey"></v-progress-circular>
                        </div>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { oStorage, oItemDB} from '@/assets/firebase'
    import swal from 'sweetalert'
    export default {
        data(){
            return {
                writer:'',
                title:'',
                info:'',
                date:'',
                type:'',
                files:'',
                subImage:'',
                subImage2:'',
                subImage3:'',
                subImage4:'',
                price:0,
                brand:'',
                stars:'',
                option1:'',
                option2:'',
                option3:'',
                option4:'',
                option5:'',
                color1:'',
                color2:'',
                color3:'',
                color4:'',
                imageData:'',
                bIsWait:false,
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
                dateString:'',
            }
        },
        methods:{
            onSubmitForm(){
                    this.onUpload()
            },
            moveToList(){
                    this.$router.push('/itemlist')
            },
            previewImage(){
                console.log(this.files)
                this.imageData = this.files
                this.subImageData = this.subImage
                this.subImageData2 = this.subImage2
                this.subImageData3 = this.subImage3
                this.subImageData4 = this.subImage4
                
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
                let uploadTask = oStorage.ref('images').child(this.imageData.name).put(this.imageData)
                let uploadTaskSub = oStorage.ref('images').child(this.subImageData.name).put(this.subImageData)
                let uploadTaskSub2 = oStorage.ref('images').child(this.subImageData2.name).put(this.subImageData2)
                let uploadTaskSub3 = oStorage.ref('images').child(this.subImageData3.name).put(this.subImageData3)
                let uploadTaskSub4 = oStorage.ref('images').child(this.subImageData4.name).put(this.subImageData4)
                const self = this
                uploadTask.on('state_changed', function (snapshot) {
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('업로드: ' + progress + '% 완료', snapshot.state);
                    self.bIsWait = !self.bIsWait        
                },
                 function (error) {
                    console.log(error)
                }, function () {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('대표사진URL:', downloadURL);
                    uploadTaskSub.snapshot.ref.getDownloadURL().then(function(subURL){
                    uploadTaskSub2.snapshot.ref.getDownloadURL().then(function(sub2URL){
                    uploadTaskSub3.snapshot.ref.getDownloadURL().then(function(sub3URL){
                    uploadTaskSub4.snapshot.ref.getDownloadURL().then(function(sub4URL){
                    console.log('서브사진URL:', subURL);
                    oItemDB.push({
                        'url':downloadURL,
                        'suburl':subURL,
                        'suburl2':sub2URL,
                        'suburl3':sub3URL,
                        'suburl4':sub4URL,
                        'idnum':self.$store.getters.fnGetNum,
                        'title':self.title,
                        'info':self.info,
                        'value':self.selected,
                        'price':parseInt(self.price),
                        'brand':self.brand,
                        'stars':self.stars,
                        'option1':self.option1,
                        'option2':self.option2,
                        'option3':self.option3,
                        'option4':self.option4,
                        'option5':self.option5,
                        'color1':self.color1,
                        'color2':self.color2,
                        'color3':self.color3,
                        'color4':self.color4,
                        'date':dateString,
                        'filename':self.imageData.name,
                        'subimagename':self.subImageData.name,
                        'subimage2name':self.subImageData2.name,
                        'subimage3name':self.subImageData3.name,
                        'subimage4name':self.subImageData4.name,
                        'userEmail':self.$store.getters.fnGetUser.email
                    }).then(swal('상품이 등록되었습니다.',"",'success'))
                    .then(self.$router.push('/itemlist'))
                });
            });
        });
        });
                    });
                }); 
            }
        }
    }
</script>

<style lang="scss" scoped>
.v-text-field {
    margin: 0 auto;
    width: 500px;
}
</style>