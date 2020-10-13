$('<div>').attr('id','board').appendTo('body');
let color = 1;
for (i = 8; i >= 1; i--) {
  $('<div>').addClass(`rank rank-${i}`).appendTo('#board');
  color++
  for (n = 1; n <= 8; n++) {
    if (color % 2 == 0) {
      $('<div>').addClass(`file file-${n}`).append(`<h2>${n}${i}`).appendTo(`.rank-${i}`).css('background-color','white');
    }
    else {
      $('<div>').addClass(`file file-${n}`).append(`<h2>${n}${i}`).appendTo(`.rank-${i}`).css('background-color','grey');
    }
    color++;
  }
}

// PIECES

const $whitePawn = $('<img src="./styles/imgs/whitepawn.svg">').addClass('white pawn')

$(`.rank-2 .file-1`).append($whitePawn.clone());
$(`.rank-2 .file-2`).append($whitePawn.clone());
$(`.rank-2 .file-3`).append($whitePawn.clone());
$(`.rank-2 .file-4`).append($whitePawn.clone());
$(`.rank-2 .file-5`).append($whitePawn.clone());
$(`.rank-2 .file-6`).append($whitePawn.clone());
$(`.rank-2 .file-7`).append($whitePawn.clone());
$(`.rank-2 .file-8`).append($whitePawn.clone());

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

const $blackPawn = $('<img src="./styles/imgs/blackpawn.svg">').addClass('black pawn')

$(`.rank-7 .file-1`).append($blackPawn.clone());
$(`.rank-7 .file-2`).append($blackPawn.clone());
$(`.rank-7 .file-3`).append($blackPawn.clone());
$(`.rank-7 .file-4`).append($blackPawn.clone());
$(`.rank-7 .file-5`).append($blackPawn.clone());
$(`.rank-7 .file-6`).append($blackPawn.clone());
$(`.rank-7 .file-7`).append($blackPawn.clone());
$(`.rank-7 .file-8`).append($blackPawn.clone());

let grabbedPiece = '';
$('.file').on('click',function(){
  if ($(this).children().length > 1) {
    $(this).css({'border':'5px solid cyan', 'width':'90px', 'height':'90px'});
    var current = {
      asdf: 'hello',
      $rank: `${$(this).parent().attr('class').split(' ')[1]}`,
      $file: `${$(this).attr('class').split(' ')[1]}`,
      $piece: $(this).children().eq(1),
    }

    
    $('.file').on('click',function(){
      $(this).css({ 'border': '5px solid red', 'width': '90px', 'height': '90px'})
      console.log(current.$file);
      console.log(current.$rank);
      console.log(current.$piece);
      $(this).append(current.$piece);
    });
  }
  // console.log(($(this).children().eq(1).attr('class')));
  // let grabbedPiece = $(this).children().eq(1).attr('class');
  // alert(grabbedPiece);
})