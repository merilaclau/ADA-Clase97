import React from 'react';
import {Link} from 'react-router-dom';
import './MainHeader.scss';

const MainHeader = () => {
    return (
        <header>
            <h1>EPILEPSIA</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/partners">Partners</Link>
            </nav>
        </header>
    );
}

export default MainHeader;
