import React from 'react';
import './index.css';
import Fade from "./slider/index";

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
                <p>Express your ideas with the best products out there. Tell the world what goes on in your head. </p>
                <p>Picture a story.</p> 
                <p>Capture it.</p> 
                <p>Do it again. Do it better.</p>
              </div> 

            <Fade />

            </div>
        )
    }
}

export default Home