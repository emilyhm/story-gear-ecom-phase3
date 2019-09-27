import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Products from './Components/Products/index';
import Home from './Components/Home/index';
import Contact from './Components/Contact/index';
import Footer from "./Components/Footer/index";

class App extends React.Component 
{
  render() 
  {
    return (
      <div className="main">
        <Router>
          <div className="both">
            <div className="logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Film_strip.svg/1115px-Film_strip.svg.png"
              width="30" height="30" alt="black and white film strip with brand name"/>
              <p>Story Gear</p>
            </div>
            <div id="nav">
              <Link id="home" to="/">Home</Link> {' '}
              <Link id="other-links" to='/products' >Products</Link> {' '}
              <Link id="other-links" to='/Contact'>Say Hello!</Link> {' '}
            </div> 
          </div>
            
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/products" component={Products}/>
              <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>

        <Footer/>
          
      </div>
    );
  }
}

export default App;
