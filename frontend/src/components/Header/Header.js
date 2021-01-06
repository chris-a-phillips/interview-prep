import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ category, setCategory }) => {

    console.log(category)
    return (
        <header>
            Header
                <Link to='/home'>Home</Link>
            <nav>
                <Link to='/questions' onClick={() => setCategory('frontend')}>Frontend</Link>
                <Link to='/questions' onClick={() => setCategory('backend')}>Backend</Link>
                <Link to='/questions' onClick={() => setCategory('whiteboard')}>Whiteboard</Link>
                <Link to='/questions' onClick={() => setCategory('behavioral')}>Behavioral</Link>
                <Link to='/questions' onClick={() => setCategory('code-challenge')}>Code Challenge</Link>
                <Link to='/new'>New</Link>
            </nav>
        </header>
    );
};

export default Header;