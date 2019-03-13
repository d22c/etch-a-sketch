let dimensions = 16;
const container = document.querySelector('#container');
const clearBtn = document.querySelector('.clearBtn');


//Create a grid with specified dimensions (default is 16x16)
function createGrid(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < dimensions; j++) {
            let column = document.createElement('div');
            column.classList.add('.col');
            column.classList.add('col-1-16');
            row.appendChild(column);
        }
    }

    clearBtn.addEventListener('click', function(){
        dimensions = prompt('Enter a number that will be the dimensions of your new grid. (For example, entering 16 will create a 16x16 grid.)');
        //add check to see if input is a number and keep prompting until it is
        createGrid(dimensions);

    });
}