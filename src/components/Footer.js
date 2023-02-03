import React from 'react';
import desc from '../data/desc.json'
import linkedinImg from '../assets/linkedin_white.svg'

function Footer() {
  return (
    <footer>
        <div className="social">
            <div className="connect">
                Connect with me on Social Media
            </div>
            <div className="social-links">
                    <a href={desc.linkedin} target="_blank" rel="noopener noreferrer">
                        <img className="social-img" src={linkedinImg} alt="LinkedIn icon"></img>
                    </a>
            </div>
            
        </div>
        <div className="copyright">Copyright © 2023 by Kayla Kinney Stockdale</div>
        
    </footer>
  )
}

export default Footer;
