import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    selectSquare, unselectSquare, movePiece, 
    resetIllegalSquare, updateTarget, endGame
    } from '../actions'

import { determineIfSquareIsWhite } from './../utils'

import {
    LAST_TARGET, INVALID_SQUARE, EMPTY_SQUARE,
    KNIGHT, QUEEN
    } from './../constants'

import Empty from './Pieces/Empty'
import Knight from './Pieces/Knight'
import Queen from './Pieces/Queen'
import Square from './Square'


export default function Board() {
    const dispatch = useDispatch();

    const gameStarted = useSelector(state => state.game.gameStarted)
    const gameEnded = useSelector(state => state.game.gameEnded)

    const board = useSelector(state => state.board.board)
    const pieceSelected = useSelector(state => state.board.pieceSelected)
    const squareIsSelected = useSelector(state => state.board.squareIsSelected)
    const selectedSquare = useSelector(state => state.board.selectedSquare)
    const validKnightMoves = useSelector(state => state.board.validKnightMoves)
    

    const nextTarget = useSelector(state => state.target.nextTarget)
    
    const bitPieceToPiece = (bitPiece, i) => {
        switch(bitPiece) {
            case EMPTY_SQUARE:  return <Empty i={i} />
            case KNIGHT:        return <Knight i={i} />
            case QUEEN:         return <Queen i={i} />
            default:            return <Empty i={i} />
        }
    }

    function renderSquare(bitPiece, i) {
        if (bitPiece === INVALID_SQUARE) {
            return 
        }
        
        return (
            <div 
                className='square'
                onClick={(e) => handleSquareClick(i)} 
                key={i}
            >
                    <Square i={i} isWhite = {determineIfSquareIsWhite(i)} > 
                        <div id='chess-piece' className='chess-piece'>
                            {bitPieceToPiece(bitPiece, i)}
                        </div>
                        
                    </Square>
            </div>
        )
    }

    function handleSquareClick(i) {
        if(!gameStarted) return
        if (!squareIsSelected || pieceSelected === 0) {
            // a square has not been selected or an empty square has so select this one
            if(!gameEnded) {
                dispatch(selectSquare(i))
                dispatch(resetIllegalSquare())
            }
        } else {
            if(selectedSquare === i) {
                // this square is already selected. unselect it
                dispatch(unselectSquare())
            } else if (gameStarted && !gameEnded) {
                handleMove(i)
            }
        }   
    }

    function handleMove(moveToSquare) {
        // TODO: FIX! THIS IS BROKEN
        // attempt to move selected piece here
        dispatch(movePiece(moveToSquare))
        if (validKnightMoves.indexOf(moveToSquare) !== -1 &&
            moveToSquare === nextTarget
        ) {
            dispatch(updateTarget())
            if (moveToSquare === LAST_TARGET) dispatch(endGame())
        }
        
        // // update goalSquares if knight has reached one
        // if (moveToSquare === nextTarget && 
        //     moveToSquare === LAST_TARGET
        // ) {
        //     dispatch(updateTarget())
        // } 
        // // end game if needed
        // if (moveToSquare === LAST_TARGET) dispatch(endGame())
    }

    return (
        <div className='board-container'>
            <div className='board'>
                {board.map((piece, i) => (
                    renderSquare(piece, i)
                ))}
            </div>    
        </div>
        
    )
}