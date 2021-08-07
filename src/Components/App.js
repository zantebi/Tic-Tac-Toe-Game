import React, {Component} from 'react';
import Utils from 'Utils/utils';
import Main from 'Components/Main';

class App extends Component {

  state = {
    isGameStarted: false,
    gameFields: [' ',' ',' ',' ',' ',' ',' ',' ',' ']
  }

  setValueInArray = (rowInd,colInd,value) => {
    let temp = [...this.state.gameFields]
    if (temp[rowInd][colInd] === ' ') {
      temp[rowInd][colInd] = value;
      this.setState({gameFields:[...temp]})
    }
  }

  gameOver = () => {
    this.setState(({
      isGameStarted: false
    }))
  }
  
  
  render() {
    const {isGameStarted} = this.state;
    return (
      <div className="dashboard-game">
        {!isGameStarted && 
        <>
        <div className="game-header">Tic-Tac-Toe Game</div>
        <button className="start-btn" onClick={() => this.setState({
          isGameStarted: true,
          gameFields: Utils.chunckedArray([' ',' ',' ',' ',' ',' ',' ',' ',' '],3)
        })}>
          START
          </button>
        </>}
        {isGameStarted && <Main
          gameFields={this.state.gameFields}
          setValueInArray={this.setValueInArray}
          gameOver={this.gameOver}
        />}
     </div>
    );
  }
}


export default App;
