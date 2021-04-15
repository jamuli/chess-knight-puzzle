import React from 'react'
import { Link } from 'react-router-dom'

function AboutLink() {
    return (
        <Link className='header-link' to='/about'>
            About  
        </Link>
    )
}

export default AboutLink
