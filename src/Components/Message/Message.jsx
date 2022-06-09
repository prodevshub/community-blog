import React, { useEffect, useRef, useState } from 'react'
import * as ReactDOM from 'react-dom'
import './Message.scss'
import Button from '../Button/Button'

const Message = ({
    isShow,
    setShow,
    indication = 'message-indication-warning',
    iconClass = 'message-indication-warning-icon',
    icon = 'icon-warning',
    title = 'Warning',
    description = 'Lorem ipsum dolor sit amet.'
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
                <div className={indication} />
                <svg className={iconClass}>
                    <use xlinkHref={`#${icon}`} />
                </svg>
                <div className="message-text">
                    <p className="message-text-title">{title}</p>
                    <p className="message-text-description">{description}</p>
                </div>
                <Button className="cust-btn cust-close" onClick={() => setMessage((p) => false)} ariaLabel="&times;">&times;</Button>
            </div>
        ) : null, document.body)
    )
}
export default Message
