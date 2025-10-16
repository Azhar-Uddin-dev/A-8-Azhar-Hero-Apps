import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo-D9NHcesw 1.png';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded-xl mt-10 p-10">
            <div className="footer sm:footer-horizontal bg-black text-white p-10">
                <aside>
                    <Link to='/' className="flex items-center font-bold text-[#632EE3] text-xl"><span><img src={logo} alt="" /></span>HERO.IO</Link>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
               
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            
        </footer>
    );
};

export default Footer;