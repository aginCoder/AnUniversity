import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Nabar.css';
import logo from '../../Assets/logo.png';
import menu from '../../Assets/menu.png'

const Nabar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => setMobileMenu(prevState => !prevState);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img width="150px" src={logo} alt="Logo" />
            <ul className={mobileMenu ? 'active' : 'hide-mobile-menu'}>
                <li>
                    <Link to="hero" smooth={true} offset={0} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="program" smooth={true} offset={-260} duration={500}>
                        Program
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={-150} duration={500}>
                        About us
                    </Link>
                </li>
                <li>
                    <Link to="campus" smooth={true} offset={-260} duration={500}>
                        Campus
                    </Link>
                </li>
                <li>
                    <Link to="testimonials" smooth={true} offset={-260} duration={500}>
                        Testimonials
                    </Link>
                </li>
                <li>
                    <button className="btn">
                        <Link to="contact" smooth={true} offset={-260} duration={500}>
                            Contact Us
                        </Link>
                    </button>
                </li>
            </ul>
            <img src={menu} alt="" className="menu" onClick={toggleMenu} />
        </nav>
    );
};


export default Nabar;
