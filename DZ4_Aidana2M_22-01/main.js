// 1
const span = document.querySelector('h1')
const clear = document.getElementById('clear')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')

plus.onclick = () => {
    span.innerText = Number(span.textContent) + 1
    span.style.color='green'
}
clear.onclick = () => {
    span.innerText = 0
    span.style.color='black'
}
minus.onclick = () => {
    if ( Number(span.textContent) >= 1) {
        span.innerText = Number(span.textContent) - 1
        span.style.color='red'
    }
}

// 2
const div = document.querySelector('.block')
const x = document.querySelector('.x')
const y = document.querySelector('.y')

div.addEventListener('mousemove', (event) => {
    x.innerText = 'X: ' + event.screenX;
    y.innerText = 'Y: ' + event.screenY;
})