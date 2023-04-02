let i = 1

function simpleCount () {
    i++
    self.postMessage(i)
    setTimeout(simpleCount, 1000)
}

simpleCount()

self.onmessage = ev => {
    console.log('ev', ev)
    postMessage(ev.data + ' 呵呵~')
}