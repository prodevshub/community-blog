import React from 'react';
import './App.css';
import './App.scss';
import Header from './Components/Header/Header';
import sticky from './Functions/Sticky';

function App() {
    const name = 'Martynas';
    window.onscroll = () => sticky(); // calling function for header animation
    return (
        <div className="App">
            <Header />
            <main>
                <h1>Hello World</h1>
            </main>
        </div>
    );
}

export default App;
