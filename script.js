createGrid(16);

const button = document.querySelector('#clear');
button.addEventListener('click', () => {
    let input = window.prompt("How many squares do you want per side for the new grid?");
    createGrid(input);
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
}