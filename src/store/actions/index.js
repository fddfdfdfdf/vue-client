
import {changeLogin,check} from "../actions-type/index"

export default {
        [changeLogin] ({commit}, value) {
            commit(changeLogin, value)
        },
        [check] ({commit}, value) {
            commit(check, value)
        }
}