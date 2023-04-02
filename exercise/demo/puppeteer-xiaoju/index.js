const puppeteer = require("puppeteer")
const fs = require("fs")
const path = require("path")
const $http = require("axios")

const urlList = [
    { name: "xiaoju", url: "https://omgup.xiaojukeji.com/api/smallstat/x?count=6&e=am_c_charge_chargehomepage_storelist_sw" }
]
puppeteer.launch().then(async browser => {
    // const page = await browser.newPage()
    //封装单个网页爬取链接函数
    async function getLinkList (url, fileName) {
        const { res } = await $http.get(url)

        // 打开链接
        // await page.goto(url)
        // let result = await page.evaluate(async () => {
        //     const $http = require("axios")
        //     const { res } = await $http.get(url)
        //     return res
        //     // const items = [...document.querySelectorAll(".zst_list_con>ul")]
        //     // return items.map(item => {
        //     //     // 分组标题
        //     //     let titleLink = item.querySelector(".zst_list_name>a")
        //     //     //分组下链接li
        //     //     let contentLink = [...item.querySelectorAll("li")]
        //     //     let list = contentLink.map(item => {
        //     //         // li下a链接
        //     //         let a_list = [...item.querySelectorAll("a")]
        //     //         return a_list.map(a => {
        //     //             return { title: a.innerText, href: a.href }
        //     //         })
        //     //     })
        //     //     // 返回所有查询结果
        //     //     return { title: titleLink.innerText, href: titleLink.href, list: list }
        //     // })
        // })
        // 将爬取的数据保存到本地
        fs.writeFile(`./${fileName}.json`, JSON.stringify(res), "utf8", function (
            error
        ) {
            if (error) {
                console.log(error)
                return false
            }
            console.log(fileName + "数据写入成功！")
        })
        // await page.close();
    }

    // 打开多个网页异步队列
    async function openUrlList () {
        for (let i = 0; i < urlList.length; i++) {
            await getLinkList(urlList[i].url, urlList[i].name)
        }
    }

    // 执行异步队列
    await openUrlList()
    //关闭浏览器
    await browser.close()
})