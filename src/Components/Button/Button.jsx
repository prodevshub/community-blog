import React from 'react'
import './Button.scss'

const Button = ({
    className = 'cust-btn cust-btn-primary', onClick = null, children = 'I am button', ariaLabel = 'I am button'
}) => (
    <button className={className} onClick={onClick} aria-label={ariaLabel}>{children}</button>
)
export default Button
