import {
    INITIAL_TARGET, LARGEST_VALID_INDEX, RANK_SHIFT_AMOUNT,
    EDGE_FILE_TO_EDGE_FILE_AMOUNT, A_FILE, EMPTY_SQUARE,
    STARTING_TARGET_BOARD
} from './../constants'

const INITIAL_TARGET_STATE = {
    nextTarget: undefined,
    goalSquares: startingGoalSquares(STARTING_TARGET_BOARD)
}


// change function to allow for queen to be in a different square at the start

function startingGoalSquares(board) {
    let goalSquares = []
    // knight is already on 28 so 26 is initial target at start
    let currIndex = INITIAL_TARGET
    while(currIndex <= LARGEST_VALID_INDEX) { // 98 highest index to search
        // add index if the square must be reached
        if(board[currIndex] === EMPTY_SQUARE) goalSquares.push(currIndex)
        // if on most left square of board, go to next row (+10) and to the right most column (+7)
        currIndex % RANK_SHIFT_AMOUNT === A_FILE ? 
            currIndex += RANK_SHIFT_AMOUNT + EDGE_FILE_TO_EDGE_FILE_AMOUNT 
            : currIndex--
    }
    return goalSquares
} 

const targetReducer = (state = {...INITIAL_TARGET_STATE}, action) => {
    switch(action.type) {
        default:
            return state
        case 'START_GAME':
            return {
                ...state,
                nextTarget: INITIAL_TARGET
            }
        case 'UPDATE_TARGET':
            if(state.goalSquares.length === 0) {
                console.log('an error has been made with NEXT_TARGET in targetReducer.js')
                return state
            }
            // maybe do so mething with squaresAchieved? maybe not though
            state.goalSquares.shift()
            state.nextTarget = state.goalSquares[0]
            return state
        case 'RESET_GAME':
            return {
                ...state,
                nextTarget: undefined,
                goalSquares: startingGoalSquares(STARTING_TARGET_BOARD)
            }
    }
    
}
export default targetReducer;