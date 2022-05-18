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


// to add the x or o on the board and change the turn to the next player
var xturn = true;

var changeTurn = function(event) {
  var coord = placement[event.path[0].className]
  if (xturn) {
    if (!this.innerHTML) {
      this.innerHTML = 'x';
      xturn = false;
      board[coord[0]][coord[1]] = 'x'
    }
  } else {
    if (!this.innerHTML) {
      this.innerHTML = 'o';
      xturn = true;
      board[coord[0]][coord[1]] = 'o'
    }
  }
}


//event listener for clicking within the squares
var squares = document.getElementsByTagName('td')

var clicker = function (squares) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeTurn)
  }
}

clicker(squares);


//reset the board
var reset = document.getElementsByClassName('reset')
var newboard = [
  [[],[],[]],
  [[],[],[]],
  [[],[],[]]
]

var resetBoard = function () {
  board = newboard;
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = ''
  }
  xturn = true;
}

reset[0].addEventListener('click', resetBoard);
