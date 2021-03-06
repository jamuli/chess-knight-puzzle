import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import { Icon } from 'semantic-ui-react'

import { startGame, endGame, resetGame } from './../actions'
import { getFormattedTime } from './../utils'

// import StartStopButtons from './StartStopButtons'

export default function Timer() {
    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(false)

    const dispatch = useDispatch()

    const gameStarted = useSelector(state => state.game.gameStarted)
    const gameEnded = useSelector(state => state.game.gameEnded)

    useEffect(() => {
        let interval = null
        if (gameEnded && timerOn) {
            clearInterval(interval)
            setTimerOn(false)
        }
        if (timerOn) {
            if (!gameStarted) dispatch(startGame())
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)

    }, [timerOn, gameEnded, gameStarted, dispatch])

    function handleStartGameClick() {
        setTimerOn(true)
        dispatch(startGame())
    }
    // function handleEndGameClick() {
    //     if (timerOn) setTimerOn(false)
    //     dispatch(endGame())
    // }

    function handleResetGameClick() {
        setTimerOn(false)
        setTime(0)
        dispatch(resetGame())
    }

    const desktopFormat = useMediaQuery({
          query: "(min-width: 400px)"
        })
    console.log(desktopFormat)

    return (
        <div className={'timer-container'}>
            {gameStarted ? 
                <>
                    <div style={{padding: '20px'}}> {getFormattedTime(time, desktopFormat)}</div>
                    <Icon
                        className='timer-button reset'
                        name='sync alternate'
                        size='small'
                        link
                        onClick={() => handleResetGameClick()}
                    ></Icon>
                     
                </> : 

                <>
                    <button 
                        className='timer-button-start-game'
                        onClick={() => handleStartGameClick()}
                    >Start Game</button>
                </>
            }

        </div>
    )
}



