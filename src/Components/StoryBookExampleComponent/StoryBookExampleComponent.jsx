import React from 'react'
import logo from '../../logo.svg'
import '../../App.css'

// cia priimam propsus i komponenta is stories
const StoryBookExampleComponent = ({ primary, label, color, backgroundColor, padding, fontSize, fontWeight, textAlign, margin, footer, name }) => (
    <>
        <h1 style={{
            padding, backgroundColor, color, fontSize, fontWeight, textAlign
        }}
        >
            Sample component in community blog
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <button style={{ backgroundColor, color }}>{name} BUTTON</button>
        <footer>{footer}</footer>
    </>
)

export default StoryBookExampleComponent
