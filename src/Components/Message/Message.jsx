/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-tag-location */
import { useEffect, useRef, useState } from 'react'
import * as ReactDOM from 'react-dom'
import './Message.scss'

const Message = ({
    isShow, setShow
}) => {
    const [message, setMessage] = useState(isShow)
    const fade = useRef(null)

    useEffect(() => {
        if (!message) return
        fade.current.classList.add('message-fade-in')

        setTimeout(() => {
            if (fade.current === null) return
            fade.current.classList.remove('message-fade-in')
            fade.current.classList.add('message-fade-out')
        }, 8000)

        setTimeout(() => {
            setMessage((p) => false)
            setShow((p) => {
                p.shift()
                return [...p]
            })
        }, 9100)
    }, [message])

    return (

        ReactDOM.createPortal(message ? (
            <div ref={fade} className="message message-container">
                Lorem ipsum dolor sit amet.
                {/* <button onClick={() => setShow((p) => false)}>close</button> */}
                <button onClick={() => setMessage((p) => false)}>close</button>
            </div>
        ) : null, document.body)
    )
}
export default Message
