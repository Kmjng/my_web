import React from "react";

const Header = () => {
    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="/">KMJNG<em>portfolio</em></a>
                </div>
                <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
                    <ul>
                        <li><a href="#intro">intro</a></li>
                        <li><a href="#resume">resume</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                    
                    </ul>
                </nav>
                <div 
                    className="header__nav__mobile" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded="false" 
                    role="button" 
                    tabIndex="0"
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;

const headerNav = [
    {
        title: "intro",
        url: "#intro",
    },
    {
        title: "resume",
        url: "#resume",
    },
    {
        title: "portfolio",
        url: "#port",
    },
    
];
