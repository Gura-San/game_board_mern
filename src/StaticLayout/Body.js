import React, { Component } from 'react'

class Body extends Component {
  render () {
    return (
      <main>
        <div class='container'>

          <ul id='slide-out' class='side-nav'>
            <li>
              <a href='/user/gameboard'>
                <i class='material-icons'>assessment</i>Game Board</a>
            </li>

          </ul>
          <a href='#' data-activates='slide-out' class='button-collapse btn'>
            <i class='material-icons'>menu</i>
          </a>
          <div class='row'>
            <div class='col s12 cards-container'>
              <h1>Please insert body elements here</h1>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Body
