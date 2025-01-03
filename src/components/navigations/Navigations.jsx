import React from 'react';
import { Link } from 'react-router-dom'
import navig from './Navigations.module.css'

const Navigations = () => {
    return (
        <nav className={navig.navig}>
            <Link className={navig.link} to='/scan'>Scan QR</Link>
            <Link className={navig.link} to='/generate'>Generate QR</Link>
            <Link className={navig.link} to='/historyScan'>History of Scan</Link>
            <Link className={navig.link} to='/historyGen'>History of Generate</Link>
        </nav>
    );
}

export default Navigations;
