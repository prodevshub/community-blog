import React from 'react'
import './Button.scss'

const Button = ({ className, onClick, children }) => (
    <button className={className} onClick={onClick}>{children}</button>
)
export default Button
