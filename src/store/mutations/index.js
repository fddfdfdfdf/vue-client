import {changeLogin,check} from "../actions-type/index"

export default {
        [changeLogin] (state, value) {
            state.isLogin = value
        },
        [check] (state, value) {
            state.check = value
        }
}