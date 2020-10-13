$('<div>').attr('id','board').appendTo('.container');
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
$('.rank-2 .file-8').append($whiteRook.clone());

$(`.rank-2 .file-1`).append($whitePawn.clone());
$(`.rank-2 .file-2`).append($whitePawn.clone());
$(`.rank-2 .file-3`).append($whitePawn.clone());
$(`.rank-2 .file-4`).append($whitePawn.clone());
$(`.rank-2 .file-5`).append($whitePawn.clone());
$(`.rank-2 .file-6`).append($whitePawn.clone());
$(`.rank-3 .file-3`).append($whiteRook.clone());
// $(`.rank-2 .file-8`).append($whitePawn.clone());
const $blackPawn = $('<img src="./styles/imgs/blackpawn.svg">').addClass('black pawn')

const $blackRook = $('<img src="./styles/imgs/blackrook.svg">').addClass('white rook')
const $blackKnight = $('<img src="./styles/imgs/blackknight.svg">').addClass('white knight')
const $blackBishop = $('<img src="./styles/imgs/blackbishop.svg">').addClass('white bishop')
const $blackKing = $('<img src="./styles/imgs/blackking.svg">').addClass('white king')
const $blackQueen = $('<img src="./styles/imgs/blackqueen.svg">').addClass('white queen')

$(`.rank-7 .file-1`).append($blackPawn.clone());
$(`.rank-7 .file-2`).append($blackPawn.clone());
$(`.rank-7 .file-3`).append($blackPawn.clone());
$(`.rank-7 .file-4`).append($blackPawn.clone());
$(`.rank-7 .file-5`).append($blackPawn.clone());
$(`.rank-7 .file-6`).append($blackPawn.clone());
$(`.rank-7 .file-7`).append($blackPawn.clone());
$(`.rank-7 .file-8`).append($whitePawn.clone());

let turn = 0;

