import React from 'react'

import GithubIconLink from './GithubIconLink'
import HomeIconLink from './HomeIconLink'
import AboutLink from './AboutLink'

function Header() {
    return (
        <div className='header'>
            <div className='header-item github-link'>
                <HomeIconLink />
            </div>
            
            <div className='header-item'>
                <AboutLink />
            </div>
            <div className='header-item github-link'>
                <GithubIconLink />
                
            </div>
            
        </div>
    )
}

export default Header