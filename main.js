let color = 'black';
let click = false;

document.addEventListener('DOMContentLoaded',  function() {
    createBox(16);

    let btn_popup = document.querySelector('#popup');
})

function createBox(size) {
    let box = document.querySelector('.box');

    let squares = box.querySelectorAll('div')
    squares.forEach((div) => div.remove());

    box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    box.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mousemove', colorDiv)
        box.insertAdjacentElement('beforeend', div);
    }
}

function changeSize(input) {
    if(input >=2 && input <= 100) {
        createBox(input);
    } else {
        alert('Number must be between 2 and 100');
    }
}

function colorDiv() {
    if(click) {
        if(color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
            this.style.backgroundColor = 'black'
        }
    }    
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white')
}

document.querySelector('body').addEventListener('click', () => {
    click = !click;
});