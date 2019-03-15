//TODO: Check if user prompt input is a valid number
//TODO: Resize row heights to dynamically fit screen height
//TODO: Get 'hover off' effect to be delayed

//Initialize prompt messages
const promptMsg = 'Please enter an integer less than or equal to 200. This integer that will be the dimensions of your new grid. ' +
    '(For example, entering 16 will create a 16x16 grid.)';
const errorPrompt = 'Invalid input. Please enter an integer number less than 250.';
//Initialize initial dimensions
let dimensions = 16;
//Get references to grid container, button container, and grid height
const gridContainer = document.querySelector('.gridContainer');
const btnContainer = document.querySelector('.btnContainer button');
const gridHeight = getComputedStyle(gridContainer).height;

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
    console.log('creategrid');
    setRowHeight();
    enableSketch();
}

/* Calculate and set row height using gridContainer height divided by (# of columns - 1)*/
function setRowHeight() {
    let heightElems = document.querySelectorAll('div.unit p');
    Array.from(heightElems).forEach((h) => heightElems.style = `height: calc(${gridHeight}/(${dimensions}-1))`);
}

/* Allow grid units to be drawn on by adding and removing a CSS class */
function enableSketch() {
    console.log('enable sketch');
    let units = document.getElementsByClassName('unit');
    Array.from(units).forEach((unit) => {
        unit.addEventListener('mouseenter', function () {
            unit.classList.add('active');

        });
        //Delayed removal of CSS class for a trailing effect
        unit.addEventListener('mouseleave', function () {
            setTimeout(() => unit.classList.remove('active'), 4000);

        });
    });
}
//Get dimensions from user 
btnContainer.addEventListener('click', function () {
    let rem = dimensions%1;
    //checks if input is a valid input (integer <= 200)
    do {
        if((rem===0)&&(dimensions<=200)) { dimensions = prompt(promptMsg); }
        else { dimensions = prompt(errorPrompt); }
        rem = dimensions % 1;

    } while ((rem % 1 != 0) || (dimensions > 200))

    //add check to see if input is a number and keep prompting until it is
    createGrid(dimensions * dimensions);

});

window.onload = function () {
    createGrid(dimensions * dimensions);
}
