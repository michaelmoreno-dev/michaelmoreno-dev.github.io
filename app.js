$('<div>').attr('id','board').appendTo('body');
let color = 1;
for (i = 8; i >= 1; i--) {
  $('<div>').addClass(`rank rank-${i}`).appendTo('#board');
  color++
  for (n = 1; n <= 8; n++) {
    if (color % 2 == 0) {
      $('<div>').addClass(`file file-${n}`).text(`${n}${i}`).appendTo(`.rank-${i}`).css('background-color','white');
    }
    else {
      $('<div>').addClass(`file file-${n}`).text(`${n}${i}`).appendTo(`.rank-${i}`).css('background-color','grey');
    }
    color++;
  }
}

// PIECES
  // WHITE PIECES

const $whitePawn = $('<img src="./styles/imgs/whitepawn.svg">').addClass('pawn white-pawn')

$(`.rank-2 .file-1`).append($whitePawn.clone());
$(`.rank-2 .file-2`).append($whitePawn.clone());
$(`.rank-2 .file-3`).append($whitePawn.clone());
$(`.rank-2 .file-4`).append($whitePawn.clone());
$(`.rank-2 .file-5`).append($whitePawn.clone());
$(`.rank-2 .file-6`).append($whitePawn.clone());
$(`.rank-2 .file-7`).append($whitePawn.clone());
$(`.rank-2 .file-8`).append($whitePawn.clone());

const $blackPawn = $('<img src="./styles/imgs/blackpawn.svg">').addClass('pawn white-pawn')

$(`.rank-7 .file-1`).append($blackPawn.clone());
$(`.rank-7 .file-2`).html('<img src="./styles/imgs/blackpawn.svg">')
$(`.rank-7 .file-3`).html('<img src="./styles/imgs/blackpawn.svg">')
$(`.rank-7 .file-4`).html('<img src="./styles/imgs/blackpawn.svg">')
$(`.rank-7 .file-5`).html('<img src="./styles/imgs/blackpawn.svg">')
$(`.rank-7 .file-6`).html('<img src="./styles/imgs/blackpawn.svg">')
$(`.rank-7 .file-7`).html('<img src="./styles/imgs/blackpawn.svg">')
$(`.rank-7 .file-8`).html('<img src="./styles/imgs/blackpawn.svg">')
