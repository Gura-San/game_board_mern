import React, { Component } from 'react'
import './App.css'
import Header from './StaticLayout/Header'
import Body from './StaticLayout/Body'
import Footer from './StaticLayout/Footer'
import Search from './DynamicLayout/Search'
import Results from './DynamicLayout/Results'
import SearchContainer from './DynamicLayout/SearchContainer'

const { Row, Col, CardPanel } = require('react-materialize')

class App extends Component {
  render () {
    return (
      <div>
        <h1>Game Data Base</h1>
        <SearchContainer />
      </div>
    )
  }
}

export default App
