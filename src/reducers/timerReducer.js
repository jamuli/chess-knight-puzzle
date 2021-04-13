const INITIAL_STATE = {
    isOn: false,
    time: 0
}

const timerReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
       default:
           return state
        case 'START_TIMER':
            return {
              ...state,
              isOn: true,
              offset: action.offset,
              interval: action.interval
            }
        case 'TICK':
            return {
                ...state,
                time: state.time + (action.time - state.offset),
                offset: action.time
            };
        case 'UNMOUNT_TIMER':
            clearInterval(state.interval);
            return {
                ...INITIAL_STATE
            };
    }
}

export default timerReducer