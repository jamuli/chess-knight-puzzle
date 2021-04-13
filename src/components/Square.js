// single square on board
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { movePiece, updateTarget, endGame} from './../actions'
import { animationHelper, fillHelper } from './../utils'
import { ItemTypes, KNIGHT, LAST_TARGET } from './../constants'
import { useDrop } from 'react-dnd'


export default function Square({ isWhite, i, children }) {

    const dispatch = useDispatch()

    const [collectedProps, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        drop: (item, monitor) => console.log(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    })

    const gameStarted = useSelector(state => state.game.gameStarted)
    const gameEnded  = useSelector(state => state.game.gameEnded)
    
    const { 
        selectedSquare, pieceSelected, validKnightMoves, illegalSquare
    } = useSelector(state => state.board)
 
    const { nextTarget } = useSelector(state => state.target)

    // this square is a valid move
    const validKnightSquare = validKnightMoves.indexOf(i) !== -1 

    // highlight if square selected or a valid move
    const highlight = 
        selectedSquare === i || 
        (validKnightSquare && pieceSelected === KNIGHT)
    const fill = fillHelper(isWhite, highlight)


    // blink red if this square is illegal
    const animation = animationHelper(i, isWhite, illegalSquare, nextTarget)
    

    function updateGoalSquares(moveToSquare) {
        if (validKnightMoves.indexOf(moveToSquare) !== -1 &&
            moveToSquare === nextTarget
        ) {
            dispatch(updateTarget())
            if (moveToSquare === LAST_TARGET) dispatch(endGame())
        }
    }

    function handleOnDrop(e) {
        e.preventDefault()
        const moveToSquare = parseInt(e.target.id)
        if(gameStarted && !gameEnded) {
            dispatch(movePiece(moveToSquare))
            updateGoalSquares(moveToSquare)
        }
    }

    function handledragStart(e) {
        if(!gameStarted && !gameEnded) e.preventDefault()
        console.log('drag started', e)
    }

    function handleOnSelect(e) {
        e.preventDefault()

    }
    return(
        <div 
            // ref={ drop }
            className = {'square'}
            id={i}
            onDragStart = {(e) => handledragStart}
            onSelect = {(e) => handleOnSelect(e)}
            onDrop ={(e) => handleOnDrop(e)}
            style = {{ 
                backgroundColor: fill,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                animation: animation
        }}>
            {children}
        </div>
        
    )
}


// const colors = {
//     roseyBrown : '#BF8D88',
//     cornSilk : '#F9F4D8',
//     turquoise: '#4FE3DA',
//     celeste: '#B8F4F0',
//     oldRose: '#B8807A',
//     tuscany: '#C49792',
//     orange_yellow_crayola: '#F6D579'
// }
