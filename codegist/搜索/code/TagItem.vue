<template>
    <span
        class="tag"
        :class="{'active': active}"
        @click="handleClick"
    >
        {{ label }}
    </span>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick () {
            this.$emit('click')
        }
    }
}
</script>

<style lang="less" scoped>
.tag {
    position: relative;
    display: inline-block;
    margin: 0 8px 8px 0;
    padding: 0 14px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    cursor: pointer;
    &::after {
        content: '';
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        width: 12px;
        height: 12px;
        background: url('~@/assets/images/icon-radio-selected.svg') no-repeat
            center;
        background-size: cover;
    }
    &.active {
        background-color: rgba(30, 134, 239, 0.05);
        color: @primary-color;
        border: 1px solid @primary-color;
        &::after {
            opacity: 1;
        }
    }
}
</style>
