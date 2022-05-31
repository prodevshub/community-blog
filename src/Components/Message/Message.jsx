/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useRef } from 'react'
import * as ReactDOM from 'react-dom'
import './Message.scss'

const Message = ({ isOpen, close }) => {
    const fade = useRef()

    // useEffect(() => {
    //     setTimeout(() => {
    //         close()
    //         fade.current.className.add('fade-out')
    //     }, 1000)
    // }, [isOpen])
    // const closeMessage = () => {
    //     fade.current.classList.add('fade-out')
    //     close()
    // }
    // const message = async () => {
    //     const timeID = new Promise((resolve) =>
    // }

    // const closeMessage = async () => {
    //     await setTimeout(() => {
    //         fade.current.classList.add('fade-out')
    //     }, 2000)
    //     // clearTimeout(timeID)

    //     await setTimeout(() => {
    //         close()
    //     }, 100)
    // }

    useEffect(() => {
        if (!isOpen) return
        // setTimeout(() => {
        fade.current.classList.add('fade-out')
        setTimeout(() => {
            close()
        }, 2000)
        // }, 1000)
    }, [isOpen])

    if (!isOpen) return null
    return (
        ReactDOM.createPortal(<div>
            <p ref={fade} className="message">Message</p>
            {/* <button onClick={() => onClose(close)}>Close</button> */}
        </div>, document.body)
    )
}

export default Message
