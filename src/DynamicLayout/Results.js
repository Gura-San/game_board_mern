import React, { Component } from 'react'

class Results extends Component {
  render() {
    let results = this.props.games.map((game, index) => {
      return (
        <div key={index}>
          <img src={game.image} alt={game.name} />
          <p>{game.name}</p>
        </div>
      )
    })
    return (
      <div>
        {results}
      </div>
    )
  }
}

export default Results