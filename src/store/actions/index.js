
import {isLogin,isChannel,menuDt,whichObj} from "../actions-type/index"

export default {
        [isLogin] ({commit}, value) {
            commit(isLogin, value)
        }
}