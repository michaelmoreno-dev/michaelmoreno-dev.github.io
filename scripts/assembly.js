$('<div>').attr('id', 'board').appendTo('.container');
let color = 1;
for (i = 8; i >= 1; i--) {
  $('<div>').addClass(`rank rank-${i}`).appendTo('#board');
  color++
  for (n = 1; n <= 8; n++) {
    if (color % 2 == 0) {
      $('<div>').addClass(`file file-${n}`).append(`<h2>${n}${i}`).appendTo(`.rank-${i}`).css('background-color', 'white');
    }
    else {
      $('<div>').addClass(`file file-${n}`).append(`<h2>${n}${i}`).appendTo(`.rank-${i}`).css('background-color', 'grey');
    }
    color++;
  }
}
$('<div>').addClass('white graveyard').prependTo('.container');
$('<div>').addClass('black-graveyard').appendTo('.container');

// PIECES

const worth = {
  pawn: 1,
  bishop: 3,
  knight: 3,
  rook: 5,
  queen: 9,
}

const stats = {
  white: 0,
  black: 0,
}

$('<h2>').html(`black: ${stats.white}`).addClass('black-score').prependTo('body');
$('<h2>').html(`White: ${stats.white}`).addClass('white-score').appendTo('body');

const $whitePawn = $('<img src="./styles/imgs/whitepawn.svg">').addClass('white pawn')
const $whiteRook = $('<img src="./styles/imgs/whiterook.svg">').addClass('white rook')
const $whiteKnight = $('<img src="./styles/imgs/whiteknight.svg">').addClass('white knight')
const $whiteBishop = $('<img src="./styles/imgs/whitebishop.svg">').addClass('white bishop')
const $whiteKing = $('<img src="./styles/imgs/whiteking.svg">').addClass('white king')
const $whiteQueen = $('<img src="./styles/imgs/whitequeen.svg">').addClass('white queen')
$('.rank-1 .file-1').append($whiteRook.clone());
$('.rank-1 .file-2').append($whiteKnight.clone());
$('.rank-1 .file-3').append($whiteBishop.clone());
$('.rank-1 .file-4').append($whiteQueen.clone());
$('.rank-1 .file-5').append($whiteKing.clone());
$('.rank-1 .file-6').append($whiteBishop.clone());
$('.rank-1 .file-7').append($whiteKnight.clone());
$('.rank-1 .file-8').append($whiteRook.clone());

$(`.rank-2 .file-1`).append($whitePawn.clone());
$(`.rank-2 .file-2`).append($whitePawn.clone());
$(`.rank-2 .file-3`).append($whitePawn.clone());
$(`.rank-2 .file-4`).append($whitePawn.clone());
$(`.rank-2 .file-5`).append($whitePawn.clone());
$(`.rank-2 .file-6`).append($whitePawn.clone());
$(`.rank-2 .file-7`).append($whitePawn.clone());
$(`.rank-2 .file-8`).append($whitePawn.clone());

const $blackPawn = $('<img src="./styles/imgs/blackpawn.svg">').addClass('black pawn')
const $blackRook = $('<img src="./styles/imgs/blackrook.svg">').addClass('black rook')
const $blackKnight = $('<img src="./styles/imgs/blackknight.svg">').addClass('black knight')
const $blackBishop = $('<img src="./styles/imgs/blackbishop.svg">').addClass('black bishop')
const $blackKing = $('<img src="./styles/imgs/blackking.svg">').addClass('black king')
const $blackQueen = $('<img src="./styles/imgs/blackqueen.svg">').addClass('black queen')

$(`.rank-7 .file-1`).append($blackPawn.clone());
$(`.rank-7 .file-2`).append($blackPawn.clone());
$(`.rank-7 .file-3`).append($blackPawn.clone());
$(`.rank-7 .file-4`).append($blackPawn.clone());
$(`.rank-7 .file-5`).append($blackPawn.clone());
$(`.rank-7 .file-6`).append($blackPawn.clone());
$(`.rank-7 .file-7`).append($blackPawn.clone());
$(`.rank-7 .file-8`).append($blackPawn.clone());

$('.rank-8 .file-1').append($blackRook.clone());
$('.rank-8 .file-2').append($blackKnight.clone());
$('.rank-8 .file-3').append($blackBishop.clone());
$('.rank-8 .file-4').append($blackKing.clone());
$('.rank-8 .file-5').append($blackQueen.clone());
$('.rank-8 .file-6').append($blackBishop.clone());
$('.rank-8 .file-7').append($blackKnight.clone());
$('.rank-8 .file-8').append($blackRook.clone());