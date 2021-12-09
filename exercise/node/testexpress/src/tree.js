const strategy = [
    {
        label: "产品研发部",
        level: 1,
        id: '1-1',
        nodeType: 'node',
        childrenType: 'node',
        children: [
            {
                label: "研发-前端",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-1-1'
            },
            {
                label: "研发-后端",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-1-2'
            },
            {
                label: "UI 设计",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-1-3'
            }
        ]
    },
    {
        label: "销售部",
        level: 1,
        id: '1-2',
        nodeType: 'node',
        childrenType: 'node',
        children: [
            {
                label: "销售一部",
                level: 2,
                id: '1-2-1',
                nodeType: 'node',
                childrenType: 'node',
                children: [
                    {
                        label: "销售一部甲部",
                        id: '1-2-1-1',
                        level: 3,
                        nodeType: 'node',
                        childrenType: null,
                    },
                    {
                        label: "销售一部乙部",
                        id: '1-2-1-2',
                        level: 3,
                        nodeType: 'node',
                        childrenType: null,
                    }
                ]
            },
            {
                label: "销售二部",
                level: 2,
                id: '1-2-2',
                nodeType: 'node',
                childrenType: 'node',
            }
        ]
    },
]

const manage = [
    {
        label: "产品研发部",
        level: 1,
        id: '1-1',
        nodeType: 'node',
        childrenType: 'node',
        children: [
            {
                label: "研发-前端",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-1-1'
            },
            {
                label: "研发-后端",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-1-2'
            },
            {
                label: "UI 设计",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-1-3'
            }
        ]
    },
    {
        label: "销售部",
        level: 1,
        id: '1-2',
        nodeType: 'node',
        childrenType: 'node',
        children: [
            {
                label: "销售一部",
                level: 2,
                id: '1-2-1',
                nodeType: 'node',
                childrenType: 'node',
                children: [
                    {
                        label: "销售一部甲部",
                        id: '1-2-1-1',
                        level: 3,
                        nodeType: 'node',
                        childrenType: null,
                    },
                    {
                        label: "销售一部乙部",
                        id: '1-2-1-2',
                        level: 3,
                        nodeType: 'node',
                        childrenType: null,
                    }
                ]
            },
            {
                label: "销售二部",
                level: 3,
                id: '1-2-2',
                nodeType: 'node',
                childrenType: 'node',
            }
        ]
    },
    {
        label: "财务部",
        level: 1,
        id: '1-3',
        nodeType: 'node',
        childrenType: 'node',
        children: [
            {
                label: "财务部甲部",
                level: 2,
                id: '1-3-1',
                nodeType: 'node',
                childrenType: 'file',
                children: [
                    {
                        label: 'xxxx1',
                        nodeType: 'file',
                        childrenType: null,
                        level: 3,
                        processType: '制度',
                        id: '1-3-1-1',
                        href: 'https://www.baidu.com'
                    },
                    {
                        label: 'xxxx2',
                        level: 3,
                        nodeType: 'file',
                        processType: '流程',
                        childrenType: null,
                        id: '1-3-1-2',
                        href: 'https://www.baidu.com'
                    },
                    {
                        label: 'xxxx3',
                        level: 3,
                        nodeType: 'file',
                        processType: '流程',
                        childrenType: null,
                        id: '1-3-1-3',
                        href: 'https://www.baidu.com'
                    },
                    {
                        label: 'xxxx4',
                        level: 3,
                        nodeType: 'file',
                        processType: '制度',
                        childrenType: null,
                        id: '1-3-1-4',
                        href: 'https://www.baidu.com'
                    },
                    {
                        label: 'xxxx5',
                        level: 3,
                        nodeType: 'file',
                        processType: '流程',
                        childrenType: null,
                        id: '1-3-1-5',
                        href: 'https://www.baidu.com'
                    },
                    {
                        label: 'xxxx6',
                        level: 3,
                        nodeType: 'file',
                        processType: '制度',
                        childrenType: null,
                        id: '1-3-1-6',
                        href: 'https://www.baidu.com'
                    },
                    {
                        label: 'xxxx7',
                        level: 3,
                        nodeType: 'file',
                        processType: '流程',
                        childrenType: null,
                        id: '1-3-1-7',
                        href: 'https://www.baidu.com'
                    },
                    {
                        label: 'xxxx8',
                        level: 3,
                        nodeType: 'file',
                        processType: '流程',
                        childrenType: null,
                        id: '1-3-1-8',
                        href: 'https://www.baidu.com'
                    },
                    {
                        label: 'xxxx9',
                        level: 3,
                        nodeType: 'file',
                        processType: '制度',
                        childrenType: null,
                        id: '1-3-1-9',
                        href: 'https://www.baidu.com'
                    },
                ]

            },
            {
                label: "财务部乙部",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-3-2'
            }
        ]
    }
]

