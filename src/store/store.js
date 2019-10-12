import Vue from 'vue'
import Vuex from 'vuex'
import task from '@/store/modules/task/task.module.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        task
    }
})