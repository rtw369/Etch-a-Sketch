createGrid(16)

const container = document.querySelector('#container');

const button = document.querySelector('#clear');
button.addEventListener('click', () => {
    let input = window.prompt("How many squares do you want per side for the new grid?");
    
    if(input < 100 && input > 0) {
        //clear elements
        const container = document.querySelector('#container');
        while(container.firstElementChild) {
            container.firstElementChild.remove();
        }

        createGrid(input);
    }
    else {
        alert("Number is either too big or too small, please try again.");
    }
    
});

// create grid of square divs
function createGrid(num){
    const container = document.querySelector('#container');

    for(let i = 0; i < num*num; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.className = "square";
        gridSquare.style.width = "" + (800 / num) + "px";
        gridSquare.style.height = "" + (800 / num) + "px";
        container.appendChild(gridSquare);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
        })
    })
}