/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-tag-location */
import { useEffect, useState } from 'react'
import * as ReactDOM from 'react-dom'
import './Message.scss'

const Message = ({
    margin, msg, setContainer
}) => {
    const [isShow, setShow] = useState(msg)
    useEffect(() => {
        setTimeout(() => {
            setShow((p) => !p)
            setTimeout(() => {
                setContainer((p) => {
                    p.shift()
                    return [...p]
                })
            }, 2100)
        }, 2000)
    }, [msg])
    return (

        ReactDOM.createPortal(isShow ? (
            <div className="message message-container message-fade-out" style={{ marginTop: margin }}>
                Lorem ipsum dolor sit amet.
            </div>
        ) : null, document.body)
    )
}
export default Message
