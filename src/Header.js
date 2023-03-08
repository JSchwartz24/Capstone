import React from 'react'
import {ReactComponent as ReactLogo} from './img/Logo.svg';

import Nav from './Nav.js';

function Header(){
    return(
        <header>
            <ReactLogo/>
            <Nav/>
        </header>
    )
}

export default Header;