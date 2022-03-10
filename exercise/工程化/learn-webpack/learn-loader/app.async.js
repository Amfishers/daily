import txt from './fisher.txt'

function component () {
    var element = document.createElement('div')
    var button = document.createElement('button')
    var br = document.createElement('br')

    button.innerHTML = 'Click me and look at the console!'
    element.innerHTML = `【  ${txt} 】`
    element.className = 'hello'
    element.appendChild(br)
    element.appendChild(button)

    button.onclick = e => console.log('click')

    return element
}
document.body.appendChild(component())