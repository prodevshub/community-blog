# Example to use Message Component


import './App.scss'
import React, { useState, useEffect } from 'react'
import Message from './Components/Message/Message'
const App = () => {
    const [show, setShow] = useState([])

    const [existsTrue, setExistsTrue] = useState(false)

    useEffect(() => {
        let exists = show.find((state) => state === true)
        !exists ? exists = false : exists = true
        setExistsTrue((p) => exists)
    }, [show])

    useEffect(() => {
        if (!existsTrue) setShow((p) => [])
    }, [existsTrue])

    return (

        <>
            <button onClick={() => setShow((p) => [...p, true])}>Message</button>

            <div className="message">
                {show.map((state, i) => (
                    state
                        ? (
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
                        ) : null
                ))}
            </div>

        </>
    )
}
export default App