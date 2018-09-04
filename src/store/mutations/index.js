import {isLogin,isChannel,menuDt,whichObj} from "../actions-type/index"

export default {
        [isLogin] (state, value) {
            state.isLogin = value
        }
}