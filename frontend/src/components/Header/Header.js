import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ category, setCategory, filter, setFilter }) => {
	const handleClick = (choice) => {
		setCategory(choice);
		if (choice !== 'all') {
			setFilter('category');
		}
	};

	return (
		<header className='Header'>
			<Link className='links' id='home' to='/'>
				IT Home
			</Link>
			<nav id='navbar'>
				<ul id='list'>
					<li>
						<Link
							className='links'
							to='/questions/all'
							onClick={() => handleClick('all')}>
							All
						</Link>
					</li>
					<li>
						<Link
							className='links'
							to='/questions/frontend'
							onClick={() => handleClick('frontend')}>
							Frontend
						</Link>
					</li>
					<li>
						<Link
							className='links'
							to='/questions/backend'
							onClick={() => handleClick('backend')}>
							Backend
						</Link>
					</li>
					<li>
						<Link
							className='links'
							to='/questions/whiteboard'
							onClick={() => handleClick('whiteboard')}>
							Whiteboard
						</Link>
					</li>
					<li>
						<Link
							className='links'
							to='/questions/behavioral'
							onClick={() => handleClick('behavioral')}>
							Behavioral
						</Link>
					</li>
					<li>
						<Link
							className='links'
							to='/questions/code-challenge'
							onClick={() => handleClick('code-challenge')}>
							Code Challenge
						</Link>
					</li>
					<li>
						<Link className='links' to='/new'>
							New
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
