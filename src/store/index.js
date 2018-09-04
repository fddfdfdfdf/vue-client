import {alertError} from '../common/js/commonAler'
import Vuex from "vuex"
import state from "./states/index"
import actions from "./actions/index"
import mutations from "./mutations/index"

export default function setStore() {
    return new Vuex.Store({
        state,
        actions,
        mutations
    });
}



