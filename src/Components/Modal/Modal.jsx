import React, { useEffect } from 'react'
import Button from '../Button'
import './Modal.scss'

const Modal = ({
    show = true, title = 'Modal title', children = 'This is modal content', onSubmit, onClose
}) => {
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

    if (!show) return null

    const handleClose = (action) => {
        document.querySelector('.modal-dialog').classList.add('modal-dialog--close')
        document.querySelector('.modal').classList.add('modal--close')
        setTimeout(() => {
            action()
        }, 300)
    }

    return (
        <div className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="ModalScrollableTitle" aria-hidden="true" onClick={() => handleClose(onClose)}>
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalScrollableTitle">{title}</h5>
                        <Button type="button" className="cust-close" onClick={() => handleClose(onClose)} aria-label="Close">
                            &times;
                        </Button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        <Button type="button" className="cust-btn cust-btn-secondary" onClick={() => handleClose(onClose)} ariaLabel="Close">
                            Close
                        </Button>
                        <Button type="button" className="cust-btn cust-btn-primary" onClick={() => handleClose(onSubmit)} ariaLabel="Submit">
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal
