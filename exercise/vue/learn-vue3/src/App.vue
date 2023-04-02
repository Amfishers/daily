<template>
    <img
        alt="Vue logo"
        src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    created () {
        window.onerror = (msg, source, line, column, error) => {
            console.info('onerror', msg, source, line, column, error)
        }
        window.onunhandledrejection = (e) => {
            console.info('onunhandledrejection', e)
        }
    },
    errorCaptured: (err, vm, info) => {
        console.log('errorCaptured', err, vm, info)
        return false
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
