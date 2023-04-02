<template>
    <div>
        <img
            alt="Vue logo"
            src="./assets/logo.png"
        >
        <SelfRtcVue />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, ref } from "vue";
import SelfRtcVue from "./components/SelfRtc.vue";

export default defineComponent({
    name: "App",
    components: { SelfRtcVue },
    setup() {},
});
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
