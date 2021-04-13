// board with 64 squares

import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { endGame } from '../actions'
import Board from './Board'
import IllegalMoves from './IllegalMoves'
import Timer from './Timer'

export default function Game() {
    const dispatch = useDispatch();

    const gameStarted = useSelector(state => state.game.gameStarted)
    const illegalMoveCounter = useSelector(state => state.board.illegalMoveCounter)

    
    useEffect(() => {
        if (illegalMoveCounter === 3) dispatch(endGame())
    })

    return (
        <div className={'game-container'}>
            <Timer />
            <Board />
            <IllegalMoves />
        </div>
        
    )

}