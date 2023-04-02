<template>
    <div>
        <child :name.sync="name"></child>
        <button @click="al">点击</button>
        <button @click="change">改变</button>

        <button @click="handleArr">修改arr里面的数据</button>
    </div>
</template>
 
<script>
import child from './child'
export default {
    name: 'list',
    components: {
        child
    },
    data () {
        return {
            listItems: ['buy food', 'play games', 'sleep'],
            name: 'xiaoming',
            arr: [1, 2, 3]
        }
    },
    watch: {
        arr (newval, oldval) {
            console.log('arr', newval)
        }
    },
    methods: {
        al () {
            alert(this.name)
        },
        change () {
            this.name = '123'
        },
        handleArr () {
            this.arr.splice(1, 1)
        }
    }
}
</script>