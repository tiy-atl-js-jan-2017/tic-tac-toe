var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = "X";

function switchPlayer () {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function drawBoard () {
  var greeting = $("#greeting");

  board.forEach(function (place) {
    var space = "<div class=\"space\">" + place + "</div>";
    greeting.after(space);
  });

  $(".space").wrapAll("<div class=\"board\">");
}

drawBoard();

function changeBackground (event) {
  var target = $(event.target);
  var color = Math.floor(Math.random() * 65536);
  console.log(color.toString(16));
  var hexColor = "#" + "00" + color.toString(16);
  target.css('background', hexColor);
}


$(".space").click(changeBackground);
