/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-tag-location */
import { useEffect, useRef } from 'react'
import * as ReactDOM from 'react-dom'
import './Message.scss'

const Message = ({
    isOpen, close, isClick, messages
}) => {
    // const msgContainer = useRef()
    useEffect(() => {
        if (!isOpen) return
        setTimeout(() => {
            close()
            // msgContainer.current.removeChild(msgContainer.firstElementChild)
        }, 3000)
    }, [isClick])

    return (
        ReactDOM.createPortal(isOpen ? (
            <div className="message-1">
                {messages.map((el, i) => <div key={i}>{el}</div>) }
            </div>
        ) : null, document.body)
    )
}

export default Message
