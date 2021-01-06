import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Frontend from './components/Frontend/Frontend';
// import Backend from './components/Backend/Backend';
// import Whiteboard from './components/Whiteboard/Whiteboard';
import New from './components/New/New';
// import CodeChallenge from './components/CodeChallenge/CodeChallenge';
// import Behavioral from './components/Behavioral/Behavioral';
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
				{/* <Route path='/whiteboard' exact component={Whiteboard} /> */}
				<Route path='/new' exact component={New} />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
