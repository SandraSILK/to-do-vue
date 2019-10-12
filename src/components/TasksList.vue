<template>
    <main>
        <table>
            <thead>
                <tr>
                    <th>no.</th>
                    <th>Task title</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="task.id">
                    <td>{{ ++index }}.</td>
                    <td>{{ task.title }}</td>
                    <td v-if="task.completed">
                        <button
                            @click="task.completed = !task.completed"
                            class="text-capitalize btn-basic btn-done">
                            Done
                        </button>
                    </td>
                    <td v-else>
                        <button
                            @click="task.completed = !task.completed"
                            class="text-capitalize btn-basic btn-to-do">
                            To Do
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<style lang="scss" scoped>
@import '@/assets/components/tasks-list.scss';
</style>

<script>
'use strict'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'TasksList',
    created() {
        this.FETCH_TASKS_LIST();
    },
    computed: {
        tasks: function () {
            return this.GET_TASKS_LIST();
        }
    },
    methods: {
        ...mapActions('task', [
            'FETCH_TASKS_LIST'
        ]),
        ...mapGetters('task', [
            'GET_TASKS_LIST'
        ])
    },
}
</script>