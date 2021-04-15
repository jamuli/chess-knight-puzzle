import './App.css'
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// import { useMediaQuery } from 'react-responsive'

// import { Link } from 'react-router-dom'
// import { Icon } from 'semantic-ui-react'

import About from './components/About'
import Header from './components/header/Header'
import Game from './components/Game'


// import GameSettings from './components/GameSettings'

function App() {
  // const isBigScreen = useMediaQuery({
  //   query: "(min-width: 700px)"
  // })

  // const isMediumScreen = useMediaQuery({
  //   query: "(min-width: 400px)"
  // })

  // const isSmallScreen = useMediaQuery({
  //   query: "(min-width: 200px)"
  // })

  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Game} />
        </Switch>
        

      </div>
    </DndProvider>
    </Router>
    
  );
}

export default App;
