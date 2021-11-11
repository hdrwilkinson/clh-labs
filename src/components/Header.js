import React from 'react'

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <img src="./logo.png" alt="" />
                        <h1><span>CLH</span> Labs</h1>
                    </a>
                </div>
                <div className="social">
                    <div className="link">
                        <a target="_blank" href="https://telegram.me/chazza1061">
                            <i class="fab fa-telegram-plane"></i>
                        </a>
                    </div>
                    <div className="link">
                        <a target="_blank" href="mailto:hello@clhlabs.io">
                            <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
