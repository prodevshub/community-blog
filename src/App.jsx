import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './App.scss';
import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import Post from './Pages/Post.jsx';

function App() {
    return (
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

    );
}

export default App;
