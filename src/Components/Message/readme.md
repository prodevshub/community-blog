# Example to use Message Component

import React, { useState } from 'react'
import './App.scss'
import Message from './Components/Message'




const App = () => {
    const [show, setShow] = useState([])

    return (
        <>
            <div className="App">
                <h1>Hello World</h1>
            </div>

            <button onClick={() => setShow((p) => [...p, true])}>Message</button>
            {show.map((state, i) => (
                
                `<Message`

`                    key={i}`

`                    isShow={state}`
`                    setShow={setShow}`
`                    indication="message-indication-success"`
`                    iconClass="message-indication-success-icon"`
`                    icon="icon-success"`
`                    title="Success"`
`                    description="Lorem ipsum dolor sit amet."`
                `/>`
            ))}
        </>
    )
}
export default App