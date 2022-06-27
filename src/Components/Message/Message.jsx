import React, {
    useEffect, useRef, memo, useCallback, useState
} from 'react'
import './Message.scss'
import * as ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button/Button'
import { removeMessage, deleteMessage } from '../../actions'

const Message = ({ messages }) => {
    const fade = useRef(null)
    const timerID = useRef(0)
    const dispatch = useDispatch()

    const closeMessage = (id) => {
        dispatch(removeMessage(id))
    }

    useEffect(() => {
        if (fade.current === null) return
        const element = fade.current
        timerID.current = setTimeout(() => {
            element.childNodes[messages.length - 1].classList.remove('message-fade-in')
            element.childNodes[messages.length - 1].classList.add('message-fade-out')
            element.childNodes[messages.length - 1].addEventListener('animationend', () => {
                dispatch(removeMessage(messages[messages.length - 1].id))
            })
        }, 1500)
        return () => clearTimeout(timerID.current)
    }, [messages])

    return messages.length
        ? ReactDOM.createPortal(
            <div ref={fade} className="message">
                {messages.map((msg) => (
                    <div
                        id={`${msg.id}`}
                        className="message-container message-fade-in"
                        key={msg.id}
                    >
                        <div className={`message-indication-${msg.type}`} />
                        <svg className={`message-indication-${msg.type}-icon`}>
                            <use xlinkHref={`#icon-${msg.type}`} />
                        </svg>
                        <div className="message-text">
                            <p className="message-text-title">{msg.type}</p>
                            <p className="message-text-description">
                                {msg.text}
                                {'-->'}
                                {msg.id}
                            </p>
                        </div>
                        <Button
                            className="cust-btn cust-close"
                            onClick={() => closeMessage(msg.id)}
                            ariaLabel="&times;"
                        >
                            &times;
                        </Button>
                    </div>
                ))}
            </div>,
            document.querySelector('body')
        )
        : null
}

export default Message
