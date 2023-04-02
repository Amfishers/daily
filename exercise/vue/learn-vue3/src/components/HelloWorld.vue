<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <button @click="handleClick">点击报错</button>
        <CompChild />
    </div>
</template>

<script>
import CompChild from "./CompChild.vue"
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    components: {
        CompChild
    },
    data () {
        return {
            arr: [
                [1, 2, 3, 4],
                [4, 2, 7, 8],
                [2, 3],
                [1, 2]
            ],
            num: 1
        }
    },
    methods: {
        filtersArr (list) {
            const twoSets = (acc, arr) => {
                const result = new Set(acc)
                for (let item of result) {
                    if (!arr.has(item)) {
                        result.delete(item)
                    }
                }
                return result
            }

            const resultSet = () =>
                list
                    .map(arr => new Set(arr))
                    .reduce(twoSets)


            return Array.from(resultSet(list))
        },
        handleClick () {
            Promise.reject('xxx').then((r) => {
                this.num()
                console.log('Promise.reject', r)
            })
            // setTimeout(() => {
            //     this.num()
            // }, 1000)
        }
    },
    created () {
        // const s = this.filtersArr(this.arr)
        // console.log('s', s)
    },
    mounted () {

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
