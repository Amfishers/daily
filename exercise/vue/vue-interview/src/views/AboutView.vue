<template>
    <div class="about">
        <h1>This is an about page</h1>
        <Child
            :name='name'
            :age="age"
            :nick="nick"
        />
    </div>
</template>

<script>
import Child from './Child.vue'
export default {
    components: {
        Child
    },
    data () {
        return {
            isDataMethodSamename: 'xxx',
            name: 'fisher',
            age: '18',
            nick: 'echo'
        }
    },
    methods: {
        findKthLargest (nums, k) {
            let n = nums.slice()
            // 排序之后去重，就能去到第 k 值
            let z = [...new Set(n.sort((a, b) => a - b))]

            const index = z.length - k + 1
            return z[index < 0 ? 0 : index]
        }
    },
    mounted () {
        let a = [3, 2, 3, 1, 2, 4, 5, 5, 6]
        let k = 4
        console.log(this.findKthLargest(a, k))
        console.log(this.isDataMethodSamename)

        this.$EventBus.$on('showName', (params) => {
            console.log('showName', params)
        })
    },
    beforeDestroy () {
        this.$EventBus.$off('showName')
        console.log('beforeDestory-AboutView')
    },
}
</script>

