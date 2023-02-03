
import React from 'react';
import Router from './router/Router';
import './App.css';
import Show from './components/CRUD/Show';
import Projects from './components/Projects/Projects';
import Nav from './components/NavBar/Nav';




function App() {
  return (
    <div className="App">
    <Nav />
    
      <Router />
    </div>
  );
}

export default App;
