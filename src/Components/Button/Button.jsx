// Use this https://getbootstrap.com/docs/4.3/components/buttons/ and add prefix "modal-" for style names
import React from 'react'
import './Button.scss'

const Button = ({ className, onClick, children }) => (
    <button className={className} onClick={onClick}>{children}</button>
)
export default Button
