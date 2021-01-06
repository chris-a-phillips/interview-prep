import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import New from './components/New/New';
import Questions from './components/Questions/Questions';

function App() {
	const [category, setCategory] = useState('empty string');

	return (
		<div className='App'>
			<header>
				<Header category={category} setCategory={setCategory}/>
			</header>
			<main>
				<Route
					// exact
					path={'/questions'}
					render={
						() =>
							<Questions 
								category={category}
							/>
					}
				/>
				Wassup Planet
				<Route path='/new' exact component={New} />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
