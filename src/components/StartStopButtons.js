import React from 'react'

import { Button, Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { startTimer, stopTimer, resetTimer } from './../actions'


export default function StartStopButtons() {
    const dispatch = useDispatch()
    const timerActive = useSelector(state => state.timer.timerActive)
    const timerStarted = useSelector(state => state.timer.timerActive)

    function handlePlayClick(e,data) {
        if(!timerStarted) dispatch(startTimer())
    }

    function handleStopClick(e,data) {
        if(timerActive) dispatch(stopTimer())
    }

    return (
        <div className={'start-timer-container'}>
            
            <Button.Group vertical>
                <Button 
                    onClick={(e,data) => handlePlayClick(e, data)} 
                    icon='play' 
                    color='grey' 
                    disabled={timerActive} />
                <Button 
                    onClick={(e,data) => handleStopClick(e, data)} 
                    icon='stop'
                    color='grey'
                    disabled={!timerActive}/>
            </Button.Group>
        </div>
    )
}