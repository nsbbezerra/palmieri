import React from 'react';
import './menu.css';
import { FaHome, FaTshirt, FaInfo, FaPhoneVolume, FaQuestion, FaTags } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { Link } from 'react-router-dom';

import icone from '../assets/icone.svg';
import logo from '../assets/logo.svg';

export default function Menu() {
    return (
        <nav className='menu'>
            <div className='menu-left'>
                <img alt='Palmieri Uniformes ícone' src={icone} className='menu-icone'/>
                <img alt='Palmieri Uniformes logo' src={logo} className='menu-logo'/>
            </div>
            <div className='menu-right'>
                <input type='checkbox' id='hamburger-menu'/>
                <label className='hamburger' for='hamburger-menu'><GiHamburgerMenu /></label>
                <ul className='app-menu'>
                    <li className='app-menu-items'><Link to='/' className='link'><FaHome style={{marginRight: 5}}/> INÍCIO</Link></li>
                    <li className='app-menu-items'><span className='link'><FaTags style={{marginRight: 5}}/> PRODUTOS</span>
                        <ul className='app-sub-menu'>
                            <li className='app-sub-menu-items'><Link to='/produtos' className='sub-link'><FaTshirt style={{marginRight: 5}}/> CAMISETAS POLO</Link></li>
                            <li className='app-sub-menu-items'><a href='/' className='sub-link'><FaTshirt style={{marginRight: 5}}/> UNIFORME CICLISMO</a></li>
                            <li className='app-sub-menu-items'><a href='/' className='sub-link'><FaTshirt style={{marginRight: 5}}/> UNIFORME FORMANDOS</a></li>
                            <li className='app-sub-menu-items'><a href='/' className='sub-link'><FaTshirt style={{marginRight: 5}}/> PRODUTOS PROMOCIONAIS</a></li>
                        </ul>
                    </li>
                    <li className='app-menu-items'><Link to='/quemsomos' className='link'><FaInfo style={{marginRight: 5}}/> SOBRE NÓS</Link></li>
                    <li className='app-menu-items'><a href='/' className='link'><FaPhoneVolume style={{marginRight: 5}}/> FALE CONOSCO</a></li>
                    <li className='app-menu-items'><Link to='/comofunciona' className='link'><FaQuestion style={{marginRight: 5}}/> COMO FUNCIONA</Link></li>
                </ul>
            </div>
        </nav>
    );
}