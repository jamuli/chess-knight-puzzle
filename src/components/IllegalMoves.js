import React from 'react'
import { Icon } from 'semantic-ui-react'
import { useSelector } from 'react-redux'


export default function IllegalMoves() {

    const illegalMoveCounter = useSelector(state => state.board.illegalMoveCounter)

    
    function icon(disabled, i) {
        const className = disabled ? 'illegal-move-icon-big-disabled':
            'illegal-move-icon-big-enabled'
        return (
        <div className={className} key={i}>
            <Icon name={'x'} disabled={disabled} fitted={true} color={'red'} size={'big'}/> 
        </div>
        )

    }
    function getIllegalIcons() {
        let illegalIcons = []
        for(let i = 0; i < 3; i++) {
            i < illegalMoveCounter ?
                illegalIcons.push(icon(false, i)) : 
                illegalIcons.push(icon(true, i))
        }
        return illegalIcons;
    }

    return(
        <div className={'illegal-move-icon-container'}>
            { getIllegalIcons() }
          </div>
    )
    
}