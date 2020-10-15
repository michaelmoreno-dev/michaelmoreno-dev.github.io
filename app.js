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
      // IF PIECE IS KNIGHT
      if (current.$piece.attr('class').split(' ')[1] === 'knight') {
        let toggle = false;
        for (let i = 0; i < 10; i++) {
          console.log(`iteration: ${i}`);
          let y = toggle ? 2:1
          let x = toggle ? 1:2
          if (i % 2 == 0) {
            toggle = !toggle;
          }
          if (i >= 2 && i < 4) {
            y *= -1;
            x *= -1;
            console.log('First IF');
          }
          if (i >= 4 && i < 6) {
            x *= -1;
            console.log('First IF');
          }
          if (i >= 6 && i < 8) {
            y *= -1;
            console.log('First IF');
          }
          let $query = $(`.rank-${current.$rank + y} .file-${current.$file + x}`);

          if ($query.length > 0) {
            console.log($query);
            if ($query.children().length < 2|| $query.children().eq(1).attr('class').split(' ')[0] === 'black'){
              $query.css({'border':'5px solid cyan'})
              validMoves.push([$query.attr('class').split('-')[1],$query.parent().attr('class').split('-')[1]]);
            }
          }
        }
      }
      
      // IF PIECE IS ROOK
      if (current.$piece.attr('class').split(' ')[1] === 'rook') {
        // LOOK UP
        for (let q = current.$rank; q < 8; q++) {
          let $query = $(`.rank-${q + 1} .file-${current.$file}`)
          // console.log('check: ' + `.rank-${q + 1} .file-${current.$file}`);
          if ($query.children().length > 1) {
            if ($query.children().eq(1).attr('class').split(' ')[0] == 'white') {
              $(`.rank-${q} .file-${current.$file}`).css({'border-top': '5px solid cyan' })
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
        $('.file').off('click'); // put this at top
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
              if (target.$piece.attr('class').split(' ')[0] == 'black') {
                stats.white += worth[`${target.$piece.attr('class').split(' ')[1]}`]
                $('.white-score').html(`White: ${stats.white}`)
                target.$piece.appendTo('.black-graveyard');
                current.$piece.appendTo($this);
              }
            }
            current.$piece.appendTo($this);
            break;
          }
        }
        console.log(`target: ${target.$file}, ${target.$rank}`);

        // IF PIECE IS PAWN
        if (current.$piece.attr('class').split(' ')[1] === 'pawn') {
          console.log('pawn selected');
          // IF FIRST TURN
          if (current.$file == target.$file && current.$rank < target.$rank && (Math.abs(current.$rank - target.$rank) < 2 || (Math.abs(current.$rank - target.$rank) < 3 && current.$rank == 2))) {
            console.log('legal move');
            if ($this.children().length < 2) {
              console.log('target square available');
              current.$piece.appendTo($this);
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