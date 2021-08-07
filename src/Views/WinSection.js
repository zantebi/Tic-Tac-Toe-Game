import React from 'react';

const WinSection = ({isWin,isDraw,winClickHandler,Winner}) => {
    return (
        (isWin || isDraw) && <button onClick={winClickHandler} className="win-label">{`${isWin ? `${Winner} WINNER!!!!! click to start again!`
            : `DRAW! click to start again!`}`}  
            </button>
    )
}

export default WinSection;