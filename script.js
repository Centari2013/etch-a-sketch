const body = document.querySelector("body");
const mainDiv = document.createElement("div");
const topDiv = document.createElement("div");
const clearButton = document.createElement("button");
const gridDiv = document.createElement("div");
const title = document.createElement("header");

body.style.fontFamily = "Times New Roman";
title.textContent = "Etch-A-Sketch";
title.style.fontSize = "40px";
topDiv.setAttribute("style", "display: grid; grid-template-columns: repeat(2, 1fr);width: 90vh; margin: 0 auto")
setGridDiv();
setClearButton();

mainDiv.appendChild(title);
topDiv.appendChild(title);
topDiv.appendChild(clearButton);
mainDiv.appendChild(topDiv);
mainDiv.appendChild(gridDiv);
body.appendChild(mainDiv);

function setGridDiv() {
    gridDiv.setAttribute("id", "main-div");
    gridDiv.setAttribute("style", "display: grid; border: solid black; height: 90vh; width: 90vh; margin: 0 auto");
    setGridElements(setGridSize(gridDiv));
}

function setClearButton() {
    clearButton.textContent = "Clear Grid";
    clearButton.setAttribute("style", "border: gray 1px; margin: 10px; width: 25vh; height: 5vh; font-size: 25px; justify-self: end");
    clearButton.style.fontFamily = "Times New Roman";
    clearButton.addEventListener("click", function() {
        clearGridElements(); 
        let gridSize = userGridSizeInput();
        setGridElements(setGridSize(gridDiv, gridSize, gridSize));
    });
}

function userGridSizeInput() {
    let userGridSize = parseInt(prompt("How many squares per side would you like?", "16"));
    while (userGridSize > 100 || userGridSize < 1){
        alert("Please enter a number from 1 to 100.");
        userGridSize = parseInt(prompt("How many squares per side would you like?", "16"));
    }
    return userGridSize;
}

function clearGridElements() { //deletes grid
    while(gridDiv.firstChild) {
        gridDiv.removeChild(gridDiv.firstChild);
    }
}

function setGridSize(div = gridDiv, width = 16, height = 16) {
    div.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    div.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    return width * height;
}

function setGridElements(gridSize = 16 * 16) { //makes new grid
    for (let i = 0; i < gridSize; i++){
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.setAttribute("style", "border-top: dotted black 1px; border-right: dotted black 1px; height: auto; width: auto;");
        gridItem.addEventListener("mouseover", function() {
            changeColor(gridItem, "tomato")
        });
        gridDiv.appendChild(gridItem);
    }
}

function changeColor(item, color = "blue") {
    item.style.backgroundColor = color;
}


