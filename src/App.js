import React from 'react'
import TransitionManager from 'react-route-transition-manager'
import './App.css'

const ErrorThing = (props) => (
  <div className='Error'>Ooops! there was an error...</div>
)

const LoaderThing = (props) => (
  <div className='Loader'><p>loading...</p></div>
)

const SplashScreen = (props) => (
  <div className='Splashing'><p>about to gets realz...</p></div>
)

const Header = (props) => (
  <header>
    <h1>Welcome to my example!</h1>
  </header>
)

const App = (props) =>
  <TransitionManager {...props}
    onFetchStart={() => console.log('started fetching data for routes')}
    onFetchEnd={() => console.log('finished fetching data for routes')}
    onError={(err) => console.log('an error happened while fetching data for routes ', err)}
    FetchingIndicator={<LoaderThing />}
    ErrorIndicator={<ErrorThing />}
    SplashScreen={<SplashScreen />}
    fetchInitial
    showFetchingOnInitial
  >
    <Header />
    <div className='App'>
      {props.children}
    </div>
  </TransitionManager>

export default App
