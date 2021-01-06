import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ category, setCategory, filter, setFilter }) => {

    const handleClick = (choice) => {
        setCategory(choice);
        if (choice !== 'all') {
            setFilter('category');
        }
        console.log(filter)
    }

    console.log(category)

    return (
        <header>
            Header
                <Link to='/'>Home</Link>
            <nav>
                <Link to='/questions' onClick={() => handleClick('all')}>All</Link>
                <Link to='/questions' onClick={() => handleClick('frontend')}>Frontend</Link>
                <Link to='/questions' onClick={() => handleClick('backend')}>Backend</Link>
                <Link to='/questions' onClick={() => handleClick('whiteboard')}>Whiteboard</Link>
                <Link to='/questions' onClick={() => handleClick('behavioral')}>Behavioral</Link>
                <Link to='/questions' onClick={() => handleClick('code-challenge')}>Code Challenge</Link>
                <Link to='/new'>New</Link>
            </nav>
        </header>
    );
};

export default Header;