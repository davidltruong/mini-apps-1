var board = [
  ['','',''],
  ['','',''],
  ['','','']
]

var placement = {
  'top-left': [0,0],
  'top-middle': [0,1],
  'top-right': [0,2],
  'middle-left': [1,0],
  'middle-middle': [1,1],
  'middle-right': [1,2],
  'bottom-left': [2,0],
  'bottom-middle': [2,1],
  'bottom-right': [2,2]
}

var liveGame = true;


// to add the x or o on the board and change the turn to the next player /////////////
var xturn = true;

var changeTurn = function(event) {
  var coord = placement[event.path[0].className]
  if (xturn) {
    if (!this.innerHTML && liveGame) {
      this.innerHTML = 'x';
      xturn = false;
      board[coord[0]][coord[1]] = 'x'
      winchecker(coord);
    }
  } else {
    if (!this.innerHTML && liveGame) {
      this.innerHTML = 'o';
      xturn = true;
      board[coord[0]][coord[1]] = 'o'
      winchecker(coord);
    }
  }
}


//event listener for clicking within the squares ////////////////////////////////////
var squares = document.getElementsByTagName('td')

var clicker = function (squares) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeTurn)
  }
}

clicker(squares);


//reset the board ///////////////////////////////////////////////////////////////////
var reset = document.getElementsByClassName('reset')

var resetBoard = function () {
  board = [
    ['','',''],
    ['','',''],
    ['','','']
  ];
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = ''
  }

  xturn = true;
  liveGame = true;
}

reset[0].addEventListener('click', resetBoard);


// winner/tie checker ///////////////////////////////////////////////////////////////////
var winchecker = function(coordinates) {
  var currentRow = coordinates[0];
  var currentColumn = coordinates[1];
  var currentPiece = board[currentRow][currentColumn]
  if (board[0][0] === currentPiece &&
    board[1][1] === currentPiece &&
    board[2][2] === currentPiece) {
      liveGame = false;
    setTimeout(function() {
       alert("WINNER!"); },50);
    }
    if (board[0][2] === currentPiece &&
      board[1][1] === currentPiece &&
      board[2][0] === currentPiece) {
        liveGame = false;
      setTimeout(function() {
         alert("WINNER!"); },50);
      }
  var columnCount = 0;
  for (var row = 0; row < 3; row++) {
    if (board[row][currentColumn] === currentPiece) {
      columnCount++
    }
  }
  var rowCount = 0;
  for (var column = 0; column < 3; column++) {
    if (board[currentRow][column] === currentPiece) {
      rowCount++;
    }
  }
  if (columnCount === 3 || rowCount === 3) {
    liveGame = false;
    setTimeout(function() {
       alert("WINNER!"); },50);
  } else {
    var tieCheck = true;
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          tieCheck = false;
        }
      }
    }
    if (tieCheck === true && liveGame) {
      liveGame = false;
      setTimeout(function() {
        alert("TIE!"); },50);
    } else {
      console.log('keep going')
    }
  }
}