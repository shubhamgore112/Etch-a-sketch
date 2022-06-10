const con = document.querySelector('.sketch-container');
const main = document.querySelector('.main-container');
const clearBtn = document.getElementById('clear-button');
const clearBtnFunc = clearBtn.addEventListener('click',clearGrid);
let currentSize=16;
const sizeOfDiv = document.getElementById("size-button");
const setSizeFunc = sizeOfDiv.addEventListener('click',changeSize);
// const number = size();
// select size for div box
function size(){
    const number= prompt("Enter length for box:",16);
    if(number==null||number>100){
        number==16;
    }
    currentSize = number;   
}

function clearGrid(){
    con.innerHTML = '';
    console.log("clear run");
}

function changeSize(){
    size();
    con.innerHTML = '';
    // clearGrid();
    setUpGrid(currentSize)
}





// each row contains 16 ele ie 16 cols
function setUpGrid(size){
    // let colWidth = 100/size;
    // console.log(colWidth);
    for(let i=0; i<size; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        // gridRow.setAttribute('style','height:rowWidth%');
        for(let i=0; i<size; i++){
            const gridCol = document.createElement('div');
            gridCol.classList.add('grid-column');
            gridCol.addEventListener('mouseover',()=>{
                gridCol.setAttribute('style','background-color:black');
                // gridCol.setAttribute('style','width:colWidth%');
                // gridCol.setAttribute('style','height:colWidth%');
                // const colStyle = window.getComputedStyle(gridCol);
                // console.log(colStyle);
            });
            // 100/n should be size of column,how?
            
            gridRow.appendChild(gridCol);
        }
        con.appendChild(gridRow);
    }
}


function clearGrid(){
    const clrCol = document.querySelectorAll('.grid-column');
    for(let i = 0;i<clrCol.length;i++){
        clrCol[i].setAttribute('style','background-color:white');
    }
}

window.onload=()=>{
    setUpGrid(currentSize);
}
