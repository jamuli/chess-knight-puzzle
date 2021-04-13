export const ItemTypes = {
    KNIGHT: 'knight'
}

/* ------------ CHESS  VALUES ------------ */
export const A_FILE = 1
export const RANK_SHIFT_AMOUNT = 10
export const EDGE_FILE_TO_EDGE_FILE_AMOUNT = 7
/* ------------ PIECES ------------ */

export const KNIGHT = 2
export const QUEEN = 4

/* ------------ SQUARES ------------ */
export const INVALID_SQUARE = -1
export const EMPTY_SQUARE = 0
export const QUEEN_SQUARE = 1
export const INITIAL_TARGET = 26
export const LARGEST_VALID_INDEX = 98

/* ------------ SQUARE INDICIES ------------ */
export const LAST_TARGET = 91

/* ------------ MOVES ------------ */
export const KNIGHT_MOVES = [-21, -19,-12, -8, 8, 12, 19, 21]
// export const pieceMoves = {
//     PAWN: [],
//     KNIGHT: [-21, -19,-12, -8, 8, 12, 19, 21],
//     BISHOP: [],
//     ROOK: [],
//     QUEEN: [],
//     KING: [],

// }

/* ------------ BOARDS ------------ */
export const STARTING_BOARD = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1,  0,  0,  0,  0,  0,  0,  0,  2, -1, 
    -1,  0,  0,  0,  0,  0,  0,  0,  0, -1, 
    -1,  0,  0,  0,  0,  0,  0,  0,  0, -1, 
    -1,  0,  0,  0,  4,  0,  0,  0,  0, -1, 
    -1,  0,  0,  0,  0,  0,  0,  0,  0, -1, 
    -1,  0,  0,  0,  0,  0,  0,  0,  0, -1, 
    -1,  0,  0,  0,  0,  0,  0,  0,  0, -1, 
    -1,  0,  0,  0,  0,  0,  0,  0,  0, -1, 
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 
]
export const QUEEN_SQUARES = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1,  1,  0,  0,  1,  0,  0,  1,  0, -1, 
    -1,  0,  1,  0,  1,  0,  1,  0,  0, -1, 
    -1,  0,  0,  1,  1,  1,  0,  0,  0, -1, 
    -1,  1,  1,  1,  1,  1,  1,  1,  1, -1, 
    -1,  0,  0,  1,  1,  1,  0,  0,  0, -1, 
    -1,  0,  1,  0,  1,  0,  1,  0,  0, -1, 
    -1,  1,  0,  0,  1,  0,  0,  1,  0, -1, 
    -1,  0,  0,  0,  1,  0,  0,  0,  1, -1, 
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 
]
export const STARTING_TARGET_BOARD = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1,  1,  0,  0,  1,  0,  0,  1,  2, -1, 
    -1,  0,  1,  0,  1,  0,  1,  0,  0, -1, 
    -1,  0,  0,  1,  1,  1,  0,  0,  0, -1, 
    -1,  1,  1,  1,  1,  1,  1,  1,  1, -1, 
    -1,  0,  0,  1,  1,  1,  0,  0,  0, -1, 
    -1,  0,  1,  0,  1,  0,  1,  0,  0, -1, 
    -1,  1,  0,  0,  1,  0,  0,  1,  0, -1, 
    -1,  0,  0,  0,  1,  0,  0,  0,  1, -1, 
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 
]


/* ------------ STYLING ------------ */

export const OFFICIAL_COLORS = {
    WHITE: '#EEEED2',
    BLACK: '#769656',
    W_HIGHLIGHT: '#F6F668',
    B_HIGHLIGHT: '#BBCA2B',
    W_ILLEGAL: '#F08B81',
    B_ILLEGAL: '#B55F44'

}