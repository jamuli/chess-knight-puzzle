import {
    KNIGHT, EMPTY_SQUARE, QUEEN_SQUARE,INVALID_SQUARE, 
    KNIGHT_MOVES, STARTING_BOARD, QUEEN_SQUARES

} from './../constants'

const INITIAL_STATE = {
    board: [...STARTING_BOARD], 
    squareIsSelected: false, 
    selectedSquare: undefined, 
    pieceSelected: undefined, 
    validKnightMoves: [36, 47],
    illegalSquare: undefined,
    illegalMoveCounter: 0,
    moves: []
}

const boardReducer = (state = JSON.parse(JSON.stringify(INITIAL_STATE)), action) => {

    function selectSquare(square) {
        state.squareIsSelected = true
        state.selectedSquare = square
        state.pieceSelected = state.board[square]
    }
    function resetSelections() {
        state.squareIsSelected = false
        state.selectedSquare = undefined
        state.pieceSelected = undefined
    }

    function updateValidKnightMoves(moveToSquare) {
        state.validKnightMoves = []
        const currSquare = moveToSquare
        KNIGHT_MOVES.forEach((move) => {
            const potentialMove = currSquare + move
            if(state.board[potentialMove] !== INVALID_SQUARE) {
                // console.log('add potential move', potentialMove)
                state.validKnightMoves.push(potentialMove)
            }
        })
    }

    function illegalMove(squareTo) {
        return state.validKnightMoves.indexOf(squareTo) !== -1 &&
        QUEEN_SQUARES[squareTo] === QUEEN_SQUARE
    }

    function validMove(moveToSquare, piece) { 
        return state.validKnightMoves.indexOf(moveToSquare) !== -1 &&
            QUEEN_SQUARES[moveToSquare] !== QUEEN_SQUARE && 
            state.pieceSelected === KNIGHT
    }

    function movePiece(squareFrom, squareTo) {
        // console.log(STARTING_BOARD)
        if (validMove(squareTo)) {
            // valid move
            // remove piece from square
            state.board[squareFrom] = EMPTY_SQUARE
            // add piece to move-to-square
            state.board[squareTo] = state.pieceSelected
            // only update if move is valid
            updateValidKnightMoves(squareTo) 
            resetSelections()
            resetIllegalSquare()
        } else {  
            // illegal move
            if(illegalMove(squareTo)) state.illegalMoveCounter++ 
            resetSelections()
            setIllegalMove(squareTo)
        }
    }

    function setIllegalMove(square) {
        state.illegalSquare = square
    }
    function resetIllegalSquare() {
        state.illegalSquare = undefined
    }

    switch(action.type) {
        default:
            return state

        case 'SELECT_SQUARE':
            selectSquare(action.squareIndex)
            return state

        case 'UNSELECT_SQUARE':
            resetSelections()
            return state

        case 'RESET_ILLEGAL_SQUARE':
            resetIllegalSquare()
            return state

        case 'MOVE_PIECE':
            movePiece(state.selectedSquare, action.squareIndex)
            return state

        case 'RESET_GAME':
            state.board[28] = KNIGHT
            // console.log('initial state should not change', INITIAL_STATE)
            return JSON.parse(JSON.stringify(INITIAL_STATE))
    }
}
export default boardReducer;