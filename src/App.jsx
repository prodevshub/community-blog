import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import './App.scss'
import Message from './Components/Message'
import About from './Pages/About'
import Home from './Pages/Home'
import Post from './Pages/Post'

const App = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className="App">
                <h1>Hello World</h1>
            </div>
            <button onClick={() => setShow(true)}>Click</button>
            <Message isOpen={show} close={() => setShow(false)} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/post/:id" element={<Post />} />
            </Routes>
        </>
    )
}

export default App
