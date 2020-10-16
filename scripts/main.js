let check = false;
function inCheck (color, enemy) {
  let $king = $(`.${color}.king`);
  
  let $kingRank = parseInt($king.parent().parent().attr('class').split('-')[1]);
  let $kingFile = parseInt($king.parent().attr('class').split('-')[1]);
  function checkStraight(u, c, piece) {
    for (let i = u, n = c; Math.abs(i) <= 8; i += u, n += c) {
      let $query = $(`.rank-${$kingRank + i} .file-${$kingFile + n}`)
      if ($query.length < 1) {
        break;
      }
      if ($query.children().length > 1) {
        if ($query.children().eq(1).attr('class') === `${enemy} ${piece}` || $query.children().eq(1).attr('class') === `${enemy} queen`) {
          check = true;
          $query.css({
            'z-index': '2',
            transition: 'box-shadow 0.3s ease-in-out', 'box-shadow': '0 0 10px 7px purple'
          })
        }
        break;
      }
    }
  }
  checkStraight(1,1, 'bishop')
  checkStraight(1,-1, 'bishop')
  checkStraight(-1,1, 'bishop')
  checkStraight(-1,-1, 'bishop');
  checkStraight(0,-1, 'rook');
  checkStraight(0,1, 'rook');
  checkStraight(1,0, 'rook');
  checkStraight(-1,0, 'rook');
  
  function knightCheck() {
    let toggle = false;
    for (let i = 0; i < 10; i++) {
      console.log(`iteration: ${i}`);
      let y = toggle ? 2 : 1
      let x = toggle ? 1 : 2
      if (i % 2 == 0) {
        toggle = !toggle;
      }
      if (i >= 2 && i < 4) {
        y *= -1;
        x *= -1;
      }
      if (i >= 4 && i < 6) {
        x *= -1;
      }
      if (i >= 6 && i < 8) {
        y *= -1;
        console.log('First IF');
      }
      let $query = $(`.rank-${$kingRank + y} .file-${$kingFile + x}`);
      if ($query.children().eq(1).attr('class') === `${enemy} knight`) {
        $query.css({
          'z-index': '2',
          transition: 'box-shadow 0.3s ease-in-out', 'box-shadow': '0 0 10px 7px purple'
        });
      }
    }
  }
  knightCheck();

  function pawnCheck() {
    for (let i = 1; i > -2; i += -2) {
      console.log(i);
      let $query = $(`.rank-${$kingRank + 1} .file-${$kingFile + i}`)
      if ($query.children().length > 1) {
        if ($query.children().eq(1).attr('class') === `${enemy} pawn`) {
          $query.css({
            'z-index': '2',
            transition: 'box-shadow 0.3s ease-in-out', 'box-shadow': '0 0 10px 7px purple'
          });
          check = true;
        }
      }
    }
  }
  pawnCheck();

  if (check === true) {
    alert('check!');
  }
  if ($king.parent().attr('class').split(' ')[1] === `${color}-graveyard`) {
    alert('you lose!')
  }
}


function select() {
  // CURRENT SQUARE
  $('.file').one('click',function(){
    $('.file').off('click'); // put this at top
    let $this = $(this);

    if ($this.children().length > 1) {
      $this.css({
        'z-index': '1',
        transition: 'box-shadow 0.3s ease-in-out', 'box-shadow': '0 0 10px 5px cyan'
      });
      const current = {
        $file: parseInt($this.attr('class').split(' ')[1].split('-')[1]),
        $rank: parseInt($this.parent().attr('class').split(' ')[1].split('-')[1]),
        $piece: $this.children().eq(1),
        $color: $this.children().eq(1).attr('class').split(' ')[0],
      }
      let validMoves = [];

      king(current, validMoves);
      pawn(current, validMoves);
      queen(current, validMoves)
      knight(current, validMoves);
      rook(current, validMoves);
      bishop(current, validMoves);
      
      // TARGET SQUARE
      $('.file').one('click',function(){
        $('.file').off('click');
        let $this = $(this);
        let target = {
          $file: parseInt($this.attr('class').split(' ')[1].split('-')[1]),
          $rank: parseInt($this.parent().attr('class').split(' ')[1].split('-')[1]),
          $piece: $this.children().eq(1),
        }

        for (let i = 0; i < validMoves.length; i++) {
          console.log(`validMoves: ${validMoves[i]}`);
          if (validMoves[i] == `${target.$file},${target.$rank}`) {
            if ($this.children().length > 1) {
              console.log($this.children().eq(1));
              if (target.$piece.attr('class').split(' ')[0] !== current.$color) {
                stats[current.$color] += worth[`${target.$piece.attr('class').split(' ')[1]}`]
                $(`.${current.$color}-score`).html(`${current.$color}: ${stats[current.$color]}`)
                console.log(current.$color);
                let graveColor = current.$color === 'white' ? 'black':'white'
                target.$piece.appendTo(`.${graveColor}-graveyard`);
                current.$piece.appendTo($this);
              }
            }
            inCheck('white', 'black');
            inCheck('black','white');
            current.$piece.appendTo($this);
            break;
          }
        }
  
        $('.file').css({'z-index':'auto', 'border':'none', 'box-shadow':'none'})
        select();
      });
    }
    inCheck('white','black');
    inCheck('black','white');
  })
}
select();