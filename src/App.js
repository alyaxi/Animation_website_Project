import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './components/About';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/services" component={Services} exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact} exact/>
      
        <Route path="*" component={() => <h1>404 Error Not Found</h1>}/>
        </Switch>
    </div>
  )
}

export default App;
