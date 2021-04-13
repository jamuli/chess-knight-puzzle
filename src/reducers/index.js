import { combineReducers } from 'redux'
import boardReducer from './boardReducer'
import gameReducer from './gameReducer'
import targetReducer from './targetReducer'
import timerReducer from './timerReducer'



const rootReducer = combineReducers({
    board: boardReducer,
    game: gameReducer,
    target: targetReducer,
    timer: timerReducer
    

})

export default rootReducer
