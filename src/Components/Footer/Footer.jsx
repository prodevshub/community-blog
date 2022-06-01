import React from 'react'
import './Footer.scss'

const Footer = () => (
    <footer className="footer">
        <div className="footer__main-box">
            <div className="footer__first-block">
                <h2>Lucky</h2>
                <h5>Community blog</h5>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, pariatur!</span>
            </div>
            <div className="footer__second-block">
                <h3>Follow us</h3>
            </div>
        </div>
        <div className="footer__copyright">
            <span>
                Copyright ©
                {' '}
                { new Date().getUTCFullYear() }
                {' '}
                Lucky community blog. All Rights Reserved
            </span>
        </div>
    </footer>
)
export default Footer
