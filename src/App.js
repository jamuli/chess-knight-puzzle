import './App.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import Game from './components/Game'
import React from 'react'
// import GameSettings from './components/GameSettings'

function App() {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <header className="App-header">
        <a target='_blank' rel="noopener noreferrer" href={'https://www.github.com'}>
          <Icon name='github' size='big' link />
        </a>
          
          <Game />
        </header>
      </div>
    </DndProvider>
  );
}

export default App;
