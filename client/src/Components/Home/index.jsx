import React from 'react';
import './index.css';
import Fade from "./slider/index";
import { BrowserRouter as Switch, Link } from 'react-router-dom';
//this was in browserRouter, leaving it here incase it may be needed in the future: 'Router, Route, Switch, Link'

class Home extends React.Component {
    render() {
        return (
            <div className="main">
            {/* main title of the home page */}
            <h1 id="title">Welcome to Story Gear</h1> 

            {/* shows hero */}
            <section className="hero">
                <div id="slogan">
                    <h2>Tell Us A Story.</h2>
                </div>
            </section>
          
            {/* shows the concept/slogan of the website */}
            <div className="concept">
                <p>Picture a story.</p> 
                <p>Capture it.</p> 
                <p>Do it again.</p>
                <p>Do it better.</p>
            </div> 

            {/* slider in a different component */}
            <Fade />

            {/* linked to the reviews component using routes */}
            <Link id="reviews" to='/reviews'>View Reviews!</Link>
            </div>
        );
    };
};

export default Home