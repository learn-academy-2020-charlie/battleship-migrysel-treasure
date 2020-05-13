import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <h1>Battleship App</h1>
        <Square />
      </React.Fragment>
    )
  }
}
export default App
