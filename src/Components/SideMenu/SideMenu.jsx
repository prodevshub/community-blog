import { useEffect } from 'react'
import Button from '../Button'
import './SideMenu.scss'

const SideMenu = ({
    show, setShow, children, side = 'left'
}) => {
    const timeOutDuration = 300

    useEffect(() => {
        if (show) {
            document.addEventListener('keydown', logKey)
            document.querySelector('.sideMenu__background').addEventListener('click', handleClose)
            hideOverflow()
        }
        return () => {
            document.removeEventListener('keydown', logKey)
        }
    }, [show])

    const logKey = (e) => {
        if (e.code === 'Escape') handleClose()
    }

    const handleClose = () => {
        hideOverflow()
        closeSideMenu()
    }

    if (!show) return null

    const hideOverflow = () => {
        document.body.style.overflow = 'hidden'

        setTimeout(() => {
            document.body.style.overflow = 'auto'
        }, timeOutDuration)
    }

    const closeSideMenu = () => {
        document.querySelector('.sideMenu__background').classList.add('sideMenu__background--close')
        if (side === 'left') {
            document.querySelector('.sideMenu').classList.add('sideMenu--close-left')
        } else {
            document.querySelector('.sideMenu').classList.add('sideMenu--close-right')
        }
        setTimeout(() => {
            setShow(false)
        }, timeOutDuration)
    }

    return (
        <>
            <div className="sideMenu__background" tabIndex="-1" role="dialog" aria-hidden="true" />
            <div className={side === 'left' ? 'sideMenu sideMenu--left' : 'sideMenu sideMenu--right'} role="document">
                <div className="sideMenu__header">
                    <Button className="cust-close" onClick={handleClose} aria-label="Close menu">
                        &times;
                    </Button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}
export default SideMenu
