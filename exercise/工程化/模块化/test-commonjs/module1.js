module.exports = {
    count: 1,
    obj: {
        name: 'fisher'
    },
    msg: 'module1',
    foo () {
        console.log(this.msg)
    },
    addCount () {
        this.count++
    },
    showCount () {
        return this.count
    }
}