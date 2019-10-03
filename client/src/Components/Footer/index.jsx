import React from 'react';

const Footer = () => {
return (
    <footer className="footer">
      {/* shows logo shown on the left side of the footer */}
        <div className="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Film_strip.svg/1115px-Film_strip.svg.png"
              width="30" height="30" className="d-inline-block align-top" alt="black and white film strip with brand name"/>
            <p>Story Gear</p>
        </div>
          
        {/* shows copyright and last updated date*/}
        <div className="copyright">
          <p>&copy; Emily Hernandez-Mendez</p>
          <p>Last Updated: Oct. 3rd 2019</p>
          </div>
        
       {/* shows the social media links displayed to the right side of footer */}
       <div className="social"> 
         <ul>
          <li><a href="https://www.instagram.com/">
                <i className="fab fa-instagram"> Instagram</i>
              </a>
          </li> 
          <li>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter"> Twitter </i>
            </a>
           </li>
          <li>
            <a href="https://www.youtube.com/">
              <i className="fab fa-youtube"> YouTube</i>
            </a>
            </li>
         </ul>
       </div>
      </footer>
    );
};

export default Footer;