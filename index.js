//INFO - This is the simple tic-tac-toe game. It is a two player game. The players take turns clicking on the board to make their move. The first player to get three in a row wins. The game can be reset at any time by clicking the reset button.

// NOTE: Initialize the game board array
let board = [];

// NOTE: Initialize the plays made by player X
let xPlays = [];

// NOTE: Initialize the plays made by player O
let oPlays = [];

// NOTE: Define the winning combinations for the game
let winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // NOTE: Horizontal winning combos
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // NOTE: Vertical winning combos
  [1, 5, 9],
  [3, 5, 7], // NOTE: Diagonal winning combos
];

// NOTE: Set the default player to 'X'
currentPlayer = "X";

let winStatus = false;

// NOTE: Add event listener for resetting the board
document.getElementById("reset").addEventListener("click", resetBoard);

// NOTE: Attach click event listeners to each cell on the board
for (let i = 1; i <= 9; i++) {
  let cell = document.getElementById(i);
  cell.addEventListener("click", clickedSquare);
   
   
    function clickedSquare() {
    // NOTE: Check if the clicked cell is already in the board array and if the game has been won before accepting the move.
    if (!board.includes(i) && winStatus === false) {
    // NOTE: Add the clicked cell to the board array
    board.push(i);
    currentPlayer === "X" ? xPlays.push(i) : oPlays.push(i);

    // NOTE: Display the current player's move in the clicked cell
    cell.innerHTML = currentPlayer;

    // NOTE: Set cell color based on the current player
    cell.style.color = currentPlayer === "X" ? "red" : "blue";
    // NOTE: Toggle the current player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    // NOTE: Check for a winner
    checkWinner();
    }
  }
}


// NOTE: Function to reset the game board to its initial state
function resetBoard() {
  for (let i = 1; i <= 9; i++) {
    let cell = document.getElementById(i);

    // NOTE: Clear the content of the cell
    cell.innerHTML = "";

    // NOTE: Reset the cell color to black
    cell.style.color = "black";

    // NOTE: Reset the board array
    board = [];
    xPlays = [];
    oPlays = [];
  }
  // NOTE: Reset the message
  let message = document.getElementById("message");
  message.innerHTML = "Tic-Tac-Toe";
  message.style.color = "black";

  // NOTE: Reset the player to 'X'
  currentPlayer = "X";
  //NOTE - Reset the win status to false
  winStatus = false;
}

// NOTE: Function to check for a winner
function checkWinner() {
  // NOTE: Get the message element
  let winner = document.getElementById("message");
  
  // NOTE: Check if any of the winning combinations have been played by looping through the winningCombos array and looping through each of the winning combos arrays inside of it.
  for (let i = 0; i < winningCombos.length; i++) {
    for (let x = 0; x < winningCombos[x].length; x++) {
      if (
        xPlays.includes(winningCombos[i][x]) &&
        xPlays.includes(winningCombos[i][x + 1]) &&
        xPlays.includes(winningCombos[i][x + 2])
      ) {
        winner.innerHTML = "Player X wins!";
        winner.style.color = "red";
        winStatus = true;
      } else if (
        oPlays.includes(winningCombos[i][x]) &&
        oPlays.includes(winningCombos[i][x + 1]) &&
        oPlays.includes(winningCombos[i][x + 2])
      ) {
        winner.innerHTML = "Player O wins!";
        winner.style.color = "blue";
        winStatus = true;
      } else if (board.length === 9) {
        winner.innerHTML = "It's a tie!";
        
      }
    }
  }
}