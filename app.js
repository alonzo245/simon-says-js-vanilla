const buttons = [
    'redBtn',
    'yellowBtn',
    'greenBtn',
    'blueBtn'
]

let playerSequnce = []
let sequence = ['greenBtn', 'redBtn', 'yellowBtn', 'blueBtn']
// let sequence = ['greenBtn']

const clickedBtn = e => {
    playerSequnce.push(e.target.id)
    console.log('playerSequnce: ', playerSequnce)
    const slicedSequnace = [...sequence].slice(0, playerSequnce.length)
    console.log('slicedSequnace: ', slicedSequnace)
    console.log(sequenceEqualCheck(slicedSequnace, playerSequnce))

    if(!sequenceEqualCheck(slicedSequnace, playerSequnce)){
        alert('wrong..... :(')
        window.location.reload()
    }
    if (sequence.length === playerSequnce.length && sequenceEqualCheck(slicedSequnace, playerSequnce)) {
        alert('yayyyyyy....')
    }
}

for (let i = 0; i < buttons.length; i++) {
    // console.log(buttons)
    document.getElementById(buttons[i])
        .addEventListener('click', clickedBtn)
}

const initGame = sequence => {
    let time = 0;
    for (let i = 0; i < sequence.length; i++) {
        time += 1000;
        setTimeout(() => {
            document.getElementById(sequence[i])
                .style.opacity = 0.5;

            setTimeout(() => {
                document.getElementById(sequence[i])
                    .style.opacity = 1;
            }, 500);
        }, time);
    }
}

const sequenceEqualCheck = (a, b) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

setTimeout(initGame(sequence), 1000);