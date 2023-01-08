function brush() {
    return gridContainer.addEventListener('mousemove', (e) => {
        if (e.target.classList.value === "grid-column") {
            e.target.style.cssText =  `background-color: ${colorPicker.value};`;
        }
    });
};

function randomColor() {
    const randomNum = Math.floor(Math.random()*14);
    return rgbColors[randomNum];
};

function eraser() {
    gridContainer.addEventListener('mousemove', (e) => {
        if (e.target.classList.value === "grid-column") {
            e.target.style.cssText =  `background-color: transparent};`;
        };
    });  
};

function sketchPad() {
    gridPerRow = +slider.value;
    gridContainer.innerHTML = "";
    for (let i = 0; i < (gridPerRow * gridPerRow); i++) {
        const columnNode = document.createElement("div");
        gridContainer.appendChild(columnNode);
        columnNode.classList.add("grid-column"); 
    };
    gridContainer.style.cssText = `grid-template-columns: repeat(${gridPerRow}, 1fr); grid-template-rows: repeat(${gridPerRow}, 1fr);`;
    columns = document.querySelectorAll('.grid-column');
};

//Random color from rgbColors Array
function randomColor() {
    const randomNum = Math.floor(Math.random()*14);
    return rgbColors[randomNum];
};

const slider = document.querySelector('#slider');
const sliderTitle = document.querySelector('#slider-title');
const gridContainer = document.querySelector('.grid');
const colorPicker = document.querySelector('#color-picker');
let columns = "";
let gridPerRow = 0;
const clearButton = document.querySelector('#clear');
const eraserButton = document.querySelector('#eraser');
const brushButton = document.querySelector('#brush');
const rgbColors = ['#fe9900', '#fe0002', '#02cd02', '#02aff3', '#fcec1b', '#b201ef', '#ff0066', '#0170c1', '#ff2929', '#03ae4f', '#fd7402', '#fd7402', '#ff0066', '#fcec1b', '#ca32ff'];
const rgbButton = document.querySelector('#rgb');
const buttons = document.querySelectorAll('.control-btn');

addEventListener('load', () => {
    sketchPad();
    brush();
    brushButton.classList.add('active');
});

//Slider Label 
slider.addEventListener('input', () => {
    sliderTitle.textContent = `${slider.value} x ${slider.value}`;
});

//sketchPad's number of columns change with slider
slider.addEventListener('change', () => {
    sketchPad();

});



//clear
clearButton.addEventListener('click', (e) => {
    columns.forEach(column => {
        column.style.backgroundColor = "transparent";
    });

    eraser();
});

//erase
eraserButton.addEventListener('click', (e) => {
    eraser();

});

//brush
brushButton.addEventListener('click', (e) => {
    brush();
});

//RGB
rgbButton.addEventListener('click', (e) => {
    gridContainer.addEventListener('mousemove', (e) => {
        if (e.target.classList.value === "grid-column") {
            e.target.style.cssText =  `background-color: ${randomColor()};`;
        };
    });

});


//Add & remove active class
for (let button of buttons) {
    
    button.addEventListener('click', (e) => {
        let active = document.querySelector('.active');
        if(active) {
            active.classList.remove('active');
        };
        e.target.classList.add('active');

        function removeActiveClear() {
            return clearButton.classList.remove('active');
        };
        if (clearButton.classList.value === 'control-btn active') {
            setTimeout(removeActiveClear, 100);
        };
    });
};



