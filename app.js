//Initialize prompt messages
const promptMsg = 'Please enter an integer less than or equal to 150. This integer that will be the dimensions of your new grid. ' +
    '(For example, entering 16 will create a 16x16 grid.)';
const errorPrompt = 'Invalid input. Please enter an integer number less than 150.';
//Initialize initial dimensions
let dimensions = 16;
//Get references to grid container, buttons, and grid height
const gridContainer = document.querySelector('.gridContainer');
const gridHeight = getComputedStyle(gridContainer).height;
const clearBtn = document.querySelector('.clearBtn');
const rainbowBtn = document.querySelector('.rainbowBtn');


//removes current grid
function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


//Create a grid with specified dimensions (default is 16x16)
function createGrid(dimensionsInput) {
    //first remove current grid
    removeGrid();
    //change number of columns based on dimensions
    gridContainer.style = "grid-template-columns: repeat(" + Math.sqrt(dimensionsInput) + ", 1fr)";

    //create grids
    for (let i = 0; i < dimensionsInput; i++) {
        console.log('unit');
        let unit = document.createElement('div');
        unit.classList.add('unit');
        unit.textContent = ' ';
        gridContainer.appendChild(unit);

        //allows grid to display background color without text
        unit.appendChild(document.createElement('p'));
    }
    setRowHeight();
    enableSketch();
}

/* Calculate and set row height using gridContainer height divided by # of columns */
function setRowHeight() {
    let heightElems = document.querySelectorAll('div.unit p');
    Array.from(heightElems).forEach((h) => heightElems.style = `height: calc(${gridHeight}/${dimensions})`);
}

/* Allow grid units to be drawn on by adding a CSS class */
function enableSketch() {

    let units = document.getElementsByClassName('unit');
    Array.from(units).forEach((unit) => {
        //Addition of 'active' class when user hovers div to change color of div
        unit.addEventListener('mouseenter', function () {
            unit.classList.add('active');

        });

    });
}
//Make new grid using dimensions from user input if 'Clear Grid' button is clicked
clearBtn.addEventListener('click', function () {
    let rem = dimensions % 1;
    //checks if input is a valid input (integer <= 200)
    do {
        if ((rem === 0) && (dimensions <= 150)) { dimensions = prompt(promptMsg); }
        else { dimensions = prompt(errorPrompt); }
        rem = dimensions % 1;

    } while ((rem % 1 != 0) || (dimensions > 150))

    createGrid(dimensions * dimensions);

});

//Add to 'rainbow' effect to all units if rainbow button is clicked
rainbowBtn.addEventListener('click', function () {
    let r, g, b;
    let units = document.getElementsByClassName('unit');
    Array.from(units).forEach((unit) => {
        unit.addEventListener('mouseenter', function () {
            //randomly generate rgb value and make that the background
            r = Math.floor(Math.random() * 255) + 1;
            g = Math.floor(Math.random() * 255) + 1;
            b = Math.floor(Math.random() * 255) + 1;
            unit.style.background = `rgb(${r},${g},${b})`;

        });

    });

});

window.onload = function () {
    createGrid(dimensions * dimensions);
}
