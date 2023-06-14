export default {
    state:{
        sErrorMessage:'',
        bIsLoading:false,
        noticeNum:0
    },
    mutations:{
        // 로그인처리 중 발생한 오류 메시지 저장
        fnSetErrorMessage(state, payload){
            state.sErrorMessage = payload
        },
        fnSetLoading(state, payload) {
            state.bIsLoading = payload
        },
        fnSetNum(state){
            state.noticeNum = state.noticeNum + 1
        }
    },
    getters:{
        fnGetErrorMessage : state => state.sErrorMessage,
        fnGetLoading : state => state.bIsLoading,
        fnGetNum : state => state.noticeNum
    },
    actions:{

    }
}