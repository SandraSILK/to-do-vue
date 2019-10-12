<template>
    <div class="margin">
       <input
        class="search"
        type="text"
        @input="searchTasks"
        placeholder="search" />
    </div>
</template>


<style lang="scss" scoped>
@import '@/assets/components/search-component';
</style>

<script>
'use strict'
import { debounce } from "debounce"
import { mapActions } from 'vuex'

export default {
    name: 'SearchComponent',
    methods: {
        ...mapActions('task', [
            'FILTER_TASKS'
        ]),
        searchTasks: debounce(function (event) {
            this.FILTER_TASKS(event.target.value)
        }, 350),
    },
}
</script>