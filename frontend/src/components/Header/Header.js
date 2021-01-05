import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            Header
                <Link to='/home'>Home</Link>
            <nav>
                <Link to='/frontend'>Frontend</Link>
                <Link to='/backend'>Backend</Link>
                <Link to='/whiteboard'>Whiteboard</Link>
                <Link to='/new'>New</Link>
            </nav>
        </header>
    );
};

export default Header;