// TODO
/// * Add a button/checkbox for a random computer player (dumb)
/// * CSS is still wonky af before a row is full, make players look nice
/// * Don't allow a player to take another's place (be careful about switching players)
/// * Force the game to stop after gameOver
/// * Maybe have a new game button that just resets the board and render()
/// * Scoreboard? That tracks X and Os across games.

var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = "X";

var WINS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [0,4,8]
];

function switchPlayer () {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function boardTemplate (board) {
  var spacesHtml = board.map(function (x) { return `<div class="space">${x}</div>`; });
  return `
    <div class="board">
      ${spacesHtml.join("\n")}
    </div>
  `;
}

function render () {
  var boardHTML = boardTemplate(board);
  var container = $(".container");
  container.append(boardHTML);
}

render();

function changeBackground (event) {
  var target = $(event.target);
  var color = Math.floor(Math.random() * 65536);
  console.log(color.toString(16));
  var hexColor = "#" + "00" + color.toString(16);
  target.css('background', hexColor);
}

function isDraw(board) {
  var emptySpaces = board.filter(function (x) { return x === ''; });
  return emptySpaces.length === 0;
}

function checkRow (row) { // row => [3,4,5]
  return row.every(function (x) { return board[x] === currentPlayer; });
}

function isWinner () {
  return WINS.some(checkRow);
}

function updateBoard () {
  var spaces = $(".space");
  board = $.map(spaces, function (box) { return $(box).html(); });
  console.log(board);
}

function placePiece (event) {
  var target = $(event.target);
  target.html(currentPlayer);
  updateBoard();

  if (isWinner(board)) {
    alert(`Congrats ${currentPlayer}, you won!`);
  } else if (isDraw(board)) {
    alert(`Sorry. Cats!`);
  }

  switchPlayer();
}

$(".space").click(placePiece);