function select() {
  // CURRENT SQUARE
  $('.file').on('click',function(){
    let $this = $(this);
    if ($this.children().length > 1) {
      $this.css({'border':'5px solid cyan', 'width':'90px', 'height':'90px'});
      var current = {
        $file: parseInt($this.attr('class').split(' ')[1].split('-')[1]),
        $rank: parseInt($this.parent().attr('class').split(' ')[1].split('-')[1]),
        $piece: $this.children().eq(1),
      }

      let validMoves = [];
      if (current.$piece.attr('class').split(' ')[1] === 'rook') {
        // LOOK UP
        for (let q = current.$rank; q < 8; q++) {
          let $query = $(`.rank-${q + 1} .file-${current.$file}`)
          // console.log('check: ' + `.rank-${q + 1} .file-${current.$file}`);
          if ($query.children().length > 1) {
            if ($query.children().eq(1).attr('class').split(' ')[0] == 'white') {
              $(`.rank-${q} .file-${current.$file}`).css({ 'border-top': '5px solid cyan' })
              break;
            }
            else {
              validMoves.push([current.$file, q + 1])
              $(`.rank-${q + 1} .file-${current.$file}`).css({ 'border-top': '5px solid cyan' })
              // console.log('square blocked');
              break;
            }
          }
          $query.css({ 'border': '2px solid cyan', 'border-left': '5px solid cyan', 'border-right': '5px solid cyan', 'width': '90px' })
          // console.log($query.parent().attr('class').split('-')[1]);
          validMoves.push([current.$file, q + 1])
          // console.log(validMoves[1]);
        }

        // LOOK DOWN
        for (let q = current.$rank; q > 1; q--) {
          let $query = $(`.rank-${q - 1} .file-${current.$file}`)
          // console.log('check: ' + `.rank-${q + 1} .file-${current.$file}`);
          if ($(`.rank-${q - 1} .file-${current.$file}`).children().length > 1) {
            if ($query.children().eq(1).attr('class').split(' ')[0] == 'white') {
              $(`.rank-${q} .file-${current.$file}`).css({ 'border-bottom': '5px solid cyan' })
              break;
            }
            else {
              validMoves.push([current.$file, q - 1])
              $(`.rank-${q - 1} .file-${current.$file}`).css({ 'border-bottom': '5px solid cyan' })
              // console.log('square blocked');
              break;
            }
          }
          $query.css({ 'border': '2px solid cyan', 'border-left': '5px solid cyan', 'border-right': '5px solid cyan', 'width': '90px' })
          // console.log($query.parent().attr('class').split('-')[1]);
          validMoves.push([current.$file, q - 1])
          // console.log(validMoves[1]);
        }
        
        // LOOK RIGHT
        for (let q = current.$file; q < 8; q++) {
          let $query = $(`.rank-${current.$rank} .file-${q + 1}`)
          console.log('check: ' + `.rank-${current.$rank} .file-${q + 1}`);
          if ($(`.rank-${current.$rank} .file-${q + 1}`).children().length > 1) {
            if ($query.children().eq(1).attr('class').split(' ')[0] == 'white') {
              $(`.rank-${current.$rank} .file-${q + 1}`).css({ 'border-right': '5px solid cyan' })
              break;
            }
            else {
              validMoves.push([q + 1, current.$rank])
              $(`.rank-${current.$rank} .file-${q + 1}`).css({ 'border-right': '5px solid cyan' })
              // console.log('square blocked');
              break;
            }
          }
          $query.css({ 'border': '2px solid cyan', 'border-top': '5px solid cyan', 'border-bottom': '5px solid cyan', 'width': '90px' })
          // console.log($query.parent().attr('class').split('-')[1]);
          validMoves.push([q + 1, current.$rank])
          // console.log(validMoves[1]);
        }
        // LOOK LEFT
        for (let q = current.$file; q > 1; q--) {
          let $query = $(`.rank-${current.$rank} .file-${q - 1}`)

          console.log('check: ' + `.file-${q - 1} .rank-${current.$rank}`);
          if ($query.children().length > 1) {
            if ($query.children().eq(1).attr('class').split(' ')[0] == 'white') {
              $(`.rank-${current.$rank} .file-${q - 1}`).css({ 'border-left': '5px solid cyan' })
              break;
            }
            else {
              validMoves.push([q - 1, current.$rank])
              $(`.file-${q - 1} .rank-${current.$rank}`).css({ 'border-left': '5px solid cyan' })
              // console.log('square blocked');
              break;
            }
          }
          $query.css({ 'border': '2px solid cyan', 'border-top': '5px solid cyan', 'border-bottom': '5px solid cyan', 'width': '90px' })
          // console.log($query.parent().attr('class').split('-')[1]);
          validMoves.push([q - 1, current.$rank])
          // console.log(validMoves[1]);
        }
      }

      // TARGET SQUARE
      $('.file').one('click',function(){
        let $this = $(this);
        let target = {
          $file: parseInt($this.attr('class').split(' ')[1].split('-')[1]),
          $rank: parseInt($this.parent().attr('class').split(' ')[1].split('-')[1]),
          $piece: $this.children().eq(1),
        }
        $('.file').off('click'); // put this at top

        for (let i = 0; i < validMoves.length; i++) {
          console.log(`validMoves: ${validMoves[i]}`);
          if (validMoves[i] == `${target.$file},${target.$rank}`) {
            if ($this.children().length > 1) {
              if (target.$piece.attr('class').split(' ')[0] == 'black') {
                stats.white += worth[`${target.$piece.attr('class').split(' ')[1]}`]
                $('.white-score').html(`White: ${stats.white}`)
                target.$piece.appendTo('.black-graveyard');
                current.$piece.appendTo($this);
              }
            }
            current.$piece.appendTo($this);
          }
        }
        console.log(`target: ${target.$file}, ${target.$rank}`);

        // IF PIECE IS PAWN
        if (current.$piece.attr('class').split(' ')[1] === 'pawn') {
          console.log('pawn selected');
          // IF FIRST TURN
          if (current.$file == target.$file && current.$rank !== target.$rank && (Math.abs(current.$rank - target.$rank) < 2 || (Math.abs(current.$rank - target.$rank) < 10 && turn == 0))) {
            console.log('legal move');
            if ($this.children().length < 2) {
              console.log('target square available');
              current.$piece.appendTo($this);
              turn++;
            }
          }
          else if (Math.abs(target.$file - current.$file) == 1 && target.$rank > current.$rank) {
            console.log('upper corner square targeted');
            if ($this.children().length > 1) {
              console.log('target square occupied');
              if (target.$piece.attr('class').split(' ')[0] === 'black') {
                console.log('enemy occupied ');
                target.$piece.appendTo('.black-graveyard');
                console.log('captured!');
                current.$piece.appendTo($this);
                
              }
            }
          }
          else {
            alert('failed');
          }
          // console.log(`file: .${current.$file + 1} rank: .${current.$rank + 1}`);
          // else if ($(`.${current.$rank+1} .${current.$file+1}`))
          // else {
          //   alert('Your pawn cannot move that far!')
          // }
        }
        
        // if ($this.children().length > 1) {
        //   if (target.$piece.attr('class').split(' ')[0] === 'black') {
        //     target.$piece.appendTo('.black-graveyard')
        //     $this.append(current.$piece);
        //     alert ('capture!');
        //   }
        //   else {
        //     alert('Square Occupied!');
        //   }
        // }
        // else {
        //   $this.append(current.$piece);
        // }
        $this.css({ 'border': '5px solid red', 'width': '90px', 'height': '90px'})
        // console.log(current.$file);
        // console.log(current.$rank);
        // console.log(current.$piece);
  
        $('.file').css({'border':'none', 'height':'100px', 'width':'100px'})
        select();
      });
    }
  })
}
select();