const support = [
    {
        label: "产品研发部",
        level: 1,
        id: '1-1',
        nodeType: 'node',
        childrenType: 'node',
        children: [
            {
                label: "研发-前端",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-1-1'
            },
            {
                label: "研发-后端",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-1-2'
            },
            {
                label: "UI 设计",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-1-3'
            }
        ]
    },
    {
        label: "销售部",
        level: 1,
        id: '1-2',
        nodeType: 'node',
        childrenType: 'node',
        children: [
            {
                label: "销售一部",
                level: 2,
                id: '1-2-1',
                nodeType: 'node',
                childrenType: 'node',
                children: [
                    {
                        label: "销售一部甲部",
                        id: '1-2-1-1',
                        nodeType: 'node',
                        childrenType: 'node',
                        level: 3,
                        children: [
                            {
                                label: "销售一部甲部A部",
                                id: '1-2-1-1-1',
                                nodeType: 'node',
                                childrenType: 'node',
                                level: 4,
                                children: [
                                    {
                                        label: "销售一部甲部A部a部",
                                        id: '1-2-1-1-1-1',
                                        nodeType: 'node',
                                        childrenType: 'node',
                                        level: 5,
                                        children: [
                                            {
                                                label: "销售一部甲部A部a部1部",
                                                id: '1-2-1-1-1-1-1',
                                                nodeType: 'node',
                                                childrenType: null,
                                                level: 6,
                                            },
                                            {
                                                label: "销售一部甲部A部a部2部",
                                                id: '1-2-1-1-1-1-2',
                                                nodeType: 'node',
                                                childrenType: 'file',
                                                level: 6,
                                                children: [
                                                    {
                                                        label: 'xxxx1',
                                                        nodeType: 'file',
                                                        childrenType: null,
                                                        processType: '流程',
                                                        level: 7,
                                                        id: '1-2-1-1-1-1-2-1',
                                                        href: 'https://www.baidu.com'
                                                    },
                                                    {
                                                        label: 'xxxx2',
                                                        level: 7,
                                                        nodeType: 'file',
                                                        childrenType: null,
                                                        processType: '制度',
                                                        id: '1-2-1-1-1-1-2-2',
                                                        href: 'https://www.baidu.com'
                                                    },
                                                    {
                                                        label: 'xxxx3',
                                                        level: 7,
                                                        nodeType: 'file',
                                                        childrenType: null,
                                                        processType: '制度',
                                                        id: '1-2-1-1-1-1-2-3',
                                                        href: 'https://www.baidu.com'
                                                    },
                                                ]
                                            },
                                            {
                                                label: "销售一部甲部A部a部3部",
                                                id: '1-2-1-1-1-1-3',
                                                nodeType: 'node',
                                                childrenType: null,
                                                level: 6,
                                            }
                                        ]
                                    },
                                    {
                                        label: "销售一部甲部A部b部",
                                        id: '1-2-1-1-1-2',
                                        nodeType: 'node',
                                        childrenType: 'node',
                                        level: 5,
                                        children: [
                                            {
                                                label: "销售一部甲部A部b部2部",
                                                id: '1-2-1-1-1-2-1',
                                                nodeType: 'node',
                                                childrenType: 'file',
                                                level: 6,
                                                children: [
                                                    {
                                                        label: 'xxxx1',
                                                        nodeType: 'file',
                                                        childrenType: null,
                                                        processType: '流程',
                                                        level: 7,
                                                        id: '1-2-1-1-1-2-1-1',
                                                        href: 'https://www.baidu.com'
                                                    },
                                                    {
                                                        label: 'xxxx2',
                                                        level: 7,
                                                        nodeType: 'file',
                                                        childrenType: null,
                                                        processType: '制度',
                                                        id: '1-2-1-1-1-2-1-2',
                                                        href: 'https://www.baidu.com'
                                                    },
                                                    {
                                                        label: 'xxxx3',
                                                        level: 7,
                                                        nodeType: 'file',
                                                        childrenType: null,
                                                        processType: '制度',
                                                        id: '1-2-1-1-1-2-1-3',
                                                        href: 'https://www.baidu.com'
                                                    },
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: "销售一部乙部",
                        id: '1-2-1-2',
                        nodeType: 'node',
                        childrenType: null,
                        level: 3,
                    }
                ]
            },
            {
                label: "销售二部",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-2-2',
            },
            {
                label: "销售三部",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-2-3',
            },
            {
                label: "销售四部",
                level: 2,
                nodeType: 'node',
                childrenType: null,
                id: '1-2-4',
            }
        ]
    },
    {
        label: "财务部",
        level: 1,
        id: '1-3',
        nodeType: 'node',
        childrenType: 'file',
        children: [
            {
                label: 'xxxx1',
                nodeType: 'file',
                childrenType: null,
                processType: '流程',
                level: 2,
                id: '1-3-1',
                href: 'https://www.baidu.com'
            },
            {
                label: 'xxxx2',
                level: 2,
                nodeType: 'file',
                childrenType: null,
                processType: '制度',
                id: '1-3-2',
                href: 'https://www.baidu.com'
            },
            {
                label: 'xxxx3',
                level: 2,
                nodeType: 'file',
                childrenType: null,
                processType: '制度',
                id: '1-3-3',
                href: 'https://www.baidu.com'
            },
            {
                label: 'xxxx4',
                level: 2,
                nodeType: 'file',
                childrenType: null,
                processType: '流程',
                id: '1-3-4',
                href: 'https://www.baidu.com'
            },
            {
                label: 'xxxx5',
                level: 2,
                nodeType: 'file',
                childrenType: null,
                processType: '流程',
                id: '1-3-5',
                href: 'https://www.baidu.com'
            },
            {
                label: 'xxxx6',
                level: 2,
                nodeType: 'file',
                childrenType: null,
                processType: '流程',
                id: '1-3-6',
                href: 'https://www.baidu.com'
            },
            {
                label: 'xxxx7',
                level: 2,
                nodeType: 'file',
                childrenType: null,
                processType: '制度',
                id: '1-3-7',
                href: 'https://www.baidu.com'
            },
            {
                label: 'xxxx8',
                level: 2,
                nodeType: 'file',
                childrenType: null,
                processType: '制度',
                id: '1-3-8',
                href: 'https://www.baidu.com'
            },
            {
                label: 'xxxx9',
                level: 2,
                nodeType: 'file',
                childrenType: null,
                processType: '流程',
                id: '1-3-9',
                href: 'https://www.baidu.com'
            },
        ]
    }
]

module.exports = {
    strategy,
    manage,
    support
}