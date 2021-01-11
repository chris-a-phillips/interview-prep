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


	return (
		<div className='App'>
			<div className='content-container'>
				<header>
					<Header
						category={category}
						setCategory={setCategory}
						filter={filter}
						setFilter={setFilter}
					/>
				</header>
				<main>
					<Route
						// exact
						path={'/questions'}
						render={() => (
							<Questions category={category} filter={filter} />
						)}
					/>
					Wassup Planet
					<Route path='/new' exact component={New} />
				</main>
			</div>

			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
