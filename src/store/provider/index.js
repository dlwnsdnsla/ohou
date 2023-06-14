import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import router from '@/router'

export default {
    state:{
        oUser:null,
        showAddBtn:false
    },
    mutations:{
        // 사용자 객체를 저장
        fnSetUser(state, payload){
            state.oUser = payload
        },
        showAddCategory(state, payload){
            state.showAddBtn = payload 
        },

    },
    getters:{
        // 사용자 객체를 반환
        fnGetUser: state => state.oUser,
        // 사용자 객체 값의 유무로 로그인 여부 반환
        fnGetAuthStatus: state => state.oUser !== null,
        
    },
    actions:{
        // 구글 계정 회원 로그인(팝업)
        fnDoGoogleLogin_Popup({commit}){
            commit('fnSetLoading', true)
            // 로그인제공자객체를 생성
            var oProvider = new firebase.auth.GoogleAuthProvider()
            oProvider.addScope('profile')
            oProvider.addScope('email')
            firebase.auth().signInWithPopup(oProvider)
            .then( pUserInfo => {
                commit('fnSetUser', {
                    id : pUserInfo.user.id,
                    name : pUserInfo.user.displayName,
                    email : pUserInfo.user.email,
                    photoURL : pUserInfo.user.photoURL
                })
                commit('fnSetLoading', false)
                commit('fnSetErrorMessage', '')
                commit('showAddCategory', true)
                router.push('/')
                router.go(0)
            })
            .catch(err=>{
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },
        // 구글 계정 자동 로그인 처리
        fnDoLoginAuto({commit}, pUserInfo) {
            // 자동 로그인 시 스토어에 계정정보 저장
            commit('fnSetUser', {
            id: pUserInfo.uid,
            name: pUserInfo.displayName,
            email: pUserInfo.email,
            photoURL: pUserInfo.photoURL
            })
            commit('fnSetLoading', false) // 시간걸림 상태 해제
            commit('fnSetErrorMessage', '') // 에러메세지 초기화  
            
        },

        // 이메일 회원가입
        fnRegisterUser({commit}, payload){
            commit('fnSetLoading', true)
            firebase.auth().createUserWithEmailAndPassword(payload.pEmail,
                payload.pPassword)
            .then(pUserInfo=>{
                commit('fnSetUser', {
                    email: pUserInfo.user.email
                })
                commit('fnSetLoading', false)
                commit('fnSetErrorMessage', '')
                router.push('/joinsuccess')
            })
            .catch(err=>{
                console.log(err)
                switch (err.code) {
                    case 'auth/weak-password':
                      err.message = '비밀번호는 6자리 이상이어야 합니다';
                      break;
                    case 'auth/invalid-email':
                        err.message = '잘못된 이메일 주소입니다';
                      break;
                    case 'auth/email-already-in-use':
                        err.message = '이미 가입되어 있는 계정입니다';
                      break;
                  }
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },
        // 이메일 회원 로그인
        fnDoLogin({commit}, payload) {
            commit('fnSetLoading', true)
            // 파이어베이스에 이메일 회원 로그인 인증 처리 요청
            firebase.auth().signInWithEmailAndPassword(payload.pEmail,
                payload.pPassword)
            .then(pUserInfo => {
                // 로그인이 성공하면 스토어에 계정정보 저장
                commit('fnSetUser', {
                id: pUserInfo.user.uid,           // <-- 파이어베이스 v9 마이그레이션 : user 추가
                name: pUserInfo.user.displayName, // <-- 파이어베이스 v9 마이그레이션 : user 추가
                email: pUserInfo.user.email,      // <-- 파이어베이스 v9 마이그레이션 : user 추가
                photoURL: pUserInfo.user.photoURL // <-- 파이어베이스 v9 마이그레이션 : user 추가
                })
                commit('fnSetLoading', false) // 시간걸림 상태 해제
                commit('fnSetErrorMessage', '') // 에러메세지 초기화
                router.push('/') // 로그인 후 화면으로 이동
                router.go(0)
            })
            .catch(err => {
                switch (err.code) {
                    case 'auth/user-not-found':
                      err.message = '회원이 아닙니다. 회원가입을 해주세요.';
                      break;
                    case 'auth/wrong-password':
                      err.message = '비밀번호가 맞지 않습니다.';
                      break;
                }
                commit('fnSetErrorMessage', err.message)
                commit('fnSetLoading', false)
            })
        },
        
        // 로그아웃 처리
        fnDoLogout({commit}) {
            // 파이어베이스에 로그아웃 요청
            firebase.auth().signOut()
            commit('fnSetUser', null) // 스토어에 계정정보 초기화
            router.push('/')
        }
    },
}