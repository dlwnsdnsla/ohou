<template>
    <v-container>
        <v-row style="margin-top: 100px;">
            <v-col class="text-center mt-5 d-flex flex-row">
                <v-img style="margin-top: 3px;width: 150px;height: 70px;" contain src="https://firebasestorage.googleapis.com/v0/b/login-c396a.appspot.com/o/images%2Flogin-logo.PNG?alt=media&token=677c4f24-dda4-48c1-afec-981aaa59dc2d"></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                <form @submit.prevent="fnDoLogin">
                    <v-text-field v-model="sEmail" name="Email" label="이메일" type="email" required style="width: 400px;min-width:400px;margin: 0 auto;"></v-text-field>
                    <v-text-field v-model="sPassword" name="Password" label="비밀번호" type="password" required ref="passnum" style="width: 400px;min-width:400px;margin: 0 auto;"></v-text-field>
                    <v-btn v-if="!fnGetLoading" type="submit" color="#00B0FF" dark style="width: 400px;"><v-icon left>mdi-login</v-icon>로그인</v-btn>
                    <!-- 시간지연의 경우 보이게 될 회전 프로그레스 원 -->
                    <v-progress-circular v-if="fnGetLoading" indeterminate :width="7" :size="70" color="grey lighten-1"></v-progress-circular>
                    <!-- 오류 메시지가 있을 경우 표시 -->
                    <v-alert class="mt-3" type="error" dismissible v-model="bAlert">
                        {{ fnGetErrMsg  }}
                    </v-alert>
                </form>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                <v-btn @click="fnDoGoogleLogin_Popup" outlined color="#00B0FF" dark large style="width: 400px;">
                    <v-icon left>mdi-google</v-icon>
                    구글로그인
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                <v-btn to="/join" large style="width: 400px;">
                    <v-icon left>mdi-account</v-icon>
                    회원가입
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data(){
            return{
                sEmail:'',
                sPassword:'',
                bAlert:false
            }
        },
        methods:{
            fnDoGoogleLogin_Popup(){
                this.$store.dispatch("fnDoGoogleLogin_Popup")
            },
            fnDoLogin(){
                this.$store.dispatch('fnDoLogin', {pEmail:this.sEmail, pPassword:this.sPassword})
            }
        },
        computed:{
            fnGetLoading(){
                return this.$store.getters.fnGetLoading
                
            },
            fnGetErrMsg(){
                return this.$store.getters.fnGetErrorMessage
            }
        },
        watch:{
            bAlert(pValue){
                console.log(pValue)
                if (pValue == false){
                    if (this.fnGetErrMsg !== '비밀번호가 맞지 않습니다.') this.$router.push('/login')
                    this.$refs.passnum.focus()
                }    
            },
            fnGetErrMsg(pMsg){
                // console.log(pMsg)
                if (pMsg) this.bAlert = true;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>