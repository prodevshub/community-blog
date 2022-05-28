import React, { useEffect } from 'react'
import Button from '../Button'
import './Modal.scss'

// Component initialize example
// import Modal, set useState [show, setShow] and doSomething() function in your component
// Insert Modal component:
// <Modal show={show} title="Modal Title" onSubmit={doSomething} onClose={() => setShow(false)}>
//      <p>children</p>
// </Modal>

const Modal = ({
    show, title, children, onSubmit, onClose
}) => {
    // start listening keydown events
    useEffect(() => {
        if (show) {
            document.addEventListener('keydown', logKey)
        }
        return () => {
            document.removeEventListener('keydown', logKey)
        }
    }, [show])

    function logKey(e) {
        if (e.code === 'Escape') {
            handleClose(onClose)
        }
    }

    // do not show component if show is false
    if (!show) return null

    // fade out Modal and close or submit
    const handleClose = (action) => {
        document.querySelector('#modal').classList.add('modal--close')
        setTimeout(() => {
            action()
        }, 150)
    }

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
            id="modal"
            className="modal"
            role="dialog"
            onClick={() => handleClose(onClose)}
        >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
            <div
                id="dialog"
                className="modal__dialog"
                role="document"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside dialog
            >
                <div className="modal__header">
                    <h3 className="modal__title">{title}</h3>
                </div>
                <div className="modal__body">{children}</div>
                <div className="modal__footer">
                    <Button className="modal-btn modal-btn-primary modal-mr" onClick={() => handleClose(onSubmit)}>
                        Submit
                    </Button>
                    <Button className="modal-btn modal-btn-secondary" onClick={() => handleClose(onClose)}>
                        Close
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Modal
