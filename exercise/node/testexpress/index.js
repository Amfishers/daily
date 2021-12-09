const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const { strategy, manage, support } = require('./src/tree.js')

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


const levelData = {
    title: '置业集团',
    levels: [      // 头部层级显示层级数据，接口需返回已排序结果
        {
          name: 'L1',
          level: 1,
          count: 8
        },
        {
            name: 'L2',
            level: 2,
            count: 50
        },
        {
            name: 'L4',
            level: 3,
            count: 60
        },
        {
            name: 'L4',
            level: 4,
            count: 10
        },
        {
            name: 'L5',
            level: 5,
            count: 90
        },
    ],
    strategicLevel: {
        label: '战略层',
        // defaultExpandKeys: ['1-1', '1-2'], // 返回层级为 1 的唯一 key 值，数组格式
        treeData: strategy
    },
    managementLevel: {
        label: '经营层',
        treeData: manage
    },
    supportLevel: {
        label: '支撑层',
        treeData: support
    }
}

const catalogData = {
    title: '组织目录',
    levels: [
        {
            "name": "集团总部",
            "level": 0,
            "id": "17b869e55ff422da0cef8e140f6a62e4"
        },
        {
            "name": "置业集团",
            "level": 0,
            "id": "17b86a712b494fc6b97da43404e88ffd"
        },
        {
            "name": "正中建设",
            "level": 0,
            "id": "17b86a881f2bc4079517b734ba1a6915"
        }
    ]
}

var corsOptions = {
    origin: 'http://localhost:8080/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


// app.get('/level/getcatalog',  (req, res) => {
//     console.log('req', req.query)
//     res.send(catalogData)
// })

app.get('/genzon/zd/api/genzonZdApi.do', (req, res) => {
    const { method, parentId } = req.query
    let result = catalogData
    if (parentId) {
        result = levelData
    }
    res.send(result)
})

app.get('/level/getdata', (req, res) => {
    const { method, parentId } = req.query
    let result = catalogData
    if (parentId) {
        result = levelData
    }
    res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})