<template>
    <div id="app">
        <NavComponent />
        <div class="container">
            <SearchComponent />
            <MessageComponent />
            <TasksList />
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {
        'NavComponent': () => import('@/components/NavComponent'),
        'SearchComponent': () => import('@/components/SearchComponent'),
        'MessageComponent': () => import('@/components/MessageComponent'),
        'TasksList': () => import('@/components/TasksList')
    }
}
</script>
