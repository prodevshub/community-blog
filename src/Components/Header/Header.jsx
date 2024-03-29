import './Header.scss'
import React, { useEffect, useRef } from 'react'

const Header = ({
    height,
    color,
    fontSize
}) => {
    const stickyHeader = useRef(null)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (stickyHeader.current !== null) {
                if (window.pageYOffset > stickyHeader.current.offsetTop) {
                    stickyHeader.current.classList.add('sticky')
                } else {
                    stickyHeader.current.classList.remove('sticky')
                }
            }
        })
    })
    return (
        <header
            style={{ height }}
            className="header"
            ref={stickyHeader}
        >
            <div className="header__logo">
                <a href="/">
                    <svg>
                        <use xlinkHref="#clower" />
                    </svg>
                </a>
            </div>
            <div
                className="header__title"
                style={{
                    color,
                    fontSize
                }}
            >
                <span className="header__title--italic">
                    Lucky
                    {' '}
                </span>
                community blog
                <hr />
                <span className="header__title-description">
                    to notice, observe and enjoy...
                </span>
            </div>
            <div className="header__nav">
                <a href="#menu">
                    &#9776;
                </a>
            </div>
        </header>
    )
}

export default Header
