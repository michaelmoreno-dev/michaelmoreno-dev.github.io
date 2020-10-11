$('<div>').attr('id','board').appendTo('body');
let color = 0;
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

$(`.rank-2 .file-1`).html('<img src="./styles/imgs/pawn.svg">')
$(`.rank-2 .file-2`).html('<img src="./styles/imgs/pawn.svg">')
$(`.rank-2 .file-3`).html('<img src="./styles/imgs/pawn.svg">')
$(`.rank-2 .file-4`).html('<img src="./styles/imgs/pawn.svg">')
$(`.rank-2 .file-5`).html('<img src="./styles/imgs/pawn.svg">')
$(`.rank-2 .file-6`).html('<img src="./styles/imgs/pawn.svg">')
$(`.rank-2 .file-7`).html('<img src="./styles/imgs/pawn.svg">')
$(`.rank-2 .file-8`).html('<img src="./styles/imgs/pawn.svg">')