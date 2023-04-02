const $http = require('axios')


$http({
    method: 'post',
    url: 'https://energy.xiaojukeji.com/station-api/station/search',
    headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
        // msgid: '118077e3-c01f-4d34-8d74-cb490c192337-14',
        // oid: '7301fedf-134b-4c2d-8fca-903896173891'
    },
    data: {
        'source': 2,
        'ttid': 'wx',
        'wsgsig': 'dd03-3j2KQFZBIPkLBWs90%2FaSnrOd4IdKFDcKFUdys%2Frc4IdJA0XDgAxRmBOCJZkJAmoIDE9Xla%2FBKHZIftse0AdZtBwAHPALeGoI091znaqCHPF7etuNb96omaOFHwO'
    }
})
    .then((response) => {
        console.log('response', response)
    }, (err) => {
        console.log('err', err)
    })

    // https://energy.xiaojukeji.com/station-api/station/search?source=2&ttid=wx&wsgsig=dd03-3j2KQFZBIPkLBWs90%2FaSnrOd4IdKFDcKFUdys%2Frc4IdJA0XDgAxRmBOCJZkJAmoIDE9Xla%2FBKHZIftse0AdZtBwAHPALeGoI091znaqCHPF7etuNb96omaOFHwO