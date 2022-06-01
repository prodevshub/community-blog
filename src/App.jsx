import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import About from './Pages/About'
import Home from './Pages/Home'
import Post from './Pages/Post'
import Layout from './Components/Layout'

const App = () => (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<Post />} />
        </Route>
    </Routes>

)

export default App
