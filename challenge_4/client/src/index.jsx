import React from "react"
import ReactDOM from "react-dom"
import Board from "./components/Board.jsx"
import $ from "jquery"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'red',
      livegame: true,
      board: [
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','','']
      ]
    };
    this.onClick = this.onClick.bind(this);
  }

  legend = {
    '0-0': [0,0], '0-1': [0,1], '0-2': [0,2], '0-3': [0,3], '0-4': [0,4], '0-5': [0,5], '0-6': [0,6],
    '1-0': [1,0], '1-1': [1,1], '1-2': [1,2], '1-3': [1,3], '1-4': [1,4], '1-5': [1,5], '1-6': [1,6],
    '2-0': [2,0], '2-1': [2,1], '2-2': [2,2], '2-3': [2,3], '2-4': [2,4], '2-5': [2,5], '2-6': [2,6],
    '3-0': [3,0], '3-1': [3,1], '3-2': [3,2], '3-3': [3,3], '3-4': [3,4], '3-5': [3,5], '3-6': [3,6],
    '4-0': [4,0], '4-1': [4,1], '4-2': [4,2], '4-3': [4,3], '4-4': [4,4], '4-5': [4,5], '4-6': [4,6],
    '5-0': [5,0], '5-1': [5,1], '5-2': [5,2], '5-3': [5,3], '5-4': [5,4], '5-5': [5,5], '5-6': [5,6]
  };

  findLegendKey = (value) => {
    let keys = Object.keys(this.legend);
    for (var i = 0; i < keys.length; i++) {
      if (this.legend[keys[i]][0] === value[0] && this.legend[keys[i]][1] === value[1]) {
        return keys[i];
      }
    }
  }

  drop = (coord) => {
    let y = coord[0];
    let x = coord[1];
    let tempY = 5;
    let empty = 0;
    while(tempY > -1 && empty === 0) {
      if (this.state.board[tempY][x] === '') {
        empty = [tempY, x];
      } else {
        tempY--;
      }
    }
    return empty;
  }

  horizontalCheck = (coord, color) => { // [Y,X]
    let x = coord[1];
    let y = coord[0];
    let count = 1;
    let leftBool = true;
    x--;
    while (leftBool && x > -1) {
      if (this.state.board[y][x] === color) {
        count++;
        x--;
      } else {
        leftBool = false;
      }
    }
    x = coord[1];
    x++;
    let rightBool = true;
    while (rightBool && x < 7) {
      if (this.state.board[y][x] === color) {
        count++;
        x++;
      } else {
        rightBool = false;
      }
    }
    console.log(count)
    if (count >= 4) {
      return true;
    } else {
      return false;
    }
  }

  vertialCheck = (coord, color) => {
    let x = coord[1];
    let y = coord[0];
    let count = 1;
    let botBool = true;
    y--;
    while (botBool && y > -1) {
      if (this.state.board[y][x] === color) {
        count++;
        y--;
      } else {
        botBool = false;
      }
    }
    y = coord[0];
    y++;
    let topBool = true;
    while (topBool && y < 6) {
      if (this.state.board[y][x] === color) {
        count++;
        y++;
      } else {
        topBool = false;
      }
    }
    if (count >= 4) {
      return true;
    } else {
      return false;
    }
  }

  topLeftDiagCheck = (coord, color) => {
    let x = coord[1];
    let y = coord[0];
    let count = 1;
    let topLeftBool = true;
    x--;
    y--;
    while (topLeftBool && x > -1 && y > -1) {
      if (this.state.board[y][x] === color) {
        count++;
        x--;
        y--;
      } else {
        topLeftBool = false;
      }
    }
    x = coord[1];
    y = coord[0];
    x++;
    y++;
    let botRightBool = true;
    while (botRightBool && x < 7 && y < 6) {
      if (this.state.board[y][x] === color) {
        count++;
        x++;
        y++;
      } else {
        botRightBool = false;
      }
    }
    if (count >= 4) {
      return true;
    } else {
      return false;
    }
  }

  topRightDiagCheck = (coord, color) => {
    let x = coord[1];
    let y = coord[0];
    let count = 1;
    let topRightBool = true;
    x++;
    y--;
    while (topRightBool && x < 7 && y > -1) {
      if (this.state.board[y][x] === color) {
        count++;
        x++;
        y--;
      } else {
        topRightBool = false;
      }
    }
    x = coord[1];
    y = coord[0];
    x--;
    y++;
    let botLeftBool = true;
    while (botLeftBool && x > -1 && y < 6) {
      if (this.state.board[y][x] === color) {
        count++;
        x--;
        y++;
      } else {
        botLeftBool = false;
      }
    }
    if (count >= 4) {
      return true;
    } else {
      return false;
    }
  }

  winchecker = (coord, color) => {
    let horizontalCheck = this.horizontalCheck(coord, color)
    let vertialCheck = this.vertialCheck(coord,color)
    let topLeftDiagCheck = this.topLeftDiagCheck(coord, color)
    let topRightDiagCheck = this.topRightDiagCheck(coord, color)
    if (horizontalCheck || vertialCheck || topLeftDiagCheck || topRightDiagCheck) {
      return true;
    } else {
      return false;
    }
  }

  tiechecker = (coord) => {

  }

  onClick = (e) => {
    if (this.state.livegame === true) {
      let sq = e.target.className;
      let coord = this.drop(this.legend[sq]);
      if (coord !== 0) {
        let legend = this.findLegendKey(coord);
        if (this.state.turn === 'red') {
          $(`.${legend}`).css('background-color', 'red')
          let board = this.state.board;
          board[coord[0]][coord[1]] = 'R'
          this.setState({board:board})
          if (this.winchecker(coord, 'R')) {
            this.setState({livegame: false})
            alert('WINNER!')
          } else {
            this.setState({turn: 'blue'})
          }
        } else {
          $(`.${legend}`).css('background-color', 'blue')
          let board = this.state.board;
          board[coord[0]][coord[1]] = 'B'
          this.setState({board:board})
          if (this.winchecker(coord, 'B')) {
            this.setState({livegame: false})
            alert('WINNER!')
          } else {
            this.setState({turn: 'red'})
          }
        }
      } else {
        alert("Column is full. Choose another column.")
      }
    } else {
      alert("Game is over!")
    }
  }

  render() {
    return (
      <div>
        <h1>Connect Four!</h1>
        <Board click={this.onClick}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));