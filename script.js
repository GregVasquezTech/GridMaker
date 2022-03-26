// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    grid = document.getElementById("grid"); // The <table> with id "grid" in the index.html file.
    row = grid.insertRow(-1); // Creates a new row and adds it to the table.
    cell = row.insertCell(0); // Creates a new cell for the newly created row.
    numRows = numRows + 1; // Updates the number of rows.
}

// Add a column
function addC() {
    grid = document.getElementById("grid"); // Opens the table with id = "grid"
    for(var i = 0, row; row = grid.rows[i]; i++){ // loops through all row in the table.
       column = row.insertCell(-1) // Creates a new cell in each row.
    }
    numCols +=1; // Updates the number of columns.

}

// Remove a row
function removeR() {
    document.getElementById("grid").deleteRow(numRows -1 ); // Opens the table and starts deleting rows starting from the bottom.
    numRows = numRows - 1; // Updates the number of rows.
}

// Remove a column
function removeC() {
    grid = document.getElementById("grid") // Opens the table and starts deleting colums starting from the right.
    for (var i = 0, row; row = grid.rows[i]; i++){ // Loops through each row.
       row.deleteCell(0); // deleting each cell in a single column.
    }
    numCols -= 1; // Updates the number of columns.
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
    grid = document.getElementById("grid");
    color.style.backgroundColor = colorSelected;
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}