import React from 'react';

const getSelectedClass = (value) => {
    if (value === 'X') {
      return 'selected-yellow';
    } else if (value === 'O') {
      return 'selected-green'
    }
    return null;
  }

const BoardRows = ({isWin,isDraw,gameFields,setBox,player1}) => {
    return (
          !isWin && !isDraw && gameFields.map((row,rowInd) => {
            return <div key={rowInd} className="board-row">
              {
                row.map((val,colInd) => {
                  return <div key={colInd} onClick={() => { setBox(rowInd, colInd) }} className={`box ${getSelectedClass(val)}`}>
                    {val}
                  </div>
                })    
              }
            </div>
          })
    )
}

export default BoardRows;