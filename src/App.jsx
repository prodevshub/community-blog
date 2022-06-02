import React, { useRef, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Message from './Components/Message'
import About from './Pages/About'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Layout from './Components/Layout'

const App = () => {
    const [show, setShow] = useState(false)
    const [isClick, setIsClick] = useState(0)
    const [messages, setMessages] = useState([])

    const letsShow = () => {
        setShow(true)
        setIsClick(Date.now())
        setMessages((p) => [...p, <p className="message fade-out">Message</p>])
    }
    const dontShow = () => {
        setTimeout(() => {
            setShow(false)
            setMessages((p) => [])
        }, 3100)
    }

    return (
        <>
            <div className="App">
                <h1>Hello World</h1>
            </div>
            {/* <button onClick={() => setShow(true)}>Click</button> */}
            <button onClick={() => letsShow(true)}>Click</button>
            {/* {counter.map((_, i) => <Message key={i} isOpen={show} close={() => setShow(false)} counter={counter} />)} */}

            <Message isOpen={show} close={dontShow} isClick={isClick} messages={messages} />

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
