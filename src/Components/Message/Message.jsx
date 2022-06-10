import React, { useEffect, useRef, useState } from 'react'
import './Message.scss'
import * as ReactDOM from 'react-dom'
import Button from '../Button/Button'

const Message = ({
    id,
    isShow,
    setShow,
    indication,
    iconClass,
    icon,
    title,
    description
}) => {
    const [isMessage, setIsMessage] = useState(isShow)
    const fade = useRef(null)

    const closeMessage = () => {
        setIsMessage((p) => false)
        setShow((p) => {
            const copy = p.slice()
            copy.splice(id, 1, false)
            return [...copy]
        })
    }

    useEffect(() => {
        if (!isMessage) return
        fade.current.classList.add('message-fade-in')

        setTimeout(() => {
            if (fade.current === null) return
            fade.current.classList.remove('message-fade-in')
            fade.current.classList.add('message-fade-out')
            setTimeout(() => {
                setIsMessage((p) => false)
                setShow((p) => {
                    const copy = p.slice()
                    copy.splice(id, 1, false)
                    return [...copy]
                })
            }, 3000)
        }, 8000)
    }, [isMessage])

    return (

        isMessage ? ReactDOM.createPortal(
            (
                <div ref={fade} className="message-container">
                    <div className={indication} />
                    <svg className={iconClass}>
                        <use xlinkHref={`#${icon}`} />
                    </svg>
                    <div className="message-text">
                        <p className="message-text-title">{title}</p>
                        <p className="message-text-description">{description}</p>
                    </div>
                    <Button className="cust-btn cust-close" onClick={closeMessage} ariaLabel="&times;">&times;</Button>
                </div>
            ), document.querySelector('.message')
        ) : null

    )
}
export default Message
