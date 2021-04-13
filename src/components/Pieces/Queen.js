// lonely queen to only move when it can capture the knight
import React from 'react'
import queen_svg from './../../assets/queen_w.svg'

export default function Queen() {
    return (
        <div className='chess-piece-container'>
            <img 
                className = 'chess-piece'
                src = { queen_svg }
                alt = ""
            />
        </div>
    )
}