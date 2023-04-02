// console.log('start1')
// setTimeout(() => {
//     console.log('start2-1')
//     Promise.resolve().then(() => console.log('start2 - 2'))
// }, 100)
// setTimeout(() => {
//     console.log('start3-1')
//     Promise.resolve().then(() => console.log('start3 - 2'))
// }, 100)
// Promise.resolve().then(() => console.log('start4'))
// console.log('start5')

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('chengong')
    })
}).then(res => {
    console.log('res', res)
})

setTimeout(() => {
    console.log('2222')
})