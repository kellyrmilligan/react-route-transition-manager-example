import React, { Component } from 'react'
import { Link } from 'react-router'
import './App.css'

class Example extends Component {
  static fetch (params, query) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve()
      }, 2000)// 2 sec delay
    })
  }

  render () {
    return (
      <main className='Example'>
        <p className='App-intro'>
          Example page
        </p>
        <Link to='/'>home link</Link>
      </main>
    )
  }
}

export default Example
