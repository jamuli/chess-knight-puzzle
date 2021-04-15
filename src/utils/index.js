import { OFFICIAL_COLORS as COLORS } from './../constants'


export const getFormattedTime = (time, desktopFormat) => {
    const ms = ('0' + Math.floor(time % 100)).slice(-2)
    const s = ('0' + Math.floor((time / 100) % 60)).slice(-2)
    const m = ('0' + Math.floor(time / 6000) % 50).slice(-2)
    if (desktopFormat) {
        return `${m} : ${s} : ${ms}`
    } else {
        return `${m} : ${s}`
    }
    
}

export const determineIfSquareIsWhite = (i) => {
    const x = (i % 10) - 1
    const y = Math.floor((i-20) / 10)
    return (x + y) % 2 === 0
}


export const animationHelper = (i, isWhite, illegalSquare, nextTarget) => {
    let animation = 'none'
    if (i === illegalSquare && i === nextTarget) {
        animation = 'none'
        isWhite ?
            animation = 'wrong-square-blinker-white 0.5s linear 2, next-square-blinker-white 2s linear infinite' :
            animation = 'wrong-square-blinker-black 0.5s linear 2, next-square-blinker-black 2s linear infinite'  
    } else if (i === illegalSquare) {
        isWhite ?
            animation = 'wrong-square-blinker-white 0.5s linear 2' :
            animation = 'wrong-square-blinker-black 0.5s linear 2' 
    } else if (i === nextTarget) {
        isWhite ?
            animation = 'next-square-blinker-white 2s linear infinite' :
            animation = 'next-square-blinker-black 2s linear infinite'
    } 
    return animation
}

export const fillHelper = (isWhite, highlight) =>{
    let fill
    if(highlight) {
        fill = isWhite ? COLORS.W_HIGHLIGHT : COLORS.B_HIGHLIGHT 
    } else {
        fill = isWhite ? COLORS.WHITE : COLORS.BLACK 
    }
    return fill
}
