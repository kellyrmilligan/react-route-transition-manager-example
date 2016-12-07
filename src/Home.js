import React, { Component } from 'react'
import { Link } from 'react-router'
import './App.css'

class Home extends Component {

  static fetch (params, query) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve()
      }, 2000)// 1 sec delay
    })
  }

  render () {
    return (
      <main className='Home'>
        <p className='App-intro'>
          Homepage
        </p>
        <Link to='/example'>example link</Link>
      </main>
    )
  }
}

export default Home
