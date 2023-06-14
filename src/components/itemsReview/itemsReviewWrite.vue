<template>
    <v-container class="my-10">
        <v-row class="mb-10">
            <v-col cols="12" class="text-center">
                <h1>리뷰작성하기</h1>
            </v-col>
            <v-col cols="12">
                <v-card flat>
                    <v-col cols="12" class="text-center">
                        <p style="font-weight: bold;font-size: 21px;">{{ itemPic.title }}</p>
                        <v-img :src="itemPic.url" width="400px" style="margin: 0 auto;border-radius: 10px;"></v-img>
                    </v-col>
                    <v-form @submit.prevent="onSubmitForm" >
                        <v-text-field v-model="rvtitle" dense outlined label="제목" style="width:400px; padding-top:20px;margin: 0 auto;" :rules="[ v => !!v || '제목은 필수입니다.' ]"></v-text-field>
                        <v-textarea v-model="text" label="내용" outlined rows="10" style="width:400px;margin: 0 auto;"></v-textarea>
                        <v-file-input @change="previewImage" accept="image/*" v-model="files" dense label="사진 첨부" placeholder="사진 업로드" prepend-icon="mdi-paperclip" outlined :show-size="1000" couter style="width:400px; padding-bottom:20px;margin: 0 auto;" :rules="[ v => !!v || '사진을 첨부해주세요!' ]"></v-file-input>
                        <div class="text-center" v-if="!bIsWait">
                            <v-btn width="100px" class="mx-1" @click="moveToList">취소</v-btn>
                            <v-btn width="100px" class="mx-1" type="submit" color="#00B0FF" dark>등록하기</v-btn>
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
    import {  oStorage, oItemsReviewDB, oOrderDB, oItemDB, oCompleteDB} from '@/assets/firebase'
    import swal from 'sweetalert'
    export default {
        firebase:{ contentlist : oOrderDB, oItems : oItemDB, oComplete : oCompleteDB },
        data(){
            return {
                text:'',
                date:'',
                files:'',
                imageData:'',
                bIsWait:false,
                contentlist:[],
                now:"",
                dateString:'',
                oItems:[],
                rvCount:0,
                oComplete:[]
            }
        },
        created(){
            const { idnum } = this.$route.params.item
            console.log(idnum)
            this.type = this.$route.params.type
            this.pageNum = this.$route.params.page
            this.itemPic = this.contentlist.find( item => item.idnum === idnum )
            console.log(this.contentlist)
            this.pic = this.oItems.find( item => item.title === this.itemPic.title )
            console.log(this.pic)
            this.rvCount = this.oItemsReviewDB.filter((item)=>item.name == this.pic.title)
            console.log(this.rvCount)
        },
        methods:{
            onSubmitForm(){
                    this.onUpload()
            },
            moveToList(){
                    this.$router.push('/review_list')
            },
            previewImage(){
                console.log(this.files)
                this.imageData = this.files
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
                const self = this
                uploadTask.on('state_changed', function (snapshot) {
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('업로드: ' + progress + '% 완료', snapshot.state);
                    self.bIsWait = !self.bIsWait
                }, function (error) {
                    console.log(error)
                }, function () {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log('업로드URL:', downloadURL);
                    oItemsReviewDB.push({
                        'url':downloadURL,
                        'name':self.itemPic.title,
                        'idnum':self.$store.getters.fnGetNum,
                        'title':self.rvtitle,
                        'info':self.text, 
                        'date':dateString,
                        'filename':self.imageData.name,
                        'userEmail':self.$store.getters.fnGetUser.email
                    }).then(
                    oCompleteDB.push({
                        'url':downloadURL,
                        'name':self.itemPic.title,
                        'idnum':self.$store.getters.fnGetNum,
                        'orderName':self.itemPic.orderName,
                        'orderAddress':self.itemPic.orderAddress,
                        'orderPhone':self.itemPic.orderPhone,
                        'totalPrice':self.itemPic.totalPrice,
                        'orderCount':self.itemPic.orderCount,
                        'selectColor':self.itemPic.selectColor,
                        'selectOption':self.itemPic.selectOption,
                        'date':dateString,
                        'filename':self.imageData.name,
                        'userEmail':self.$store.getters.fnGetUser.email
                    })
                    ).then(
                    oOrderDB.child(self.itemPic['.key']).remove()
                    )
                    .then(swal('리뷰 작성 완료!',"",'success'))
                    .then(self.$router.push('/review_list'))
                    });
                }); 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>