import React, { Component } from 'react'
import './App.css'
import Header from './StaticLayout/Header'
import Body from './StaticLayout/Body'
import Footer from './StaticLayout/Footer'
const { Row, Col, CardPanel } = require('react-materialize')

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App
