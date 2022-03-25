// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    grid = document.getElementById("grid"); // The <table> with id "grid" in the index.html file.
    row = grid.insertRow(numRows); // Creates a new row and adds it to the table.
    cell = row.insertCell(numCols); // Creates a new cell for the newly created row.
}

// Add a column
function addC() {

}

// Remove a row
function removeR() {
    document.getElementById("grid").deleteRow(numRows);
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}