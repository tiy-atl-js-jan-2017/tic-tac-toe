var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = "X";

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
  var greeting = $("#greeting");
  greeting.after(boardHTML);
}

function changeBackground (event) {
  var target = $(event.target);
  var color = Math.floor(Math.random() * 65536);
  console.log(color.toString(16));
  var hexColor = "#" + "00" + color.toString(16);
  target.css('background', hexColor);
}


$(".space").click(changeBackground);
