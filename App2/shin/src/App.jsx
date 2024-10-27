import React from 'react'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './home'
import Review from './Review'
import About from './about'
import './App.css'
import Lyrics from './Lyrics'


function App() {


  return (

    <BrowserRouter>
      <nav className='menu'>
        <ul>
          <li><Link to="/">Home</Link></li>

          <span></span>
          <li><Link to="/about">About</Link></li>


          <span></span>
          <li><Link to="/review">Review</Link></li>

          <span></span>
          <li><Link to="/lyric">Music</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/review" Component={Review} />
        <Route path="/lyric" Component={Lyrics} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
