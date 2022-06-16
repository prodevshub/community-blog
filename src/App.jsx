import { Routes, Route } from 'react-router-dom'
import './App.scss'
import React, { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Layout from './Components/Layout'

import Message from './Components/Message/Message'

const App = () => {
    const [show, setShow] = useState([])

    const [existsTrue, setExistsTrue] = useState(false)

    useEffect(() => {
        let exists = show.find((state) => state === true)
        !exists ? (exists = false) : (exists = true)
        setExistsTrue((p) => exists)
    }, [show])

    useEffect(() => {
        if (!existsTrue) setShow((p) => [])
    }, [existsTrue])
    return (
        <>
            <button onClick={() => setShow((p) => [...p, true])}>Message</button>
            { existsTrue ? ReactDOM.createPortal(
                <div className="message">
                    {show.map((state, i) => (state ? (
                        <Message
                            key={i}
                            id={i}
                            isShow={state}
                            setShow={setShow}
                            indication="message-indication-success"
                            iconClass="message-indication-success-icon"
                            icon="icon-success"
                            title="Success"
                            description="Lorem ipsum dolor sit amet."
                        />
                    ) : null))}
                </div>,
                document.body
            ) : null}

            <div className="App">
                <h1>Hello World</h1>
            </div>

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
