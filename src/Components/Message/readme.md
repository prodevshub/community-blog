# Example to use Message Component

import React, { useState } from 'react'
import './App.scss'
import Message from './Components/Message'




const App = () => {
State witch describes the array of messages states if we call it multiplt time at "once"
`    const [show, setShow] = useState([])`

    return (
        <>
            <div className="App">
                <h1>Hello World</h1>
            </div>

Stacking messages in array of states
`            <button onClick={() => setShow((p) => [...p, true])}>Message</button>`

`            {show.map((state, i) => ( `
                
`                <Message`

`                    key={i}`

`                    isShow={state}`

`                    setShow={setShow}`

`                    indication="message-indication-success"`

`                    iconClass="message-indication-success-icon"`

`                    icon="icon-success"`

`                    title="Success"`

`                    description="Lorem ipsum dolor sit amet."`

`                />`

`            ))}`

`        </>`

`    )`
`}`

`export default App`