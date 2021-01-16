import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import New from './components/New/New';
import Questions from './components/Questions/Questions';

function App() {
	const [category, setCategory] = useState('empty category');
	const [filter, setFilter] = useState('empty filter');
	const [search, setSearch] = useState();

	return (
		<div className='App'>
			<div className='content-container'>
				<header className='header-container'>
					<Header
						category={category}
						setCategory={setCategory}
						filter={filter}
						setFilter={setFilter}
					/>
				</header>
				<main className='page-container'>
					<div className='searchbar-container'>
						<h1>Search Bar</h1>
						<input type='text'></input>
						random question
					</div>
					<div className='main-container'>
						<Route
							// exact
							path={'/questions'}
							render={() => (
								<Questions
									category={category}
									filter={filter}
								/>
							)}
						/>
						<Route path='/new' exact component={New} />
					</div>
				</main>
			</div>
			<footer className='footer'>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
