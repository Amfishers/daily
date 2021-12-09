<template>
    <div class="tag-panel">
        <div class="tag-panel__hd">
            <div class="tool">
                <a-input
                    class="search-input"
                    v-model="searchData.searchKeyword"
                    allowClear
                    :placeholder="$t('请输入标签名称进行搜索')"
                    @pressEnter="handleSearch"
                />
                <a-button
                    class="search-btn"
                    @click="handleSearch"
                    type="primary"
                >{{ $t('查询') }}</a-button>
            </div>
            <div class="close">
                <a-icon
                    type="close"
                    @click="handleClose"
                />
            </div>
        </div>

        <div class="tag-panel__bd">
            <div
                v-show="searchData.show"
                class="tag-panel__bd-search"
            >
                <template v-if="searchData.data.length">
                    <div
                        class="search-item"
                        v-for="searchTag in searchData.data"
                        :key="searchTag.tagId"
                    >
                        <div class="title"><span>{{ searchTag._title }}</span><span class="subtitle">{{ searchTag._subtitle }}</span></div>
                        <div class="taglist">
                            <TagItem
                                v-for="t in searchTag._children"
                                :key="t.tagId"
                                :label="t.title"
                                :active="selectedTagIds.includes(t.tagId)"
                                @click="handleTagSelect(t)"
                            />
                        </div>
                    </div>
                </template>
                <a-empty v-else />
            </div>
            <div
                class="tag-panel__main"
                v-show="!searchData.show"
            >
                <div class="tag-panel-treepanel">
                    <PanguTree
                        :treeData="tagSourceData"
                        :selectedKeys="selectedKeys"
                        :showSearch="false"
                        :showLine="false"
                        uniqueKey="tagId"
                        @select="onTreeSelect"
                    />
                    <!-- <a-tree
                            :blockNode="true"
                            :tree-data="tagSourceData"
                            :replaceFields="replaceFields"
                            :selectedKeys="selectedKeys"
                            @select="onTreeSelect"
                        /> -->

                </div>
                <div class="tag-panel__main-block">
                    <template v-if="activeData && activeData.length">
                        <TagItem
                            v-for="tag in activeData"
                            :key="tag.tagId"
                            :label="tag.title"
                            :active="selectedTagIds.includes(tag.tagId)"
                            @click="handleTagSelect(tag)"
                        />
                    </template>
                    <a-empty
                        v-if="!activeId || !activeData"
                        :image="simpleImage"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import PanguTreeTool from 'pangu-tree-tool'
import { Empty } from 'ant-design-vue'
import TagItem from './TagItem'

export default {
    components: {
        TagItem
    },
    props: {
        selectedTag: {
            type: Array,
            default: () => []
        },
        tagSourceData: {
            type: Array,
            default: () => []
        },
        tagSearchSourceData: {
            type: Map,
            default: () => { }
        }
    },
    data () {
        return {
            activeId: undefined,
            selectedKeys: [],
            replaceFields: {
                children: 'children',
                title: 'title',
                key: 'tagId'
            },
            searchData: {
                show: false,
                searchKeyword: '',
                data: []
            }
        }
    },
    watch: {
        'searchData.searchKeyword' (newVal, oldVal) {
            if (oldVal && newVal.trim() === '') {
                this.searchData.show = false
            }
        }
    },
    computed: {
        activeData () {
            const activeId = this.activeId
            if (!activeId) return undefined

            const target = PanguTreeTool.findNode(this.tagSourceData, node => node.tagId === activeId)

            return target?._children
        },
        selectedTagIds () {
            return this.selectedTag.map(i => i.tagId)
        }
    },
    methods: {
        onTreeSelect ({ selectedKeys, info }) {
            const { selectedNodes, manualData } = info
            let selectTreeNode = {}
            if (!selectedNodes && !manualData) return

            if (manualData) {
                selectedKeys = [manualData[this.treeUniqueKey]]
                selectTreeNode = manualData
            } else {
                selectTreeNode = selectedNodes?.[0]?.data?.props ?? selectedNodes?.[0]?.data?.props?.data
            }

            if (!selectTreeNode || !selectTreeNode._children) {
                this.selectedKeys = selectedKeys
                this.activeId = undefined
                return
            }

            const { tagId } = selectTreeNode

            this.activeId = tagId
            this.selectedKeys = selectedKeys
        },

        handleSearch () {
            const searchword = this.searchData.searchKeyword
            if (typeof searchword !== 'string') {
                this.searchData.show = false
                return
            }
            const keyword = `${searchword}`.trim()
            this.searchData.data = this.handleSearchData(keyword)
            this.searchData.show = !(keyword === '')
        },
        handleSearchData (keyword) {
            const searchData = cloneDeep(this.tagSearchSourceData)
            const dataResult = []

            for (const item of searchData.keys()) {
                const data = {
                    _parent: item
                }

                const cloneItem = cloneDeep(item)

                const TITLE = cloneItem.length && cloneItem.shift()
                const _title = TITLE.title
                const _subtitle = cloneItem.map(i => i.title).join('-')

                const itemValue = searchData.get(item)
                const result = itemValue.filter(i => i.title.toLowerCase().includes((keyword || '').toLowerCase()))

                if (result.length) {
                    data._children = result
                    data._title = _title
                    data._subtitle = _subtitle
                    dataResult.push(data)
                }
            }

            return dataResult
        },
        handleChange (activeKey) {
            this.activeId = activeKey
        },
        handleTagSelect (target) {
            const selectedTag = cloneDeep(this.selectedTag)

            const tagIndex = selectedTag.findIndex(i => i.tagId === target.tagId)

            if (tagIndex > -1) {
                selectedTag.splice(tagIndex, 1)
            } else {
                selectedTag.push(target)
            }

            this.$emit('update', selectedTag)
        },
        handleClose () {
            this.$emit('close')
        }
    },
    beforeCreate () {
        this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE
    }
}
</script>

<style lang="less" scoped>
.tag-panel {
    width: 800px;
    border-radius: 4px;
    &__hd {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 16px;
        border-bottom: 1px solid #e8e8e8;
        .search-input {
            width: 320px;
        }
        .search-btn {
            margin-left: 20px;
        }
    }
    &__bd {
        width: 100%;
        height: 520px;
        &-search {
            height: 520px;
            padding: 16px;
            overflow-y: auto;
            .search-item {
                margin-bottom: 24px;
                &:last-child {
                    margin-bottom: 0;
                }
                .title {
                    margin-bottom: 10px;
                    font-weight: 700;
                    font-size: 14px;
                }
                .subtitle {
                    margin-left: 6px;
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.65);
                    font-weight: 400;
                }
            }
        }
        .ant-tag {
            margin-bottom: 8px;
        }
    }
    &-treepanel {
        width: 240px;
        height: 520px;
        overflow: auto;
    }
    &__main {
        display: flex;
        align-items: center;
        &-block {
            flex: 1;
            height: 520px;
            padding: 16px;
            overflow-y: auto;
            border-left: 16px solid #f7f8fa;
        }
    }
}
@media screen and (max-width: 1440px) {
    .tag-panel {
        width: 640px;
        &__bd {
            height: 400px;
            &-search {
                height: 400px;
            }
        }
        &-treepanel {
            height: 400px;
            overflow: auto;
        }
        &__main {
            &-block {
                height: 400px;
            }
        }
    }
}
</style>
