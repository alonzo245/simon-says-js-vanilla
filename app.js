const buttons = [
    'redBtn',
    'yellowBtn',
    'greenBtn',
    'blueBtn'
]

const clickedBtn = e => {
    console.log(e.target.id)
}

for (let i = 0; i < buttons.length; i++) {
    // console.log(buttons)
    document.getElementById(buttons[i])
        .addEventListener('click', clickedBtn)
}