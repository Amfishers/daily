<template>
    <div>
        <a-popover
            trigger="click"
            :visible="editorVisible"
            placement="bottomLeft"
            overlayClassName="tag-info__popover"
            @visibleChange="handleVisibleChange"
        >
            <div slot="content">
                <SearchModal
                    :selectedTag="selectedTag"
                    :tagSourceData="tagSourceData"
                    :tagSearchSourceData="tagSearhSourceData"
                    @close="editorVisible = false"
                    @update="handleUpdate"
                />
            </div>
            <a-tag
                v-if="editable"
                class="tag-info__editbtn"
            >
                <a-icon type="plus" /> {{ $t('标签') }}
            </a-tag>
        </a-popover>

        <span
            v-if="selectedTag&&selectedTag.length"
            class="tag-info__group"
        >
            <a-tag
                :closable="editable"
                v-for="tag in selectedTag"
                :key="tag.tagId"
                class="tag-info__group-item"
                @close="handleTagClose(tag)"
            >
                {{ tag.title }}
            </a-tag>
        </span>

    </div>
</template>

<script>
import { cloneDeep } from 'lodash'

import SearchModal from './SearchModal'
import CommonServices from '@/services/recruit/common'
import PanguTreeTool from 'pangu-tree-tool'

export default {
    components: { SearchModal },
    props: {
        editable: {
            type: Boolean,
            default: true
        },
        selectedTag: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return {
            editorVisible: false,
            tagSourceData: [],
            tagSearhSourceData: []
        }
    },
    methods: {
        handleVisibleChange (visible) {
            this.editorVisible = visible
        },
        handleTagTreeData (data, limitLevel = 2) {
            const newTreeData = cloneDeep(data)

            PanguTreeTool.forEach(newTreeData, node => {
                if (node.parentNodeFlag && !node.children[0].parentNodeFlag) {
                    node.isLeaf = true
                    const children = node.children
                    node._children = children
                    node.children = []
                }
            })

            return newTreeData
        },
        handleTagSearchTreeData (data) {
            const newTreeData = cloneDeep(data)

            const nodeList = PanguTreeTool.findPathAll(newTreeData, node => !node.parentNodeFlag)

            let _titleValueList = new Map()

            for (let i = 0; i < nodeList.length; i++) {
                const item = nodeList[i]

                if (item.length === 1) {
                    _titleValueList = this.uniqueData(_titleValueList, item, item)
                    continue
                }

                const lastItem = item.pop()
                _titleValueList = this.uniqueData(_titleValueList, item, lastItem)
            }

            return _titleValueList
        },
        uniqueData (data, key, value) {
            if (data.has(key)) {
                const keyMap = data.get(key)
                Array.isArray(keyMap) ? keyMap.concat(value) : keyMap.push(value)
                data.set(key, keyMap)
            } else {
                data.set(key, Array.isArray(value) ? value : [value])
            }

            return data
        },
        async fetchTag () {
            const { data } = await CommonServices.geTagList()
            this.tagSourceData = this.handleTagTreeData(data)
            this.tagSearhSourceData = this.handleTagSearchTreeData(data)
        },
        handleUpdate (tagList) {
            this.$emit('update', tagList)
        },
        handleTagClose (item) {
            if (!this.editable) return

            const selectedTag = this.selectedTag
            const targetIndex = selectedTag.findIndex(i => i.tagId === item.tagId)
            if (targetIndex > -1) {
                selectedTag.splice(targetIndex, 1)
            }

            this.$emit('update', selectedTag)
        }
    },
    created () {
        this.fetchTag()
    }
}
</script>

<style lang="less" scoped>
.tag-info {
    &__editbtn {
        background: #fff;
        border-style: dashed;
        cursor: pointer;
    }
    &__popover {
        /deep/ .ant-popover-inner-content {
            padding: 0;
        }
    }
    &__group {
        &-item {
            margin: 0 8px 8px 0;
        }
    }
}
</style>

<style lang="less">
.tag-info {
    &__popover {
        .ant-popover-inner-content {
            padding: 0;
            border-radius: 6px;
        }
    }
}
</style>
