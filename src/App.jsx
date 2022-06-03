import React, { useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Message from './Components/Message'
import About from './Pages/About'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Layout from './Components/Layout'

const App = () => {
    const [show, setShow] = useState([])

    return (
        <>
            <div className="App">
                <h1>Hello World</h1>
            </div>

            <button onClick={() => setShow((p) => [...p, true])}>Message</button>
            {show.map((msg, i) => (
                <Message
                    key={i}
                    isShow={msg}
                    setShow={setShow}
                />
            ))}

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/post/:id" element={<Post />} />
                </Route>

            </Routes>
        </>
    )
}
export default App
