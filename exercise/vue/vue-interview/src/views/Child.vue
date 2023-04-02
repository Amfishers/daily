<template>
    <div class="">
        Im Child
        <button @click="HandleShowName">我是按钮 EventBus-showName</button>
        <Sun />
    </div>
</template>

<script>
import Sun from './Sun.vue'
export default {
    name: '',
    components: {
        Sun
    },
    data () {
        return {}
    },
    methods: {
        HandleShowName () {
            this.$EventBus.$emit('showName', 'fisher')
        }
    },
}
</script>

<style scoped lang="scss">
</style>
