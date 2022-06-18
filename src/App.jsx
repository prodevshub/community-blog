import { Routes, Route } from 'react-router-dom'
import './App.scss'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from './actions'
import About from './Pages/About'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Layout from './Components/Layout'

import Message from './Components/Message/Message'

const App = () => {
    const messages = useSelector((state) => state.messages)
    const dispatch = useDispatch()
    return (

        <>
            <button onClick={() => dispatch(addMessage('Erorr fetching posts', 'error', true))}>
                Messages
            </button>
            <Message messages={messages} />

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
