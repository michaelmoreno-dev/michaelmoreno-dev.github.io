function bishop(current, validMoves) {
  if (current.$piece.attr('class').split(' ')[1] === 'bishop') {
    function bishopMove(u,c) {
      for (let i = u, n = c; Math.abs(i) <= 8; i+=u, n+=c) {
        let $query = $(`.rank-${current.$rank + i} .file-${current.$file + n}`)
        if ($query.length < 1) {
          break;
        }
        $query.css('border','5px solid green')
        if ($query.children().length > 1) {
          if ($query.children().eq(1).attr('class').split(' ')[0] === 'white') {
            break;
          }
          i = 8;
        }
        $query.css('background-color', 'blue')
        console.log($query.attr('class'));
        validMoves.push([$query.attr('class').split('-')[1], $query.parent().attr('class').split('-')[1]]);
      }
    }
    // bishopMove(1);
    bishopMove(1,1);
    bishopMove(-1,-1);
    bishopMove(1,-1);
    bishopMove(-1,1);
  }
}

function knight(current, validMoves) {
  if (current.$piece.attr('class').split(' ')[1] === 'knight') {
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
        if ($query.children().length < 2 || $query.children().eq(1).attr('class').split(' ')[0] === 'black') {
          $query.css({ 'border': '5px solid cyan' })
          validMoves.push([$query.attr('class').split('-')[1], $query.parent().attr('class').split('-')[1]]);
        }
      }
    }
  }
}
function rook(current, validMoves) {
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
}