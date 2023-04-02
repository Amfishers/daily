<template>
    <div>
        <input
            :value="name"
            @input="abc"
            type="text"
        >
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    methods: {
        abc (e) {
            console.log(e.target.value)
            this.$emit('update:name', e.target.value)
        }
    }
}
</script>