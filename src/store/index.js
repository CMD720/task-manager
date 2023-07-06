import { createStore } from 'vuex'
import {loginModule} from "@/store/loginModule";
import {modalModule} from "@/store/modalModule";
import {tasksModule} from "@/store/tasksModule";

const store = createStore({
  modules: {
    tasks: tasksModule,
    login: loginModule,
    modal: modalModule,
  }
})

export default store
