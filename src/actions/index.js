export const selectSquare = (i) => {
    return {
        type: 'SELECT_SQUARE',
        squareIndex: i
    }
}

export const unselectSquare = () => {
    return {type: 'UNSELECT_SQUARE'}
}

export const movePiece = (i, drag) => {
    return {
        type: 'MOVE_PIECE',
        squareIndex: i
    }
}

export const resetIllegalSquare = () => {
    return {type: 'RESET_ILLEGAL_SQUARE'}
}

export const updateTarget = () => {
    return {type: 'UPDATE_TARGET'}
}

// -------- GAME ACTIONS --------
export const startGame = () => {
    return {type: 'START_GAME'}
}

export const resetGame = () => {
    return {type: 'RESET_GAME'}
}

export const endGame = (gameEnding) => {
    return {
        type: 'END_GAME',
        gameEnding: gameEnding
    }
}

