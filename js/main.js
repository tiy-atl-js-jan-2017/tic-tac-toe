var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = "X";

function switchPlayer () {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

// var cards = [
//   {
//     image_url: '',
//     number: 42,
//     suit: 'hearts'
//   },
//   {
//     image_url: '',
//     number: 42,
//     suit: 'hearts'
//   },
//   {
//     image_url: '',
//     number: 42,
//     suit: 'hearts'
//   },
//   {
//     image_url: '',
//     number: 42,
//     suit: 'hearts'
//   }
// ];

// function cardsTemplate (cards) {
//   var html = "";
//   cards.forEach(function (card) {
//     var cardHTML = "<div class=\"card\"><img class=\"card-image\">" + card.image_url + "</img><p>" + "The " + card.rank + " of " + card.suit + "</p></div>";
//     html += cardHTML;
//   })
//   return html;
// }

// function boardTemplate (board) {
//   var html = "";
//   board.forEach(function (space) {
//     var spaceHtml = "<div class=\"space\"" + space + "</div>";
//     html += spaceHtml;
//   });
//   return "<div class=\"board\">" + html + "</div>";
// }

function boardTemplate (board) {
  var spacesHtml = board.map(function (x) { return `<div class="space">${x}</div>`; });
  return `
    <div class="board">
      ${spacesHtml.join("\n")}
    </div>
  `;
}

// function boardTemplate (board) {
//   var spacesHtml = board.map(function (x) { return `<div class="space">${x}</div>`; });
//   return `<div class="board">${spacesHtml.join("")}</div>`;
// }

function render () {
  var boardHTML = boardTemplate(board);
  var greeting = $("#greeting");
  greeting.after(boardHTML);
}

//render();

// function drawBoard (board) {
//   var greeting = $("#greeting");

//   board.forEach(function (place) {
//     var space = "<div class=\"space\">" + place + "</div>";
//     greeting.after(space);
//   });

//   $(".space").wrapAll("<div class=\"board\">");
// }

// drawBoard(board);

function changeBackground (event) {
  var target = $(event.target);
  var color = Math.floor(Math.random() * 65536);
  console.log(color.toString(16));
  var hexColor = "#" + "00" + color.toString(16);
  target.css('background', hexColor);
}


$(".space").click(changeBackground);
