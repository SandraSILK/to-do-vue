<template>
    <div>
        {{ message }}
    </div>
</template>

<script>
'use strict'
import { mapGetters } from 'vuex'

export default {
    name: 'MessageComponent',
    computed: {
        message: function () {
            return this.GET_MESSAGE();
        }
    },
    methods: {
        ...mapGetters('task', [
            'GET_MESSAGE'
        ])
    },
}
</script>