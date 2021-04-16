const body = document.querySelector("body");
const buttonDiv = document.createElement("div");
const clearButton = document.createElement("button");
const mainDiv = document.createElement("div");

setMainDiv();
setClearButton();

buttonDiv.appendChild(clearButton);
body.appendChild(buttonDiv);
body.appendChild(mainDiv);

function setMainDiv() {
    mainDiv.setAttribute("id", "main-div");
    mainDiv.setAttribute("style", "display: grid; border: solid black; height: 750px; width: 750px")
    setGridElements(setGridSize(mainDiv));
}

function setClearButton() {
    clearButton.textContent = "Clear Grid";
    clearButton.setAttribute("style", "border: gray 1px;");
    clearButton.addEventListener("click", function() {
        clearGridElements();
        let gridSize = userGridSizeInput();
        setGridElements(setGridSize(mainDiv, gridSize, gridSize));
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

function clearGridElements() {
    while(mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
    }
}

function setGridSize(div = mainDiv, width = 16, height = 16) {
    div.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    div.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    return width * height;
}

function setGridElements(gridSize = 16 * 16) {
    for (let i = 0; i < gridSize; i++){
        let gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.setAttribute("style", "border: solid black 1px; height: auto; width: auto;");
        gridItem.addEventListener("mouseover", function() {
            changeColor(gridItem, "tomato")
        });
        mainDiv.appendChild(gridItem);
    }
}

function changeColor(item, color = "blue") {
    item.style.backgroundColor = color;
    console.log("Color is being changed.");
}


