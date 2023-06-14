<template>
    <v-container>
        <v-row style="margin-top: 100px;">
            <v-col class="text-center mt-5 d-flex flex-row">
                <v-img style="margin-top: 3px;width: 150px;min-width: 150px;height: 70px;" contain src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Flogin-logo.PNG?alt=media&token=677c4f24-dda4-48c1-afec-981aaa59dc2d"></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col dark class="mt-5 text-center">
                <img v-if="fnGetUser.photoURL" :src="fnGetUser.photoURL" class="avatar_style">
                <h3 class="pt-2 mt-4 lighten-2">{{ fnGetUser.name }}</h3>
                <p class="pb-2 lighten-2">{{ fnGetUser.email }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                <v-btn @click="fnSendPasswordReset" color="grey" large dark style="width: 400px;margin: 0 auto;">
                    <v-icon>mdi-email</v-icon>
                    비밀번호 재설정
                </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="text-center">
                <v-btn to="/" color="#00B0FF" large dark style="width: 400px;margin: 0 auto;">
                    <v-icon>mdi-home</v-icon>
                    홈화면으로 가기
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { oFirebaseAuth } from '@/assets/firebase';
    export default {
        methods:{
            fnSendPasswordReset(){
                oFirebaseAuth.sendPasswordResetEmail(this.fnGetUser.email)
                .then(()=>alert('비밀번호 재설정메일을 발송했습니다.'))
                .catch(()=>console.log(console.error))
            }
        },
        computed:{
            fnGetUser(){
                let oUserInfo = this.$store.getters.fnGetUser
                return oUserInfo
            }
        }
    }
</script>

<style lang="scss" scoped>
    .avatar_style {
        width: 100px;
        height:100px;
        border-radius: 50%;
    }
</style>