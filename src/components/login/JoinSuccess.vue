<template>
    <v-container>
        <v-row style="margin-top: 150px;">
            <v-col cols="2" offset="5" class="text-center mt-5 d-flex flex-row">
                <v-img style="margin-top: 3px;width: 150px;height: 70px;" contain src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Flogin-logo.PNG?alt=media&token=677c4f24-dda4-48c1-afec-981aaa59dc2d"></v-img>
            </v-col>
            <v-col cols="12" class="text-center mt-5" justify-center>
                <h1 class="display-1">회원가입이 완료되었습니다!</h1>
            </v-col>
            <v-col cols="12" class="text-center mt-5" justify-center>
                <p class="pb-2 lighten-2">로그인 정보:{{ fnGetUser.email }}</p>
            </v-col>
            <v-col cols="6" offset="3" class="text-center mt-1">
                <v-btn to="/" block color="#00B0FF" large dark class="mt-5">
                    <v-icon>mdi-home</v-icon>
                    홈화면으로 가기
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        computed:{
            fnGetUser(){
                let oUserInfo = this.$store.getters.fnGetUser
                return oUserInfo
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>