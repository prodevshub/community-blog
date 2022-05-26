import React, { useEffect } from 'react'
import './Modal.scss'

const handleKeyPress = (onClose) => (e) => {
    if (e.keyCode === 27) {
        onClose() // Close the modal on ESC key press
    }
}

const Modal = ({
    show, title, children, onSubmit, onClose
}) => {
    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress(onClose))
        return () => {
            document.removeEventListener('keydown', handleKeyPress(onClose))
        }
    }, [])

    if (!show) return null

    return (
        <div
            className="modal"
            role="dialog"
            onClick={onClose}
            onKeyDown={handleKeyPress(onClose)}
        >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
                className="modal-content"
                role="document"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>
                </div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={onSubmit}>
                        Submit
                    </button>
                    <button className="btn btn-primary" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
