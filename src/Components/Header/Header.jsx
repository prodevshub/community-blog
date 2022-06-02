import './Header.scss'
import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({
    paddingTop, paddingBottom, color, fontSize, fontFamily, primary, height, width
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
            style={{
                paddingBottom, paddingTop, color, fontSize, fontFamily
            }}
            className="header"
            ref={stickyHeader}
        >
            <div
                style={{
                    color, fontSize, fontFamily
                }}
                className="header__logo"
            >
                <a href="#">
                    <svg
                        fill={{ color }}
                        style={{
                            height, width
                        }}
                    >
                        <use xlinkHref="#clower" />
                    </svg>
                </a>
            </div>
            <div
                style={{
                    color, fontSize
                }}
                className="header__title"
            >
                <span
                    style={{
                        color, fontSize, fontFamily
                    }}
                    className="header__title--italic"
                >
                    Lucky
                    {' '}

                </span>
                community blog
                <hr />
                <span
                    style={{
                        color, fontSize, fontFamily
                    }}
                    className="header__title-description"
                >
                    to notice, observe and enjoy...

                </span>
            </div>
            <div
                style={{
                    color
                }}
                className="header__nav"
            >
                <a href="#menu">
                    &#9776;
                </a>
            </div>
        </header>
    )
}
export default Header
