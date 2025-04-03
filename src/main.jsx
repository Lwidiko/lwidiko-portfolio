import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div>
      <HomePage />
      <AboutMe />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
