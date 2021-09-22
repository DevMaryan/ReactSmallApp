import React from 'react';
import {Link} from 'react-router-dom';
import '../css/nav.css';

export function Nav(){
    return(
        <ul className = 'navul'>
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/date'>Date</Link></li>
            <li><Link to = '/about'>About</Link></li>
            <li><Link to = '/contact'>Contact </Link></li>
        </ul>
    )
}