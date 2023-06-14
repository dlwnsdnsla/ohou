<template>
    <v-container>
        <v-row style="margin-top: 80px;">
            <v-col class="text-center my-5">
                <h1 class="display-1" style="font-weight:bold">회원가입</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                <form @submit.prevent="fnRegisterUser">
                    <v-text-field name="Email" label="이메일" type="email" v-model="sEmail" required style="width: 400px;margin: 0 auto;"></v-text-field>
                    <v-text-field name="Password" label="비밀번호" type="password" v-model="sPassword" required style="width: 400px;margin: 0 auto;"></v-text-field>
                    <!-- 비밀번호 확인이 맞는지 검사하도록 rules 속성 사용 -->
                    <v-text-field name="ConfirmPassword" label="비밀번호 확인" type="password" v-model="sConfirmPassword" required :rules="[fnComparePassword]" style="width: 400px;margin: 0 auto;"></v-text-field>
                    <v-col>
                    <v-btn type="submit" color="#00B0FF" dark style="width: 400px;margin: 0 auto;"><v-icon left>mdi-account</v-icon>회원가입하기</v-btn>
                </v-col>
                </form>
            </v-col>
        </v-row>
        <v-row style="margin-top: 100px;">
            <v-col class="text-center mt-10">
                <h1 class="display-1" style="color: #868686;">아이디가 이미 있으신가요?</h1>
            </v-col>
        </v-row>
        <v-col class="mt-5 text-center">
                <v-btn to="/login" large style="width: 400px;" color="#00B0FF" dark outlined>
                    <v-icon left>mdi-login</v-icon>
                    로그인 하러 가기
                </v-btn>
            </v-col>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                sEmail:'',
                sPassword:'',
                sConfirmPassword:'',
            }
        },
        computed:{
            fnComparePassword(){
                if (this.sPassword == this.sConfirmPassword) return true
                else return '비밀번호가 일치하지 않습니다.'
            },
            fnCompareEmail(){
                if (e.code == 'email-already-in-use') return true
                else return '이미 사용된 이메일 주소입니다.'
            }
        },
        methods:{
            fnRegisterUser(){
                if (this.fnComparePassword) {
                    this.$store.dispatch('fnRegisterUser', {
                        pEmail:this.sEmail,
                        pPassword:this.sPassword
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>