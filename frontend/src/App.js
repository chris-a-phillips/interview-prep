import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Frontend from './components/Frontend/Frontend';
import Backend from './components/Backend/Backend';
import Whiteboard from './components/Whiteboard/Whiteboard';
import New from './components/New/New';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
      Wassup Planet
      <Route 
      path='/whiteboard'
      exact component={Whiteboard}
      />
      <Route 
      path='/frontend'
      exact component={Frontend}
      />
      <Route 
      path='/backend'
      exact component={Backend}
      />
      <Route 
      path='/new'
      exact component={New}
      />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
