(function () {
    require.config({
        baseUrl: 'js/', // 基本路径 基于根目录
        paths: {
            alerter: './modules/alerter',
            dataService: './modules/dataService'
        }
    })
    require(['alerter'], function (alerter) {
        alerter.showMsg()
    })
})()