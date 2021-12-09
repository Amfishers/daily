### table 行背景色如何动态添加

```
<template>
    <a-table :customRow="customRow">

    </a-table>
</template>

<script>
export default {
    data () {
        return {
            timeCrossData: []
        }
    },
    computed: {
        customRow () {
            if (this.timeCrossData) {
                return function (record, index) {
                    return {
                        style: {
                            'background-color': record.lightHeight ? '#fff1f0' : '#fff'
                        }
                    }
                }
            } else {
                return function (record, index) {
                    return {}
                }
            }
        }
    },
}
</script>
```
