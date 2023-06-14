<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">로그인 페이지</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="8" offset="2" class="text-center">
                <form @submit.prevent="fnDoLogin">
                    <v-text-field v-model="sEmail" name="Email" label="이메일" type="email" required></v-text-field>
                    <v-text-field v-model="sPassword" name="Password" label="비밀번호" type="password" required ref="passnum"></v-text-field>
                    <v-btn v-if="!fnGetLoading" type="submit" color="orange" dark>로그인</v-btn>
                    <!-- 시간지연의 경우 보이게 될 회전 프로그레스 원 -->
                    <v-progress-circular v-if="fnGetLoading" indeterminate :width="7" :size="70" color="grey lighten-1"></v-progress-circular>
                    <!-- 오류 메시지가 있을 경우 표시 -->
                    <v-alert class="mt-3" type="error" dismissible v-model="bAlert">
                        {{ fnGetErrMsg  }}
                    </v-alert>
                </form>
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
            fnDoLogin(){
                this.$store.dispatch('fnDoLogin', {pEmail:this.sEmail, pPassword:this.sPassword})
            }
        },
        computed:{
            fnGetLoading(){
                return this.$store.getters.fnGetLoading;
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