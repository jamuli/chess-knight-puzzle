// lonely knight to move around
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { selectSquare } from '../../actions'
import knight_svg from './../../assets/knight_b.svg'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../constants'

export default function Knight(i) {
    const location = i.i

    const gameStarted = useSelector(state => state.game.gameStarted)
    const gameEnded = useSelector(state => state.game.gameEnded)
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.KNIGHT,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
    });
    

    const dispatch = useDispatch()

    function onDragHandler(e) {
        e.preventDefault()
    }

    function dragStartHandler(e) {
        if(!gameStarted && !gameEnded) {
            e.preventDefault()
        }
        else if(!gameEnded) {
            dispatch(selectSquare(location))
            // dispatch(resetIllegalSquare())
        }
    }

    function onSelectHandler(e) {
        e.preventDefault()
    }

    return (
        <div 
            className='chess-piece-container'
            draggable="true"
            onSelect = {(e) => onSelectHandler()}
            onDragStart = {(e) => dragStartHandler(e)}
            onDrag ={(e) => onDragHandler(e)}
            // ref = {drag}
            
            style={{
                // opacity: isDragging ? 0.5 : 1,
                width: '100%',
                height: '100%',
                cursor: 'move'
            }}
        >
            <img 
                onSelect = {(e) => onSelectHandler()} 
                className = 'chess-piece' 
                src = { knight_svg } 
                alt = "" 
            />
        </div>
        
    )
}