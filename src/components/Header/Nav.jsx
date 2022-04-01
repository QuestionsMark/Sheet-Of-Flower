import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logoImg from '../../media/images/logo.png';

const Nav = () => {

    const menuRef = useRef();

    const toggleMenu = () => {
        menuRef.current.classList.toggle('active');
    };

    const hideMenu = () => {
        menuRef.current.classList.remove('active');
    };

    return ( 
        <nav className="menu">
            <Link to="/" className="menu__brand-title">
                {/* <div className="img-wrapper menu__img-wrapper">
                    <img src={logoImg} alt="logo" className="img" />
                </div> */}
                <h1 style={{ textAlign: 'center' }}>LOGO</h1>
            </Link>
            <FontAwesomeIcon icon="fa-solid fa-bars" className="menu__bar-icon" onClick={toggleMenu}/>
            <ul className="menu__list" ref={menuRef}>
                <li className="menu__item">
                    <NavLink to="/" end className="menu__link" onClick={hideMenu}>O nas</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/news" className="menu__link" onClick={hideMenu}>Nowości</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/pictures" className="menu__link" onClick={hideMenu}>Obrazy</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/cards" className="menu__link" onClick={hideMenu}>Kartki</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/products" className="menu__link" onClick={hideMenu}>Produkty</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/contact" className="menu__link" onClick={hideMenu}>Kontakt</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Nav;