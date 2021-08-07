const chunckedArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (v, i) => {
    return array.slice(i * size, i * size + size);
});

const checkWinFunction = (board) => {
    return checkRows(board) || checkColumns(board) || checkHorizontals(board);
}

const checkRows = (board) => {
    if (board[0][0] !== ' ' && board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
        return true;
    }
    if (board[1][0] !== ' ' && board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
      return true;
    }
    if (board[2][0] !==' ' && board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
      return true;
    }
    return false;
}

const checkColumns = (board) => {
    if (board[0][0] !== ' ' && board[0][0] === board[1][0]  && board[1][0]  === board[2][0]) {
        return true;
        }
    if (board[0][1] !== ' ' && board[0][1] === board[1][1] && board[1][1]  === board[2][1]) {
        return true;
        }
    if (board[2][2] !== ' ' && board[2][2] === board[1][2] && board[1][2] === board[0][2]) {
        return true;
    }
    return false;
}

const checkHorizontals = (board) => {
    if (board[0][0] !== ' ' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== ' ' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }
    return false;
}

const checkDrawFunction = (board) => {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (board[i][j] === ' ')
                return false;
        }
    }
    return true;
}

const actionsObject = {
    chunckedArray,
    checkWinFunction,
    checkDrawFunction
}

export default actionsObject;