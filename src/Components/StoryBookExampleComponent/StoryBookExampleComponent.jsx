import React from 'react'
import logo from '../../logo.svg'
import '../../App.scss'

// cia priimam propsus i komponenta is stories
const StoryBookExampleComponent = ({
    name, footer, padding, bgColor, handleOnChange, color, backgroundColor, fontSize, fontWeight, textAlign, primary, value, label
}) => (
    <>
        <h1 style={{
            padding, backgroundColor, color, fontSize, fontWeight, textAlign
        }}
        >
            Sample component in community blog
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <button style={{ backgroundColor, color }}>
            {name}
            {' '}
            BUTTON
        </button>
        <footer>{footer}</footer>
    </>
)

export default StoryBookExampleComponent
