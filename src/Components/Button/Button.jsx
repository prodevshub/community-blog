import React from 'react'
import './Button.scss'

const Button = ({
    className, onClick, children, ariaLabel
}) => (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>{children}</button>
)
export default Button
