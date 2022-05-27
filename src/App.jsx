import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import About from './Pages/About'
import Home from './Pages/Home'
import Post from './Pages/Post'

const App = () => (
    <>
        <div className="App">
            <h1>Hello World</h1>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} />
        </Routes>
    </>

)

export default App
