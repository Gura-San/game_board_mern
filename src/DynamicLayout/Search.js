import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='Enter a game name' />
          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}

export default Search