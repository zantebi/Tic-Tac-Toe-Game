import React, {Component} from 'react';
import Utils from 'Utils/utils';
import 'Styles/App.css';
import BoardRows from 'Views/BoardRows'
import WinSection from 'Views/WinSection'

class Main extends Component {

  state = {
    player1: true,
    player2: false,
    isWin: false,
    isDraw: false,
    Winner:''
  }

  setBox = (rowInd, colInd) => {
    const {gameFields, setValueInArray} = this.props;
    const {player1} = this.state;
    if (gameFields[rowInd][colInd] === ' ') {
      this.setState((prevState)=>{
        return {
            player1: !prevState.player1,
            player2: !prevState.player2
        }
      },() => {
        setValueInArray(rowInd, colInd, player1 ? 'X' : 'O')
        this.setState({
          isWin: Utils.checkWinFunction(gameFields),
          isDraw: Utils.checkDrawFunction(gameFields),
          Winner: player1 ? 'PLAYER1' : 'PLAYER2'
        })
      }) 
    }
  }

  winClickHandler = () => {
    this.setState((prevState) => {
      return ({
        isWin: false,
        isDraw:false
      })
      },this.props.gameOver())
  }
  
  render() {
    return (
      [!this.state.isWin && !this.state.isDraw && <header className="turn-header">{`${this.state.player1 ? 'PLAYER1 (X) Turn' : 'PLAYER2 (O) Turn'}`}</header>,
      <div className="game-section">
        <BoardRows
          isWin={this.state.isWin}
          player1={this.state.player1}
          isDraw={this.state.isDraw}
          gameFields={this.props.gameFields}
          setBox={this.setBox}
        />
        <WinSection
          isWin={this.state.isWin}
          isDraw={this.state.isDraw}
          winClickHandler={this.winClickHandler}
          Winner={this.state.Winner}
        />
        </div>]
    );
  }
}


export default Main;
