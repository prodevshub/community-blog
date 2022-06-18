import React, { useEffect } from 'react'
import './Message.scss'
import * as ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import Button from '../Button/Button'
import { removeMessage } from '../../actions'

const Message = ({ messages }) => {
    const dispatch = useDispatch()

    const closeMessage = (id) => {
        const timeId = setTimeout(() => {
            dispatch(removeMessage(id))
        }, 100)
        return () => clearTimeout(timeId)
    }

    useEffect(() => {
        if (messages.length === 0) return
        const timeStateId = setTimeout(() => {
            dispatch(removeMessage(messages.length - 1))
        }, 4000)
        return () => clearTimeout(timeStateId)
    }, [messages, dispatch])

    useEffect(() => {
        if (messages.length === 0) return
        const messageId = setTimeout(() => {
            document.querySelector(`#id-${messages.length - 1}`).classList.remove('message-fade-in')
            document.querySelector(`#id-${messages.length - 1}`).classList.add('message-fade-out')
        }, 2000)
        return () => clearTimeout(messageId)
    }, [messages])

    return messages.length
        ? ReactDOM.createPortal(
            <div className="message">
                {messages.map((msg, i) => (
                    <div
                        id={`id-${i}`}
                        className="message-container message-fade-in"
                        key={i}
                    >
                        <div className="message-indication-danger" />
                        <svg className="message-indication-danger-icon">
                            <use xlinkHref="#icon-danger" />
                        </svg>
                        <div className="message-text">
                            <p className="message-text-title">{msg.type}</p>
                            <p className="message-text-description">
                                {msg.text}
                            </p>
                        </div>
                        <Button
                            className="cust-btn cust-close"
                            onClick={() => closeMessage(i)}
                            aria-label="&times;"
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

// const Message = ({
//     id,
//     isShow,
//     setShow,
//     indication,
//     iconClass,
//     icon,
//     title,
//     description
// }) => {
//     const [isMessage, setIsMessage] = useState(isShow)
//     const fade = useRef(null)

//     const closeMessage = () => {
//         setIsMessage((p) => false)
//         setShow((p) => {
//             const copy = p.slice()
//             copy.splice(id, 1, false)
//             return [...copy]
//         })
//     }

//     useEffect(() => {
//         if (!isMessage) return
//         fade.current.classList.add('message-fade-in')

//         setTimeout(() => {
//             if (fade.current === null) return
//             fade.current.classList.remove('message-fade-in')
//             fade.current.classList.add('message-fade-out')
//             setTimeout(() => {
//                 setIsMessage((p) => false)
//                 setShow((p) => {
//                     const copy = p.slice()
//                     copy.splice(id, 1, false)
//                     return [...copy]
//                 })
//             }, 3000)
//         }, 8000)
//     }, [isMessage])

//     return isMessage ? (
//         <div ref={fade} className="message-container">
//             <div className={indication} />
//             <svg className={iconClass}>
//                 <use xlinkHref={`#${icon}`} />
//             </svg>
//             <div className="message-text">
//                 <p className="message-text-title">{title}</p>
//                 <p className="message-text-description">{description}</p>
//             </div>
//             <Button className="cust-btn cust-close" onClick={closeMessage} ariaLabel="&times;">
//                 &times;
//             </Button>
//         </div>
//     ) : null
// }
// export default Message
