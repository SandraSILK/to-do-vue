'use strickt'
import { actionTypes } from './actionTypes'
import { mutationTypes } from './mutationTypes'
import { getterTypes } from './getterTypes'
import { getTodos } from '@/services/getTodos'

export default {
    namespaced: true,
    strict: true,
    state: {
        tasksList: {},
        masterList: {},
        message: ''
    },
    actions: {
        [actionTypes.FETCH_TASKS_LIST] ({ commit }) {
            getTodos()
                .then(response => {
                    if (response.status === 200) {
                        commit(mutationTypes.UPDATE_TASKS_LIST, response.data);
                        commit(mutationTypes.UPDATE_MASTER_LIST, response.data);
                        commit(mutationTypes.SET_MESSAGE, '');
                    }
                })
                .catch(error => {
                    commit(mutationTypes.SET_MESSAGE, 'Oops... something went wrong.');
                })
        },
        /**
         * @param {task title: String} payload
         */
        [actionTypes.FILTER_TASKS] ({ commit, state }, payload) {
            const tasks = state.masterList.filter(task => task.title.includes(payload));
            commit(mutationTypes.UPDATE_TASKS_LIST, tasks);
        }
    },
    mutations: {
        /**
         * @param {tasks: Object} payload
         */
        [mutationTypes.UPDATE_TASKS_LIST] (state, payload) {
            state.tasksList = payload;
        },
        /**
         * @param {tasks: Object} payload
         */
        [mutationTypes.UPDATE_MASTER_LIST] (state, payload) {
            state.masterList = payload;
        },
        /**
         * @param {message: String} payload
         */
        [mutationTypes.SET_MESSAGE] (state, payload) {
            state.message = payload;
        }
    },
    getters: {
        [getterTypes.GET_TASKS_LIST]: state => {
            return state.tasksList;
        },
        [getterTypes.GET_MESSAGE]: state => {
            return state.message;
        }
    }
}