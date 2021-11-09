// Retrieve the needed HTML elements:
let colorSelection = document.getElementById('colorSelection');
let drawingBoard = document.getElementById('drawingBoard');
let brush = 0;
// Associate color names to RGB values
let colors = {
    Red: 'rgb(255, 0, 0)',
    Orange: 'rgb(250, 150, 0)',
    Yellow: 'rgb(255, 255, 0)',
    Green: 'rgb(0,255,0)',
    Blue: 'rgb(0,0,255)',
    Violet: 'rgb(255,0,255)',
    White: 'rgb(255, 255, 255)',
    Black: 'rgb(0, 0, 0)',
};



displayPx();

// The drawingBoard squares will be stored in this table for later use:
let squares = [];

// Create the drawingBoard squares:
for (let i = 0; i < 600; i++) {
    // Create new drawingBoard square
    let square = document.createElement('div');

    square.style.height = '20px';
    square.style.width = '20px';
    square.style.float = 'left';
    square.style.backgroundColor = colors['White'];
    square.value = i;

    var isDown = false;

    square.onmousedown = () => {
        let colour = document.getElementById("colorpicker").value;
        isDown = true;
        if (brush == 1) {
            // Set color of square to selected color
            // console.log(squares[square.value].value)
            squares[square.value].style.backgroundColor = colour;
            // console.log("1")
        } else if (brush == 2) {
            for(i = 0; i < 2; i++){
                squares[square.value+i].style.backgroundColor = colour;
                for(j = 30; j <= 30+i; j++){
                    squares[square.value+j].style.backgroundColor = colour;
                }
            }
            // console.log("2")
        } else if (brush == 3) {
            for(i = 0; i < 3; i++){
                squares[square.value+i].style.backgroundColor = colour;
                for(j = 30; j <= 30+i; j++){
                    squares[square.value+j].style.backgroundColor = colour;
                    for(k = 60; k <= 60+i; k++){
                        squares[square.value+k].style.backgroundColor = colour;
                    }
                }
            }
            // console.log("3")
        } else if (brush == 4) {
            for(i = 0; i < 4; i++){
                squares[square.value+i].style.backgroundColor = colour;
                for(j = 30; j <= 30+i; j++){
                    squares[square.value+j].style.backgroundColor = colour;
                    for(k = 60; k <= 60+i; k++){
                        squares[square.value+k].style.backgroundColor = colour;
                        for(l = 90; l <= 90+i; l++){
                            squares[square.value+l].style.backgroundColor = colour;
                        }
                    }
                }
            }
            // console.log("4")
        }
    }
    square.onmouseup = () => {
        isDown = false;
    }

    square.onmousemove = (event) => {
        let colour = document.getElementById("colorpicker").value;
        if(isDown == true){
            if (brush == 1) {
                // Set color of square to selected color
                // console.log(squares[square.value].value)
                squares[square.value].style.backgroundColor = colour;
                // console.log("1")
            } else if (brush == 2) {
                for(i = 0; i < 2; i++){
                    squares[square.value+i].style.backgroundColor = colour;
                    for(j = 30; j <= 30+i; j++){
                        squares[square.value+j].style.backgroundColor = colour;
                    }
                }
                // console.log("2")
            } else if (brush == 3) {
                for(i = 0; i < 3; i++){
                    squares[square.value+i].style.backgroundColor = colour;
                    for(j = 30; j <= 30+i; j++){
                        squares[square.value+j].style.backgroundColor = colour;
                        for(k = 60; k <= 60+i; k++){
                            squares[square.value+k].style.backgroundColor = colour;
                        }
                    }
                }
                // console.log("3")
            } else if (brush == 4) {
                for(i = 0; i < 4; i++){
                    squares[square.value+i].style.backgroundColor = colour;
                    for(j = 30; j <= 30+i; j++){
                        squares[square.value+j].style.backgroundColor = colour;
                        for(k = 60; k <= 60+i; k++){
                            squares[square.value+k].style.backgroundColor = colour;
                            for(l = 90; l <= 90+i; l++){
                                squares[square.value+l].style.backgroundColor = colour;
                            }
                        }
                    }
                }
                // console.log("4")
            }

        }

    };


    // Add square as child to drawingBoard element
    drawingBoard.appendChild(square);
    // Add square to squares table
    squares.push(square);
}


document.getElementById("clear").onclick = () => {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "";
    }
}

document.getElementById("fill").onclick = () => {
    for (i = 0; i < squares.length; i++) {
        let colour = document.getElementById("colorpicker").value;
        squares[i].style.backgroundColor = colour;
    }
}

document.getElementById("size").oninput = () => displayPx();

function displayPx() {
    brush = document.getElementById("size").value;
    document.getElementById("sizeDisplay").innerHTML = `Brush size is: ${brush} x ${brush}`;
}