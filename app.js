

let dimensions = 16;
const gridContainer = document.querySelector('.gridContainer');
const btnContainer = document.querySelector('.btnContainer button');


function removeGrid(){
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
}

btnContainer.addEventListener('click', function(){
    dimensions = prompt('Enter a number that will be the dimensions of your new grid. (For example, entering 16 will create a 16x16 grid.)');
    //add check to see if input is a number and keep prompting until it is
    createGrid(dimensions*dimensions);

});

window.onload = function() {
createGrid(dimensions*dimensions);
}
