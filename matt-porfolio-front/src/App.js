
import React from 'react';
import Router from './router/Router';
import './App.css';
import Show from './components/CRUD/Show';
import Projects from './components/Projects/Projects';
import Nav from './components/NavBar/Nav';
import About from './views/About/About';
import Home from './views/home/Home';
import AdminView from './views/AdminView/AdminView';




function App() {
  return (
    <div className="App">
      <Router />
    
    
    </div>
  );
}

export default App;
