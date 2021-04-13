const INITIAL_STATE = {
    gameType: '',
    gameStarted: false,
    gameEnded: false,
    playerWon: false,
    gameReset: undefined
}

const gameReducer = (state = {...INITIAL_STATE}, action) => {
    switch(action.type) {
        case 'START_GAME':
            return {
                ...state,
                gameStarted: true,
                gameReset: false
            }
        case 'END_GAME':
            return {
                ...state,
                gameEnded: true,
                playerWon: action.gameEnding
            }
        case 'RESET_GAME':
            return {
                ...INITIAL_STATE,
                gameReset: true
            }
        
        default: 
            return state

        // case 'GAME_WON':
        //     state.gameEnded = true
        //     state.playerWon = action.gameEnding
        //     return state
        // case 'GAME_LOST':
        //     state.gameEnded = true
        //     state.playerWon = action.gameEnding
        //     return state
    }
}

export default gameReducer;