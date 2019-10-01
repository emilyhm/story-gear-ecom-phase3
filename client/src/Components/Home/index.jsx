import React from 'react';
import './index.css';
import Fade from "./slider/index";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="main">
    
            <h1 id="title">Welcome to Story Gear</h1> 
        
            <section className="hero">
                <div id="slogan">
                    <h2>Tell Us A Story.</h2>
                </div>
              </section>
          
             <div className="concept">
                <p>Picture a story.</p> 
                <p>Capture it.</p> 
                <p>Do it again.</p>
                <p>Do it better.</p>
              </div> 

            <Fade />

            <Link id="reviews" to='/reviews'>View Reviews!</Link>

            </div>
        )
    }
}

export default Home